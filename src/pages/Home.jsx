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
// import Clock from '../components/UI/Clock';
// import useGetData from '../custom-hooks/useGetData';

const Home = () => {
    // const { data: products, loading } = useGetData("products")

    const [newLampProducts, setNewLampProduct] = useState([]);
    const [chairProducts, setChairProduct] = useState([]);
    const [bestSofaProducts, setBestSofaProducts] = useState([]);
    const [newTableProducts, setNewTableProduct] = useState([]);
    const [newClockProducts, setNewClockProduct] = useState([]);
    const [newPlantProducts, setNewPlantProduct] = useState([]);


    // const [plantProducts, setPlantProduct] = useState([]);

    // const [data, setdata] = useState(products);
    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredNewLampProducts = products.filter((item) => item.category === "lamp");
        const filteredChairProducts = products.filter((item) => item.category === "chair");
        const filteredBestSofaProducts = products.filter((item) => item.category === "sofa");

        const filteredNewTableProducts = products.filter((item) => item.category === "table");

        const filteredNewClockProducts = products.filter((item) => item.category === "clock")
        const filteredNewPlantProducts = products.filter((item) => item.category === "plant")







        // setData(filterProducts);
        setNewLampProduct(filteredNewLampProducts);
        setChairProduct(filteredChairProducts);
        setBestSofaProducts(filteredBestSofaProducts);
        setNewTableProduct(filteredNewTableProducts);
        setNewClockProduct(filteredNewClockProducts);
        setNewPlantProduct(filteredNewPlantProducts);

    }, []);
    // }, [products]);
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
                                {/* < button className='buy_btn'> <Link to="/shop">SHOP NOW</Link></button> */}
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
                        {/* {
                            loading ? (<h5 className='fw-bold'> Loading.... </h5>) : ( */}
                        <ProductList data={newLampProducts} />


                        {/* } */}

                    </Row>
                </Container>
            </section>


            <section className='best_sales'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className='section_title mb-5'>Best Sales</h2>
                        </Col>

                        {/* {
                            loading ? (<h5 className='fw-bold'> Loading.... </h5>) : (
                                <ProductList data={bestSalesProducts} />)
                        } */}
                        <ProductList data={chairProducts} />
                        <ProductList data={bestSofaProducts} />
                    </Row>
                </Container>
            </section>

            <section className='offers'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className='offer_sofa'>
                            <div>
                                <div className='offer_sofaimg'>
                                    <img src={counterImg} alt="" />
                                </div>

                                <div className='offer_con1'>
                                    <p>Get Upto</p>
                                    <h2>40% OFF</h2>
                                    <motion.button whileTap={{ scale: 1.2 }} className='buy_btn off_btn'><Link to="/shop">Shop Now</Link></motion.button>
                                </div>





                            </div>

                        </Col>
                        <Col lg="6" md='6' className='offer_lamp'>
                            <div>
                                <div className='offer_lampimg'>
                                    <img src={counterImg1} alt="" />
                                </div>

                                <div className='offer_con2'>
                                    <p>Flat Upto</p>
                                    <h2>60% OFF</h2>
                                    <motion.button whileTap={{ scale: 1.2 }} className='buy_btn off_btn'><Link to="/shop">Shop Now</Link></motion.button>
                                </div>


                            </div>

                        </Col>
                        {/* 
                        <Col>
                            <div className='clock_top-content'>
                                <h1>Get Best Discount</h1>
                                <p>t is a long established fact that a reader will be distracted by the readable content</p>
                                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn store_btn'><Link to="/shop">Visit Store</Link></motion.button>
                            </div>
                        </Col> */}

                        {/* <Col lg="3" md='12' className='text-end counter_img'>
                            <img src={counterImg} alt="" />
                        </Col> */}
                    </Row>
                </Container>
            </section>

            <section className='new_arrivals'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center mb-5'>
                            <h2 className='section_title'> New Arrivals </h2>

                        </Col>

                        {/* {
                            loading ? (<h5 className='fw-bold'> Loading.... </h5>) : ( */}
                        <ProductList data={newTableProducts} />
                        {/* } */}



                        <ProductList data={newClockProducts} />

                        {/* {
                            loading ? (<h5 className='fw-bold'> Loading.... </h5>) : (
                                <ProductList data={wirelessProducts} />)
                        } */}

                        {/* <ProductList data={Products} /> */}

                        {/* {
                            loading ? (<h5 className='fw-bold'> Loading.... </h5>) : (
                                <P
                                roductList data={plantProducts} />)
                        } */}

                        {/* <ProductList data={plantProducts} /> */}

                    </Row>
                </Container>
            </section>



            <section className='popular_category'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center mb-5'>
                            <h2 className='section_title'> Popular in Category </h2>

                        </Col>
                        {/* {
                            loading ? (<h5 className='fw-bold'> Loading.... </h5>) : ( */}
                        <ProductList data={newPlantProducts} />
                        {/* } */}
                    </Row>
                </Container>
            </section>

        </Helmet>
        // <div>Home</div>
    );
};

export default Home;