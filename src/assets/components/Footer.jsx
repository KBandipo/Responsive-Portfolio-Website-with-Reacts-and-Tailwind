function Footer() {
  let presentTime = new Date().toLocaleTimeString();
  return (
    <footer className="text-bold mx-auto bg-[#e6eff9] text-red-800">
      <h1 className="text-center">
        Local Time {presentTime}, {new Date().toDateString()}, &copy; 2023
        Bandipo Kehinde Olushola
      </h1>
    </footer>
  );
}

export default Footer;
