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
  
