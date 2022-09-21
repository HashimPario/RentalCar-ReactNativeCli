import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Login({navigation}){

      const [email, setEmail] = useState("");
      const [password, setpassword] = useState("");
      const [token, setToken] = useState(0);

      const [userContact, setuserContact] = useState([0]);

      const [userAddress, setuserAddress] = useState([""]);


      const tkn = async () => {
        try {
          const tokenadd = await AsyncStorage.setItem('token', "thisismytoken");  
          console.log(tokenadd)
          const uemail = await AsyncStorage.setItem('user', email);  
          console.log(uemail)
        } catch (err) {
          console.log(err);
        }
      };
    

      const loginc =()=>{

            console.log(email, password)
        if(!email.trim()){
            alert("Enter Email");
            console.log(email)
        }

        else if(!password.trim()){
            alert("Enter Password");
            console.log(password)
        }
            
          
        
      
            else{
 
            const headers = { "Content-Type": "application/json" };
            axios.post("http://192.168.1.104:9000/api/signin",{
                
                email:email,
                password:password
},{
    headers,
  })

  .then((success)=>{
    console.log('success',success)
    tkn()
    navigation.navigate('Home')


  }) 

    .catch((err)=>{
        console.log('error',err)
    
    })

    }
  
    }

    const userGet = async () => {

      try {
 
        const res2 = await fetch(`http://192.168.1.104:9000/api/postbyemailsignup/${email}`);

        const ca = await res2.json();
    
        setuserContact(ca);


    
        console.log(ca);
  

      } catch (err) {
        console.log(err);
      }
      console.log(userContact.contact)
    };


    const getItemList = async () => {
      try {
        const data = await AsyncStorage.getItem('token');
        setToken(data, "token");
        console.log(token)

        if (token){
            navigation.navigate('Home')
        }else{
            navigation.navigate('Login')
        }

      } catch (err) {
        console.log(err);
      }
    };

      useEffect(() => {
        

      }, [getItemList()]);

return (

    <View>
        
        {/* <Text style={styles.loginTitle}>Login</Text> */}

        <View>

        <TouchableOpacity
        style={styles.loginTitle}
        onPress={() => navigation.navigate("mybooking")}>
        {/* <Text>Course</Text> */}
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://res.cloudinary.com/fimgcloud/image/upload/v1659104320/logologinh_dd3jqe.png",
          }}
        />
      </TouchableOpacity>

        </View>
      
    
        <View style={styles.texinp}>
        
        <TextInput style={styles.txtinput} placeholder="Enter Email" onChangeText={(email) => setEmail(email)}></TextInput>
        <TextInput style={styles.txtinput} onFocus={userGet} placeholder="Enter Password" secureTextEntry onChangeText={(password) => setpassword(password)}></TextInput>

        

        </View>

        <View style={styles.btn}>
        <Button title="Login" color="black" onPress={()=>{loginc(); }}></Button>

        </View>

        <View style={styles.btn}>
        <Button  title="Signup" color="black"  onPress={() => navigation.navigate('Signup')}></Button>

        </View>

    </View>

    


)

};


const styles = StyleSheet.create({

    loginTitle: {
        
       display : "flex",
       alignSelf : "center", 
      fontSize: 50,
      color : 'blue',
      marginTop: 100, 
     
    },

    texinp: {
        
        display : "flex",
        alignSelf : "center",
         
        marginTop: 20,
      
     },
  
     txtinput :{
        width : 300,
        height : 80,
        fontSize : 20,
        color: 'black',
       borderRadius : 10,
       borderColor : 'black'
       
     },


     btn:{
        display : "flex",
        alignSelf : "center",
        marginTop: 30,
        width: 300,
    
       
     },


     iconStytle: {
        width: "100%",
        height: 100,
        alignSelf : "center",
        aspectRatio: 1,
      },


  });

export default Login;