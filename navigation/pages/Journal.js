<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import DreamList from './components/DreamList/DreamList';
import { Header, Left, Right, Body, Title, Text, List, ListItem, Container, Content, Button } from 'native-base';

import DreamModal from './components/DreamList/DreamModal/DreamModal';

import { SQLite } from 'expo';

const db = SQLite.openDatabase('dreams.db');

class Journal extends Component {

    state = {
        dreams: [],
        selectedDream: null,
    };

    // Tee tästä oma funktio
    componentDidMount =  () => {
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
    };

    listDreams = () => {
        db.transaction(tx => {
            tx.executeSql('select * from dream', null, this.success, this.error);
        });
    };

    success = (tx, results) => {
        this.setState({ dreams : results.rows._array });
    };

    error = (tx, error) => {
        alert('Could not list your dreams' + error);
    };

    // Valitsee unien listasta klikattavan unen. State muuttuu ja modaalin avaava selectedDream valitaan.
    dreamSelectedHandler = key => {
        this.setState(prevState => {
          return {
            selectedDream: prevState.dreams.find(dream => {
              return dream.id === key;
            }),
          };
        });
    };

    removeError = () => {
        alert('Sorry! Could not remove this dream');
    };

    closeModalHandler = () => {
        this.setState({
            selectedDream: null,
        });
    };

    // Ainakaan button EI käytössä valmiissa versiossa
    deleteAllHandler = () => {
        db.transaction(tx => {
            let sql =
            'DELETE FROM dream';
            tx.executeSql(sql);     
        });
    }

    removeDreamHandler = (id) => {
        db.transaction(tx => {
            let sql =
            'DELETE FROM dream WHERE id = ?';
            tx.executeSql( sql, [id] );
        });
        this.setState({
            selectedDream: null,
        });
    };

    // Jostain syystä event.update.handler ei toimi. Pitkään ratkaisua etsittyäni en sitä löytänyt, joten jätän tämän nyt näin.
    // Voisiko vika olla siinä, että selectedDream haetaan unien listasta, joka myös määritelty stateen.
    dreamUpdateHandler = (event) => {
        this.setState({
            selectedDream: {
                id: this.state.selectedDream.id,
                name: this.state.selectedDream.name,
                dreamsign: this.state.selectedDream.dreamsign,
                description: event.target.value,            
            },
        });

    //     alert(event.target.value);

    //     // db.transaction(tx => {
    //     //     let sql =
    //     //     'UPDATE dream SET id = ?, name = ?, dreamsign = ?, description = ?'
    //     //     // 'DELETE FROM dream WHERE id = ?';
    //     //     tx.executeSql( sql,
    //     //         [
    //     //             this.state.selectedDream.id,
    //     //             this.state.selectedDream.name,
    //     //             this.state.selectedDream.dreamsign,
    //     //             this.state.selectedDream.description,
    //     //         ]);
    //     // });

    //     // this.setState({
    //     //     selectedDream: null,
    //     // });

    };

    getLength = () => {
        alert(this.state.dreams.length);
    }

    render() {

        this.listDreams();
        if (this.state.dreams.length === 0) {
          return (
            <Container style={styles.dreamList}>
                <Content>
                    <Text>You have not written down any dreams.</Text>
                </Content>
            </Container>
          )
        }
        
        return (

            <ImageBackground source={require('../../assets/moon.jpg')} style={styles.background}>

            <View style={styles.container}>

                <DreamModal
                    selectedDream={this.state.selectedDream}
                    closeModal={this.closeModalHandler}
                    removeDream={this.removeDreamHandler}
                    updateDream={this.dreamUpdateHandler}
                /> 

                <DreamList
                    dreams={this.state.dreams}
                    style={styles.dreamList}
                    onDreamSelected={this.dreamSelectedHandler}/>

                {/* <Button
                    onPress={this.deleteAllHandler}>
                    <Text>Delete</Text>
                </Button> */}
            </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
    },
    dreamList: {
        padding: 25,
    },
});

=======
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import DreamList from './components/DreamList/DreamList';
import { Header, Left, Right, Body, Title, Text, List, ListItem, Container, Content, Button } from 'native-base';

import DreamModal from './components/DreamList/DreamModal/DreamModal';

import { SQLite } from 'expo';

const db = SQLite.openDatabase('dreams.db');

class Journal extends Component {

    state = {
        dreams: [],
        selectedDream: null,
    };

    // Tee tästä oma funktio
    componentDidMount =  () => {
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
    };

    listDreams = () => {
        db.transaction(tx => {
            tx.executeSql('select * from dream', null, this.success, this.error);
        });
    };

    success = (tx, results) => {
        this.setState({ dreams : results.rows._array });
    };

    error = (tx, error) => {
        alert('Could not list your dreams' + error);
    };

    // Valitsee unien listasta klikattavan unen. State muuttuu ja modaalin avaava selectedDream valitaan.
    dreamSelectedHandler = key => {
        this.setState(prevState => {
          return {
            selectedDream: prevState.dreams.find(dream => {
              return dream.id === key;
            }),
          };
        });
    };

    removeError = () => {
        alert('Sorry! Could not remove this dream');
    };

    closeModalHandler = () => {
        this.setState({
            selectedDream: null,
        });
    };

    // Ainakaan button EI käytössä valmiissa versiossa
    deleteAllHandler = () => {
        db.transaction(tx => {
            let sql =
            'DELETE FROM dream';
            tx.executeSql(sql);     
        });
    }

    removeDreamHandler = (id) => {
        db.transaction(tx => {
            let sql =
            'DELETE FROM dream WHERE id = ?';
            tx.executeSql( sql, [id] );
        });
        this.setState({
            selectedDream: null,
        });
    };

    // Jostain syystä event.update.handler ei toimi. Pitkään ratkaisua etsittyäni en sitä löytänyt, joten jätän tämän nyt näin.
    // Voisiko vika olla siinä, että selectedDream haetaan unien listasta, joka myös määritelty stateen.
    dreamUpdateHandler = (event) => {
        this.setState({
            selectedDream: {
                id: this.state.selectedDream.id,
                name: this.state.selectedDream.name,
                dreamsign: this.state.selectedDream.dreamsign,
                description: event.target.value,            
            },
        });

    //     alert(event.target.value);

    //     // db.transaction(tx => {
    //     //     let sql =
    //     //     'UPDATE dream SET id = ?, name = ?, dreamsign = ?, description = ?'
    //     //     // 'DELETE FROM dream WHERE id = ?';
    //     //     tx.executeSql( sql,
    //     //         [
    //     //             this.state.selectedDream.id,
    //     //             this.state.selectedDream.name,
    //     //             this.state.selectedDream.dreamsign,
    //     //             this.state.selectedDream.description,
    //     //         ]);
    //     // });

    //     // this.setState({
    //     //     selectedDream: null,
    //     // });

    };

    getLength = () => {
        alert(this.state.dreams.length);
    }

    render() {

        this.listDreams();
        if (this.state.dreams.length === 0) {
          return (
            <Container style={styles.dreamList}>
                <Content>
                    <Text>You have not written down any dreams.</Text>
                </Content>
            </Container>
          )
        }
        
        return (

            <ImageBackground source={require('../../assets/moon.jpg')} style={styles.background}>

            <View style={styles.container}>

                <DreamModal
                    selectedDream={this.state.selectedDream}
                    closeModal={this.closeModalHandler}
                    removeDream={this.removeDreamHandler}
                    updateDream={this.dreamUpdateHandler}
                /> 

                <DreamList
                    dreams={this.state.dreams}
                    style={styles.dreamList}
                    onDreamSelected={this.dreamSelectedHandler}/>

                {/* <Button
                    onPress={this.deleteAllHandler}>
                    <Text>Delete</Text>
                </Button> */}
            </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
    },
    dreamList: {
        padding: 25,
    },
});

>>>>>>> af871cc0dc0309881efbb36aa83df4b85bda31c7
export default Journal;