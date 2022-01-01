/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Tableheading(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      position="relative"
      justifyContent="center"
      gap="8px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 8px 0px 8px"
        alignSelf="stretch"
        alignItems="flex-start"
        shrink="0"
        gap="10px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Square"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Name"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        backgroundColor="rgba(16.000000946223736,113.00000086426735,255,1)"
        shrink="0"
        width="55px"
        position="relative"
        height="2px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      ></View>
    </Flex>
  );
}
