import React from 'react';
import './search-box.scss';

export const SearchBox= ({placeholder,handleChange,...othersprops}) =>{
    return(
        <div className="box">
        <div className="container-4">
          <input type="search" id="search" placeholder={placeholder} onChange={e =>{handleChange(e.target.value)}} {...othersprops} />
          <button className="icon"><i className="fa fa-search"></i></button>
        </div>
      </div>
    );
}


export default SearchBox;