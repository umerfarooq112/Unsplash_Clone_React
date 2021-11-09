import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "../utils/DropDown";
import Modal from "../utils/Modal";
// import trophy from '../assets/images/trophy';
import trophy from '../../assets/images/trophy.png';
// import trophy  from '../../assets/images/trophy';
// import { Rea as trophy } from "react";


const Header = () => {

      
    const openModal = () =>
    {
        var modal = window.document.getElementById("myModal");
        modal.style.display = "block";
        // document.body.style.overflowY = 'hidden'
        
    }
    const closeModal=() =>
    {
        var modal = window.document.getElementById("myModal");
        modal.style.display = "none";
        document.body.style.overflowY = 'auto'

    }
    const opendropdownMenu=()=>
    {
        window.document.getElementById("myDropdown").classList.toggle("show");
    }

    return ( 
        <>
            <header>
                <div className="header-section">
                    <div>
                        <Link to='/dashboard'>
                        <svg width="32" height="32" className="hic6U" viewBox="0 0 32 32" version="1.1"
                            aria-labelledby="unsplash-home" aria-hidden="false">
                            <title id="unsplash-home">Unsplash Home</title>
                            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                        </svg>
                        </Link>
                    </div>
                    <div className="logo-text">
                        <span className="header-span1 h-text-1"> Unsplash</span>
                        <span className="header-span1 h-text-2">Photos For EveryOne</span>
                    </div>
                    <div className="span-section">
                        <input className="input-field" type="email" id="header-input-field"
                            placeholder="Search Free High Resoultion Pictures" />
                        <i className="fa fa-search icon-1 "></i>
                        <i className="fa fa-camera icon-2  "></i>
                    </div>
                    <div className="brands-section">
                        <h4 className="headers-brand-text">Brands</h4>
                    </div>
                    <div className="awards">
                        <img src={trophy} className="trophy-img" width="10" height="20" alt="" />
                        {/* <i className="fa fa-trophy header-icon"></i> */}
                        <h4 className="header-Awards"> <span className="header-award-u">Unsplash</span> Awards</h4>
                    </div>
                    <Modal openModal={openModal} closeModal={closeModal} />

                    <div className="header-button">
                        <button type="submit"> <Link to='/signup' > Submit a Photo </Link> </button>
                    </div>
                    <DropDownMenu opendropdownMenu={opendropdownMenu} />
                </div>
            </header>
        </>
     );
}
 
export default Header;