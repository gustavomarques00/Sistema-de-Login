import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <Theme>
      <C.Container>
        <p>Seja bem vindo!</p>
        <hr/>
        <C.Divisor>
          <Link to="/login"><C.Button>Logar agora</C.Button></Link>
          <Link to="/criar-conta"><C.Button>Criar conta</C.Button></Link>
        </C.Divisor>
      </C.Container>
    </Theme>
  );
}
