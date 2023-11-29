import {Link} from "react-router-dom"

function Header(){
    return(
        <header>
            <h1 className="myp">Portfolio</h1>
            <nav className="main">
                <Link to = "/about" className="nav">About Me</Link>
                <Link to = "/portfolio" className="nav">Portfolio</Link>
                <Link to = "/resume" className="nav">Resume</Link>
                <Link to = "/contact" className="nav">Contact Me</Link>
            </nav>
        </header>
    )
}
export default Header