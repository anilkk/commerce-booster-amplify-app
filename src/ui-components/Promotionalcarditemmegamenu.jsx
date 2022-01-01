/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Promotionalcarditemmegamenu(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="301px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="80px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        border="2px SOLID rgba(16.000000946223736,113.00000086426735,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        top="0px"
        borderRadius="34px"
        left="0px"
        width="300px"
        position="absolute"
        height="80px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Basier Square"
        top="16px"
        left="60px"
        width="225px"
        fontSize="16px"
        lineHeight="24px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="48px"
        children="ELECTRICAL Grill Mastergrill SUP412 -30%"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Image
        padding="0px 0px 0px 0px"
        top="20px"
        borderRadius="29px"
        left="12px"
        width="40px"
        position="absolute"
        height="40px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
    </View>
  );
}
