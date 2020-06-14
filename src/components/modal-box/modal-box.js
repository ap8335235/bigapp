import React,{useState} from 'react';
import Modal from 'react-modal';
import Item from './../item/item';
import Target from '../target/target';
import  SearchBox from './../modern-input/modern-input';
import './modal-box.scss';


const ModalBox= (props) =>{
   


    const[items]=useState([
        {id: 1, name:'Permission 1' , color:'#fff'},
        {id: 2, name:'Permission 2' , color: '#82CAFA'},
        {id: 3, name:'Permission 3' , color:'#fff'},
        {id: 4, name:'Permission 4' , color: '#82CAFA'},
        {id: 5, name:'Permission 5' , color: '#fff'},
 ]);

   const [itemsTarget,setItemsTarget]= useState([
    {id: 6, name:'Default Permission 1' , color:'#fff'},
    {id: 7, name:'Default Permission 2' , color: '#82CAFA'}
   ]);

   const[searchField,setSearchField]= useState('');
   const[searchField2,setSearchField2]= useState('');

  
   //Filtering Permission
  const filteredPermissions= items.filter(item => 
    item.name.toLowerCase().includes(searchField.toLowerCase()));

  //handle Change
  const handleChange= (value) =>{
   setSearchField(value);
  };


   //Filtering Permission for target
   const filteredPermissions2= itemsTarget.filter(item => 
    item.name.toLowerCase().includes(searchField2.toLowerCase()));

  //handle Change for target
  const handleChange2= (value) =>{
   setSearchField2(value);
  };


  // Drag Handler
  const dragHandler= (item) =>{
      if(itemsTarget.includes(item)){
          alert('Already Moved Item !');
          return;
      }
      setItemsTarget(oldArray => [...oldArray,item]);
  };

  // Delete Target
  const handleDelete= (name)=>{
      setItemsTarget(itemsTarget.filter(item=> item.name !== name));
  }
  const refreshPage= () => {
    window.location.reload(false);
  }

   return(
    <Modal isOpen={props.isOpen} 
    ariaHideApp={false}
    closeTimeoutMS={3600000000000000000}
    
    >
       <div className='modalBox'>
            
            <div className='modalBox__header'>
                <div className='modalBox__header__cross' onClick={refreshPage}>&#10005;</div>
                {props.post.name}
            </div>

            <div className='modalBox__container'>
                 <div className='modalBox__container__section'>
                 <SearchBox placeholder='Search Permissions' handleChange={handleChange}/>
                 {filteredPermissions.map(item => (
                     <Item key={item.id} item={item} handleDrop={dragHandler}/>
                 ))}
                 (Drag and Drop Items in the right box or select to move items)
                 
                 </div>
              
              <div className='modalBox__container__section'>
              <SearchBox placeholder='Search Permissions' handleChange={handleChange2}/>
              <Target items={filteredPermissions2} handleDelete={handleDelete}/> 
              
              </div>
            </div>
               


       </div>
</Modal>
   );
};



export default ModalBox;