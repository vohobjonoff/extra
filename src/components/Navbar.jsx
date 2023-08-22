import { Link } from "react-router-dom";


export default function Navbar() {
  return (
      <div className="nav">
          <div className="logo">
              logo
          </div>
          <div className="list">
              <ul className="list1">
                  <Link to='/contact'>
                  <li className="item">contact</li>
                  </Link>
                  <Link to='/about'>
                  <li className="item">about</li>
                  </Link>
                  <Link to='/support'>
                  <li className="item">support</li>
                  </Link>
                  <Link to='/login'>
                  <li className="item">login</li>
                  </Link>
              </ul>
          </div>
    </div>
  )
}
