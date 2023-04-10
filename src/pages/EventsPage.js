import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuToggle, IonButton, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import ApiCalendar from "react-google-calendar-api";
import { React, useEffect, useState } from 'react';

const config = {
  clientId: "857965574667-2ck09b4mt4uhr65b2ebe8regd2aj5r1p.apps.googleusercontent.com",
  apiKey: "AIzaSyDy6qTwQp8jTRM-AaoAsdb5wuBFT4gyEAc",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const CALENDAR_ID = "33236639fc60de7e5a2dd323acbf2da9b2f5ab593ec0a27bcce17d4fc0c06fd7@group.calendar.google.com";

const apiCalendar = new ApiCalendar(config);

const events = new Map();

const getEvents = () => {
  apiCalendar.listEvents({
    calendarId: CALENDAR_ID,
    timeMin: new Date().toISOString(),
    showDeleted: false,
    maxResults: 100,
    orderBy: 'updated'
  }).then(({result }) => {
    for (let e of result.items) {
      console.log(e);
      events.set(e.start.date, {title: e.summary, subtitle: e.description, location: e.location, startTime: e.start, endTime: e.end})
    }
  });
}

var highlightedDates = [
  {
    date: '2023-04-05',
    textColor: '#800080',
    backgroundColor: '#ffc0cb',
  },
  {
    date: '2023-04-10',
    textColor: '#09721b',
    backgroundColor: '#c8e5d0',
  }
];

const date = new Date();
const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;


const EventsPage = () => {
  useEffect ( getEvents, [])
  const selectedDate = useState(currentDate);
  //getEvents();
  return (
    <IonPage id="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle><p style={{fontSize: '20px', textAlign: 'center'}}>Events</p></IonTitle>
      </IonToolbar>
    </IonHeader>

    
    <IonContent fullscreen>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div style={{ width: '80%', margin:'auto', marginTop:"5%", display: 'flex', justifyContent: 'center'}}>
      <ion-datetime value={selectedDate} min="2023" presentation="date" size="cover" preferWheel="false" highlightedDates={highlightedDates}></ion-datetime>
      </div>
      <div style={{width:'80%', margin:'auto'}}>
        <ion-card>
          <ion-card-header>
            <ion-card-title>{selectedDate} Enter Event Name</ion-card-title>
            <ion-card-subtitle>Time: 00:00:00AM | Location: GDC 2.100</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            Details here event summary mary had a little lamb a little lamb a little lamb mary had a little lamb 
            with fleece as white as snow
          </ion-card-content>
        </ion-card>

      </div>

    </IonContent>
  </IonPage>
  );
};

export default EventsPage;