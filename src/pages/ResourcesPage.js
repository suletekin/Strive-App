import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ResourcesPage = () => {
  return (
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
      
    </IonContent>
  </IonPage>
  );
};

export default ResourcesPage;