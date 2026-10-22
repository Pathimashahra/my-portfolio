export default function Projects() {
    const projects = [
        {
            number: '01',
            title: 'Elan Harvest',
            category: 'Full Stack Web Application',
            description:
                'An online shopping platform designed to provide a smooth user experience, with product browsing and e-commerce functionality.',
            technologies: [
                'React',
                'Tailwind CSS',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Stripe',
            ],
        },
        {
            number: '02',
            title: 'Car Rental System',
            category: 'Desktop Application',
            description:
                'A C# application designed to manage car rental information, bookings, and related rental operations.',
            technologies: ['C#', '.NET'],
        },
        {
            number: '03',
            title: 'Shoe Shop Website',
            category: 'Web Application',
            description:
                'A shoe shop website developed to display shoe products and support basic product management.',
            technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
        },
        {
            number: '04',
            title: 'Student Registration System',
            category: 'Java Application',
            description:
                'A Java application created to manage student registration details and organize student information.',
            technologies: ['Java'],
        },
    ];

    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8">
            <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-5xl">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        MY WORK
                    </span>

                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        Featured{' '}
                        <span className="text-cyan-400">Projects</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        Explore my projects, the technologies I have worked
                        with, and my journey in software development.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-cyan-400" />
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#081629] to-[#0d1729] p-5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-400/5 sm:p-6"
                        >
                            <div className="absolute left-0 top-0 h-1 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />

                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="text-3xl font-extrabold text-cyan-400/60 transition-colors group-hover:text-cyan-400">
                                    {project.number}
                                </span>

                                <span className="max-w-full rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300">
                                    {project.category}
                                </span>
                            </div>

                            <h2 className="mt-5 text-xl font-bold transition-colors group-hover:text-cyan-400 sm:text-2xl">
                                {project.title}
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                {project.description}
                            </p>

                            <div className="my-5 h-px bg-white/10" />

                            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                                Technologies Used
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="relative mt-14 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#081629] to-[#0d1729] px-5 py-9 text-center shadow-xl shadow-black/20 sm:mt-16 sm:px-8 sm:py-11">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

                    <div className="relative mx-auto max-w-xl">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                            LET'S WORK TOGETHER
                        </p>

                        <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                            Have a project in mind?
                        </h2>

                        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-400">
                            Looking for a developer to bring your ideas to
                            life? Let's connect and discuss your project!
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                        >
                            Contact Me
                            <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
