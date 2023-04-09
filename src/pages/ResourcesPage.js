import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ResourcesPage = () => {
  return (
    <>
      <IonPage>
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
        
          <h1 style={{textAlign: "center", fontFamily: "AndaleMono", fontSize: "30px", fontWeight: "600"}}> Scholarships Link</h1>
          <p style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}> Sample link</p>

          <h1 style={{textAlign: "center", fontFamily: "AndaleMono", fontSize: "30px", fontWeight: "600"}}> Donations! </h1>
          <p style={{textAlign: "center", marginLeft: "20px", fontSize: "20px", marginRight: "20px", marginTop: "-7px"}}> Sample links</p>


        </IonContent>
      </IonPage>
    </>
  );
};

export default ResourcesPage;