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

const openItchIO = () => {
	window.open('https://huabrandon0.itch.io/')
}

export const appdata = {
	'lipsum': lipsum,
	'resume': resume,
	'welcome': {
		'header': 'Welcome!',
		'details': 'I\'m Brandon. This is my personal website where I post career-related information and also some projects. Ultimately looking to do front-end work or game development as a full-time career.',
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
			},
			{
				'label': 'itch.io',
				'onClick': openItchIO
			}
		]
	},
	'work': {
		'header': 'Work',
		'subsections' : [
			{
				'header': 'Dolby Laboratories // Software Engineering Intern',
				'image': dolbyLogo,
				'details': 'Post-graduation, I took an internship at Dolby, which ended up spanning around 9 months. During its course, I worked under the video technology team, who, at the time, were focused on expanding and enhancing Dolby Vision, their (quite fancy) implementation of high-dynamic-range video. Some of my tasks included writing profilers to measure compute costs of Dolby Vision processing, and prototyping/testing potential changes to the Dolby Vision pipeline.',
				'tech': [
					'C++',
					'OpenGL',
					'Python',
					'MATLAB'
				]
			},
			{
				'header': 'Scientific Games // Game Dev Intern',
				'image': scientificGamesLogo,
				'details': 'I recently accepted an internship offer at Scientific Games, with the intent of using Unity to develop gambling-centric video games. The internship has yet to start.'
			},
		]
	},
	'education': {
		'header': 'Education',
		'subsections' : [
			{
				'header': 'University of California, Los Angeles',
				'image': uclaLogo,
				'details': 'I completed a B.S. Computer Science at UCLA (c/o 2019), and am currently in a M.S. Computer Science program, also at UCLA (expected 2022).'
			},
		]
	},
	'projects': {
		'header': 'Projects',
		'subsections' : [
			{
				'header': 'Machine Learning AI for Auto Chess',
				'image': autobattlerAILogo,
				'details': 'Auto chess is a genre of strategy video games that has risen in popularity in recent years. As a final project for a graduate machine learning course, I thought it\'d be interesting to apply reinforcement learning to develop AI for auto chess games. This project included developing my own simplified version of auto chess as well as simulating countless rounds of gameplay to train intelligent agents.',
				'tech': [
					'Unity',
					'C#'
				],
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
				'details': 'Astro Dodge is a fast-paced endless runner game, originally published for Android on the Google Play Store (has been removed since). During gameplay, the player controls a ship over four lanes and must dodge incoming asteroids. The game maintains a global leaderboard, cloud saves, and implements a F2P currency system, enabling players to purchase custom skins for their ship. Made by me and a couple friends.',
				'tech': [
					'Unity',
					'C#'
				],
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
				'details': 'Domino Simulator is a sandbox game for making domino structures. It provides convenient editor features for users to seamlessly explore their creativity. My tasks included developing a curve-based domino placement system and writing code for the storage/retrieval of player-created structures. Made by me and 4 other teammates as an undergrad capstone project.',
				'tech': [
					'Unity',
					'C#'
				],
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