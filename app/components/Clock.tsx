"use client";

import { useEffect, useState } from "react";
const timeFormat = new Intl.DateTimeFormat("sv-SE", {
	hour: "2-digit",
	minute: "2-digit",
	timeZone: "Europe/Stockholm",
});

const dateFormat = new Intl.DateTimeFormat("sv-SE", {
	weekday: "long",
	day: "numeric",
	month: "long",
	timeZone: "Europe/Stockholm",
});

export default function Clock() {
	// null on the server and first client render → no hydration mismatch
	const [now, setNow] = useState<Date | null>(null);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		const tick = () => {
			const current = new Date();
			setNow(current);

			const msIntoMinute = current.getSeconds() * 1000 + current.getMilliseconds();
			timeoutId = setTimeout(tick, 60_000 - msIntoMinute);
		};

		const handleVisibility = () => {
			if (document.visibilityState === "visible") {
				clearTimeout(timeoutId);
				tick();
			}
		};

		tick();
		document.addEventListener("visibilitychange", handleVisibility);

		return () => {
			clearTimeout(timeoutId);
			document.removeEventListener("visibilitychange", handleVisibility);
		};
	}, []);

	return (
		<>
			<time dateTime={now?.toISOString()} className='block font-bold font-display text-5xl tabular-nums'>
				{now ? timeFormat.format(now) : "--:--"}
			</time>
			<p className='capitalize text-2xl text-muted'>{now ? dateFormat.format(now) : "\u00A0"}</p>
		</>
	);
}
