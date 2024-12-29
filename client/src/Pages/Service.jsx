// import { useAuth } from "../store/auth";

// export const Service = () => {

//     const { services } = useAuth();

//     return (
//         <section className="section-services">
//             <div className="container">
//                 <h1 className="main-heading">Services</h1>
//             </div>

//             <div className="container grid grid-three-cols">
//                 {
//                     services.map((curElem, index) => {
//                         const { brand, model, color, transmission } = curElem;
//                         return (
//                             <div className="card" key={index}>
//                                 <div className="class-img">
//                                     <img src="" alt="our services" width={500} />
//                                 </div>

//                                 <div className="card-details">
//                                     <div className="grid grid-two cols">
//                                         <p>{brand}</p>
//                                         <p>{model}</p>
//                                     </div>
//                                     <h2>{color}</h2>
//                                     <p>{transmission}</p>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         </section>
//     );
// }

import { useAuth } from "../store/auth";
import "./service.css"
export const Service = () => {
  //data get kr liya auth.jsx files se
  const { services } = useAuth();
  //ab loop me chalana he card ko

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container1 ">
          {services.map((currElem, index) => {
            const { brand, model, year, color, price_per_day, contact, image, availability } = currElem; //destructure
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img
                    src={image}
                    width="250"
                    height="200"
                  />
                </div>

                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{brand}</p>
                    <p>{price_per_day}</p>
                  </div>
                  <h1>{model}</h1>
                  <p>{color}</p>
                  <p>{year}</p>
                  <p>{contact}</p>
                  <p>{availability}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};
