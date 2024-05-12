import * as React from 'react';
import {Card, Text, Button, Portal} from 'react-native-paper';
import {Modal, View, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const NewsCard = ({title, content, link}: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <Card onPress={() => setModalVisible(true)}>
        <Card.Content>
          <Text variant="titleLarge">{title}</Text>
          <Text variant="bodyMedium">{content}</Text>
        </Card.Content>
      </Card>
      <Portal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <WebView source={{uri: link}} />
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                mode="contained"
                style={styles.button}>
                Kapat
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '95%',
    height: '85%',
  },
  button: {
    margin: 10,
  },
});

export default NewsCard;
