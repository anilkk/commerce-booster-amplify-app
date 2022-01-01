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
export default function Tablesection(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          gap: "0",
          direction: "column",
          height: "89px",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          label: "Name could be very very long name",
          justifyContent: "flex-start",
          fontFamily: "Basier Square",
          width: "236px",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "32px 33px 32px 32px",
          alignSelf: "stretch",
          backgroundColor:
            "rgba(246.0000005364418,248.0000004172325,251.00000023841858,1)",
          alignItems: "flex-start",
          shrink: "0",
          gap: "10px",
          position: "relative",
          direction: "row",
        },
        "Flex.View[0]": {
          width: "301px",
          padding: "0px 0px 0px 0px",
          backgroundColor:
            "rgba(234.00000125169754,236.00000113248825,238.00000101327896,1)",
          position: "relative",
          shrink: "0",
          height: "1px",
        },
      },
      variantValues: { type: "default" },
    },
    {
      overrides: {
        Flex: {
          width: "301px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          gap: "0",
          direction: "column",
        },
        "Flex.Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(255,255,255,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          label: "Name could be very very long name",
          justifyContent: "flex-start",
          fontFamily: "Basier Square",
          width: "236px",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "32px 33px 32px 32px",
          alignSelf: "stretch",
          backgroundColor:
            "rgba(14.000000115484,93.00000205636024,193.00000369548798,1)",
          alignItems: "flex-start",
          shrink: "0",
          gap: "10px",
          position: "relative",
          direction: "row",
          height: "88px",
        },
        "Flex.View[0]": {
          width: "301px",
          padding: "0px 0px 0px 0px",
          backgroundColor:
            "rgba(234.00000125169754,236.00000113248825,238.00000101327896,1)",
          position: "relative",
          shrink: "0",
          height: "1px",
        },
      },
      variantValues: { type: "highlighted" },
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
      gap="0"
      direction="column"
      height="89px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="32px 33px 32px 32px"
        alignSelf="stretch"
        backgroundColor="rgba(246.0000005364418,248.0000004172325,251.00000023841858,1)"
        alignItems="flex-start"
        shrink="0"
        gap="10px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Basier Square"
          width="236px"
          fontSize="14px"
          lineHeight="23.80000114440918px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Name could be very very long name"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <View
        width="301px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(234.00000125169754,236.00000113248825,238.00000101327896,1)"
        position="relative"
        shrink="0"
        height="1px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      ></View>
    </Flex>
  );
}
