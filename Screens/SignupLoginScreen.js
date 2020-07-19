import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    TextInput,
    Alert,
    Modal,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class  SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
        emailId : '',
        password : '',
        }
    }

userLogin = (emailId,password) => {
  firebase.auth().signInWithEmailandPassword(emailId,password).then(()=>{
    return Alert.alert("Login successful!")   
     })
     .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
    })
    } 
    
    userRegister = (emailId,password,confirmPassword) => {
        if(password !== confirmPassword){
            return Alert.alert("Passwords don't match!")
        }
        else {
  firebase.auth().createUserWithEmailandPassword(emailId,password).then(()=>{
    db.collection('Users').add({
    EmailId : this.state.emailId,
    Password : this.state.password
    })
    return Alert.alert("Account successfully created!", 
   [{text : 'ok',
  onPress : ()=> this.setState({"isModalVisible" : false })
 }])
})
.catch((error)=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    return Alert.alert(errorMessage)
})
}
}
showModal = () => {
    return(
        <Modal 
        animationType = "fade" 
        transparent = {true}
        visible = {this.state.isModalVisible}
        >
<View>
<ScrollView>
<KeyboardAvoidingView>
<Text>Register here (All fields are mandatory)</Text>
<TextInput 
placeholder = {"First Name"}
maxLength = {15}
onChangeText = {(text)=>{
    this.setState({firstName : text})
}}
/>

<TextInput 
placeholder = {"Last Name"}
maxLength = {15}
onChangeText = {(text)=>{
    this.setState({lastName : text})
}}
/>

<TextInput 
placeholder = {"Contact Number"}
maxLength = {10}
onChangeText = {(text)=>{
    this.setState({contact : text})
}}
/>

<TextInput 
placeholder = {"Address"}
multiline = {true}
onChangeText = {(text)=>{
    this.setState({address : text})
}}
/>

<TextInput 
placeholder = {"Email Id"}
maxLength = {20}
onChangeText = {(text)=>{
    this.setState({emailId : text})
}}
/>

<TextInput 
placeholder = {"Password"}
maxLength = {20}
secureTextEntry = {true}
onChangeText = {(text)=>{
    this.setState({password : text})
}}
/>

<TextInput 
placeholder = {"Confirm Password"}
maxLength = {20}
secureTextEntry = {true}
onChangeText = {(text)=>{
    this.setState({confirmPassword : text})
}}
/>

<View>
    <TouchableOpacity 
     style = {styles.Button}
    onPress = {()=> this.register(
this.state.emailId, this.state.password,this.state.confirmPassword)}
    >
        <Text>Register</Text>
    </TouchableOpacity>

    <TouchableOpacity>
    style = {styles.Button}
        <Text>Cancel</Text>
    </TouchableOpacity>
</View>
</KeyboardAvoidingView>
</ScrollView>
</View>
        </Modal>
    )
}


render(){
    return(
        <View>
            <View />
            {this.showModal()}
            <View>
            <Text style = {styles.title}>Book Porter</Text>
            </View>
        <View>
<TextInput
style = {styles.emailBox}
 placeholder = "abc@xyz.com" 
 keyboardType = 'email-address'
 onChangeText = {
     (text) => {
         this.setState({emailId : text})
     }
 }
 />
  <TextInput
 style = {styles.passwordBox}
  placeholder = "password" 
  secureTextEntry = {true}
  onChangeText = {
      (text) => {
          this.setState({password : text})
      }
  }
 />
 <TouchableOpacity 
 style = {styles.signInBtn}
 onPress = { () => {
this.signIn(this.state.emailId,this.state.password)
 }
}
 >
     <Text>Sign In</Text>
 </TouchableOpacity>

 <TouchableOpacity 
  style = {styles.signInBtn}
 onPress = { () => this.setState({'isModalVisible' : true})}
 >
     <Text>No Account? Register here</Text>
 </TouchableOpacity>
        </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({

title : {
textAlign : 'center'
},
emailBox : {
width: 200,
height: 40,
borderWidth: 1.5,
fontSize: 20,
paddingLeft:10,
margin:10,
},
passwordBox : {
width: 200,
height: 40,
borderWidth: 1.5,
fontSize: 20,
paddingLeft:10,
margin:10,
},
signInBtn : {
backgroundColor: '#2196F3',
paddingTop: 10,
width : 120,
height:40,
justifyContent : 'center',
alignItems : 'center',
borderRadius : 50
}
})