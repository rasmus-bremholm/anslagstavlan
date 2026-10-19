"use client";
import { useSyncExternalStore } from "react";
import { timeAgo } from "@/lib/time";

function subscribe(onChange: () => void) {
	const id = setInterval(onChange, 60_000);
	return () => clearInterval(id);
}

export default function TimeAgo({ date }: { date: Date }) {
	const text = useSyncExternalStore(
		subscribe,
		() => timeAgo(date),
		() => "",
	);

	return <span>{text}</span>;
}
