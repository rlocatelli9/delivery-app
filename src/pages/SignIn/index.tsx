import React from 'react';
import {Image, StatusBar, SafeAreaView} from 'react-native';

import {
  CustomHeaderContainer,
  CustomView,
  CustomIcon,
  CustomTitle,
  CustomSubTitle,
  CustomTochableOpacity,
  CustomTextButton,
  CustomTextDimiss,
} from './styles';

import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/background.png';
import iconImg from '../../assets/icon.png';

const SignIn: React.FC = () => {
  StatusBar.setTranslucent(true);
  const statusBarCurrentHeight = StatusBar.currentHeight;

  return (
    <SafeAreaView>
      <CustomHeaderContainer>
        <Image
          source={logoImg}
          style={{
            marginLeft: statusBarCurrentHeight,
            marginTop: statusBarCurrentHeight,
          }}
        />
        <Image source={backgroundImg} />
      </CustomHeaderContainer>
      <CustomView>
        <CustomIcon source={iconImg} />
        <CustomTitle>Non-Contact Deliveries</CustomTitle>
        <CustomSubTitle>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </CustomSubTitle>
        <CustomTochableOpacity>
          <CustomTextButton>order now</CustomTextButton>
        </CustomTochableOpacity>
        <CustomTextDimiss>dimiss</CustomTextDimiss>
      </CustomView>
    </SafeAreaView>
  );
};

export default SignIn;
