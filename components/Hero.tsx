'use client';
import Image from "next/image";
import { heroData } from "@/assets/portfolio-data";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-8 relative">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

                {/* Text Content */}
                <div className="flex flex-col items-start text-left">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-xs font-bold mb-6 shadow-md">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        {heroData.status}
                    </div>

                    <h1 className="text-xl font-bold text-gray mb-2">{heroData.greeting}</h1>
                    <h2 className="font-serif text-5xl lg:text-6xl font-black text-dark mb-4 leading-tight">
                        {heroData.intro} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{heroData.name}</span>
                    </h2>
                    <h3 className="text-2xl font-semibold text-gray mb-6">
                        {heroData.title}
                    </h3>
                    <p className="text-lg text-gray font-medium leading-relaxed mb-8 max-w-xl">
                        {heroData.description}
                    </p>

                    <div className="mb-10">
                        <div className="text-xs font-bold text-dark uppercase tracking-widest mb-3">Core Technologies</div>
                        <div className="flex flex-wrap gap-3">
                            {heroData.skills.map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-white/60 border border-primary/20 rounded-full text-dark font-semibold text-xs hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                                    <i
                                        className={`${skill.name === "Oracle Integration" ? "fas" : "fab"
                                            } ${skill.icon} mr-2`}
                                    />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {heroData.actions.map((action, idx) => (
                            <a
                                key={idx}
                                href={action.href}
                                download={action.download}
                                className={`
                  px-8 py-3 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 transition-all duration-300 hover:-translate-y-1
                  ${action.primary
                                        ? 'bg-primary text-white hover:bg-primary-dark'
                                        : 'bg-transparent border-2 border-primary text-dark hover:bg-primary/5'}
                `}
                            >
                                <i className={action.icon}></i> {action.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center items-center">
                    <div className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-br from-secondary to-primary p-1 shadow-2xl animate-[floatProfile_6s_ease-in-out_infinite] relative">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative bg-white">
                            <Image
                                src={heroData.profileImage}
                                alt={heroData.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Spinning Dashed Border */}
                        <div className="absolute inset-[-20px] border-2 border-dashed border-primary rounded-full animate-[spin_30s_linear_infinite] opacity-50 pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
}