/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/
import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./pages/menu";
import Game from "./pages/game";
import GameOver from "./pages/endgame";

const Stack = createNativeStackNavigator();
console.disableYellowBox = true;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeMenu" component={Menu} />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ title: "Game" }}
        />
        <Stack.Screen
          name="GameOver"
          component={GameOver}
          options={{ title: "GameOver" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
