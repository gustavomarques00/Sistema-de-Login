import styled from "styled-components";

export const Container = styled.div`
  color: #edeff2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 32px;
    text-align: center;
    font-size: 28px;
  }

  a {
    color: #edeff2;
    text-align: center;
    text-decoration: none;
  }
`;

export const Button = styled.button`
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
    position: relative;
    top: 1px;
  }
`;
