import React from 'react'
import CommonSection from '../components/UI/CommonSection';
import Helmet from "../components/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from '../assets/data/products';
import { useState } from 'react';
import ProductList from "../components/UI/ProductList";




const Shop = () => {
    const [productsData, setProductsData] = useState(products);
    const handleFilter = e => {

        const filterValue = e.target.value
        if (filterValue === "sofa") {
            const filteredProducts = products.filter(item => item.category === "sofa")
            setProductsData(filteredProducts);
        }

        if (filterValue === "chair") {
            const filteredProducts = products.filter(item => item.category === "chair")
            setProductsData(filteredProducts);
        }


        if (filterValue === "table") {
            const filteredProducts = products.filter(item => item.category === "table")
            setProductsData(filteredProducts);
        }

        if (filterValue === "lamp") {
            const filteredProducts = products.filter(item => item.category === "lamp")
            setProductsData(filteredProducts);
        }


        if (filterValue === "clock") {
            const filteredProducts = products.filter(item => item.category === "clock")
            setProductsData(filteredProducts);
        }

        if (filterValue === "plant") {
            const filteredProducts = products.filter(item => item.category === "plant")
            setProductsData(filteredProducts);
        }
    };

    const handleSearch = e => {
        const searchTeam = e.target.value
        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTeam.toLowerCase()))
        setProductsData(searchedProducts);
    }

    return (
        <Helmet title="Shop">
            <CommonSection title="Products" />
            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="6">
                            <div className='filter_widget'>
                                <select onChange={handleFilter}>
                                    <option>Filter By Category </option>
                                    <option value="sofa">Sofa</option>
                                    <option value="chair">Chair</option>
                                    <option value="table">Table</option>
                                    <option value="lamp">Lamp</option>
                                    <option value="clock">Clock</option>
                                    <option value="plant">Plant</option>
                                </select>
                            </div>
                        </Col>

                        <Col lg="9" md="12" className='product_search'>
                            <div className='search_box'>
                                <input type="text" placeholder='search.....' onChange={handleSearch} />
                                <span><i class="ri-search-line"></i></span>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Container>
                    <Row>
                        {productsData.length === 0 ? (<h1 className='text-center fs-4'>No products are found!</h1>
                        ) : (
                            <ProductList data={productsData} />
                        )
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;