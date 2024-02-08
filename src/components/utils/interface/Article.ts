type Source = {
	id: string | null;
	name: string;
};

export type ArticleData = {
	author: string;
	content: string;
	description: string;
	publishedAt: string; // ISOString Date Format
	source: Source;
	title: string;
	url: string;
	urlToImage: string;
};
