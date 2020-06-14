import React from 'react';
import './modern-input.scss';


const ModernInput= ({handleChange,...othersprops}) =>{


    return(
    
        <div className="box">
        <div className="container-5">
          <input type="search" id="search" placeholder="Search..." onChange={e =>{handleChange(e.target.value)}} {...othersprops} />
          <button className="icon"><i className="fa fa-search"></i></button>
        </div>
      </div>
       
  
    );
};



export default ModernInput;