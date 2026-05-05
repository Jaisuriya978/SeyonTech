import React from "react";
import { GraduationCap, Building2, Stethoscope, Vote, Store, UserCheck, BrainCircuit, Headset, Filter, Smartphone, RefreshCw, BarChart3, TrendingUp, CircleDollarSign, Bot, Target, Share2, Layout, MessageSquare, ZoomIn, Settings, Rocket, LineChart } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import "./App.css";
const logos = [
  "https://assets.hackquest.io/hackathons/projects/logo/5dC0Uoq5pEk7Uluy3Brm6.png",
  "https://nexusgen.io/wp-content/uploads/2024/06/V1-BP-NexusGen_Full_Color_Logo-1.png.webp",
  "https://quantumleap.co.in/wp-content/uploads/2024/09/qllogo_white-logo_transparent-1024x1024.png",
  "https://playgrounds-storage-public.runcomfy.net/tools/8098/media-files/explore_8098_34.thumbnail_512.webp",
  "data:image/jpeg;base64,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",
  "https://pbs.twimg.com/profile_images/704034344726167552/pc02wf2p_400x400.jpg",
  "https://media.licdn.com/dms/image/v2/C560BAQGNo9jzDPp5qw/company-logo_200_200/company-logo_200_200/0/1631307632499?e=2147483647&v=beta&t=9LO2mhivYzYLBz52lO7xlIPhZoeaZuDM-eArYUoXGD4",
];

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        {/* LEFT: Logo + Name */}
        <div className="nav-left">
          <img
            src="https://horizons-cdn.hostinger.com/1a9ce3a2-790f-4baf-8491-30e20f7afc09/ab00b41ca32929e0da248f48c354b6fb.jpg"
            alt="Seyon Tech Logo"
            className="logo-img"
          />
          <a href="#home">
          <button className="btn-secondary">SEYON TECH</button>
          </a>

        </div>

        {/* CENTER: Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT: Button */}
        <a href="#contact">
        <button className="btn">Get Started</button>
        </a>
      </header>

      {/* HERO SECTION */}


      <section className="hero-container" id="home">
        {/* 1. Background Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
        >
          <source src="https://www.pexels.com/download/video/34953670/" type="video/mp4" />
          Video
        </video>

        {/* 2. The Dark Overlay (Now with a slight gradient for readability) */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          {/* Top Badge */}
          <div className="hero-badge fade-up">
            <span className="sparkle">✨</span> AWARD-WINNING CREATIVE AGENCY
          </div>

          {/* Main Heading */}
          <h1 className="hero-title fade-up delay-1">
            TRANSFORM YOUR <br />
            <span className="text-gradient">BRAND STORY</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtitle fade-up delay-2">
            We craft exceptional digital experiences that captivate audiences and
            drive measurable results for forward-thinking brands.
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns fade-up delay-3">
            <a href="#contact">
            <button className="btn-secondary">Let's Talk →</button>
            </a>
            <a href="#process">
              <button className="btn-secondary">View Our Work</button>
            </a>
          </div>
        </div>

        {/* Animated Scroll Icon */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      <section className="hero" id="about">
        <div className="hero-left">
          <div className="image-grid">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d" alt="img1" />
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="img2" />
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="img3" />
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984" alt="img4" />
          </div>
        </div>

        <div className="hero-right">
          {/* ABOUT */}
          <h1>Seyon Tech is a results-driven digital media solutions dedicated to helping businesses generate quality leads, automate sales processes, and scale their operations through cutting-edge AI-powered marketing solutions</h1>
          <p>
            We combine proven digital marketing strategies with advanced automation technology to deliver measurable results. From paid advertising to AI chatbots and complete funnel development, we provide end-to-end solutions that transform your marketing efforts into a predictable revenue engine..
          </p>
          <a href="#services">
          <button className="btn btn-primary">Let’s Connect</button>
          </a>
        </div>
      </section>

      {/* LOGO SCROLL */}


      <section className="logo-section">

        {/* TITLE */}
        <h2 className="fade-up">
          Trusted by Growing Companies
        </h2>

        {/* SUBTEXT */}
        <p className="fade-up delay-1">
          Businesses trust Seyon Tech to scale their digital growth
        </p>

        {/* LOGO SCROLL */}
        <div className="logo-wrapper blur-in">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, i) => (
              <img key={i} src={logo} alt="client logo" />
            ))}
          </div>
        </div>

      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <h2 className="fade-up">Our Services</h2>
        <p className="fade-up delay-1">
          Everything you need to grow your business with digital & AI solutions
        </p>
      </section>
      <div className="services-grid">

        {/* CARD */}
        <div className="services-grid main-services">
          {/* AI Automation */}
          <div className="service-card interactive">
            <div className="card-inner">
              <div className="card-top">
                <div className="icon-box purple">
                  <Bot size={32} />
                </div>
                <h3>AI Automation Marketing</h3>
                <p className="main-desc">
                  Leverage AI to automate your marketing and sales processes for maximum efficiency.
                </p>
              </div>

              <div className="card-overlay">
                <h4>Key Features:</h4>
                <ul>
                  <li>WhatsApp Automation for engagement</li>
                  <li>AI Chatbot for 24/7 support</li>
                  <li>CRM & Lead Management</li>
                  <li>AI-Based Follow-up Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paid Ads */}
          <div className="service-card interactive">
            <div className="card-inner">
              <div className="card-top">
                <div className="icon-box blue">
                  <Target size={32} />
                </div>
                <h3>Paid Ads Management</h3>
                <p className="main-desc">Data-driven advertising campaigns that deliver measurable ROI.</p>
              </div>

              <div className="card-overlay">
                <h4>Channels & Strategy:</h4>
                <ul>
                  <li>Google Ads for high-intent search</li>
                  <li>YouTube Lead Generation</li>
                  <li>Facebook & Instagram Precision</li>
                  <li>Transparent ROI Reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="service-card interactive">
            <div className="card-inner">
              <div className="card-top">
                <div className="icon-box orange">
                  <Share2 size={32} />
                </div>
                <h3>Social Media Marketing</h3>
                <p className="main-desc">Build a powerful brand presence across all social platforms.</p>
              </div>

              <div className="card-overlay">
                <h4>Brand Growth:</h4>
                <ul>
                  <li>Tailored Content Strategy</li>
                  <li>Professional Poster & Video</li>
                  <li>Strategic Brand Positioning</li>
                  <li>Complete Page Management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Website & Funnels */}
          <div className="service-card interactive">
            <div className="card-inner">
              <div className="card-top">
                <div className="icon-box green">
                  <Layout size={32} />
                </div>
                <h3>Website & Funnels</h3>
                <p className="main-desc">High-converting systems that turn visitors into customers.</p>
              </div>

              <div className="card-overlay">
                <h4>Web Solutions:</h4>
                <ul>
                  <li>Professional Business Sites</li>
                  <li>Smart Lead Capture Systems</li>
                  <li>E-commerce Solutions</li>
                  <li>Conversion Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="services" id="why">
        <h2 className="fade-up">Why Choose Us</h2>
        <p className="fade-up delay-1">
          We combine technology, expertise, and dedication to deliver exceptional results
        </p>


        <div className="why-choose-grid">
          {/* AI Strategy */}
          <div className="why-card">
            <div className="why-icon-box purple">
              <BrainCircuit size={28} />
            </div>
            <h3>AI-Based Strategy</h3>
            <p>We use AI-driven insights to maximize your marketing performance</p>
            <ul className="why-list">
              <li>Smart campaign optimization</li>
              <li>AI-driven targeting</li>
              <li>Higher ROI focus</li>
              <li>Predictive analytics</li>
            </ul>
          </div>

          {/* Dedicated Support */}
          <div className="why-card">
            <div className="why-icon-box blue">
              <Headset size={28} />
            </div>
            <h3>Dedicated Support</h3>
            <p>We stay with you at every step of your growth journey</p>
            <ul className="why-list">
              <li>1-on-1 communication</li>
              <li>Fast response time</li>
              <li>Expert consultation</li>
              <li>Ongoing support</li>
            </ul>
          </div>

          {/* Funnel Setup */}
          <div className="why-card">
            <div className="why-icon-box orange">
              <Filter size={28} />
            </div>
            <h3>Complete Funnel Setup</h3>
            <p>We build systems that convert visitors into paying customers</p>
            <ul className="why-list">
              <li>Landing pages</li>
              <li>Lead capture systems</li>
              <li>Automation flows</li>
              <li>Conversion optimization</li>
            </ul>
          </div>

          {/* Mobile CRM */}
          <div className="why-card">
            <div className="why-icon-box green">
              <Smartphone size={28} />
            </div>
            <h3>Mobile CRM Access</h3>
            <p>Manage your leads anytime, anywhere with ease</p>
            <ul className="why-list">
              <li>Real-time lead tracking</li>
              <li>Mobile-friendly CRM</li>
              <li>Instant notifications</li>
              <li>Easy pipeline management</li>
            </ul>
          </div>

          {/* Scalable Automation */}
          <div className="why-card">
            <div className="why-icon-box pink">
              <RefreshCw size={28} />
            </div>
            <h3>Scalable Automation</h3>
            <p>Systems designed to grow with your business without extra workload</p>
            <ul className="why-list">
              <li>Auto lead nurturing flows</li>
              <li>Smart follow-up sequences</li>
              <li>Workflow automation</li>
              <li>Business scaling systems</li>
            </ul>
          </div>

          {/* Reporting */}
          <div className="why-card">
            <div className="why-icon-box yellow">
              <BarChart3 size={28} />
            </div>
            <h3>Transparent Reporting</h3>
            <p>Know exactly where your money goes and what you get</p>
            <ul className="why-list">
              <li>Weekly reports</li>
              <li>Real-time analytics</li>
              <li>Performance tracking</li>
              <li>Clear insights</li>
            </ul>
          </div>

          {/* Data Growth */}
          <div className="why-card">
            <div className="why-icon-box cyan">
              <TrendingUp size={28} />
            </div>
            <h3>Data-Driven Growth</h3>
            <p>Every decision is backed by real performance data and analytics</p>
            <ul className="why-list">
              <li>Advanced analytics tracking</li>
              <li>Conversion optimization insights</li>
              <li>Behavior-based targeting</li>
              <li>Performance forecasting</li>
            </ul>
          </div>

          {/* Affordable Pricing */}
          <div className="why-card">
            <div className="why-icon-box violet">
              <CircleDollarSign size={28} />
            </div>
            <h3>Affordable Pricing</h3>
            <p>Premium services without premium pricing</p>
            <ul className="why-list">
              <li>Flexible plans</li>
              <li>Startup-friendly</li>
              <li>No hidden costs</li>
              <li>High value delivery</li>
            </ul>
          </div>
        </div>

      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="industries" id="industries">
        <div className="industries-header">
          <h2 className="fade-up">Industries We are Serves</h2>
          <p className="fade-up delay-1">
            Tailored marketing and automation solutions for every business type
          </p>
        </div>

        <div className="industries-grid">

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon-wrapper blue">
                <GraduationCap size={32} />
              </div>
              <h3>Educational Institutions</h3>
              <p>Schools, colleges, and training centers</p>
              <div className="card-bg-glow"></div>
            </div>

            <div className="industry-card">
              <div className="industry-icon-wrapper orange">
                <Building2 size={32} />
              </div>
              <h3>Real Estate</h3>
              <p>Property developers and agents</p>
              <div className="card-bg-glow"></div>
            </div>

            <div className="industry-card">
              <div className="industry-icon-wrapper green">
                <Stethoscope size={32} />
              </div>
              <h3>Healthcare Clinics</h3>
              <p>Hospitals, clinics, and wellness centers</p>
              <div className="card-bg-glow"></div>
            </div>

            <div className="industry-card">
              <div className="industry-icon-wrapper purple">
                <Vote size={32} />
              </div>
              <h3>Political Campaigns</h3>
              <p>Election campaigns and public relations</p>
              <div className="card-bg-glow"></div>
            </div>

            <div className="industry-card">
              <div className="industry-icon-wrapper yellow">
                <Store size={32} />
              </div>
              <h3>Local Businesses</h3>
              <p>Small & Medium shops and local startups</p>
              <div className="card-bg-glow"></div>
            </div>

            <div className="industry-card">
              <div className="industry-icon-wrapper violet">
                <UserCheck size={32} />
              </div>
              <h3>Personal Brands</h3>
              <p>Influencers, coaches, and consultants</p>
              <div className="card-bg-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process" id="process">
        <div className="process-header">

        </div>

        <div className="process-header text-center">
          
          <h2>How We Work</h2>
        </div>

        <div className="process-timeline">
          {/* Decorative Connecting Line (Desktop) */}
          <div className="timeline-connector"></div>

          <div className="process-item">
            <div className="process-node purple">
              <MessageSquare size={24} />
              <span className="step-number">01</span>
            </div>
            <div className="process-info">
              <h4>Free Strategy Consultation</h4>
              <p>We understand your business goals, audience, and challenges</p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-node blue">
              <ZoomIn size={24} />
              <span className="step-number">02</span>
            </div>
            <div className="process-info">
              <h4>Business Analysis</h4>
              <p>Deep market research and competitor analysis</p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-node orange">
              <Settings size={24} />
              <span className="step-number">03</span>
            </div>
            <div className="process-info">
              <h4>Campaign & Funnel Setup</h4>
              <p>We build your complete marketing infrastructure</p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-node green">
              <Rocket size={24} />
              <span className="step-number">04</span>
            </div>
            <div className="process-info">
              <h4>Launch & Optimize</h4>
              <p>Campaigns go live with continuous monitoring</p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-node violet">
              <LineChart size={24} />
              <span className="step-number">05</span>
            </div>
            <div className="process-info">
              <h4>Tracking & Support</h4>
              <p>Ongoing lead management to maximize conversions</p>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <div className="contact-header">
          <h2 className="fade-up">Let’s Build Something Great Together</h2>
          <p className="fade-up delay-1">
            Have a project in mind? Get in touch and we’ll help you grow your business.
          </p>
        </div>

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3>Contact Details</h3>

            <p>📧 Email: info@seyontech.com</p>
            <p>📞 Phone: +91-86104 99770</p>
            <p>📍 Location: Thousand Lights West, Chennai - 600006, Tamil Nadu.</p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918610499770"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
              />
              Chat on WhatsApp
            </a>
            <br />
            <a
              href="https://www.linkedin.com/company/seyon-technology-digital-solutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
            >
              <FaLinkedin size={22} color="#0A66C2" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="contact-image">
            <img
              src="https://i.pinimg.com/736x/5d/65/c7/5d65c7e38c952c234a871d6c6635ec8a.jpg"
              alt="Contact Seyon Tech"
            />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-left">
            <h3>Seyon Tech</h3>
            <p>Helping businesses grow with AI-powered digital solutions.</p>
          </div>

          <div className="footer-contact">
            <p>Email: info@seyontech.com</p>
            <p>Phone: +91-86104 99770</p>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Seyon Tech. All rights reserved.
        </div>
      </footer>

    </>
  );
}