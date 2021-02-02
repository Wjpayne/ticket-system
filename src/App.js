import "./App.css";

import LandingPage from "./Pages/LandingPage";
import { AddTicket } from "./Components/NewTicket/AddTicket"
import  Header  from "./Components/Layout/Header"
import { TicketList } from "./Pages/TicketList";
import { Dashboard } from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Dashboard /> */}
      {/* <LandingPage /> */}
      {/* <AddTicket /> */}
      <TicketList />
      
    </div>
  );
}

export default App;
