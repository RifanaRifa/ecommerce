
import React from 'react'
import { Container, Row, Col } from "reactstrap";
import useAuth from '../custom-hooks/useAuth';
import "../styles/admin-nav.css";

const AdminNav = () => {

    const { currentUser } = useAuth()
    return (
        <header className='admin_header'>
            <div className='admin_nav_top'>
                <Container>
                    <div className='admin_nav-wrapper-top'>
                        <div className='logo'>
                            <h2>Multimart</h2>
                        </div>

                        <div className='search_box'>
                            <input type="text" placeholder='Search....' />
                            <span><i class="ri-search-line"></i></span>
                        </div>

                        <div className='admin_nav-top-right'>
                            <span><i class="ri-notification-3-line"></i></span>
                            <span><i class="ri-settings-2-line"></i></span>
                            <img src={currentUser.photoURL} alt="" />

                        </div>



                    </div>
                </Container>

            </div>



        </header>
    )
};

export default AdminNav