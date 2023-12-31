import "./App.css";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DefaultLayout from "./components/DefaultLayout";
import AuthPage from "./pages/AuthPage";
import SignUp from "./pages/SignUp";
import AuthFilter from "./filters/AuthFilter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthProvider";
import NewChat from "./pages/NewChat";
import { ChatProvider } from "./contexts/ChatProvider";
import ChatLayout from "./components/ChatLayout";

function App() {
  return (
    <div className="App h-screen w-full">
      <Helmet>
        <title>Anarchy || Assessment!</title>
        <meta name="description" content="All for the interview 1 first phase" />
      </Helmet>

      <AuthProvider>
        <ChatProvider>
          <Routes>
            <Route
              element={
                <AuthFilter>
                  <DefaultLayout />
                </AuthFilter>
              }
            >
              <Route index element={<NewChat />} />
              <Route path="/chat/:id" element={<ChatLayout />} />
            </Route>

            <Route path="/welcome" element={<AuthPage />} />
            <Route path="/auth/sign-up" element={<Login />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <ToastContainer />
        </ChatProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
