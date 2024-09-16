import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Error404 } from "./pages/Error404";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/admin/Home";
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { Chat } from "./pages/admin/Chat";
import { ForgetPassword } from "./pages/auth/ForgetPassword";
import { Profile } from "./pages/admin/Profile";
import { Tickets } from "./pages/admin/Tickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>

        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />}></Route>
          <Route path="chat" element={<Chat />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="tickets" element={<Tickets />}></Route>
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
