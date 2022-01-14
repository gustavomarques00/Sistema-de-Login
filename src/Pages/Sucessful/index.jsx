import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link } from "react-router-dom";

export function Sucessful() {
  return (
    <Theme>
      <C.Container>
        <p>Conta Criada com Sucesso!</p>
        <Link to="/">Logar agora</Link>
      </C.Container>
    </Theme>
  );
}