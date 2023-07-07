import "./styles.css";
import Nav from "./Nav";
import "./sb-admin.css";

import ForgetPassword from "./ForgetPassword";
import Login from "./Login";
import Register from "./Register";
import Table from "./Table";
import Footer from "./Footer";
import Page404 from "./Page404";
import Color from "./Color";
import Animation from "./Animation";
import Border from "./Border";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="App">
      <>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Nav />
              <div className="container-fluid">
                <Dashboard />
              </div>
            </div>
          </div>
        </div>
        <Login />
        <ForgetPassword />
        <Register />
        <Footer />
        <Border />
        <Color />
        <Table />
        <Page404 />
      </>
    </div>
  );
}
