import './App.css';

import {
  Route,
  Routes,
} from 'react-router';

import Dashboard from './Pages/Dashboard/Dashboard';
import ManagesShow from './Pages/Dashboard/ManagesShow/ManagesShow';
import ShowCreate from './Pages/Dashboard/ShowCreate/ShowCreate';
import ShowUpdate from './Pages/Dashboard/ShowUpdate/ShowUpdate';

function App() {

  return (
    <div className='app'>


      <Routes>
        <Route path="/" element={<Dashboard />} />



        <Route path="dashboard" element={<Dashboard />} />

        <Route path="/dashboard" element={<Dashboard></Dashboard>} />


        {/* dasbhbaord route */}
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="showCreate" element={<ShowCreate />}></Route>
          <Route path="manageShow" element={<ManagesShow />}></Route>
          <Route path="showUpdate/:showId" element={<ShowUpdate />}></Route>



        </Route>



      </Routes>




    </div>
  );
}

export default App;
