import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../DeleteModal/DeleteModal';

const Sellers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }
    const {data: users = [], refetch} = useQuery({

        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser=user=>{

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Deleted successfully`)
            }
        })

    }
    return (
        <div className='mt-5'>
        <h2 className='text-center font-bold mb-5' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px' }}> All Buyers</h2>
        <div className="overflow-x-auto">
<table className="table w-full">
 <thead>
   <tr>
     <th></th>
     <th>Name</th>
     <th>Email</th>
     <th>Delete</th>
   </tr>
 </thead>
 <tbody>
   {
     users.map((user, i) =><tr key={user._id}>
         <th>{i+1}</th>
         <td>{user.name}</td>
         <td>{user.email}</td>

         <td>
                                 <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                             </td>
        
       </tr>)
   }
   
 </tbody>
</table>
</div>
{
             deletingUser && 
             <DeleteModal 
             title={`Are you sure you want to delete this user?`}
             successAction = {handleDeleteUser}
             successButtonName="Delete"
             modalData = {deletingUser}
             closeModal = {closeModal}
             >


             </DeleteModal>
         }

     </div>
    );
};

export default Sellers;