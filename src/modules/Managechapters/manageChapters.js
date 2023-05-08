import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Addchapter from "./Addchapter";

const ManageChapters = () => {
  return (
    <div>
      <section
        className="manage-chapters p-5"
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
          <h3>Manage Chapters</h3>
          <Link
            className="btn float-right "
            to={"add-chapter"}
            style={{
              backgroundColor: "lightgray",
              height: "30px",
              marginTop: "15px",
            }}
          >
            Add new Chapter +
          </Link>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>

              <th>Book Name</th>
              <th>Chapter title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>

              <td>Harry potter</td>

              <td>
                an orphan brought up by his aunt and uncle because his parents
                were killed when he was a baby.
              </td>
              <td>
                <Link className="btn btn-sm btn-danger">Delete</Link>
                <Link
                  to={"update-chapter"}
                  className="btn btn-sm btn-primary mx-2"
                >
                  Update
                </Link>
                <Link to={"/chapter-pdf"} className="btn btn-sm btn-info">
                  Show
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>

              <td>Harry potter</td>
              <td>
                an orphan brought up by his aunt and uncle because his parents
                were killed when he was a baby.
              </td>
              <td>
                <Link className="btn btn-sm btn-danger">Delete</Link>
                <Link
                  to={"update-chapter"}
                  className="btn btn-sm btn-primary mx-2"
                >
                  Update
                </Link>
                <Link to={"/chapter-pdf"} className="btn btn-sm btn-info">
                  Show
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
      );
    </div>
  );
};

export default ManageChapters;
