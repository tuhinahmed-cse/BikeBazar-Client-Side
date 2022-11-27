import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../DeleteModal/DeleteModal';

const Report = () => {

    const [deletingReport, setDeletingReport] = useState(null);
    const closeModal = () => {
        setDeletingReport(null);
    }

    const { data: reports = [], refetch } = useQuery({

        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-xi.vercel.app/report');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteReport= report =>{

        fetch(`https://b612-used-products-resale-server-side-xi.vercel.app/report/${report._id}`, {
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
                            <th>Image</th>
                            <th>Report Item Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((report, i) => <tr key={report._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={report.img} alt='' />
                                    </div>
                                </div></td>
                                <td>{report.name}</td>

                                <td>
                                    <label onClick={() => setDeletingReport(report)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
{
            deletingReport && 
                <DeleteModal 
                title={`Are you sure you want to delete this?`}
                successAction = {handleDeleteReport}
                successButtonName="Delete"
                modalData = {deletingReport}
                closeModal = {closeModal}
                >


                </DeleteModal>
            }

        </div>
    );
};

export default Report;