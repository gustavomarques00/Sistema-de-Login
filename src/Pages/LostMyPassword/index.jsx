import React, { useState } from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link } from "react-router-dom";

export function LostMyPassword() {
  const [email, setEmail] = useState();

  return (
    <Theme>
      <C.Container>
        <p>Recuperação de Senha</p>
        <C.FormData>
          <C.Entrada>
            <label>Email</label>
            <input
              type="text"
              onBlur={(e) => {
                setEmail(e.target.value);
                console.log(email)
              }}
              required
              alt="Email"
            />
          </C.Entrada>
          <C.Enviar>
            <C.Button>Recuperar senha</C.Button>
            <Link to="/">Voltar a tela de Login</Link>
          </C.Enviar>
        </C.FormData>
      </C.Container>
    </Theme>
  );
}
