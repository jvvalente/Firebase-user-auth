import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonRouterOutlet } from '@ionic/react';
import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../firebaseConfig'
import { registerUser } from '../firebaseConfig'

const Login: React.FC = () => {

  const[email, setEmail] = useState('');
  const[password, setPass] = useState('');

  async function login() {
    const res = await loginUser(email, password);
    alert(`${res ? 'Login succesful' : 'Login failure'}`) 
  }

  async function register() {
    const res = await registerUser(email, password);
    alert(`${res ? 'Register success' : 'Register failure'}`) 
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User-auth test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonInput value={email} type="email" onIonChange={e => setEmail(e.detail.value!)} placeholder="email"></IonInput>
          <IonInput value={password} type="password" onIonChange={e => setPass(e.detail.value!)} placeholder="password"></IonInput>
          <IonItem>
            <IonButton onClick={e => login()}>Login</IonButton>
            <IonButton onClick={() => register()}>Register</IonButton>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Login;
