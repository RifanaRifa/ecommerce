import React, { useRef, useEffect } from 'react'


import "./header.css";
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png'
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/images/user-icon.png'
import { motion } from "framer-motion";
import useAuth from '../../custom-hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";


import { useSelector } from 'react-redux';

const nav_links = [
    {
        path: "home",
        dispaly: "Home"
    },

    {
        path: "shop",
        dispaly: "Shop"
    },

    {
        path: "cart",
        dispaly: "Cart"
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)//product quantity inclrs(111 line )

    const profileActionRef = useRef(null);


    const menuRef = useRef(null);


    const navigate = useNavigate();
    const { currentUser } = useAuth()

    const stickyHeaderFun = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky_header");//header.css
            } else {
                headerRef.current.classList.remove("sticky_header");
            }

        });
    };


    const logout = () => {
        signOut(auth).then(() => {
            toast.success("Logged out");
            navigate("/home");
        })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    useEffect(() => {
        stickyHeaderFun();
        return () => window.removeEventListener("scroll", stickyHeaderFun);
    });

    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

    const navigateToCart = () => {
        navigate("/cart");

    };

    const toggleProfileActions = () => profileActionRef.current.classList.toggle("show_profileActions")




    return (
        <header className="header" ref={headerRef} >
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>CartMax</h1>
                            </div>
                        </div>


                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">

                                {
                                    nav_links.map((item, index) => (
                                        <li className="nav_item" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''} >{item.dispaly}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav_icons">
                            <span className="fav_icon"><i class="ri-heart-line"></i>
                                <span className="badge">2</span>

                            </span>
                            <span className="cart_icon" onClick={navigateToCart} >
                                <i class="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>

                            <div className='profile'>
                                <span>
                                    <motion.img whileTap={{ scale: 1.2 }}
                                        src={currentUser ? currentUser.photoURL : userIcon} alt="" onClick={toggleProfileActions} />
                                </span>

                                <div className="profile_actions" ref={profileActionRef} onClick={toggleProfileActions} >
                                    {
                                        currentUser ? <span onClick={logout}>Logout</span> :
                                            <div className='d-flex align-items-center  justify-content-center flex-column'>
                                                <div className='sign_btn'>
                                                    <Link to="/signup">Signup</Link>
                                                    <Link to="/login"> Login</Link>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>

                            <div className="mobile_menu">
                                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>

                            </div>
                        </div>
                    </div>

                </Row>
            </Container>
        </header >
    );
};


export default Header;