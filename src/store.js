
import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./Components/TicketTable/TicketSlice";
import loginReducer from "./Components/Login/LoginSlice";
import userReducer from "./Pages/Dashboard/UserSlice"


const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,

  },
});

export default store;