import { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const submitForm = (e) => {
    // e.preventDefault();
    setSearchValue(searchValue);
    // const newData = paginatedPost.filter(
    //   (x) =>
    //     x[searchName].toLowerCase() ===
    //     (searchValue.toLowerCase() === ""
    //       ? x[searchName].toLowerCase()
    //       : searchValue.toLowerCase())
    // );
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <input
          type="search"
          name="tableSearch"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="tablesearch"
        />
      </form>
    </>
  );
}
