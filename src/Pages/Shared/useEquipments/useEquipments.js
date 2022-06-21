import { useEffect, useState } from "react"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const useEquipments = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://nutrio-warehouse.herokuapp.com/item')

            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
        setIsLoading(false)

    }, [])
    if (isLoading) {
        return <LoadingSpinner />
    }
    return [products, setProducts]
}
export default useEquipments;