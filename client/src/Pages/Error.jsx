import { NavLink } from "react-router-dom"
export const Error =() => {
    return(
        <>
        <section id="error-page">
            <div className="container">
                <h2 className="header">404</h2>
                <h4>Sorry! Page not found</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci fuga iure, explicabo earum quaerat, dolor, consectetur unde facere nisi sequi possimus saepe laborum. Rem molestias quasi qui doloremque vero!
                </p>
                <div className="btns">
                    <NavLink to="/">return home</NavLink>
                    <NavLink to="/contact">report problem</NavLink>
                </div>
            </div>
        </section>
        </>
    )
}