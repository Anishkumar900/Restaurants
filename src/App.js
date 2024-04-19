import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './dashboard/Main';
import PaymentMain from './Payment/PaymentMain';

function App() {
  return (
    <BrowserRouter basename='/Restaurants'>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/setting/payout' element={<PaymentMain/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
