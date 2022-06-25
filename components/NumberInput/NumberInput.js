import React from "react";
import {View, TextInput,Text} from "react-native";
import Style from "./NumberInput.style"

const NumberInput = (props) => {
  return(
    <View style={Style.container}>
      <Text style={Style.labText}>{props.LabelText}</Text>
      <TextInput value={props.value} onChangeText={props.onChangeNum} keyboardType="numeric" style={Style.NumberInputArea}/>
    </View>
  );
};

export default NumberInput;