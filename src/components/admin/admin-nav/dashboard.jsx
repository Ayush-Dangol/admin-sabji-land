import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  //   console.log(loggedInUser);
  // }, []);
  // const navigate = useNavigate();

  return (
    <>
      {/* {authenticated ? (
        <> */}
      <h1 className="admin-title">Dashboard</h1>
      {/* </>
      ) : (
        navigate("/")
      )}*/}
    </>
  );
}
