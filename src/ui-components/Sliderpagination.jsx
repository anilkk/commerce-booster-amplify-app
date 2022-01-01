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
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Sliderpagination(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Icon[2]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color:
            "rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "flex-start",
          gap: "12px",
          direction: "row",
        },
        "Flex.Icon[1]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color:
            "rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
        "Flex.Icon[0]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color: "rgba(16.000000946223736,113.00000086426735,255,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
      },
      variantValues: { state: "First page" },
    },
    {
      overrides: {
        "Flex.Icon[2]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color:
            "rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "flex-start",
          gap: "12px",
          direction: "row",
        },
        "Flex.Icon[1]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color: "rgba(16.000000946223736,113.00000086426735,255,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
        "Flex.Icon[0]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color:
            "rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
      },
      variantValues: { state: "Next pages" },
    },
    {
      overrides: {
        "Flex.Icon[2]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color: "rgba(16.000000946223736,113.00000086426735,255,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          position: "relative",
          alignItems: "flex-start",
          gap: "12px",
          direction: "row",
        },
        "Flex.Icon[1]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color:
            "rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
        "Flex.Icon[0]": {
          pathData:
            "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
          viewBox: '{"minX":0,"minY":0,"width":8,"height":8}',
          color:
            "rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)",
          shrink: "0",
          width: "8px",
          position: "relative",
          height: "8px",
        },
      },
      variantValues: { state: "Last page" },
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
      gap="12px"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Icon
        pathData="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z"
        viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
        color="rgba(16.000000946223736,113.00000086426735,255,1)"
        shrink="0"
        width="8px"
        position="relative"
        height="8px"
        {...getOverrideProps(overrides, "Flex.Icon[0]")}
      ></Icon>
      <Icon
        pathData="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z"
        viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
        color="rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)"
        shrink="0"
        width="8px"
        position="relative"
        height="8px"
        {...getOverrideProps(overrides, "Flex.Icon[1]")}
      ></Icon>
      <Icon
        pathData="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z"
        viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
        color="rgba(230.00000149011612,239.00000095367432,251.00000023841858,1)"
        shrink="0"
        width="8px"
        position="relative"
        height="8px"
        {...getOverrideProps(overrides, "Flex.Icon[2]")}
      ></Icon>
    </Flex>
  );
}
