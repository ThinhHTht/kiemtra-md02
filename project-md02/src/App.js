import "./App.css";
import AdminHeader from "./components/admin/layouts/AdminHeader";
import AdminFooter from "./components/admin/layouts/AdminFooter";
import { Space } from "antd";
import AdminSiderMenu from "./components/admin/layouts/AdminSiderMenu";
import AdminContent from "./components/admin/layouts/AdminContent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AdminHeader />
      <Space className="SideMenuAndContent">
        <AdminSiderMenu />
        <AdminContent />
      </Space>
      <AdminFooter />
    </div>
  );
}

export default App;
