// import Img from "./components/admin/img";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdOutlinePayments,
  MdOutlineRateReview,
  MdOutlineDirectionsBike,
} from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaCubes, FaUserAlt, FaUserTie } from "react-icons/fa";
import { AiOutlineFileDone, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import Navitem from "./navitem";
import Img from "../img";

export default function AdminNav(props) {
  console.log(props.username);
  const userName = props.username;
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();
  const ref = useRef();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const logOut = () => {
    axios
      .get("http://localhost:4000/api/v1/logout", {
        withCredentials: true,
      })
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        navigate("/");
      });
  };

  return (
    <div>
      <button className="ham-admin" onClick={() => setToggle(!toggle)}>
        <GiHamburgerMenu />
      </button>
      <nav className={`admin-nav ${toggle ? "nav-toggle" : ""}`} ref={ref}>
        <div className="nav-close">
          <span
            onClick={() => {
              setToggle(false);
            }}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className="profile-details">
          {/* <Img src="./images/profile.png" class="profile" /> */}
          <Img src="./images/profile.png" class="profile" />
          <div>
            <h2>{userName}</h2>
            <p>Admin Manager</p>
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>

        <div className="nav-content">
          <ul>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin"
            >
              <MdSpaceDashboard /> Dashboard
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/homepage"
            >
              <BiHomeAlt /> Home Page
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/categories"
            >
              <TfiMenuAlt /> Categories
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/products"
            >
              <FaCubes /> Products
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/customerdetails"
            >
              <FaUserAlt /> Customer Details
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/orderdetails"
            >
              <AiOutlineFileDone /> Order Details
            </Navitem>
            {/* <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/payment"
            >
              <MdOutlinePayments /> Payment Details
            </Navitem> */}
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/reviews"
            >
              <MdOutlineRateReview /> Reviews
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/admin2"
            >
              <FaUserTie /> Admin Details
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin/riderdetails"
            >
              <MdOutlineDirectionsBike /> Rider Details
            </Navitem>
          </ul>
        </div>
      </nav>
    </div>
  );
}
