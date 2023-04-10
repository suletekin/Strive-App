import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonMenuToggle, IonButton} from '@ionic/react';
import StriveLogo from '../images/strive_logo.jpg';
import groupImg from '../images/group.jpg';

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


      <center><img src={StriveLogo} style = {{width: "500px", marginLeft: "auto", marginRight: "auto"}} alt="Strive"></img></center>
      
      <h1 style={{textAlign: "center", fontSize: "30px", borderWidth:"5px", borderStyle: "solid", borderColor: "#FFFFFF"}}>Inspiring through networking, mentorship & education.</h1>
      <IonIcon src={locationOutline} style={{fontSize: '2em', marginLeft: "40px", marginTop: "10px"}}/>
      <h1 style={{marginLeft: "80px", marginTop: "-33px", fontSize: "25px", textDecoration: "none"}} >El Paso, TX — Est. 2022</h1>

      <h1 className='aboutH1'> Our Vision</h1>
      <p className = "p" style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}>Strive Now's Vision is to empower you to fulfill your potential for today and
        prepare you to do it again tomorrow.</p>

      <center><img src={groupImg} style = {{width: "75%", height: "auto"}}></img></center>
      <h1 className='aboutH1' > Our Goal</h1>
      <p className = "p" style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}>Strive Now is about teaching young adults and teens where they are at, like looking at a mountain. You 
        wouldn't point someone to the peak and expect them to know how to get up there.</p>
      <h1 className='aboutH1' > We Will...</h1>
      <p style={{textAlign: "center", marginLeft: "20px",fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}>Meet them at their point in life and walk with them upward: mentally, from a professional development aspect, and teaching 
        youth and young adults how to learn and more specifically how important it is to embrace failure and learn from it. 
      </p>
      <br></br>
      <h1 style={{textAlign: "center", fontSize: "30px", borderWidth:"5px", borderStyle: "solid", borderColor: "#FFFFFF"}}>PURPOSE IS FOUND EVERYDAY</h1>
      <br></br>

      <center><img src={founder} style = {{width: "75%", height: "auto", marginLeft: "auto", marginRight: "auto", }} alt="founder"></img></center>


      <h1 className='aboutH1'> How?</h1>
      <ul>
      <li style={{textAlign: "left", fontSize: "20px", marginRight: "20px", marginTop: "-10px", paddingLeft: "17px"}}>Empower our students to seek out daily purpose through the guidance of mentors.</li>
      <br></br>
      <li style={{extAlign: "auto", fontSize: "20px", marginRight: "20px", paddingLeft: "17px"}}>Host inspiring events in a new empowering environments.</li>
      <br></br>
      <li style={{textAlign: "auto", fontSize: "20px", paddingLeft: "17px", marginRight: "20px"}}>Promote for positive mindsets to look for purpose through community engagement.</li>
      </ul>

      <h1 className='aboutH1' style={{fontWeight: "600", marginBottom: "20px"}}>Connect with Strive!</h1>

      <br></br>

      <div style={{display: 'flex', justifyContent: 'space-evenly', }}>

        <div className="expandable" onClick={() => console.log('')}>
          <IonIcon src={logoInstagram} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}> </IonIcon>
        </div>
        <div className="expandable" onClick={() => console.log('')}>
          <IonIcon src={logoFacebook} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}> </IonIcon>
        </div>
        <div className="expandable" onClick={() => console.log('')}>
          <IonIcon src={mailOutline} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}> </IonIcon>
        </div>
        <div className="expandable" onClick={() => console.log('')}>
          <IonIcon src={callOutline} style={{ fontSize: '3em' , marginLeft: "25px", marginTop: "-15px"}}> </IonIcon>
        </div>
      </div>


    </IonContent>

  </IonPage>
  );
};

export default AboutPage;