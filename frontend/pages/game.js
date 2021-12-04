/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/
import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import KeyboardInput from "../components/KeyboardInput";
import getPokemon from "../service/pokemon/getPokemon";
import { CommonActions } from "@react-navigation/native";

export default function Game({ navigation }) {
  const [pokemon, setPokemon] = useState({});
  const [nextPokemon, setNextPokemon] = useState({});
  const [points, setPoints] = useState(0);
  const [loadingImage, setLoadingImage] = useState(false);
  const [count, setCount] = useState(30);

  const requestNewPokemon = useCallback(() => {
    return getPokemon().then((pokmn) => setNextPokemon(pokmn));
  }, []);

  useEffect(() => {
    if (loadingImage) {
      setPokemon(nextPokemon);
      setLoadingImage(false);
    }
  }, [nextPokemon, loadingImage]);

  useEffect(() => {
    getPokemon().then((pokmn) => setPokemon(pokmn));
  }, []);
  console.log(pokemon.name);

  if (count < 0) {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "GameOver", params: { points } }],
      })
    );
    return <></>;
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%", height: "70%" }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Score: {points}</Text>
          <Text style={styles.headerText}>Tempo: {count}</Text>
        </View>
        <Image style={styles.pokemonImage} source={{ uri: pokemon?.image }} />
        <KeyboardInput
          pokemon={pokemon?.name}
          requestNewPokemon={requestNewPokemon}
          loading={setLoadingImage}
          count={count}
          setCount={() => setCount((prev) => prev - 1)}
          upPoint={() => setPoints((prevQt) => prevQt + 1)}
          downPoint={() => setPoints((prevQt) => prevQt - 1)}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4AC73",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginRight: 15,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
  },
  pokemonImage: {
    flex: 1,
    position: "absolute",
    top: 100,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
});
