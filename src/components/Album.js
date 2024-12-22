import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../features/albumSlice";
import NavBar from "./NavBar";
import { PulseLoader } from "react-spinners";

const Album = () => {
  const dispatch = useDispatch();
  const { albums, status, error } = useSelector((state) => state.albumData);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  if (status === "loading")
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <PulseLoader color="#007bff" size={15} />
      </div>
    );

  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                  </tr>
                </thead>
                <tbody>
                  {albums.map((album) => (
                    <tr key={album.id}>
                      <td>{album.id}</td>
                      <td>{album.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
