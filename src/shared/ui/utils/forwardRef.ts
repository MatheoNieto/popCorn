// TODO: FIX THE TYPES FOR COMPONENT IN THE FORWARD REF
// @ts-nocheck
import React from "react";
import { As, PropsOf, RightJoinProps } from "../types";

export const forwardRef = <Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >,
) => React.forwardRef(component);
