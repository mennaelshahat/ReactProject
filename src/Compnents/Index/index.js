import React , { Component }  from 'react';
import Home from '../Home';
import About from '../About';
import Work from '../Work';
import SocialMedia from '../SocialMedia';
import Profile from '../Profile';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

class Index extends  React.Component {
     render() {
     return (
       <div>
         <Home />
         <Work />
         <Portfolio />
         <Profile />
         <About />
         <SocialMedia />
         <Footer />
       </div>
     )
     }
   }
   
   export default Index;
   