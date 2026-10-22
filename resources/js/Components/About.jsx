export default function About() {
    const details = [
        {
            title: 'Education',
            description:
                'Currently pursuing a Higher National Diploma in Information Technology (HNDIT) at SLIATE – ATI Kurunegala.',
        },
        {
            title: 'Web Development',
            description:
                'Interested in developing modern, responsive, and user-friendly web applications using frontend and backend technologies.',
        },
        {
            title: 'Problem Solving',
            description:
                'Enjoy learning programming concepts, solving technical challenges, and improving application functionality.',
        },
        {
            title: 'Continuous Learning',
            description:
                'Always willing to explore new technologies, improve coding skills, and learn industry best practices.',
        },
    ];

    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'PHP',
        'Laravel',
        'MySQL',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Java',
        'C#',
        'Git & GitHub',
    ];

    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8">
            <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-5xl">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        GET TO KNOW ME
                    </span>

                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        About <span className="text-cyan-400">Me</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        Discover my background, interests, and the
                        technologies I use on my software development journey.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-cyan-400" />
                </div>

                <div className="mt-12 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
                    <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#081629] to-[#0d1729] p-5 shadow-xl shadow-black/20 sm:p-7">
                        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-2 text-[11px] font-bold tracking-[0.16em] text-cyan-400">
                            INTRODUCTION
                        </span>

                        <h2 className="mt-5 text-2xl font-extrabold leading-snug sm:text-3xl">
                            Hello! I'm{' '}
                            <span className="text-cyan-400">
                                Pathima Shahra
                            </span>
                        </h2>

                        <div className="mt-4 h-1 w-14 rounded-full bg-cyan-400" />

                        <p className="mt-5 text-sm leading-7 text-slate-300">
                            I am an HNDIT student at SLIATE – ATI Kurunegala,
                            passionate about software engineering and full-stack
                            web development. I enjoy transforming ideas into
                            practical web applications and building clean,
                            responsive, and user-friendly interfaces.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-slate-400">
                            My technical journey includes working with React,
                            JavaScript, PHP, MySQL, Java, and C#. I am also
                            learning Laravel and exploring modern development
                            tools to strengthen my skills and build better
                            applications.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-slate-400">
                            I value continuous learning, teamwork,
                            problem-solving, and writing clean, maintainable
                            code. My goal is to become a skilled Full-Stack
                            Developer and contribute to meaningful projects
                            that solve real-world problems.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                        >
                            Let's Connect
                            <span className="ml-2">→</span>
                        </a>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {details.map((item, index) => (
                            <article
                                key={item.title}
                                className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#081629] to-[#0d1729] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
                            >
                                <div className="absolute left-0 top-0 h-1 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />

                                <span className="text-3xl font-extrabold text-cyan-400/60 transition-colors group-hover:text-cyan-400">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-16 sm:mt-20">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                            MY TECHNICAL TOOLKIT
                        </span>

                        <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                            Skills &amp;{' '}
                            <span className="text-cyan-400">
                                Technologies
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                            Technologies and tools I have learned or am
                            currently exploring in my software development
                            journey.
                        </p>

                        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-cyan-400" />
                    </div>

                    <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#081629] to-[#0d1729] p-5 shadow-xl shadow-black/20 sm:p-7">
                        <div className="flex flex-wrap justify-center gap-2.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-lg border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#081629] to-[#0d1729] px-5 py-8 text-center shadow-xl shadow-black/20 sm:px-8 sm:py-10">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

                    <div className="relative mx-auto max-w-xl">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                            LET'S CONNECT
                        </p>

                        <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                            Let's Build Something Meaningful
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            Have a project idea or an opportunity to discuss?
                            I'd love to hear from you.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
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
