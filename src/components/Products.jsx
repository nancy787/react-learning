import React from "react";


const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]

function Products() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map( (product) => 
                        (
                            <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Products