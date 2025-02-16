import {
  Alert,
  BackHandler,
  Linking,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWapper from '../../Components/AppWapper';
import Colors from '../../Constants/Colors';
import StatusBarCom from '../../Components/StatusBarCom';
import VectorIcon from '../../Constants/VectorIcon';
import {hp, wp} from '../../Constants/Responsive';
import Fonts from '../../Constants/Fonts';
import SliderAutoPlay from '../../Components/SliderAutoPlay';
import ShareSocialMediaCom from '../../Components/ShareSocialMediaCom';
import OfferCom from '../../Components/OfferCom';
import {t} from 'i18next';
import FastImage from 'react-native-fast-image';
import ImagePath from '../../Constants/ImagePath';
import {ToastCom} from '../../Components/ToastCom';
import {ApiUrl} from '../../Utils/apiurl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeVideosTop from './HomeVideosTop';
import HomeVideosTrending from './HomeVideosTrending';
import HomeVideosLatest from './HomeVideosLatest';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import LoaderCom from '../../Components/LoaderCom';
const Home = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Api calling badely will will think for removing this
  useEffect(() => {
    _getUserData();
  }, []);
  const _getUserData = async () => {
    let token = await AsyncStorage.getItem('token').catch(err =>
      console.log(err),
    );
    try {
      setIsLoading(true);
      setIsRefreshing(true);
      const response = await fetch(ApiUrl.userGetDetailsApi, {
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
      // console.log('register success...', result?.data?.fullName);
      setUserName(result?.data?.fullName);
      setIsLoading(false);
      setIsRefreshing(false);
    } catch (error) {
      console.error(error);
      ToastCom({type: 'error', text2: result?.message});
    }
  };
  // Api calling badely will will think for removing this
    useEffect(()=>{
        setTimeout(() => {
          setIsVisible(true)
        },300);
    },[])

  // page reload for updated data calling  focuse Api  Start
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        _getUserData();
        return false;
      },
    );
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      _getUserData();
      Alert.alert('Confirm exit', 'Do you want to go back?', [
        {text: 'Cancel', style: 'cancel', onPress: () => {}},
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => navigation.dispatch(e.data.action),
        },
      ]);
    });
    return () => {
      backHandler.remove();
      navigation.removeListener('beforeRemove');
    };
  }, [navigation]);
  useFocusEffect(
    React.useCallback(() => {
      _getUserData();
      return;
    }, []),
  );
  // page reload for updated data calling  focuse Api  End
  return (
    <AppWapper containerProps={{backgroundColor: Colors.WhiteLight}}>
      <StatusBarCom
        backgroundColor={Colors.Primary}
        barStyle={'light-content'}
      />
      {/* Header Start here . */}
      {isLoading ? (
        <LoaderCom />
      ) : (
        <View style={{marginBottom: hp(7)}}>
          <View style={[styles.headerContianer]}>
            <View style={{width: '41.33%',}}>
              <Text style={styles.headrHomeTxt}>{t('Home')}</Text>
              <Text
                style={[
                  styles.headrHomeTxt,
                  styles.headrUserTxt,
                  {width: '100%'},
                ]}
                numberOfLines={1}>
                {t('Hii')}, {userName ? userName : `User`}
              </Text>
            </View>
            <View style={{width: '33.33%', alignItems: 'flex-start',}}>
              <View style={styles.gurujiOuter}>
                <FastImage
                  source={ImagePath.GurujiImg}
                  style={[styles.GurujiImg, {alignSelf: 'center'}]}
                />
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => alert('Alert')}
              style={{width: '26%',}}>
              <VectorIcon
                type={'MaterialCommunityIcons'}
                name={'bell-badge-outline'}
                size={28}
                color={Colors.White}
                style={{alignItems: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={_getUserData}
              />
            }
            style={{marginLeft: wp(4), marginBottom: hp(7)}}>
            <View style={{}}>
              <SliderAutoPlay />
            </View>
            <HomeVideosTop />
            <HomeVideosTrending />
            <HomeVideosLatest />
            <Text style={styles.FollowUsTxt}>{t('FollowUs')}</Text>
            <View
              style={{
                marginBottom: hp(5),
                marginTop: hp(1),
                marginLeft: wp(-1),
                flexDirection: 'row',
              }}>
              <ShareSocialMediaCom
                onPress={() => alert('sc-facebook')}
                type={'EvilIcons'}
                name={'sc-facebook'}
                iconContianerProps={{backgroundColor: '#337FFF'}}
              />
              <ShareSocialMediaCom
                onPress={() => alert('whatsapp')}
                type={'FontAwesome'}
                name={'whatsapp'}
                iconContianerProps={{backgroundColor: '#00D95F'}}
              />
              <ShareSocialMediaCom
                onPress={() => alert('twitter')}
                type={'AntDesign'}
                name={'twitter'}
                iconContianerProps={{backgroundColor: '#33CCFF'}}
              />
              <ShareSocialMediaCom
                onPress={() => alert('instagram')}
                type={'AntDesign'}
                name={'instagram'}
                iconContianerProps={{backgroundColor: '#A809DC'}}
              />
              <ShareSocialMediaCom
                onPress={() =>
                  Linking.openURL(
                    'https://www.youtube.com/@tvshambhusharanlataji9735/featured',
                  )
                }
                type={'AntDesign'}
                name={'youtube'}
                iconContianerProps={{backgroundColor: '#D00000'}}
              />
            </View>
          </ScrollView>
        </View>
      )}
      {/* Offer Call here write in End */}
      <OfferCom
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      />
    </AppWapper>
  );
};

export default Home;
const styles = StyleSheet.create({
  headerContianer: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headrHomeTxt: {
    fontFamily: Fonts.PoppinsMedium500,
    fontSize: hp(2),
    color: Colors.White,
  },
  headrUserTxt: {
    marginTop: hp(-1),
    fontFamily: Fonts.InterBold700,
    fontFamily: Fonts.PoppinsBold700,
    fontSize: hp(2.5),
  },
  offerContianer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.4)',
    position: 'absolute',
    height: '75%',
    width: '100%',
  },
  gurujiOuter: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(14),
    borderWidth: 2,
    borderColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GurujiImg: {
    width: wp(13),
    height: wp(13),
    marginLeft: wp(-0.3),
    marginTop: wp(-0.3),
    borderRadius: wp(5),
  },
  FollowUsTxt: {
    color: Colors.Primary,
    fontSize: hp(2.5),
    marginLeft: wp(1),
    textTransform: 'capitalize',
    fontFamily: Fonts.InterBold700,
  },
});
