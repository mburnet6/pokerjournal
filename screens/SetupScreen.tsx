import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState, FunctionComponent, useCallback } from "react";
import { SetupScreenProps, PlayerItem, BlindItem } from '../App.types';

const SetupScreen: FunctionComponent<SetupScreenProps> = ({
  route,
  navigation,
}) => {
  const [playersOpen, setPlayersOpen] = useState(false);
  const onPlayersOpen = useCallback(() => {
    setBlindsOpen(false);
  }, []);
  const [playersValue, setPlayersValue] = useState<number|null>(null);
  const [playersItems, setPlayersItems] = useState([
    { label: "4-Max", value: 4 },
    { label: "6-Max", value: 6 },
    { label: "9-Max", value: 9 },
  ]);
  const selectedPlayers = playersItems.find(players => {
    return players.value === playersValue;
});

  const [blindsOpen, setBlindsOpen] = useState(false);
  const onBlindsOpen = useCallback(() => {
    setPlayersOpen(false);
  }, []);
  const [blindsValue, setBlindsValue] = useState<string|null>(null);
  const [blindsItems, setBlindsItems] = useState([
    { label: "$0.01 / $0.02", value: "0.02" },
    { label: "$0.05 / $0.10", value: "0.10" },
    { label: "$0.10 / $0.20", value: "0.20" },
    { label: "$0.25 / $0.50", value: "0.50" },
    { label: "$0.50 / $1.00", value: "1" },
    { label: "$1 / $2", value: "2" },
    { label: "$2 / $5", value: "5" },
    { label: "$5 / $10", value: "10" },
  ]);
  const selectedBlinds = blindsItems.find(blind => {
      return blind.value === blindsValue;
  });

  const isDisabled = useCallback(() => {
      if (selectedPlayers && selectedBlinds) { return false; }
      return true;
  }, [selectedPlayers, selectedBlinds]);

  return (
    <View style={styles.container}>
      <View>
        <Text>Select Table Size</Text>

        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          open={playersOpen}
          onOpen={onPlayersOpen}
          value={playersValue}
          items={playersItems}
          setOpen={setPlayersOpen}
          setValue={setPlayersValue}
          setItems={setPlayersItems}
        />

        <Text>Select stakes</Text>

        <DropDownPicker
          zIndex={2000}
          zIndexInverse={2000}
          open={blindsOpen}
          onOpen={onBlindsOpen}
          value={blindsValue}
          items={blindsItems}
          setOpen={setBlindsOpen}
          setValue={setBlindsValue}
          setItems={setBlindsItems}
        />
      </View>

      <View style={styles.buttonSection}>
        <Text>{selectedPlayers ? `Players: ${selectedPlayers.label}`: "Select Players"}</Text>
        <Text>{selectedBlinds ? `Blinds: ${selectedBlinds.label}` : "Select Blinds"}</Text>

        <Button
          title={"Begin Session"}
          disabled={isDisabled()}
          onPress={() => {
            navigation.navigate("SessionScreen", {
                PV: selectedPlayers,
                BV: selectedBlinds
            });
          }}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
  },
  buttonSection: {
    height: 300,
  },
});

export default SetupScreen;
