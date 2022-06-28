// import Expenses from './components/Expenses/Expenses';
// import NewExpense from './components/InputExpense/NewExpense';
import React , {useState} from 'react';
import { BrowserRouter as Router , Route, Routes ,Navigate} from 'react-router-dom';
 import Login from './components/Users/Login';
import SignUp from './components/Users/SignUp';
import { NavBar } from './components/NavBar';
import { Layout } from './components/pages/Layout';
import { Demo } from './components/Users/Demo';
import { DashBoard } from './components/Users/DashBoard';
import { useSelector } from 'react-redux';
const Dummy_expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  
];
function App() {
  const {access_token} = useSelector(state => state.auth)
  const[expenses, setExpenses] = useState(Dummy_expense)
  const AddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <Router>
        <Routes> 
          <Route path="/" element = {<Layout/>} >
          {/* <Route index element = {!access_token ? <Login/> : <DashBoard/>} /> */}
          <Route index element = { <Login/>} />
          <Route path="signup" element = {<SignUp/>} />
          <Route path="demo" element = {<Demo/>} />
          {/* <Route path="user" element = {access_token ? <DashBoard/> : <Login/>} /> */}
          <Route path="user" element = {<DashBoard/> } />
          </Route>
        </Routes>
      </Router>
      {/* <NewExpense  onAddExpense = {AddExpense}/>
      <Expenses items={expenses} /> */}
    </div>
  );
}

export default App;
