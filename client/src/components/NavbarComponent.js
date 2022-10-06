const NavbarComponent = () => {

    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">gameidshop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">หน้าแรก</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create">ลงขายไอดีเกม</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarComponent;