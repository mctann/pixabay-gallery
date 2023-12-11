import { fetchImages } from "@/lib/api";
import { Photo, PixabayResponse } from "@/types/photos";
import { Thumbnail } from "./thumbnail";
import { Key } from "react";

type Props = {
	params?: string;
  searchParams?: string;
};

export async function Gallery({ params, searchParams }: Props) {
    const images: PixabayResponse | undefined = await fetchImages(params, searchParams);
    const { hits } =  images ?? { hits: [] };
    return (
        <div className="grid md:grid-cols-3 gap-4">
        {hits.map((result: Photo, index: Key) => {
        return <Thumbnail key={index} photo={result} />;
      })}

      </div>
    )
}