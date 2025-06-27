import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image3 from '../../Images/Image3.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'

const Home = () => {
   return (
      <>
         <Navbar bg="info" variant="dark">
            <Container>
               <Navbar.Brand>ComplaintCare </Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-1">
                     <Link to={'/'}
                        className={`nav-link text-dark `}
                     >
                        Home
                     </Link>
                  </li>
                  {/* <li className="nav-item mb-2">
                     <Link
                        to={'/About'}
                        className={`nav-link text-light `}
                     >
                        About
                     </Link>
                  </li> */}
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link text-dark `}
                     >
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link text-dark `}
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <Container className='home-container'>
            <div className="left-side">
               <img src={Image3} alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='f-letter'>Online Complaints,</span><br />
                  <span className='s-letter'> Exceed Customer Expectations: Discover our</span> <br />
                  <span className='t-letter'>Complaint Management Solution</span><br />
                  <Link to={'/Login'}><Button className='mt-2 register'>Register your Compliant</Button></Link>
               </p>
            </div>
         </Container>
         <Footer/>
      </>
   )
}

export default Home
