import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Menu = () => {
  const navigation = useNavigation();

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




  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}>
        {/* <Text>Course</Text> */}
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://res.cloudinary.com/fimgcloud/image/upload/v1656693255/home_uqlwg9.png",
          }}
        />
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("mybooking")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://res.cloudinary.com/fimgcloud/image/upload/v1656759173/mybooking_el9ncx.png",
          }}
        />
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("category")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://res.cloudinary.com/fimgcloud/image/upload/v1656759173/category_etma6m.png",
          }}
        />
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => logout()}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://res.cloudinary.com/fimgcloud/image/upload/v1656758808/logout_ta08mw.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStytle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
