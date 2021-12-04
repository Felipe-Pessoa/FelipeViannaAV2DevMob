/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import styled from 'styled-components/native';

export const TextStyle = styled.Text`
  text-align: center;
  font-size: 62px;
  font-weight: 500;
  color: #FFCC01;
`;

export const RankContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
`;

export const TextRank = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #252525;
`;

export const Strong = styled.Text`
  text-align: center;
  font-size: 62px;
  font-weight: 700;
  color: #2F67B2;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: tomato;
  justify-content: center;
  align-items: center;
`;

export const StarGameButton = styled.TouchableOpacity`
  display: flex;
  background-color: rgb(255,204,1);
  padding: 12px 36px;
  border-radius: 18px;
  margin-top: 36px;
`

export const StartGameButtonText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #252525;
`;

export const InstructionsButton = styled.TouchableOpacity`
  display: flex;
  background-color: #2F67B2;
  padding: 12px 42px;
  border-radius: 18px;
  margin-top: 12px;
`

export const InstructionsButtonText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #252525;
`;

export const ModalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 80%;
  height: 40%;
  background-color: #252525;
  border-radius: 8px;
`;

export const ModalCloseButton = styled.Text`
  text-align: right;
  padding: 12px;
  font-size: 18px;
  color: white;
`;

export const InstructionsText = styled.Text`
  font-size: 18px;
  padding: 12px;
  margin: 24px;
  color: white;
  text-align: center;
`;

export const FeedbackMessage = styled.Text`
  color: #252525;
  font-size: 24px;
`;

export const TextInput = styled.TextInput`
  height: 45px;
  width: 259px;
  border-width: 1.5px;
  padding: 8px;
  border-radius: 4px;
  font-size: 18px;
  background-color: white;
  color: black;
  margin-top: 12px;
`;