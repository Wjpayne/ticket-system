import axios from "axios";

const rootUrl = "http://localhost:5000/"

const loginUrl = rootUrl + "user/login";
// const userProfileUrl = rootUrl + "user";
// const logoutUrl = rootUrl + "user/logout";
// const newAccessJWT = rootUrl + "token";

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(loginUrl, frmData);
  
        resolve(res.data);
  
        if (res.data.status === "success") {
          sessionStorage.setItem("accessJWT", res.data.accessJWT);
          localStorage.setItem(
            "crmSite",
            JSON.stringify({ refreshJWT: res.data.refreshJWT })
          );
        }
      } catch (error) {
        reject(error);
      }
    });
  };