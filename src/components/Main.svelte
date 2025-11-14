<script>
	import Step from '../components/Step.svelte';

	let steps = [
		{
			name: 'DentistApp Pro',
			icon: 'fa-solid fa-hospital',
			href: 'https://github.com/YazanKsibeh/DentistApp-Pro',
			description: 'Complete Clinic Management - A comprehensive desktop application for healthcare clinic management. Streamline patient records, appointments, payments, and analytics in one powerful, secure platform.',
			features: ['Patient Records Management', 'Appointment Scheduling', 'Payment Tracking', 'Analytics Dashboard', 'Secure File Management', 'Offline-First Architecture']
		},
		{
			name: 'Brands',
			icon: 'fa-solid fa-store',
			href: 'https://github.com/YazanKsibeh/Brands',
			description: 'Web-based platform for clothing brand owners and their staff to manage brand profiles, branches, product catalogs, and customer notifications with role-based access control.',
			features: ['Brand & Branch Management', 'Product CRUD with Images', 'Push Notifications', 'Permissions Dashboard', 'Advanced Filtering & Search']
		},
		{
			name: 'E-commerce App',
			icon: 'fa-solid fa-cart-shopping',
			href: 'https://github.com/YazanKsibeh/Node.js-Projects',
			description: 'Full-featured online shopping application built with Node.js and Express.js. Available in both MongoDB and MySQL versions with complete CRUD operations for admin and shopping functionality for customers.',
			features: ['Admin Product Management', 'Shopping Cart System', 'User Authentication', 'Database Flexibility (MongoDB/MySQL)', 'Node.js Templating Engine']
		},
		{
			name: 'Task Manager App',
			icon: 'fa-solid fa-list-check',
			href: 'https://github.com/YazanKsibeh/Assignments',
			description: 'Complete web application for daily task management. Create task lists with detailed information, set priorities, and filter tasks by status, date, or importance.',
			features: ['Task Lists Creation', 'Status Tracking (Done/Not Done)', 'Date Management', 'Priority Marking', 'Advanced Filtering', 'Smart Sorting']
		},
		{
			name: 'LabConnect',
			icon: 'fa-solid fa-flask',
			href: 'https://github.com/YazanKsibeh/LabConnect',
			description: 'Smart Medical Test Booking CMS - Content management system for laboratories to manage test bookings, integrate with mobile app, track results, and handle payments seamlessly.',
			features: ['Test Booking Management', 'Lab Integration', 'Result Tracking', 'Payment Gateway', 'Notification System']
		},
		{
			name: 'Scheduler Pro',
			icon: 'fa-solid fa-calendar-check',
			href: 'https://github.com/YazanKsibeh/Scheduler-app',
			description: 'Complete Workforce Management - A comprehensive workforce scheduling application for business management. Streamline employee assignments, job tracking, scheduling, and analytics in one powerful, secure platform designed for managers and team leaders.',
			features: ['Employee Management', 'Job Assignment Tracking', 'Schedule Planning', 'Analytics Dashboard', 'Real-time Updates', 'Multi-platform Access']
		},
		{
			name: 'Car Auctions CMS',
			icon: 'fa-solid fa-car',
			href: 'https://github.com/YazanKsibeh/Car-Auction-CMS',
			description: 'Comprehensive Content Management System for car auction platforms. Manage car types, models, features, and create scheduled auctions that integrate seamlessly with mobile applications for real-time bidding participation.',
			features: ['Car Types & Models Management', 'Vehicle Features Configuration', 'Auction Creation & Scheduling', 'Real-time Auction Integration', 'User & Role Management', 'Time-based Auction Control']
		}
	];
	let benifits = [
		{ name: 'Reliability', desc: 'Robust, secure solutions you can depend on for mission-critical operations' },
		{ name: 'User-Focused Design', desc: 'Every interface we create prioritizes user experience and simplicity' },
		{ name: 'Innovation', desc: 'Cutting-edge solutions that push the boundaries of what\'s possible' },
		{ name: 'Performance', desc: 'Optimized code and architecture that delivers fast, efficient applications' },
		{ name: 'Scalability', desc: 'Solutions designed to grow with your business from startup to enterprise' },
		{ name: 'Collaboration', desc: 'Working closely with clients to understand needs and deliver exceptional results' }
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="introPage" class="grid grid-cols-1 lg-grd-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:jusify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
				<span class="poppins text-violet-400">Yazan</span> Ksibeh <br />
				<span class="text-3xl sm:text-4xl md:text-5xl font-normal">Full Stack Developer</span>
			</h2>
			<div class="flex flex-col gap-4">
				<div class="tech-groups grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
					<!-- Frontend -->
					<div class="tech-group flex flex-col gap-3">
						<div class="tech-stack flex flex-wrap gap-2">
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="tech-icon" />
								React.js
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" class="tech-icon" />
								Next.js
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="SvelteKit" class="tech-icon" />
								SvelteKit
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" class="tech-icon" />
								Vue.js
							</span>
						</div>
					</div>
					<!-- Backend -->
					<div class="tech-group flex flex-col gap-3">
						<div class="tech-stack flex flex-wrap gap-2">
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" class="tech-icon" />
								Node.js
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" class="tech-icon" />
								Express.js
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="tech-icon" />
								Python
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" class="tech-icon" />
								Django
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" class="tech-icon" />
								FastAPI
							</span>
						</div>
					</div>
					<!-- Database -->
					<div class="tech-group flex flex-col gap-3">
						<div class="tech-stack flex flex-wrap gap-2">
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" class="tech-icon" />
								MongoDB
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" class="tech-icon" />
								MySQL
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" class="tech-icon" />
								SQLite
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" class="tech-icon" />
								Oracle
							</span>
							<span class="tech-item">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="tech-icon" />
								PostgreSQL
							</span>
						</div>
					</div>
				</div>
			</div>
			<a
				href="https://wa.me/+963941414122"
				class="blueshadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
				target="_blank"
			>
				<div
					class="absolute top-0 right-full w-full bg-voilet-400 opacity-20 group-hover:translate-x-full z-0 duration:200"
				/>
				<h4 class="relative z-9">Get in Touch &rarr;</h4>
			</a>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<img src={'images/profile.png'} alt="profile" class="h-36 rounded-full" />
		</div>
	</section>
	<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-lg sm:text-xl md:text-2xl">Featured Projects</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Building <span class="poppins text-violet-400">Solutions</span> That Matter
			</h3>
		</div>
		<!-- <a
			href="https://www.youtube.com/watch?v=-2UjwQzxvBQ"
			target="_blank"
			class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
		>
			<i class="fa-regular fa-circle-play" />
			<p>Watch the video</p>
		</a> -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
			{#each steps as step}
				<Step step={step}>
					<div class="flex flex-col gap-3">
						<p class="text-sm sm:text-base">
							{step.description}
						</p>
						<div class="flex flex-wrap gap-2 mt-2">
							{#each step.features.slice(0, 3) as feature}
								<span class="text-xs px-2 py-1 rounded bg-violet-400/20 text-violet-300 border border-violet-400/30">
									{feature}
								</span>
							{/each}
							{#if step.features.length > 3}
								<span class="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
									+{step.features.length - 3} more
								</span>
							{/if}
						</div>
					</div>
				</Step>
			{/each}
		</div>
	</section>
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
			after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
		>
			<h6 class="text-lg sm:text-xl md:text-2xl">What sets me apart</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				My <span class="poppins text-violet-400">approach</span>
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">Core values</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 w-full mx-auto max-w-[1000px]">
			{#each benifits as benifit}
				<div class="flex flex-col gap-4 sm:gap-6">
					<h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold">{benifit.name}</h3>
					<p class="text-base sm:text-lg text-slate-300">{benifit.desc}</p>
				</div>
			{/each}
		</div>
		<!-- <h5 class="text-2xl sm:text-3xl font-semiboild text-center poppins">
			The <span class="text-violet-400 poppins">full</span> package
		</h5> -->
		<!-- <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
			<table class="bg-white text-slate-700 rounded text-center">
				<thead class="border-b border-solid border-slate-200">
					<tr class="">
						<th />
						<th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
						<th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap"
							>Dedication</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap"
							>Collaboration</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap"
							>Communication</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 font-semibold text-sm whitespace-nowrap"
							>Commitment</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
				</tbody>
			</table>
		</div> -->
		<div class="mx-auto -mt-12 italic sm:hidden opacity-50">
			<p>Scroll to see more &rarr;</p>
		</div>
	</section>
</main>
