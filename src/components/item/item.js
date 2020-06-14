import React from 'react';
import './item.scss';
import { DragSource } from 'react-dnd';

const itemSource= {
    beginDrag(props) {
        return props.item;
    },
    endDrag(props,monitor,component) {
        if(!monitor.didDrop()){
            return;
        }
        return props.handleDrop(props.item);
    }
};

function collect(connect,monitor){
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}



const Item= ({ isDragging, connectDragSource, item, handleDrop}) =>{
    const opacity= isDragging ? 0 :1;
  
    return connectDragSource(
        <div className='itemComponent' style={{opacity}} onClick={()=>handleDrop(item)}>
            <span id={item.id} className='itemComponent__item' style={{ backgroundColor: item.color}}>
                 {item.name}
              </span>
        </div>
    );
};



export default DragSource('item', itemSource, collect)(Item);