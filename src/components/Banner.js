import React from 'react';
import './Banner.css';
import PropTypes from 'prop-types';
import { useAuth } from "../context/AuthContext";

function Banner(){
      const {user } = useAuth();

  console.log(user);
return(
      <div className="Banner">
            <p className="text-xl mb-4">welcome {user.displayName || user.email}</p>
      </div>
      
    )
}

export default Banner;


Banner.propTypes={
      texto:PropTypes.string.isRequired,
}
  