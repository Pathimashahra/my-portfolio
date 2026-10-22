import { Head, Link, usePage } from '@inertiajs/react';
import { FiArrowUpRight } from 'react-icons/fi';
export default function PortfolioLayout({ title, children }) {
    const { url } = usePage();

    const links = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Projects', url: '/projects' },
        { label: 'Contact', url: '/contact' },
    ];

    return (
        <>
            <Head title={title} />

            <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
                <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/90 backdrop-blur-xl">
                    <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
                        <Link
                            href="/"
                            className="text-4xl font-extrabold tracking-wide text-cyan-400"
                        >
                            Ps
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-6">
                            {links.map((link) => {
                                const isActive =
                                    link.url === '/'
                                        ? url === '/'
                                        : url.startsWith(link.url);

                                return (
                                    <Link
                                        key={link.url}
                                        href={link.url}
                                        className={`transition duration-200 ${
                                            isActive
                                                ? 'font-semibold text-cyan-400'
                                                : 'text-slate-300 hover:text-cyan-400'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
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

                <main className="relative">
                    <div className="pointer-events-none absolute -left-32 top-20 -z-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />
                    <div className="relative z-10">{children}</div>
                </main>

            </div>
        </>
    );
}

