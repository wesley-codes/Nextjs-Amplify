"use client";

import React from "react";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...config, ssr: true });

export default function AmplifyProvider({ children }) {
  return <>{children}</>;
}
