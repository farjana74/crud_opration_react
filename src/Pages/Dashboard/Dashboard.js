import './Dashboard.css';

import React from 'react';

import { MdApi } from 'react-icons/md';
import {
  Link,
  Outlet,
} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="d-flex" id="wrapper">


                <div className="bg-admin" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fs-5 fw-bold text-uppercase border-bottom">Dashboard</div>

                    <div className="list-group list-group-flush my-3">
                        <Link to="/home" className="list-group-item list-group-item-action bg-transparent second-text active"><MdApi fa-spin className=' fa-spin me-2' />Home</Link>

                        <Link to="/dashboard/showCreate" className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"><MdApi fa-spin="true" className=' fa-spin me-2'></MdApi>Event Create</Link>

                        <Link to="/dashboard/manageShow" className=" text-white list-group-item list-group-item-action bg-transparent second-text fw-bold"><MdApi fa-spin="true" className=' fa-spin me-2'></MdApi>Manage Event</Link>

                        <Link to="" className=" text-white list-group-item list-group-item-action bg-transparent second-text fw-bold"><MdApi fa-spin="true" className='fa-spin  me-2'></MdApi>Make ADmin</Link>






                    </div>
                </div>



                <div id="page-content-wrapper">
                    <div class="row px-3 g-3 my-2">

                        <div class="row px-3 g-3 my-2">
                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">20</h3>
                                        <p class="fs-5">Events</p>
                                    </div>
                                    <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-3">4920</h3>
                                        <p class="fs-5">All Show</p>
                                    </div>
                                    <i
                                        class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-3">3899</h3>
                                        <p class="fs-5">Delivery</p>
                                    </div>
                                    <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-3">%25</h3>
                                        <p class="fs-5">Increase</p>
                                    </div>
                                    <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
                        </div>



                    </div>


                    {/* nested route --------------------*/}

                    <div className='container-fluid'>

                        <Outlet></Outlet>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;