import "./About.css"
import { useAuth } from "../store/auth";

export const About = () => {

    const { user } = useAuth();

    return (
        <>
            <section>
                <main class="main">
                    <div className="section-registration">
                        <div className="container grid grid-temp-cols">
                            <div className="regitration-image">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.Z1pN62gb1u76MsHj-WNTdgHaEo&pid=Api&P=0&h=180" alt="Registration" width="390px" height="320px" />

                            </div>
                            {/* let tackle registration form */}
                            <div className="registration-form">

                                <p>Welcome {user ? `${user.username} to our website`: `to oue website`}</p>  {/* user ka name show karega agr user ne login kiya h to nhi to welcome to our website show krega */}
                                
                                <p>Our aim is to establish ourselves as a reliable car service in indore, Madhya pradesh and nearby. As a result, We have a long list of happy and satisfied customers which excite them to refer us to their neighbors, friends and relatives.</p>
                                <br />
                                <h1 className="main-heading mb-3">Why Super Travels is the best car rental company in Indore?</h1>
                                <br />
                                <p>Super travels is well known for providing the most reliable car rental services at competitive prices. We always try to provide a safe and hassle-free rental experience with the best available rates during your journey. We provide well maintained neat and clean AC Cars on rent in Indore with well trained and trustworthy Driver's. We offer a varied collection of cars, all our cars are regularly serviced and available in excellent condition.</p>
                                <br />
                            </div>
                        </div>
                        <p>
                            <p>With a wide variety of cars you can choose the vehicles on rent that best suits your needs, your family and your work. We are offering variety of luxury cars on rent in Indore to user like Toyata Innova Crysta, Maruti Swift Dzire, Xuv 500, Corolla, Honda CRV, Chevrolet Tavera, TATA Indica, Toyota ETIOS, and any more at a very competitive fares.</p>
                            <br />
                            <p>Car Hire In Indore For Outstation Travel: As a leading car hire in Indore our rental cars are perfect for holiday, business travel or visit to nearby places in Indore.</p>
                            <br />
                            <p>Car Rental Services in Indore For Local Travel: Our car rental services in Indore are ideal for business meetings, local tours, or a day out in the city.</p>
                            <br />
                            <p>Enjoy your trip with the best car rental company in Indore. Book your car with just a few clicks.</p>
                        </p>
                    </div>
                </main>
            </section>
        </>
    );
}
