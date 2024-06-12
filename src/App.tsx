import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import MainCalendar from "./components/MainCalendar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/forgotpassword", element: <ForgotPassword /> },
      { path: "/userpage", element: <UserPage /> },
      { path: "/расписание", element: <MainCalendar /> },


    ]
  },
  { path: "/login", element: <Login /> },
])

const App: React.FC = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
