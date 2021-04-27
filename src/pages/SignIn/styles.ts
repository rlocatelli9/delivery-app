import styled from 'styled-components/native';

export const CustomHeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const CustomView = styled.View`
  background: #f6f5f5;
  position: absolute;
  width: 100%;
  height: 584px;
  left: 0;
  top: 280px;

  border-radius: 30px;

  /* justify-content: center; */
`;

export const CustomIcon = styled.Image`
  margin-top: 38px;
  align-self: center;
`;

export const CustomTitle = styled.Text`
  align-self: center;
  font-family: 'Roboto-Bold';
  font-size: 34px;
  line-height: 41px;
  margin-top: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.41px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CustomSubTitle = styled.Text`
  font-size: 17px;
  line-height: 25px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  text-align: center;
  letter-spacing: -0.41px;

  color: #9586a8;
`;

export const CustomTochableOpacity = styled.TouchableOpacity`
  height: 56px;
  width: 90%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background: #0bce83;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomTextButton = styled.Text`
  color: #fff;
  text-transform: uppercase;
`;

export const CustomTextDimiss = styled.Text`
  color: #9586a8;
  text-transform: uppercase;
  margin-top: 10px;
  align-self: center;
`;
