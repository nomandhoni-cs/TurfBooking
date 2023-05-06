import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Outlet></Outlet>
      </Container>
    </>
  );
};
