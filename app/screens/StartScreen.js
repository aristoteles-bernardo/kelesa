import React from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Benvindo a Kelesa!</Header>
      <Paragraph>
        Gestão de Resíduos e Ecopontos.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Entrar
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Criar uma conta
      </Button>
    </Background>
  );
}
