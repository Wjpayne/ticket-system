import axios from "axios";

const rootUrl = "http://localhost:5000/";

const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user/get";
// const logoutUrl = rootUrl + "user/logout";
// const newAccessJWT = rootUrl + "token";

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);

      resolve(res.data);

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.createToken);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshToken: res.data.refreshToken })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchUser  = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const  accessJWT = sessionStorage.getItem('accessJWT')
      if(!accessJWT) {
        reject("Token not found")

      }
      const res = await axios.get(userProfileUrl, {headers: {Authorization: accessJWT,}});
      console.log(res)

      resolve(res.data);

    } catch (error) {
      reject(error.message);
    }
  });
};

