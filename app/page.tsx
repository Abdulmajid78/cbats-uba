import {
	Navigation,
	Hero,
	AboutUs,
	Partners,
	News,
	Footer,
	Chakkon,
	Registration
} from '@components/index'

export default function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<AboutUs />
			<Chakkon />
			<Registration/>
			<Partners />
			<News />
			<Footer /> 
		</div>
	)
}
