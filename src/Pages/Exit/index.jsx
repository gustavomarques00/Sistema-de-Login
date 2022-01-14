import React from 'react'
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link } from "react-router-dom";

export function Exit() {
  return (
    <Theme>
      <C.Container>
        <p>Obrigado por usar o nosso sistema!</p>
        <Link to="/">Voltar ao início</Link>
      </C.Container>
    </Theme>
  );
}