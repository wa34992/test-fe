import React, { useEffect } from 'react';
import './style.scss';
import Table from '../../Components/Table/index';
import TableV2 from '../../Components/TableV2/index';
import { getAllProducts } from './redux/reducer'
import { useDispatch } from "react-redux";


const Product = () => {

  const dispatch = useDispatch();


  const handleCartClick = () => {
    const offcanvasElement = document.getElementById('cartOffcanvas');
    if (offcanvasElement) {
      const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
      offcanvas.show();
    }
  };

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary">
        <div className="container">
          <a className="navbar-brand logo" href="#">My Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item me-4" title="Logout">
                <img src='src/assets/images/logout.png' className="img-fluid cart-icon"></img>
              </li>
              <li className="nav-item">
                <img src='src/assets/images/grocerystore.png' className="img-fluid cart-icon" onClick={handleCartClick}></img>
              </li>
              <li className="nav-item ms-4 email-text">
                email here
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <form className="d-flex mb-3">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          {/* <span class="input-group-text border-0"id="search-addon">
  X</span> */}
        </form>

        <Table />
      </div>

      <div id="cartOffcanvas" className="offcanvas offcanvas-end">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Selected Product</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <TableV2 />
        </div>
      </div>
    </div>
  );
};

export default Product;
