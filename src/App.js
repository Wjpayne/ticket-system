import "./App.css";
import { Layout } from "./Components/Layout/Layout";
import LandingPage from "./Pages/LandingPage";
import { AddTicket } from "./Components/NewTicket/AddTicket"

function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      {/* <LandingPage /> */}
      <AddTicket />
      
    </div>
  );
}

export default App;
