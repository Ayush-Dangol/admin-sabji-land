import React, { useState } from "react";
import "./riderA.css";
import Input from "../Order/Input";

function RiderAdd(props) {
  const [file, setFile] = useState([]);

  function handleChange(e) {
    console.log(URL.createObjectURL(e.target.files[0]));
    let sel = URL.createObjectURL(e.target.files[0]);
    setFile((prevV) => [...prevV, sel]);
    console.log(file);
  }

  function displayImg(img) {
    <img src="img" alt="document" height="100px" width="100px" />;
  }

  return (
    <div className="pop-container">
      <div className="addR-container">
        {/* added props.click to close RiderAdd */}
        <div className="close-btn">
          <button onClick={props.click}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
            >
              <path
                fill="#777"
                d="M11 .5C5.15.5.5 5.15.5 11S5.15 21.5 11 21.5 21.5 16.85 21.5 11 16.85.5 11 .5Zm4.05 15.75L11 12.2l-4.05 4.05-1.2-1.2L9.8 11 5.75 6.95l1.2-1.2L11 9.8l4.05-4.05 1.2 1.2L12.2 11l4.05 4.05-1.2 1.2Z"
              />
            </svg>
          </button>
        </div>
        <div className="addR-heading">Add Riders</div>
        <div className="addR-content">
          <div className="addR-left">
            <div className="addR-form">
              <label>Name</label>
              <Input type="text" />
              <label>Contact no.</label>
              <Input type="text" />
              <label>Address</label>
              <Input type="text" />
              <label>Email</label>
              <Input type="text" />
            </div>
            <div className="addR-button">
              <button>Add</button>
            </div>
          </div>
          <div className="addR-right">
            <span className="upload-text">Upload Documents</span>
            <div className="border-d">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="36"
                fill="none"
              >
                <path
                  stroke="#DADADA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.667 30.667H5.001A3.667 3.667 0 0 1 1.334 27V5a3.667 3.667 0 0 1 3.667-3.667h22V10.5"
                />
                <path
                  stroke="#DADADA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.167 23.334H5.001A3.667 3.667 0 0 0 1.334 27m20.167-3.666 5.5-5.5m0 0 5.5 5.5m-5.5-5.5v16.5"
                />
              </svg>
              <span className="drop-text">Drag and Drop files here</span>
              <span className="support-text">
                Files supported: Png, Jpg, Pdf
              </span>
              <Input
                class="custom-file-input"
                onChange={handleChange}
                type="file"
                accept="image/jpg, image/jpeg, image/png, application/pdf"
              >
                Choose file
              </Input>
              <span className="size-text">Maximum size: 1MB</span>
            </div>
            <span className="added-text">Added Documents</span>
            <div className="added-doc">
              {file.map(() => {
                return (
                  <img src={file} alt="documents" height="50px" width="50px" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderAdd;
