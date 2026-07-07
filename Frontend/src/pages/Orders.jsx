import { useEffect, useState } from "react";

import OrderForm from "../components/OrderForm";
import OrderCard from "../components/OrderCard";

import {
    getOrders,
    deleteOrder,
    getOrderById,
} from "../services/order.service";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    async function fetchOrders() {
        try {
            const response = await getOrders();
            setOrders(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteOrder(id);
            fetchOrders();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleEdit(id) {
        try {
            const response = await getOrderById(id);
            setSelectedOrder(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Orders
                </h1>

                <OrderForm
                    selectedOrder={selectedOrder}
                    setSelectedOrder={setSelectedOrder}
                    fetchOrders={fetchOrders}
                />

                <div className="pt-5">
                    {orders.length === 0 ? (
                        <div className="text-center">
                            No Orders Found
                        </div>
                    ) : (
                        orders.map((order) => (
                            <OrderCard
                                key={order._id}
                                data={order}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                            />
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}