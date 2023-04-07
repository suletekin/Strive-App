import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuToggle, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';


const Page1 = () => {
  return (
    <>



    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Page 1</p></IonTitle>
      </IonToolbar>
    </IonHeader>

    
    <IonContent fullscreen>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>

    </IonContent>
  </IonPage>
  </>
  );
};

export default Page1;