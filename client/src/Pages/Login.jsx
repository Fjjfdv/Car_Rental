// import { useState } from "react";

// const URL = `http://localhost:5000/api/auth/login`;

// export const Login = () => {

//     const [user, setUser] = useState({  // setuser me jo bhi value dalege to vo update ho jayegi user me 
//      // ye same hona chahiye name ke
//         email: "",
//         password: "",
//     });

//     // handling input values
//     const handleInput = (e) => {
//         console.log(e);
//         let name = e.target.name; // ye console se pata chalta h 
//         let value = e.target.value;

//         setUser({
//             ...user, //  spread operator h user ka baki data same rahe baki field ka jisko change nhi kr rhe h 
//             [name]: value,  // dynamic value updatation
//         });
//     };

//     // Handing form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(user);

//         try {
//             const response = await fetch(URL, {
//                method: "POST",
//                headers:{
//                 'Content-Type': "application/json"
//                },
//                body:JSON.stringify(user),
//             });

//             console.log("login",response);

//             if(response.ok){

//                 setUser({email:"", password:""});
//                 alert("Login successful");
                
//             }else{
//                 alert("invalid credential")
//                 console.log('invalid credential');
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <>
//             <section>
//                 <main>
//                     <div className="section-registration">
//                         <div className="container grid grid-two-cols">
//                             <div className="regitration-image">
//                                 <img src="https://tse2.mm.bing.net/th?id=OIP.tdTQvcCW6Pyt7e3qBTBdfwHaF6&pid=Api&P=0&h=180" alt="Login" width="320px" height="320px" />
//                             </div>
//                             {/* let tackle registration form */}
//                             <div className="registration-form">
//                                 <h1 className="main-heading mb-3">Login</h1>
//                                 <br /> <br />
//                                 <form onSubmit={handleSubmit}>
                                    
//                                     <div>
//                                         <label htmlFor="email">Email i'd </label>
//                                         <input type="email" name="email" placeholder="Enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
//                                     </div>
//                                     <br />
//                                     <div>
//                                         <label htmlFor="password">Password </label>
//                                         <input type="password" name="password" placeholder="Enter your Password" id="Password" required autoComplete="off" value={user.password} onChange={handleInput} />
//                                     </div>
//                                     <br /> <br />
//                                     <button type="submit" className="btn btn-submit">Login</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </main>
//             </section>
//         </>
//     );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

const URL = `http://localhost:5000/api/auth/login`;

export const Login = () => {

    const [user, setUser] = useState({  // setuser me jo bhi value dalege to vo update ho jayegi user me 
     // ye same hona chahiye name ke
        email: "",
        password: "",
    });
    const navigate=useNavigate();
    const {storetokenInLS}= useAuth();

    // handling input values
    const handleInput = (e) => {
     //   console.log(e);
        let name = e.target.name; // ye console se pata chalta h 
        let value = e.target.value;

        setUser({
            ...user, //  spread operator h user ka baki data same rahe baki field ka jisko change nhi kr rhe h 
            [name]: value,  // dynamic value updatation
        });
    };

    // Handing form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(URL, {
               method: "POST",
               headers:{
                'Content-Type': "application/json"
               },
               body:JSON.stringify(user),
            });

            console.log("login",response);

            const res_data = await response.json();
            if(response.ok){
                storetokenInLS(res_data.token);// Store the token in Local storage
                // localStorage.setItem("token", res_data.token); // same h

                setUser({email:"", password:""});
                toast.success("Login successful");
                navigate("/");
            }else{
                toast.error(res_data.extraDetails? res_data.extraDetails: res_data.message);
              //  toast("invalid credential")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="regitration-image">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.tdTQvcCW6Pyt7e3qBTBdfwHaF6&pid=Api&P=0&h=180" alt="Login" width="320px" height="320px" />
                            </div>
                            {/* let tackle registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login</h1>
                                <br /> <br />
                                <form onSubmit={handleSubmit}>
                                    
                                    <div>
                                        <label htmlFor="email">Email i'd </label>
                                        <input type="email" name="email" placeholder="Enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="password">Password </label>
                                        <input type="password" name="password" placeholder="Enter your Password" id="Password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                    </div>
                                    <br /> <br />
                                    <button type="submit" className="btn btn-submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
