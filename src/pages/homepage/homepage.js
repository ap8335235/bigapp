import React,{useState,useEffect} from 'react';
import Posts from '../../components/post/Posts';
import Pagination from '../../components/pagination/Pagination';
import SearchBox from '../../components/search-box/search-box';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../reducer/user/user.selectors';
import { signOutStart } from '../../reducer/user/user.actions';

import axios from 'axios';
import './homepage.scss';
import { Link } from 'react-router-dom';

const HomePage= ({ currentUser,signOutStart }) =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [searchField,setSearchField]=useState('');
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    //Filtering Post
    const filteredPosts= currentPosts.filter(post => 
      post.name.toLowerCase().includes(searchField.toLowerCase()));
  
    //handle Change
    const handleChange= (value) =>{
     setSearchField(value);
    };
   return(
    <div className='container mt-5'>
    <div className='searchBox_container'>
    <h1 className='text-primary mb-3 searchBox_container__title'>Big-App-Company</h1>
    <div className='searchBox_container__search'>
        {currentUser ? (
            <Link to='/auth' onClick={signOutStart} className='searchBox_container__search--auth'>Logout</Link>
        ) : (
            <Link to='/auth' className='searchBox_container__search--auth'>Login</Link>
        )}
     
    <SearchBox placeholder='Search Users' handleChange={handleChange}/>
    </div>
   
    </div>
    <Posts posts={filteredPosts} loading={loading} />
    <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
    />
    {currentUser ? (
      <div className='user'> (Logged In As {currentUser.displayName} )</div>
    ) : (
        ''
    )}
  </div>
   );
};



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(HomePage);