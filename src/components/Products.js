import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import NavBar from "./NavBar";
import { PulseLoader } from "react-spinners";

const Products = () => {

    const dispatch = useDispatch();
    const {products, status, error } = useSelector((state) => state.productData);

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);
    
    if(status === 'loading')
        return(
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <PulseLoader color="#007bff" size={15} />
          </div>
    )

    if(status === 'failed') return <p>Error: {error}</p>
    return(
        <>
            <NavBar/>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {products.map((product) => (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.description}</td>
                                                <td>{product.category}</td>
                                                <td><img src={product.image} alt={product.title} style={{height: "50px", width:"50px"}}/></td>
                                                <td>${product.price}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;