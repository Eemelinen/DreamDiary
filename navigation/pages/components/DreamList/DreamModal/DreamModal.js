import React from 'react';
import { Modal, View, Button, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';

import { Constants } from 'expo';

const dreamModal = props => {
  let modalContent = null;

  if (props.selectedDream) {

    modalContent = (

      <ImageBackground source={require('../../../../../assets/moon.jpg')} style={styles.background}>

      <View style={styles.container}>
        
        <Text style={styles.name}>
          {props.selectedDream.name}
        </Text>
        
        <Text style={styles.dreamsign}>
          {props.selectedDream.dreamsign}
        </Text>

        <TextInput
          multiline={true}
          numberOfLines={10}
          editable={true}
          style={styles.description}
          value={props.selectedDream.description}
          onChangeText={props.updateDream}>
        </TextInput>

        <Text style={styles.date}>
          {props.selectedDream.date}
        </Text>

        <Text style={styles.location}>
          {props.selectedDream.location}
        </Text>

        <Button
            title="Close"
            onPress={props.closeModal}
            style={styles.button}/>
        <Button
            title="Remove"
            color="#D9534F"
            onPress={() => props.removeDream(props.selectedDream.id)}>
        </Button>

    </View>

    </ImageBackground>
    );
  }

  return (
    <Modal visible={props.selectedDream !== null} animationType="fade">
      <View>
        {modalContent}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
},
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  name: {
    margin: 20,
    fontSize: 40,
    color: '#DBD7CF',

  },
  dreamsign: {
    color: 'salmon',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,

  },
  date: {
    color: '#DBD7CF',
  },
  location: {
    color: '#DBD7CF',
    marginBottom: 20,
  },
  description: {
    margin: 10,
    fontSize: 15,
    color: 'white',
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default dreamModal;