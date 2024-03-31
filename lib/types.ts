
export type navigationListType = {
	name: string
	link: string
}

export interface Article {
	source: Source
	author: any
	title: string
	description: any
	url: string
	urlToImage: any
	publishedAt: string
	content: any
}

export interface Source {
	id: any
	name: string
}
