import React from 'react'
import FooterComponent from '../components/Footer';
import ContactComponent from '../components/Contact';
import Layout from '../components/Layout';

const BookPage =()=> (
    <Layout>
        <div className="booking-page">
            <ContactComponent />
            <FooterComponent />
        </div>        
    </Layout>
)

export default BookPage;
