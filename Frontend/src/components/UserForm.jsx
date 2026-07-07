import { useEffect, useState } from "react"
import { createUser, updateUser } from "../services/user.service";
const initialState={
    name:"",
    email:"",
    age:"",
};

export default function UserForm({
    selectedUser,
    setSelectedUser,
    fetchUsers,
}){
    const [formData,setFormData]=useState(initialState);
    useEffect(()=>{
        if(selectedUser){
            setFormData({
                name:selectedUser.name,
                email:selectedUser.email,
                age:selectedUser.age,
            });
        }
        else{
            setFormData(initialState);
        }
    },[selectedUser]);

    function handleChange(e){
        const { name , value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            if(selectedUser){
                await updateUser(selectedUser._id,formData);
            }
            else{
                await createUser(formData);
            }
            await fetchUsers();
            setFormData(initialState);
            selectedUser(null);
        }catch(error){
            console.log(error);
        }
        
    }

   function handleCancel(){
    setFormData(initialState);
    setSelectedUser(null);
   }
    return ( <>
    <form onSubmit={handleSubmit} className="bg-white p-4 mb-5">
        <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name}
            onChange={handleChange}
            className="border w-full p-2"/>
        </div>

        <div className="mb-3">
            <label>
                Email
            </label>
            <input type="email" name="email" value={formData.email}
            onChange={handleChange}
            className="border w-full p-2"/>
        </div>

        <div className="mb-3">
            <label>Age</label>
            <input type="number" name="age" value={formData.age}
            onChange={handleChange}
            className="border w-full p-2"/>
        </div>

        <div className="flex gap-2">
            <button type="submit" 
            className="border px-4 py-2
            hover:bg-gray-100">
            {selectedUser ? "updateUser":"createUser"}
            </button>
            {selectedUser && (
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
    </>
    );
}