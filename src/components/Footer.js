import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../src/components/styles/Layouts';
import logo from '../assets/Logo.png';
import "../index.css"

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                       <div className="logo-items">
                        <img src={logo} alt="" />
                  
                       </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                        <p>
                             Resources
                            </p>
                            <li>
                                <a href="#">Newletter</a>
                            </li>
                            <li>
                                <a href="#">Event</a>
                            </li>
                            <li>
                                <a href="#">Help Centre</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </div>
                      
                        <div className="links3">
                        <p>
                             Legal
                            </p>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Cookies</a>
                            </li>
                            <li>
                                <a href="#">Licenses</a>
                            </li>
                            <li>
                                <a href="#">Settings</a>
                            </li>
                        </div>
                        
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #DCE2F0;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding:  rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    @media screen and (max-width: 414px){
        padding:0;
     

    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 414px){
            padding-left:1rem;
          display:flex;
          flex-direction:column;
    
        }
    }

    .logo-con{
        display: flex;
        // align-items: center;
        
        img{
            width: 150px;
        }
        @media screen and (max-width: 414px){
           margin-top:-50px
    
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            padding: 1rem 0;
            color: #16194F;
        }
        @media screen and (max-width: 414px){
           flex-direction:column;
         
    
        }
        .links1{
            margin:30px 0 ;
        }
    }
`;

export default Footer
