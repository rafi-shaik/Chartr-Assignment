import TenantsTable from "./components/TenantsTable";
import Sidebar from "./components/Sidebar";

import "./App.css";

const App = () => (
  <div className="main-container">
    <Sidebar />
    <TenantsTable />
  </div>
);

export default App;
