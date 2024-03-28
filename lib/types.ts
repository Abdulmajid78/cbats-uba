
export type navigationListType = {
	name: string
	link: string
}


export type DataParams = {
	apiKey: string
	pageSize: number
	page: number
	query?: string
	language?: 'en' | 'ru' | 'uz'
	sources: string
}

export interface Root {
	status: string
	totalResults: number
	articles: Article[]
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
