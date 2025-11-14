import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
    Menu,
    X,
    ArrowRight,
    Shield,
    Users,
    Calendar,
    CreditCard,
    BarChart3,
    Smartphone,
    Github,
    Linkedin,
    Facebook,
    Youtube,
    Mail,
    Phone,
    MapPin,
    CheckCircle,
    Star,
    Zap,
    Globe,
    Heart,
    Moon,
    Sun
} from 'lucide-react'
import './App.css'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        // Apply dark mode to document on mount
        document.documentElement.classList.add('dark')

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        // Apply theme to document
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        try {
            // EmailJS configuration - you'll need to replace these with your actual values
            const serviceId = 'novatech_outlook' // Replace with your EmailJS service ID
            const templateId = 'template_ykgdnlo' // Replace with your EmailJS template ID
            const publicKey = 'RbGQy-9uyGSjWGxbS' // Replace with your EmailJS public key

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'novatech.labs@outlook.com'
            }

            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Email send failed:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loading-content">
                    <div className="loading-spinner"></div>
                    <h2>Loading NovaTech Labs...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="App">
            {/* Navigation */}
            <nav className="navbar">
                <div className="container">
                    <div className="nav-content">
                        <div className="nav-brand">
                            <img
                                src="/novatech-logo.png"
                                alt="NovaTech Labs Logo"
                                className="logo"
                                style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }}
                            />
                            <span className="brand-name">NovaTech Labs</span>
                        </div>

                        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                            <a href="#products" onClick={() => scrollToSection('products')}>Products</a>
                            <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
                            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                            <button 
                                className="theme-toggle" 
                                onClick={toggleDarkMode}
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>

                        <button className="menu-toggle" onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Engineering Ideas Into Reality.
                            </h1>
                            <p className="hero-subtitle">
                                At NovaTech Labs, we craft innovative software that simplifies processes,
                                connects people, and drives progress across industries.
                                From local businesses to global enterprises, our solutions are designed
                                to empower, scale, and inspire.
                            </p>
                            <div className="hero-actions">
                                <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('products')}>
                                    Explore Our Products <ArrowRight size={20} />
                                </button>
                                <button className="btn btn-outline btn-lg" onClick={() => scrollToSection('contact')}>
                                    Get In Touch
                                </button>
                            </div>
                            <div className="hero-stats">
                                <div className="stat">
                                    <div className="stat-number">100+</div>
                                    <div className="stat-label">Projects Delivered</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Happy Clients</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-number">99.9%</div>
                                    <div className="stat-label">Uptime</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-image-placeholder">
                                <div className="floating-cards">
                                    <div className="floating-card card-1">
                                        <Zap size={32} />
                                        <span>Fast Development</span>
                                    </div>
                                    <div className="floating-card card-2">
                                        <Globe size={32} />
                                        <span>Global Solutions</span>
                                    </div>
                                    <div className="floating-card card-3">
                                        <Shield size={32} />
                                        <span>Secure by Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">About NovaTech Labs</h2>
                        <p className="section-subtitle">
                            An innovative software development company working across multiple industries
                        </p>
                    </div>

                    <div className="about-content">
                        <div className="about-text">
                            <h3>Our Mission</h3>
                            <p>
                                To simplify processes, connect people, and bring the future of technology
                                closer to businesses and individuals. We believe that great software should
                                be intuitive, powerful, and accessible to everyone.
                            </p>

                            <h3>Our Vision</h3>
                            <p>
                                To become a leading software development company that creates solutions
                                across industries, setting new standards for innovation, usability,
                                and customer satisfaction in the technology sector.
                            </p>

                            <div className="values">
                                <div className="value-item">
                                    <Zap className="value-icon" />
                                    <div>
                                        <h4>Innovation</h4>
                                        <p>Cutting-edge solutions that push the boundaries of what's possible</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <Users className="value-icon" />
                                    <div>
                                        <h4>User-Focused Design</h4>
                                        <p>Every interface we create prioritizes user experience and simplicity</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <Shield className="value-icon" />
                                    <div>
                                        <h4>Reliability</h4>
                                        <p>Robust, secure solutions you can depend on for mission-critical operations</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-visual">
                            <div className="about-image-placeholder">
                                <div className="tech-stack">
                                    <div className="tech-item">Go</div>
                                    <div className="tech-item">React</div>
                                    <div className="tech-item">SvelteKit</div>
                                    <div className="tech-item">PostgreSQL</div>
                                    <div className="tech-item">Django</div>
                                    <div className="tech-item">Spring Boot</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="products section bg-gray-50">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Products</h2>
                        <p className="section-subtitle">
                            Innovative software solutions designed for businesses across industries
                        </p>
                    </div>

                    <div className="products-grid">
                        {/* Current Product - DentistApp */}
                        <div className="product-card featured">
                            <div className="product-badge">Available Now</div>
                            <div className="product-icon">
                                <Calendar size={48} />
                            </div>
                            <h3 className="product-title">DentistApp Pro</h3>
                            <p className="product-subtitle">Complete Clinic Management</p>
                            <p className="product-description">
                                A comprehensive desktop application for healthcare clinic management.
                                Streamline patient records, appointments, payments, and analytics in one
                                powerful, secure platform designed for medical professionals.
                            </p>

                            <div className="product-features">
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Patient Records Management</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Appointment Scheduling</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Payment Tracking</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Analytics Dashboard</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Secure File Management</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Offline-First Architecture</span>
                                </div>
                            </div>

                            <div className="product-actions">
                                <button className="btn btn-primary">
                                    Request Demo <ArrowRight size={16} />
                                </button>
                                <button className="btn btn-secondary">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Second Product - LabConnect */}
                        <div className="product-card">
                            <div className="product-badge">Available Now</div>
                            <div className="product-icon">
                                <Smartphone size={48} />
                            </div>
                            <h3 className="product-title">LabConnect</h3>
                            <p className="product-subtitle">Smart Medical Test Booking App</p>
                            <p className="product-description">
                                Revolutionary mobile application that simplifies medical test bookings.
                                Connect patients with laboratories, schedule tests, track results, and
                                manage healthcare appointments seamlessly.
                            </p>

                            <div className="product-features">
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Easy Test Booking</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Lab Integration</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Result Tracking</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Payment Gateway</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Notification System</span>
                                </div>
                            </div>

                            <div className="product-actions">
                                <button className="btn btn-primary">
                                    Get Started <ArrowRight size={16} />
                                </button>
                                <button className="btn btn-secondary">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Future Product - ERP Systems */}
                        {/* <div className="product-card">
                            <div className="product-badge coming-soon">Coming Soon</div>
                            <div className="product-icon">
                                <BarChart3 size={48} />
                            </div>
                            <h3 className="product-title">Enterprise ERP</h3>
                            <p className="product-subtitle">Complete Business Management Suite</p>
                            <p className="product-description">
                                Comprehensive ERP solution for small to medium businesses. Manage
                                inventory, finance, HR, CRM, and operations in one integrated platform
                                designed for modern enterprises.
                            </p>

                            <div className="product-features">
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Financial Management</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Inventory Control</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>HR Management</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>CRM Integration</span>
                                </div>
                            </div>

                            <div className="product-actions">
                                <button className="btn btn-secondary">
                                    Join Waitlist
                                </button>
                            </div>
                        </div> */}

                        {/* Future Product - Consumer Apps */}
                        <div className="product-card">
                            <div className="product-badge coming-soon">In Development</div>
                            <div className="product-icon">
                                <Globe size={48} />
                            </div>
                            <h3 className="product-title">Consumer Solutions</h3>
                            <p className="product-subtitle">Next-Gen Consumer Applications</p>
                            <p className="product-description">
                                Innovative mobile and web applications for everyday consumers.
                                Lifestyle, productivity, and utility apps that make life easier
                                and more connected.
                            </p>

                            <div className="product-features">
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Cross-Platform</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>AI-Powered Features</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Cloud Synchronization</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Smart Notifications</span>
                                </div>
                            </div>

                            <div className="product-actions">
                                <button className="btn btn-secondary">
                                    Early Access
                                </button>
                            </div>
                        </div>

                        {/* Future Product - Business Analytics */}
                        {/* <div className="product-card">
                            <div className="product-badge coming-soon">Planned</div>
                            <div className="product-icon">
                                <BarChart3 size={48} />
                            </div>
                            <h3 className="product-title">Analytics Pro</h3>
                            <p className="product-subtitle">Advanced Business Intelligence</p>
                            <p className="product-description">
                                Powerful analytics and business intelligence platform. Transform
                                your data into actionable insights with advanced reporting,
                                predictive analytics, and real-time dashboards.
                            </p>

                            <div className="product-features">
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Custom Dashboards</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Predictive Analytics</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Real-time Reporting</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={16} />
                                    <span>Data Integration</span>
                                </div>
                            </div>

                            <div className="product-actions">
                                <button className="btn btn-secondary">
                                    Learn More
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose NovaTech Labs?</h2>
                        <p className="section-subtitle">
                            We deliver exceptional software solutions with unmatched quality and support
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <Shield size={40} />
                            </div>
                            <h3>Secure by Design</h3>
                            <p>
                                Enterprise-grade security with end-to-end encryption,
                                secure authentication, and comprehensive data protection
                                across all our applications.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <Globe size={40} />
                            </div>
                            <h3>Cross-Platform Compatibility</h3>
                            <p>
                                Our solutions work seamlessly across Windows, macOS, Linux,
                                and mobile platforms, giving you complete flexibility in your
                                technology ecosystem.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <BarChart3 size={40} />
                            </div>
                            <h3>Scalable Solutions</h3>
                            <p>
                                Built to grow with your business. From startups to enterprises,
                                our software scales efficiently to meet your evolving needs
                                and user demands.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <BarChart3 size={40} />
                            </div>
                            <h3>Advanced Analytics</h3>
                            <p>
                                Powerful analytics and reporting capabilities that transform
                                your data into actionable insights for better decision-making
                                and business growth.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <Users size={40} />
                            </div>
                            <h3>User-Friendly Experience</h3>
                            <p>
                                Intuitive interfaces designed with users in mind. Our software
                                minimizes learning curves while maximizing productivity and
                                user satisfaction.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <Phone size={40} />
                            </div>
                            <h3>Dedicated Support</h3>
                            <p>
                                Comprehensive support services including documentation,
                                training, and responsive customer service to ensure your
                                success with our products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials section bg-gray-50">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle">
                            Trusted by businesses and professionals worldwide
                        </p>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="testimonial-text">
                                "NovaTech Labs delivered exactly what we needed - a robust, scalable solution
                                that transformed our business operations. Their professionalism and attention
                                to detail is unmatched."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>Sarah Mitchell</h4>
                                    <p>CEO, TechFlow Solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="testimonial-text">
                                "Outstanding customer support and innovative solutions. The development team
                                truly understands business needs and delivers software that actually works
                                as promised."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>Marcus Rodriguez</h4>
                                    <p>Operations Manager, Global Enterprises</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="testimonial-text">
                                "Working with NovaTech Labs has been a game-changer. Their innovative approach
                                and technical expertise helped us build software that exceeded our expectations.
                                Highly recommended!"
                            </p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>Dr. Alex Chen</h4>
                                    <p>Lead Developer, Innovation Hub</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">
                            Let's talk about your software needs
                        </p>
                    </div>

                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:novatech.labs@outlook.com">novatech.labs@outlook.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+1234567890">+963 (941) 414-122</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <div>
                                    <h4>Location</h4>
                                    <p>Serving businesses worldwide</p>
                                </div>
                            </div>

                            <div className="social-links">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                    <a href="https://github.com/nova-tech-labs-solutions" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/company/nova-tech-labs/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61579677733198" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <Facebook size={24} />
                                    </a>
                                    <a href="https://x.com/Novatech_Labs" className="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                                        <X size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h3>Send us a message</h3>
                            {submitStatus === 'success' && (
                                <div className="alert alert-success">
                                    ✅ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="alert alert-error">
                                    ❌ Failed to send message. Please try again or email us directly.
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required 
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required 
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows="5" 
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>Sending... ⏳</>
                                    ) : (
                                        <>Send Message <ArrowRight size={16} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="footer-brand">
                                <img
                                    src="/novatech-logo.png"
                                    alt="NovaTech Labs Logo"
                                    className="logo"
                                    style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }}
                                />
                                <span className="brand-name">NovaTech Labs</span>
                            </div>
                            <p className="footer-description">
                                NovaTech Labs – Engineering Ideas Into Reality.
                            </p>
                            <div className="social-icons">
                                <a href="https://github.com/nova-tech-labs-solutions" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/company/nova-tech-labs/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61579677733198" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://x.com/Novatech_Labs" className="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                                    <X size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h4>Products</h4>
                            <ul>
                                <li><a href="#products">DentistApp Pro</a></li>
                                <li><a href="#products">LabConnect</a></li>
                                <li><a href="#products">Cozy (Soon)</a></li>
                                {/* <li><a href="#products">Analytics Pro (Soon)</a></li> */}
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                                <li><a href="/terms.html" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="mailto:novatech.labs@outlook.com">Contact Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 NovaTech Labs. All rights reserved.</p>
                        <p>Your Vision, Engineered.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App