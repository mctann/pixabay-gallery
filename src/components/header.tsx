"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSearchParams } from "next/navigation";
export function Header() {
  const searchParams = useSearchParams()!;

  const FormSchema = z.object({
    search: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const params = new URLSearchParams(searchParams);
    params.set("search", data.search);

  }
  return (
    <header className="bg-white shadow-lg w-full">
      <div className="flex items-center p-4 space-x-2">
        <h1 className="text-sm md:text-xl font-bold tracking-tight text-gray-900 md:w-[400px]">
          Pixabye Gallery
        </h1>
        <div className="flex space-x-4 w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Search images" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Button type="submit">Search</Button>
          <ul className="hidden md:flex items-center justify-end space-x-8  w-full">
            <li>About</li>
            <li>Settings</li>
          </ul>
          <Button variant={"outline"} className="block md:hidden">
            <SlidersHorizontal />
          </Button>
        </div>
      </div>
    </header>
  );
}
