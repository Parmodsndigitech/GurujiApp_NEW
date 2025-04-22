// apple developer account kese banye 


npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
./gradlew assembleDebug


./gradlew assembleRelease




// fllter **************************************** START
APIRequest(
      config,
      (res) => {
        const approvedTrucks = res?.data?.filter(
          (truck) => truck.status === "approved"
        );
        const SavetruckNumbers = approvedTrucks.map((truck) => truck.truckNumber);
        setSaveAllTruckList(SavetruckNumbers);
        // console.log('parmod.....',res?.data)
      },
// fllter **************************************** END








//   npm install sp-react-native-in-app-updates    *************************************** Package......
  //    Update App on Playsore *************************************** START
      // HomeScreen.js or App.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SpInAppUpdates, { IAUUpdateKind } from 'sp-react-native-in-app-updates';

const HomeScreen = () => {
  useEffect(() => {
    const checkUpdate = async () => {
      const inAppUpdates = new SpInAppUpdates(true); // true = production, false = debug

      try {
        const result = await inAppUpdates.checkNeedsUpdate();

        if (result.shouldUpdate) {
          // Choose update type
          await inAppUpdates.startUpdate({
            updateType: IAUUpdateKind.FLEXIBLE, // or IMMEDIATE
          });
        }
      } catch (error) {
        console.log('Update check failed:', error);
      }
    };

    checkUpdate();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to My App</Text>
    </View>
  );
};

export default HomeScreen;
  //    Update App on Playsore *************************************** END

  
