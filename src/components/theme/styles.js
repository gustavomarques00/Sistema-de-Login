import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  font-family: "Roboto";
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
`;

export const Area = styled.div`
  margin: auto;
  max-width: 1280px;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Options = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Page = styled.div`
  flex: 2;
  padding: 40px;
`;

export const Sidebar = styled.div`
  flex: 1;
  background-color: #17a2b8;
`;
