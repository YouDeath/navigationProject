import React from 'react';
import { Button, View, Text } from 'react-native';

class MainScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Main</Text>
                <Button
                    title="Go to First"
                    onPress={() => this.props.navigation.navigate('First')}
                />
                <Button
                    title="Go to Second"
                    onPress={() => this.props.navigation.navigate('Second')}
                />
            </View>
        )
    }
}

export default MainScreen;
