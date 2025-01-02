import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../features/commentSlice";
import NavBar from "./NavBar";
import { PulseLoader } from "react-spinners";

const Comments = () => {

    const dispatch = useDispatch();
    const {comments, status, error} = useSelector((state) => state.comment);

    useEffect(() => {
        dispatch(fetchComments());
    },[dispatch]);

      if (status === "loading")
        return (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <PulseLoader color="#007bff" size={15} />
          </div>
        );
    
      if (status === "failed") return <p>Error: {error}</p>;

    return(
        <>
            <NavBar/>
            <div className="container mt-5">
            <div className="row">
            <div className="col-md-12">
                <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {comments.map((comment) => (
                        <tr key={comment.id}>
                            <td>{comment.id}</td>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
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

export default Comments;