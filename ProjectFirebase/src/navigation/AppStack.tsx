// import {
//   ActivityIndicator,
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SignUp from '../screen/auth/SignUp';
// import {NavigationContainer} from '@react-navigation/native';
// import Home from '../screen/Home';
// import LogIn from '../screen/auth/LogIn';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Stack = createNativeStackNavigator();
// const AppStack = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);


//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged(async user => {
//       if (user) {
//         const token = await AsyncStorage.getItem('currentUser');
//         console.log('===> token ', token);
        
//         token ? setIsAuthenticated(true) : setIsAuthenticated(false);

//         console.log('===> token', token);
//       } else {
//         await AsyncStorage.removeItem('currentUser');
//         setIsAuthenticated(false);
//       }
//     });

//     return () => unsubscribe();
//   },[]);

 

//   if (isAuthenticated === null) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }
//   return isAuthenticated ? <Mainpage /> : <AuthStack />;
// };

// function AuthStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="LogIn" component={LogIn} />
//         <Stack.Screen name="signUp" component={SignUp} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function Mainpage() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default AppStack;

// const styles = StyleSheet.create({});
