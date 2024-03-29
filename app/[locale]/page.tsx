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
import { useTranslations } from 'next-intl'


export default function Home() {

	const t = useTranslations("Index");

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
