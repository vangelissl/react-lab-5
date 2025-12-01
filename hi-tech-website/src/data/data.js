export const foundersList = [
	{
		name: 'Maria Stashenko',
		role: 'Founder & Head of Product Innovation',
		background: '3+ years in software enginering, student at KNU',
		isFounder: true
	},
	{
		name: 'Alex Carter',
		role: 'CEO',
		background: '10+ years in cybersecurity, ex-Google',
		isFounder: false
	},
	{
		name: 'Sophia Lee',
		role: 'CTO',
		background: 'PhD in AI, led research at MIT',
		isFounder: false
	},
	{
		name: 'David Krasinski',
		role: 'COO',
		background: 'Operations strategist, ex-Microsoft',
		isFounder: false
	},
	{
		name: 'Maria Rossi',
		role: 'CFO',
		background: 'Finance expert, worked at Goldman Sachs',
		isFounder: false
	}
]

export const modelsList = [
	{
		name: 'SAU-03-Eye',
		lethal: true,
		nonLethal: true,
		sexual: true,
		harrassment: true,
		theft: true,
		propertyDamage: true
	},
	{
		name: 'SI-01-Watcher',
		lethal: true,
		nonLethal: true,
		sexual: true,
		harrassment: true,
		theft: false,
		propertyDamage: false
	},
	{
		name: 'QU-16-Spectre',
		lethal: true,
		nonLethal: true,
		sexual: false,
		harrassment: false,
		theft: false,
		propertyDamage: false
	},
	{
		name: 'RM-Solo',
		lethal: true,
		nonLethal: false,
		sexual: false,
		harrassment: false,
		theft: false,
		propertyDamage: false
	}
]

export const projectsList = [
	{
		id: 'kyiv-project',
		name: 'Safe Kyiv Initiative',
		country: 'Ukraine',
		features: [
			'500 connected cameras across public areas',
			'24/7 monitoring center',
			'Instant police alerts',
			'Data stored for 30 days', 
			'Cloud-based infrastructure'
		],
		img: '/images/cities/Kyiv.png'
	},
	{
		id: 'warsaw-project',
		name: 'Secure Warsaw Program',
		country: 'Poland',
		features: [
			'200 connected cameras in transport system',
			'Aggressive behavior detection',
			'Automatic incident reports',
			'Mobile app integration',
			'Centralized management'
		],
		img: '/images/cities/Warsaw.png'
	}, 
	{
		id: 'berlin-project',
		name: 'Berlin Safety Net',
		country: 'Germany',
		features: [
			'300 connected cameras in parks and metro',
			'Real-time violence detection',
			'Accuracy above 97%',
			'GDPR-compliant privacy measures',
			'Email and SMS alerts'
		],
		img: '/images/cities/Berlin.png'
	},
	{
		id: 'london-project',
		name: 'London Guardian Network',
		country: 'United Kingdom',
		features: [
			'400 connected cameras in tourist zones',
			'Violence hotspot mapping',
			'Police dashboard access',
			'Multilingual reporting',
			'Weekly safety analytics'
		],
		img: '/images/cities/London.png'
	},
	{
		id: 'toronto-project',
		name: 'Safe Toronto Vision',
		country: 'Canada',
		features: [
			'Full downtown CCTV integration',
			'Bilingual interface (English/French)',
			'Behavior anomaly detection',
			'Secure encrypted connections',
			'Local server caching'
		],
		img: '/images/cities/Toronto.png'
	},
	{
		id: 'tokyo-project',
		name: 'Tokyo City Shield',
		country: 'Japan',
		features: [
			'Coverage of metro stations and public squares',
			'Multi-language support',
			'Crowd aggression detection',
			'Event-specific monitoring',
			'Automated summary reports'
		],
		img: '/images/cities/tokyo.png'
	},
	{
		id: 'paris-project',
		name: 'Paris Urban Safety Grid',
		country: 'France',
		features: [
			'Historical trend analysis',
			'Integration with police command center',
			'Centralized access permissions',
			'Violence escalation prediction',
			'Secure cloud hosting'
		],
		img: '/images/cities/Paris.png'
	},
	{
		id: 'new-york-city-project',
		name: 'New York City Safety Program',
		country: 'United States',
		features: [
			'10,000 schools connected accross the country',
			'Real-time alerts to NYPD',
			'Large-scale CCTV feed processing',
			'Geo-tagging of incidents',
			'High availability servers'
		],
		img: '/images/cities/New York.png'
	},
	{
		id: 'madrid-project',
		name: 'Madrid Smart Safety',
		country: 'Spain',
		features: [
			'Smart integration with municipal cameras',
			'AI learning from local data',
			'Encrypted incident storage',
			'Customizable reporting tools',
			'Public safety dashboard'
		],
		img: '/images/cities/Madrid.png'
	},
	{
		id: 'stockholm-project',
		name: 'Stockholm Safe Futurey',
		country: 'Sweden',
		features: [
			'City-wide deployment across districts',
			'Cloud + on-prem hybrid servers',
			'Swedish/Enlish interface',
			'Advance predictive modeling',
			'Automated law enforcement dispatch'
		],
		img: '/images/cities/Stockholm.png'
	},
]

export const testimonialsList = [
	{
		projectId: 'kyiv-project',
		name: 'Safe Kyiv Initiative',
		text: `Our partnership has brought unprecedented efficiency to our city's security
						infrastructure.`,
		author: 'Deputy Mayor of Kyiv'
	},
	{
		projectId: 'warsaw-project',
		name: 'Secure Warsaw Program',
		text: `The system allows us to respond to violent incidents faster and with greater accuracy.`,
		author: 'Warsaw Police Commissioner'
	},
	{
		projectId: 'berlin-project',
		name: 'Berlin Safety Net',
		text: `With this technology, public transport hubs are safer than ever before.`,
		author: 'Head of Berlin Transport Authority'
	},
	{
		projectId: 'london-project',
		name: 'London Guardian Network',
		text: `Centralizing CCTV feeds across boroughs has transformed the way we manage urban
						safety.`,
		author: 'Chief of London Metropolitan Police'
	},
	{
		projectId: 'toronto-project',
		name: 'Safe Toronto Vision',
		text: `The bilingual platform ensures both accessibility and security for our citizens.`,
		author: 'Director of Toronto Public Safety'
	},
	{
		projectId: 'tokyo-project',
		name: 'Tokyo City Shield',
		text: `Fast AI-driven alerts have proven invaluable in preventing escalations.`,
		author: 'Tokyo Metropolitan Police Chief'
	},
	{
		projectId: 'new-york-city-project',
		name: 'New York Safety Program',
		text: `Real-time incident detection has become an essential tool for the NYPD.`,
		author: 'Commissioner of the NYPD'
	},
	{
		projectId: 'paris-project',
		name: 'Paris Urban Safety Grid',
		text: `We now have clear predictive insights into where violence is most likely to occur.`,
		author: 'Paris City Safety Director'
	},
	{
		projectId: 'madrid-project',
		name: 'Madrid Smart Safety',
		text: `Customizable reports allow us to adapt the system to the city's evolving needs.`,
		author: 'Madrid Chief of Municipal Police'
	},
	{
		projectId: 'stockholm-project',
		name: 'Stockholm Safe Future',
		text: `The hybrid cloud approach ensures reliability and scalability for a rapidly growing
						city.`,
		author: 'Director of Stockholm Smart City Program'
	}
]