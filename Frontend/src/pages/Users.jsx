import { useState } from "react";
import { getUsers,deleteUser, getUserById } from "../services/user.service";
import ListCard from "../components/ListCard";
import { useEffect } from "react";
import UserForm from "../components/UserForm";

export default function Users(){
    const [users,setUsers]=useState([]);
    const [selectedUser,setSelectedUser]=useState(null);
    const [isEditing,setIsEditing]=useState(false);

    async function fetchUsers()
    {
        try{
            const response=await getUsers();
            setUsers(response.data.data);

        }
        catch(error){
            console.log(error.message);
        }
    }

    async function handleDelete(id){
        try{
            await deleteUser(id);
            fetchUsers();
        }
        catch(error){
            console.log(error.message)
        }
    }

    async function handleEdit(id){
        try{
            const response=await getUserById(id);
            setSelectedUser(response.data.data);
        }catch(error){
            console.log(error);
        }
    }



    useEffect(()=>{
        fetchUsers();
    },[]);


    return(
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl font-bold text-center mb-6">
                Users List
                </h1>
                <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser}
                fetchUsers={fetchUsers}/>

        {/* {users.map((user) => (
                <ListCard key={user._id} data={user} onDelete={handleDelete} />
            ))} */}
            <div className="pt-5">
                {users.length===0 ? (
                    <div className="text-center"> No Users Found</div>
                ):(
                    users.map((user)=>(
                        <ListCard key={user._id} data={user} onDelete={handleDelete} onEdit={handleEdit}/>
                    ))
                )}
            </div>
        </div>
        </div>
        </>
    );
}