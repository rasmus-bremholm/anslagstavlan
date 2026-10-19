// ponytail: category strings assumed to match the DB values, unknown ones fall back to orange
const categoryBg: Record<string, string> = {
	"Låna & byta": "bg-cat-lana",
	Grupparbete: "bg-cat-grupp",
	"Köp, sälj & skänk": "bg-cat-kop",
};

export const categoryColor = (category: string) => categoryBg[category] ?? "bg-cat-kop";
