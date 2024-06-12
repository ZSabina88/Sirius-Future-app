import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main style={{margin: "20px"}}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
