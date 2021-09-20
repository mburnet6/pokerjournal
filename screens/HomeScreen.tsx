import * as React from "react";
import { FunctionComponent } from "react";
import { View, Text, Button } from "react-native";
import { HomeScreenProps } from "../App.types";

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
  route,
  navigation,
}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Play Poker!"
        onPress={() => navigation.navigate("SetupScreen")}
      />

      <Button
        title="Go to History Screen"
        onPress={() => navigation.navigate("HistoryScreen")}
      />
    </View>
  );
};

export default HomeScreen;
