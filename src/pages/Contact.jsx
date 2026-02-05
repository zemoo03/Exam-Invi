import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, Phone, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'student',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', type: 'student', message: '' });
    };

    const contactInfo = [
        {
            label: 'Email Support',
            value: 'support@inviguard.com',
            icon: Mail,
            color: 'primary',
            description: 'Get response within 24 hours'
        },
        {
            label: 'WhatsApp',
            value: '+91 98765 43210',
            icon: MessageCircle,
            color: 'secondary',
            description: 'Instant support available'
        },
        {
            label: 'Office Address',
            value: 'Sector 62, Electronic City, Noida',
            icon: MapPin,
            color: 'accent',
            description: 'Visit us Mon-Sat, 9AM-6PM'
        },
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <span className="contact-tag">Let's Connect</span>
                        <h1 className="contact-title">
                            Get in <span>Touch</span>
                        </h1>
                        <p className="contact-subtitle">
                            Have questions about invigilation duties? Need help with registration?
                            We're here to help students and institutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p>Reach out to us through any of these channels</p>

                            <div className="contact-cards">
                                {contactInfo.map((item, i) => (
                                    <div key={i} className={`contact-card contact-card-${item.color}`}>
                                        <div className="contact-card-icon">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <span className="contact-card-label">{item.label}</span>
                                            <span className="contact-card-value">{item.value}</span>
                                            <span className="contact-card-desc">{item.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Office Hours */}
                            <div className="office-hours">
                                <div className="office-hours-icon">
                                    <Clock size={20} />
                                </div>
                                <div className="office-hours-content">
                                    <h4>Office Hours</h4>
                                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="contact-form-card">
                                <div className="contact-form-header">
                                    <h3>Send us a Message</h3>
                                    <p>Fill out the form and we'll get back to you shortly</p>
                                </div>

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>I am a</label>
                                        <select
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        >
                                            <option value="student">Student looking for invigilation work</option>
                                            <option value="institution">Institution looking for invigilators</option>
                                            <option value="other">Other inquiry</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={5}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="contact-submit-btn">
                                        <Send size={18} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="contact-faq">
                <div className="container">
                    <div className="faq-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Quick answers to common questions</p>
                    </div>
                    <div className="faq-grid">
                        {[
                            { q: 'How do I register as a student invigilator?', a: 'Click on "Get Started" and complete the registration with DigiLocker verification.' },
                            { q: 'What documents are required?', a: 'You need a valid Aadhaar card linked to DigiLocker for instant verification.' },
                            { q: 'How do I get assigned to exams?', a: 'Once verified, the admin will assign you to upcoming exams based on your location.' },
                            { q: 'When do I get paid?', a: 'Payments are processed within 7 days after the exam completion.' },
                        ].map((faq, i) => (
                            <div key={i} className="faq-item">
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
