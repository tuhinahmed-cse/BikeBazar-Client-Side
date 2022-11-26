import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading'
import DeleteModal from '../DeleteModal/DeleteModal';

const SellerViewProducts = () => {
    


    const { user } = useContext(AuthContext);
    const [deletingBike, setDeletingBike] = useState(null);

    const closeModal = () => {
        setDeletingBike(null);
    }
    const url = `http://localhost:5000/sellerBike?email=${user?.email}`;

    const { data: bikes = [], isLoading, refetch } = useQuery({
        queryKey: ['bikes', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBike = bike =>{
        fetch(`http://localhost:5000/sellerBike/${bike._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Bike deleted successfully`)
            }
        })


    }

    const handleAdvertise = id => {

        fetch(`http://localhost:5000/bikes/seller/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Advertise successful')
                
                refetch();
                
            }
        })
    }



    if (isLoading) {
        return <Loading></Loading>
    }
    

    return (
        <div className='mt-5'>
            <h2 className='text-center font-bold mb-5' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px', }}> Show My Adding Product</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Bike Name</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikes.map((bike, i) => <tr key={bike._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={bike.img} alt="" />
                                    </div>
                                </div></td>
                                <td>{bike.name}</td>
                                <td>{bike.status}</td>
                                <td>

                                    {
                                        (bike.status === "Available") && <>
                                        <button className="btn btn-info" onClick={() => handleAdvertise(bike._id)}  >Advertise</button>
                                        </>
                                    }
                                </td>
                                
                                <td>
                                    <label onClick={() => setDeletingBike(bike)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBike && 
                <DeleteModal 
                title={`Are you sure you want to delete?`}
                successAction = {handleDeleteBike}
                successButtonName="Delete"
                modalData = {deletingBike}
                closeModal = {closeModal}
                >


                </DeleteModal>
            }

            
        </div>
    );
};

export default SellerViewProducts;