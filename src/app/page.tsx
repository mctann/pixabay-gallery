"use client"
import { Gallery } from "@/components/gallery";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();
  return (
   <Gallery searchParams={searchParams.toString()}/>
  );
}