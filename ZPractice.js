// apple developer account kese banye 
// keytool -list -v -keystore bdrlJksFile.jks

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home

eval "$(rbenv init -)"
eval "$(rbenv init - zsh)"

export NVM_DIR="$HOME/.nvm"
  
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

export PATH="$NVM_DIR/versions/node/v20.19.2/bin:$PATH"



open -a "Android Studio"
echo $PATH

  cd android
./gradlew bundleRelease

    android/app/build/outputs/bundle/release/app-release.aab


<TextInput
  style={{ width: '80%', marginLeft: 10, fontSize: 15, color: '#000' }}
  placeholder='Enter Pin Code / Area Name'
  placeholderTextColor="#000"
  keyboardType='number-pad'
  maxLength={6}
  onChangeText={(text) => setPincode(text.replace(/[^0-9]/g, ''))}
  value={pincode}
/>

 https://play.google.com/store/apps/details?id=com.guruji.shreeramkatha
// APp Check karooo 

netstat -ano | findstr :8081
taskkill /PID 1234 /F




mkdir android\app\src\main\assets
mkdir android\app\src\main\res

npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
./gradlew assembleDebug

      ./gradlew bundleDebug


./gradlew assembleRelease
 android/app/build/outputs/bundle/release/app-release.aab
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



// ####################      Clean storage and clear Chche           #################### 


import AsyncStorage from '@react-native-async-storage/async-storage';

const clearAppData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('App storage cleared!');
  } catch (e) {
    console.error('Failed to clear app data.', e);
  }
};


// yyyyhufufnjfnfejw ------------------------
import RNFS from 'react-native-fs';
const clearCache = async () => {
  const cacheDir = RNFS.CachesDirectoryPath;
  try {
    const files = await RNFS.readDir(cacheDir);
    for (const file of files) {
      await RNFS.unlink(file.path);
    }
    console.log('Cache cleared!');
  } catch (e) {
    console.log('Error clearing cache:', e);
  }
};



import * as Keychain from 'react-native-keychain';

await Keychain.resetGenericPassword();






<Button
  title="Reset App"
  onPress={async () => {
    await clearAppData();
    await clearCache();
    // Optionally: Restart the app
  }}
/>






    import RNRestart from 'react-native-restart';
RNRestart.Restart();



############################### 





  const [loading, setLoading] = useState(false);






 <Modal
            animationType="fade"
            transparent={true}
            visible={loading}
          >
            <View
              style={{
                marginTop: 240,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(231, 231, 231,0)', backfaceVisibility: 'visible'
              }}>
              <ActivityIndicator color={"#6CC417"} size={'large'} />
              <Text style={{ color: "#6CC417", fontSize: 13, }}>
                Loading....
              </Text>
            </View>
          </Modal>





































export const SPLASH_IMAGES = {
  image1: require('../assets/images/splash/1.png'),
  image2: require('../assets/images/splash/2.png'),
  image3: require('../assets/images/splash/3.png'),
  image4: require('../assets/images/splash/4.png'),

  splash_1: [
    require('../assets/images/splash/icon_1.png'),
    require('../assets/images/splash/icon_2.png'),
    require('../assets/images/splash/icon_3.png'),
    require('../assets/images/splash/icon_4.png'),
    require('../assets/images/splash/icon_5.png'),
  ],
};

export const Gif_IMG = {
  //  require('../assets/images/loaderg.gif'),
  loadergGif: require('../assets/images/loaderg.gif'),
};
export const avatar = {
  AVATAR_01: require('../assets/images/avatar/avatar_01.png'),
  AVATAR_02: require('../assets/images/avatar/avatar_02.png'),
  AVATAR_03: require('../assets/images/avatar/avatar_03.png'),
  AVATAR_04: require('../assets/images/avatar/avatar_04.png'),
  AVATAR_05: require('../assets/images/avatar/avatar_05.png'),
};

export const LOGO = {
  logo_20_20: require('../assets/logo/logo.png'),
  logo_40_40: require('../assets/logo/logo_40_X_40.png'),
  full_logo: require('../assets/logo/full_logo.png'),
};

export const VECTOR = {};

export const IMAGES = {
  Ellipse_Gradient_Bg: require('../assets/images/Ellipse_Gradient_Bg.png'),
  Line_Gradient: require('../assets/images/Line_Gradient.png'),

  Article_Big_Image: require('../assets/images/dummy/Article_Big_Image.png'),
  Article_Small_Image: require('../assets/images/dummy/Article_Small_Image.png'),
  Foreground_Image: require('../assets/images/dummy/Foreground_Image.png'),
  TIMER_BG: require('../assets/images/background/timer_bg.png'),
  SEARCH_IMG: require('../assets/images/background/search01.png'),
};

export const ICONS = {
  AVOCADO: require('../assets/images/icons/icon_avocado.png'),
  DONUT: require('../assets/images/icons/icon_donut.png'),
  GLASS: require('../assets/images/icons/icon_glass.png'),
  subscriptionImg: require('../assets/images/icons/subscriptionImg.png'),
  arrowLeftIcon: require('../assets/images/icons/arrowLeftIcon.png'),
  arrowRightIcon: require('../assets/images/icons/arrowRightIcon.png'),

  DIVIDER_LINE: require('../assets/images/icons/dividerLine.png'),
  GOOGLE: require('../assets/images/icons/google.png'),
  FACEBOOK: require('../assets/images/icons/facebook.png'),
  APPLE: require('../assets/images/icons/apple.png'),

  BACK: require('../assets/images/icons/back.png'),
  // Gender
  MALE_ICON: require('../assets/images/gender/male.png'),
  FEMALE_ICON: require('../assets/images/gender/female.png'),
  OTHER_ICON: require('../assets/images/gender/other.png'),
  STAR_ICON: require('../assets/images/icons/star.png'),
  PROFILE_PIC: require('../assets/images/icons/ProfilePic.png'),
  EDIT_PENCIL: require('../assets/images/icons/Edit_Pencil.png'),
  // close icon
  CLOSE_ICON: require('../assets/images/icons/close_icon.png'),

  // Water
  WATER_DROP_UNFILLED_ICON: require('../assets/images/onboarding/water/water_bg.png'),
  WATER_DROP_FILLED_ICON: require('../assets/images/onboarding/water/water_fill.png'),

  // Arrow
  ARROW_POINTER: require('../assets/images/icons/arrow_pointer.png'),

  // Bottom Ruler
  BOTTOM_RULER: require('../assets/images/icons/bottom_ruler.png'),
  // Pointer
  RULER_POINTER: require('../assets/images/icons/ruler_pointer.png'),

  // VERTICAL_RULER
  VERTICAL_RULER: require('../assets/images/icons/vertical_ruler.png'),

  // Membership
  HAND: require('../assets/images/onboarding/completePayment/hand.png'),
  RED_STAR: require('../assets/images/onboarding/completePayment/red_star.png'),
  GREEN_STAR: require('../assets/images/onboarding/completePayment/green_star.png'),
  YELLOW_STAR: require('../assets/images/onboarding/completePayment/yellow_star.png'),

  PLUS: require('../assets/images/icons/plus.png'),
  MINUS: require('../assets/images/icons/minus.png'),

  // Water
  UN_FILL_WATER_GLASS: require('../assets/images/icons/un_fill_glass.png'),
  FILL_WATER_GLASS: require('../assets/images/icons/fill_glass.png'),
  Water_Next: require('../assets/images/icons/water_next.png'),

  // Arrow
  CHEVRON_LEFT: require('../assets/images/icons/Chevron_Arrow_Left.png'),
  CHEVRON_RIGHT: require('../assets/images/icons/Chevron_Arrow_Right.png'),

  ARROW_RIGHT: require('../assets/images/icons/arrow_right.png'),

  // Diagnosed
  Stethoscope: require('../assets/images/icons/stethoscope.png'),

  // target
  Target: require('../assets/images/icons/target.png'),

  // Calendar
  Calender_Arrow: require('../assets/images/icons/calender_arrow_btn.png'),

  Tick_Right: require('../assets/images/icons/tick_right.png'),

  // Settings
  DELETE: require('../assets/images/icons/icon_delete.png'),
  LOGOUT: require('../assets/images/icons/icon_logout.png'),

  LOGOUT_MODEL_SIMPLE: require('../assets/images/icons/logout_model_simbel.png'),

  WATER_DROP_ICON: require('../assets/images/icons/WaterDropIcon.png'),
};

export const DEVICE_ICON = {
  HealthApple: require('../assets/images/device/HealthApple.png'),
  HealthFitBit: require('../assets/images/device/HealthFitBit.png'),
  HealthGoogle: require('../assets/images/device/HealthGoogle.png'),
};

export const BACKGROUND_IMAGE = {
  ORANGE_GRADIENT: require('../assets/images/background/background_orange_gradient.png'),
};

export const MENU_ICON = {
  Home: require('../assets/images/MenuIcon/Menu_Home.png'),
  HomeActive: require('../assets/images/MenuIcon/Menu_Home_Active.png'),

  Update: require('../assets/images/MenuIcon/Menu_Update.png'),
  UpdateActive: require('../assets/images/MenuIcon/Menu_Update_Active.png'),

  Explore: require('../assets/images/MenuIcon/Menu_Explore.png'),
  ExploreActive: require('../assets/images/MenuIcon/Menu_Explore_Active.png'),

  PROFILE_Menu: require('../assets/images/MenuIcon/profile_icon.png'),

  Setting: require('../assets/images/MenuIcon/SettingIcon.png'),

  Weight: require('../assets/images/MenuIcon/Weight_Icon.png'),
  Activity: require('../assets/images/MenuIcon/Activity_Icon.png'),
  Sleep: require('../assets/images/MenuIcon/Sleep_Icon.png'),
  Mood: require('../assets/images/MenuIcon/Mood_Icon.png'),
};

export const MOOD = {
  Smile: require('../assets/images/mood/smile.png'),

  VERY_SAD: require('../assets/images/mood/mood_very_sad.png'),
  SAD: require('../assets/images/mood/mood_sad.png'),
  ANGRY: require('../assets/images/mood/mood_angry.png'),
  GOOD: require('../assets/images/mood/mood_good.png'),
};

export const GRAPH = {
  // SCIENCE_BASED_APPROACH: require('../assets/images/graph/Graph.png'),
  SCIENCE_BASED_APPROACH: require('../assets/images/graph/Graph_Change.png'),

  Straight_lines: require('../assets/images/onboarding/membership/Straight_lines.png'),
  Graph: require('../assets/images/onboarding/membership/graph.png'),
  Graph_line: require('../assets/images/onboarding/membership/graph_line.png'),
};

export const ANIMATIONS = {
  FIRE: require('../assets/lottie/fire.json'),
};

export const DUMMY_IMG = {
  challengeDymmy01: require('../assets/images/dummy/challengeDymmy01.png'),
  challengeDymmy02: require('../assets/images/dummy/challengeDymmy02.png'),
  challengeDymmy03: require('../assets/images/dummy/challengeDymmy03.png'),
  challengeDymmy04: require('../assets/images/dummy/challengeDymmy04.png'),
  fastingWeightDummy01: require('../assets/images/dummy/fastingWeightDummy01.png'),
  fastingWeightDummy02: require('../assets/images/dummy/fastingWeightDummy02.png'),
  fastingWeightDummy03: require('../assets/images/dummy/fastingWeightDummy03.png'),
  fastingWeightDummy04: require('../assets/images/dummy/fastingWeightDummy04.png'),
};

cd ~/Downloads/Github/PoliceHelp
rm -rf node_modules
rm -rf android/.cxx
rm -rf android/app/.cxx
rm -rf android/app/build
rm -rf android/build
rm -rf android/app/build/generated
rm -rf ~/.gradle/caches
rm -rf ~/.gradle/daemon
npm install

  
