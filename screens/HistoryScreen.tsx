import * as React from 'react';
import { FunctionComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { HistoryScreenProps } from '../App.types';

const HistoryScreen: FunctionComponent<HistoryScreenProps> = ({route, navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>History Screen</Text>
            <Button
                title="Go to Session Screen"
                onPress={() => navigation.navigate("SessionScreen")}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate("HomeScreen")} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>

    );
};

export default HistoryScreen;