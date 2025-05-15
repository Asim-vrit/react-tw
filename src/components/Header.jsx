import CartView from "./CartView";

function Header() {
  return (
    <header className="flex items-center justify-between bg-amber-500 ">
      <CartView />
      <CartView />
    </header>
  );
}

export default Header;
