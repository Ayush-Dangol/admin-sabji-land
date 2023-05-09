import Img from "../img";
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

export default function AdminNav(props) {
  const [userName, setUserName] = useState(useLocation());
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

  useEffect(() => {
    if (loggedIn == false) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  const logOut = () => {
    setLoggedIn(false);
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
          <Img src="./images/profile.png" class="profile" />
          <div>
            <h2>{userName.state.username}</h2>
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
              to="/dashboard"
            >
              <MdSpaceDashboard /> Dashboard
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/homepage"
            >
              <BiHomeAlt /> Home Page
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/categories"
            >
              <TfiMenuAlt /> Categories
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/products"
            >
              <FaCubes /> Products
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/customerdetails"
            >
              <FaUserAlt /> Customer Details
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/orderdetails"
            >
              <AiOutlineFileDone /> Order Details
            </Navitem>
            {/* <Navitem
              click={() => {
                handleToggle();
              }}
              to="/payment"
            >
              <MdOutlinePayments /> Payment Details
            </Navitem> */}
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/reviews"
            >
              <MdOutlineRateReview /> Reviews
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/admin2"
            >
              <FaUserTie /> Admin Details
            </Navitem>
            <Navitem
              click={() => {
                handleToggle();
              }}
              to="/riderdetails"
            >
              <MdOutlineDirectionsBike /> Rider Details
            </Navitem>
          </ul>
        </div>
      </nav>
    </div>
  );
}
