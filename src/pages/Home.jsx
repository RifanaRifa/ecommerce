import React, { useEffect, useState } from 'react'
import products from '../assets/data/products';
import Helmet from '../components/helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img-1.png";
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import counterImg1 from "../assets/images/baner-2.jpg";
import counterImg from "../assets/images/baner-1.jpg";

const Home = () => {


    const [newLampProducts, setNewLampProduct] = useState([]);
    const [chairProducts, setChairProduct] = useState([]);
    const [bestSofaProducts, setBestSofaProducts] = useState([]);
    const [newTableProducts, setNewTableProduct] = useState([]);
    const [newClockProducts, setNewClockProduct] = useState([]);
    const [newPlantProducts, setNewPlantProduct] = useState([]);



    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredNewLampProducts = products.filter((item) => item.category === "lamp");
        const filteredChairProducts = products.filter((item) => item.category === "chair");
        const filteredBestSofaProducts = products.filter((item) => item.category === "sofa");

        const filteredNewTableProducts = products.filter((item) => item.category === "table");

        const filteredNewClockProducts = products.filter((item) => item.category === "clock")
        const filteredNewPlantProducts = products.filter((item) => item.category === "plant")

        setNewLampProduct(filteredNewLampProducts);
        setChairProduct(filteredChairProducts);
        setBestSofaProducts(filteredBestSofaProducts);
        setNewTableProduct(filteredNewTableProducts);
        setNewClockProduct(filteredNewClockProducts);
        setNewPlantProduct(filteredNewPlantProducts);

    }, []);

    return (

        <Helmet title={"Home"}>
            <section className='hero_section'>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className='hero_content'>
                                <p className='hero_subtitle' > Trending Product in {year} </p>

                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>We can make all your interior needs special for you. Find premium chairs, furniture and living room decorations only on cartmax </p>

                                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'> <Link to="/shop">SHOP NOW</Link> </motion.button>

                            </div>
                        </Col>

                        <Col lg="6" md="6" >
                            <img src={heroImg} alt="" />

                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className="trending_products">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section_title mb-5">Trending products</h2>

                        </Col>

                        <ProductList data={newLampProducts} />
                    </Row>
                </Container>
            </section>


            <section className='best_sales'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className='section_title mb-5'>Best Sales</h2>
                        </Col>
                        <ProductList data={chairProducts} />
                        <ProductList data={bestSofaProducts} />
                    </Row>
                </Container>
            </section>

            <section className='offers'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className='offer_sofa mb-5'>
                            <div>
                                <div className='offer_sofaimg'>
                                    <img src={counterImg} alt="" />
                                </div>

                                <div className='offer_con1'>

                                    <h2>40% OFF</h2>
                                    <p>Get Upto</p>
                                    <motion.button whileTap={{ scale: 1.2 }} className='buy_btn off_btn'><Link to="/shop">Shop Now</Link></motion.button>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" md='6' className='offer_lamp mb-5'>
                            <div>
                                <div className='offer_lampimg'>
                                    <img src={counterImg1} alt="" />
                                </div>

                                <div className='offer_con2'>

                                    <h2>60% OFF</h2>
                                    <p>Flat Upto</p>
                                    <motion.button whileTap={{ scale: 1.2 }} className='buy_btn off_btn'><Link to="/shop">Shop Now</Link></motion.button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='new_arrivals'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center mb-5'>
                            <h2 className='section_title'> New Arrivals </h2>
                        </Col>
                        <ProductList data={newTableProducts} />
                        <ProductList data={newClockProducts} />
                    </Row>
                </Container>
            </section>



            <section className='popular_category'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center mb-5'>
                            <h2 className='section_title'> Popular in Category </h2>
                        </Col>
                        <ProductList data={newPlantProducts} />

                    </Row>
                </Container>
            </section>

        </Helmet>

    );
};

export default Home;