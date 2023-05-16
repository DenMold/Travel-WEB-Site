import "../MainPage/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainPage__wrapper">
        <hi className="mainPage__title">Discover Amazing places in Japan</hi>
        <p className="mainPage__subtitle">
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this if i had the energy but under the bed, for attack the child, open
          the door.
        </p>
        <form className="mainPage__form">
            <fieldset className="mainPage__form-group">
                <div className="mainPage__form__info">
                <input type="text" name='like-to-do' className="mainPage__form-field" placeholder="What would you like to do?"></input>
             
                <input type="text" name="like-to-go" className="mainPage__form-field" placeholder="Where would you like to go?"></input>
            
                <button className="mainPage__submit" type="submit">search</button>
                </div>
                
            </fieldset>
        </form>
      </div>
    </div>
  );
};
export default MainPage;
