const rtf = new Intl.RelativeTimeFormat("sv", { numeric: "auto" });

export function timeAgo(date: Date): string {
	const minutes = Math.round((new Date(date).getTime() - Date.now()) / 60000);
	if (Math.abs(minutes) < 60) return rtf.format(minutes, "minute");
	if (Math.abs(minutes) < 1440) return rtf.format(Math.round(minutes / 60), "hour");
	return rtf.format(Math.round(minutes / 1440), "day");
}
