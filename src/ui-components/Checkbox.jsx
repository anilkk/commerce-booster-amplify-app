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
import { View } from "@aws-amplify/ui-react";
export default function Checkbox(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        View: {
          width: "16px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          height: "16px",
        },
        "View.View[0]": {
          border:
            "1px SOLID rgba(207.00000286102295,210.00000268220901,213.00000250339508,1)",
          padding: "0px 0px 0px 0px",
          backgroundColor:
            "rgba(234.00000125169754,236.00000113248825,238.00000101327896,1)",
          top: "0px",
          borderRadius: "4px",
          left: "0px",
          width: "16px",
          position: "absolute",
          height: "16px",
        },
      },
      variantValues: { state: "disabled" },
    },
    {
      overrides: {
        View: {
          width: "16px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          height: "16px",
        },
        "View.View[0]": {
          border: "1px SOLID rgba(16.000000946223736,113.00000086426735,255,1)",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(16.000000946223736,113.00000086426735,255,1)",
          top: "0px",
          borderRadius: "4px",
          left: "0px",
          width: "16px",
          position: "absolute",
          height: "16px",
        },
      },
      variantValues: { state: "interminated" },
    },
    {
      overrides: {
        View: {
          width: "16px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          height: "16px",
        },
        "View.View[0]": {
          border: "1px SOLID rgba(16.000000946223736,113.00000086426735,255,1)",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(16.000000946223736,113.00000086426735,255,1)",
          top: "0px",
          borderRadius: "4px",
          left: "0px",
          width: "16px",
          position: "absolute",
          height: "16px",
        },
      },
      variantValues: { state: "checked" },
    },
    {
      overrides: {
        View: {
          width: "16px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          height: "16px",
        },
        "View.View[0]": {
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
      },
      variantValues: { state: "default" },
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
    <View
      width="16px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="16px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
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
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
    </View>
  );
}
