import {Link} from 'react-router-dom';
function Header(){
    return(
        <div className="header">
            <h1>Component Life Cycle</h1> <br />
            <div className="components">
            <div>
                <Link to={"/mounting"}>Mounting</Link>
            </div>
            <div>
            <Link to={"/updating"}>Updating</Link>
            </div>
            <div>
            <Link to={"/umnounting"}>UnMounting</Link>
            </div>
            </div>
        </div>
    )
}
export default Header;