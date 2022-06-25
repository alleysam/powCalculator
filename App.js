import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Style from "./App.style";
import NumberInput from "./components/NumberInput/NumberInput";

const App = () => {
  const [sum, setSum]=useState(0);
  const [onNumberUs,setOnNumberUs]=useState(0);
  const [onNumberTaban, setOnNumberTaban]= useState(0);
  const calculate = (onNumberUs,onNumberTaban) => {
    if(isNaN(Math.pow(onNumberTaban,onNumberUs))){
      alert("Geçerli Bir Değer Giriniz...");
    }
    else{
      setSum(Math.pow(onNumberTaban,onNumberUs));
    }
  };

  return(
    <View style={Style.container}>
      <Text style={Style.headerText}>Pow Calculate</Text>
      <View style={Style.inputNumber}>
        <NumberInput value={onNumberUs} onChangeNum={ number => setOnNumberUs(number)} LabelText={"Üs"}/>
        <NumberInput value={onNumberTaban} onChangeNum={ number => setOnNumberTaban(number)} LabelText={"Taban"}/>
      </View>
      <View style={Style.calculateArea}>
        <Text style={Style.sumText}>Sonuc: {sum}</Text>
        <Button color="#FEB139" title="Hesapla" onPress={ () => calculate(onNumberUs,onNumberTaban) }/>
      </View>
    </View>
  );
};

export default App;