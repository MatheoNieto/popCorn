import useHttpInterceptor from "@shared/services/api/intecerptors";
import React from "react";

const HttpRequestInterceptor = ({ children }: React.PropsWithChildren) => {
  useHttpInterceptor();
  return children as React.ReactElement;
};

export default HttpRequestInterceptor;
