/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Productcarditemcheckout(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="center"
      borderRadius="8px"
      gap="16px"
      position="relative"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="center"
        shrink="0"
        gap="4px"
        position="relative"
        direction="row"
        height="66px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          width="80px"
          padding="0px 0px 0px 0px"
          position="relative"
          shrink="0"
          height="66px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
        <Flex
          padding="0px 0px 0px 0px"
          shrink="0"
          gap="8px"
          width="349px"
          position="relative"
          direction="column"
          height="56px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="center"
            fontFamily="Basier Square"
            width="369px"
            fontSize="14px"
            lineHeight="23.80000114440918px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="Brand Name | Part No. 234565"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Basier Circle"
            width="369px"
            fontSize="20px"
            lineHeight="26px"
            position="relative"
            fontWeight="700"
            direction="column"
            height="24px"
            children="AMBER DECOR Small Lamp 60W..."
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
        textAlign="center"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Basier Square"
        fontSize="14px"
        lineHeight="23.80000114440918px"
        position="relative"
        fontWeight="400"
        direction="column"
        children="Items: 123335"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="stretch"
        shrink="0"
        gap="8px"
        width="199px"
        position="relative"
        direction="column"
        height="66px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="right"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Basier Square"
          width="199px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="$70.00 net"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(16.000000946223736,113.00000086426735,255,1)"
          textAlign="right"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Basier Square"
          width="199px"
          fontSize="24px"
          lineHeight="33.599998474121094px"
          position="relative"
          fontWeight="600"
          direction="column"
          children="$120.00 gross"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[1]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
