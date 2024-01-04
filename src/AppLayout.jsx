import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

function AppLayout() {
  return (
    <>
      <Header />
      <Products />
      <Outlet />;
      <Footer />
    </>
  );
}

export default AppLayout;
