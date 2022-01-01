/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Breadcrumbsdots(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="11px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="21px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)"
        textAlign="left"
        display="flex"
        letterSpacing="0px"
        justifyContent="flex-start"
        fontFamily="Mulish"
        top="0px"
        left="0px"
        fontSize="14px"
        lineHeight="21px"
        position="absolute"
        fontWeight="600"
        direction="column"
        children="..."
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
