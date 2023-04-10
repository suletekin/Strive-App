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
import { ellipse, pencil, barbell, calculator, triangle, home, calendarOutline, helpCircleOutline, menuOutline, closeOutline} from 'ionicons/icons';

import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import HomePage from './pages/HomePage';
import PerformPage from './pages/PerformPage';


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

        

      <div style={{zIndex: '300'}}>
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Settings</IonTitle>
              <IonMenuToggle style={{zIndex:'100', position: 'absolute',  top: '-14px', width:'80px', height: '70px', overflow: 'hidden', right: '0px'}}>
              <IonButton style={{width:'80px', height: '80px'}} color='transparent'>
                <IonIcon style={{fontSize: 100}} src={closeOutline}/>
              </IonButton>
            </IonMenuToggle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">

          </IonContent>
        </IonMenu>


        <IonMenuToggle style={{position: 'absolute',  top: '-10px', width:'80px', height: '70px', overflow: 'hidden'}}>
        <IonButton style={{width:'80px', height: '80px'}} color='transparent'>
          <IonIcon style={{fontSize: 100}} src={menuOutline}/>
        </IonButton>
      </IonMenuToggle>
      </div>
      

      


        <IonTabs>


          <IonRouterOutlet>

            <Route exact path="/HomePage" component={HomePage}/>

            <Route exact path="/AboutPage" component={AboutPage}/>

            <Route exact path="/ResourcesPage"component={ResourcesPage}/>

            <Route exact path="/EventsPage" component={EventsPage}/>

            <Route path="/PerformPage/:id" component={PerformPage}/>



            <Route exact path="/">
              <Redirect to="/HomePage" />
            </Route>

          </IonRouterOutlet>

          <IonTabBar slot="bottom">

            <IonTabButton tab="Home" href="/HomePage">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="About" href="/AboutPage">
              <IonIcon icon={helpCircleOutline} />
              <IonLabel>About</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Resources" href="/ResourcesPage">
              <IonIcon icon={calculator} />
              <IonLabel>Resources</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Events" href="/EventsPage">
              <IonIcon icon={calendarOutline} ></IonIcon>
              <IonLabel>Events</IonLabel>
            </IonTabButton>

          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
