"use client";
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
function page() {
  return (
  <Authenticator socialProviders={['facebook', 'amazon', 'google']}>

  </Authenticator>
  );
}

export default page;
