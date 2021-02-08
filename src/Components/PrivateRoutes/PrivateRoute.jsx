import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { loginSuccess } from "../Login/LoginSlice";
import { getUserProfile } from "../../Pages/Dashboard/UserActions";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewAccessToken } from "../../api/userAPI";

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessToken();
      result && dispatch(loginSuccess());
    };
    !sessionStorage.getItem("accessJWT") && localStorage.getItem("crmSite") && 
    updateAccessJWT();

   !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth]);

  return ( <Route render={() => (isAuth ? children : <Redirect to="/" />)} />);
  };
