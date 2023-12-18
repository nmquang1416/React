import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../Css/nav.css'

function Nav() {
    return (
        <div className='bg-light '>
            <ul class=" container nav justify-content-between">
                <li class="nav-item d-flex">
                    <span className='d-flex align-items-center'>
                        Cấp cứu:
                    </span>
                    <a class="ps-1 active" aria-current="page" href="#"> 0901 793 122</a>
                </li>
                <li class="nav-item d-flex">
                    <span className='d-flex align-items-center'>
                        Cấp cứu:
                    </span>
                    <a class="ps-1 active" aria-current="page" href="#"> 0901 793 122</a>
                </li>
                <li class="nav-item d-flex">
                    <span className='d-flex align-items-center'>
                        Cấp cứu:
                    </span>
                    <a class="ps-1 active" aria-current="page" href="#"> 0901 793 122</a>
                </li>
                <li class="nav-item d-flex ">
                    <span className='d-flex align-items-center'>
                        Cấp cứu:
                    </span>
                    <a class="ps-1 active" aria-current="page" href="#"> 0901 793 122</a>
                </li>

            </ul>

            <nav className="container navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt='photo'></img></a>
                    <span className='h3 text-success'>Chăm sóc sức khỏe trọn đời cho bạn</span>
                    <form className="d-flex">
                        <input className="form-control me-2 border border-0 border-bottom border-success" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className='bg-success'>
                
                <nav class=" nav nav-fill container p-2 text-white">
                        <a class="nav-link" href="#">Trang chủ</a>
                        <a class="nav-link" href="#">Giới thiệu</a>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Chuyên khoa
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dịch vụ khám bệnh
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hỗ trợ khách hàng
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <a class="nav-link" href="#">Hỏi đáp chuyên gia</a>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tin tức
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sống khỏe
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <a class="nav-link" href="#">Liên hệ</a>
                        <button type='button' className='btn btn-danger'>Đặt lịch khám</button>
                </nav>

            </div>
        </div>
    );
}

export default Nav;
