/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Advertisingboxwithimage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      boxShadow="0px 8px 20px rgba(0, 0, 0, 0.05000000074505806)"
      padding="0px 0px 0px 0px"
      alignItems="center"
      borderRadius="8px"
      gap="0"
      position="relative"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="84px 24px 84px 24px"
        backgroundColor="rgba(255,126.00000008940697,39.00000147521496,1)"
        borderRadius="8px 0px 0px 8px"
        shrink="0"
        gap="10px"
        position="relative"
        justifyContent="center"
        direction="column"
        height="230px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Circle"
          width="156px"
          fontSize="20px"
          lineHeight="26px"
          position="relative"
          fontWeight="700"
          direction="column"
          height="62px"
          children="New tool kits!"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <Image
        width="204px"
        padding="0px 0px 0px 0px"
        position="relative"
        borderRadius="0px 8px 8px 0px"
        shrink="0"
        height="230px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
    </Flex>
  );
}
