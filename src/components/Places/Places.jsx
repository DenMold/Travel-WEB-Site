import "../Places/Places.css";
import place1 from "../../img/place1.jpg";
import place2 from "../../img/place2.jpg";
import place3 from "../../img/place3.jpg";
import place4 from "../../img/place4.jpg";
import place5 from "../../img/place5.jpg";

const Places = () => {
  return (
    <div className="places">
      <div className="places__wraper">
        <div className="places__header">
          <h3 className="places__title title">
            Get inspired for your next trip
          </h3>
          <a href="#" className="placees__view-all link">
            VIEW ALL
          </a>
        </div>
        <div className="places__cards">
          <figure className="places__card places__one">
            <img src={place1} alt="Mount Fuji" className="places__card_img-h"></img>
            <figcaption className="places__card_title">Mount Fuji</figcaption>
            <a href="#" className="places__card_link"></a>
          </figure>
          <figure className="places__card places__two">
            <img src={place2} alt="Kyoto" className="places__card_img-h"></img>
            <figcaption className="places__card_title">Kyoto</figcaption>
            <a href="#" className="places__card_link"></a>
          </figure>
          <figure className="places__card places__three">
            <img src={place3} alt="Niigata" className="places__card_img"></img>
            <figcaption className="places__card_title">Niigata</figcaption>
            <a href="#" className="places__card_link"></a>
          </figure>
          <figure className="places__card places__four">
            <img src={place4} alt="Tokyo" className="places__card_img"></img>
            <figcaption className="places__card_title">Tokyo</figcaption>
            <a href="#" className="places__card_link"></a>
          </figure>
          <figure className="places__card places__five">
            <img src={place5} alt="Sapporo" className="places__card_img"></img>
            <figcaption className="places__card_title">Sapporo</figcaption>
            <a href="#" className="places__card_link"></a>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Places;
