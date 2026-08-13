'use client'

import Image from "next/image"
import { useEffect, useState } from "react"


const FakeProducts = () => {

    const [fakeProducts, setFakeProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')


    // Fetch the API data and store it in a state variable
    useEffect(() => {
        const fetchFakeProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()
                setFakeProducts(data.products)
                console.log('Fetched fake products:', data)

            } catch (error) {
                setError('Error fetching fake products')
            } finally {
                setLoading(false)
            }

        }
        fetchFakeProducts()
    }, []) // Dependency array to avoid infinite loop

    return (
        //   Consume the API data and display it in a list or grid format
        <div>
            {loading && <p>Loading fake products...</p>}

            <div className="grid grid-cols-4 gap-4 p-4">
                {fakeProducts.map((fakeProduct) => (
                    <div key={fakeProduct.id} className="bg-slate-200 rounded-lg p-4 m-4 shadow-md flex flex-col justify-between max-w-75">
                        <div>
                            <Image src={fakeProduct.thumbnail} alt={fakeProduct.title} width={200} height={200} />

                            <h2 className="text-lg font-bold mb-2">{fakeProduct.title}</h2>
                            <p>{fakeProduct.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FakeProducts