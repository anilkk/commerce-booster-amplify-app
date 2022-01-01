/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Smallproductcarditemsearch(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      border="1px SOLID rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)"
      padding="7px 7px 7px 7px"
      alignItems="flex-start"
      borderRadius="8px"
      gap="4px"
      position="relative"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        width="80px"
        padding="0px 0px 0px 0px"
        position="relative"
        shrink="0"
        height="80px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        shrink="0"
        gap="0"
        width="308px"
        position="relative"
        direction="column"
        height="92px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Square"
          width="308px"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Brand Name | Part No. 234565"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Circle"
          width="308px"
          fontSize="16px"
          lineHeight="20.799999237060547px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="AMBER DECOR 60W, E27 590"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Square"
          width="308px"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Decorative lamps, lightness around "
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[2]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(16.000000946223736,113.00000086426735,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Square"
          width="308px"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="600"
          direction="column"
          children="from $45 net"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[3]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
