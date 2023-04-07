import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Page4 = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Page4</p></IonTitle>
      </IonToolbar>
    </IonHeader>

    
    <IonContent fullscreen>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Page4</IonTitle>
        </IonToolbar>
      </IonHeader>

    </IonContent>
  </IonPage>
  );
};

export default Page4;