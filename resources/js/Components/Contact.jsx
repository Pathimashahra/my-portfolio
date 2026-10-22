import { useForm } from "@inertiajs/react";
import {
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
    Send,
    User,
    MessageSquare,
    CheckCircle2,
    LoaderCircle,
    Code2,
    BriefcaseBusiness,
} from "lucide-react";

export default function Contact() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const inputClass =
        "w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10";

    const labelClass = "mb-2 block text-sm font-medium text-slate-300";

    function handleSubmit(e) {
        e.preventDefault();

        post("/contact", {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    }

    return (
        <section
            id="contact"
            className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8"
        >
            <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-5xl">
                <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        GET IN TOUCH
                    </span>

                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        Let's <span className="text-cyan-400">Connect</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        Have a project idea or need a website for your
                        business? Get in touch with me and let's create
                        something amazing together.
                    </p>
                </div>

                <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
                    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#081629] to-[#0d1729] p-5 shadow-xl shadow-black/20 sm:p-6 lg:p-7">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

                        <div className="relative">
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-2 text-[11px] font-bold tracking-[0.16em] text-cyan-400">
                                CONTACT INFORMATION
                            </span>

                            <h2 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">
                                Let's Build Your Next{" "}
                                <span className="text-cyan-400">
                                    Project Together.
                                </span>
                            </h2>

                            <div className="mt-4 h-1 w-14 rounded-full bg-cyan-400" />

                            <p className="mt-4 text-sm leading-6 text-slate-400">
                                Need a website for your business or have a
                                project idea? Feel free to contact me. Let's
                                discuss your requirements and turn your ideas
                                into reality.
                            </p>
                        </div>

                        <div className="relative mt-6 space-y-3">
                            <a
                                href="tel:0740741192"
                                className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 sm:p-4"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                                    <Phone size={19} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                                        Phone Number
                                    </p>
                                    <p className="mt-1 break-words text-sm font-medium text-slate-200 transition group-hover:text-cyan-400">
                                        074 074 1192
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="shrink-0 text-slate-500 transition group-hover:text-cyan-400"
                                />
                            </a>

                            <a
                                href="mailto:pathimashahra2003@gmail.com"
                                className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 sm:p-4"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                                    <Mail size={19} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                                        Email Address
                                    </p>
                                    <p className="mt-1 break-all text-sm font-medium text-slate-200 transition group-hover:text-cyan-400">
                                        pathimashahra2003@gmail.com
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="shrink-0 text-slate-500 transition group-hover:text-cyan-400"
                                />
                            </a>

                            <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-400">
                                    <MapPin size={19} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                                        Location
                                    </p>
                                    <p className="mt-1 break-words text-sm font-medium leading-6 text-slate-200">
                                        Weherabendha, Dhoratiyava,
                                        Kurunegala
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-auto pt-7">
                            <div className="border-t border-white/10 pt-5">
                                <div className="flex items-center gap-3">
                                    <Send size={17} className="text-cyan-400" />
                                    <p className="text-xs font-bold tracking-widest text-cyan-400">
                                        FIND ME ONLINE
                                    </p>
                                </div>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Let's connect and build something great
                                    together.
                                </p>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    <a
                                        href="https://github.com/Pathimashahra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-cyan-400/60 hover:bg-cyan-400/5"
                                    >
                                        <span className="flex items-center gap-3">
                                            <Code2
                                                size={21}
                                                className="text-slate-200"
                                            />
                                            <span className="text-sm font-semibold text-slate-200">
                                                GitHub
                                            </span>
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            className="text-slate-500 transition group-hover:text-cyan-400"
                                        />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/pathima-shahra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-cyan-400/60 hover:bg-cyan-400/5"
                                    >
                                        <span className="flex items-center gap-3">
                                            <BriefcaseBusiness
                                                size={21}
                                                className="text-slate-200"
                                            />
                                            <span className="text-sm font-semibold text-slate-200">
                                                LinkedIn
                                            </span>
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            className="text-slate-500 transition group-hover:text-cyan-400"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0d1729] p-5 shadow-xl shadow-black/20 sm:p-6 lg:p-7">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-2 text-[11px] font-bold tracking-[0.16em] text-cyan-400">
                                <MessageSquare size={14} />
                                SEND A MESSAGE
                            </span>

                            <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
                                Have a Project{" "}
                                <span className="text-cyan-400">
                                    in Mind?
                                </span>
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                Tell me about your project, website
                                requirements, or business ideas. Fill out the
                                form below, and let's discuss how I can help.
                            </p>
                        </div>

                        {recentlySuccessful && (
                            <div
                                role="status"
                                className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300"
                            >
                                <CheckCircle2
                                    size={19}
                                    className="shrink-0"
                                />
                                <p>
                                    Your message has been sent successfully.
                                    Thank you for contacting me!
                                </p>
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-4"
                        >
                            <div>
                                <label htmlFor="name" className={labelClass}>
                                    Your Name
                                </label>

                                <div className="relative">
                                    <User
                                        size={18}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Enter your full name"
                                        className={`${inputClass} pl-11`}
                                        required
                                    />
                                </div>

                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className={labelClass}>
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="you@example.com"
                                        className={`${inputClass} pl-11`}
                                        required
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className={labelClass}
                                >
                                    Project Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData("subject", e.target.value)
                                    }
                                    placeholder="e.g. Business Website Development"
                                    className={inputClass}
                                    required
                                />

                                {errors.subject && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className={labelClass}
                                >
                                    Tell Me About Your Project
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    placeholder="Describe your project, required features, budget, or timeline..."
                                    className={`${inputClass} resize-y`}
                                    required
                                />

                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? (
                                    <>
                                        <LoaderCircle
                                            size={18}
                                            className="animate-spin"
                                        />
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <Send size={17} />
                                        Send Message
                                        <ArrowUpRight
                                            size={18}
                                            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs leading-5 text-slate-500">
                                Your details will be used to respond to your
                                enquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
