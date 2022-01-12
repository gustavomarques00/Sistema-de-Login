import React from 'react'
import { Sidebar } from "../Sidebar";
import { Footer } from "../Footer";
import * as C from "./styles";

export function Theme({ children }) {
  return (
    <C.Container>
      <C.Area>
        <C.Options>
          <C.Page>{children}</C.Page>
          <Sidebar />
        </C.Options>
      <Footer />
      </C.Area>
    </C.Container>
  );
}
