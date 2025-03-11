import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiCall from './Components/ApiCall';
import Table from './Components/Table';
import ApiToTable from './Components/ApiToTable'
import Argument from './Components/Argument';
import Filtering from './Components/Filtering';
import FilterSecond from './Components/FilterSecond';
import FilterThird from './Components/FilterThird';
import FilterFour from './Components/FilterFour';
import Validation from './Components/Validation';
import AddNew from './Components/AddNew';
import AddNewApi from './Components/AddNewAPI';
import FilterApi from './Components/FilterApi';
import FilterApi2 from './Components/FilterApi2';
import Task from './Components/Task';
import Test from './Components/Test';
import Logical from './Components/Logical'
import UseMemo from './Components/UseMemo';
import FormWithYup from './Components/FormWithYup ';
import Vunet from './Components/ArrayFrom';
import Vunet1 from './Components/Vunet1';
import Vunet2 from './Components/Vunet2';

function App() {
  return (
    <div className="App">
      {/* <ApiCall/> */}
      {/* <Table/> */}
    {/* <ApiToTable/> */}
    {/* <Argument/> */}
    {/* <Filtering/> */}
    {/* <FilterSecond/> */}
    {/* <FilterThird/> */}
    {/* <FilterFour/> */}
    {/* <Validation/> */}
    {/* <AddNew/> */}
    {/* <AddNewApi/> */}
    <FilterApi/>
    {/* <FilterApi2/> */}
    {/* <Logical/> */}
    {/* <Task/> */}
    {/* <Test/> */}
    {/* <UseMemo/> */}
    {/* <FormWithYup/> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vunet1/>}/>
        <Route path='/vunet' element={<Vunet2/>}/>
      </Routes>
    </BrowserRouter> */}
    
    </div>
  );
}

export default App;
