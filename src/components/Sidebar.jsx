import { Link } from "react-router-dom"

export const Sidebar = () => {
    return <>
        <ul className="list-unstyled p-2">
            <li className="m-2"><Link to="/products">All Products</Link></li>
            <li className="m-2"><Link to="/categories">All Categories</Link></li>
        </ul>
    </>
}