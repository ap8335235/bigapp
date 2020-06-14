import React from 'react';
import './item-target.scss';



const ItemTarget= ({  item,handleDelete }) =>{
  
  
    return (
        <div className='itemComponent' onClick={()=>handleDelete(item.name)}>
            <span id={item.id} className='itemComponent__item' style={{ backgroundColor: item.color}}>
                 {item.name}
              </span>
        </div>
    );
};



export default ItemTarget;