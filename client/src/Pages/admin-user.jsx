import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import {Link} from "react-router-dom"
import "./admin-user.css"

export const AdminUsers = () => {

    const [users, setUsers] = useState([]); // ek empty array pass krte h kyuki hume array chala h
    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken, // (auth.jsx) se token le rhe h
                },
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    // delete the user Function

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken, // (auth.jsx) se token le rhe h
                },
            });
            const data = await response.json();
            console.log(`users after delete ${data}`);
            
            if(response.ok){
                getAllUsersData(); // data delete krne ke baad page ko bar bar refresh krne ki zaroort nhi padegi direct is function ko call krege 
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, [])// [] = array dependency (taki taki jab hum page ko first time reload kr tabhi run ho bar bar run na ho)
    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin user data</h1>
                </div>
                <div className="container admin-user">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) => {
                                return <tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone}</td>
                                    <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                    <td><button onClick={() => deleteUser(curUser._id)}>
                                        {/* argument pass krna tha isiliye fat arrow fun ka use kiya (jo bhi id pass karege usko delete krna h ) */}
                                        Delete</button>
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    );
}