import React from 'react';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import NewsCard from './components/NewsCard';
import getNews from './data/kayuduyuru';
import type {News} from './data/kayuduyuru';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  const [news, setNews] = React.useState<News[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState('ogrenci');
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    getNews(selectedCategory).then(data => {
      setLoading(false);
      return setNews(data || []);
    });
  }, [selectedCategory]);
  const seperator = () => <View style={styles.seperator} />;
  return (
    <SafeAreaView>
      <Header />
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        loading={loading}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={news}
          renderItem={({item}: {item: News}) => (
            <NewsCard
              title={item.title}
              content={item.description}
              link={item.link}
            />
          )}
          keyExtractor={item => item.title + item.date}
          ItemSeparatorComponent={seperator}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  listContainer: {
    height: '85%',
  },
  seperator: {
    height: 10,
  },
});
