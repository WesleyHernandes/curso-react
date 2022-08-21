import "./Content.css"
import React from "react"
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import About from '../../views/examples/About'
import NotFound from '../../views/examples/NotFound'

const Content = () => {
    return(
        <main className="Content">
            <Routes>
                <Route path="/param/:id" element={<Param />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Content