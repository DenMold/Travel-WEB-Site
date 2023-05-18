
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Benefits from "./components/Benefits/Benefits";

import "./App.css";

function App() {
  return (
    <div className="wraper">
      <Header />
      <MainPage />
      <Benefits />
      <h1>About</h1>
    </div>
  );
}

export default App;
