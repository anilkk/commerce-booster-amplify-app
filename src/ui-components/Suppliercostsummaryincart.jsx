/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Suppliercostsummaryincart(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="12px 12px 12px 12px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="flex-start"
      borderRadius="8px"
      gap="20px"
      position="relative"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="stretch"
        shrink="0"
        gap="4px"
        position="relative"
        justifyContent="center"
        direction="column"
        height="52px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(16.000000946223736,113.00000086426735,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Circle"
          width="122px"
          fontSize="20px"
          lineHeight="26px"
          position="relative"
          fontWeight="700"
          direction="column"
          height="24px"
          children="Supplier 1"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Basier Square"
          width="122px"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Items: 23"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        grow="1"
        alignItems="stretch"
        gap="4px"
        width="194px"
        position="relative"
        basis="194px"
        justifyContent="center"
        direction="column"
        height="52px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="16px"
          width="162px"
          position="relative"
          justifyContent="flex-end"
          direction="row"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
            textAlign="right"
            shrink="0"
            display="flex"
            justifyContent="center"
            fontFamily="Basier Square"
            width="83px"
            fontSize="14px"
            lineHeight="23.80000114440918px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="Price net:"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
            textAlign="right"
            shrink="0"
            display="flex"
            justifyContent="center"
            fontFamily="Basier Square"
            width="63px"
            fontSize="14px"
            lineHeight="23.80000114440918px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="$150.00"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[1]")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="8px"
          width="162px"
          position="relative"
          justifyContent="flex-end"
          direction="row"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(16.000000946223736,113.00000086426735,255,1)"
            textAlign="right"
            shrink="0"
            display="flex"
            justifyContent="center"
            fontFamily="Basier Square"
            width="83px"
            fontSize="14px"
            lineHeight="23.80000114440918px"
            position="relative"
            fontWeight="600"
            direction="column"
            children="Price gross:"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(16.000000946223736,113.00000086426735,255,1)"
            textAlign="right"
            shrink="0"
            display="flex"
            justifyContent="center"
            fontFamily="Basier Square"
            width="71px"
            fontSize="14px"
            lineHeight="23.80000114440918px"
            position="relative"
            fontWeight="600"
            direction="column"
            children="$175.00"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Text[1]")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
