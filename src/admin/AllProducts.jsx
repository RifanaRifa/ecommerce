// import React from 'react'
// import { Container, Row, Col, Form } from 'reactstrap';
// import { db } from '../firebase.config';
// import { doc, deleteDoc } from "firebase/firestore";
// import { toast } from 'react-toastify';
// import useGetData from '../custom-hooks/useGetData';

// const AllProducts = () => {

//     const { data: productsData, loading } = useGetData("products");

//     const deleteProduct = async (id) => {
//         await deleteDoc(doc(db, "products", id))
//         toast.success("deleted!")

//     };
//     // console.log(productsData);    //datafirebase la irukura product ellam ithula varum
//     return (
//         <section>
//             <Container>
//                 <Row>
//                     <Col lg="12">
//                         <table className='table'>
//                             <thead>
//                                 <tr>
//                                     <th>Image</th>
//                                     <th>Title</th>
//                                     <th>Category</th>
//                                     <th>Price</th>
//                                     <th>Action</th>

//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {
//                                     loading ? (
//                                         <h4 className='py-5 text-center fw-bold'>Loading....</h4>) : (

//                                         productsData.map(item => (
//                                             < tr key={item.id}>
//                                                 <td><img src={item.imgUrl} alt="" /></td>
//                                                 <td>{item.productName}</td>
//                                                 <td>{item.category}</td>
//                                                 <td>{item.price}</td>
//                                                 <th>


//                                                     <button onClick={() => {
//                                                         deleteProduct(item.id)
//                                                     }}
//                                                         className='btn btn-danger' >Delete</button>
//                                                 </th>
//                                             </tr>
//                                         ))
//                                     )}

//                             </tbody>
//                         </table>

//                     </Col>
//                 </Row>
//             </Container>
//         </section >
//     )
// };

// export default AllProducts;