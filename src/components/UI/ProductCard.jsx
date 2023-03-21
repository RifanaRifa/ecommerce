import React from 'react'
// import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/cartSlice';

import { toast } from 'react-toastify';





const ProductCard = ({ item }) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({

                id: item.id,
                productName: item.productName,
                price: item.price,
                imgUrl: item.imgUrl,
            })
        );
        // alert("product added to the cart");
        toast.success("prouct added sucessfully");

    };

    return (
        <Col lg="3" md="4" mb="4" className='mb-2'>
            <div className="product_item ">
                <div className='product_img'>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>

                <div className='p-2 product_info'>
                    <h3 className='product_name'><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    {/* <h3 className='product_name'><Link to="shop/id">{item.productName}</Link></h3> */}
                    {/* <span className='text-center d-block'>Chair</span> text box center la varum*/}
                    <span>{item.category}</span>
                </div>

                <div className='product_card-bottom d-flex align-items- center justify-content-between'>
                    <span className='price'> ${item.price} </span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}> <i class="ri-add-line"></i></motion.span>
                    {/*onClick={addToCart}reduce la ullathu*/}
                </div>



            </div>
        </Col>
    );
};

export default ProductCard;