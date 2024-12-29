import { useState } from "react";
// import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const defaultContactFormData = {  // setuser me jo bhi value dalege to vo update ho jayegi user me 
    // ye same hona chahiye name ke
    brand:"",
    model:"",
    image:"",
    color:"",
    year:"",
    price_per_day:"",
    contact:"",
    availability:"",
}

export const Data = () => {

    const [contact, setcontact] = useState(defaultContactFormData);

    const navigate = useNavigate();
//    const { storetokenInLS } = useAuth();
    // handling input values
    const handleInput = (e) => {
    //    console.log(e);  // har ek word likhne par console me vo print ho jata h
        let name = e.target.name;
        let value = e.target.value;

        setcontact({
            ...contact, //  spread operator h user ka baki data same rahe baki field ka jisko change nhi kr rhe h 
            [name]: value,  // dynamic value updatation
        });
    };
    // Handing form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
       // console.log(contact);
       // alert("contact")
        try {
            const response = await fetch("http://localhost:5000/api/user/data", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(contact),
            })
            if (response.ok) {
                setcontact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert("data sent successfully");
            }
        } catch (error) {
            alert("data not sent");
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
                                <img src="https://tse2.mm.bing.net/th?id=OIP.tdTQvcCW6Pyt7e3qBTBdfwHaF6&pid=Api&P=0&h=180" alt="Registration" width="320px" height="320px" />
                            </div>
                            {/* let tackle registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">userData</h1>
                                <br /> <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="brand">brand</label><br />
                                        <input type="text" name="brand" placeholder="Enter your brand" id="brand" required autoComplete="off" value={contact.brand} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="model">model</label><br />
                                        <input type="text" name="model" placeholder="Enter your model" id="model" required autoComplete="off" value={contact.model} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="image">image link</label><br />
                                        <input type="text" name="image" placeholder="Enter your image" id="image" required autoComplete="off" value={contact.image} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="color">color</label><br />
                                        <input type="text" name="color" placeholder="Enter your color" id="color" required autoComplete="off" value={contact.color} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="year">year</label><br />
                                        <input type="text" name="year" placeholder="Enter your year" id="year" required autoComplete="off" value={contact.year} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="price_per_day">price_per_day</label><br />
                                        <input type="text" name="price_per_day" placeholder="Enter your price_per_day" id="price_per_day" required autoComplete="off" value={contact.price_per_day} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="contact">contact</label><br />
                                        <input type="text" name="contact" placeholder="Enter your contact" id="contact" required autoComplete="off" value={contact.contact} onChange={handleInput} />
                                    </div> <br />
                                    <div>
                                        <label htmlFor="availability">availability</label><br />
                                        <input type="text" name="availability" placeholder="Enter your availability" id="availability" required autoComplete="off" value={contact.availability} onChange={handleInput} />
                                    </div> <br />
                                    <br /> <br />
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
