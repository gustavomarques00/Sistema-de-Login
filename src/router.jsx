import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { CreateAccount } from "./Pages/CreateAccount";
import { Sucessful } from "./Pages/Sucessful";
import { Exit } from "./Pages/Exit";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/criarConta" element={<CreateAccount/>} />
        <Route path="/cadastrar" element={<Sucessful/>} />
        <Route path="/sair" element={<Exit/>} />
      </Routes>
    </BrowserRouter>
  );
};
