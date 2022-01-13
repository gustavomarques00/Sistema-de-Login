import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Theme>
      <C.Container>
        <p>Login</p>
        <C.FormData>
          <C.Entrada>
            <label>E-mail</label>
            <input type="email" required alt="Email" />
          </C.Entrada>
          <C.Entrada>
            <label>Senha</label>
            <input type="password" required alt="Senha" />
          </C.Entrada>
          <C.Enviar>
            <button>Entrar</button>
            <Link to="/criar-conta">Criar uma conta</Link>
          </C.Enviar>
        </C.FormData>
      </C.Container>
    </Theme>
  );
}
