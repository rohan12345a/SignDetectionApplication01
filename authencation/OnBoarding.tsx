// import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// const logo = require('../images/img2.jpeg')

// import COLORS from '../designs/colours';


// const OnBoarding = ({navigation}) => {
//   return (
//     <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',}}>

      

//       <View style={{backgroundColor:'#FF6F61', height:'65%',width:'90%',borderRadius : 20, alignItems : 'center',marginTop:-40}}>
//         <Image source={logo}
//         style={{marginTop : 70,borderRadius : 20}}/>

//         <View style={{width:'100%',height:'60%',paddingTop:90, alignItems:'center'}}>
//           <Text style={{color:'black', fontSize:24, fontWeight:'bold'}}>
//           SafeDrive: AI-Powered Driver
//           </Text>

//           <Text style={{color:'black', fontSize:24, fontWeight:'bold'}}>
//           Safety System
//           </Text>
//         </View>
//          <View style={{width:'100%',height:'60%',paddingTop:-80, alignItems:'center'}}>
//           <Text style={{color:'black'}}>
//             An Approch to an 
//           </Text>

//           <Text style={{color:'black'}}>
//             Safe driving
//           </Text>
//         </View>

//         <View>
//           <View  style={{width:'100%',flexDirection:'row',marginTop:-80}}>
//             <TouchableOpacity 
//              onPress={()=>navigation.navigate('SignUp')}
//              activeOpacity={0.6} style={{width:'50%',
//           justifyContent:'center', alignItems:'center',
//           paddingVertical:16, backgroundColor:'#CCCCFF', borderTopLeftRadius:10, borderBottomLeftRadius:10,borderWidth:2}}>
//               <Text style={{color:'black',fontWeight:'bold'}}>Register</Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//             onPress={()=>navigation.navigate('SignIn')}
//             activeOpacity={0.6} style={{width:'50%',
//           justifyContent:'center', alignItems:'center',
//           paddingVertical:16, backgroundColor:'#98FF98', borderTopLeftRadius:10, borderBottomLeftRadius:10,borderWidth:2,}}>
//               <Text style={{color:'black', fontWeight:'bold'}}>SignIn</Text>
//             </TouchableOpacity>
//           </View>
//         </View>


//     </View>
//     </View>
    

    
//   )
// }

// export default OnBoarding;










import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import COLORS from '../designs/colours';
const logo = require('../images/img2.jpeg');

const video12 = require('../images/video5.mp4');
const OnBoarding = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Video
        source={video12}
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
      <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <View style={{ backgroundColor: '#FF6F61', height: '65%', width: '90%', borderRadius: 20, alignItems: 'center', marginTop: -40 }}>
          <Image source={logo} style={{ marginTop: 70, borderRadius: 20 }} />

          <View style={{ width: '100%', height: '60%', paddingTop: 90, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              SafeDrive: AI-Powered Driver
            </Text>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              Safety System
            </Text>
          </View>

          <View style={{ width: '100%', height: '60%', paddingTop: -80, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>
              An Approach to Safe driving
            </Text>
          </View>

          <View>
            <View style={{ width: '100%', flexDirection: 'row', marginTop: -80 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                activeOpacity={0.6}
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 16,
                  backgroundColor: '#CCCCFF',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderWidth: 2,
                }}
              >
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                activeOpacity={0.6}
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 16,
                  backgroundColor: '#98FF98',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderWidth: 2,
                }}
              >
                <Text style={{ color: 'black', fontWeight: 'bold' }}>SignIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;










