export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p></p>
                            <h1>We will Provide the best cars</h1>
                            <p>
                                Car rental indirectly provides many advantages. Rental cars save your time and money as you don't have to worry about other things like insurance costs and pollution checks. With rental cars, you don't have to worry about these time-consuming details and make sure you enjoy your trip.

                                Although car hire gives you so many advantages, apart from these basic benefits long-term car hire is more useful when you are traveling in areas far away from your home or in other cities. Car rental companies make sure that you get a car easily at your new location.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>

                        {/* hero images */}
                        <div className="hero-image">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.6jhmEIyJvGJSEyCsX0ESRAAAAA&pid=Api&P=0&h=180" alt="" width={320} height={320} />
                        </div>
                    </div>
                </section>
            </main>

            <div className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Registration </p>
                    </div>
                    <div className="div1">
                        <h2>100 00+</h2>
                        <p>Happy clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Well Known Developers</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Services</p>
                    </div>
                </div>
            </div>

            <main>
                <section className="section-hero">
                    <div className="container grid grid-three-cols">
                        {/* hero images */}
                        <div className="hero-image">
                            <img src="https://www.cheapflights.com/carimages/14/3e/Van.png" alt="" width={320} height={320} />
                        </div>

                        {/* Details */}
                        <div className="hero-content">
                            <h2>Best Car Hire :</h2> <br />
                            <h1>Welcome to cars rental services</h1>
                            <p>
                                Super travels are an established car rental company in . We offer luxury cars on rent to explore the nearby places in the vehicles that best suit your needs. Whether you are going for a local tour or organizing a business trip, we provide you a simple and easy way to book a car on rent at affordable car rental rates.
                                 <br />
                                Our car rental services in  is the perfect choice to experience sightseeing between your destination. We offer an easy pick-up and drop facility, so you will be able to enjoy your journey with ease and comfort. We offer you the widest range of luxury cars on rent from Innova Crysta to XUV 500, Audi to Swift Dzire, BMW to Mercedes, and more with quick and easy booking.
                                   <br /><br />
                                We offer rental cars in  for all kinds of travelers. We provide car hire services from compact families, single travelers to large groups, there is a car for everyone. Rent cars in Indore at the daily or monthly rental.
                            </p>
                            <div className="btn btn-group">
                                {/* <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a> */}
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
// export default Home;