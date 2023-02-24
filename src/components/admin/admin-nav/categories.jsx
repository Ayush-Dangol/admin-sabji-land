import Table from "../../table/Table";
import categories from "../../data/categories.json";
import { useState } from "react";
import productFamily from "../../data/productFamily.json";
import productType from "../../data/productType.json";

function CategoryTable() {
  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "Category", accessor: "category", sortable: true },
  ];
  const data = categories;
  return (
    <Table
      columns={columns}
      data={data}
      searchName="category"
      idNum="id"
      searchPlaceholder="Search by Category"
    />
  );
}

function ProductFamily() {
  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "Product Family", accessor: "productFamily", sortable: true },
  ];
  const data = productFamily;
  return (
    <Table
      columns={columns}
      data={data}
      searchName="productFamily"
      idNum="id"
      searchPlaceholder="Search by Product Family"
    />
  );
}

function ProductType() {
  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "Product Type", accessor: "productType", sortable: true },
    { label: "Product Family", accessor: "productFamily", sortable: true },
  ];
  const data = productType;
  return (
    <Table
      columns={columns}
      data={data}
      searchName="productType"
      idNum="id"
      searchPlaceholder="Search by Product Type"
    />
  );
}

export default function Categories() {
  const [pFamily, setPFamily] = useState(false);
  const [pType, setPType] = useState(false);
  const [seeCategory, setSeeCategory] = useState(true);

  return (
    <>
      <ul className="category-nav">
        <li
          onClick={() => {
            setPFamily(false);
            setSeeCategory(true);
            setPType(false);
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
          }}
          className={pType ? "category-nav-active" : ""}
        >
          Product Type
        </li>
      </ul>
      <div>
        {seeCategory ? (
          <CategoryTable />
        ) : pFamily ? (
          <ProductFamily />
        ) : (
          <ProductType />
        )}
      </div>
    </>
  );
}
