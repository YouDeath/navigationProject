import React from 'react';
import { Button, View, Text } from 'react-native';

class SecondScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Second</Text>
                <Button
                    title="Go to Second again"
                    onPress={() => this.props.navigation.push('Second')}
                />
                <Button
                    title="Go to First"
                    onPress={() => this.props.navigation.navigate('First')}
                />
            </View>
        )
    }
}

export default SecondScreen;
