import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Title from '../Shared/Title/Title';
import './MyItem.css'
import MySingleItem from './MySingleItem/MySingleItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://warehouse-management-server-llb7.onrender.com/myItem?email=${email}`
            const { data } = await axios.get(url)
            setItems(data)
        }
        getItems();
    }, [user])

    const deleteItem = id => {
        const Confirm = window.confirm('Are you sure, you want to delete?');
        if (Confirm) {
            const url = `https://warehouse-management-server-llb7.onrender.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining)
                });
        }

    }
    return (
        <div className='container'>
            <Title title="my item"></Title>
            <div className='mt-5 mb-3 our-equipments'>
                <h2 className='text-center '>My Item</h2>
                <div className='empty mx-auto'></div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    items.map(item => <MySingleItem key={item._id} item={item} deleteItem={deleteItem} />)
                }
            </div>
        </div>
    );
};

export default MyItem;