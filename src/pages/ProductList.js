import React, { Component } from "react";
import "../styles/products.css";
// import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import Product from "./Product";

class ProductList extends Component {

 
    state = {
        value: 0,
        availble: 7,
        isModalOpen: false,
        isModalInfoOpen: false,
        isSomethinginShopCard:false,
        products: [
            { id: 1,  name: "WPA Protein", opis: "ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu."},
            { id: 2,  name: "kreatyna", opis: "ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu." },
            { id: 3,  name: "Sterydy", opis: "ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu." },
            { id: 4,  name: "Bcca", opis: "ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu." },
            { id: 5,  name: "Wpa", opis: "ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu." },
            { id: 6,  name: "Shot", opis: " ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu." },
        ]

    }


    handleChangeValue = type => {
        if (type === "+") {
            this.setState({
                value: this.state.value + 1
            });
        } else if (type === "-") {
            this.setState({
                value: this.state.value - 1
            });
        }


    };

    handleBuy = () => {
        this.setState({
            availble: this.state.availble - this.state.value,
            value: 0,
            isSomethinginShopCard:true
        });
    };

  handleToggleModal = () => {
    console.log("xd");
    this.setState({
        isModalOpen: !this.state.isModalOpen
    })
      
}


    handleToggleInfo = () => {
        this.setState({
            isModalInfoOpen: !this.state.isModalInfoOpen
        })
    }






    render() {

        let products = [...this.state.products];
        products = products.map(product => (
            <Product
                key={products.id}
                products ={product}
                
            />
            

        ));

        return (
            <div className="products-container">


                {products}
               
            

            </div>
        );
    }
}

export default ProductList;