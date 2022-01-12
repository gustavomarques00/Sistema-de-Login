import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";

export function Login() {
  return (
    <Theme>
      <C.Container>
        <p>Login</p>
        <span>Seu E-mail</span>
        <input type="email" required alt="Email" />
        <span>Sua Senha</span>
        <input type="password" required alt="Senha" />
        <div>
          <button>Entrar</button>
          <h3>
            <a>Criar Conta</a>
          </h3>
        </div>
      </C.Container>
    </Theme>
  );
}
