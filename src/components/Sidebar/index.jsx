import React from "react";
import * as C from "./styles";
import Empresa from "../../Assets/Empresa.png";

export function Sidebar() {
  return (
    <C.Container>
      <h1>Seja bem-vindo a empresa</h1>
      <p><i>Aqui todos somos amigos</i></p>
      <img src={Empresa} alt="Equipe"/>
    </C.Container>
  );
}
