import { View, Text , TouchableOpacity, ScrollView, TextInput, ToastAndroid} from 'react-native'
import React,{useState} from 'react'
import colours from '../designs/colours';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SignInAnonymously, SignInWithEmailAndPassword, SignInWithGoogle } from './Utilities';


const SignIn = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const [hidePassword,setHidePassword] = useState(false)
  
  const [showErrors, setShowErrors]= useState(false)
  const [errors, setErrors]= useState({})

  const getErrors= (email,password) =>{
    const errors= {}
    if(!email){
      errors.email= "Please Enter Email"
    } else if(!email.includes("@") || !email.includes(".com")){
      errors.email='Please Valid Email';
    }

    if(!password){
      errors.password= 'Enter Password';
    }else if(password.length <8){
      errors.password= 'Enter Password of 8 characters';
    }
    return errors;
  };


  const handelRegister= () => {
    const errors= getErrors(email,password);
    if(Object.keys(errors).length>0){
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors);
    }
    else{
      setErrors({});
      setShowErrors(false);
      handelSignIn(email, password);
    }
  };

  const handelSignIn= (email,password) =>{
    SignInWithEmailAndPassword({email, password}).then(()=>
    ToastAndroid.show("Logged In", ToastAndroid.SHORT)
    ).catch(error=> 
      {
        if (error.code === "auth/invalid-login") {
          setErrors({email: "User Not found"});
        } else if (error.code === "auth/wrong-password") {
          setErrors({password: "Invalid Password"});
        } else {
          console.log(error);
        }
       } );
  }

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
    <View style=
    {{backgroundColor:'#98FF98', width:'100%', height:'100%',
    paddingVertical:10, paddingHorizontal:20,}} >

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
          marginVertical:70,
          fontSize:30,
          color:'black',
          letterSpacing:2,
          fontWeight:'500',
        }}>
          Welcome
          User! 
        </Text>

         <Text style={{
          textAlign:'center',
          marginVertical:-50,
          fontSize:18,
          marginBottom:60,
          color:'black',
          letterSpacing:2,
          fontWeight:'500',
        }}>
          You've been missed!
        </Text>


        <View style={{
          width:'100%',
        }}>
          <View style={{
            width:'100%',
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
            borderRadius:10,
            backgroundColor:'white',
           }}></TextInput>

           {errors.email && (<Text style={{
            fontSize:14, 
            color:'#F88070',
            marginTop:4,
           }}>
            {errors.email}
           </Text>
           )}


          </View>
          <View style={{
            width:'100%',
            marginBottom:20,
          }}>

          

<View style={{
  width: '100%',
  borderRadius: 10, 
  backgroundColor: 'white',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}}>
  <TextInput 
    placeholder='Password'
    placeholderTextColor='grey'
    secureTextEntry={!hidePassword} // This will hide the text when hidePassword is true
    value={password}
    onChangeText={e => setPassword(e)}
    maxLength={8}
    style={{
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      fontSize: 14,
      color: 'grey',
      borderRadius: 10,
      backgroundColor: 'white',
    }}
  />
  {password.length > 0 && (
    <TouchableOpacity 
    onPress={() => setHidePassword(!hidePassword)}>
      <Ionic name={hidePassword ? "eye-sharp" : "eye-off-sharp"}
        style={{
          fontSize: 20,
          color: 'black',
        }}
      />
    </TouchableOpacity>
  )}
</View>
           {errors.password && (<Text style={{
            fontSize:14, 
            color:'#F88070',
            marginTop:4,
           }}>{errors.password}
           </Text>
           )}

          </View>


          <TouchableOpacity  
          onPress={()=> handelRegister()}
          activeOpacity={0.8}
          style={{
            width:'100%', 
            paddingVertical:14,
            paddingHorizontal:20,
            alignItems:'center', justifyContent:'center',
            backgroundColor: '#FF6F61',
            borderRadius:10,
            elevation: 8,
            shadowColor: '#FF6F61',
          }}>
            <Text style={{
              color:'white',
              fontSize:16,
            }}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:250,
      }}>
      <Text  style={{
        fontSize:15, color:'black',fontFamily:'Nunito',
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
       <LoginWithIcon buttonTitle="Google" 
       onPress={() => SignInWithGoogle().then(()=>
        ToastAndroid.show("Signed In", ToastAndroid.SHORT))}  iconName={"logo-google"} />
     <LoginWithIcon buttonTitle="Anonymous" 
     onPress={() => SignInAnonymously().then(()=>
      ToastAndroid.show("Signed In Anonymously", ToastAndroid.SHORT))}  iconName={"person-outline"} />
     </View>

     <TouchableOpacity 
     activeOpacity={0.8}
     onPress={() => navigation.navigate('SignUp')}
     style={{
      width:'100%',
      alignItems:'center',
      marginTop:-160,
      
     }}>
      <Text style={{
          fontSize:14,fontWeight:'400',
          color:'black'
        }}>
        Not a member?
        <Text style={{
          color:'#FF6060',

        }}>
          Sign Up Now
        </Text>
      </Text>
     </TouchableOpacity>

     <View style={{ height: 60, width: '100%', backgroundColor: 'transparent' }}></View>


      </ScrollView>
     
      
    </View>
  );
};

export default SignIn