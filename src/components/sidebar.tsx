import React from "react";
import { Shapes, Ratio, Star, Palette } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function Sidebar() {
  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="space-y-4 pb-8">
        <div className="flex justify-cener space-x-2">
          <Shapes />
          <span className="font-semibold">Image Type</span>
        </div>
        <div className="flex space-x-2">
          <Button variant={"outline"}>Photo</Button>
          <Button variant={"outline"}>Illustration</Button>
          <Button variant={"outline"}>Vector</Button>
        </div>
      </div>
      <div className="space-y-4 pb-8">
        <div className="flex justify-cener space-x-2">
          <Ratio />
          <span className="font-semibold">Orientation</span>
        </div>
        <div className="flex space-x-2">
          <Button variant={"outline"}>Landscape</Button>
          <Button variant={"outline"}>Portrait</Button>
        </div>
      </div>
      <div className="space-y-4 pb-8">
        <div className="flex justify-cener space-x-2">
          <Palette />
          <span className="font-semibold">Colors</span>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-2">
          <button className="w-6 h-6 bg-red-400 rounded-full" />
          <button className="w-6 h-6 bg-orange-400 rounded-full" />
          <button className="w-6 h-6 bg-yellow-400 rounded-full" />
          <button className="w-6 h-6 bg-green-400 rounded-full" />
          <button className="w-6 h-6 bg-cyan-400 rounded-full" />
          <button className="w-6 h-6 bg-blue-400 rounded-full" />
          <button className="w-6 h-6 bg-purple-400 rounded-full" />
          <button className="w-6 h-6 bg-pink-400 rounded-full" />
          <button className="w-6 h-6 bg-white border rounded-full" />
          <button className="w-6 h-6 bg-gray-400 rounded-full" />
          <button className="w-6 h-6 bg-black rounded-full" />
          </div>
        </div>
      </div>
      <div className="space-y-4 pb-8">
        <div className="flex justify-cener space-x-2">
          <Star />
          <span className="font-semibold">Editor&apos;s Choice</span>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">See our favourites</Label>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
