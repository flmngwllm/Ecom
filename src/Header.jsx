import Nav from "./Nav";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="flex justify-between items-center ">
      <SearchBar />
      <p className="text-blue-800">ECOM</p>
      <Nav />
    </header>
  );
}

export default Header;
