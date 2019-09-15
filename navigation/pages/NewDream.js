import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import NewDreamForm from './components/NewDreamForm/NewDreamForm';

class NewDream extends Component {

    render() {
        return (
            <View style={styles.container}>
                <NewDreamForm style={styles.dreamForm} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dreamForm: {
        padding: 25,
    }
});

export default NewDream;