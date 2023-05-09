import AdminNav from "./components/admin/admin-nav/admin-nav";
import AdminRoute from "./components/admin/admin-nav/route";
import Img from "./components/admin/img";
import "./css/admin-main.css";

import { useLocation, useNavigate } from "react-router-dom";
import AdminLoginPage from "./components/admin-login/AdminLoginPage";
import { useEffect, useState } from "react";
export default function App() {
  const location = useLocation();
  // const [loggedIn, setLoggedIn] = useState(true);
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //     console.log(loggedInUser);
  //   }
  // }, []);
  // const navigate = useNavigate();

  return (
    <div className="App">
      {location.pathname == "/" ? (
        <>
          <AdminRoute />
        </>
      ) : (
        <>
          <div className="app-container">
            <Img src="./images/logo.png" class="logo" />
            <div className="admin-panel">
              <AdminNav />
              <div className="admin-body">
                <AdminRoute />
              </div>
            </div>
          </div>
        </>
      )}

      {/* //   <>
      //   <div className="app-container">
      //     <Img src="./images/logo.png" class="logo" />
      //     <div className="admin-panel">
      //       <AdminNav />
      //       <div className="admin-body">
      //         <AdminRoute />
      //       </div>
      //     </div>
      //   </div>
      //   </>
      // ):"" */}
    </div>
  );
}
