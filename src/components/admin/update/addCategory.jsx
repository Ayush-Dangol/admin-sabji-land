import { useState, useEffect, useRef } from "react";
import Input from "./input";
import { AiFillCloseCircle } from "react-icons/ai";
export default function AddCategory({
  id,
  lastid,
  call,
  oldCategory,
  oldFamily,
  oldType,
  value,
  close,
  ...props
}) {
  const [category, setCategory] = useState("");
  const [family, setFamily] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const productUrl = `http://localhost:4000/api/v1/postCategory`;

  const url = `http://localhost:4000/api/v1/postCategory`;
  useEffect(() => {
    setCategory(oldCategory);
    setFamily(oldFamily);
    setType(oldType);
  }, [id]);
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(productUrl);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const ref = useRef();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();
    const dates = String(date);

    const obj = { date: dates.slice(3, 21) };
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    const lId = { id: lastid + 1 };
    if (call === "POST") {
      const jsonData = Object.assign(value, obj);

      let jsonS = JSON.stringify(jsonData);
      fetch(
        url,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonS,
        },
        {
          Credential: "include",
        }
      )
        .then(() => {
          close();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const jsonData = Object.assign(value, obj);

      let jsonS = JSON.stringify(jsonData);
      fetch(`${url}/${id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonS,
      })
        .then(() => {
          close();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <>
      <div className="add-category" ref={ref}>
        <button className="add-category-close" onClick={close}>
          <AiFillCloseCircle />
        </button>
        <h2>
          Add{" "}
          {props.name === "category"
            ? "Category"
            : props.name === "productFamily"
            ? "Product Family"
            : "Product Type"}
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            data={props.data}
            type={props.type}
            class="add-category-input"
            name={props.name}
            placeholder={props.placeholder}
            value={
              value === "category"
                ? category
                : value === "productFamily"
                ? family
                : type
            }
            change={
              value === "category"
                ? (e) => {
                    setCategory(e.target.value);
                  }
                : value === "productFamily"
                ? (e) => {
                    setFamily(e.target.value);
                  }
                : (e) => {
                    setType(e.target.value);
                  }
            }
          />
          {props.name === "productType" ? (
            <div className="input-items add-family">
              <label htmlFor="">Product Family</label>
              <select
                name="productFamily"
                data="Product Type"
                id=""
                className="add-products-input"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
              >
                {data?.map((e) => {
                  return (
                    <option value={e.productFamily}>{e.productFamily}</option>
                  );
                })}
                {/* <option value="t">t</option>
                <option value="h">h</option> */}
              </select>
            </div>
          ) : (
            ""
          )}

          <input type="submit" value="Save" className="add-category-save" />
        </form>
      </div>
    </>
  );
}
