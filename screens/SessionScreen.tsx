import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SessionScreenProps, PlayerItem } from '../App.types';

const SessionScreen: FunctionComponent<SessionScreenProps> = ({
  route,
  navigation,
}) => {
  const PV = route.params?.PV;
  const BV = route.params?.BV;
  const [players, setPlayers] = useState(PV);
  const [bigBlind, setBigBlind] = useState(2);
  const [activePlayer, setActivePlayer] = useState(0);
  const [handRecord, setHandRecord] = useState("");
  const [progress, setProgress] = useState(0);
  const [textArray, setTextArray] = useState([
    "Hero",
    "Villain 1",
    "Villain 2",
    "Villain 3",
    "Villain 4",
    "Villain 5",
    "Villain 6",
    "Villain 7",
    "Villain 8",
  ]);
  const [colorArray, setColorArray] = useState([
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
  ]);
  const [dealerValue, setDealerValue] = useState(null);
  const [dealer4Open, setDealer4Open] = useState(false);
  const onDealer4Open = useCallback(() => {
    setDealer6Open(false);
    setDealer9Open(false);
  }, []);
  const [dealerItems4m, setDealerItems4m] = useState([
    { label: "Hero", value: 0 },
    { label: "Villain 1", value: 1 },
    { label: "Villain 2", value: 2 },
    { label: "Villain 3", value: 3 },
  ]);

  const [dealer6Open, setDealer6Open] = useState(false);
  const onDealer6Open = useCallback(() => {
    setDealer4Open(false);
    setDealer9Open(false);
  }, []);
  const [dealerItems6m, setDealerItems6m] = useState([
    { label: "Hero", value: 0 },
    { label: "Villain 1", value: 1 },
    { label: "Villain 2", value: 2 },
    { label: "Villain 3", value: 3 },
    { label: "Villain 4", value: 4 },
    { label: "Villain 5", value: 5 },
  ]);

  const [dealer9Open, setDealer9Open] = useState(false);
  const onDealer9Open = useCallback(() => {
    setDealer4Open(false);
    setDealer6Open(false);
  }, []);
  const [dealerItems9m, setDealerItems9m] = useState([
    { label: "Hero", value: 0 },
    { label: "Villain 1", value: 1 },
    { label: "Villain 2", value: 2 },
    { label: "Villain 3", value: 3 },
    { label: "Villain 4", value: 4 },
    { label: "Villain 5", value: 5 },
    { label: "Villain 6", value: 6 },
    { label: "Villain 7", value: 7 },
    { label: "Villain 8", value: 8 },
  ]);

  const placeholder: never[] = [];

  const nextStage = () => {
    if (progress < 4) {
      setProgress(progress + 1);
    } else {
      setProgress(0);
    }
  };

  const makeArray = (numP: PlayerItem|null|undefined, TA: string[], CA: string[]) => {
    //Num players, text array, and color array respectively
    if (numP) {
      var array = [];

      for (let i = 0; i < numP.value; i++) {
        const title = TA[i];
        const color = CA[i];
        const button = (
          <Button
            title={title}
            color={color}
            key={i}
            onPress={() => {
              console.log(`${title} pressed with color: ${color}`);
            }}
          />
        );
        array.push(button);
      }
  
      return array;
    } else {
      //TODO: handle undefined numP
    }
  };

  const changeArrayText = (ID: number, buttonText: string) => {
    textArray[ID] = buttonText;
    //makeArray(players)

    return textArray;
  };

  const changeArrayColor = (ID: number, buttonColor: string) => {
    var array = [];

    for (let i = 0; i < 9; i++) {
      if (i == ID) {
        array.push(buttonColor);
      } else {
        array.push(colorArray[i]);
      }
    }

    setColorArray(array);

    console.log("new array", JSON.stringify(array));
  };

  const resetColorArray = () => {
    setColorArray([
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
    ]);
    console.log("reset array", JSON.stringify(colorArray));
    return colorArray;
  };

  const setDealerAndF2A = (dPos: number|null) => {
    if (dPos) {
      changeArrayColor(dPos, "red");
      changeArrayColor(dPos + 2, "yellow");
    } else {
      //TODO: handle dPos === null
    }

  };

  const nextPlayer = () => {
    return placeholder;
  };

  const resetHand = () => {
    return placeholder;
  };

  const bet = () => {
    return placeholder;
  };

  const call = () => {
    return placeholder;
  };

  const fold = () => {
    return placeholder;
  };

  const recordAction = () => {
    return placeholder;
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 4 }}>
        {makeArray(players, textArray, colorArray)}
        {progress == 0 && players?.value === 4 && (
        <DropDownPicker
            zIndex={1}
            open={dealer4Open}
            setOpen={setDealer4Open}
            onOpen={onDealer4Open}
            value={dealerValue}
            items={dealerItems4m}
            setValue={setDealerValue}
            setItems={setDealerItems4m}
          />
        )}

        {progress == 0 && players?.value === 6 && (
          <DropDownPicker
            zIndex={1}
            open={dealer6Open}
            setOpen={setDealer6Open}
            onOpen={onDealer6Open}
            value={dealerValue}
            items={dealerItems6m}
            setValue={setDealerValue}
            setItems={setDealerItems6m}
          />
        )}

        {progress == 0 && players?.value === 9 && (
          <DropDownPicker
            zIndex={1}
            open={dealer9Open}
            setOpen={setDealer9Open}
            onOpen={onDealer9Open}
            value={dealerValue}
            items={dealerItems9m}
            setValue={setDealerValue}
            setItems={setDealerItems9m}
          />
        )}

        {progress > 0 && (
          <View style={styles.row}>
            <Button title="HC 1" onPress={() => {}} />
            <Button title="HC 2" onPress={() => {}} />
            <Button title="BC 1" onPress={() => {}} />
            <Button title="BC 2" onPress={() => {}} />
            <Button title="BC 3" onPress={() => {}} />
            <Button title="BC 4" onPress={() => {}} />
            <Button title="BC 5" onPress={() => {}} />
          </View>
        )}
      </View>

      {progress == 0 && (
        <View style={styles.row}>
          <Button
            title="Start Hand"
            onPress={() => {
              setDealerAndF2A(dealerValue);
            }}
          />

          <Button
            title="Change Array Color"
            onPress={() => {
              if (dealerValue) {
                console.log(`dealerValue not null, was ${dealerValue}, using ${dealerValue + 2}`);
                changeArrayColor(dealerValue + 2, "yellow");
              } else {
                //TODO: handle dealerValue === null
                console.log("dealerValue was null, using 0 + 2")
                changeArrayColor(0 + 2, "yellow");
              }
            }}
          />

          <Button
            title="Reset Array"
            onPress={() => {
              resetColorArray();
            }}
          />
        </View>
      )}

      {progress > 0 && (
        <View style={styles.row}>
          <Button title="New Hand" onPress={() => setProgress(0)} />
          <Button title="Bet" onPress={() => bet()} />
          <Button title="Call" onPress={() => call()} />
          <Button title="Fold" onPress={() => fold()} />
          <Button title="Next Player" onPress={() => nextStage()} />
        </View>
      )}

      <View>
        <Text>{colorArray}</Text>
        <Text>{dealerValue}</Text>
      </View>

      <View style={styles.row}>
        <Button
          title="Go to History Screen"
          onPress={() => navigation.navigate({ key: "HistoryScreen" })}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate({ key: "HomeScreen" })}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

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
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SessionScreen;
