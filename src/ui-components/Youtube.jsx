/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Youtube(props) {
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
        pathData="M12 24C18.6353 24 24 18.6353 24 12C24 5.36471 18.6353 0 12 0C5.36471 0 0 5.36471 0 12C0 18.6353 5.36471 24 12 24Z"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
        top="0px"
        left="0px"
        width="24px"
        position="absolute"
        height="24px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Icon
        pathData="M8.32941 4.16471L4.37647 6.49412L4.37647 1.90588L8.32941 4.16471ZM12 6.28235L12 2.04706C12 2.04706 12 1.2539e-15 9.95294 1.2539e-15L2.04706 1.2539e-15C2.04706 1.2539e-15 1.2539e-15 -3.36591e-07 1.2539e-15 2.04706L1.2539e-15 6.28235C1.2539e-15 6.28235 -3.36591e-07 8.32941 2.04706 8.32941L9.88235 8.32941C9.95294 8.4 12 8.4 12 6.28235Z"
        viewBox={{ minX: 0, minY: 0, width: 12, height: 8.34954833984375 }}
        color="rgba(255,255,255,1)"
        top="7.835301399230957px"
        left="6px"
        width="12px"
        position="absolute"
        height="8.34952449798584px"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
    </View>
  );
}
