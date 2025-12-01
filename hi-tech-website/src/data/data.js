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
		img: '../../../public/images/cities/Kyiv.png'
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
		img: '../../../public/images/cities/Warsaw.png'
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
		img: '../../../public/images/cities/Berlin.png'
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
		img: '../../../public/images/cities/London.png'
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
		img: '../../../public/images/cities/Toronto.png'
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
		img: '../../../public/images/cities/tokyo.png'
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
		img: '../../../public/images/cities/Paris.png'
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
		img: '../../../public/images/cities/New York.png'
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
		img: '../../../public/images/cities/Madrid.png'
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
		img: '../../../public/images/cities/Stockholm.png'
	},
]