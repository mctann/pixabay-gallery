"use client"
import { Gallery } from "@/components/gallery";
import { useSearchParams } from "next/navigation";

type Props = {
	params: {
		myParams: (string | undefined);
	};
};

export default function SearchResults({ params: { myParams } }: Props) {
	const searchParams = useSearchParams();

	return (
		<Gallery params={myParams} searchParams={searchParams.toString()} />
	);
}
