export type newsDataType = {
	id: string
	title: string
	text: string
	image: string
	date: string
	link: string
}

export type navigationListType = {
	name: string
	link: string
}

export type testimonialsType = {
	text: string
	name: string
	image: string
	rating: 1 | 2 | 3 | 4 | 5
}

export type DataParams = {
	apiKey: string
	pageSize: number
	page: number
	query?: string
	language?: 'en' | 'ru'
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
