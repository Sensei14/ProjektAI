import React from "react";
import bialeczko1 from "../images/bialeczko1.png";
import "../styles/singleproduct.css";
import { Link } from "react-router-dom";

class SingleProduct extends React.Component {
  state = {
    count: 0
  };

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);
  };

  render() {
    return (
      <>
        <div className="single-container">
          <div className="name"> {this.props.match.params.name} </div>

          <div className="imgs">
            <img src={bialeczko1} alt="zdj" />
            
          </div>
                <div className="amount-item"><button className="amount">750g</button></div>
                <div className="info-item">
                 <div className="info">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Opis</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Skład</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Zalecane dawkowanie</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">ALLNUTRITION Whey Protein to białko w któregokimrozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu.ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu.</div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Sportowcy różnych dyscyplin 1-3 razy dziennie uwzględniając zapotrzebowanie w diecie. W fazie redukcji tkanki tłuszczowej i poprawy estetyki sylwetki sugerujemy rozpuszczać WPC PROTEIN PLUS w wodzie, a przypadku budowy masy mięśniowej w mleku ( 250 - 300 ml ). W celu zahamowania tzw. nocnego katabolizmu przyjmować porcję zaraz po przebudzeniu oraz przed snem.</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">wej i poprawy estetyki sylwetki sugerujemy rozpuszczać WPC PROTEIN PLUS w wodzie, a przypadkuwej i poprawy estetyki sylwetki sugerujemy rozpuszczać WPC PROTEIN PLUS w wodzie, a przypadku.</div>
                    </div>
                 
                 
                 </div>

                </div>

                <div className="price-add-item">
                    <div className="price-add">
                         39.99 zł

               <p> <button >Dodaj do koszyka</button>
                    </p>
                </div>
                </div>

          
        </div>
        <br/>
        <Link to="/products">Powrót do produktów</Link>
       
      </>







      // <div className="product-zbiornik">
      //     <div className="name"> {this.props.match.params.name} </div>
      //     <div className="img-description-price">

      //         <img src={bialeczko1} alt="zdj" />
      //         <div className="price"> 39,99 zł
      //         <button className="amount">750 g</button>
      //             <button className="add" onClick={this.handleAdd}>Dodaj do koszyka</button>
      //         </div>
      //         <div className="desc">ALLNUTRITION Whey Protein to białko w którego skład wchodzi czysty koncentrat białka serwatki bez dodatku innych mniej wartościowych składników. Nasze białko charakteryzuje się szybkim wchłanianiem, wysokim poziomem aminokwasów rozgałęzionych oraz wysoką wartością biologiczną (BV 104). Białko pomaga w utrzymaniu masy mięśniowej oraz przyczynia się do jej wzrostu."</div>

      //     </div>
      //     <div className="back">
      //         <Link to="/products">
      //             Powrót do produktów
      // </Link>
      //     </div>
      // </div>
    );
  }
}

export default SingleProduct;
