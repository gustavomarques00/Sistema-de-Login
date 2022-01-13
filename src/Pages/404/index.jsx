import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Theme>
      <C.Container>
        <p>Página não encontrada</p>
        <button><Link to="criar-conta">Voltar a página inicial</Link></button>
      </C.Container>
    </Theme>
  );
}
