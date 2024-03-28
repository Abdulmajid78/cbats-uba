import {
	Navigation,
	Hero,
	AboutUs,
	Speakers,
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
			<Speakers />
			<Registration/>
			<Partners />
			<News />
			<Footer /> 
		</div>
	)
}
