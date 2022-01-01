/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Notificationimportant(props) {
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
        pathData="M7.01 19.51C7.01 20.61 7.9 21.5 9 21.5C10.1 21.5 10.99 20.61 10.99 19.51L7.01 19.51ZM9 4.5C11.76 4.5 14 6.74 14 9.5L14 16.5L4 16.5L4 9.5C4 6.74 6.24 4.5 9 4.5ZM9 0C8.17 0 7.5 0.67 7.5 1.5L7.5 2.67C4.36 3.35 2 6.15 2 9.5L2 15.5L0 17.5L0 18.5L18 18.5L18 17.5L16 15.5L16 9.5C16 6.15 13.64 3.35 10.5 2.67L10.5 1.5C10.5 0.67 9.83 0 9 0ZM8 6.5L10 6.5L10 10.5L8 10.5L8 6.5ZM8 12.5L10 12.5L10 14.5L8 14.5L8 12.5Z"
        viewBox={{ minX: 0, minY: 0, width: 18, height: 21.5 }}
        color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
        top="1.5px"
        left="3px"
        width="18px"
        position="absolute"
        height="21.5px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
    </View>
  );
}
