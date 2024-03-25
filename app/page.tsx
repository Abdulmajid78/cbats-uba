import {
	Navigation,
	Hero,
	AboutUs,
	Partners,
	News,
	Footer,
	Chakkon,
	Testimonials,
} from '@components/index'

export default function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<AboutUs />
			<Testimonials/>
			<Chakkon />
			<Partners />
			<News />
			<Footer />
		</div>
	)
}
