import React from 'react';
import './target.scss';
import ItemTarget from '../item-target/item-target';
import { DropTarget } from 'react-dnd';


function collect(connect,monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver,
        item: monitor.getItem(),
    }
}



const Target= ({connectDropTarget,hovered,item,items,handleDelete}) =>{
 
    
        return connectDropTarget(
            <div className='targetComponent' >
            {items.map(item => (
                <ItemTarget key={item.id} item={item} isTarget={true} handleDelete={handleDelete}/>
            ))}
           (Just select items to delete it!)
            </div>
        );
    };




export default DropTarget('item', {}, collect)(Target);