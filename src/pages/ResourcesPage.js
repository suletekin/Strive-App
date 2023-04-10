import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ResourcesPage.css';
import Tito from '../images/Tito.png';

const ResourcesPage = () => {
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
        
          <div class= "dropdown"><h1 className = "block" style = {{background: "#363062"}}> SCHOLARSHIPS!</h1> </div>
        

          <h1 className = "block" style={{background: "#4D4C7D"}}> DONATIONS! </h1>

          <h1 className = "block" style={{background: "#827397"}}> INTERNSHIPS! </h1>

          <h1 className = "block" style={{background: "#E9D5DA"}}> NEWSLETTER! </h1>



          <p style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}> Tito's Way Scholarship</p>


          <p style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}> Sample links</p>
          <p>Click here to sign up for the newsletter!</p>

          <p style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}> Sample links</p>
          <p>Acquire practice and explore and expand your talents and skills to be a part of this oraganization.</p>

          <p style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}>Donate here</p>
          <p>Click here to donate to help support the El Paso youth.</p>


          <center><img src={Tito} style = {{width: "200px", marginLeft: "auto", marginRight: "auto"}} alt="Tito"></img></center>
          <p>Tito had a passion for self-improvement and was known for his high integrity and character. We are honored to celebrate his name in this way, 
          through the Tito’s Way Scholarship which will provide opportunities to young, up-and-coming high school-aged leaders in the El Paso area.</p>

        </IonContent>
      </IonPage>
    </>
  );
};

export default ResourcesPage;