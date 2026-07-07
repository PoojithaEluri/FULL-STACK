import { useEffect, useState } from "react";

import {
    createOrder,
    updateOrder,
} from "../services/order.service";

import { getUsers } from "../services/user.service";
import { getProducts } from "../services/product.service";

const initialState = {
    user: "",
    product: "",
    quantity: 1,
};

export default function OrderForm({
    selectedOrder,
    setSelectedOrder,
    fetchOrders,
}) {
    const [formData, setFormData] = useState(initialState);

    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    async function fetchData() {
        try {
            const usersRes = await getUsers();
            const productsRes = await getProducts();

            setUsers(usersRes.data.data);
            setProducts(productsRes.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedOrder) {
            setFormData({
                user: selectedOrder.user._id,
                product: selectedOrder.products[0].product._id,
                quantity: selectedOrder.products[0].quantity,
            });
        } else {
            setFormData(initialState);
        }
    }, [selectedOrder]);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const payload = {
            user: formData.user,
            products: [
                {
                    product: formData.product,
                    quantity: Number(formData.quantity),
                },
            ],
        };

        try {
            if (selectedOrder) {
                await updateOrder(selectedOrder._id, payload);
            } else {
                await createOrder(payload);
            }

            fetchOrders();

            setSelectedOrder(null);
            setFormData(initialState);
        } catch (error) {
            console.log(error);
        }
    }

    function handleCancel() {
        setSelectedOrder(null);
        setFormData(initialState);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded shadow mb-5"
        >
            <div className="mb-3">
                <label>User</label>

                <select
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                    className="border w-full p-2"
                >
                    <option value="">Select User</option>

                    {users.map((user) => (
                        <option
                            key={user._id}
                            value={user._id}
                        >
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label>Product</label>

                <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="border w-full p-2"
                >
                    <option value="">
                        Select Product
                    </option>

                    {products.map((product) => (
                        <option
                            key={product._id}
                            value={product._id}
                        >
                            {product.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label>Quantity</label>

                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="border w-full p-2"
                    min="1"
                />
            </div>

            <div className="flex gap-2">
                <button
                    type="submit"
                    className="border px-4 py-2 hover:bg-gray-100"
                >
                    {selectedOrder
                        ? "Update Order"
                        : "Create Order"}
                </button>

                {selectedOrder && (
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