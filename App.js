import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Navigation style={styles.navigation} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
