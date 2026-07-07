import { useEffect, useState } from "react";

import {
    createProduct,
    updateProduct,
} from "../services/product.service";

const initialState = {
    name: "",
    category: "",
    stock: "",
    cost: "",
};

export default function ProductForm({
    selectedProduct,
    setSelectedProduct,
    fetchProducts,
}) {
    const [formData, setFormData] =
        useState(initialState);

    useEffect(() => {
        if (selectedProduct) {
            setFormData({
                name: selectedProduct.name,
                category: selectedProduct.category,
                stock: selectedProduct.stock,
                cost: selectedProduct.cost,
            });
        } else {
            setFormData(initialState);
        }
    }, [selectedProduct]);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (selectedProduct) {
                await updateProduct(
                    selectedProduct._id,
                    formData
                );
            } else {
                await createProduct(formData);
            }

            fetchProducts();

            setFormData(initialState);

            setSelectedProduct(null);
        } catch (error) {
            console.log(error);
        }
    }

    function handleCancel() {
        setFormData(initialState);

        setSelectedProduct(null);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 mb-5 rounded shadow"
        >
            <div className="mb-3">
                <label>Name</label>

                <input
                    className="border w-full p-2"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label>Category</label>

                <input
                    className="border w-full p-2"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label>Stock</label>

                <input
                    type="number"
                    className="border w-full p-2"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label>Cost</label>

                <input
                    type="number"
                    className="border w-full p-2"
                    name="cost"
                    value={formData.cost}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-2">
                <button
                    type="submit"
                    className="border px-4 py-2 hover:bg-gray-100"
                >
                    {selectedProduct
                        ? "Update Product"
                        : "Create Product"}
                </button>

                {selectedProduct && (
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="border px-4 py-2 hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}