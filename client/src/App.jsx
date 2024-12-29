import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Service } from "./Pages/Service";
import { Contact } from "./Pages/Contact";
import {Data} from"./Pages/Data";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Logout } from "./Pages/Logout";
import { Error } from "./Pages/Error";
import { Navbar } from "./components/Navbar";
import { AdminLayout } from "./components/layouts/admin-layout";
import { AdminContacts } from "./Pages/admin-contact";
import { AdminUsers } from "./Pages/admin-user";
import { AdminUpdate } from "./Pages/Admin-Update";

// import { Register_Local } from "./Pages/Register_localStorage";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      < Routes>
        <Route path='/' element={<Home />} />  {/* void element */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/data' element={<Data />} />
        <Route path='/service' element={<Service />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="*" element={<Error />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='users' element={<AdminUsers />} />
          <Route path='contacts' element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate/>} />
        </Route>
      </ Routes>
    </BrowserRouter>
  )
}
export default App;