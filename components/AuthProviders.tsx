"use client";

import { getProviders, signIn} from 'next-auth/react';
import {useState} from 'react'

type Provider = {
  id: string,
  name: string,
  type: string,
  singleUrl: string,
  callbackUrl: string,
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

export default function AuthProviders() {
  const [providers, setProviders] = useState<Providers | null>(null)
  return (
    <div>
      <p>Provider</p>
    </div>
  )
}
