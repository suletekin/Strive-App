import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PerformPage = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Perform</p></IonTitle>
      </IonToolbar>
    </IonHeader>

    
    <IonContent fullscreen>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Perform</IonTitle>
        </IonToolbar>
      </IonHeader>
      
    </IonContent>
  </IonPage>
  );
};

export default PerformPage;