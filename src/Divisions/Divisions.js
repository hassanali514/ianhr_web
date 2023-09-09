import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from '../Assets/images/mc.png'
import logo2 from '../Assets/images/ayadi.png'
import './divisions.css'

const Divisions = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <Fragment>
            <div className="container text-center divisions">
                <div className="row d-flex">
                    <div className="col-lg-12">Saif Belhasa Holding</div>
                    <div className="col-lg-12">Saif Belhasa Holding</div>
                </div>
                <Slider {...settings}>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                </Slider>
            </div>

        </Fragment>
    )
}

export default Divisions