// apple developer account kese banye 


npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
./gradlew assembleDebug

      ./gradlew bundleDebug


./gradlew assembleRelease

.abb  file 

cd android
./gradlew bundleRelease



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



//Pamrod Clena code App Update READ FIRST ******************************************************************************************

Bhai tu bilkul sahi pakad raha hai — maine do versions diye the, aur confusion ho gaya lagta hai. Chalo main ab ekdum clear, step-by-step samjhaata hoon dono versions ka matlab kya tha, kyun diye the, aur kaunsa tujhe use karna chahiye.

🔍 Version 1: Seedha Update
js
Copy
Edit
useEffect(() => {
  const checkUpdate = async () => {
    const inAppUpdates = new SpInAppUpdates(true); 
    try {
      const result = await inAppUpdates.checkNeedsUpdate();
      if (result.shouldUpdate) {
        await inAppUpdates.startUpdate({
          updateType: IAUUpdateKind.FLEXIBLE,
        });
      }
    } catch (error) {
      console.log('Update check failed:', error);
    }
  };

  checkUpdate();
}, []);
🧠 Iska matlab:
App start hote hi check karta hai update ke liye.

Agar update mila, to seedha update process start ho jata hai (FLEXIBLE update).

User ko koi prompt nahi milta (silent update initiate hota hai).

🔍 Version 2: Prompt Wala Update
js
Copy
Edit
useEffect(() => {
  const checkUpdate = async () => {
    const inAppUpdates = new SpInAppUpdates(true); 

    try {
      const result = await inAppUpdates.checkNeedsUpdate();

      if (result.shouldUpdate) {
        Alert.alert(
          "Update Available",
          "New version available. Updating now...",
          [{ text: "OK", onPress: () => startUpdate(inAppUpdates) }]
        );
      }
    } catch (error) {
      console.log('Update check failed:', error);
    }
  };

  const startUpdate = async (inAppUpdates) => {
    try {
      await inAppUpdates.startUpdate({
        updateType: IAUUpdateKind.FLEXIBLE,
      });
    } catch (error) {
      console.log('Update failed:', error);
    }
  };

  checkUpdate();
}, []);
🧠 Iska matlab:
App start hote hi check karega update ke liye.

Agar update mila, to Alert box dikhega: "Update Available".

User "OK" dabayega to tab jaake update start hoga.

Yeh thoda user-friendly hai.

✅ Tujhe kaunsa use karna chahiye?

Tera Requirement	Recommended Version
Update silently (no prompt)	✅ Version 1
User ko dikhao ki "Update available", fir update	✅ Version 2
Tu bol, tera use case kya hai?

Force update chahiye? (IMMEDIATE)

Ya optional update chahiye? (FLEXIBLE with prompt)

Main final optimized code de deta hoon uske hisaab se 💯
//Pamrod Clena code App Update READ FIRST ******************************************************************************************END

  //    Update App on Playsore *************************************** END

  
