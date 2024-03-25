import {
	Navigation,
	Hero,
	AboutUs,
	Partners,
	News,
	Footer,
	Chakkon,
} from '@components/index'

export default function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<AboutUs />
			<Chakkon />
			<Partners />
			<News />
			<Footer /> 
		</div>
	)
}
