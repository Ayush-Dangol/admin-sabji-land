import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Input from "./input";
// var RNFS = require("react-native-fs");

export default function AddCustomers({
  name,
  type,
  image,
  cnum,
  snum,
  cEmail,
  cAddress,
  id,
  url,
  close,
  call,
  lastid,
}) {
  const [fname, setFName] = useState("");
  const [cNumb, setCNumb] = useState();
  const [address, setAddress] = useState("");
  const [sNumb, setSNumb] = useState();
  const [email, setEmail] = useState();
  const [img, setImg] = useState();
  const [pcategory, setCategory] = useState("");
  const [ppackage, setPackage] = useState("");
  const [pfamily, setFamily] = useState("");
  const [ptype, setType] = useState("");
  const [porganic, setOrganic] = useState("");
  const [pedible, setEdible] = useState("");

  const ref = useRef();
  useEffect(() => {
    console.log(type);
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // close(false);
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
    setFName(name);
    setCNumb(cnum);
    setSNumb(snum);
    setAddress(cAddress);
    setEmail(cEmail);
  }, [id]);

  const setImage = (img) => {
    setImg(img);
    return img;
  };
  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();
    const dates = String(date);
    console.log(dates.slice(3, 21));

    const obj = { date: dates.slice(3, 21) };
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    const imgData = { image: img };
    const lId = { id: lastid + 1 };

    if (call === "POST") {
      const jsonData = Object.assign(value, obj, imgData, lId);

      let jsonS = JSON.stringify(jsonData);

      fetch(`${url}`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonS,
      })
        .then(() => {
          close(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const jsonData = Object.assign(value, obj, imgData);

      let jsonS = JSON.stringify(jsonData);
      fetch(`${url}/${id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonS,
      })
        .then(() => {
          close(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <>
      <div className="add-customer-container" ref={ref}>
        <form className="add-customer" onSubmit={handleSubmit}>
          <h2>Add Customer Details</h2>

          <button className="close-add" onClick={close}>
            <AiOutlineClose />
          </button>
          <div className="add-products-left">
            <div className="product-left-item1">
              <Input
                type="text"
                name={type}
                data="Full Name"
                placeholder="John Cena"
                value={fname}
                change={(e) => setFName(e.target.value)}
              />
              <Input
                type="number"
                name="contact"
                data="Contact number"
                value={cNumb}
                change={(e) => setCNumb(e.target.value)}
                placeholder="eg: 9821312312"
              />
              <Input
                type="text"
                name="address"
                data="Address"
                placeholder="eg: Lokantahali"
                value={address}
                change={(e) => setAddress(e.target.value)}
              />
              <Input
                type="number"
                name="secNum"
                data="Secondary number"
                value={sNumb}
                change={(e) => setSNumb(e.target.value)}
                placeholder="eg: 9821312312"
              />
              <Input
                type="email"
                name="email"
                data="Email Address"
                value={email}
                change={(e) => setEmail(e.target.value)}
                placeholder="eg: Arnulfo97@gmail.com"
              />
            </div>

            <button onSubmit={handleSubmit} className="add-save">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
