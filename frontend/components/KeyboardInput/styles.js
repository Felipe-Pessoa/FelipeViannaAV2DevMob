/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const TextInput = styled.TextInput`
  height: 45px;
  border-width: 1.5px;
  padding: 8px;
  border-radius: 4px;
  font-size: 18px;
  background-color: ${({ test }) => {
    if (test === null) return 'white';
    if (test) return 'green';
    return 'red';
  }};
  color: ${({ test }) => {
    if (test === null) return 'black';
    if (test) return 'white';
    return 'white';
  }};
  margin-top: 300px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  btnContainer: {
    backgroundColor: "black",
    fontWeight: "900",
    marginTop: 12,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#A45A5A",
    borderRadius: 4,
    shadowColor: "rgba(0,0,0, .9)",
    shadowOffset: {
      height: 1,
      width: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 22,
    padding: 8,
  },
});
