import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Theme>
      <C.Container>
        <p>Página não encontrada</p>
        <Link to="/">Voltar a página inicial</Link>
      </C.Container>
    </Theme>
  );
}
