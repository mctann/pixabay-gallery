import { Gallery } from "@/components/gallery";

type Props = {
	params: {
		myParams: (string | undefined)[];
	};
};

export default function SearchResults({ params: { myParams } }: Props) {
	return (
		<Gallery params={myParams} />
	);
}
