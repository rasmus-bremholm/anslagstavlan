type Statuses = "pending" | "approved" | "removed";

export interface Post {
	id: number;
	title: string;
	description: string;
	name: string;
	category: string;
	status: Statuses;
	created_at: Date;
}
