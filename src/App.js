import AdminNav from "./components/admin/admin-nav/admin-nav";
import AdminRoute from "./components/admin/admin-nav/route";
import Img from "./components/admin/img";
import "./css/admin.css";

export default function App() {
  return (
    <div className="App">
      <Img src="./images/logo.png" class="logo" />
      <div className="admin-panel">
        <AdminNav />
        <div className="admin-body">
          <AdminRoute />
        </div>
      </div>
    </div>
  );
}
