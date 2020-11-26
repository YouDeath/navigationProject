import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class FirstScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>First</Text>
                <Button
                    title="Go to First again"
                    onPress={() => this.props.navigation.push('First')}
                />
                <Button
                    title="Go to Second"
                    onPress={() => this.props.navigation.navigate('Second')}
                />
            </View>
        )
    }
}

export default FirstScreen;
