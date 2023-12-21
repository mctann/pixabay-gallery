import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchImageById } from "@/lib/api";
import { formatNumber } from "@/lib/utils";
import { PixabayResponse } from "@/types/photos";
import { DownloadIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const images: PixabayResponse | undefined = await fetchImageById(
    params.id.toString()
  );

  const { hits } = images ?? { hits: [] };
  const data = hits[0];


  return (
    <div className="grid md:grid-cols-3 gap-4 mx-2 md:mx-8">
      <div className="md:col-span-2">
        <Image
          src={data.largeImageURL}
          alt={data.id.toString()}
          width={data.imageWidth}
          height={data.imageHeight}
        />
      </div>

      <div>
	  <Card className="p-4 h-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Information</CardTitle>
		<div className="flex items-center space-x-2">
		<Avatar>
            <AvatarImage alt="User Avatar" src={data.userImageURL} />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h2 className="text-lg font-bold">{data.user.toUpperCase()}</h2>
      
          </div>
		</div>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Likes</h4>
          <Badge className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 hover:bg-red-300">
            <HeartIcon className="w-4 h-4 mr-2" />
            {formatNumber(data.likes)}
          </Badge>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Downloads</h4>
          <Badge className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-300">
            <DownloadIcon className="w-4 h-4 mr-2" />
			{formatNumber(data.downloads)}
          </Badge>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Views</h4>
          <Badge className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-300">
            <EyeIcon className="w-4 h-4 mr-2" />
			{formatNumber(data.views)}
          </Badge>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Comments</h4>
          <Badge className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-300">
            <MessageCircleIcon className="w-4 h-4 mr-2" />
           {formatNumber(data.comments)}
          </Badge>
        </div>
		<div className="space-y-2">
          <h4 className="text-sm font-semibold">Resolution</h4>
          <p className="text-xs text-gray-800">{data.imageWidth} x {data.imageHeight}</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Image Size</h4>
          <p className="text-xs text-gray-800">{formatNumber(data.imageSize)}B</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="w-full"><a href={data.largeImageURL} target="_blank">Download</a></Button>
      </CardFooter>
    </Card>
      </div>
    </div>
  );
}
