import { Head, Link } from '@inertiajs/react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Welcome() {
    return (
        <>
            <Head title="Pathima Shahra | Portfolio" />

            <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
                <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/90 backdrop-blur-xl">
                    <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
                        <Link
                            href="/"
                            className="text-4xl font-extrabold tracking-wide text-cyan-400"
                        >
                            Ps
                        </Link>

                        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
                            <Link href="/" className="text-cyan-400 transition hover:text-cyan-300">
                                Home
                            </Link>
                            <Link href="/about" className="transition hover:text-cyan-400">
                                About
                            </Link>
                            <Link href="/projects" className="transition hover:text-cyan-400">
                                Projects
                            </Link>
                            <Link href="/contact" className="transition hover:text-cyan-400">
                                Contact
                            </Link>
                        </div>

                        <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 sm:px-5"
                        >
                            Hire Me
                            <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                    </nav>
                </header>

                <main>
                    <section
                        id="home"
                        className="relative isolate mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 md:grid-cols-2 lg:gap-16"
                    >
                        <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
                        <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

                        <div className="order-2 md:order-1">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-300">
                                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                                HELLO, I'M
                            </div>

                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Pathima
                                <span className="mt-1 block text-cyan-400">
                                    Shahra
                                </span>
                            </h1>

                            <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl">
                                Aspiring Full Stack Developer
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                                I am an HNDIT student passionate about building
                                modern, responsive web applications. I enjoy
                                learning new technologies and creating practical
                                solutions to real-world problems.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:px-6"
                                >
                                    View My Work
                                                                <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />

                                </Link>

                                <a
                                    href="/cv.pdf"
                                    download="Pathima_Shahra_CV.pdf"
                                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 sm:px-6"
                                >
                                    Download CV
                                    <span aria-hidden="true">↓</span>
                                </a>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                                <a
                                href="https://github.com/Pathimashahra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1 transition hover:text-cyan-400"
                                >
                                    GitHub
                                    <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/pathima-shahra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1 transition hover:text-cyan-400"
                                >
                                    LinkedIn
                                    <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>

                            </div>
                        </div>

                        <div className="order-1 flex justify-center md:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-2xl" />

                                <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 border-cyan-400/60 bg-gradient-to-br from-slate-800 to-slate-950 p-2 shadow-[0_0_60px_rgba(34,211,238,0.12)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Pathima Shahra"
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                </div>

                                <div className="absolute -bottom-3 -right-3 rounded-2xl border border-cyan-400/20 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur">
                                    <p className="text-xs text-slate-400">
                                        Passionate about
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-cyan-300">
                                        Web Development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        </>
    );
}

