import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useEffect } from 'react';
import './App.css';
import HeroImage from './assets/hero-image.jpg';
import PracticeImage from './assets/practice-session.jpg';
import ManagementImage from './assets/management.jpg';
import AssessmentImage from './assets/assessment.jpg';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <header className="header animate-in">
        <h1 className="logo">STUDYtable</h1>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero animate-in">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Optimize Your Performance For<br />
                <strong>JEE, NEET, and Boards</strong>
              </h2>
              <p className="hero-description">
                Your personal All-Tutor for all academic needs. Whether its school exam, boards or competitive exams are plan ranges, and help you clear your doubts instantly. For students of class 10th, trimmed 12th (GISE) and preparing for all medical or engineering entrance exams.
              </p>
              <div className="button-container">
                <button className="cta-button">Apply for admission</button>
                <button className="cta-button">Sign in</button>
              </div>


              
            </div>
            <div className="hero-image-container">
              <img src={HeroImage} alt="Study materials" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features animate-in">
          <div className="feature-card">
            <div className="feature-image-container">
              <img src={PracticeImage} alt="Practice session" />
            </div>
            <div className="feature-content">
              <h3>Unlimited Practice session</h3>
              <p>For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it’s like having a Home tutor 24X7.</p>
            </div>
          </div>

          <div className="feature-card reverse">
            <div className="feature-image-container">
              <img src={ManagementImage} alt="Schedule management" />
            </div>
            <div className="feature-content">
              <h3>Managing students academic life</h3>
              <p>There is more to study than just practicing giving them. To meet the requirements of exam, we need to carefully do the revision, repeatedly align our study plan and to understand students own learning curve. This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So that you focus on learning and worry no more.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image-container">
              <img src={AssessmentImage} alt="Progress analytics" />
            </div>
            <div className="feature-content">
              <h3>Personalized Assessment</h3>
              <p>We measure your learning differently. Not just comparing you among your classmates and peers rather, how much you have learnt and how much have your skills from subject have grown. We crate test based on your learning session and exam requirement to understand and modify study plan for you. The test are unquality created for each student timp we end advance their respective knowledge.</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story animate-in">
          <div className="story-content">
            <h2>How we come to this?</h2>
            <p>
              We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of “Personal attention” we have built our algorithm and AI tutor to cater each children uniquely...
              <a href="#read-more" className="story-link">Read the full story...</a>
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta animate-in">
          <div className="cta-content">
            <h2>Crafted for your all academic needs</h2>
            <button className="cta-button secondary">
              Get your Story...
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Studytable</h4>
            <p>© Copyright 2025 Studytable</p>
          </div>
          
          <div className="footer-column">
            <h4>Socials</h4>
            <p><FaInstagram className="icon" /> Instagram</p>
            <p><FaWhatsapp className="icon" /> WhatsApp</p>
          </div>

          <div className="footer-column">
            <h4>Blogs</h4>
            <p>How we plan learning session ?</p>
            <p>How we plan assessment session ?</p>
            <p>How we manage student life ?</p>
            <p>The effective student</p>
          </div>
          <button class="notice-board-button">Notice Board</button>
        </div>
      </footer>
    </div>
  );
}    