import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {hp, wp} from '../Constants/Responsive';
import ImagePath from '../Constants/ImagePath';
import Colors from '../Constants/Colors';
import LoaderCom from './LoaderCom';
import Fonts from '../Constants/Fonts';
import ModalCom from './ModalCom';
import {t} from 'i18next';
import ButtonCom from './ButtonCom';
import {ApiUrl} from '../Utils/apiurl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastCom} from './ToastCom';
import HeaderCom from './HeaderCom';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function SliderAutoPlay() {
  const data = [
    {
      id: 1,
      title: 'Slide 1',
      image: ImagePath.sliderImg01,
    },
    {
      id: 2,
      title: 'Slide 2',
      image: ImagePath.sliderImg02,
    },
    {
      id: 3,
      title: 'Slide 3',
      image: ImagePath.sliderImg03,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLogout, setIsLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    _getUserData();
  }, []);
  const _getUserData = async () => {
    let token = await AsyncStorage.getItem('token').catch(err =>
      console.log(err),
    );
    // console.log('lllll', token)
    try {
      setLoading(true);

      const response = await fetch(ApiUrl.getAllBannerApi, {
        method: 'Get',
        // body: fd,
        headers: {
          Accept: 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          token: token,
        },
      });
      const result = await response.json();
      // console.log('Event  success...', result?.data);
      setBanner(result?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      ToastCom({type: 'error', text2: result?.message});
    }
  };
  const autoRotate = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: nextIndex,
    });
    setCurrentIndex(nextIndex);
  };
  useEffect(() => {
    const interval = setInterval(autoRotate, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setCurrentIndex(index);
    }
  });
  const viewConfigRef = useRef({
    waitForInteraction: false,
    viewAreaCoveragePercentThreshold: 50,
  });
  const renderItems = ({item, index}) => (
    <TouchableOpacity
      key={item?._id}
      onPress={() => setIsLogout(true)}
      style={styles.carouselItem}>
      <Image source={{uri: item?.uploadedfile1}} style={styles.sliderImg} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.contianer}>
      <FlatList
        ref={flatListRef}
        data={banner}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <TouchableOpacity style={styles.innerContainer}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: currentIndex == index ? 20 : 7.5,
                height: 7.5,
                borderRadius: 10,
                backgroundColor:
                  currentIndex == index ? Colors.Primary : Colors.Gray,
                margin: wp(1),
                marginTop: -hp(6),
              }}></View>
          );
        })}
      </TouchableOpacity>

      {/* Modal Bnnaer Event   Start*/}
      <ModalCom
        contianerStyle={{justifyContent: 'flex-end', margin: 0}}
        isVisible={isLogout}
        onBackdropPress={() => setIsLogout(false)}>
        <View style={[styles.modalContainer, styles.modalLogoutContainer]}>
          {loading ? (
            <LoaderCom />
          ) : (
            <ImageBackground
              source={ImagePath.OfferBgImg}
              style={styles.backgroundImgContianer}>
              <HeaderCom
                type={'Ionicons'}
                name={'chevron-back'}
                onPress={() => setIsLogout(false)}
                propsContainer={{backgroundColor: null}}
              />
              <View
                style={{
                  flex: 0.4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.bannerTitle,
                    {fontFamily: Fonts.InterRegular400, fontSize: hp(2)},
                  ]}>
                  LOWEYWEFEWFUI EQ
                </Text>
                <Text
                  style={[
                    styles.bannerTitle,
                    {fontFamily: Fonts.InterRegular400, fontSize: hp(2)},
                  ]}>
                  lOREM lYUUPS WEFEWNOI
                </Text>
                <Text style={styles.bannerTitle}>LOWEQF AWM</Text>
              </View>
              <View style={{flex: 0.6}}>
                <ImageBackground
                  resizeMode="cover"
                  source={ImagePath.GurujiEventImg}
                  style={{
                    height: '100%',
                    justifyContent: 'flex-end',
                    width: '100%',
                    paddingHorizontal: wp(2),
                  }}>
                  <ButtonCom
                    label={t('Lorem Lyupsem')}
                    propsContainer={styles.propsContainerBtn}
                    propsLabel={styles.propsLabelTitle}
                    onPress={() =>
                      Linking.openURL(
                        'https://www.youtube.com/@tvshambhusharanlataji9735/featured',
                      )
                    }
                  />
                </ImageBackground>
              </View>
            </ImageBackground>
          )}
        </View>
      </ModalCom>
      {/* Modal Logout  End*/}
    </View>
  );
}
const styles = StyleSheet.create({
  contianer: {
    width: '98%',
    alignSelf: 'center',
    paddingBottom: hp(4),
    marginLeft: wp(-7),
  },
  innerContainer: {
    position: 'absolute',
    bottom: hp(-5),
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
    marginBottom: hp(5),
    marginLeft: wp(4),
  },
  carouselItem: {
    width: windowWidth,
    marginTop: hp(1),
    borderRadius: wp(2),
    padding: wp(1),
  },
  sliderImg: {
    width: '100%',
    height:180,
    height: hp(20),
    borderRadius: wp(2),
    // resizeMode: 'repeat',
  },
  modalContainer: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  backgroundImgContianer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  propsContainerBtn: {
    borderWidth: 1,
    borderColor: Colors.White,
    width: '50%',
    borderRadius: wp(2),
    paddingVertical: hp(1),
    alignSelf: 'center',
    marginBottom: hp(4),
  },
  modalTitle02: {
    color: Colors.Primary,
    fontFamily: Fonts.InterBold700,
    textTransform: 'capitalize',
    fontSize: hp(2.3),
    marginLeft: wp(2),
    marginTop: hp(0),
    marginBottom: hp(1),
  },
  propsLabelTitle: {
    color: Colors.Black,
    fontSize: hp(2),
    color: Colors.White,
  },
  bannerTitle: {
    textAlign: 'center',
    fontFamily: Fonts.InterBold700,
    color: Colors.White,
    lineHeight: hp(5),
    fontSize: hp(3),
  },
});
