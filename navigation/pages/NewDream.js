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


=======
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Left, Right, Body, Title } from 'native-base';

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


>>>>>>> af871cc0dc0309881efbb36aa83df4b85bda31c7
export default NewDream;