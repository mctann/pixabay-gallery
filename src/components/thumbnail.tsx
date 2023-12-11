import { cn, formatNumber } from "@/lib/utils";
import { Photo } from "@/types/photos";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DownloadCloud, HeartIcon } from "lucide-react";

interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  photo: Photo;
}

export function Thumbnail({ photo, className }: ThumbnailProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="overflow-hidden">
        <Image
          src={photo.webformatURL}
          alt={photo.id.toString()}
          width={photo.webformatWidth}
          height={photo.webformatHeight}
          className={cn(
            "h-auto w-full md:w-auto object-cover  rounded-md transition-all hover:scale-105 cursor-pointer"
          )}
        />
        <div className="px-2 py-4 flex items-center space-x-2 ">
          <Avatar className="w-8 h-auto">
            <AvatarImage src={photo.userImageURL} />
            <AvatarFallback>
              {photo.user.split(" ")[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold text-sm">{photo.user}</span>
            <div className="flex space-x-2">
              <div className="flex space-x-1 justify-center items-center">
                <HeartIcon size={16} />
                <span className="text-muted-background text-xs">
                {formatNumber(photo.likes)}
                </span>
              </div>
              <div className="flex space-x-1 justify-center items-center">
              <DownloadCloud size={16}/>
                <span className="text-muted-background text-xs">
                  {formatNumber(photo.downloads)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
