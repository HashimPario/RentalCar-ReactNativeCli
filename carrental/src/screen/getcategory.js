import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, FlatList, Image, Button} from 'react-native';




function Getcategory(){
    
    const [category, setCategory] = useState([]);

    useEffect(() => {

        const fetchCategory = async () => {
            // const res = await fetch('http://192.168.1.104:9000/api/allgetcategory');

            const res = await fetch('http://192.168.1.104:9000/api/postbycategory/Toyota');

            const datacategory = await res.json();
        
            setCategory(datacategory);
            console.log(datacategory);
         
        };
        
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
                <Text style={styles.bioData}> {item.hotelname} </Text>
                {/* <Text style={styles.idNumber}>
                  {item._id < 10 ? `#0${item._id}` : `#{item._id}`}
                </Text> */}
              </View>
    
              <View style={styles.mainContain}>
                <Text style={styles.myName}> Rs. {item.productPrice}/- Per Hour </Text>
                <Button  title="Package Details" onPress={`ShowGallery/${item.categoryName}`}> </Button>
                
   
              </View>
              
                <View>
         
                </View>
            </View>

            
          </View>

          
        );
      };


      return (
           
        <View>
          <Text style={styles.mainHeader}>All Packages</Text>
          <FlatList
            keyExtractor={(item) => item._id}
            data={category}
            renderItem={showUserData}
            horizontal
            showsHorizontalScrollIndicator={false}
        
          />
            



        </View>

     
      );

     

    };
    
    

      




    const styles = StyleSheet.create({
      mainContainer: {
        width: "100%",
        minHeight: "100%",
        paddingVertical: 50,
        backgroundColor: "#ebedee",
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
        color: "#a18ce5",
        textAlign: "center",
        fontFamily: "WorkSans_400Regular",
        paddingVertical: 50,
      },
      imgContainer: {
        padding: 10,
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
    

export default Getcategory;
