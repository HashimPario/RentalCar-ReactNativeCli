import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, FlatList, Image, Button} from 'react-native';
import Menu from "./component/Menu";
import AsyncStorage from "@react-native-async-storage/async-storage";



function Home({navigation}){
    
    const [category, setCategory] = useState([]);
    const [userEmail, setuserEmail] = useState([]);


    const [userContact, setuserContact] = useState([""]);

    const [userAddress, setuserAddress] = useState([""]);

    const logout = async () => {
      try {
        const token = await AsyncStorage.removeItem('token')
        console.log(token)
        const user = await AsyncStorage.removeItem('user')

        navigation.navigate('Login')
    
      } catch (err) {
        console.log(err);
      }
    };

    const userGet = async () => {

      try {
        const user = await AsyncStorage.getItem('user');
        setuserEmail(user);
        console.log(user)

      } catch (err) {
        console.log(err);
      }
    };



    const fetchCategory = async () => {
      const res = await fetch('http://192.168.1.104:9000/api/allpostdata');

      const datacategory = await res.json();
  
      setCategory(datacategory);
      console.log(datacategory);
   
  };

  
  useEffect(() => {
    userGet()
      

  }, []);
    
    useEffect(() => {
        fetchCategory()
         

    }, []);



    


    const showUserData = ({ item }) => {
        return (

<View style={styles.card}>
            <View style={styles.imgContainer}>
              <Image style={styles.imgStyle} source={{ uri: item.imageURL }} />
            </View>
    
            <View>
              <View style={styles.bioDataContainer}>
                <Text style={styles.bioData}> {item.category} </Text>
                {/* <Text style={styles.idNumber}>
                  {item._id < 10 ? `#0${item._id}` : `#{item._id}`}
                </Text> */}
              </View>
    
              <View style={styles.mainContain}>
                <Text style={styles.myName}> Price: Rs.{item.productPrice}/- Per Hour </Text>
                <Button color="red" title="More Details"onPress={() => navigation.navigate('Car Details',{
                  packageid: item._id,
                })}> </Button>
                
   
              </View>
              
                <View>
         
                </View>
            </View>

            
          </View>

          
        );
      };


      return (
           
        <View>
          <View style={styles.btn}>

  

        {/* <Text>{userEmail}</Text> */}
    
        <Button  color= "red" title="Logout" onPress={()=>{logout(); }}></Button>
        <Button  color= "green" title="My Booking" onPress={() => navigation.navigate('mybooking')}></Button>
        </View>
          <Text style={styles.mainHeader}>  ABC Rent a Car </Text>
          <FlatList
            keyExtractor={(item) => item._id}
            data={category}
            renderItem={showUserData}
            
            showsHorizontalScrollIndicator={false}
          />
            
            <View style={styles.menuStyle}>
            <View style={styles.lineStyle}></View>
        {/* <Menu /> */}
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
        </View>

          <View>
            {/* <Text>Developed By: Hashim Pario</Text> */}
            
          </View>

          

        </View>

        
      );

     

    };
    
    

      




    const styles = StyleSheet.create({
      mainContainer: {
        width: "100%",
        minHeight: "100%",
       
        backgroundColor: "#ebedee",
      },
      card: {
        width: 320,
        // height: 350,
        backgroundColor: "black",
        borderRadius: 25,
        marginHorizontal: 20,
        marginTop: 30,
      },
      bioDataContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#353535",
        paddingVertical: 20,
        fontFamily: "WorkSans_400Regular",
      
      },
      idNumber: {
        fontSize: 20,
        color: "rgba(255, 255, 255, 0.5)",
        fontFamily: "WorkSans_400Regular",
        paddingRight: 10,
      },
      bioData: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "WorkSans_400Regular",
      },
      mainHeader: {
        fontSize: 30,
        color: "black",
        textAlign: "center",
        fontFamily: "WorkSans_400Regular",
        // paddingVertical: 30,
      },
      imgContainer: {
        padding: 20,
      },
      imgStyle: {
        width: "100%",
        height: 180,
      },
      mainContain: {
        // padding: 10,
        backgroundColor: "#353535",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingBottom: 20,
      },
      myName: {
        fontSize: 12,
        color: "#fff",
        marginBottom: 10,
        alignSelf: "flex-start",
        textTransform: "capitalize",
    
      },
    });
    

export default Home;
