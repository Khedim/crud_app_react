import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:9000/products", newProduct);
        navigate(`/products/${res.data.id}`)
    }catch (e) {console.log(e)} 
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:9000/categories");
        setCategories(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCategories();
  }, []);

  const categoryOptions = categories.map((cat) => (
    <option value={cat} key={cat}>
      {cat}
    </option>
  ));

  return (
    <form>
      <input
        className="form-control"
        name="title"
        onChange={handleChange}
        type="text"
        placeholder="title"
      />
      <input
        className="form-control"
        name="price"
        onChange={handleChange}
        type="number"
        placeholder="price"
      />
      <textarea
        className="form-control"
        name="description"
        onChange={handleChange}
        placeholder="description"
      />
      <select className="form-control" name="category" onChange={handleChange}>
        <option value="" disabled>
          select category
        </option>
        {categoryOptions}
      </select>
      <input
        className="form-control"
        name="image"
        onChange={handleChange}
        type="file"
        placeholder="Product Image"
      />
      <button onClick={submitForm} className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};
