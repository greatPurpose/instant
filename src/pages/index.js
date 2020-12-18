import React from 'react';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import Layout from '../components/Layout';
import FeatureComponent from '../components/Feature';


const IndexPage = () => (
  <Layout>
    <HeaderComponent />    
    <FeatureComponent />
    <FooterComponent />
  </Layout>
);

export default IndexPage;
