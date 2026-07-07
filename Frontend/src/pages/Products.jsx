import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

import {
    getProducts,
    deleteProduct,
    getProductById,
} from "../services/product.service";

export default function Products() {
    const [products, setProducts] =
        useState([]);

    const [selectedProduct,
        setSelectedProduct] = useState(null);

    async function fetchProducts() {
        try {
            const response =
                await getProducts();

            setProducts(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteProduct(id);

            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleEdit(id) {
        try {
            const response =
                await getProductById(id);

            setSelectedProduct(
                response.data.data
            );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Products
                </h1>

                <ProductForm
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    fetchProducts={fetchProducts}
                />

                {products.length === 0 ? (
                    <div className="text-center">
                        No Products Found
                    </div>
                ) : (
                    products.map((product) => (
                        <ProductCard
                            key={product._id}
                            data={product}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))
                )}

            </div>
        </div>
    );
}