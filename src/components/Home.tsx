import React, { useState, useEffect } from 'react';
import './style.css';

const Home: React.FC = () => {
  console.log('Home component rendered'); // Debugging line
  
  const [showAgeVerificationModal, setShowAgeVerificationModal] = useState<boolean>(true);
  const [showCannotAccessModal, setShowCannotAccessModal] = useState<boolean>(false);
  
 
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  
  useEffect(() => {
   
    setShowAgeVerificationModal(true);
  }, []);

 
  const handleConfirmYes = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAgeVerificationModal(false);
  };

  const handleConfirmNo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAgeVerificationModal(false);
    setShowCannotAccessModal(true);
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCannotAccessModal(false);
    setShowAgeVerificationModal(true);
  };

  // Prevent modal from closing when clicking modal background
  const handleModalBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

 
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    document.body.style.overflow = !isMenuActive ? 'hidden' : '';
  };

  
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    
    if (emailInput?.value) {
      alert(`Thank you! The download link has been sent to ${emailInput.value}`);
      emailInput.value = '';
    }
  };

  return (
    <div>
     
      {showAgeVerificationModal && (
        <div className="age-verification" onClick={handleModalBackgroundClick}>
          <div className="age-verification-content">
            <h2>This website is only for users aged 18 and above</h2>
            <p>Please confirm if you are 18 or older.</p>
            <div className="age-buttons">
              <button id="confirmYes" className="btn btn-yes" onClick={handleConfirmYes}>Yes</button>
              <button id="confirmNo" className="btn btn-no" onClick={handleConfirmNo}>No</button>
            </div>
          </div>
        </div>
      )}

     
      {showCannotAccessModal && (
        <div className="age-verification" onClick={handleModalBackgroundClick}>
          <div className="age-verification-content">
            <h2>This website is only for users aged 18 and above</h2>
            <p>You cannot access this website if you are under 18 years old.</p>
            <div className="age-buttons">
              <button id="goBackBtn" className="btn btn-yes" onClick={handleGoBack}>Go Back</button>
            </div>
          </div>
        </div>
      )}

     
      <div className={`overlay ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}></div>

      
      <header>
        <div className="header-container">
          <div className="logo">Rocket Dan Fan</div>

         
          <div className={`hamburger-menu ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={isMenuActive ? 'active' : ''}>
            <ul>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>Home</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>T&C</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>Privacy</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>Responsible Play</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>Legal</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>Contact</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>FAQs</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>About</a></li>
              <li><a href="#" onClick={isMenuActive ? toggleMenu : undefined}>Blog</a></li>
            </ul>
          </nav>
        </div>
      </header>

     
      <section className="container" style={{width: '90vw', margin: '10px auto', padding:'20px', borderRadius:'5px'}}>
        <h1>🏏 Welcome to Rocket Dan Fan – The Ultimate Fantasy Cricket Experience!</h1>
        <p>🎉 Play Fantasy Cricket for FREE & Showcase Your Skills!</p>
        <p>Cricket is more than just a sport—it's a passion! With Rocket Dan Fan, you can experience the thrill of real-time fantasy cricket, where your knowledge & strategy determine your success.</p>

        <h2>🚀 What is Rocket Dan Fan?</h2>
        <p>Rocket Dan Fan is an innovative fantasy cricket app designed for true cricket enthusiasts. Build your dream team, compete with other fans, and track real-time scores—all for FREE!</p>

        <h2>🔥 Why Choose Rocket Dan Fan?</h2>
        <p className="feature-list">
          ✅ 100% Free to Play – No Entry Fees!<br />
          ✅ Real-Time Score Updates & Leaderboards<br />
          ✅ Easy & Secure Registration – Just Your Email!<br />
          ✅ No Ads, No Spam – Only Pure Fantasy Cricket!<br />
          ✅ Skill-Based Gameplay – Every Decision Matters!
        </p>
        <p>📲 Join thousands of cricket fans & start playing today!</p>

        <h2>📥 Download the App Now!</h2>
        <p>🚀 Enter Your Email Below & Get the App Download Link Instantly!</p>
        <p>We will send you the download link directly to your email.</p>

        <div className="app-download">
          <h2>Get the App Instantly</h2>
          <p className="privacy-points">
            ✔ No phone number required—just enter your email!<br />
            ✔ Instant email delivery with the app download link.<br />
            ✔ We respect your privacy—no spam, no ads!
          </p>
          <form className="email-form" onSubmit={handleEmailSubmit}>
            <input type="email" id="email" placeholder="Email Address" required />
            <button type="submit" className="btn btn-primary">✅ Submit & Get App Link</button>
          </form>
        </div>

        <h2>🏏 How Does Rocket Dan Fan Work?</h2>
        <div className="steps">
          <div className="step">
            <p><strong>Step 1:</strong> Download & Sign Up<br />
              Enter your email & receive the app download link. Install Rocket Dan Fan & sign up with your email.</p>
          </div>
          <div className="step">
            <p><strong>Step 2:</strong> Select a Match<br />
              Browse upcoming cricket matches (T20, ODI, IPL, World Cup, etc.). Choose the match you want to play in.</p>
          </div>
          <div className="step">
            <p><strong>Step 3:</strong> Build Your Fantasy Team<br />
              Pick 11 players, assign a Captain (2x points) and Vice-Captain (1.5x points). Save before the deadline.</p>
          </div>
          <div className="step">
            <p><strong>Step 4:</strong> Join a Contest & Compete<br />
              All contests are free. Track live score updates & see your team's performance in real-time.</p>
          </div>
          <div className="step">
            <p><strong>Step 5:</strong> Track Your Rank & Win!<br />
              The better your team performs, the higher you rank on the leaderboard!</p>
          </div>
        </div>
        <p>📲 Think you know cricket? Prove it on Rocket Dan Fan!</p>

        <h2>⚖️ Is Fantasy Cricket Legal in India?</h2>
        <p>✅ Yes! Fantasy Cricket is 100% Legal in India, recognized as a "Game of Skill" by the Supreme Court.</p>
        <p>🚫 Fantasy Sports is NOT available in Andhra Pradesh, Assam, Odisha, Nagaland, Sikkim, Telangana.</p>

        <h2>🔒 Your Privacy & Security Matters</h2>
        <p>We only collect your email address (no phone numbers or personal details). We use SSL Encryption and never share your data with advertisers.</p>
        <p>📌 Want more info? <a href="#">Read our Privacy Policy</a></p>

        <h2>🛡️ Fair Play & Responsible Gaming</h2>
        <p className="feature-list">
          ✅ One Account Per User – No multiple accounts allowed.<br />
          ✅ No Bots or Automated Entries – 100% human competition.<br />
          ✅ Transparent & Verified Scoring – Based on official live match data.
        </p>
        <p>If you ever feel you need a break, you can self-exclude anytime by emailing <a href="mailto:support@rocketdanfan.in">support@rocketdanfan.in</a></p>

        <h2>📌 Frequently Asked Questions (FAQs)</h2>
        <div className="faqs">
          <p><strong>Is Rocket Dan Fan free to play?</strong><br />Yes! 100% free to play—no hidden charges.</p>
          <p><strong>How do I get the app?</strong><br />Enter your email, and we'll send the download link instantly.</p>
          <p><strong>Is this game legal?</strong><br />Yes, Rocket Dan Fan follows all Indian laws & is a Game of Skill.</p>
          <p><strong>Do you collect my phone number?</strong><br />No, we only collect your email to send the app link.</p>
          <p><strong>Is my data safe?</strong><br />Yes! We use SSL encryption & do not sell your data.</p>
        </div>
        <p>Still have questions? Visit our <a href="#">FAQs</a> or email <a href="mailto:support@rocketdanfan.in">support@rocketdanfan.in</a></p>

        <h2>📲 Download & Start Playing Today!</h2>
        <p>Enter your email below & receive the download link instantly!</p>
        <form className="email-form" onSubmit={handleEmailSubmit}>
          <input type="email" placeholder="Email Address" required />
          <button type="submit" className="btn btn-primary">✅ Submit & Get App Link</button>
        </form>
        <p className="privacy-points">
          ✔ 100% Secure, No Spam, No Ads!<br />
          ✔ Email Link Sent Instantly – Download & Start Playing!
        </p>
      </section>

      
      <section className="legal">
        <p>
          Fantasy Cricket is classified as a Game of Skill under Indian laws. Only users 18+ can play. This app is not available in Andhra Pradesh, Assam, Odisha, Nagaland, Sikkim, Telangana.
        </p>
        <p>
          By submitting your details, you agree to our
          <a href="#"> Terms & Conditions</a> &
          <a href="#"> Privacy Policy</a>.
        </p>
      </section>

     
      <footer>
        <div className="footer-links">
          <a href="#">Home</a> |
          <a href="#"> Terms & Conditions (T&C)</a> |
          <a href="#"> Privacy Policy</a> |
          <a href="#"> Responsible Play</a> |
          <a href="#"> Legal Disclaimer</a> |
          <a href="#"> Contact Us</a> |
          <a href="#"> FAQs</a> |
          <a href="#"> About Us</a> |
          <a href="#"> Blog</a>
        </div>
        <p>© 2025 Rocket Dan Fan. All rights reserved.</p>
      </footer>
      </div>
  );
};

export default Home;