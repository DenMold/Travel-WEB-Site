
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Benefits from "./components/Benefits/Benefits";
import Places from "./components/Places/Places";

import "./App.css";

function App() {
  return (
    <div className="wraper">
      <Header />
      <MainPage />
      <Benefits />
      <Places />
      <h1>About</h1>
    </div>
  );
}

export default App;
