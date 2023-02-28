import TableBody from "./TableBody";
import TableHead from "./TableHead";

import { useEffect, useState } from "react";
import _ from "lodash";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Btns from "../admin/admin-nav/btns";

const rowSize = 50;
export default function Table({
  columns,
  url,
  data,
  searchName,
  searchPlaceholder,
  idNum,
  preFilled,
  add,
  update,
  ex,
  classN,
}) {
  const [datas, setdatas] = useState(data);
  const [tableData, setTableData] = useState([]);
  const [selected, setSelected] = useState(50);
  const [search, setSearch] = useState("");
  const [paginatedPost, setPaginatedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showIndex, setShowIndex] = useState(true);
  const [rePage, setrePage] = useState(0);

  // const [columns, setColumns] = useState(col);
  // const searchTable = (newSearch) => {
  //   setSearch(newSearch);
  // };

  const [perpage, setPerPage] = useState();

  useEffect(() => {
    console.log(url);
    setTableData(data);
    setPaginatedPosts(
      _(data)
        .slice((currentPage - 1) * selected)
        .take(selected)
        .value()
    );
  }, [data]);

  const handleSorting = (sort, sortOrder) => {
    if (sort) {
      const sorted = [...paginatedPost].sort((a, b) => {
        if (a[sort] === null) return 1;
        if (b[sort] === null) return -1;
        if (a[sort] === null && b[sort] === null) return 0;
        return (
          a[sort].toString().localeCompare(b[sort].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setPaginatedPosts(sorted);
    }
  };

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * selected;
    setPaginatedPosts(_(tableData).slice(startIndex).take(selected).value());
  };

  // const change = (pageNo) => {
  //   setRowSize(50);
  //   setCurrentPage(pageNo);
  //   const startIndex = (pageNo - 1) * rowSize;
  //   setPaginatedPosts(_(tableData).slice(startIndex).take(rowSize).value());
  // };

  const deleteEntry = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        setrePage(currentPage - 1);
        // setPaginatedPosts(_(tableData).slice(0).take(2).value());
      });
    });
  };

  const updateEntry = () => {
    setrePage(currentPage - 1);
  };

  const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const submitForm = (e) => {
      setSearch(searchValue);
      const newData = paginatedPost.filter(
        (x) =>
          x[searchName].toLowerCase() ===
          (searchValue.toLowerCase() === ""
            ? x[searchName].toLowerCase()
            : searchValue)
      );

      if (/^\d+$/.test(searchValue)) {
        const idData = paginatedPost.filter(
          (x) =>
            String(x[idNum]).toLowerCase() ===
            (searchValue.toLowerCase() === ""
              ? String(x[idNum]).toLowerCase()
              : searchValue)
        );
        setPaginatedPosts(idData);
      } else {
        setPaginatedPosts(newData);
      }

      setShowIndex(false);

      e.preventDefault();
    };

    const clear = () => {
      pagination(currentPage);
      setShowIndex(true);
      setSelected("");
    };

    return (
      <div className="search-container">
        <form onSubmit={submitForm}>
          <input
            type="search"
            name="tableSearch"
            onChange={(e) => setSearchValue(e.target.value)}
            className="tablesearch"
            placeholder={searchPlaceholder}
          />
        </form>
        <button onClick={clear} className="clear-search">
          Clear
        </button>

        <div>
          <Btns add={add} ex={ex} />
        </div>
        {/* <button onClick={change(currentPage - 1)}>a</button> */}
      </div>
    );
  };

  const fIndex = () => {
    const x = paginatedPost.at(0);
    return <span>{x?.id}</span>;
  };

  const lIndex = () => {
    const x = paginatedPost.at(-1);
    return <span>{x?.id}</span>;
  };

  const changes = (e) => {
    setSelected(e);
    const startIndex = (currentPage - 1) * rowSize;
    setPaginatedPosts(_(tableData).slice(startIndex).take(e).value());
  };

  const pageCount = tableData ? Math.ceil(tableData.length / rowSize) : 0;
  const pages = _.range(1, pageCount + 1);

  return (
    <>
      <div className={classN}>
        <Search />

        <div className="navigation">
          <div className="select-rows">
            <select
              name=""
              id=""
              value={selected}
              onChange={(e) => changes(e.target.value)}
            >
              {pages.map((e) => {
                return (
                  <>
                    <option value={e * rowSize}>{e * rowSize}</option>
                  </>
                );
              })}
            </select>
            {"  "}per page |
          </div>
          <span>
            {!showIndex ? (
              <>
                {"  "}
                {paginatedPost.length} - {paginatedPost.length}
                {"  "}
              </>
            ) : (
              <>
                {fIndex()} - {lIndex()}
                {"  "}
              </>
            )}
            of {tableData?.length}
            {"  "}
          </span>
          <span>
            <button
              onClick={() => pagination(currentPage - 1)}
              disabled={currentPage > 1 ? "" : true}
            >
              <AiOutlineLeft />
            </button>
            <button
              onClick={() => pagination(currentPage + 1)}
              disabled={currentPage < pageCount ? "" : true}
            >
              <AiOutlineRight />
            </button>
          </span>
        </div>

        <div className="table-container">
          <table className="react-table">
            <TableHead columns={columns} handleSorting={handleSorting} />
            <TableBody
              columns={columns}
              tableData={paginatedPost}
              searchName={searchName}
              del={deleteEntry}
              preFilled={preFilled}
              update={update}
            />
          </table>
        </div>
      </div>

      <div></div>
    </>
  );
}
