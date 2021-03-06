import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import NewDream from './pages/NewDream';
import Journal from './pages/Journal';
import DreamStatistics from './pages/DreamStatistics';

const Navigation = createBottomTabNavigator(
    {
        NewDream: {
            screen: NewDream,
            navigationOptions: {
                title: 'New Dream',
                tabBarIcon: () => (
                    <Icon name="edit"/>
                    
                ),
            },
        },

        Journal: {
            screen: Journal,
            navigationOptions: {
                title: 'Journal',
                tabBarIcon: () => (
                    <Icon name="book"/>
                ),
            },
        },

        DreamStatistics: {
            screen: DreamStatistics,
            navigationOptions: {
                title: 'Dream Locations',
                tabBarIcon: () => (
                    <Icon name="adjust"/>
                ),
            },
        },
    },
    {
        tabBarOptions: {
          activeTintColor: 'salmon',
          inactiveTintColor: '#DBD7CF',
          labelStyle: { fontSize: 16 },
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
        },
    }
);

export default createAppContainer(Navigation);
