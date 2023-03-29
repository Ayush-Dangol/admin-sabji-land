import Img from "../img";
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

export default function AdminNav() {
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
            <h2>Fiyonna</h2>
            <p>Admin Manager</p>
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
            {/* <Navitem
              click={() => {
                handleToggle();
              }}
              to="/employeedetails"
            >
              <FaUserTie /> Employee Details
            </Navitem> */}
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
