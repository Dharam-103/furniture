import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoutes from "./Admin/Routes/AdminRoutes";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <AdminRoutes />
    </div>
  );
}

export default App;
