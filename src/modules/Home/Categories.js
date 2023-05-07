import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Categories = () => {
  return (
    <div>
      <div className="section section-padding category_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div classNameName="andro_icon-block text-center has-link">
                <Link to={"#"}>
                  <i className="flaticon-tribune"></i>
                  <h5>Novels</h5>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="andro_icon-block text-center has-link">
                <Link to="#">
                  <i className="flaticon-detective-story"></i>
                  <h5>History</h5>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="andro_icon-block text-center has-link">
                <Link to="#">
                  <i className="flaticon-artificial-intelligence"></i>
                  <h5>Fiction</h5>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-4">
              <div className="andro_icon-block text-center has-link">
                <Link to="#">
                  <i className="flaticon-book-1"></i>
                  <h5>Biography</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
