// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import '../App.css';

const Contact = (props) => {
   
    return (
        <div className='item'>    
        <div className='aside'><img src={props.data.photo} alt={props.data.name} className='image'/></div>       
        <div className='section'>
                <div className='nama'>{props.data.name}</div>
                
                <div className='phone-email'>{props.data.phone} <br></br>
            {props.data.email}</div>   
                </div>         
        </div>
    )
}

export default Contact;