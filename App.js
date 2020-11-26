import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen'
import FirstScreen from './src/screens/FirstScreen'
import SecondScreen from './src/screens/SecondScreen'

const Stack = createStackNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="First">
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="First" component={FirstScreen} />
                    <Stack.Screen name="Second" component={SecondScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;
