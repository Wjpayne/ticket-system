
import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./Components/TicketSlice/TicketSlice";
import loginReducer from "./Components/Login/LoginSlice";


const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
  },
});

export default store;