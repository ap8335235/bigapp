import React,{useState} from 'react';
import './post.scss';
import '../grid.scss';
import ModalBox from '../modal-box/modal-box';

const Posts = ({ posts, loading }) => {
const[modal,setModal]=useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleModal=()=>{
    setModal(prevState => !prevState);
  }

  
  return (
    <div className='PostPage'>
  {/*     <div className='PostPage__prefix'> */}
        <div className='row'>
        <div className="col-1-of-4 PostPage__prefix"> Full Name</div>
        <div className="col-1-of-4 PostPage__prefix"> Phone</div>
        <div className="col-1-of-4 PostPage__prefix"> User Name</div>
        <div className="col-1-of-4 PostPage__prefix"> Company Name</div>

     {/*    </div> */}
      {/*   <div >Full Name</div>
        <div>Phone</div>
        <div>User Name</div>
        <div>Company Name</div> */}
      </div>
      {posts.map(post => (
        <div key={post.id} className='row PostPage__post' onClick={handleModal}>
         
          <ModalBox isOpen={modal} post={post}  />
        
           <div className='col-1-of-4 PostPage__post__mail'>
           <div className='PostPage__post__mail--name'>{post.name}</div>
           <div>{post.email}</div>
           </div>
           <div className='col-1-of-4'>{post.phone}</div>
           <div className='col-1-of-4'>{post.username}</div>
           <div className='col-1-of-4'>{post.company.name}</div>

           
        </div>
      ))}
    </div>
  );
};

export default Posts;
