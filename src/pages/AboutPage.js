import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonMenuToggle, IonButton} from '@ionic/react';
import StriveLogo from '../images/strive_logo.jpg';
import groupImg from '../images/group.jpg';
import purpose from '../images/purpose.jpeg';
import empower from '../images/empower.jpeg';
import el_paso from '../images/el_paso.avif';
import Natalia from '../images/natalia.jpeg';
import Israel from '../images/israel_again.jpeg';

import founder from '../images/israel_founder.jpg';
import {logoInstagram, logoFacebook, mailOutline, callOutline, locationOutline} from 'ionicons/icons';
import './AboutPage.css';


const AboutPage = () => {
  return (
    <IonPage id="main-content">
    
    <IonHeader>
      <IonToolbar>
        <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>About</p></IonTitle>
      </IonToolbar>
    </IonHeader>

    
    <IonContent fullscreen style={{paddingLeft: '10px', paddingRight: '10px'}}>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">About</IonTitle>
        </IonToolbar>
      </IonHeader>

    <br></br>

    <div className='container'>
      <div className='bubble'>
        <div style={{position: 'relative' }}>
            <div style={{fontSize: "20px"}}>
                <h1 style={{fontSize: "20px"}}> <IonIcon src={locationOutline} />El Paso — Est. 2022</h1>
            </div>
            <img src={el_paso} style={{width: '90%', height: '90%', objectFit: 'cover', borderRadius: "5px"}} alt="El Paso" />
        </div>
      </div>
    </div>

    <br></br>

  <div className='container'>
    <div className='bubble' style={{height: "200px"}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{fontSize: "20px", width: '40%'}}>
                <h1 style={{fontSize: "20px", textAlign: "left", marginLeft: "8px"}}>Inspiring through networking, mentorship & education</h1>
            </div>
            <img src={purpose} style={{width: '50%', height: '80%', marginRight: "10px", borderRadius: "5px"}} />
        </div>
    </div>
  </div>


    <br></br>


  <div className='container'>
    <div className='bubble' style={{height: "200px"}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={empower} style={{ width: '50%', height: '55%', marginLeft: "10px", borderRadius: "5px"} } />
            <div style={{fontSize: "20px", width: '40%'}}>
                <h1 style={{fontSize: "18px", textAlign: "right", marginRight: "8px"}}>Empowering you to fulfill your potential for
                 today and prepare you to do it again tomorrow</h1>
            </div>
        </div>
    </div>
  </div>

  <br></br>

  <div className='container'>
      <div className='bubble' style={{width: "45%"}}>
        <div style={{ position: 'relative' }}>
            <div style={{ fontSize: "20px"}}>
                <h1>Founder</h1>
                <h1 style={{ fontSize: "20px"}}>Israel Castro</h1>
            </div>
            <img src={Israel} style={{ width: '90%', height: '90%', objectFit: 'cover', borderRadius: "5px"}} alt="El Paso" />
        </div>
      </div>

      <div style={{padding: "10px"}}>
      </div>

      <div className='bubble' style={{width: "45%"}}>
        <div style={{ position: 'relative' }}>
            <div style={{ fontSize: "20px"}}>
                <h1>Co-Founder</h1>
                <h1 style={{ fontSize: "20px"}}>Natalia Salmeron </h1>
            </div>
            <img src={Natalia} style={{ width: '90%', height: '90%', objectFit: 'cover', borderRadius: "10px"}} alt="El Paso" />
        </div>
      </div>
  </div>

  <br></br>

<div className='bubble' style={{height: "60px", width: "355px", marginLeft: "16px"}}>
    <h1>Our Programs</h1>
</div>

<div style={{padding: "3px"}}></div>


  <div className='container'>
      <div className='bubble' style={{height: "auto", width: "355px"}}>
        <div style={{ position: 'relative' }}>
            <h1>Hangout Workshops</h1>
            <p style={{textAlign: "left", marginLeft: "8px"}}>A comprehensive program where students learn from subject matter experts, 
              community leaders, and special guests who share inspiring stories of purpose 
              discovery and overcoming failures.</p>
            <h1>Community</h1>
            <p style={{textAlign: "left", marginLeft: "8px"}}>We believe that purpose is ignited by discovering one's passion(s). We have
              found that passion often emerges when individuals immerse themselves in the service of others.</p>
        </div>
      </div>
  </div>

  <br></br>


  <div className='container'>
      <div className='bubble' style={{height: "auto", width: "355px"}}>
        <div style={{ position: 'relative' }}>
            <h1>Strive 60</h1>
            <p style={{textAlign: "left", marginLeft: "8px"}}>Strive 60 is about building habits that we believe are fundamental to personal
            growth.</p>
            <div>
              <p>
              30-Minute Workout 🏋️
              </p>
              <p>
              3-Minute Intentional Silence 🤫
              </p>
              <p>
              10-Minute Reading 📚
              </p>
              <p>
              1 Daily Reflection Journal Entry ✍️
              </p>
              <p>
              2 Liters of Water 🚰
              </p>
            </div>
        </div>
      </div>
  </div>

    
      
      <br></br>

      <div style={{textAlign: "center"}}>
          <h1>Let's Stay In Touch!</h1>
      </div>
      

      <br></br>

      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

        <div className="expandable" onClick={() => window.open('https://www.instagram.com/epstrivenow/')}>
          <IonIcon src={logoInstagram} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}></IonIcon>
        </div>
        <div className="expandable" onClick={() => window.open('https://www.facebook.com/strivenowep/')}>
          <IonIcon src={logoFacebook} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}> </IonIcon>
        </div>
        <div className="expandable" onClick={() => window.open('mailto:info@strivenowep.org')}>
          <IonIcon src={mailOutline} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}> </IonIcon>
        </div>
        <div className="expandable" onClick={() => window.open('tel:+1(915)301-8812')}>
          <IonIcon src={callOutline} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}> </IonIcon>
        </div>
      </div>


    </IonContent>

  </IonPage>
  );
};

export default AboutPage;