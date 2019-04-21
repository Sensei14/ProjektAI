import React, { Component } from "react";
import "../styles/products.css";
import { Button , Modal , ModalHeader , ModalFooter , ModalBody } from 'reactstrap';



class ProductPage extends Component {

  state = {
    value: 0,
    availble: 7,
    isModalOpen:false,
    isModalInfoOpen:false
  };



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
      value: 0
    });
  };

  handleToggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleToggleInfo = () => {
    this.setState({
      isModalInfoOpen: !this.state.isModalInfoOpen
    })
  }
  
  


    render (){
    return (
        <div className="products">
            <img src="https://ecsmedia.pl/c/biotech-odzywka-bialkowa-iso-whey-zero-908-g-w-iext52941782.jpg" alt=""/>
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
                <Button onClick={this.handleBuy}>Kup</Button>
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
        </Modal>

        </div>
    );
}}

export default ProductPage;