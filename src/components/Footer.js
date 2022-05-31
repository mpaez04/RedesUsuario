import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import { useAuth } from "../context/AuthContext";

function Footer({pie}){
      const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
return(
      <div className="Footer">

            {pie}
        <button
          className="bg-red-500 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          Cerrar Sesion
        </button>

      </div>
    )
}

export default Footer;


Footer.propTypes={
      pie:PropTypes.object
}
  
Footer.defaultProps={
      pie:<h1>Holaaaaa.</h1>
}