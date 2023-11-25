
"use client"
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Thumbnail } from "@/components/thumbnail";
import { Photo } from "@/types/photos";
import { useSearchParams } from "next/navigation";
import { Key } from "react";

export default async function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const response = await getData(search);
  const { hits } = response.props.data;

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 container my-16">
        <Sidebar />
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4">
            {hits.map((result: Photo, index: Key) => {
              return <Thumbnail key={index} photo={result} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

async function getData(search: string | null) {
  const data = await (
    await fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${search}`
    )
  ).json();

  return {
    props: {
      data,
    },
  };
}
