import '../css/Nav.css'

const Nav = () => {
    

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-dark justify-content-center">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" >Search</button>
            </form>
        </div>
    );
}

export default Nav