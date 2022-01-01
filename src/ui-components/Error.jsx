/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Error(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="24px"
      padding="0px 0px 0px 0px"
      overflow="hidden"
      position="relative"
      height="24px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        pathData="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15L9 15L9 13L11 13L11 15ZM11 11L9 11L9 5L11 5L11 11Z"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
        color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
        top="2px"
        left="2px"
        width="20px"
        position="absolute"
        height="20px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
    </View>
  );
}
