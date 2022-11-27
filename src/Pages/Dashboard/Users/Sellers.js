import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../DeleteModal/DeleteModal';
import { FcApproval } from "react-icons/fc"

const Sellers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }
    const { data: users = [], refetch } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-xi.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });
    const handleVerify = id => {
        fetch(`https://b612-used-products-resale-server-side-xi.vercel.app/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verify successful.')
                    refetch();
                }
            })


    }







    const handleDeleteUser = user => {

        fetch(`https://b612-used-products-resale-server-side-xi.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Deleted successfully`)
                }
            })

    }
    return (
        <div className='mt-5'>
            <h2 className='text-center font-bold mb-5' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px' }}> All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{
                                    user.verify && <td><FcApproval></FcApproval></td>
                                }</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => handleVerify(user._id)} className="btn btn-sm btn-accent" >verify</button></td>

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
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deletingUser}
                    closeModal={closeModal}
                >


                </DeleteModal>
            }

        </div>
    );
};

export default Sellers;