import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonRouterOutlet } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css'

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome user</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          
      </IonContent>
    </IonPage>
  );
};

export default Home;
