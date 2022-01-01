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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Step(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          direction: "column",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(16.000000946223736,113.00000086426735,255,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          label: "Billing & Shipping Address",
          justifyContent: "center",
          fontFamily: "Basier Square",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "relative",
          fontWeight: "600",
          direction: "column",
        },
        "Flex.Flex[0].View[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)",
          textAlign: "center",
          display: "flex",
          label: "1",
          justifyContent: "center",
          fontFamily: "Basier Square",
          top: "4px",
          left: "13px",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "absolute",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          width: "172px",
          position: "relative",
          direction: "column",
        },
        "Flex.Flex[0].View[0]": {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "32px",
        },
        "Flex.Flex[0].View[0].Icon[0]": {
          pathData:
            "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          viewBox: '{"minX":0,"minY":0,"width":32,"height":32}',
          color: "rgba(255,255,255,1)",
          top: "0px",
          left: "0px",
          width: "32px",
          position: "absolute",
          height: "32px",
        },
      },
      variantValues: { state: "Active", text: "With text" },
    },
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          direction: "column",
        },
        "Flex.Flex[0].View[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)",
          textAlign: "center",
          display: "flex",
          label: "1",
          justifyContent: "center",
          fontFamily: "Basier Square",
          top: "4px",
          left: "13px",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "absolute",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          width: "32px",
          position: "relative",
          direction: "column",
        },
        "Flex.Flex[0].View[0]": {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "32px",
        },
        "Flex.Flex[0].View[0].Icon[0]": {
          pathData:
            "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          viewBox: '{"minX":0,"minY":0,"width":32,"height":32}',
          color: "rgba(255,255,255,1)",
          top: "0px",
          left: "0px",
          width: "32px",
          position: "absolute",
          height: "32px",
        },
      },
      variantValues: { state: "Active", text: "No text" },
    },
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          direction: "column",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          label: "Billing & Shipping Address",
          justifyContent: "center",
          fontFamily: "Basier Square",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0].View[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)",
          textAlign: "center",
          display: "flex",
          label: "1",
          justifyContent: "center",
          fontFamily: "Basier Square",
          top: "4px",
          left: "13px",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "absolute",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          width: "174px",
          position: "relative",
          direction: "column",
        },
        "Flex.Flex[0].View[0]": {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "32px",
        },
        "Flex.Flex[0].View[0].Icon[0]": {
          pathData:
            "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          viewBox: '{"minX":0,"minY":0,"width":32,"height":32}',
          color: "rgba(255,255,255,1)",
          top: "0px",
          left: "0px",
          width: "32px",
          position: "absolute",
          height: "32px",
        },
      },
      variantValues: { state: "Disactive", text: "With text" },
    },
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          direction: "column",
        },
        "Flex.Flex[0].View[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)",
          textAlign: "center",
          display: "flex",
          label: "1",
          justifyContent: "center",
          fontFamily: "Basier Square",
          top: "4px",
          left: "13px",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "absolute",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          width: "32px",
          position: "relative",
          direction: "column",
        },
        "Flex.Flex[0].View[0]": {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "32px",
        },
        "Flex.Flex[0].View[0].Icon[0]": {
          pathData:
            "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          viewBox: '{"minX":0,"minY":0,"width":32,"height":32}',
          color: "rgba(255,255,255,1)",
          top: "0px",
          left: "0px",
          width: "32px",
          position: "absolute",
          height: "32px",
        },
      },
      variantValues: { state: "Disabled", text: "No text" },
    },
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          direction: "column",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(16.000000946223736,113.00000086426735,255,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          label: "Billing & Shipping Address",
          justifyContent: "center",
          fontFamily: "Basier Square",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "relative",
          fontWeight: "600",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          width: "172px",
          position: "relative",
          direction: "column",
        },
        "Flex.Flex[0].View[0]": {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "32px",
        },
        "Flex.Flex[0].View[0].Icon[0]": {
          pathData:
            "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          viewBox: '{"minX":0,"minY":0,"width":32,"height":32}',
          color: "rgba(16.000000946223736,113.00000086426735,255,1)",
          top: "0px",
          left: "0px",
          width: "32px",
          position: "absolute",
          height: "32px",
        },
      },
      variantValues: { state: "Done", text: "With text" },
    },
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          shrink: "0",
          gap: "8px",
          width: "32px",
          position: "relative",
          direction: "column",
        },
        "Flex.Flex[0].View[0]": {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "32px",
        },
        "Flex.Flex[0].View[0].Icon[0]": {
          pathData:
            "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          viewBox: '{"minX":0,"minY":0,"width":32,"height":32}',
          color: "rgba(16.000000946223736,113.00000086426735,255,1)",
          top: "0px",
          left: "0px",
          width: "32px",
          position: "absolute",
          height: "32px",
        },
      },
      variantValues: { state: "Done", text: "No text" },
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
      alignItems="center"
      justifyContent="center"
      gap="8px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="center"
        shrink="0"
        gap="8px"
        width="172px"
        position="relative"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <View
          width="32px"
          padding="0px 0px 0px 0px"
          position="relative"
          shrink="0"
          height="32px"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[0]")}
        >
          <Icon
            pathData="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
            viewBox={{ minX: 0, minY: 0, width: 32, height: 32 }}
            color="rgba(255,255,255,1)"
            top="0px"
            left="0px"
            width="32px"
            position="absolute"
            height="32px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].Icon[0]")}
          ></Icon>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
            textAlign="center"
            display="flex"
            justifyContent="center"
            fontFamily="Basier Square"
            top="4px"
            left="13px"
            fontSize="14px"
            lineHeight="23.80000114440918px"
            position="absolute"
            fontWeight="400"
            direction="column"
            children="1"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].Text[0]")}
          ></Text>
        </View>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(16.000000946223736,113.00000086426735,255,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="center"
          fontFamily="Basier Square"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="600"
          direction="column"
          children="Billing & Shipping Address"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
