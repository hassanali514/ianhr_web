import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/images/sb.png'
import { AiOutlineWhatsApp, AiOutlinePhone, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import './header.css'
import ReactWhatsapp from 'react-whatsapp';


const Header = () => {

    const [isSectorHovered, setIsSectorHovered] = useState(false);
    const [isStoryHovered, setIsStoryHovered] = useState(false);

    const handleSectorMouseEnter = () => {
        setIsSectorHovered(true);
    } 

    const handleSectorMouseLeave = () => {
        setIsSectorHovered(false);
    }

    const handleStoryMouseEnter = () => {
        setIsStoryHovered(true);
    }

    const handleStoryMouseLeave = () => {
        setIsStoryHovered(false);
    }

    const dynamicSectorClass = isSectorHovered ? 'activeSector' : 'sector';
    const dynamicStoryClass = isStoryHovered ? 'activeStory' : 'story';


    return (
        <Fragment>

            <div className='container d-flex'>
                <div className='col-lg-2 d-flex py-3 align-items-center justify-content-center'>
                    <Link className="nav-link mx-1" to='/'><AiOutlineMail /></Link>
                    <span>mmclimited@gmail.com</span>
                </div>
                <div className='col-lg-2 d-flex py-3 align-items-center justify-content-center'>
                    <Link className="nav-link mx-1" to='/'><AiOutlinePhone /></Link>
                    <span>+971 56 3782 441</span>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-2 d-flex py-3 align-items-center justify-content-center social'>
                    <div>
                        <Link className="nav-link mx-2" to='/'><AiOutlineFacebook /></Link>
                    </div>
                    <div>
                        <Link className="nav-link mx-2" to='/'><AiOutlineTwitter /></Link>
                    </div>
                    <div>
                        <Link className="nav-link mx-2" to='/'><AiOutlineInstagram /></Link>
                    </div>
                    <div>
                        <ReactWhatsapp number="+971 522509545"><AiOutlineWhatsApp className='icon' /></ReactWhatsapp>
                    </div>
                </div>
            </div>

            <div className='container header mt-3' style={{ background: 'rgba(255, 255, 255, 0.8)', borderRadius: '.2rem' }}>
                <div className='row my-3'>

                    <div className='col-lg-4'>
                        <Link to="/"><img src={logo} style={{ height: '35px', width: '100%' }} /></Link>
                    </div>

                    <div className='col-lg-6'>
                        <div className='d-flex flex-row justify-content-end'>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link className="nav-link hover-button" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover-button" to="/" onMouseEnter={handleStoryMouseEnter} onMouseLeave={handleStoryMouseLeave}>Our Story</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover-button" to="/" onMouseEnter={handleSectorMouseEnter} onMouseLeave={handleSectorMouseLeave}>Sectors</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover-button" to="/">Media</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover-button" to="/">Careers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-2'>
                        <div className="nav d-flex align-items-center justify-content-center">
                            <div className="nav-item">
                                <Link className="nav-link contact-button" to="/">Contact us</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className={`container ${dynamicSectorClass}`} onMouseEnter={handleSectorMouseEnter} onMouseLeave={handleSectorMouseLeave}>
                <div className="row">
                    <div className="col-lg-3">
                        <div>
                            <Link>Services</Link>
                        </div>
                        <div>
                            <Link>Belhasa Recruitment</Link>
                        </div>
                        <div>
                            <Link>Belhasa Labour</Link>
                        </div>
                        <div>
                            <Link>Services</Link>
                        </div>
                        <div>
                            <Link>Services</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <Link>Services</Link>
                        </div>
                        <div>
                            <Link>Belhasa Recruitment</Link>
                        </div>
                        <div>
                            <Link>Belhasa Labour</Link>
                        </div>
                        <div>
                            <Link>Services</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <Link>Services</Link>
                        </div>
                        <div>
                            <Link>Belhasa Recruitment</Link>
                        </div>
                        <div>
                            <Link>Belhasa Labour</Link>
                        </div>
                        <div>
                            <Link>Services</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <Link>Services</Link>
                        </div>
                        <div>
                            <Link>Belhasa Recruitment</Link>
                        </div>
                        <div>
                            <Link>Belhasa Labour</Link>
                        </div>
                        <div>
                            <Link>Services</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container ${dynamicStoryClass}`} onMouseEnter={handleStoryMouseEnter} onMouseLeave={handleStoryMouseLeave}>
                <div className="row d-flex">
                    <div className='col-lg-6'></div>
                    <div className='col-lg-3 story-content'>
                        <div>
                            <div><Link to="/">Who We Are</Link></div>
                            <div><Link to="/">Chairman's Message</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Header