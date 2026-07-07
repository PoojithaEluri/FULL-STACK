export default function OrderCard({
    data,
    onDelete,
    onEdit,
}) {
    return (
        <div className="flex justify-between items-center bg-white rounded p-4 mb-3 shadow">
            <div>
                <div className="font-semibold">
                    User : {data.user?.name}
                </div>

                {data.products?.map((item, index) => (
                    <div key={index} className="mt-2">
                        <div>
                            Product : {item.product?.name}
                        </div>

                        <div>
                            Quantity : {item.quantity}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => onEdit(data._id)}
                    className="border px-4 py-2 hover:bg-gray-100"
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(data._id)}
                    className="border px-4 py-2 hover:bg-gray-100"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}