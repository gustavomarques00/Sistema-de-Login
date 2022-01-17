import React, { useState } from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Services/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export function Login() {
  let history = useNavigate();
  const [dados, setDados] = useState({});
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setDados(currentUser);
  });

  const logout = async (e) => {
    e.preventDefault()
    await signOut(auth);
    history("/sair");

  };

  async function signIn(e) {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, senha);
    } catch (erro) {
      alert(erro.message);
    }
  }

  return (
    <Theme>
      <C.Container>
        <h4>Usuário logado como:</h4>
        {dados?.email}
        <hr />
        <p>Login</p>
        <C.FormData>
          <C.Entrada>
            <label>E-mail</label>
            <input
              type="email"
              onBlur={(e) => {
                setEmail(e.target.value);
              }}
              required
              alt="Email"
            />
          </C.Entrada>
          <C.Entrada>
            <label>Senha</label>
            <input
              type="password"
              onBlur={(e) => {
                setSenha(e.target.value);
              }}
              required
              alt="Senha"
            />
          </C.Entrada>
          <C.Enviar>
            <C.Button onClick={signIn}>Entrar</C.Button>
            <Link to="/criar-conta">Criar uma conta</Link>
          </C.Enviar>
        </C.FormData>
        <C.Button onClick={logout} deslogar>
          Sair
        </C.Button>
        {/*<Link to="/recuperar-senha">Esqueci minha senha</Link>*/}
      </C.Container>
    </Theme>
  );
}
