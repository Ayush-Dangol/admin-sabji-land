import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./AdminLoginPage.css";
import data from "./User.js";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [adminLoginDetails, setAdminLoginDetails] = useState({
    adminUsername: "",
    adminPassword: "",
  });
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const handleAdminLoginForm = (event) => {
    const { name, value } = event.target;
    setAdminLoginDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(localStorage.getItem("authenticated"));

  const submitAdminLoginForm = () => {
    console.log(adminLoginDetails);
    const userData = data.find(
      (user) => user.username === adminLoginDetails.adminUsername
    );
    console.log(userData);
    if (userData) {
      if (userData.password === adminLoginDetails.adminPassword) {
        console.log("matched");
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setauthenticated(true);
        localStorage.setItem("authenticated", true);

        navigate("/dashboard", {
          state: {
            username: adminLoginDetails.adminUsername,
          },
        });
        setAdminLoginDetails({
          adminUsername: "",
          adminPassword: "",
        });
      } else {
        console.log("not matched");
        toast.error("username or password not matched", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      console.log("yoooo");
      toast.error("username or password not matched", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    // if (
    //   adminLoginDetails.adminUsername == "Prashant" &&
    //   adminLoginDetails.adminPassword == "maharjan"
    // ) {

    // }
  };
  return (
    <>
      <ToastContainer />
      <div className="adminLoginMain">
        <div className="adminLoginBox">
          <div className="adminLoginHeading">Are You an admin ?</div>
          <div className="adminLoginTitle">
            <span className="logo">
              <img
                src="https://i.postimg.cc/pT65LyC9/sabji-land-logo-1.png"
                alt="logo"
              />
            </span>
            <div className="adminLoginTitleText">Login</div>
          </div>
          <div className="adminLoginForm">
            <div className="adminInputBox">
              <input
                type="text"
                name="adminUsername"
                id="login-username"
                className="username input-feild"
                placeholder="Username *"
                onChange={handleAdminLoginForm}
                value={adminLoginDetails.adminUsername}
              />
            </div>
            <div className="adminInputBox">
              <input
                type="password"
                name="adminPassword"
                id="login-password"
                className="password input-feild"
                placeholder="Password *"
                onChange={handleAdminLoginForm}
                value={adminLoginDetails.adminPassword}
              />
            </div>

            <div className="adminRememberme">
              <input type="checkbox" name="rememder" id="remember" />
              Remember me
            </div>
          </div>

          <div className="adminLoginBtn" onClick={submitAdminLoginForm}>
            Login
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLoginPage;
