import logo from './logo.svg';
import './App.css';
import Dashboard from './utils/Dashboard';
import authentication from './utils/authentication';

/** This is HOC : it is function that takes a component as argument and return a component */
import showMessage from './utils/showMessage';
import DisplayErrors from './utils/DisplayErrors';

import ArrayReverse from './programs/ArrayReverse';

import ToDoApp from './myapps/ToDoApp';
import ParentComponent from './UseMemo/ParentComponent';
import { useMemo, useState } from 'react';

import Users from './myapps/Users';

import withUserList from './utils/withUsersList';
import UserListHoc from './utils/UserListHoc';
import { userList } from './data/user';
import App27May from './may27/App27May';



function App() {
  let [title, setTitle] = useState("React JS Tutorial");
  let [a, setA] = useState(1);
  let [b, setB] = useState(1);
  //let child = useMemo( () => {}, [title]);
  let Auth = authentication(Dashboard);
  let ShowMessage = showMessage(DisplayErrors);

  let WithUserList = withUserList(UserListHoc);


  let changeButtonHandle = () => {
    setTitle("This is new page title");
  }
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>
        <button onClick = {changeButtonHandle} >Change Page Title</button>
      </p>
    <hr/>
      {/* <Auth data = "this is data"/> */}
      {/* <ShowMessage type="success" message= "Welcome to User Dashboard" /> */}
      {/* <ArrayReverse /> */}
      {/* <ToDoApp /> */}
      {/* <ParentComponent />
      <Users />
      <hr/>
      <WithUserList users = {userList} /> */}
      <App27May />
    </div>
  );
}



export default App;
