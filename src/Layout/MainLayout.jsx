import NavBar from "../assets/components/NavBar";
import Footer from "../assets/components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>

      <Footer />
    </>
  );
}

export default MainLayout;
