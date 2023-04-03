import React from "react";

function AddPopUp(props) {
    return (
        <div className="addpopup-container" style={props.pop ? { display: "block" } : { display: "none" }}>
            <div className="addpop-container">
                <div className="admin-close-btn" style={{ left: "" }}><button onClick={props.showAdd}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path fill="#777" d="M11 .5C5.15.5.5 5.15.5 11S5.15 21.5 11 21.5 21.5 16.85 21.5 11 16.85.5 11 .5Zm4.05 15.75L11 12.2l-4.05 4.05-1.2-1.2L9.8 11 5.75 6.95l1.2-1.2L11 9.8l4.05-4.05 1.2 1.2L12.2 11l4.05 4.05-1.2 1.2Z" /></svg></button></div>
                <form>
                    <label>Name</label>
                    <input type={"text"} />
                    <label>Password</label>
                    <input type={"password"} />
                    <label>Confirm Password</label>
                    <input type={"password"} />
                    <label>Address</label>
                    <input type={"text"} />
                    <label>Contact no.</label>
                    <input type={"text"} />
                    <label>Optional</label>
                    <input type={"text"} />
                    <label>Email (optional)</label>
                    <input type={"email"} />
                    <button type="submit" className="admin-save-btn">Save</button>
                </form>
            </div>
        </div>
    );
}

export default AddPopUp;