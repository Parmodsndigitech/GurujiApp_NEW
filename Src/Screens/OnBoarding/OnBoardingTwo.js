import {Text, View} from 'react-native';
import React from 'react';
import StatusBarCom from '../../Components/StatusBarCom';
import Colors from '../../Constants/Colors';
import ImagePath from '../../Constants/ImagePath';
import FastImage from 'react-native-fast-image';
import {hp, wp} from '../../Constants/Responsive';
import ButtonCom from '../../Components/ButtonCom';
import ScreensName from '../../Navigations/ScreensName';
import styles from './styles';
import { t } from 'i18next';


const OnBoardingTwo = ({navigation}) => {
  const _next = parmod => {
    if (parmod) {
      navigation.navigate(ScreensName.ONBOARDINGTHREE);
    } else {
      navigation.navigate(ScreensName.LOGIN);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBarCom />
      <View style={styles.imgContianer}>
        <FastImage source={ImagePath.splashImg} style={styles.splashImg} />
      </View>
      <View style={styles.textContent}>
        <View style={styles.OnBoardingContainer}>
          <Text style={styles.OnBoardingTitleOne}>{t('OnBoardingTitleTwo')}</Text>
          <Text style={styles.OnBoardingParaOne}>{t('OnBoardingParaTwo')}</Text>
        </View>
        <View style={styles.dottedContianer}>
          <Text style={styles.dotted} />
          <Text
            style={[
              styles.dotted,
              {marginHorizontal: wp(2), backgroundColor: Colors.Primary},
            ]}
          />
          <Text style={styles.dotted} />
        </View>
        <View style={{alignSelf: 'center'}}>
          <ButtonCom label={t('Next')} onPress={() => _next('parmod')} />
          <ButtonCom propsContainer={styles.propsContainer} propsLabel={styles.propsLabel} label={t('Skip')} onPress={() => _next()} />
        </View>
      </View>
    </View>
  );
};

export default OnBoardingTwo;
