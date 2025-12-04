import React from "react";
import BaseSpinner from "@shared/ui/components/BaseSpinner";
import { PublicNavigator } from "../public";

export const RootNavigator = () => {
  return (
    <React.Suspense fallback={<BaseSpinner />}>
      <PublicNavigator />
    </React.Suspense>
  );
};
