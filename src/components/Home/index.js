 import {Link} from "react-router-dom";
 
 const Header = () =>{
    return(
    <div>
        <h1>My Projects</h1>
        <ul>
            <li>
                <Link to ="/path1">Notification Card</Link>
            </li>
            <li>
                <Link to = "/path2">Technology Card</Link>
            </li>
            <li>
                <Link to = "/path3">Click Counter</Link>
            </li>
            <li>
                <Link to = "/path4">Light Dark mode</Link>
            </li>
            <li>
                <Link to = "/path5">Lifting state up Practice</Link>
            </li>
            <li>
                <Link to = "/path6">Browser History</Link>
            </li>
            <li>
                <Link to = "/path7">Password manager</Link>
            </li>
            <li>
                <Link to = "/path8">IPL Dashboard</Link>
            </li>
        </ul>
    </div>
    )
 }

 export default Header;
