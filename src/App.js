import './App.css';
import { Route, Routes } from 'react-router-dom'
import TableData from './components/TableData';
import DetailsPage from './components/DetailsPage';
import ColapsPage from './components/ColapsPage';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<TableData></TableData>}></Route>
        <Route path='/details/:id' element={<DetailsPage></DetailsPage>}></Route>
        <Route path='/colaps' element={<ColapsPage></ColapsPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
