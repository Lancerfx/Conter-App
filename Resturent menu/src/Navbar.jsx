import "./Navbar.css"
export default function Navbar(){
  return(
    <nav className=".navbar">
      <div className="navbar-center">
      <ul className="nav-links">
          
        <li><a href="#">Home</a></li>
          <li> <a href="#">Product</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Help & Support</a></li>
        
      </ul>
      </div>
    </nav>
  );
}