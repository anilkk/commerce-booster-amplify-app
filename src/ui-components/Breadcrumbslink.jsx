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
export default function Breadcrumbslink(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "flex-start",
          gap: "10px",
          direction: "row",
        },
        "Flex.Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(115.00000074505806,123.0000002682209,125.00000014901161,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "Link 1",
          justifyContent: "flex-start",
          fontFamily: "Basier Square",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
      },
      variantValues: { state: "Inactive" },
    },
    {
      overrides: {
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "flex-start",
          gap: "10px",
          direction: "row",
        },
        "Flex.Text[0]": {
          padding: "0px 0px 0px 0px",
          color:
            "rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "Link 1",
          justifyContent: "flex-start",
          fontFamily: "Basier Square",
          fontSize: "14px",
          lineHeight: "23.80000114440918px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
      },
      variantValues: { state: "Active" },
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
      alignItems="flex-start"
      gap="10px"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(12.000000234693289,12.000000234693289,12.000000234693289,1)"
        textAlign="left"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Basier Square"
        fontSize="14px"
        lineHeight="23.80000114440918px"
        position="relative"
        fontWeight="400"
        direction="column"
        children="Link 1"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
    </Flex>
  );
}
