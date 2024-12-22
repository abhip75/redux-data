import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserInformation } from "../features/usersSlice";
import NavBar from "./NavBar";
import { PulseLoader } from "react-spinners";

const Info = () => {

    const dispatch = useDispatch();

    const {users, status, error}  = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserInformation());
    },[dispatch]);

    if(status === 'loading')
        return(
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <PulseLoader color="#007bff" size={15} />
            </div>
        );

        if(status === 'failed') return <p>Error: {error}</p>;

    return(

        <>
            <NavBar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <div className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Working In</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.company.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;