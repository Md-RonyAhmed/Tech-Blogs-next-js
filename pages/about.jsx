import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
   return (
     <div>
       <Head>
         <title>About</title>
       </Head>
       <Navbar />
       <h1>This is About page</h1>
     </div>
   );
};

export default About;