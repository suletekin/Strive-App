import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ResourcesPage.css';
import Tito from '../images/Tito.png';
import { dropdown } from '../save/Dropdown';

const ResourcesPage = () => {


  const [visibleDropdown, setVisibleDropdown] = useState(null);

    const toggleDropdown = (dropdownId) => {
        if (visibleDropdown === dropdownId) {
            setVisibleDropdown(null);
        } else {
            setVisibleDropdown(dropdownId);
        }
    };

  return (
    
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Resources</p></IonTitle>
          </IonToolbar>
        </IonHeader>

      
        <IonContent fullscreen>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Resources</IonTitle>
            </IonToolbar>
          </IonHeader>




        <div onClick={() => toggleDropdown('scholarships-dropdown')}>
            <h1 className ='block'> SCHOLARSHIPS!</h1>
            {visibleDropdown === 'scholarships-dropdown' && (
                <div id="scholarships-dropdown" className='newDropdown'>
                  <div className='circle-container'>
                    <div className='circle'></div>
                    <div className='circle' style={{backgroundColor: "pink"}}></div>
                    <div className='circle' style={{backgroundColor: "yellow"}}></div>
                  </div>
                <div className='content'>
                <h4 style = {{textAlign: "center"}}>Tito's Way Scholarship</h4>
                  <div>
                    <img src={Tito} alt="Tito" style={{height: 'auto', borderRadius: "10px"}} ></img>
                  </div>
                  <p style={{marginLeft : "10px"}}>Tito had a passion for self-improvement and was known 
                  for his high integrity and character. We are honored to 
                  celebrate his name in this way, through the Tito’s Way 
                  Scholarship which will provide opportunities to young, 
                  up-and-coming high school-aged leaders in the El Paso area.</p>
                  <p style={{marginLeft : "10px"}}>Deadline April 7, 2023</p>
                  <p style={{textAlign : "center"}}>Click <a href = "https://app.goingmerry.com/scholarships/titos-way-scholarship-2023/17442">here</a> to apply!</p>
                </div>
            </div>
            )}
          </div>
                  
      
        <div onClick={() => toggleDropdown('donations-dropdown')}>
          <h1 className = "block" style={{background: "#4D4C7D"}}> DONATIONS! </h1>
          {visibleDropdown === 'donations-dropdown' && (
            <div id="donations-dropdown" className='newDropdown'>
              <div className='circle-container'>
                    <div className='circle'></div>
                    <div className='circle' style={{backgroundColor: "pink"}}></div>
                    <div className='circle' style={{backgroundColor: "yellow"}}></div>
              </div>
            <div className='content'>
              <p style={{textAlign : "center"}}>Click <a href = "https://pdnfoundation.org/give-to-a-fund/strive-now">here</a> to donate to help support the El Paso youth.</p>
            </div>
          </div>
          )}
        </div>


        <div onClick={() => toggleDropdown('internships-dropdown')}>
          <h1 className = "block" style={{background: "#827397"}}> INTERNSHIPS! </h1>
          {visibleDropdown === 'internships-dropdown' && (
            <div id="internships-dropdown" className= 'newDropdown'>
              <div className='circle-container'>
                <div className='circle'></div>
                <div className='circle' style={{backgroundColor: "pink"}}></div>
                <div className='circle' style={{backgroundColor: "yellow"}}></div>
              </div>
            <div className='content'>
              <p style={{marginLeft : "10px"}}>Acquire practice and explore and expand your talents and skills to be a part of this oraganization.</p>
              <p style={{textAlign: "center"}}>Click <a href = "https://www.epstrivenow.org/getinvolved">here</a> to apply!</p>
            </div>
          </div>
          )}
        </div>

        
        <div onClick={() => toggleDropdown('newsletter-dropdown')}>
          <h1 className = "block" style={{background: "#E9D5DA"}}>NEWSLETTER! </h1> 
          {visibleDropdown === 'newsletter-dropdown' && (
            <div id="newsletter-dropdown" className='newDropdown'>
              <div className='circle-container'>
                <div className='circle'></div>
                <div className='circle' style={{backgroundColor: "pink"}}></div>
                <div className='circle' style={{backgroundColor: "yellow"}}></div>
            </div>
            <div className='content'>
                <p style={{textAlign : "center"}}>Click <a href = "https://www.epstrivenow.org/findyourpurpose">here</a> to sign up for the newsletter!</p>
            </div>
          </div>
          )}
        </div>

        <br></br>


        

          






        </IonContent>
      </IonPage>
    </>
  );
};

export default ResourcesPage;