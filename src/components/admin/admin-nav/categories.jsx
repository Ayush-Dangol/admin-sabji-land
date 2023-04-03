import Table from "../../table/Table";
import { useEffect, useState } from "react";
import AddCategory from "../update/addCategory";

export default function Categories() {
  const [columns, setColumns] = useState([]);
  const [urlData, setUrlData] = useState("categories");
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);

  const [id, setId] = useState(1);
  const [category, setCategory] = useState("");
  const [family, setFamily] = useState("");
  const [type, setType] = useState("");

  const url = `http://localhost:4001/${urlData}`;
  console.log(url);

  const toggleAdd = () => {
    setAdd(true);
    setUpdate(false);
  };
  const toggleUpdate = () => {
    setUpdate(true);
    setAdd(false);
  };
  const closeAdd = () => {
    setAdd(false);
  };
  const closeUpdate = () => {
    setUpdate(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    if (seeCategory) {
      cTable();
    }

    console.log(urlData);
    fetchData();
  }, [urlData]);

  // useEffect(() => {

  //   cTable();
  // }, []);

  useEffect(() => {
    preFilled(id);
  }, [id]);

  const preFilled = (sno) => {
    setId(sno);
    let item = data[sno - 1];
    if (seeCategory) {
      setCategory(item?.category);
    }
    if (pFamily) {
      setFamily(item?.productFamily);
    }

    if (pType) {
      setFamily(item?.productFamily);
      setType(item?.productType);
    }
  };

  const cTable = () => {
    const columnsData = [
      { label: "#", accessor: "id", sortable: true },
      { label: "Category", accessor: "category", sortable: true },
    ];
    setColumns(columnsData);
    setUrlData("categories");
    console.log(columns);
  };

  const fTable = () => {
    const columnsData = [
      { label: "#", accessor: "id", sortable: true },
      { label: "Product Family", accessor: "productFamily", sortable: true },
    ];

    setColumns(columnsData);
    setUrlData("productFamily");
  };

  const tTable = () => {
    const columnsData = [
      { label: "#", accessor: "id", sortable: true },
      { label: "Product Type", accessor: "productType", sortable: true },
      { label: "Product Family", accessor: "productFamily", sortable: true },
    ];

    setColumns(columnsData);
    setUrlData("productType");
  };

  const [pFamily, setPFamily] = useState(false);
  const [pType, setPType] = useState(false);
  const [seeCategory, setSeeCategory] = useState(true);

  return (
    <>
      {add ? (
        <AddCategory
          url={url}
          data="Category Name"
          type="text"
          class="add-category-input"
          name={
            seeCategory ? "category" : pFamily ? "productFamily" : "productType"
          }
          placeholder="eg: Vegetables"
          lastid={data.at(-1).id}
          call="POST"
          close={closeAdd}
        />
      ) : (
        ""
      )}

      {update ? (
        <AddCategory
          url={url}
          data="Category Name"
          type="text"
          class="add-category-input"
          name={
            seeCategory ? "category" : pFamily ? "productFamily" : "productType"
          }
          oldCategory={category}
          oldFamily={family}
          oldType={type}
          placeholder="eg: Vegetables"
          value={
            seeCategory ? "category" : pFamily ? "productFamily" : "productType"
          }
          id={id}
          call="PUT"
          close={closeUpdate}
        />
      ) : (
        ""
      )}
      <div className={add || update ? "category-container" : ""}>
        <div className={add || update ? "dim-bg" : ""}></div>
        <h1 className="admin-title">Category</h1>

        <ul className="category-nav">
          <li
            onClick={() => {
              setPFamily(false);
              setSeeCategory(true);
              setPType(false);
              cTable();
            }}
            className={seeCategory ? "category-nav-active" : ""}
          >
            Categories
          </li>
          <li
            onClick={() => {
              setPFamily(true);
              setSeeCategory(false);
              setPType(false);
              fTable();
            }}
            className={pFamily ? "category-nav-active" : ""}
          >
            Product Family
          </li>
          <li
            onClick={() => {
              setPFamily(false);
              setSeeCategory(false);
              setPType(true);
              tTable();
            }}
            className={pType ? "category-nav-active" : ""}
          >
            Product Type
          </li>
        </ul>
        <div>
          <Table
            url={url}
            columns={columns}
            data={data}
            searchName={
              seeCategory
                ? "category"
                : pFamily
                ? "productFamily"
                : "productType"
            }
            idNum="id"
            fileName={
              seeCategory
                ? "category"
                : pFamily
                ? "productFamily"
                : "productType"
            }
            add={toggleAdd}
            update={toggleUpdate}
            searchPlaceholder={
              seeCategory
                ? "Search by Category"
                : pFamily
                ? "Search by Product Family"
                : "Search by Product Type"
            }
            preFilled={preFilled}
          />
        </div>
      </div>
    </>
  );
}

// function CategoryTable() {
//   const [add, setAdd] = useState(false);
//   const [update, setUpdate] = useState(false);

//   const columns = [
//     { label: "#", accessor: "id", sortable: true },
//     { label: "Category", accessor: "category", sortable: true },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleAdd = () => {
//     setAdd(true);
//   };
//   const toggleUpdate = () => {
//     setUpdate(true);
//   };

//   return (
//     <Table
//       url={url}
//       columns={columns}
//       data={data}
//       searchName="category"
//       idNum="id"
//       add={toggleAdd}
//       update={toggleUpdate}
//       searchPlaceholder="Search by Category"
//     />
//   );
// }

// function ProductFamily() {
//   const columns = [
//     { label: "#", accessor: "id", sortable: true },
//     { label: "Product Family", accessor: "productFamily", sortable: true },
//   ];
//   const [data, setData] = useState();
//   const url = "http://localhost:4001/productFamily";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <Table
//       columns={columns}
//       data={data}
//       searchName="productFamily"
//       idNum="id"
//       url={url}
//       searchPlaceholder="Search by Product Family"
//     />
//   );
// }

// function ProductType() {
//   const columns = [
//     { label: "#", accessor: "id", sortable: true },
//     { label: "Product Type", accessor: "productType", sortable: true },
//     { label: "Product Family", accessor: "productFamily", sortable: true },
//   ];
//   const [data, setData] = useState();
//   const url = "http://localhost:4001/productType";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <Table
//       columns={columns}
//       data={data}
//       url={url}
//       searchName="productType"
//       idNum="id"
//       searchPlaceholder="Search by Product Type"
//     />
//   );
// }

// export default function Categories() {
//   const [pFamily, setPFamily] = useState(false);
//   const [pType, setPType] = useState(false);
//   const [seeCategory, setSeeCategory] = useState(true);

//   return (
//     <>
//       <ul className="category-nav">
//         <li
//           onClick={() => {
//             setPFamily(false);
//             setSeeCategory(true);
//             setPType(false);
//           }}
//           className={seeCategory ? "category-nav-active" : ""}
//         >
//           Categories
//         </li>
//         <li
//           onClick={() => {
//             setPFamily(true);
//             setSeeCategory(false);
//             setPType(false);
//           }}
//           className={pFamily ? "category-nav-active" : ""}
//         >
//           Product Family
//         </li>
//         <li
//           onClick={() => {
//             setPFamily(false);
//             setSeeCategory(false);
//             setPType(true);
//           }}
//           className={pType ? "category-nav-active" : ""}
//         >
//           Product Type
//         </li>
//       </ul>
//       <div>
//         {seeCategory ? (
//           <CategoryTable />
//         ) : pFamily ? (
//           <ProductFamily />
//         ) : (
//           <ProductType />
//         )}
//       </div>
//     </>
//   );
// }
