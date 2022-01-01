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
import { Icon, View } from "@aws-amplify/ui-react";
export default function Colorpicker(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.Icon[1]": {
          pathData:
            "M23.1111 11.5556C23.1111 17.9375 17.9375 23.1111 11.5556 23.1111C5.1736 23.1111 0 17.9375 0 11.5556C0 5.1736 5.1736 0 11.5556 0C17.9375 0 23.1111 5.1736 23.1111 11.5556Z",
          viewBox:
            '{"minX":0,"minY":0,"width":23.111328125,"height":23.111083984375}',
          color:
            "rgba(53.07187378406525,82.32039391994476,235.87500303983688,1)",
          top: "4.44444465637207px",
          left: "4.44444465637207px",
          width: "23.11111068725586px",
          position: "absolute",
          height: "23.11111068725586px",
        },
        View: {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          height: "32px",
        },
        "View.Icon[0]": {
          pathData:
            "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          viewBox: '{"minX":0,"minY":0,"width":32,"height":32}',
          color:
            "rgba(207.00000286102295,210.00000268220901,213.00000250339508,1)",
          top: "0px",
          left: "0px",
          width: "32px",
          position: "absolute",
          height: "32px",
        },
      },
      variantValues: { type: "Default" },
    },
    {
      overrides: {
        "View.Icon[1]": {
          pathData:
            "M23.1111 11.5556C23.1111 17.9375 17.9375 23.1111 11.5556 23.1111C5.1736 23.1111 0 17.9375 0 11.5556C0 5.1736 5.1736 0 11.5556 0C17.9375 0 23.1111 5.1736 23.1111 11.5556Z",
          viewBox:
            '{"minX":0,"minY":0,"width":23.111328125,"height":23.111083984375}',
          color:
            "rgba(53.07187378406525,82.32039391994476,235.87500303983688,1)",
          top: "4.44444465637207px",
          left: "4.44444465637207px",
          width: "23.11111068725586px",
          position: "absolute",
          height: "23.11111068725586px",
        },
        View: {
          width: "32px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          height: "32px",
        },
        "View.Icon[0]": {
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
      variantValues: { type: "Selected" },
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
      width="32px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="32px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        pathData="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
        viewBox={{ minX: 0, minY: 0, width: 32, height: 32 }}
        color="rgba(207.00000286102295,210.00000268220901,213.00000250339508,1)"
        top="0px"
        left="0px"
        width="32px"
        position="absolute"
        height="32px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Icon
        pathData="M23.1111 11.5556C23.1111 17.9375 17.9375 23.1111 11.5556 23.1111C5.1736 23.1111 0 17.9375 0 11.5556C0 5.1736 5.1736 0 11.5556 0C17.9375 0 23.1111 5.1736 23.1111 11.5556Z"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 23.111328125,
          height: 23.111083984375,
        }}
        color="rgba(53.07187378406525,82.32039391994476,235.87500303983688,1)"
        top="4.44444465637207px"
        left="4.44444465637207px"
        width="23.11111068725586px"
        position="absolute"
        height="23.11111068725586px"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
    </View>
  );
}
