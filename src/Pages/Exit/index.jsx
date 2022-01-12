import React from 'react'
import * as C from "./styles";
import { Theme } from "../../components/theme";

export function Exit() {
  return (
    <Theme>
      <C.Container>
        <p>Obrigado por usar o nosso sistema</p>
      </C.Container>
    </Theme>
  );
}