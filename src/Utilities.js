import auth from "@react-native-firebase/auth";

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '730125210152-8ularceqiolj5lkpslfs501h1ono2ecm.apps.googleusercontent.com',

  });

export const CreateAccountWithEmailAndPassword = ({email,password})=>{
return  auth().createUserWithEmailAndPassword(email,password);
};


export const SignInWithEmailAndPassword = ({email,password})=>{
  return  auth().signInWithEmailAndPassword(email,password);
  };


export const signOutUser = () => {
return  auth().signOut();
};

export const SignInWithGoogle = async() =>{
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export const SignInAnonymously = () =>{
return  auth().signInAnonymously();
};
