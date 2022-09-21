import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, FlatList, Image, Button, addons} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



function Packages({navigation, route}){
    

    const [category, setCategory] = useState([]);

    const [price, setPrice] = useState((""));


    const conadd = async () => {

      try {
        // const contact = await AsyncStorage.getItem('contact');
        // const address = await AsyncStorage.getItem('address');
        

        const uprice = category.productPrice;

        setPrice(uprice);

        const sprice = await AsyncStorage.setItem('price', JSON.stringify(uprice));
        const img = await AsyncStorage.setItem('img', category.imageURL)
        // setuserEmail(user);
        // console.log(contact, "contact")
        // console.log(address, "address")

        console.log(sprice, "price")

      } catch (err) {
        console.log(err);
      }

      
    };


{console.log(price, "state")}

    useEffect(() => {

      const id = route.params.packageid;
  
      console.log(id);

        const fetchCategory = async () => {
            // const res = await fetch('http://192.168.1.104:9000/api/allgetcategory');

            const res = await fetch(`http://192.168.1.104:9000/api/getuser/${id}`);

            const datacategory = await res.json();
        
            setCategory(datacategory);
          
            console.log(datacategory);



         
         
        };
       
        fetchCategory()
        

    }, []);


    


    // const showUserData = ({ item }) => {
    //     return (
    //       <View style={styles.card}>
    //         <View style={styles.imgContainer}>
    //           <Image style={styles.imgStyle} source={{ uri: item.imageURL }} />
    //         </View>
    
    //         <View>
    //           <View style={styles.bioDataContainer}>
    //             <Text style={styles.bioData}> {item.hotelname} </Text>

    //           </View>
    
    //           <View style={styles.mainContain}>
    //             <Text style={styles.myName}> Rs. {item.productPrice}/- Per Hour </Text>
    //             <Button  title="Book Now" onPress={`ShowGallery/${item.categoryName}`}> </Button>
                
   
    //           </View>
              
    //             <View>
         
    //             </View>
    //         </View>

            
    //       </View>

          
      //   );
      // };


      return (
           
        <View style={styles.mainContainer} backgroundColor="#B4B4B4" >
          <Text style={styles.mainHeader}>Car Details</Text>

              <View style={styles.imgContainer}>
             <Image style={styles.imgStyle} source={{ uri: category.imageURL }} />
         </View>

              <Text style={styles.txtContainer}>Make: {category.productName}</Text>
              <Text style={styles.txtContainer}>Model: {category.qty}</Text>
              
              <Text style={styles.txtContainer}>Price {category.productPrice}/- Per Day</Text>
              <Text style={styles.txtContainer}>Description: {category.category}</Text>

              <Button color="green" title="Book A Car" onPress={() => {conadd(); navigation.navigate('booking') }}> </Button>
              {/* <Button color="green" title="send price" onPress={conadd}> </Button> */}
        </View>

     
      );

     

    };
    
    

      




    const styles = StyleSheet.create({
      mainContainer: {
        width: "100%",
        minHeight: "100%",
        paddingVertical: 50,
        backgroundColor: "black",
      },
      
      card: {
        width: 250,
        // height: 350,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginHorizontal: 20,
      },
      bioDataContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#353535",
        paddingVertical: 10,
        fontFamily: "WorkSans_400Regular",
      },
      idNumber: {
        fontSize: 20,
        color: "rgba(255, 255, 255, 0.5)",
        fontFamily: "WorkSans_400Regular",
        paddingRight: 10,
      },
      bioData: {
        fontSize: 30,
        color: "#fff",
        fontFamily: "WorkSans_400Regular",
      },
      mainHeader: {
        fontSize: 30,
        color: "black",
        textAlign: "center",
        fontFamily: "WorkSans_400Regular",
        paddingVertical: 50,
      },
      imgContainer: {
        padding: 10,
      },
      txtContainer: {
       marginTop:10,
       marginBottom:10,
       marginLeft:20,
       
      },
      txtBtn: {
        height:400,
        
       },
      imgStyle: {
        width: "100%",
        height: 180,
      },
      mainContain: {
        padding: 10,
        backgroundColor: "#353535",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingBottom: 20,
      },
      myName: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 10,
        alignSelf: "flex-start",
        textTransform: "capitalize",
        fontFamily: "WorkSans_400Regular",
      },
    });
    

export default Packages;
