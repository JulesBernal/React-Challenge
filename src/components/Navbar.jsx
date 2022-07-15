import React from 'react'

import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
   <header>
        <nav>
            <NavLink id="rabbit" to="/">🐇</NavLink>
            <ul>
                <li>
                    <NavLink to="/">First Page</NavLink>
                </li>
                <li>
                    <NavLink to="/middle">Middle Page</NavLink>
                </li>
                <li>
                    <NavLink to="/last">Last Page</NavLink>
                </li>
            </ul>
        </nav>
   </header>
  )
}
