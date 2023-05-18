import "./Benefits.css";
import icon1 from "../../img/Icon-1.jpg";
import icon2 from "../../img/Icon-2.jpg";
import icon3 from "../../img/Icon-3.jpg";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits__wrap">
        <h2 className="benefit__title">Benefits of Odigo</h2>
        <div className="benefit__cards">
          <div className="benefit__card">
            <div className="benefit__card-icon">
              <img src={icon1} alt="Welcome to Odigo!" className="benefit__card_img"></img>
            </div>
              <h2 className="benefit__card_title">Welcome to Odigo!</h2>
              <p className="benefit__card_text">
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <a href="#" className="benefit__card_link">
                LEARN MORE
              </a>
            
          </div>
          <div className="benefit__card">
            <div className="benefit__card-icon">
              <img src={icon2} alt="Your Personal Japan Guide" className="benefit__card_img"></img> 
            </div>
              <h2 className="benefit__card_title">Your Personal Japan Guide</h2>
              <p className="benefit__card_text">
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <a href="#" className="benefit__card_link">
                LEARN MORE
              </a>
           
          </div>
          <div className="benefit__card">
            <div className="benefit__card-icon">
              <img src={icon3} alt="Your Personal Japan Guide" className="benefit__card_img"></img>
            </div>
            <h2 className="benefit__card_title">Promoting Local Businesses</h2>
            <p className="benefit__card_text">
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </p>
            <a href="#" className="benefit__card_link">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
