import * as React from 'react';
import  { useEffect } from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text,  View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screen/login';
import Signup from './src/screen/signup';
import Home from './src/home';
import Getcategory from './src/screen/getcategory';
import Mybooking from './src/screen/mybooking';
import Category from './src/screen/category';
import Packages from './src/screen/packages';
import Booking from './src/screen/booking';
import Bookingcomp from './src/screen/completebooking';



const Stack = createStackNavigator();

function App () {
 
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (


      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

      <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />  

      <Stack.Screen name="Login" component={Login} options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Verdana",
            },
            headerTitleAlign: "center",
          }}/>

      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="category" options={{headerShown: false}}component={Category} />
      <Stack.Screen name="mybooking" options={{headerShown: false}}component={Mybooking} />
      <Stack.Screen name="ShowGallery" component={Getcategory} />
      <Stack.Screen name="Car Details" component={Packages} />

      <Stack.Screen name="booking" component={Booking} />
      <Stack.Screen name="bookingcomplete" component={Bookingcomp} />


        

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

});

export default App;
