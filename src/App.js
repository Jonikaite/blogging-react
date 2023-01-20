
import './App.css';

import { RecordListPage } from './pages/RecordList';
import { Menu } from './components/Menu';
import { CreateRecordPage } from './pages/CreateRecord';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/create' element={<CreateRecordPage/>} />

        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
