import { NavLink, Outlet } from "react-router-dom"
import { LuUsers } from "react-icons/lu"; // Import user icon
import { IoMdContact } from "react-icons/io";
import { FaRegListAlt, FaHome } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
export const AdminLayout = () => {
   return (
      <>
         <header>
            <div className="container">
               <nav>
                  <ul>
                     <li><NavLink to="/admin/users"><LuUsers /> users</NavLink></li>
                     <li><NavLink to="/admin/contacts"><IoMdContact /> Contacts</NavLink></li>
                     <li><NavLink to="/admin/services"><FaRegListAlt /> Services</NavLink></li>
                     <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                  </ul>
               </nav>
            </div>
         </header>
         <Outlet>
            {/* nested routes ke content ko dikhane ka kam krta h */}
         </Outlet>
      </>
   );
};