// import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import auth from "@react-native-firebase/auth";
// import Video from 'react-native-video';



// import { signOutUser } from './Utilities';


// const Home = () => {

//   const handelSignOut = () => {
//     try {
//       signOutUser();
//       console.log("signed out");
//     }catch (error){
//       console.log(error);
//     }
//   }

//   const user= auth().currentUser;

//   return (
//     <View>
//       <StatusBar backgroundColor='#FFFEFE' barStyle="dark-content" />
//       <View style=
//     {{backgroundColor:'transparent', width:'100%', height:'100%',alignItems:'center',
//     paddingVertical:350, paddingHorizontal:80,}} >
//       <Text style={{color:'black',
//        fontSize:20,
//        }}>Welcome</Text>
//        <Text style={{color:'black',
//        fontSize:40,
//        fontWeight:'700',
       
//        }}>
//         {user?.displayName ? user.displayName : 'Uk User'}
//         </Text>

//        <TouchableOpacity  activeOpacity={0.8}
//        onPress={()=>handelSignOut()}
//        style={{
//          backgroundColor:'#F88070',
//          marginTop:20,
//         marginBottom:-5,
//         paddingVertical:5,
//         paddingHorizontal:20,
//         borderRadius:10,
//        }}>
//         <Text style={{
//           color:'white',
//         }}>Sign Out</Text>
//        </TouchableOpacity>

//     </View>
    

//     </View>    
//   )
// }

// export default Home;



// import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import auth from "@react-native-firebase/auth";
// import Video from 'react-native-video';

// import { signOutUser } from './Utilities';

// const videoSource = require('../images/video4.mp4');

// const Home = () => {

//   const handelSignOut = () => {
//     try {
//       signOutUser();
//       console.log("signed out");
//     } catch (error){
//       console.log(error);
//     }
//   }

//   const user= auth().currentUser;
  


//   return (
//     <View>
//       <StatusBar backgroundColor='#FFFEFE' barStyle="dark-content" />

//       <Video
//         source={videoSource}
//         resizeMode="cover"
//         repeat
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//         }}
//       />

//       <View style=
//         {{backgroundColor:'transparent', width:'100%', height:'100%',alignItems:'center',
//         paddingVertical:350, paddingHorizontal:80, position: 'relative'}} >
//         <Text style={{color:'white', fontSize:20}}>Welcome</Text>
//         <Text style={{color:'white', fontSize:40, fontWeight:'700'}}>
//           {user?.displayName ? user.displayName : 'Uk User'}
//         </Text>

//         <TouchableOpacity  
//           activeOpacity={0.8}
//           onPress={()=>handelSignOut()}
//           style={{
//             backgroundColor:'#F88070',
//             marginTop:20,
//             marginBottom:-5,
//             paddingVertical:5,
//             paddingHorizontal:20,
//             borderRadius:10,
//           }}>
//           <Text style={{ color:'white' }}>Sign Out</Text>
//         </TouchableOpacity>
//       </View>
//     </View>    
//   )
// }

// export default Home;



import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import auth from "@react-native-firebase/auth";
import { signOutUser } from './Utilities';
import Video from 'react-native-video';
const videoSource = require('../images/video4.mp4');

const Home = ({ navigation }) => {

    const handleSignOut = () => {
      try {
        signOutUser();
        console.log("signed out");
      } catch (error){
        console.log(error);
      }
    }

    // const handleEnterModel = () => {
    //   {() => navigation.navigate(Modelapp)}
    // }
  
    const user = auth().currentUser;

  return (
    
    <View style={styles.container}>
      <Video
        source={videoSource}
        resizeMode="cover"
        repeat
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.userName}>
        {user?.displayName ? user.displayName : 'Anonymous User'}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Modelapp')}
        style={styles.enterModelButton}
      >
        <Text style={styles.enterModelText}>Enter the Model</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleSignOut}
        style={styles.signOutButton}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEFE',
  },
  welcomeText: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  userName: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  enterModelButton: {
    backgroundColor: 'red',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  enterModelText: {
    color: 'white',
    fontSize: 18,
  },
  signOutButton: {
    backgroundColor: '#F88070',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  signOutText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;












