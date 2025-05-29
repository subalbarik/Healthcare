import React from "react";
import { FaBell, FaPlus } from "react-icons/fa";
import userimage from '../assets/user.jpg'

const Header = () => {
  return (
    <header style={{ display: "flex",gap:'50%' }}>
      <div style={{display:'flex'}}>
        <input
          type="text"
          placeholder="Search"
          style={{
            width: "450px",
            padding: "10px",
            margin: "30px 10px 0px 40px",
            borderRadius: "20px",
            border: "0.1px solid hwb(210 56% 23%)",
            fontSize: "20px",
          }}
        />
         <div>
        <FaBell  style={{ color: "hwb(219 7% 35%)",marginTop:"40px",fontSize:'25px' }} />
        </div>
      </div>
      <div style={{ display: 'flex' ,gap:"10px",marginTop:"35px"}}>
       
        <div style={{alignItems:'end'}} >
          <img
            src={userimage}
            alt="User Avatar"
            style={{ width: "35px", height: "30px", borderRadius: "30px",alignItems:'end' }}
          />
        </div>
        <div>
        <button
          style={{
            height: "30px",
            width: "30px",
            backgroundColor: "hwb(219 7% 35%)",
            borderRadius: "10px",
            paddingTop: "5px",
          }}
        >
          <FaPlus style={{ color: "white" }} />
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
