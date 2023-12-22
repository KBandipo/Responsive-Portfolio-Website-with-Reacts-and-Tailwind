import NavBar from "../assets/components/NavBar";
import Footer from "../assets/components/Footer";

function MainLayout({ children, darkMode, toggleTheme }) {
  return (
    <>
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>{children}</main>

      <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
    </>
  );
}

export default MainLayout;
