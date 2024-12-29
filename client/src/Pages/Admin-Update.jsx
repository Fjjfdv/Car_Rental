import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams(); // ID get krne ke liye params ka use kiya 
    console.log("params single user data:", params);
    const { authorizationToken } = useAuth();

    // Logic to get single user data
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {// login krte time jo token aur user_id milti h usko postman me dal ke check kr skte h
                method: "GET",
                headers: {
                    Authorization: authorizationToken, // (auth.jsx) se token le rhe h
                },
            });
            const data = await response.json();
            console.log(`single user data ${data}`);
            setData(data);
            // if (response.ok) {
            //     getAllUsersData(); // data delete krne ke baad page ko bar bar refresh krne ki zaroort nhi padegi direct is function ko call krege 
            // }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, [])

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        })
    }

    // To update the data 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {// login krte time jo token aur user_id milti h usko postman me dal ke check kr skte h
                method: "PATCH",
                headers: {
                    'Content-Type': "application/json",
                    Authorization: authorizationToken, // (auth.jsx) se token le rhe h
                },
                body: JSON.stringify(data), // obj ko json me convert krta h hum ek body pass kr rhe h jisko backend me req krege (req.body) krke
            },
            );
            if (response.ok) {
                toast.success("updated successfully")
            }else{
                toast.error("Not updated")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="regitration-image">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.tdTQvcCW6Pyt7e3qBTBdfwHaF6&pid=Api&P=0&h=180" alt="Registration" width="320px" height="320px" />
                            </div>
                            {/* let tackle registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Update user data</h1>
                                <br /> <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username </label>
                                        <input type="text" name="username" placeholder="Enter your username" id="username" required autoComplete="off" value={data.username} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="email">Email i'd </label>
                                        <input type="email" name="email" placeholder="Enter your email" id="email" required autoComplete="off" value={data.email} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="phone">Phone   </label>
                                        <input type="phone" name="phone" placeholder="Enter your phone" id="phone" required autoComplete="off" value={data.phone} onChange={handleInput} />
                                    </div>
                                    <br /> <br />
                                    <button type="submit" className="btn btn-submit">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}