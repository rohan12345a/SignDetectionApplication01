import { View, Text , TouchableOpacity, ScrollView, TextInput, ToastAndroid, SafeAreaView, ImageBackground} from 'react-native'
import React,{useState} from 'react'
import colours from '../designs/colours';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CreateAccountWithEmailAndPassword, SignInAnonymously, SignInWithGoogle } from './Utilities';
import Video from 'react-native-video';

const video123 = require('../images/imgg2.jpg');

const SignUp = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const  [confirmPassword, setConfirmPassword]= useState('');

  const [showErrors, setShowErrors]= useState(false)
  const [errors, setErrors]= useState({})

  const getErrors= (email,password, confirmPassword) =>{
    const errors= {}
    if(!email){
      errors.email= "Please Enter Email"
    } else if(!email.includes("@") || !email.includes(".com")){
      errors.email="Please Valid Email"
    }



    if(!password){
      errors.password= 'Enter Password';
    }else if(password.length <8){
      errors.password= 'Enter Password of 8 characters';
    }
    if(!confirmPassword){
      errors.confirmPassword= "Enter Passowrd"
    }
    else if(confirmPassword.length<8){
      errors.confirmPassword= "Enter Valid password";
    }
    else if(password!==confirmPassword){
      errors.confirmPassword= "Password not matched";
    }


    return errors;
  };


  const handelRegister= () => {
    const errors= getErrors(email,password, confirmPassword);
    if(Object.keys(errors).length>0){
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors);
    }
    else{
      setErrors({});
      setShowErrors(false);
      handelSignIn(email, password)
    }
  };

  const handelSignIn= (email, password) =>{
    CreateAccountWithEmailAndPassword({email,password}).then(()=>{
      ToastAndroid.show("Account Created",ToastAndroid.SHORT)
    }).catch(error=> {
      if(error.code === 'auth/email-already-in-use'){
       return setErrors({email: 'Email already in use'});
      }
      if(error.code === 'auth/invalid-email'){
       return setErrors({email: 'Email is invalid!'});
      }
      setErrors({});
      setShowErrors(false)
      
      console.log(error.code);
    })
  };

  const LoginWithIcon = ({iconName,onPress,buttonTitle})=>{
    return(
    <TouchableOpacity onPress={onPress}
    activeOpacity={0.8}
    style={{marginTop : -400, width:'40%', paddingVertical:12, paddingHorizontal:24
    ,backgroundColor:colours.transparent, borderWidth:2,borderColor:'white',
    borderRadius:10, alignItems:'center', justifyContent:'center'}}>
      <Ionic name={iconName} 
      style={{
        fontSize:26, color:'black',
        marginBottom:4,
      }}/>
      <Text style={{
        fontSize:14, color:'black', opacity:0.4,fontWeight:'bold'
      }}>{buttonTitle}</Text>
    </TouchableOpacity>
    );
  };

  return (
    // <View style=
    // {{backgroundColor:'#CCCCFF', width:'100%', height:'100%',
    // paddingVertical:10, paddingHorizontal:20,}} >
    // <SafeAreaView style={{ flex: 1, backgroundColor:'black'}}>
    //   <View style={{ flex: 1 }}>
    //     <ImageBackground
    //       source={video123} 
    //       style={{flex: 1, alignItems: 'center', justifyContent: 'center',resizeMode: 'cover', // This ensures the image covers the entire space without stretching
    //        // You can adjust this based on how you want your content to be positioned
    //       alignItems: 'center',}}
    //     />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#CCCCFF' }}>
      <View style={{flex:1}}>
    {/* <ImageBackground
      source={video123} 
      resizeMode="cover"
      repeat
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    /> */}
    

      <TouchableOpacity 
      activeOpacity={0.8}
      onPress={()=> navigation.goBack()}
      style={{
        backgroundColor: colours.white,
        width: 40,
        aspectRatio: 1/1,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:100,
        elevation:4,
        position: 'absolute',
        top:20,
        left:20,
        zIndex:100,
      }}>

<MaterialIcons name="arrow-back" style={{ fontSize: 20, color: 'black' }} />

      </TouchableOpacity>


      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <Text style={{
          textAlign:'center',
          marginVertical:20,
          fontSize:30,
          marginBottom:80,
          color:'white',
          letterSpacing:2,
          fontWeight:'500',
        }}>
          Welcome
        </Text>

        <View style={{
          width:'100%',
        }}>
          <View style={{
            width:'100%',
            paddingHorizontal:10 ,
            marginBottom:20,

          }}>
           <TextInput placeholder='Enter Email'
           placeholderTextColor= 'grey'
           keyboardType='email-address'
            value= {email}
            onChangeText={e=>setEmail(e)}
            style={{
            paddingVertical:10,
            paddingHorizontal:20,
            fontSize:14,
            color:'grey',
            borderRadius:50,
            backgroundColor:'white',
            width:'80%',
           }}></TextInput>

           {errors.email && (<Text style={{
            fontSize:14, 
            color:'#F88070',
            marginTop:4,
           }}>{errors.email}
           </Text>
           )}


          </View>
          <View style={{
            width:'100%',
            paddingHorizontal:10,
            marginBottom:20,

          }}>
           <TextInput placeholder='Password'
           placeholderTextColor= 'grey'
           keyboardType='visible-password'
            value= {password}
            onChangeText={e=>setPassword(e)}
            maxLength={8}
            style={{
            paddingVertical:10,
            paddingHorizontal:20,
            fontSize:14,
            color:'grey',
            borderRadius:50,
            backgroundColor:'white',
            width:'80%',
            
           }}></TextInput>

           {errors.password && (<Text style={{
            fontSize:14, 
            color:'#F88070',
            marginTop:4,
           }}>{errors.password}
           </Text>
           )}

          </View>

          <View style={{
            width:'100%',
            paddingHorizontal:10,
            marginBottom:20,

          }}>
           <TextInput placeholder='Confirm Password'
           placeholderTextColor= 'grey'
           keyboardType='visible-password'
            value= {confirmPassword}
            onChangeText={e=>setConfirmPassword(e)}
            maxLength={8}
            style={{
            paddingVertical:10,
            paddingHorizontal:20,
            fontSize:14,
            color:'grey',
            borderRadius:50,
            backgroundColor:'white',
            width:'80%'
           }}></TextInput>

          {errors.confirmPassword && (<Text style={{
            fontSize:14, 
            color:'#F88070',
            marginTop:4,
           }}>{errors.confirmPassword}
           </Text>
           )}



          </View>

          <TouchableOpacity  
          onPress={()=> handelRegister()}
          activeOpacity={0.8}
          style={{
            width:'80%', 
            paddingVertical:14,
            paddingHorizontal:20,
            alignItems:'center', justifyContent:'center',
            backgroundColor: '#FF6F61',
            borderRadius:50,
            elevation: 8,
            shadowColor: '#FF6F61',
          }}>
            <Text style={{
              color:'white',
              fontSize:16,
            }}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:250,
      }}>
      <Text  style={{
        fontSize:15, color:'white',fontFamily:'Nunito',
        opacity:0.9, marginHorizontal:18, marginVertical:20,
      }}>_________      Or Continue With      _________ </Text>
      </View>

      <View style={{
       flexDirection:'row', 
      alignItems:'center',
      justifyContent:'space-evenly',
      marginTop:10,
      marginBottom:40,
      
      }}>
       <LoginWithIcon 
       buttonTitle="Google" onPress={() => SignInWithGoogle().then(()=>
        ToastAndroid.show("Signed In", ToastAndroid.SHORT))} 
       iconName={"logo-google"}/>
     <LoginWithIcon 
     buttonTitle="Anonymous" onPress={() => SignInAnonymously().then(()=>
      ToastAndroid.show("Signed In Anonymously", ToastAndroid.SHORT))} 
     iconName={"person-outline"}/>
     </View>

     <TouchableOpacity 
     activeOpacity={0.8}
     onPress={() => navigation.navigate('SignIn')}
     style={{
      width:'100%',
      alignItems:'center',
      marginTop:-160,
      
     }}>
      <Text style={{
          fontSize:14,fontWeight:'400',
          color:'white'
        }}>
        Already a member?
        <Text style={{
          color:'#FF6060',

        }}>
          Sign In Now
        </Text>
      </Text>
     </TouchableOpacity>

     <View style={{ height: 60, width: '100%', backgroundColor: 'transparent' }}></View>


      </ScrollView>
     
      
    </View>
    </SafeAreaView>
  );
};

export default SignUp
























