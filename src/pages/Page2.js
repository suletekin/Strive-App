import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';


const Page2 = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Page2</p></IonTitle>
      </IonToolbar>
    </IonHeader>

    
    <IonContent fullscreen>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Page2</IonTitle>
        </IonToolbar>
      </IonHeader>

    </IonContent>
  </IonPage>
  );
};

export default Page2;