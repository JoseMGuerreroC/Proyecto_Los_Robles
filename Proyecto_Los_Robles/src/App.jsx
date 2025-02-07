import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/LoginPage/Login";
import Page404 from "./components/Page404/404Page";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import MainPage from "./components/MainPage/MainPage";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import NotificationPage from "./components/NotificationPage/NotificationPage";
import ForumPage from "./components/ForumPage/ForumPage";
import AboutPage from "./components/AboutPage/AboutPage";

import { UserProvider } from "./components/UserContext/UserContext";

function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path={'/'} element={<Navigate to="/login" replace />} />
            <Route path={'/login'} element={<Login></Login>} />
            <Route path={'/register'} element={<RegistrationPage></RegistrationPage>} />
            <Route path={'/main'} element={<MainPage></MainPage>} />
            <Route path={'/payments'} element={<PaymentPage></PaymentPage>} />
            <Route path={'/notifications'} element={<NotificationPage></NotificationPage>} />
            <Route path={'/forum'} element={<ForumPage></ForumPage>} />
            <Route path={'/about-los-robles'} element={<AboutPage></AboutPage>} />
            <Route path="*" element={<Page404></Page404>}></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
