import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';



const Product = (props) => {

   
    return ( 
        <div>
        {props.name}
        <div>
         {props.opis}
         {/* DODAWANIE DO KOSZYKA */}
                {/* {props.isSomethinginShopCard ? (<div id="wheel">XD </div>) : null} */}
            </div>
        <Button onClick={props.handleToggleModal}>Dodaj do koszyka</Button>


            <Modal isOpen={props.isModalOpen}>
                <ModalHeader>ODZYWKA KREATYNKA </ModalHeader>
                <ModalBody>
                    <p>Dostępna ilość produktu to {props.availble} </p>

                    <Button
                        disabled={props.value === props.availble ? true : false}
                        onClick={() => props.handleChangeValue("+")}
                    >
                        +
        </Button>
                    <Button disabled>
                        <span> {props.value}</span>
                    </Button>
                    <Button
                        disabled={props.value === 0 ? true : false}
                        onClick={() => props.handleChangeValue("-")}
                    >
                        -
        </Button>
                    <span>
                        {props.value > 0 ? (
                            <Button onClick={props.handleBuy}>Dodaj do koszyka</Button>
                        ) : null}
                    </span>


                </ModalBody>
                <ModalFooter>
                    <button onClick={props.handleToggleModal}>Cancel</button>
                </ModalFooter>

            </Modal>













                {/* <Button onClick={() => props.handleToggleModal}>Dodaj do koszyka</Button>
                  <Modal isOpen={props.isModalOpen}>
                <ModalHeader>ODZYWKA KREATYNKA </ModalHeader>
                <ModalBody>
                    <p>Dostępna ilość produktu to {props.availble} </p>

                    <Button
                        disabled={props.value === props.availble ? true : false}
                        onClick={() => props.handleChangeValue("+")}
                    >
                        +
        </Button>
                    <Button disabled>
                        <span> {props.value}</span>
                    </Button>
                    <Button
                        disabled={props.value === 0 ? true : false}
                        onClick={() => props.handleChangeValue("-")}
                    >
                        -
        </Button>
                    <span>
                        {props.value > 0 ? (
                            <Button onClick={props.handleBuy}>Dodaj do koszyka</Button>
                        ) : null}
                    </span>


                </ModalBody>
                <ModalFooter>
                    <button onClick={props.handleToggleModal}>Cancel</button>
                </ModalFooter>

            </Modal>

            <Button onClick={props.handleToggleInfo}>Informacje o produckie</Button>

            <Modal isOpen={props.isModalInfoOpen}>
                <ModalHeader>Informacje o produkcie</ModalHeader>
                <ModalBody>{props.opis}
          </ModalBody>
                <ModalFooter>
                    <button onClick={props.handleToggleInfo}>Cancel</button>
                </ModalFooter>
            </Modal>     */}
        </div>
     );
}
 
export default Product;
