import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="jumbotron">
        <h1 >Search any Company</h1><br/>
        <div className="input-group mx-auto w-50 ">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Company name or CIN number"
            value={props.search}
            onChange={props.onInputChange}
          /><br/>
          <div className="input-group">
            <button className="btn btn-dark mx-auto m-2" onClick={props.onSearch}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
