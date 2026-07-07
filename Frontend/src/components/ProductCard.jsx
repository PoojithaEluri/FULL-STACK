export default function ProductCard({
    data,
    onDelete,
    onEdit,
}) {
    return (
        <div className="flex justify-between items-center bg-white rounded p-4 mb-3 shadow">
            <div>
                <div className="font-semibold">
                    {data.name}
                </div>

                <div className="text-gray-500">
                    Category : {data.category}
                </div>

                <div>
                    Stock : {data.stock}
                </div>

                <div>
                    Cost : ₹{data.cost}
                </div>
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