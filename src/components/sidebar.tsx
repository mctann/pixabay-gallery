"use client";
import React, { useState } from "react";
import { Shapes, Ratio, Palette } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // image type
  const [isPhoto, setIsPhoto] = useState(false);
  const [isIllustration, setIsIllustration] = useState(false);
  const [isVector, setIsVector] = useState(false);

  // orientation
  const [isLandscape, setIsLandscape] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  const handleQueryParams = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (value !== "") {
      current.set(key, value);
    } else {
      current.delete(key);
    }

    const search = current.toString();
    // Push the updated URL with the modified query parameters
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const handleButtonClick = (key: string, value: string) => {
    let queryParamsValue = "";
    // image type
    if (key === "image-type") {
      if (value === "photo") {
        queryParamsValue = !isPhoto ? "photo" : "";
        setIsPhoto((prev) => !prev);
        setIsIllustration(false);
        setIsVector(false);
      } else if (value === "illustration") {
        queryParamsValue = !isIllustration ? "illustration" : "";
        setIsIllustration((prev) => !prev);
        setIsPhoto(false);
        setIsVector(false);
      } else if (value === "vector") {
        queryParamsValue = !isVector ? "vector" : "";
        setIsVector((prev) => !prev);
        setIsPhoto(false);
        setIsIllustration(false);
      }
    } else if (key === "orientation") {
      if (value === "landscape") {
        queryParamsValue = !isLandscape ? "landscape" : "";
        setIsLandscape((prev) => !prev);
        setIsPortrait(false);
      } else if (value === "portrait") {
        queryParamsValue = !isPortrait ? "portrait" : "";
        setIsPortrait((prev) => !prev);
        setIsLandscape(false);
      }
    } else if (key === "colors"){
      queryParamsValue = value;
    }

    handleQueryParams(key, queryParamsValue);
  };

  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="space-y-4 pb-8">
        <div className="flex justify-cener space-x-2">
          <Shapes />
          <span className="font-semibold">Image Type</span>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={"outline"}
            onClick={() => handleButtonClick("image-type", "photo")}
            className={` ${
              isPhoto
                ? "bg-primary text-white"
                : "border-gray-300 text-gray-700"
            } `}
          >
            Photo
          </Button>
          <Button
            variant={"outline"}
            onClick={() => handleButtonClick("image-type", "illustration")}
            className={` ${
              isIllustration
                ? "bg-primary text-white"
                : "border-gray-300 text-gray-700"
            } `}
          >
            Illustration
          </Button>
          <Button
            variant={"outline"}
            onClick={() => handleButtonClick("image-type", "vector")}
            className={` ${
              isVector
                ? "bg-primary text-white"
                : "border-gray-300 text-gray-700"
            } `}
          >
            Vector
          </Button>
        </div>
      </div>
      <div className="space-y-4 pb-8">
        <div className="flex justify-cener space-x-2">
          <Ratio />
          <span className="font-semibold">Orientation</span>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={"outline"}
            onClick={() => handleButtonClick("orientation", "landscape")}
            className={` ${
              isLandscape
                ? "bg-primary text-white"
                : "border-gray-300 text-gray-700"
            } `}
          >
            Landscape
          </Button>
          <Button
            variant={"outline"}
            onClick={() => handleButtonClick("orientation", "portrait")}
            className={` ${
              isPortrait
                ? "bg-primary text-white"
                : "border-gray-300 text-gray-700"
            } `}
          >
            Portrait
          </Button>
        </div>
      </div>
      <div className="space-y-4 pb-8">
        <div className="flex justify-cener space-x-2">
          <Palette />
          <span className="font-semibold">Colors</span>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-2">
            <button
              className="w-6 h-6 bg-red-400 rounded-full"
              onClick={() => handleButtonClick("colors", "red")}
            />
            <button
              className="w-6 h-6 bg-orange-400 rounded-full"
              onClick={() => handleButtonClick("colors", "orange")}
            />
            <button
              className="w-6 h-6 bg-yellow-400 rounded-full"
              onClick={() => handleButtonClick("colors", "yellow")}
            />
            <button
              className="w-6 h-6 bg-green-400 rounded-full"
              onClick={() => handleButtonClick("colors", "green")}
            />
            <button
              className="w-6 h-6 bg-cyan-400 rounded-full"
              onClick={() => handleButtonClick("colors", "turqoise")}
            />
            <button
              className="w-6 h-6 bg-blue-400 rounded-full"
              onClick={() => handleButtonClick("colors", "blue")}
            />
            <button
              className="w-6 h-6 bg-purple-400 rounded-full"
              onClick={() => handleButtonClick("colors", "lilac")}
            />
            <button
              className="w-6 h-6 bg-pink-400 rounded-full"
              onClick={() => handleButtonClick("colors", "pink")}
            />
            <button
              className="w-6 h-6 bg-white border rounded-full"
              onClick={() => handleButtonClick("colors", "white")}
            />
            <button
              className="w-6 h-6 bg-gray-400 rounded-full"
              onClick={() => handleButtonClick("colors", "gray")}
            />
            <button
              className="w-6 h-6 bg-black rounded-full"
              onClick={() => handleButtonClick("colors", "black")}
            />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
