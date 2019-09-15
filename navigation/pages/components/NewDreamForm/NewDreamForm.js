<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Textarea, Left, Body, Right, Title } from 'native-base';
import { SQLite, Permissions, Location } from 'expo';

const db = SQLite.openDatabase('dreams.db');

class NewDreamForm extends Component {
    
    state = {
        name: '',
        dreamsign: '',
        description: '',
        location: '',
        longitude: '',
        latitude: '',
    };

    // Tallennetaan myös longitude ja latitude tietokantaan. Haetaan ne kaikki karttaan unilokaatioiksi.
    // Tähän olisi kiva saada katuosoite eikä kaupunki.
    componentDidMount = async() => {
        let prmsn = await Permissions.askAsync(Permissions.LOCATION);
        if (prmsn.status === 'granted') {
            let location = await Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
            });
            let dreamLocation = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };

            let place = await Location.reverseGeocodeAsync(dreamLocation);
            // let address = findPlace[0].address;

            this.setState({
                location: place[0].city,
                longitude: dreamLocation.longitude,
                latitude: dreamLocation.latitude,
            });
        };
    };

    nameChangedHandler = val => {
        this.setState({
          name: val,
        });
    };
    
    dreamsignChangedHandler = val => {
        this.setState({
          dreamsign: val,
        });
    };
    
    descriptionChangedHandler = val => {
        this.setState({
            description: val,
        });
    };

    createDate = () => {
        let dateCreator = new Date();
        let month = dateCreator.getMonth() + 1;
        let day = dateCreator.getDate();
        let year = dateCreator.getFullYear();

        let hour = 0;

        if (dateCreator.getHours() < 10) {
            hour = dateCreator.getHours();
            let parsedHour = hour.toString();
            let zeroAdded = "0" + parsedHour;
            hour = zeroAdded;
        } else {
            hour = dateCreator.getHours();
        }

        let minute = 0;

        if (dateCreator.getMinutes() < 10) {
            minute = dateCreator.getMinutes();
            let parsedMinute = minute.toString();
            let zeroAdded = "0" + parsedMinute;
            minute = zeroAdded;
        } else {
            minute = dateCreator.getMinutes();
        }

        let date = day + '.' + month + '.' + year + ' at ' + hour + '.' + minute;
        return date; 
    };

    createSqlTable = () => {
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
            tx.executeSql(sql, null, this.DreamSubmitHandler, this.error);
        });
    };

    DreamSubmitHandler = () => {
        db.transaction(tx => {
                let sql =
                'Insert INTO dream (name, date, location, longitude, latitude, dreamsign, description) VALUES (?, ?, ?, ?, ?, ?, ?)';
            tx.executeSql(
                sql,
                [
                    this.state.name,
                    this.createDate(),
                    this.state.location,
                    this.state.longitude,
                    this.state.latitude,
                    this.state.dreamsign,
                    this.state.description,
                ],
                this.success,
                this.error
            );
        })
    };

    // success = () => {
    //     this.setState({
    //         name: '',
    //         dreamsign: '',
    //         description: '',
    //         longitude: '',
    //         latitude: '',
    //     });
    // };

    error = () => {
        alert("There was an error")
    };

    dropTable = () => {
        db.transaction(tx => {
            let sql = 'DROP Table dream';
            tx.executeSql( sql );
        });
    };

  render() {
    return (

        <ImageBackground source={require('../../../../assets/moon.jpg')} style={styles.background}>

            <Label style={styles.heading}>New Dream</Label>

            <Form>

                <View style={styles.nameAndSignContainer}>
                    <Item floatingLabel>
                        <Label>Name the dream:</Label>
                        <Input
                            value={this.state.name}
                            onChangeText={this.nameChangedHandler}
                            style={styles.dreamName}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Dreamsigns:</Label>
                        <Input
                            onChangeText={this.dreamsignChangedHandler}
                            value={this.state.dreamsign}
                            style={styles.dreamName}
                        />  
                    </Item>
                </View>

                <Label style={styles.description}>Describe your dream:</Label>

                <Textarea
                    style={styles.textarea}
                    rowSpan={20}
                    bordered placeholder="Unicorns and fairies..."
                    onChangeText={this.descriptionChangedHandler}
                    value={this.state.description} />

                <Button transparent light
                    style={styles.button}
                    onPress={this.createSqlTable}>
                    <Text>Submit</Text>
                </Button>

            </Form>

        </ImageBackground>

    );
  };
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    heading: {
        color: '#DBD7CF',
        marginTop: 50,
        marginLeft: 13,
        fontSize: 40,
        borderBottomWidth: 3,
        borderColor: 'lightgrey',
    },
    nameAndSignContainer: {
        width: '50%',
    },
    description: {
        color: '#DBD7CF',
        marginTop: 30,
        marginLeft: 15,
        fontSize: 20,
    },
    dreamName: {
        color: '#DBD7CF',
        width: '50%',

    },
    textarea: {
        marginTop: 20,
        margin: 15,
        paddingTop: 20,
        color: '#DBD7CF',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        fontSize: 17,
    },
    button: {
        margin: 10,
    },
});

=======
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Textarea, Left, Body, Right, Title } from 'native-base';
import { SQLite, Permissions, Location } from 'expo';

const db = SQLite.openDatabase('dreams.db');

class NewDreamForm extends Component {
    
    state = {
        name: '',
        dreamsign: '',
        description: '',
        location: '',
        longitude: '',
        latitude: '',
    };

    // Tallennetaan myös longitude ja latitude tietokantaan. Haetaan ne kaikki karttaan unilokaatioiksi.
    // Tähän olisi kiva saada katuosoite eikä kaupunki.
    componentDidMount = async() => {
        let prmsn = await Permissions.askAsync(Permissions.LOCATION);
        if (prmsn.status === 'granted') {
            let location = await Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
            });
            let dreamLocation = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };

            let place = await Location.reverseGeocodeAsync(dreamLocation);
            // let address = findPlace[0].address;

            this.setState({
                location: place[0].city,
                longitude: dreamLocation.longitude,
                latitude: dreamLocation.latitude,
            });
        };
    };

    nameChangedHandler = val => {
        this.setState({
          name: val,
        });
    };
    
    dreamsignChangedHandler = val => {
        this.setState({
          dreamsign: val,
        });
    };
    
    descriptionChangedHandler = val => {
        this.setState({
            description: val,
        });
    };

    createDate = () => {
        let dateCreator = new Date();
        let month = dateCreator.getMonth() + 1;
        let day = dateCreator.getDate();
        let year = dateCreator.getFullYear();

        let hour = 0;

        if (dateCreator.getHours() < 10) {
            hour = dateCreator.getHours();
            let parsedHour = hour.toString();
            let zeroAdded = "0" + parsedHour;
            hour = zeroAdded;
        } else {
            hour = dateCreator.getHours();
        }

        let minute = 0;

        if (dateCreator.getMinutes() < 10) {
            minute = dateCreator.getMinutes();
            let parsedMinute = minute.toString();
            let zeroAdded = "0" + parsedMinute;
            minute = zeroAdded;
        } else {
            minute = dateCreator.getMinutes();
        }

        let date = day + '.' + month + '.' + year + ' at ' + hour + '.' + minute;
        return date; 
    };

    createSqlTable = () => {
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
            tx.executeSql(sql, null, this.DreamSubmitHandler, this.error);
        });
    };

    DreamSubmitHandler = () => {
        db.transaction(tx => {
                let sql =
                'Insert INTO dream (name, date, location, longitude, latitude, dreamsign, description) VALUES (?, ?, ?, ?, ?, ?, ?)';
            tx.executeSql(
                sql,
                [
                    this.state.name,
                    this.createDate(),
                    this.state.location,
                    this.state.longitude,
                    this.state.latitude,
                    this.state.dreamsign,
                    this.state.description,
                ],
                this.success,
                this.error
            );
        })
    };

    success = () => {
        this.setState({
            name: '',
            dreamsign: '',
            description: '',
            longitude: '',
            latitude: '',
        });
    };

    error = () => {
        alert("There was an error")
    };

    dropTable = () => {
        db.transaction(tx => {
            let sql = 'DROP Table dream';
            tx.executeSql( sql );
        });
    };

  render() {
    return (

        <ImageBackground source={require('../../../../assets/moon.jpg')} style={styles.background}>

            <Label style={styles.heading}>New Dream</Label>

            <Form>

                <View style={styles.nameAndSignContainer}>
                    <Item floatingLabel>
                        <Label>Name the dream:</Label>
                        <Input
                            value={this.state.name}
                            onChangeText={this.nameChangedHandler}
                            style={styles.dreamName}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Dreamsigns:</Label>
                        <Input
                            onChangeText={this.dreamsignChangedHandler}
                            value={this.state.dreamsign}
                            style={styles.dreamName}
                        />  
                    </Item>
                </View>

                <Label style={styles.description}>Describe your dream:</Label>

                <Textarea
                    style={styles.textarea}
                    rowSpan={20}
                    bordered placeholder="Unicorns and fairies..."
                    onChangeText={this.descriptionChangedHandler}
                    value={this.state.description} />

                <Button transparent light
                    style={styles.button}
                    onPress={this.createSqlTable}>
                    <Text>Submit</Text>
                </Button>

            </Form>

        </ImageBackground>

    );
  };
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    heading: {
        color: '#DBD7CF',
        marginTop: 50,
        marginLeft: 13,
        fontSize: 40,
        borderBottomWidth: 3,
        borderColor: 'lightgrey',
    },
    nameAndSignContainer: {
        width: '50%',
    },
    description: {
        color: '#DBD7CF',
        marginTop: 30,
        marginLeft: 15,
        fontSize: 20,
    },
    dreamName: {
        color: '#DBD7CF',
        width: '50%',

    },
    textarea: {
        marginTop: 20,
        margin: 15,
        paddingTop: 20,
        color: '#DBD7CF',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        fontSize: 17,
    },
    button: {
        margin: 10,
    },
});

>>>>>>> af871cc0dc0309881efbb36aa83df4b85bda31c7
export default NewDreamForm;