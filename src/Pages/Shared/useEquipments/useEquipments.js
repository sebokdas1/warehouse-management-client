import { useEffect, useState } from "react"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const useEquipments = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('https://nutrio-warehouse.herokuapp.com/item')

            .then(res => res.json())
            .then(data => {
                < LoadingSpinner />
                setProducts(data)
            })

    }, [])
    return [products, setProducts]
}
export default useEquipments;