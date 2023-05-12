import React from 'react'
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="4" className='mb-4' md="12">
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>CartMax</h1>
                            </div>
                        </div>
                        <p className='footer_text mt-4'>Quality materials & refined design perfect for all apartments and houses.Start decorating now!</p>
                    </Col>
                    {/* MAKE YOUR HOUSEHOLD FEEL COZY WITH OUR FURNITURE AND DECORATIONS */}
                    <Col lg="3" md="3" className='mb-4'>
                        <div className='footer_quick-links '>
                            <h4 className='quick_links-title'>Top Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Wall Clock</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#"> Chair collection</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Modern Table</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>


                    <Col lg="2" md="3" className='mb-4'>

                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Useful Links</h4>
                            <ListGroup >
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>


                    <Col lg="3" md="4">
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Contact</h4>
                            <ListGroup className='footer_contact' >
                                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>123 ZindaBazar , Mubarak Street, Chennai</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0  d-flex align-item-center gap-2'>
                                    <span><i class="ri-phone-line"></i></span>
                                    <p>+91 4447888845</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0  d-flex align-item-center gap-2'>
                                    <span><i class="ri-mail-line"></i></span>
                                    <p>anish123@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="12">
                        <p className='footer_copyright'> Copyright &copy; {year} CartMax. All rights reserved.</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
};

export default Footer;