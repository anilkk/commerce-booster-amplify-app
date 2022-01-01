/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Categorytile(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          borderRadius: "8px",
          gap: "0",
          direction: "column",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(255,255,255,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          label: "Photovoltaics",
          justifyContent: "center",
          fontFamily: "Basier Circle",
          width: "253px",
          fontSize: "20px",
          lineHeight: "26px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
          height: "26px",
        },
        "Flex.Flex[0]": {
          padding: "24px 24px 24px 24px",
          backgroundColor: "rgba(16.000000946223736,113.00000086426735,255,1)",
          alignItems: "flex-start",
          borderRadius: "0px 0px 8px 8px",
          shrink: "0",
          gap: "10px",
          width: "301px",
          position: "relative",
          direction: "row",
        },
        "Flex.Image[0]": {
          width: "301px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          borderRadius: "8px 8px 0px 0px",
          shrink: "0",
          height: "301px",
        },
      },
      variantValues: { usage: "Home Page" },
    },
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          gap: "8px",
          direction: "column",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "Photovoltaics ",
          justifyContent: "flex-start",
          fontFamily: "Basier Circle",
          width: "301px",
          fontSize: "20px",
          lineHeight: "26px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
        },
        "Flex.Flex[0]": {
          width: "301px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          gap: "8px",
          direction: "column",
        },
        "Flex.Image[0]": {
          width: "301px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          borderRadius: "8px",
          shrink: "0",
          height: "301px",
        },
      },
      variantValues: { usage: "Category page" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      padding="0px 0px 0px 0px"
      position="relative"
      borderRadius="8px"
      gap="0"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        width="301px"
        padding="0px 0px 0px 0px"
        position="relative"
        borderRadius="8px 8px 0px 0px"
        shrink="0"
        height="301px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(16.000000946223736,113.00000086426735,255,1)"
        alignItems="flex-start"
        borderRadius="0px 0px 8px 8px"
        shrink="0"
        gap="10px"
        width="301px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Circle"
          width="253px"
          fontSize="20px"
          lineHeight="26px"
          position="relative"
          fontWeight="700"
          direction="column"
          height="26px"
          children="Photovoltaics"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
