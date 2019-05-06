import React, { Component } from "react";
import "../styles/products.css";
// import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import Product from "./Product";
import SingleProduct from "./SingleProduct";

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
                
                // name={product.name}
                // opis={product.opis}
                // handleToggleInfo ={this.handleToggleInfo}
                // isModalInfoOpen ={this.isModalInfoOpen}
                // handleToggleModal ={this.handleToggleModal}
                // isModalOpen={this.state.isModalOpen}
                // handleBuy ={this.handleBuy}
                // handleChangeValue={this.handleChangeValue}
                // value={this.state.value}
                // availble={this.state.availble}
                // isSomethinginShopCard={this.state.isSomethinginShopCard}
               
            />
            

        ));

        return (
            <div className="products-container">


                {products}
               
                
                 {/* <img src="https://ecsmedia.pl/c/biotech-odzywka-bialkowa-iso-whey-zero-908-g-w-iext52941782.jpg" alt="" />
                <Button onClick={this.handleToggleModal}>Dodaj do koszyka</Button>

                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader>ODZYWKA KREATYNKA </ModalHeader>
                    <ModalBody>
                        <p>Dostępna ilość produktu to {this.state.availble} </p>

                        <Button
                            disabled={this.state.value === this.state.availble ? true : false}
                            onClick={() => this.handleChangeValue("+")}
                        >
                            +
        </Button>
                        <Button disabled>
                            <span> {this.state.value}</span>
                        </Button>
                        <Button
                            disabled={this.state.value === 0 ? true : false}
                            onClick={() => this.handleChangeValue("-")}
                        >
                            -
        </Button>
                        <span>
                            {this.state.value > 0 ? (
                                <Button onClick={this.handleBuy}>Dodaj do koszyka</Button>
                            ) : null}
                        </span>


                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.handleToggleModal}>Cancel</button>
                    </ModalFooter>

                </Modal>

                <Button onClick={this.handleToggleInfo}>Informacje o produckie</Button>

                <Modal isOpen={this.state.isModalInfoOpen}>
                    <ModalHeader>Informacje o produkcie</ModalHeader>
                    <ModalBody>KFD Premium WPC 80 to wysokiej jakości, instantyzowany i w 100% czysty koncentrat białka serwatkowego użyty jako główny składnik produktu.
                            Wyróżnia się doskonałą kompozycją smakową (w ofercie mamy kilkadziesiąt smaków do wyboru!).
                              Używany przez nas surowiec jest instantyzowany / aglomeryzowany - to znaczy, że charakteryzuje się doskonałą rozpuszczalnością, a po przygotowaniu nie powstaje uporczywa piana.
          </ModalBody>
                    <ModalFooter>
                        <button onClick={this.handleToggleInfo}>Cancel</button>
                    </ModalFooter>
                </Modal>    */}

            </div>
        );
    }
}

export default ProductList;