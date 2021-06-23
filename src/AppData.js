import dolbyLogo from './assets/dolby.jpg'
import uclaLogo from './assets/ucla.jpg'
import scientificGamesLogo from './assets/scientific-games.jpg'
import autobattlerAILogo from './assets/autobattler-ai.png'
import astroDodgeLogo from './assets/astro-dodge.png'
import dominoSimulatorLogo from './assets/domino-simulator.png'

import welcomeImage from './assets/zenitsu-open-eyes.png'
import welcomeImageHover from './assets/zenitsu-closed-eyes.png'
import downArrowImage from './assets/down-arrow.png'

import resume from './assets/resume.pdf'
import autobattlerAIReport from './assets/autobattler-ai-report.pdf'

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum auctor semper. Proin neque elit, pharetra vel erat id, bibendum eleifend justo. Proin rutrum euismod mauris, id pulvinar nisl accumsan eget. Aenean elit neque, accumsan et neque nec, pulvinar pretium velit.'

const openAutobattlerAI = () => {
	window.open(autobattlerAIReport)
}

const openAstroDodge = () => {
	window.open('https://huabrandon0.itch.io/astro-dodge')
}

const openDominoSimulator = () => {
	window.open('https://huabrandon0.itch.io/domino-simulator')
}

const openResume = () => {
	window.open(resume)
}

const scrollToWorkSection = () => {
	document.getElementById('workSection').scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scrollToProjectsSection = () => {
	document.getElementById('projectsSection').scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const appdata = {
	'lipsum': lipsum,
	'resume': resume,
	'welcome': {
		'header': 'Welcome!',
		'details': lipsum,
		'image': welcomeImage,
		'imageHover': welcomeImageHover,
		'downArrowImage': downArrowImage,
		'buttons': [
			{
				'label': 'Resume',
				'onClick': openResume
			},
			{
				'label': 'Work',
				'onClick': scrollToWorkSection
			},
			{
				'label': 'Projects',
				'onClick': scrollToProjectsSection
			}
		]
	},
	'work': {
		'header': 'Work',
		'subsections' : [
			{
				'header': 'Dolby Laboratories // Software Engineering Intern',
				'image': dolbyLogo,
				'details': lipsum
			},
			{
				'header': 'Scientific Games // Game Dev Intern',
				'image': scientificGamesLogo,
				'details': lipsum
			},
		]
	},
	'education': {
		'header': 'Education',
		'subsections' : [
			{
				'header': 'University of California, Los Angeles',
				'image': uclaLogo,
				'details': lipsum
			},
		]
	},
	'projects': {
		'header': 'Projects',
		'subsections' : [
			{
				'header': 'Machine Learning AI for Auto Chess',
				'image': autobattlerAILogo,
				'details': lipsum,
				'buttons': [
					{
						'label': 'Technical Paper',
						'onClick': openAutobattlerAI
					}
				]
			},
			{
				'header': 'Astro Dodge',
				'image': astroDodgeLogo,
				'details': lipsum,
				'buttons': [
					{
						'label': 'Download',
						'onClick': openAstroDodge
					}
				]
			},
			{
				'header': 'Domino Simulator',
				'image': dominoSimulatorLogo,
				'details': lipsum,
				'buttons': [
					{
						'label': 'Download',
						'onClick': openDominoSimulator
					}
				]
			},
		]
	}
}

export default appdata