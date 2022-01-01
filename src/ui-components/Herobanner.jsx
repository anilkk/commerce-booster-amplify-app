/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Herobanner(props) {
  const { heroBanner, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="40px 88px 40px 88px"
      backgroundColor="rgba(234.00000125169754,236.00000113248825,238.00000101327896,1)"
      position="relative"
      justifyContent="center"
      gap="10px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="center"
        shrink="0"
        gap="127px"
        width="1264px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          position="relative"
          shrink="0"
          gap="40px"
          direction="column"
          height="231px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            position="relative"
            shrink="0"
            gap="24px"
            direction="column"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              padding="0px 0px 0px 0px"
              color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              justifyContent="center"
              fontFamily="Basier Circle"
              width="515px"
              fontSize="36px"
              lineHeight="46.79999923706055px"
              position="relative"
              fontWeight="700"
              direction="column"
              children={heroBanner?.title}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              padding="0px 0px 0px 0px"
              color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              justifyContent="flex-start"
              fontFamily="Basier Square"
              width="408px"
              fontSize="16px"
              lineHeight="24px"
              position="relative"
              fontWeight="400"
              direction="column"
              children={heroBanner?.description}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
          <Button
            padding="10px 32px 10px 32px"
            backgroundColor="rgba(16.000000946223736,113.00000086426735,255,1)"
            alignItems="center"
            borderRadius="30px"
            shrink="0"
            display="flex"
            gap="10px"
            width="149px"
            position="relative"
            justifyContent="center"
            direction="row"
            height="48px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Button[0]")}
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
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Button[0].Flex[0]"
              )}
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
                  "Flex.Flex[0].Flex[0].Button[0].Flex[0].Flex[0]"
                )}
              >
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(255,255,255,1)"
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
                  children={heroBanner?.buttonText}
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Button[0].Flex[0].Flex[0].Text[0]"
                  )}
                ></Text>
              </Flex>
            </Flex>
          </Button>
        </Flex>
        <Image
          width="622px"
          padding="0px 0px 0px 0px"
          position="relative"
          shrink="0"
          src={heroBanner?.image}
          height="329px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
      </Flex>
    </Flex>
  );
}
