import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonMenu, IonPage } from '@ionic/react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle } from '@ionic/react';
import { ellipse, pencil, barbell, calculator, triangle } from 'ionicons/icons';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page4 from './pages/Page4';
import Page3 from './pages/Page3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



setupIonicReact();

const App = () => {

  return (
    <IonApp>
      <IonReactRouter>

<IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu Content</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonMenuToggle>
        <IonButton>Click to close the menu</IonButton>
      </IonMenuToggle>  
    </IonContent>
  </IonMenu>

  <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to open the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonPage>


        <IonTabs>
          <IonRouterOutlet>


            <Route exact path="/page1" component={Page1}/>

            <Route exact path="/page2" component={Page2}/>

            <Route exact path="/page3"component={Page3}/>

            <Route exact path="/page4" component={Page4}/>


            <Route exact path="/">
              <Redirect to="/page1" />
            </Route>

          </IonRouterOutlet>

          <IonTabBar slot="bottom">

            <IonTabButton tab="page1" href="/page1">
              <IonIcon icon={barbell} />
              <IonLabel>Page 1</IonLabel>
            </IonTabButton>

            <IonTabButton tab="page2" href="/page2">
              <IonIcon icon={ellipse} />
              <IonLabel>Page 2</IonLabel>
            </IonTabButton>

            <IonTabButton tab="page3" href="/page3">
              <IonIcon icon={calculator} />
              <IonLabel>Page 3</IonLabel>
            </IonTabButton>

            <IonTabButton tab="page4" href="/page4">
              <IonIcon icon={triangle} />
              <IonLabel>Page 4</IonLabel>
            </IonTabButton>

          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
