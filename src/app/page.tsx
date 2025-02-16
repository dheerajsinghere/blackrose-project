'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../app/globals.css';
import bgImage from '@/images/bg1.png'; // Importing the image
// import bgImage2 from '@/images/bg2.png';
import { FaKey, FaPenFancy, FaMoneyBillWave, FaUsers } from 'react-icons/fa'; // Icons for services
import Image from 'next/image';
import vrImage from '@/images/market-opportunities.png'; // Update with your image path
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const teamMembers = [
  { id: 1, name: 'Nikolaus Schauersberger', role: 'Founder / CEO', image: '/images/team6.jpg' },
  { id: 2, name: 'John Doe', role: 'CTO', image: '/images/team2.png' },
  { id: 3, name: 'Jane Smith', role: 'CMO', image: '/images/team3.jpg' },
  { id: 4, name: 'Alex Brown', role: 'Developer', image: '/images/team4.jpg' },
  { id: 5, name: 'Emma Wilson', role: 'Designer', image: '/images/team5.png' },
];

const documents = [
  {
    title: 'White Paper EN',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: '/images/whitepaper-en.jpg',
  },
  {
    title: 'White Paper DE',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: '/images/whitepaper-de.jpg',
  },
  {
    title: 'Pitchdeck EN',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: '/images/pitchdeck-en.jpg',
  },
  {
    title: 'Pitchdeck DE',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: '/images/pitchdeck-de.jpg',
  },
];

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeMember = teamMembers[activeIndex];

  return (
    <div
      className="text-light"
      style={{
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(180deg, #000000, #002244)', // Full gradient background for the body
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <nav
        className="navbar navbar-expand-lg navbar-dark px-4"
        style={{ backgroundColor: '#000' }}
      >
        <a className="navbar-brand text-white fw-bold" href="#">
          <span
            style={{
              backgroundColor: '#00FF66',
              padding: '5px 10px',
              borderRadius: '5px',
              color: 'black',
            }}
          >
            Blackrose Club
          </span>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Roadmap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
          </ul>
        </div>
        <button className="rounded-pill" 
        style={{
              backgroundColor: '#00FF66',
              padding: '5px 10px',
              borderRadius: '5px',
              color: 'black',
            }}>Become a Shop Owner</button>
      </nav>

      {/* Banner Section */}
      <header
        className="text-center py-5"
        style={{
          background: 'radial-gradient(ellipse at center, #0a0a0a, #002)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h1 className="display-4 fw-bold text-white container">
          Seize Early <br /> Opportunities In The{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #ffffff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Metaverse
          </span>{' '}
          For Business & Leisure
        </h1>
        <p>
          You can shop your favorite products, join cultural and sports events,
          and sell your products in your own Metaverse.
        </p>
        <button className="btn btn-success mx-2">Explore Services</button>
        <button className="btn btn-outline-light mx-2">Contact Us</button>
      </header>

      {/* 3 Info Cards Section */}
      <div
        className="containerr p-5"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row">

          <div className="col-md-4">
            <div
              className="card bg-dark text-light"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Become an Investor</h5>
                <p className="card-text">
                  Blackrose Club Shopowner costs $10,000 and includes benefits
                  in metaverse events.
                </p>
                <a href="#" className="btn btn-link text-success">
                  See Explained →
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card bg-dark text-light"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Become a Club Member</h5>
                <p className="card-text">
                Product Blackrose Club Shopowner costs 18.000€ net and includes
                </p>
                <ul>
                  <li>10 seminars on mindset, crypto, metaverse and NFT</li>
                  <li>1 workshop on job opportunities in the Metaverse</li>
                  <li>Permission to enter the virtual Blackrose Club World to shop products and visit events</li>
                </ul>
                <a href="#" className="btn btn-link text-success">
                  See Explained →
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card bg-dark text-light"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Become a Shop Owner</h5>
                <p className="card-text">
                Product Blackrose Club Shopowner costs 18.000€ net and includes
                </p>
                <ul>
                  <li>All benefits of the Blackrose Club Member package</li>
                  <li>Run your own virtual shop in the Blackrose Club World</li>
                  <li>Get 20% of the profits you generate in your virtual shop</li>
                  <li>Eligible for profit distribution from the advertising and member pool</li>
                </ul>
                <a href="#" className="btn btn-link text-success">
                  See Explained →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Services Section */}
      <div
      className="py-5"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0a0a, #002)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Optional: You can place an SVG or image background here */}
      <div className="container position-relative">
        <h2 className="text-white">Our Key Services</h2>
        <p className="text-light">
          We provide a secure and efficient key management solution, ensuring
          convenient access and peace of mind for individuals and businesses.
          Simplify your key handling with our reliable key duplication, storage,
          and tracking services.
        </p>
        <button className="btn btn-success mb-4">Explore Services</button>

        <div className="row">
          <div className="col-md-6">
            {/* Card 1 */}
            <div className="service-card mb-3">
              <FaKey className="service-icon" />
              <div>
                <h5>Individualisation</h5>
                <p>
                  Unlock limitless possibilities in the Metaverse - A realm
                  merging business and leisure. Be among the pioneers.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="service-card mb-3">
              <FaPenFancy className="service-icon" />
              <div>
                <h5>User Created Content</h5>
                <p>
                  Unlock limitless possibilities in the Metaverse - A realm
                  merging business and leisure. Be among the pioneers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {/* Highlighted Card 3 */}
            <div className="service-card highlighted mb-3">
              <FaMoneyBillWave className="service-icon" />
              <div>
                <h5>Income Opportunities</h5>
                <p>
                  Unlock limitless possibilities in the Metaverse - A realm
                  merging business and leisure. Be among the pioneers.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="service-card mb-3">
              <FaUsers className="service-icon" />
              <div>
                <h5>Social Media</h5>
                <p>
                  Unlock limitless possibilities in the Metaverse - A realm
                  merging business and leisure. Be among the pioneers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Circles / Graphics */}
      <div
        className="position-absolute"
        style={{
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background:
            'url("/src/images/bg1.png") no-repeat center center/cover',
          opacity: 0.2,
          zIndex: 0,
        }}
      />
    </div>

    {/* merket */}
    <div
      className="market-opportunities-section py-5"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0a0a, #002)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container d-flex flex-wrap align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 position-relative d-flex justify-content-center mb-4 mb-md-0">
          <div className="hexagon-border">
            <Image
              src={vrImage}
              alt="VR User"
              layout="responsive"
              width={300}
              height={400}
              className="hexagon-image"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6">
          <h2 className="text-white">Market Opportunities</h2>
          <p className="text-light fw-bold">
            Blackrose Club Targets The Most Active And Technology Savvy Target
            Group In The DACH Region And Will Later Expand To Serve The Global
            Market.
          </p>
          <ul className="text-light">
            <li>
              <strong>Market –</strong> Around 66 Million E-Commerce Customers
              In The DACH Region Spent Over 100 Billion Euros On Online
              Purchases In 2021. Most Popular Orders Were Clothes, Shoes, Food
              And Beauty Products.
            </li>
            <li>
              <strong>Target Group –</strong> The Percentage Of Internet Users
              In The EU Who Order Products Online Are Steadily Increasing Over
              The Years, With The Biggest Development Occurring In The Age Group
              Of 16-24 Years.
            </li>
            <li>
              <strong>Behavior –</strong> The Reasons Why Consumers Prefer
              Online Over Physical Orders Are Convenience, Variety, Competitive
              Prices And 24/7 Access.
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Team section */}
    <div
      className="team-members-section text-center py-5"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0a0a, #002)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h2 className="text-white mb-3">Team Members</h2>
      <p className="text-light mb-4 px-2">
        We Provide A Secure And Efficient Key Management Solution, Ensuring Convenient Access And Peace Of Mind For Individuals And Businesses. Simplify Your Key Handling With Our Reliable Key Duplication, Storage, And Tracking Services.
      </p>

      <div className="position-relative d-flex justify-content-center align-items-center my-4">
        <div className="team-curve-layout position-relative">
          <div className="curve-container">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`team-member-circle px-2 ${index === activeIndex ? 'active' : ''}`}
                style={{
                  top: index === activeIndex ? '-30px' : '30px',
                  transform: index === activeIndex ? 'scale(1.3)' : 'scale(1)',
                  zIndex: index === activeIndex ? '2' : '1',
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-circle"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h4 style={{ color: '#00ff66' }}>{activeMember.name}</h4>
      <p className="text-light">{activeMember.role}</p>
      <div className="conatiner px-5 mx-5">
      <p className="text-light small">
        We Provide A Secure And Efficient Key Management Solution, Ensuring Convenient Access And Peace Of Mind For Individuals And Businesses. Simplify Your Key Handling With Our Reliable Key Duplication, Storage, And Tracking Services.
      </p>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-outline-light mx-2" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="btn btn-outline-light mx-2" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>

    {/* doc section */}
    <div className="documents-section text-center py-5"      
    style={{
        background: 'radial-gradient(ellipse at center, #0a0a0a, #002)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <h2 className="text-white mb-3 fw-bold fs-1">Documents: Whitepaper & Pitch Deck</h2>
      <div className="container px-3">
      <p className="text-light mb-5">
      Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.
      </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {documents.map((doc, index) => (
          <div key={index} className="document-card bg-dark text-light py-3 rounded" style={{ width: '250px' }}>
            <div className="document-image mb-3">
              <Image
                src={doc.image}
                alt={doc.title}
                width={230}
                height={140}
                className="rounded"
              />
            </div>
            <h5 className="text-white">{doc.title}</h5>
            <p className="text-secondary small">{doc.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* stayupdated */}
    <div className="stay-updated-section text-center py-5"
    style={{
      background: 'radial-gradient(ellipse at center, #0a0a0a, #002)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <hr className='mx-5 pb-5'/>
      <h2 className="text-white mb-3 fw-bold">Stay Updated With Us</h2>
      <p className="text-light mb-4">
        Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region And Will Later
        Expand To Serve The Global Market.
      </p>

      <div className="d-flex justify-content-center">
        <div className="email-subscription-input d-flex align-items-center bg-dark rounded-pill px-3" style={{ width: '500px', height: '50px' }}>
          <input
            type="email"
            placeholder="Enter Email Address to Subscribe Our Newsletter"
            className="form-control bg-dark text-light border-0"
            style={{ outline: 'none', boxShadow: 'none' }}
          />
          <button className="btn btn-success rounded-pill px-4">Subscribe</button>
        </div>
      </div>
    </div>
  

      {/* Footer */}
      <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row gy-4">

          {/* Left Column - Blackrose Club */}
          <div className="col-md-4">
            <h5 className="d-flex align-items-center mb-3">
              <span className="bg-success rounded-circle d-inline-block me-2" style={{ width: '12px', height: '12px' }}></span>
              <strong>Blackrose Club</strong>
            </h5>
            <p className="text-secondary small">
              Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region And Will Later Expand To Serve The Global Market.
            </p>
            <div className="d-flex gap-3">
              <i className="bi bi-discord text-white fs-5"></i>
              <i className="bi bi-twitter text-white fs-5"></i>
              <i className="bi bi-instagram text-white fs-5"></i>
              <i className="bi bi-youtube text-white fs-5"></i>
            </div>
          </div>

          {/* Middle Column - Marketplace Links */}
          <div className="col-md-4">
            <h5 className="text-white mb-3">Marketplace</h5>
            <ul className="list-unstyled text-secondary small">
              <li><a href="#" className="text-decoration-none text-secondary">Imprint</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Contact</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Terms & Conditions</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Become A Club Member</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Become A Shop Owner</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Become An Investor</a></li>
            </ul>
          </div>

          {/* Right Column - Head Quater */}
          <div className="col-md-4">
            <h5 className="text-white mb-3">Head Quater</h5>
            <p className="text-secondary small mb-0">
              BLACKROSE CLUB LTD Victoria House, Suite 4138 Surrey Quays Road<br />
              London SE16 7DX, United Kingdom
            </p>
            <p className="text-secondary small mb-0 mt-2">
              Blackrose Club Ltd | Pilotystr: 3890402 Nürnberg<br />
              User ID: DE 225883316
            </p>
          </div>

        </div>
      </div>
    </footer>
    <div className='pb-4 d-flex justify-content-between align-items-center px-4'    
    style={{
      background: 'radial-gradient(ellipse at center, #0a0a0a, #002)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
        {/* Bottom Text */}
        <div className="mt-4 text-center text-secondary small">
          Copyright © 2022 Blackrose Club
        </div>

        {/* Navigation Links */}
        <div className="text-center mt-2 small">
          <a href="#" className="text-secondary me-3 text-decoration-none">HOME</a>
          <a href="#" className="text-secondary me-3 text-decoration-none">ABOUT</a>
          <a href="#" className="text-secondary me-3 text-decoration-none">ROADMAP</a>
          <a href="#" className="text-secondary me-3 text-decoration-none">SERVICES</a>
          <a href="#" className="text-secondary text-decoration-none">TEAM</a>
        </div>

        </div>





    </div>
  );
}
