/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RankingService from '../service/ranking/axios';
import ScoreService from '../service/score/axios';


import {
  Container,
  InstructionsButton,
  InstructionsButtonText,
  StarGameButton,
  StartGameButtonText,
  TextStyle,
  TextRank,
  FeedbackMessage,
  RankContainer,
} from "../styles/menuStyles";

function GameOver({ navigation, route: { params } }) {
  const feedbackMessage = params.points > 0 ? 'Mandou bem!' : 'Que pena! Tente outra vez.';
  const [player, setPlayer] = useState('');
  const [ranking, setRanking] = useState([]);

  async function startPage() {
    const plyr = await AsyncStorage.getItem('@player');
    const rank = await AsyncStorage.getItem('@ranking');
    if (plyr) setPlayer(plyr);
    if (rank) setRanking(JSON.parse(rank));
    await ScoreService.saveScore(plyr, params.points);
  }

  useEffect(() => {
    startPage();
  }, []);

  async function handleReset() {
    const rank = await RankingService.getRanking();
    await AsyncStorage.setItem('@ranking', JSON.stringify(rank));
    return navigation.navigate("Game");
  }

  return (
    <Container>
      <TextStyle>{player}</TextStyle>
      <TextStyle>Pontuação: {params.points}</TextStyle>
        {ranking.map((player) => (
        <RankContainer key={player.name}>
            <TextRank>{player.name}</TextRank>
            <TextRank style={{ fontSize: 28 }}>{player.score}</TextRank>
        </RankContainer>
        ))}
      <StarGameButton>
        <StartGameButtonText onPress={() => handleReset()}>
          Reiniciar o jogo
        </StartGameButtonText>
      </StarGameButton>
      <InstructionsButton onPress={() => navigation.navigate("HomeMenu")}>
        <InstructionsButtonText>Ir para o Menu</InstructionsButtonText>
      </InstructionsButton>
    </Container>
  );
}

export default GameOver;
