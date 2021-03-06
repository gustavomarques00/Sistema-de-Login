import styled from "styled-components";

export const Container = styled.div`
  color: #edeff2;

  p{
    margin-bottom: 32px;
    text-align: center;
    font-size: 28px;
  }

  a{
    color: #edeff2;
    text-decoration: none;
  }

  input {
    width:94%;
    padding: 12px;
    font-size: 16px;
    border-width: 2px;
    border-color: #004cff;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: 13px;
    box-shadow: 6px 3px 5px rgba(66, 66, 66, 0.75);
    text-shadow: -41px 0px 5px rgba(66, 66, 66, 0.75);
    :focus {
      outline: none;
    }
  }

  button {
    margin-top: 12px;
    box-shadow: inset 0px 1px 0px 0px #97c4fe;
    background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
    background-color: #3d94f6;
    border-radius: 6px;
    border: 1px solid #337fed;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 14px 65px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #1570cd;

    :hover {
      background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
      background-color: #1e62d0;
    }

    :active {
        box-shadow: inset 0px 1px 0px 0px #97c4fe;
        background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
        background-color: #3d94f6;
        border-radius: 6px;
        border: 1px solid #337fed;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 14px 65px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #1570cd;
      }
      :hover {
        background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
        background-color: #1e62d0;
      }
      :active {
        position: relative;
        top: 1px;
      }
    }
`;

export const FormData = styled.form`

`;

export const Entrada = styled.div`
  padding: 8px 0;
`;

export const Enviar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Erro =styled.div`
  color: red;
  font-size: 18px;
  margin-top:8px;
`

export const ContaCriada = styled.div`
  background-color: green;
  padding: 20px 10px;
  border-radius: 15px;
`