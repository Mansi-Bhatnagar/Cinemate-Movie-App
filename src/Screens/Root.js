import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
const RootLayout = () => {
  return (
    <>
      <StyledEngineProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </StyledEngineProvider>
    </>
  );
};
export default RootLayout;
