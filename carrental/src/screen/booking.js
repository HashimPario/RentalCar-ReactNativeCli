import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Booking({navigation}){

      const [noshour, setnoshour] = useState("");
      const [tprice, settrpice] = useState("");
      const [img, setimg] = useState("");
      const [res, setres] = useState("");
      const [res2, setres2] = useState("");
      const [userEmail, setuserEmail] = useState([]); 

      const userGet = async () => {

        try {
          const user = await AsyncStorage.getItem('user');
          const price = await AsyncStorage.getItem('price');
          const img = await AsyncStorage.getItem('img');
          
          console.log(user, 'user')

          setimg(img);
          setuserEmail(user);
          settrpice(price)
          console.log(user)
  
        } catch (err) {
          console.log(err);
        }
      };

      {
        console.log(tprice, "book")
      
      }

      const bookingcomplete =()=>{

        // hourfunc();
            console.log(noshour, tprice)
        if(!noshour.trim()){
            alert("Nos of Hour");
            console.log(noshour)
        }


          
        
      
            else{
 
            const headers = { "Content-Type": "application/json" };
            axios.post("http://192.168.1.104:9000/api/bookingpostdata",{

                // productName:localStorage.getItem('price'),
                productPrice: noshour,
                imageURL: img,
                userEmail: userEmail,
                productName: res2,
                
                // qty: contact,
                // category:localStorage.getItem('address'),
                // hotelname: localStorage.getItem('userhotel'),
                // hotelemail: localStorage.getItem('hotelemail'),
                hotelPrice: res,
                // hotelDate : getdate,
                paymentstatus : "Unpaid",
                // packageid: localStorage.getItem('packageid')
},{
    headers,
  })

  .then((success)=>{
    console.log('success',success)
    navigation.navigate('bookingcomplete')


  }) 

    .catch((err)=>{
        console.log('error',err)
    
    })

    }
  
    }



    
    const hourfunc=()=>{

       const result = noshour * tprice;


       setres(result)
       setres2(tprice)

      //  settrpice(setres)

       console.log(result, "result")
       

    }   




    useEffect(() => {
        userGet()

      }, []);
    
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
        
        <TextInput style={styles.txtinput} placeholder="Nos of Hour" onChangeText={(noshour) => setnoshour(noshour)}></TextInput>
        <TextInput style={styles.txtinput} placeholder={tprice} onFocus={hourfunc} onChangeText={(tprice) => setnoshour(tprice)}></TextInput>

        

        </View>

        <View style={styles.btn}>
        <Button color="green" title="Booking Complete" onPress={()=>{bookingcomplete(); }}></Button>

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
      marginTop: 50, 
     
    },

    texinp: {
        
        display : "flex",
        alignSelf : "center",
         
        marginTop: 50,
      
     },
  
     txtinput :{
        width : 300,
        height : 100,
        fontSize : 30,
        color: 'black',
       borderRadius : 10,
       borderColor : 'black'
       
     },


     btn:{
        display : "flex",
        alignSelf : "center",
        marginTop: 50,
        width: 300,
       
     },

     iconStytle: {
        width: "100%",
        height: 100,
        alignSelf : "center",
        aspectRatio: 1,
      },


  });

export default Booking;