import oData from "../../Admin-Samyak/Order/addOrderData";
import Search from "../search";

export default function AddBestSellers() {
  return (
    <>
      <div className="right">
        <label>Product</label>
        <div className="search-add">
          <div className="search-product">
            {/* <Input type="text" placeholder="Search Product" /> */}
            <Search />
          </div>
          <div className="add-button">
            <button>Add</button>
          </div>
        </div>
        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Items</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {oData.map((dataT) => {
                return (
                  <tr>
                    <td>{dataT.id}</td>
                    <td>
                      <img
                        src="{dataT.item}"
                        alt=""
                        height="100px"
                        width="100px"
                      />
                    </td>
                    <td>
                      <div className="desc-col">
                        <div>{dataT.description}</div>
                        <div>IN STOCK</div>
                        <div>Add to wishlist</div>
                      </div>
                    </td>
                    <td>Rs. {dataT.price}</td>
                    <td>
                      <div className="qty-col">
                        <button className="mbtn">-</button>
                        <span>{dataT.qty}</span>
                        <button className="pbtn">+</button>
                      </div>
                    </td>
                    <td>Rs. {dataT.subtotal}</td>
                    <td className="trashcan">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="none"
                        >
                          <path
                            stroke="#FF3434"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.984 6.133h18M19.984 6.133v14a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-14m3 0v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10.984 11.133v6M14.984 11.133v6"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
