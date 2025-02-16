import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Dimensions, Linking, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import Routes from './Src/Navigations/Routes';
import {Provider} from 'react-redux';
import './i18n';
import {LogBox} from 'react-native';
import Toast from 'react-native-toast-message';
import {store} from './Src/redux/store';
import NetInfo from '@react-native-community/netinfo';
import FastImage from 'react-native-fast-image';
import ImagePath from './Src/Constants/ImagePath';
import {hp} from './Src/Constants/Responsive';
import ZPractice from './ZPractice';
import Pdf from 'react-native-pdf'
import Colors from './Src/Constants/Colors';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionType, setConnectionType] = useState(null);

    const requestUserPermission=async()=>{
      const authStatus=await messaging().requestPermission()
      const enabled=authStatus===messaging.AuthorizationStatus.AUTHORIZED||messaging.AuthorizationStatus.PROVISIONAL
      if(enabled){
        console.log('Authorization status:', authStatus)
        getFcmToken()
      }
    }
const getFcmToken=async()=>{
  const token =await messaging().getToken()
  console.log('Fcm Token:..', token)
}
useEffect(()=>{
  requestUserPermission()

  const unsubscribe=messaging().onMessage(async remoteMessage=>{
    console.log('Notification received in foreground:',remoteMessage)
  })
  return unsubscribe
},[])
  // #############################
  // useEffect(()=>{
  //   requestPermissionAndroid()
  // },[])

  // const requestPermissionAndroid=async()=>{
  //   const token =await messaging().getToken();
  //   console.log('Fcm Token....',token)
  //   const graned= PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,)
  //   if(graned===PermissionsAndroid.RESULTS.GRANTED){
  //     Alert.alert("Permission Granted")
  //     // getToken()
  //     token
  //   }else{
  //     // Alert.alert("Permission Denied")
  //   }
  // }
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     onDisplayNotification(remoteMessage)
  //   });

  //   return unsubscribe;
  // }, []);


  

  // const onDisplayNotification=async(remoteMessage)=> {
  //   // Request permissions (required for iOS)
  //   // await notifee.requestPermission()

  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: remoteMessage.notification.title,
  //     body: remoteMessage.notification.body,
  //     android: {
  //       channelId,
  //       smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //       // pressAction is needed if you want the notification to open the app when pressed
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   });
  // }
  // const getToken=async()=>{
  //   const token =await messaging().getToken();
  //   console.log('Fcm Token',token)
  // }

  // #########################
  useEffect(() => {
    // setTimeout(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setConnectionType(state.type);
    });
    return () => {
      unsubscribe();
    };
    // }, -2000);
  }, []);

  LogBox.ignoreLogs(['warning']);
  LogBox.ignoreAllLogs();


  return (
    <Provider store={store}>
      {isConnected &&
      (connectionType === 'wifi' || connectionType === 'cellular') ? (
        <View style={{flex: 1}}>
          <Routes />
          <Toast />
          {/* <ZPractice /> */}
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '30%', height: hp(20)}}>
            <FastImage
              source={ImagePath.errorInternNetGif}
              style={styles.EnventImg01}
              resizeMode="contain"
            />
          </View>
          <Text style={{textAlign: 'center', fontSize: hp(2.2)}}>
            No Internet connection.
          </Text>
        </View>
      )}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  EnventImg01: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
});
