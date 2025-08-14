export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	technologies: string[];
	status: 'completed' | 'in-progress' | 'planned';
	difficulty: 'beginner' | 'intermediate' | 'advanced';
	gallery: string[];
	features: string[];
}

export const projects: Project[] = [
	{
		id: 'ftc-waterloo-qualifier',
		title: 'FTC Waterloo Qualifier',
		description: 'A robotics competition for high school students.',
		longDescription:
			'In our rookie year, Bassem Bots not only made it to the playoffs at the FTC Waterloo Qualifier, our first-ever competition, but we also brought home the prestigious Innovate Award for our creative engineering solutions. \nThis annual robotics competition, held in Waterloo, Ontario, tests high school teams on programming, robot design, and teamwork. Competing against seasoned teams, we proved that determination, skill, and collaboration can lead to remarkable success right from the start.',
		technologies: ['Java', 'FTC SDK', 'Android Studio'],
		status: 'completed',
		difficulty: 'beginner',
		gallery: ['/waterloo.webp'],
		features: [
			'Playoff Qualification in First Competition',
			'Innovate Award Winner',
			'Custom-Built Robot & Programming',
			'Team Collaboration & Problem-Solving'
		]
	},
	{
		id: 'ftc-windsor-qualifier',
		title: 'FTC Windsor Qualifier',
		description: 'A robotics competition for high school students.',
		longDescription:
			'The FTC Windsor Qualifier was our second competition of the season, where we continued to build on the momentum from our rookie debut. Our robot performed strongly throughout the matches, and we came incredibly close to securing a playoff spot, finishing 9th out of all teams, with the top 8 advancing. \nWhile we didn’t take home an award this time, the event gave us valuable experience, helping us refine our robot’s design, strengthen our teamwork, and prepare for future competitions',
		technologies: ['Java', 'FTC SDK', 'Android Studio'],
		status: 'completed',
		difficulty: 'beginner',
		gallery: [
			'/windsor/12.webp',
			'/windsor/2.webp',
			'/windsor/1.webp',
			'/windsor/3.webp',
			'/windsor/4.webp',
			'/windsor/5.webp',
			'/windsor/6.webp',
			'/windsor/7.webp',
			'/windsor/8.webp',
			'/windsor/9.webp',
			'/windsor/10.webp',
			'/windsor/11.webp'
		],
		features: [
			'Strong Performance - 9th Place Finish',
			'Improved Robot Engineering',
			'Focused Game Strategy',
			'Hands-On Pit Crew Collaboration'
		]
	},
	{
		id: 'eid-robotics-event',
		title: 'EID Robotics Event',
		description:
			'We had a booth in a Eid festival and people could use tickets to use a robot where they had to pick up blocks from an arena and place them in containers',
		longDescription:
			'During the Eid festival, we set up an interactive robotics booth where festival attendees could use tickets to operate a robot. The challenge involved controlling the robot to pick up blocks scattered throughout a designated arena and successfully place them into specific containers. This hands-on experience allowed people to engage with robotics technology in a fun and festive environment.',
		technologies: ['Java', 'FTC SDK', 'Android Studio'],
		status: 'completed',
		difficulty: 'beginner',
		gallery: ['/eid-event.jpeg', '/eid1.mov', '/eid2.mov'],
		features: ['N/A']
	}
];

export function getProject(id: string): Project | undefined {
	return projects.find((project) => project.id === id);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
	return projects.filter((project) => project.status === status);
}

export function getProjectsByDifficulty(difficulty: Project['difficulty']): Project[] {
	return projects.filter((project) => project.difficulty === difficulty);
}
