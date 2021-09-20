import * as React from 'react';
import { Component } from 'react'
import { useState } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';



export default function SessionScreen({ route, navigation }) {

    const { PV, BV } = route.params;
    const [players, setPlayers] = useState(PV);
    const [bigBlind, setBigBlind] = useState(2);
    const [activePlayer, setActivePlayer] = useState(0);
    const [handRecord, setHandRecord] = useState("");
    const [progress, setProgress] = useState(0);
    const [textArray, setTextArray] = useState(['Hero', 'Villain 1', 'Villain 2', 'Villain 3', 'Villain 4', 'Villain 5', 'Villain 6', 'Villain 7', 'Villain 8']);
    const [colorArray, setColorArray] = useState(['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']);
    const [dealerOpen, setDealerOpen] = useState(false);
    const [dealerValue, setDealerValue] = useState(null);
    const [dealerItems4m, setDealerItems4m] = useState([
        { label: 'Hero', value: 0 },
        { label: 'Villain 1', value: 1 },
        { label: 'Villain 2', value: 2 },
        { label: 'Villain 3', value: 3 },
    ]);

    const [dealerItems6m, setDealerItems6m] = useState([
        { label: 'Hero', value: 0 },
        { label: 'Villain 1', value: 1 },
        { label: 'Villain 2', value: 2 },
        { label: 'Villain 3', value: 3 },
        { label: 'Villain 4', value: 4 },
        { label: 'Villain 5', value: 5 },
    ]);

    const [dealerItems9m, setDealerItems9m] = useState([
        { label: 'Hero', value: 0 },
        { label: 'Villain 1', value: 1 },
        { label: 'Villain 2', value: 2 },
        { label: 'Villain 3', value: 3 },
        { label: 'Villain 4', value: 4 },
        { label: 'Villain 5', value: 5 },
        { label: 'Villain 6', value: 6 },
        { label: 'Villain 7', value: 7 },
        { label: 'Villain 8', value: 8 },
    ]);

    const placeholder = [];

    const nextStage = () => {

        if (progress < 4) {

            setProgress(progress + 1)
        } else {
            setProgress(0)
        }

    };

    const makeArray = (numP, TA, CA) => { //Num players, text array, and color array respectively

        array = []
        TA = textArray
        CA = colorArray


        for (let i = 0; i < numP; i++) {

            array.push([<Button title={TA[i]} color={CA[i]} key={i} />])

        }

        return array

    };

    const changeArrayText = (ID, butText) => {


        textArray[ID] = butText
        //makeArray(players)

        return textArray

    };

    const changeArrayColor = (ID, butCol) => {

        var array = [];

        for (let i = 0; i < 9; i++) {

            if (i == ID) {
                array.push(butCol)
            } else {
                array.push(colorArray[i])
            }

        }

        setColorArray(array);

        console.log('new array', JSON.stringify(array));

    };

    const resetColorArray = () => {
        setColorArray(['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']);
        console.log('reset array', JSON.stringify(colorArray));
        return colorArray;
    }

    const setDealerAndF2A = (dPos) => {

        changeArrayColor(dPos, 'red');


        changeArrayColor(dPos + 2, 'yellow');

    }


    const nextPlayer = () => {
        placeholder = []



        return (
            placeholder

        )
    }

    const resetHand = () => {
        placeholder = []
        return (
            placeholder

        )
    }

    const bet = () => {
        placeholder = []
        return (
            placeholder

        )
    }

    const call = () => {
        placeholder = []
        return (
            placeholder

        )
    }

    const fold = () => {
        return (
            placeholder

        )
    }


    const recordAction = () => {
        placeholder = []
        return (
            placeholder

        )
    }




    return (

        <View style={styles.container}>

            <View style={{ flex: 4 }}>
                {makeArray(players, textArray, colorArray)}

                {progress == 0 && players == 4 &&
                    <DropDownPicker
                        zindex={1}
                        open={dealerOpen}
                        value={dealerValue}
                        items={dealerItems4m}
                        setOpen={setDealerOpen}
                        setValue={setDealerValue}
                        setItems={setDealerItems4m}
                    />
                }

                {progress == 0 && players == 6 &&
                    <DropDownPicker
                        zindex={1}
                        open={dealerOpen}
                        value={dealerValue}
                        items={dealerItems6m}
                        setOpen={setDealerOpen}
                        setValue={setDealerValue}
                        setItems={setDealerItems6m}
                    />
                }

                {progress == 0 && players == 9 &&
                    <DropDownPicker
                        zindex={1}
                        open={dealerOpen}
                        value={dealerValue}
                        items={dealerItems9m}
                        setOpen={setDealerOpen}
                        setValue={setDealerValue}
                        setItems={setDealerItems9m}
                    />
                }

                {progress > 0 &&
                    <View style={styles.row}>
                        <Button title='HC 1' />
                        <Button title='HC 2' />
                        <Button title='BC 1' />
                        <Button title='BC 2' />
                        <Button title='BC 3' />
                        <Button title='BC 4' />
                        <Button title='BC 5' />
                    </View>

                }
            </View>

            {progress == 0 &&

                <View style={styles.row}>

                    <Button title='Start Hand' onPress={() => { setDealerAndF2A(dealerValue) }} />

                    <Button title='reset Array' onPress={() => { changeArrayColor(dealerValue + 2, 'yellow') }} />

                    <Button title='reset Array' onPress={() => { resetColorArray() }} />


                </View>

            }

            {progress > 0 &&
                <View style={styles.row}>

                    <Button title='New Hand' onPress={() => setProgress(0)} />
                    <Button title='Bet' onPress={() => bet()} />
                    <Button title='Call' onPress={() => call()} />
                    <Button title='Fold' onPress={() => fold()} />
                    <Button title='Next Player' onPress={() => nextStage()} />


                </View>
            }

            <View>
                <Text>{colorArray}</Text>
                <Text>{dealerValue}</Text>
            </View>


            <View style={styles.row}>

                <Button
                    title="Go to History Screen"
                    onPress={() => navigation.push('HistoryScreen')}
                />
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>


    );



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7CA1B4",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});


