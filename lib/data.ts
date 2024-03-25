import { navigationListType, newsDataType } from './types'

export const newsData: newsDataType[] = [
	{
		id: '1',
		title: 'Фестиваль "Хан атлас"',
		text: `Известно, что Комитетом семьи и женщин с целью показать традиции, вкус, эстетические взгляды, самобытность народа в национальной одежде проводится фестиваль "Хан атлас".

		Сотрудницы ООО «Узкимёимпэкс» также приняли активное и участие на фестивале и сегодня пришли на работу не в официальной и обычной одежде, а в платьях из нашего национального адраса и атласных тканей.
		
		`,
		image:
			'https://uzkimyoimpeks.uz/uploads/news/981c3289004bf07a4d790e90d3cc1432.jpg',
		date: '28 Сентября 2023',
		link: '/',
	},
	{
		id: '2',
		title:
			'Сотрудники «Узкимёимпэкс» приняли активное участие в международном турнире «BEFIT RACE»',
		text: `На курорте Amirsoy Resort прошла международная гонка с препятствиями BEFIT RACE. В ней приняли участие более 500 любителей и профессиональных спортсменов из 10 стран мира.

		Стоит отметить, что сотрудники «Узкимёимпэкс» Артем Галстян и Дмитрий Суренин также приняли активное участие в соревнованиях и успешно преодолели дистанцию.
		
		Наша компания всегда поддерживает здоровый образ жизни.`,
		image:
			'https://uzkimyoimpeks.uz/uploads/news/3ff55bc8f90b752ff267ec989dc3dbaf.jpg',
		date: '21 Августа 2023',
		link: '/',
	},
	{
		id: '3',
		title: 'Компания «Узкимёимпэкс» предлагает на эк…',
		text: `“BIOHUMUS” – это органо-минеральное удобрение. Cодержит различное количество питательных веществ: гумус, гуматы, аминокислоты, гармоны, азот, фосфор, калий и хелатированный набор микроэлементов ( железо, марганец, молебдень, медь, цинк).

		Рекомендуются для применения в садах и овощных культурах для подкормки. Удобрение используется на различных почвах в любое время года для сельскохозяйственных и технических культур. Улучшает свойства почвы и применяется при выращивании всех видов растений в открытом и защищенном грунте на всех типах почв в сельском и личных подсобных хозяйствах.`,
		image:
			'https://uzkimyoimpeks.uz/uploads/news/5f827e9656e2059bdaeec3fd9a66974e.jpg',
		date: '31 Июля 2023',
		link: '/',
	},
]

export const navigationList: navigationListType[] = [
	{ name: 'About us', link: '#about' },
	{ name: 'Events', link: '#chakkon' },
	{ name: 'Partners', link: '#partners' },
	{ name: 'News', link: '#news' },
]


