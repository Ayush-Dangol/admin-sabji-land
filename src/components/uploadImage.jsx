import { useState, useRef, useEffect } from "react";

// export default function UploadImg(props) {
//   const [selectedImage, setSelectedImage] = useState([]);

//   const handleChange = (e) => {
//     if (e.target.files) {
//       const imgArray = Array.from(e.target.files).map((file) =>
//         URL.createObjectURL(file)
//       );

//       setSelectedImage((prevImages) => prevImages.concat(imgArray));
//     }
//   };

//   const showImage = (source) => {
//     return source.map((image) => {
//       return <img src={image} alt="" key={image} />;
//     });
//   };

//   const [dragActive, setDragActive] = useState(false);

//   // handle drag events
//   const handleDrag = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   // triggers when file is dropped
//   const handleDrop = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       // at least one file has been dropped so do something
//       // handleFiles(e.dataTransfer.files);
//     }
//   };

//   return (
//     <div className="add-ad">
//       <div className="img-head">
//         <h1 className="img-title">{props.title}</h1>
//         <button>...</button>
//         <ul>
//           <li>Update Image</li>
//           {/* <li onClick={() => setShowImg(false)}>Delete Image</li> */}
//         </ul>
//       </div>
//       <div className="img-body">
//         <input
//           type="file"
//           name="file"
//           id="file"
//           className="input-f"
//           onChange={handleChange}
//         />
//         <label
//           onDragEnter={handleDrag}
//           id="label-file-upload"
//           htmlFor="file"
//           className={dragActive ? "drag-active" : ""}
//           onDragLeave={handleDrag}
//           onDragOver={handleDrag}
//           onDrop={handleDrop}
//         >
//           {console.log(dragActive)}
//           <div>
//             <p>Drag and drop your file here or</p>
//             <button className="upload-button">Upload a file</button>
//           </div>
//         </label>

//         {/* {dragActive && (
//           <div
//             id="drag-file-element"
//             onDragEnter={handleDrag}
//             onDragLeave={handleDrag}
//             onDragOver={handleDrag}
//             onDrop={handleDrop}
//           ></div>
//         )} */}
//         <div>{showImage(selectedImage)}</div>

//         {/* <FileUploader
//           id="files"
//           handleChange={handleChange}
//           name="file"
//           types={fileTypes}
//           classes="drop"
//           children={
//             <div className="upload">
//               <span>
//                 <TbBookUpload />
//               </span>
//               <h3>Drag and drop files here</h3>
//               <p>Files supported: Png, Jpg, Pdf</p>

//               <div className="choose-file">Choose file</div>

//               <p>Maximum size: 500Kb, Dimensions: 1160*590px</p>
//             </div>
//           }
//         /> */}
//       </div>
//     </div>
//   );
// }

// function handleFile(files) {
//   alert("Number of files: " + files.length);
// }

// drag drop file component
export default function UploadImg() {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  const [count, setCount] = useState(5);

  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState([]);

  const handleImg = (e) => {
    if (e) {
      const imgArray = Array.from(e).map((file) => URL.createObjectURL(file));

      setSelectedImage((prevImages) => prevImages.concat(imgArray));
    }
  };

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (show && ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };
    // document.addEventListener("mousedown", handler);
    // document.addEventListener("touchstart", handler);
    // return () => {
    //   // Cleanup the event listener
    //   document.removeEventListener("mousedown", handler);
    //   document.removeEventListener("touchstart", handler);
    // };
  }, [show]);

  const showImage = (source) => {
    return source.map((image) => {
      const removeImg = () => {
        source.splice(source.indexOf(image), 1);
        setCount(count - 1);
        console.log(source);
      };

      return (
        <div id={`ad-image-${source.indexOf(image)}`}>
          {source.includes(image) && count > 1 ? (
            <>
              <div className="img-head">
                <h1 className="img-title">Image {source.indexOf(image) + 1}</h1>
                <button onClick={() => setShow(!show)}>...</button>
                {show ? (
                  <>
                    <ul ref={ref}>
                      <li
                        onClick={() => {
                          removeImg();
                        }}
                      >
                        Delete
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
              <img
                src={image}
                alt=""
                key={source.indexOf(image)}
                className="ad-img"
              />
            </>
          ) : (
            ""
          )}
        </div>
      );
    });
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImg(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleImg(e.target.files);
      setCount(count + 1);

      console.log(selectedImage);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="add-ad">
      {showImage(selectedImage)}
      <div className="drop" onDragEnter={handleDrag}>
        <input
          ref={inputRef}
          type="file"
          className="input-f"
          id="input-file-upload"
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div className="upload">
            <h3>Drag and drop files here</h3>
            <p>Files supported: Png, Jpg, Pdf </p>
            <button className="upload-button" onClick={onButtonClick}>
              Choose file
            </button>
            <p>Maximum size: 500Kb, Dimension: 1160*590 px</p>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </div>
    </div>
  );
}
