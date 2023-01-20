import "./App.css";

import { RecordListPage } from "./pages/RecordList";
import { Menu } from "./components/Menu";
import { CreateRecordPage } from "./pages/CreateRecord";
import { ViewRecord } from "./pages/ReadMore";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<RecordListPage />} />
          <Route path='/create' element={<CreateRecordPage />} />
          <Route path='/records/view/:id' element={<ViewRecord />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
