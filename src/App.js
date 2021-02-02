import "./App.css";

import LandingPage from "./Pages/LandingPage";
import { AddTicket } from "./Pages/AddTicket"
import  Header  from "./Components/Layout/Header"
import { TicketList } from "./Pages/TicketList";
import { Dashboard } from "./Pages/Dashboard";
import { TicketPage } from './Pages/TicketPage';

function App() {
  return (
    <div className="App">
      
      {/* <Dashboard /> */}
      {/* <LandingPage /> */}
      {/* <AddTicket /> */}
      {/* <TicketList /> */}
      <TicketPage />
      
    </div>
  );
}

export default App;
