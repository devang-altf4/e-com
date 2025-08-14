import { useState, useEffect } from "react"
import { products } from "../data/products"

export const useProducts = () => {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API call with delay
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setProductList(products)
      } catch (err) {
        setError("Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products: productList, loading, error }
}
