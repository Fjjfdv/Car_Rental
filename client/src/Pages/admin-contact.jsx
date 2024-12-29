import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import "./admin-user.css"

export const AdminContacts = () => {
    const [contactData, setContactData] = useState([]);
    const { authorizationToken } = useAuth();
    const getContactsData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("contact data", data);
            if (response.ok) {
                //console.log(response);
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteContactById = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`users after delete ${data}`);
            if (response.ok) {
                getContactsData();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getContactsData();
    }, [])
    return (<>
        {/* <h1>Contacts</h1>
        {contactData.map((curEle, index) => {
            return <p key={index}>{curEle.username}</p>
        })} */}

        {/* <section className="admin-users-section">
            <div className="container">
                <h1>Admin contact data</h1>
            </div>
            <div className="container admin-user">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactData.map((curUser, index) => {
                            return <tr key={index}>
                                <td>{curUser.username}</td>
                                <td>{curUser.email}</td>
                                <td>{curUser.message}</td>
                                <td>Delete</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        </section> */}

        <section className="admin-contacts-section">
            <h1>Admin Contact Data</h1>
            <div className="container admin-users">
                {contactData.map((curContactData, index) => {
                    const { username, email, message } = curContactData;
                    return (
                        <div key={index}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{message}</p>
                            <p className="btn"> <button onClick={() => deleteContactById(_id)}>
                                {/* argument pass krna tha isiliye fat arrow fun ka use kiya (jo bhi id pass karege usko delete krna h ) */}
                                Delete</button></p>
                        </div>
                    );
                })}
            </div>
        </section>

    </>)
}