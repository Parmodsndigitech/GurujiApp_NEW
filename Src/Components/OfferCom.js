import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import ImagePath from '../Constants/ImagePath';
import {hp, wp} from '../Constants/Responsive';
import Colors from '../Constants/Colors';
import Fonts from '../Constants/Fonts';
import ModalCom from './ModalCom';

const OfferCom = ({onBackdropPress, isVisible}) => {
  return (
    <ModalCom
      contianerStyle={{}}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}>
      <ImageBackground
        resizeMode="stretch"
        source={ImagePath.OfferBgImg}
        style={styles.offerImg}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onBackdropPress}
          style={styles.closeImg}>
          <FastImage source={ImagePath.OfferCloseImg} style={styles.closeImg} />
        </TouchableOpacity>
        <Text style={styles.hurryOfferTitle}>Hurry Offers!</Text>
        <Text style={styles.centerTitle}>wfoeF Eofub</Text>
        <Text style={styles.bottomTitle}>lorem lyupsem ewof ewfuEQ</Text>
        <Text onPress={()=>alert('Offer alert')} style={styles.btnGotIt}>Got it</Text>
      </ImageBackground>
    </ModalCom>
  );
};

export default OfferCom;

const styles = StyleSheet.create({
  offerImg: {
    width: wp(70),
    padding: wp(4),
    height: hp(40),
    alignItems: 'center',
    alignSelf: 'center',
  },
  closeImg: {
    width: wp(9),
    height: wp(9),
    alignSelf: 'flex-end',
  },
  hurryOfferTitle: {
    color: Colors.White,
    fontFamily: Fonts.InterBold700,
    fontSize: hp(4),
    textAlign: 'center',
  },
  centerTitle: {
    color: Colors.White,
    fontFamily: Fonts.InterBold700,
    fontSize: hp(3),
    textAlign: 'center',
    marginVertical: hp(3),
  },
  bottomTitle: {
    color: Colors.White,
    fontFamily: Fonts.InterBold700,
    fontSize: hp(1.8),
    textAlign: 'center',
  },
  btnGotIt: {
    borderWidth: 1.2,
    borderColor: Colors.White,
    textAlign: 'center',
    padding: wp(2),
    width: '80%',
    alignSelf: 'center',
    marginVertical: hp(5),
    color: Colors.White,
    fontFamily: Fonts.InterBold700,
    borderRadius: wp(1),
  },
});
