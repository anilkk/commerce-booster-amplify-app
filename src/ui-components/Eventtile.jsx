/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Eventtile(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      position="relative"
      gap="0"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        width="301px"
        padding="0px 0px 0px 0px"
        position="relative"
        borderRadius="8px"
        shrink="0"
        height="170px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        border="1px SOLID rgba(246.0000005364418,248.0000004172325,251.00000023841858,1)"
        padding="15px 7px 15px 7px"
        alignSelf="stretch"
        backgroundColor="rgba(255,255,255,1)"
        borderRadius="0px 0px 8px 8px"
        shrink="0"
        gap="16px"
        position="relative"
        direction="column"
        height="276px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Basier Circle"
          width="285px"
          fontSize="20px"
          lineHeight="26px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="Name of event could be very long name"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(16.000000946223736,113.00000086426735,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Basier Square"
          width="285px"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="23.05.2021 | London, UK"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Basier Square"
          width="285px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Short text about the event. Sth like short description of what we can expect in the article. Max 4 text lines."
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[2]")}
        ></Text>
        <Button
          border="2px SOLID rgba(16.000000946223736,113.00000086426735,255,1)"
          padding="8px 30px 8px 30px"
          backgroundColor="rgba(255,255,255,1)"
          alignItems="center"
          shrink="0"
          display="flex"
          justifyContent="center"
          borderRadius="30px"
          gap="10px"
          width="149px"
          position="relative"
          direction="row"
          height="48px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Button[0]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            alignItems="center"
            shrink="0"
            gap="8px"
            position="relative"
            justifyContent="center"
            direction="row"
            height="24px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Button[0].Flex[0]")}
          >
            <Flex
              padding="0px 0px 0px 0px"
              alignItems="center"
              shrink="0"
              gap="60px"
              position="relative"
              justifyContent="center"
              direction="row"
              height="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Button[0].Flex[0].Flex[0]"
              )}
            >
              <Text
                padding="0px 0px 0px 0px"
                color="rgba(16.000000946223736,113.00000086426735,255,1)"
                textAlign="left"
                shrink="0"
                display="flex"
                justifyContent="center"
                fontFamily="Basier Square"
                fontSize="16px"
                lineHeight="24px"
                position="relative"
                fontWeight="500"
                direction="column"
                children="Know more"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Button[0].Flex[0].Flex[0].Text[0]"
                )}
              ></Text>
            </Flex>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}
