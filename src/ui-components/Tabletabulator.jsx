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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Tabletabulator(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Flex: {
          padding: "12px 16px 12px 16px",
          backgroundColor: "rgba(16.000000946223736,113.00000086426735,255,1)",
          alignItems: "center",
          borderRadius: "8px 8px 0px 0px",
          gap: "10px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
        "Flex.Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(255,255,255,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "Cart 1 (21)",
          justifyContent: "flex-start",
          fontFamily: "Basier Square",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
        },
      },
      variantValues: { state: "Active" },
    },
    {
      overrides: {
        Flex: {
          padding: "12px 16px 12px 16px",
          backgroundColor:
            "rgba(246.0000005364418,248.0000004172325,251.00000023841858,1)",
          alignItems: "center",
          borderRadius: "8px 8px 0px 0px",
          gap: "10px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
        "Flex.Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "Cart 2 (21)",
          justifyContent: "flex-start",
          fontFamily: "Basier Square",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
      },
      variantValues: { state: "Default" },
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
      padding="12px 16px 12px 16px"
      backgroundColor="rgba(16.000000946223736,113.00000086426735,255,1)"
      alignItems="center"
      borderRadius="8px 8px 0px 0px"
      gap="10px"
      position="relative"
      justifyContent="center"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Basier Square"
        fontSize="16px"
        lineHeight="24px"
        position="relative"
        fontWeight="700"
        direction="column"
        children="Cart 1 (21)"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
    </Flex>
  );
}
