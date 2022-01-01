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
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Checkbox from "./Checkbox";
export default function Checkboxfield(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].Checkbox[0].View[0]": {
          border: "1px SOLID rgba(16.000000946223736,113.00000086426735,255,1)",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(255,255,255,1)",
          top: "0px",
          borderRadius: "4px",
          left: "0px",
          width: "16px",
          position: "absolute",
          height: "16px",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          gap: "0",
          width: "253px",
          position: "relative",
          justifyContent: "space-between",
          direction: "row",
          height: "24px",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "Subcategory 2",
          justifyContent: "center",
          fontFamily: "Basier Square",
          width: "166px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0].Checkbox[0]": {
          width: "16px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "16px",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          position: "relative",
          direction: "row",
          height: "24px",
        },
        "Flex.Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)",
          textAlign: "right",
          shrink: "0",
          display: "flex",
          label: "149",
          justifyContent: "center",
          fontFamily: "Basier Square",
          width: "63px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
      },
      variantValues: { type: "Text" },
    },
    {
      overrides: {
        "Flex.Flex[0].Checkbox[0].View[0]": {
          border: "1px SOLID rgba(16.000000946223736,113.00000086426735,255,1)",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(255,255,255,1)",
          top: "0px",
          borderRadius: "4px",
          left: "0px",
          width: "16px",
          position: "absolute",
          height: "16px",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          gap: "0",
          width: "253px",
          position: "relative",
          justifyContent: "space-between",
          direction: "row",
          height: "20px",
        },
        "Flex.Flex[0].Checkbox[0]": {
          width: "16px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "16px",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          position: "relative",
          direction: "row",
          height: "20px",
        },
        "Flex.Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)",
          textAlign: "right",
          shrink: "0",
          display: "flex",
          label: "149",
          justifyContent: "center",
          fontFamily: "Basier Square",
          width: "113px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
      },
      variantValues: { type: "Icons" },
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
      alignItems="center"
      gap="0"
      width="253px"
      position="relative"
      justifyContent="space-between"
      direction="row"
      height="24px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="center"
        shrink="0"
        gap="8px"
        position="relative"
        direction="row"
        height="24px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Checkbox
          width="16px"
          padding="0px 0px 0px 0px"
          position="relative"
          shrink="0"
          height="16px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Checkbox[0]")}
        >
          <View
            border="1px SOLID rgba(16.000000946223736,113.00000086426735,255,1)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            top="0px"
            borderRadius="4px"
            left="0px"
            width="16px"
            position="absolute"
            height="16px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Checkbox[0].View[0]")}
          ></View>
        </Checkbox>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Square"
          width="166px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Subcategory 2"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)"
        textAlign="right"
        shrink="0"
        display="flex"
        justifyContent="center"
        fontFamily="Basier Square"
        width="63px"
        fontSize="16px"
        lineHeight="24px"
        position="relative"
        fontWeight="400"
        direction="column"
        children="149"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
    </Flex>
  );
}
