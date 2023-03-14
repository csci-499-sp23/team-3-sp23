import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar_/Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import ChickenLogo from "../../assets/chickenv2.svg"

export default function Navbar() {
  //it will refer to nav tag
	const navRef = useRef();

  //take the current element, each time the function is called we will add or remove the classlist from navtag
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="nav-container">
			<div className = "logo">
			<Link to="/"><img className="chicken-logo" src={ChickenLogo} alt="ChickenLogo" /></Link>
			</div>
			<nav ref={navRef}>
				<CustomLink to ="/Info">Game Info</CustomLink>
				<CustomLink to ="/Leaderboard">Leaderboard</CustomLink>
				<CustomLink to ="/Contact">Contact Us</CustomLink>
				<CustomLink to ="/Login" className="mobile-only">Login</CustomLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
            <div className="lft-btn">
                <Link to ="/Login" className="login">Login</Link>
                <Link to ="/Register" className="play">Play</Link>
            </div>
            
		</header>
	);
	
	
	function CustomLink({ to, children, ...props }) {
		const resolvedPath = useResolvedPath(to)
		//checks if the path is the exact same. Once it is it would be set to isActive
		const isActive = useMatch({ path: resolvedPath.pathname, end: true })
		return (
		  <li className={isActive ? "active" : ""} onClick={showNavbar}>
			<Link to={to} {...props}>
			  {children}
			</Link>
		  </li>
		)
	}
}