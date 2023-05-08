import React from "react";

import UpdateBook from "./UpdateBook";
import { Table } from "react-bootstrap";
import "../../Css/ManageBooks.css";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  return (
    <section
      className="manage-movies p-5"
      style={{ width: "900px", marginLeft: "300px" }}
    >
      <div
        className="header d-flex"
        style={{
          display: "flex",
          marginBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        <h3>Books List</h3>
        <Link
          className="btn float-right "
          to={"add"}
          style={{
            backgroundColor: "lightgray",
            height: "30px",
            marginTop: "15px",
          }}
        >
          Add new book +
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Author Name</th>
            <th>Book Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>J.K rowling</td>
            <td>Harry potter</td>
            <td>
              an orphan brought up by his aunt and uncle because his parents
              were killed when he was a baby.
            </td>
            <td>
              <Link className="btn btn-sm btn-danger">Delete</Link>
              <Link to={"update"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"/details"} className="btn btn-sm btn-info">
                Show
              </Link>
              <Link
                to={"/manage-chapters"}
                className="btn btn-sm"
                style={{ backgroundColor: "lightgrey" }}
              >
                Manage Chapters
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>J.K rowling</td>
            <td>Harry potter</td>
            <td>
              an orphan brought up by his aunt and uncle because his parents
              were killed when he was a baby.
            </td>
            <td>
              <Link className="btn btn-sm btn-danger">Delete</Link>
              <Link to={"update"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"/details"} className="btn btn-sm btn-info">
                Show
              </Link>
              <Link
                to={"/manage-chapters"}
                className="btn btn-sm "
                style={{ backgroundColor: "lightgrey" }}
              >
                Manage chapters
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default ManageBooks;
