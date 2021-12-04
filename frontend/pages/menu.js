/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import React, { useState } from "react";
import { Modal } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RankingService from '../service/ranking/axios';

import {
  Container,
  InstructionsButton,
  InstructionsButtonText,
  InstructionsText,
  ModalBox,
  ModalCloseButton,
  ModalContainer,
  StarGameButton,
  StartGameButtonText,
  Strong,
  TextStyle,
  TextInput
} from "../styles/menuStyles";

function Menu({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [player, setPlayer] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false); 

  function handleInstructions() {
    return setShowModal((prev) => !prev);
  }

  function handleChange(text) {
    setPlayer(text)
    if (text.length >= 3) setButtonEnabled(true);
    else setButtonEnabled(false);
  }

  async function handleStartGame() {
    await AsyncStorage.setItem("@player", player);
    const ranking = await RankingService.getRanking();
    await AsyncStorage.setItem("@ranking", JSON.stringify(ranking));
    navigation.navigate("Game");
  }

  return (
    <Container>
      <TextStyle>
        <Strong>Poke</Strong>Quiz
      </TextStyle>
      <TextInput
        placeholder="Coloque seu nome"
        onChangeText={handleChange}
      />
      <StarGameButton>
        <StartGameButtonText 
          onPress={handleStartGame}
          disabled={!buttonEnabled}
        >
          Iniciar Jogo
        </StartGameButtonText>
      </StarGameButton>
      <InstructionsButton onPress={() => setShowModal(true)}>
        <InstructionsButtonText>Instruções</InstructionsButtonText>
      </InstructionsButton>
      {showModal && (
        <Modal>
          <ModalContainer>
            <ModalBox>
              <ModalCloseButton onPress={handleInstructions}>
                X
              </ModalCloseButton>
              <InstructionsText>
                O objetivo do jogo é simples, tente acertar o máximo de pokemons
                que conseguir dentro do tempo limite de 30 segundos!
              </InstructionsText>
            </ModalBox>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}

export default Menu;
