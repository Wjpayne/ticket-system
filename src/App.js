import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { AddTicket } from "./Pages/AddTicket/AddTicket";
import { TicketList } from "./Pages/TicketList";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { TicketPage } from "./Pages/TicketPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from './Components/PrivateRoutes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path = "/add-ticket">
          <AddTicket />
          </PrivateRoute>
          <PrivateRoute path = "/ticket-list">
          <TicketList />
          </PrivateRoute>
          <PrivateRoute path = "/ticket-page">
          <TicketPage />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
