import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Eye, Zap, GraduationCap,
    CheckCircle, ArrowRight, Star, Building2, Users, Briefcase
} from 'lucide-react';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
                <div className="hero-bg-gradient"></div>
                <div className="hero-bg-gradient-2"></div>

                <div className="container">
                    <div className="hero-grid">
                        {/* Left Content */}
                        <div className="hero-content animate-up">
                            <div className="hero-badge">
                                <span className="hero-badge-dot"></span>
                                <span className="hero-badge-text">🎓 For College Students</span>
                            </div>

                            <h1 className="hero-title">
                                Want to Earn <br />
                                <span className="hero-title-highlight">Just By Sitting?</span>
                            </h1>

                            <p className="hero-description">
                                This is your golden opportunity! Become an invigilator and get paid
                                for supervising entrance exams at your college. Easy work, flexible hours!
                            </p>

                            <div className="hero-buttons">
                                <button
                                    onClick={() => navigate('/register?role=student')}
                                    className="hero-btn hero-btn-primary"
                                >
                                    <GraduationCap size={22} />
                                    Join Now
                                </button>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="hero-btn hero-btn-secondary"
                                >
                                    <Building2 size={22} />
                                    Learn More
                                </button>
                            </div>

                            <div className="hero-stats">
                                <div className="hero-stats-rating">
                                    <div className="hero-avatars">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="hero-avatar">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=invig${i}`} alt="avatar" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="hero-rating-info">
                                        <div className="hero-stars">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                                            ))}
                                        </div>
                                        <span className="hero-rating-text">Loved by Students</span>
                                    </div>
                                </div>
                                <div className="hero-stats-divider"></div>
                                <div className="hero-stats-number">
                                    <span className="hero-stats-value">200+</span>
                                    <span className="hero-stats-label">Active Invigilators</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="hero-visual">
                            <div className="hero-visual-glow"></div>

                            {/* Main Card */}
                            <div className="hero-card animate-float">
                                <div className="hero-card-header">
                                    <h3>What You'll Do</h3>
                                    <div className="hero-card-dots">
                                        <span className="dot dot-red"></span>
                                        <span className="dot dot-yellow"></span>
                                        <span className="dot dot-green"></span>
                                    </div>
                                </div>

                                <div className="hero-card-items">
                                    {[
                                        { title: 'Supervise Exam Halls', info: 'Easy Task', time: 'Sit & Monitor' },
                                        { title: 'Ensure Fair Conduct', info: 'Simple Rules', time: 'No Skills Needed' },
                                        { title: 'Build Experience', info: 'Great for CV', time: 'Leadership Skills' }
                                    ].map((job, idx) => (
                                        <div key={idx} className="hero-card-item">
                                            <div className="hero-card-item-left">
                                                <div className="hero-card-item-icon">
                                                    <CheckCircle size={20} />
                                                </div>
                                                <div>
                                                    <h4>{job.title}</h4>
                                                    <p><Clock size={10} /> {job.time}</p>
                                                </div>
                                            </div>
                                            <div className="hero-card-item-right">
                                                <span className="slots">{job.info}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="hero-card-btn"
                                    onClick={() => navigate('/register')}
                                >
                                    Join as Invigilator <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Floating Cards */}
                            <div className="floating-card floating-card-top">
                                <div className="floating-card-icon floating-card-icon-green">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p className="floating-card-label">Students</p>
                                    <p className="floating-card-value">200+ Active</p>
                                </div>
                            </div>

                            <div className="floating-card floating-card-bottom">
                                <div className="floating-card-icon floating-card-icon-yellow">
                                    <Star size={20} />
                                </div>
                                <div>
                                    <p className="floating-card-label">Difficulty</p>
                                    <p className="floating-card-value">Super Easy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="trusted-section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div className="trusted-content" style={{ flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ fontSize: '0.9rem' }}>What's This All About?</h4>
                        <p style={{ maxWidth: '700px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Our college conducts <strong style={{ color: 'var(--text-main)' }}>entrance exams</strong> for aspiring students throughout the year.
                            We need responsible college students like you to help supervise these exams.
                            It's the easiest way to gain experience while staying on campus!
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section - Why Join */}
            <section className="features-section">
                <div className="container">
                    <div className="features-header animate-up">
                        <span className="features-tag">Benefits</span>
                        <h2 className="features-title">Why Become an Invigilator?</h2>
                        <p className="features-description">Simple work, easy tasks, and a great opportunity for students.</p>
                    </div>

                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            {
                                title: 'Easy Work',
                                desc: 'Simple supervision tasks. No hard work, just monitoring exam halls!',
                                icon: Briefcase, color: '#FF6B4E'
                            },
                            {
                                title: 'Super Simple',
                                desc: 'No special skills needed. Just be present and ensure fair conduct.',
                                icon: Eye, color: '#F59E0B'
                            },
                            {
                                title: 'Quick & Easy',
                                desc: 'Each exam session is just a few hours. Perfect for busy students.',
                                icon: Zap, color: '#8B5CF6'
                            },
                            {
                                title: 'Campus Work',
                                desc: 'Work right here on campus. No commute, no hassle!',
                                icon: GraduationCap, color: '#06B6D4'
                            }
                        ].map((feature, i) => (
                            <div key={i} className="feature-card">
                                <div className="feature-icon" style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
                                    <feature.icon size={32} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="trusted-section" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
                <div className="container">
                    <div className="features-header animate-up">
                        <span className="features-tag">Eligibility</span>
                        <h2 className="features-title">Who Can Apply?</h2>
                        <p className="features-description">This opportunity is exclusively for college students!</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1rem',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        {[
                            'Current college students (any year)',
                            'Any branch/department welcome',
                            'Must be reliable and punctual',
                            'Basic communication skills',
                            'Available during exam schedules',
                            'Willing to follow exam protocols'
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 1.5rem',
                                    background: 'white',
                                    borderRadius: '1rem',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                    border: '1px solid var(--border)'
                                }}
                            >
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: '#10B98115',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle size={18} color="#10B981" />
                                </div>
                                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-bg"></div>
                        <div className="cta-content">
                            <div className="cta-text">
                                <h2>
                                    Ready to Get <br />
                                    <span>Started?</span>
                                </h2>
                                <p>Join our team of student invigilators today and gain valuable experience!</p>
                                <div className="cta-buttons">
                                    <button onClick={() => navigate('/register')} className="cta-btn-primary">
                                        Join Now
                                    </button>
                                    <button onClick={() => navigate('/contact')} className="cta-btn-secondary">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                            <div className="cta-stats">
                                <div className="cta-stats-row">
                                    <div className="cta-stat">
                                        <h4>Easy</h4>
                                        <p>Simple Tasks</p>
                                    </div>
                                    <div className="cta-stat">
                                        <h4>Flexible</h4>
                                        <p>Your Schedule</p>
                                    </div>
                                </div>
                                <div className="cta-stats-row">
                                    <div className="cta-stat cta-stat-highlight">
                                        <h4>200+</h4>
                                        <p>Invigilators</p>
                                    </div>
                                    <div className="cta-stat">
                                        <h4>50+</h4>
                                        <p>Exams/Year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
