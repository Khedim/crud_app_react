import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:9000/products");
      setProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProduct = (pro) => {
    Swal.fire({
      title: `You Want Delete ${pro.title}`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        const del = async () => {
          try {
            await axios.delete(`http://localhost:9000/products/${pro.id}`);
            fetchProducts();
          } catch (e) {
            console.log(e);
          }
        };
        del();
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const tBody = products.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.title.slice(0, 40)}...</td>
      <td>{product.price}$</td>
      <td>
        <button
          onClick={() => deleteProduct(product)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
        <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">
          View
        </Link>
        <button className="btn btn-primary btn-sm">Edit</button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="h2-holder">
      <h2>All Products</h2>
      <Link to="/products/add" className="btn btn-success mt-2">
        Add New Product
      </Link>
      </div>
      <table className="table table-striped mt-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{tBody}</tbody>
      </table>
    </>
  );
};
