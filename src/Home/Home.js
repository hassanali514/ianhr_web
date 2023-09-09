import React, { Fragment, useState } from 'react'
import Header from '../Header/Header'
import './home.css'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import Progress from '../Progress/Progress'
import Services from '../Services/Services'
import Divisions from '../Divisions/Divisions'
import { Link } from 'react-router-dom'
import logo from '../Assets/images/mc.png'
import logo1 from '../Assets/images/ayadi.png'
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineWhatsApp, AiOutlinePhone, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import ReactWhatsapp from 'react-whatsapp';



const Home = () => {

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
      <div className='abc'>
        <div className='container overlay d-flex'>
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
        </div>

        <div className='container overlay d-flex'>
          <div className='container header mt-4' style={{ background: 'rgba(255, 255, 255, 0.8)', borderRadius: '.2rem' }}>
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


          <div className={`container ${dynamicSectorClass} head`} onMouseEnter={handleSectorMouseEnter} onMouseLeave={handleSectorMouseLeave}>
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
        </div>
        <Carousel>
          <Carousel.Item>
            <div className='container carouselOverlay'>
              <div className='row col-lg-8'>
                <div className='col-lg-12'>Hello</div>
                <div className='col-lg-12'>Freind</div>
                <div className='col-lg-12'>
                  <button>BUTTON</button>
                </div>
              </div>
            </div>
            <img
              className="d-block w-100 carouselImage"
              src={logo1}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <div className='container carouselOverlay'>
              <div className='row col-lg-8'>
                <div className='col-lg-12'>Hello</div>
                <div className='col-lg-12'>Freind</div>
                <div className='col-lg-12'>
                  <button>BUTTON</button>
                </div>
              </div>
            </div>
            <img
              className="d-block w-100 carouselImage"
              src={logo1}
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <div className='container carouselOverlay'>
              <div className='row col-lg-8'>
                <div className='col-lg-12'>Hello</div>
                <div className='col-lg-12'>Freind</div>
                <div className='col-lg-12'>
                  <button>BUTTON</button>
                </div>
              </div>
            </div>
            <img
              className="d-block w-100 carouselImage"
              src={logo1}
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <Progress />
      <Services />
      <Divisions />
    </Fragment>
  )
}


export default Home