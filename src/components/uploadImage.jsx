import { useState, useRef, useEffect } from "react";

// drag drop file component
export default function UploadImg({
  imgClass,
  containerClass,
  setImg,
  oldImg,
  setMultiple,
  dimension,
  dropClass,
}) {
  // drag state
  const [dragActive, setDragActive] = useState(false);

  const multiple = setMultiple;
  // ref
  const inputRef = useRef(null);

  const [count, setCount] = useState(5);

  const [selectedImage, setSelectedImage] = useState([]);

  useEffect(() => {
    if (oldImg) {
      setSelectedImage(oldImg);
    }
  }, [selectedImage]);

  const handleImg = (e) => {
    if (e) {
      const imgArray = Array.from(e).map((file) => URL.createObjectURL(file));

      if (multiple === true) {
        setSelectedImage((prevImages) => prevImages.concat(imgArray));
        console.log(selectedImage);
      }
      if (multiple === false) {
        setSelectedImage(imgArray);
        console.log(selectedImage);
        setImg(imgArray);
      }
    }
  };

  let ref = useRef();

  const showImage = (source) => {
    return source?.map((image) => {
      const removeImg = () => {
        source?.splice(source?.indexOf(image), 1);
        setCount(count - 1);
        // console.log(source);
      };

      const ImgMenu = () => {
        const [show, setShow] = useState(false);

        return (
          <>
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
          </>
        );
      };

      return (
        <div id={`ad-image-${source.indexOf(image)}`}>
          {source?.includes(image) && count > 1 ? (
            <>
              <div className="img-head">
                <h1 className="img-title">Image {source.indexOf(image) + 1}</h1>

                <ImgMenu />
              </div>
              <img
                src={image}
                alt=""
                key={source.indexOf(image)}
                className={`ad-img ${imgClass}`}
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
    <div className={`add-ad ${containerClass}`}>
      {showImage(selectedImage)}

      <div className={`drop-img ${dropClass}`} onDragEnter={handleDrag}>
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
            <p>Maximum size: 500Kb, Dimension: {dimension} px</p>
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
