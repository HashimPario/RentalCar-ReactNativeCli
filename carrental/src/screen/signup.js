import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, Button, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

function Signup({navigation}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
  


    const registerc=()=>{

        if(!email.trim()){
            alert("Enter Email");
            }
            else if(!password.trim()){
                alert("Enter password");
                }

                else if(!contact.trim()){
                    alert("Enter contact number");
                    }

                    else if(!address.trim()){
                        alert("Enter address");
                        }
                
                
                else{
 
            const headers = { "Content-Type": "application/json" };
            axios.post("http://192.168.1.104:9000/api/signup",{
                email:email,
                password:password,
                role: "User",
                name: name,
                contact: contact,
                address: address
},{
    headers,
  })

  .then((success)=>{
    console.log('success',success)
    alert("Signup Successfully")
    navigation.navigate('Login')
  })

    .catch((err)=>{
        console.log('error',err)
    
    })

    }

        

    }
    


return (

    <View>
        
        <Text style={styles.loginTitle}>Register</Text>
        
        
        <View style={styles.texinp}>
        
        <TouchableOpacity>
        <TextInput style={styles.txtinput} placeholder=" Full Name" onChangeText={(name) => setName(name)} ></TextInput>
        <TextInput style={styles.txtinput} placeholder="Email" onChangeText= {(email) => setEmail(email)}></TextInput>
        <TextInput style={styles.txtinput} placeholder="Password" secureTextEntry onChangeText={(password) => setpassword(password)}></TextInput>
        <TextInput style={styles.txtinput} placeholder="Contact Number" onChangeText={(contact) => setContact(contact)}></TextInput>
        <TextInput style={styles.txtinput} placeholder="Address" onChangeText={(address) => setAddress(address)}></TextInput>
        </TouchableOpacity>

        

        </View>

        <View style={styles.btn}>
        <Button title="Signup" color= "black" onPress={registerc}></Button>

        </View>

        <View style={styles.btn}>
        <Button  title="Login" color= "black" onPress={() => navigation.navigate('Login')}></Button>

        </View>


    </View>

    


)

};


const styles = StyleSheet.create({

    loginTitle: {
        
       display : "flex",
       alignSelf : "center", 
      fontSize: 30,
      color : 'black',
      marginTop: 80, 
     
    },

    texinp: {
        
        display : "flex",
        alignSelf : "center",
         
        marginTop: 50,
      
     },
  
     txtinput :{
        width : 300,
        height : 50,
        fontSize : 20,
        color: 'black',
       borderRadius : 10,
       borderColor : 'black'
       
     },


     btn:{
        display : "flex",
        alignSelf : "center",
        marginTop: 20,
        width: 300,
       
     },


  });

export default Signup;

// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity,
//     Alert,
//     Keyboard,
//     KeyboardAvoidingView,
//   } from "react-native";
//   import React, { useState } from "react";
  
//   const Signup = ({ navigation }) => {

  
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");

  
//     const submit = () => {
//       if (!name && !email && !phone && !message) {
//         Alert.alert("Plzz fill all the fields");
//       } else {
//         Alert.alert(`Thank You ${name}`);
//         navigation.navigate("Home");
//       }
//     };
  
//     return (
//       <View style={styles.mainContainer}>
//         <Text style={styles.mainHeader}>  </Text>
  
//         <Text style={styles.description}>
//           You can reach us anytime via thapa@vinod.com
//         </Text>
  
//         <View style={styles.inputContainer}>
//           <Text style={styles.labels}> Enter your name </Text>
//           <TextInput
//             style={styles.inputStyle}
//             placeholder={"vinod thapa"}
//             value={name}
//             onChangeText={(userdata) => setName(userdata)}
//           />
//         </View>
  
//         <View style={styles.inputContainer}>
//           <Text style={styles.labels}> Enter your Email </Text>
//           <TextInput
//             onPress={KeyboardAvoidingView}
//             style={styles.inputStyle}
//             placeholder={"demo@thapa.com"}
//             value={email}
//             onChangeText={(email) => setEmail(email)}
//           />
//         </View>
  
//         <View style={styles.inputContainer}>
//           <Text style={styles.labels}> Enter your mobile </Text>
//           <TextInput
//             style={styles.inputStyle}
//             placeholder={"vinod thapa"}
//             value={phone}
//             onChangeText={(phone) => setPhone(phone)}
//           />
//         </View>

  

//         {/* submit button  */}
  
//         <TouchableOpacity

        
//           onPress={submit}>
//           <Text style={styles.buttonText}> Contact Us </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     mainContainer: {
//       height: "100%",
//       paddingHorizontal: 30,
//       backgroundColor: "#fff",
//     },
//     mainHeader: {
//       fontSize: 24,
//       color: "#344055",
//       fontWeight: "500",
//       paddingTop: 20,
//       paddingBottom: 15,
//       fontFamily: "Nunito_700Bold",
//       textTransform: "capitalize",
//     },
//     description: {
//       fontSize: 18,
//       color: "#7d7d7d",
//       paddingBottom: 20,
//       fontFamily: "WorkSans_400Regular",
//       lineHeight: 25,
//     },
  
//     inputContainer: {
//       marginTop: 20,
//     },
//     labels: {
//       // fontWeight: "bold",
//       fontSize: 15,
//       color: "#7d7d7d",
//       paddingBottom: 5,
//       fontFamily: "WorkSans_400Regular",
//       lineHeight: 25,
//     },
//     inputStyle: {
//       borderWidth: 1,
//       borderColor: "rgba(0, 0, 0, 0.3)",
//       paddingHorizontal: 15,
//       paddingVertical: 6,
//       borderRadius: 2,
//     },
//     multiineStyle: {
//       paddingVertical: 4,
//     },
//     buttonStyle: {
//       borderRadius: 5,
//       paddingVertical: 10,
//       paddingHorizontal: 18,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginVertical: 30,
//     },
//     buttonText: {
//       color: "#eee",
//     },
//     wrapper: {
//       display: "flex",
//       flexDirection: "row",
//       marginTop: 20,
//       fontFamily: "WorkSans_400Regular",
//     },
//     wrapperText: {
//       marginLeft: 10,
//       color: "#7d7d7d",
//       fontFamily: "WorkSans_400Regular",
//     },
//   });
  
//   export default Signup;
  


