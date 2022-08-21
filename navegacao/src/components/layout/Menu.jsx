import "./Menu.css"
import React from "react"

import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #1</Link>
                    </li>
                    <li>
                        <Link to="/param/lorem">Param #2</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Not Found</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu