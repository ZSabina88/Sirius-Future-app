import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main style={{marginLeft: "25%"}}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
