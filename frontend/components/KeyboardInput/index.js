/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import React, { useCallback, useState } from "react";
import {
  View,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useInterval from "../../hook/useInterval";
import { styles, TextInput } from "./styles";

const KeyboardAvoidingComponent = ({
  pokemon,
  upPoint,
  downPoint,
  requestNewPokemon,
  loading,
  setCount,
}) => {
  const [answer, setAnswer] = useState("");
  const [answered, setAnswered] = useState(false);
  const [isRight, setIsRight] = useState(null);

  useInterval(() => setCount(), answered ? null : 1000);

  const nextQuestion = useCallback(() => {
    setTimeout(() => {
      setAnswer("");
      setAnswered(false);
      setIsRight(null);
      loading(true);
    }, 3000);
  }, []);

  const handlePress = useCallback(() => {
    requestNewPokemon();

    const response = answer.toLowerCase() === pokemon;
    if (response) upPoint();
    else downPoint();

    setIsRight(response);
    setAnswered(true);
    nextQuestion();
  }, [answer, pokemon]);

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput
            placeholder="Qual é esse Pokemon?"
            style={styles.textInput}
            editable={!answered}
            onChangeText={(text) => setAnswer(text)}
            value={answer}
            test={isRight}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePress}
              disabled={answered}
            >
              <Text style={styles.buttonText}>Confimar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidingComponent;
