import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

type Category = {
  name: string;
  id: string;
};

interface NavbarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  loading: boolean;
}

const categories = [
  {name: 'Öğrenci', id: 'ogrenci'},
  {name: 'MMTF', id: 'mmtf'},
  {name: 'Yazılım', id: 'ym'},
  {name: 'Bilgisayar', id: 'bm'},
  {name: 'Spor Kültür', id: 'sksd'},
] as Category[];

const Navbar: React.FC<NavbarProps> = ({
  selectedCategory,
  setSelectedCategory,
  loading,
}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({item}) => (
        <Button
          onPress={() => {
            setSelectedCategory(item.id);
            console.log(item.id);
          }}
          style={styles.button}
          mode={item.id === selectedCategory ? 'contained' : 'outlined'}
          loading={loading && item.id === selectedCategory}
          key={item.id}>
          {item.name}
        </Button>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.navbar}
    />
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navbar;
