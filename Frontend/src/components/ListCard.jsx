// export default function ListCard({ data, onDelete }) {

//     function handleDeleteClick() {
//         onDelete(data._id);
//     }

//     return (
//         <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
//             <div>{data.name}</div>

//             <div className="flex gap-2">
//                 <button className="border-2 border-gray-200 px-4 py-2 hover:cursor-pointer">
//                     Edit
//                 </button>

//                 <button
//                     onClick={handleDeleteClick}
//                     className="border-2 border-gray-200 px-4 py-2 hover:cursor-pointer"
//                 >
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// }
export default function ListCard({ data, onDelete,onEdit }){
    return(
        <>
        <div className="flex justify-between items-center px-2 py-4 bg-white rounded">
            <div>
                <div className="font-semibold">{data.name}</div>
                <div className="text-sm text-gray-400">{data.email}</div>
                <div className="text-sm">{data.age}</div>
            </div>
            <div className="flex gap-2">
                <button
                    className="border border-gray-200 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                    onClick={() => onEdit(data._id)}
                >
                Edit
            </button>

            <button
                className="border border-gray-200 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                onClick={() => onDelete(data._id)}
            >
            Delete
            </button>
        </div>
        </div>
        </>
    );
}