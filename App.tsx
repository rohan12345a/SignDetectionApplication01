import React, {useState,useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnBoarding from './authencation/OnBoarding';
import Home from './src/Home';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import auth from '@react-native-firebase/auth';
import Modelapp from './src/Modelapp';


function App(){
  const Stack= createNativeStackNavigator()

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes 
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
        animation:'flip'
      }}>
        {user ? (
          <React.Fragment>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Modelapp" component={Modelapp}/>
          </React.Fragment>
         ) : (
          <>
          <Stack.Screen name="OnBoarding" component={OnBoarding}/>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          </>
       ) }
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

