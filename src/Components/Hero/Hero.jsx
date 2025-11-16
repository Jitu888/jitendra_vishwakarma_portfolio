import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
const Hero = () => {    
  const openPdf = () => {
  window.open('../../../public/resume.pdf', "_blank");
};

  return (
    <div id='home' className="hero">
      <div className='hero-img'>
         <img  src="../../../public/final-hero.png" alt="" />
      </div>
    
      <h1 className="hero-title"><span>I'm Jitendra Vishwakarma,</span> Mern Stack Developer.</h1>
      <p className="hero-description">I am a passionate Web App Developer with 3+ years of experience.</p>
      <div className='hero-action'>
      <div className="hero-connect"> <AnchorLink className='anchor-link' href="#contact">Connect With Me</AnchorLink></div>
      <div className="hero-resume" onClick={openPdf}>My resume</div>
      </div>  
      
    </div>
  );
}
export default Hero;