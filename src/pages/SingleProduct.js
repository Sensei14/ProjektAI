import React from 'react';
import bialeczko1 from "../images/bialeczko1.png";
import "../styles/singleproduct.css";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
    console.log(props);
    return (  
        <div className="product-container">
            <div className="name"> {props.match.params.name} </div>
        <div className="img-description-price">
        
             
            <img src={bialeczko1} alt="kasztan"/>
            <div className="price"> 39,99 zł </div>
                <div className="desc">ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu."</div>
                 <button className="amount">750 g</button>
                <div > <Link to="/"> <button className="add">Dodaj do koszyka</button></Link></div> 
        </div>
        <div className="back">
            <Link to="/products">
                Powrót do produktów
            </Link>
            </div>
        </div>
    );
}
 
export default SingleProduct;

