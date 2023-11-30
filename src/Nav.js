const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>JTHR</h1>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
};

export default function Nav() {
  return <Navbar />;
}
