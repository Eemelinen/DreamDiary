<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";


const listItem = ( props ) => (
  <TouchableWithoutFeedback onPress={props.onDreamPressed}>
    <View style={styles.listItem}>

      <Text style={styles.name}>{props.name}</Text>

      <Text style={styles.dreamsign}>{props.dreamsign}</Text>
      <Text style={styles.date}>{props.date}</Text>

    </View>
  </TouchableWithoutFeedback>

);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    alignSelf: 'center',
    alignItems: 'center',
    width: "80%",
    marginBottom: 5,
    padding: 15,
  },
  name: {
    color: 'salmon',
    fontSize: 20,
    borderColor: 'grey',
  },
  dreamsign: {
    color: 'white',
    padding: 3,
  },
  date: {
    color: '#DBD7CF',
  }
});

=======
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";


const listItem = ( props ) => (
  <TouchableWithoutFeedback onPress={props.onDreamPressed}>
    <View style={styles.listItem}>

      <Text style={styles.name}>{props.name}</Text>

      <Text style={styles.dreamsign}>{props.dreamsign}</Text>
      <Text style={styles.date}>{props.date}</Text>

    </View>
  </TouchableWithoutFeedback>

);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    alignSelf: 'center',
    alignItems: 'center',
    width: "80%",
    marginBottom: 5,
    padding: 15,
  },
  name: {
    color: 'salmon',
    fontSize: 20,
    borderColor: 'grey',
  },
  dreamsign: {
    color: 'white',
    padding: 3,
  },
  date: {
    color: '#DBD7CF',
  }
});

>>>>>>> af871cc0dc0309881efbb36aa83df4b85bda31c7
export default listItem;