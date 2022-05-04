import { useEffect, useState } from "react"

const useEquipments = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://nutrio-warehouse.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}
export default useEquipments;