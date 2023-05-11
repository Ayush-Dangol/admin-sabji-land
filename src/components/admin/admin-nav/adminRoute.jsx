import { Route, Routes } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNav from "./admin-nav";
import Img from "../img";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminRoute(props) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  // const [currentTime, setCurrentTime] = useState(new Date());
  // const [expirationTime, setExpirationTime] = useState(null);
  // console.log(expirationTime);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 10000); // 10 seconds

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // useEffect(() => {
  //   setExpirationTime(localStorage.expire);
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date());
  //     console.log(currentTime);

  //     if (expirationTime && expirationTime < currentTime) {
  //       console.log("Hello");
  //     }
  //   }, 10000); // Check every 10 seconds

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // if (currentTime > expireDate) {
  //   console.log("hello");
  // }

  const [show, setShow] = useState(false);

  const [expirationTime, setExpirationTime] = useState(null);

  useEffect(() => {
    const expireTime = new Date(localStorage.expire); // 10 seconds later

    setExpirationTime(expireTime);
  }, []);
  useEffect(() => {
    console.log(expirationTime);

    const interval = setInterval(() => {
      const currentTime = new Date();
      console.log(currentTime);
      if (expirationTime && expirationTime < currentTime) {
        localStorage.removeItem("token");
        console.log(localStorage);
      } else {
        console.log("asdf");
      }
    }, 4 * 24 * 60 * 60 * 1000); // Check every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, [expirationTime]);

  axios
    .get("http://127.0.0.1:4000/api/v1/whoami", {
      headers: {
        token: `${localStorage.token}`,
      },
    })
    .then((res) => {
      console.log("success", res);
      setUser(res.data.user.name);
      console.log(user);
      if (res.message) {
        navigate("/");
      } else {
        setShow(true);
      }
    })
    .catch((err) => {
      console.log(err);
      navigate("/");
    });

  return (
    <div>
      {show ? (
        <>
          <div className="app-container">
            <Img src="./images/logo.png" class="logo" />
            {/* <Img src="./images/logo.png" class="logo" /> */}
            <div className="admin-panel">
              <AdminNav username={user} />
              <div className="admin-body">
                <Outlet />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
