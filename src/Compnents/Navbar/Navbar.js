 /*
     ===============================
             Navbar Styles
     ===============================
 */
import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const NavbarSection = styled.div`
padding: 5px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000
`
export const Logo = styled.div`
width: 46%;
float: left;
`
export const Logo_text = styled.h2`
font-size: 30px;
font-weight: bold
`
export const  Ul_list = styled.ul` 
     width: 50%;
     float: left;
     list-style: none;
 `
 
 export const List_item = styled.li` 
     display: inline-block;
 `
 
 export const Anchor = styled.a ` 
     display: block;
     color: #222;
     text-decoration: none;
     padding: 10px 15px;
     font-weight: bold;
     &:hover{
        color: #eb5424
     }
 `
 export const NavbarLink = styled(Link)`
 display: block;
 color: #222;
 text-decoration: none;
 padding: 10px 15px;
 font-weight: bold;
 &:hover{
    color: #eb5424
 }
 `
 /* Media for Navbar Style */ 
 
//  @media (min-width : 992px) {
//      .navbar label {
//          display: none
//      }
//  }
 
//  @media (max-width : 991px) {
//      .navbar .logo {
//          width: 100%;
//          float: none;
//      }
     
//      .navbar .ul-list {
//          width: 100%;
//          float:  none;
//          margin-top: 20px;
//          display: none
//      }
     
//      .navbar .ul-list .list-item {
//          display: block;
//          text-align: center;
//      }
//  }

 
