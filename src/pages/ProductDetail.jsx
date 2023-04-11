import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        let isMounted = true
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:9000/products/${id}`)
                if (isMounted) {
                setProduct(res.data)
                }
            }catch (e) {console.log(e)}
        }

        fetchProduct()

        return () => (isMounted = false)

    }, [id])

    return <div>
        <h2>{product.title}</h2>
        <img className="detail-img" src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <span className="btn btn-primary">{product.price}$</span>
    </div>
}