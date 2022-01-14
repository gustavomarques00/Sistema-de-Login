import React from "react";
import * as C from "./styles";
import { Theme } from "../../components/theme";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { auth } from "../../Services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";

const SchemaDeValidacao = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
  senha: Yup.string()
    .min(5, "Senha muito pequena!")
    .max(50, "Senha excessivamente grande!")
    .required("Obrigatório"),
});

export function CreateAccount() {
  let history = useNavigate();
  return (
    <Theme>
      <C.Container>
        <p>Criação de Conta</p>
        <Formik
          initialErrors
          validationSchema={SchemaDeValidacao}
          initialValues={{
            email: "",
            senha: "",
          }}
          onSubmit={async (values) => {
            try {
              const dados = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.senha
              );
              history("/sucesso");
            } catch (erro) {
              alert(erro.message);
            }

          }}
        >
          {({ errors, touched }) => (
            <Form method="post">
              <C.Entrada>
                <label htmlFor="email">E-mail</label>
                <Field id="email" required name="email" type="email" />
                {errors.email && touched.email ? (
                  <C.Erro>{errors.email}</C.Erro>
                ) : null}
              </C.Entrada>
              <C.Entrada>
                <label htmlFor="senha">Senha</label>
                <Field id="senha" type="password" name="senha" required />
                {errors.senha && touched.senha ? (
                  <C.Erro>{errors.senha}</C.Erro>
                ) : null}
              </C.Entrada>
              <C.Enviar>
                <button type="submit">Criar</button>
                <Link to="/">Voltar ao Login</Link>
              </C.Enviar>
            </Form>
          )}
        </Formik>
      </C.Container>
    </Theme>
  );
}
