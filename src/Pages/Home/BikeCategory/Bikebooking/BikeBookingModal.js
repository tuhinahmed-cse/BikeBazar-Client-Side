import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BikeBookingModal = ({books, setBooks}) => {

    const {category_title,name,resale_price , img } = books;

    const {user} = useContext(AuthContext);
 console.log(books);
 


    const handleBooking= event =>{

        event.preventDefault();

        const form = event.target;
        const name=  form.name.value;
        const email = form.email.value;
        const bName = form.bName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const image = form.image.value;

        const booking = {
            name, email, bName, price, phone, location, image
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooks(null);
                    toast.success('Booking confirmed');
                    
                }
                else{
                    toast.error(data.message);
                }
            })
        


    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{category_title}</h3>

                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    
                <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                <input name="bName" type="text" defaultValue={name} disabled placeholder="Bike Name" className="input w-full input-bordered" />

                <input name="price" type="text" defaultValue={resale_price} disabled placeholder="Price" className="input w-full input-bordered" />

                <input name="phone" type="text" placeholder="Mobile" className="input w-full input-bordered" />

                <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />

                <input name="image" type="hidden" defaultValue={img} placeholder="image" className="input w-full input-bordered" />

                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />

                    
                </form>
            </div>
        </div>
    </>
    );
};

export default BikeBookingModal;