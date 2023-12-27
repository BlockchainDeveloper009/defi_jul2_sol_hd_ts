///import { useRouter, NextRouter } from 'next/router';
"use client";
import { useSearchParams } from "next/navigation";
import { useRouter as navUseRouter} from 'next/navigation';
import React from 'react'

function CompManageWillsEdit() {
  const router = navUseRouter();
  const searchParams = useSearchParams();
 // const { willId } = router. as { willId?: string}
  return (
    <div>
      <h1>{searchParams.get("willInfo")}</h1>
      {/* <p>Hello will id, {willId || 'Invalid WIll Id'}</p> */}
    </div>
  )
}

export default CompManageWillsEdit