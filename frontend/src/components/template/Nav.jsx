import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Inicio
        </Link>
        <Link to="/users">
            <i className="fa fa-users"></i> Usuário

        </Link>
        <Link to="/users">
            <i className="fa fa-fire"></i> Consultar

        </Link>
        <Link to="/users">
            <i className="fa fa-heart"></i> Clientes

        </Link>
        <Link to="/users">
            <i className="fa fa-phone-square"></i> Pedidos

        </Link>
    </nav>
</aside>