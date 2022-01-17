import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { CreateAccount } from "./Pages/CreateAccount";
import { Sucessful } from "./Pages/Sucessful";
import { Exit } from "./Pages/Exit";
import { NotFound } from "./Pages/404";
import { LostMyPassword } from "./Pages/LostMyPassword";
import { Main } from "./Pages/Main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Main/>} />
        <Route exact path="/login"  element={<Login/>} />
        <Route exact path="/criar-conta" element={<CreateAccount/>} />
        <Route exact path="/recuperar-senha" element={<LostMyPassword/>} />
        <Route exact path="/sucesso" element={<Sucessful/>} />
        <Route exact path="/sair" element={<Exit/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
