import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Left, Right, Body, Title, Button } from 'native-base';

import  { MapView, SQLite } from 'expo';

const db = SQLite.openDatabase('dreams.db');

class DreamStatistics extends Component {

    state = {
        dreams: [],
    }

    // Tee ComponentDidMountista oma funktio
    componentDidMount = () => {
        db.transaction(tx => {
            let sql =
                'CREATE TABLE if not exists dream (' +
                'id integer PRIMARY KEY NOT NULL, ' +
                'name text NOT NULL, ' +
                'date text NOT NULL, ' +
                'location text, ' +
                'longitude text, ' +
                'latitude text, ' +
                'dreamsign text, ' +
                'description text )';
            tx.executeSql(sql);
        });
        this.sqlHandler();
    };

    sqlHandler = () => {
        db.transaction(tx => {
            tx.executeSql('select * from dream', null, this.success, this.error);
        });
    };

    success = (tx, results) => {
        this.setState({
            dreams : results.rows._array
        });
    };

    Refresh = () => {
        this.setState({
            dreams: []
        });
        this.sqlHandler();
    };

    error = (tx, error) => {
        alert('Could not list your dreams' + error);
    };

    render() {
        return (
            
            <View style={styles.container}>

                <Header>
                    <Left/>
                    <Body>
                        <View style={styles.statisticsWindow}>
                        <Button onPress={this.Refresh} style={styles.refreshButton}>
                            <Text>Refresh</Text>
                        </Button>
                        </View>      

                    </Body>
                    <Right />
                </Header>

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                    latitude: 37.78825,
                    latitude: 60.18972,
                    longitude: 24.91617,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}>

                    {this.state.dreams.map(dream => {
                        return (
                            <MapView.Marker
                                key={dream.id}
                                coordinate={{longitude: parseFloat(dream.longitude), latitude: parseFloat(dream.latitude)}}
                                title={dream.name}
                                description={
                                    "I dreamed about " + 
                                    dream.dreamsign + ". " +
                                    "(" + dream.date + ")"
                                }
                            />
                        )
                    })}

                </MapView>       

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dreamStatistics: {
        padding: 25,
    },
    refreshButton: {
        backgroundColor: 'transparent',
    },
    statisticsWindow: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    }
});

=======
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Left, Right, Body, Title, Button } from 'native-base';

import  { MapView, SQLite } from 'expo';

const db = SQLite.openDatabase('dreams.db');

class DreamStatistics extends Component {

    state = {
        dreams: [],
    }

    // Tee ComponentDidMountista oma funktio
    componentDidMount = () => {
        db.transaction(tx => {
            let sql =
                'CREATE TABLE if not exists dream (' +
                'id integer PRIMARY KEY NOT NULL, ' +
                'name text NOT NULL, ' +
                'date text NOT NULL, ' +
                'location text, ' +
                'longitude text, ' +
                'latitude text, ' +
                'dreamsign text, ' +
                'description text )';
            tx.executeSql(sql);
        });
        this.sqlHandler();
    };

    sqlHandler = () => {
        db.transaction(tx => {
            tx.executeSql('select * from dream', null, this.success, this.error);
        });
    };

    success = (tx, results) => {
        this.setState({
            dreams : results.rows._array
        });
    };

    Refresh = () => {
        this.setState({
            dreams: []
        });
        this.sqlHandler();
    };

    error = (tx, error) => {
        alert('Could not list your dreams' + error);
    };

    render() {
        return (
            
            <View style={styles.container}>

                <Header>
                    <Left/>
                    <Body>
                        <View style={styles.statisticsWindow}>
                        <Button onPress={this.Refresh} style={styles.refreshButton}>
                            <Text>Refresh</Text>
                        </Button>
                        </View>      

                    </Body>
                    <Right />
                </Header>

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                    latitude: 37.78825,
                    latitude: 60.18972,
                    longitude: 24.91617,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}>

                    {this.state.dreams.map(dream => {
                        return (
                            <MapView.Marker
                                key={dream.id}
                                coordinate={{longitude: parseFloat(dream.longitude), latitude: parseFloat(dream.latitude)}}
                                title={dream.name}
                                description={
                                    "I dreamed about " + 
                                    dream.dreamsign + ". " +
                                    "(" + dream.date + ")"
                                }
                            />
                        )
                    })}

                </MapView>       

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dreamStatistics: {
        padding: 25,
    },
    refreshButton: {
        backgroundColor: 'transparent',
    },
    statisticsWindow: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    }
});

>>>>>>> af871cc0dc0309881efbb36aa83df4b85bda31c7
export default DreamStatistics;