import {
	Navigation,
	Hero,
	AboutUs,
	Partners,
	News,
	Footer,
	Events,
	Registration
} from '@components/index'

export default function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<AboutUs />
			<Events />
			<Registration/>
			<Partners />
			<News />
			<Footer /> 
		</div>
	)
}
