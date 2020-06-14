import React,{useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './reducer/user/user.selectors';
import { checkUserSession } from './reducer/user/user.actions';
import HomePage from './pages/homepage/homepage';
import AuthPage from './pages/auth/auth';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './App.css';

const App = ({checkUserSession,currentUser}) => {
  useEffect(() => {
    checkUserSession();
 
    
  }, [checkUserSession]);


  
  return (
    <DndProvider backend={HTML5Backend}>
       <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/auth' render={()=> currentUser ? (<Redirect to='/'/>) : (<AuthPage />)} />  
        </Switch>
    </DndProvider>
  );
};

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
