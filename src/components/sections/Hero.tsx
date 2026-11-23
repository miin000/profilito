"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { SiNestjs, SiNodedotjs, SiTypescript } from "react-icons/si";
import { useT } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { assets } from "@/data/assets";
import Image from "next/image";

export function Hero() {
  const { t } = useT();
  return <section className="hero section-wrap" id="home"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
    <motion.div className="hero-content" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: "easeOut" }}>
      <div className="availability"><span className="status-dot"/>{t.hero.available}</div>
      <div className="avatar-wrap"><Image src={assets.avatar} alt={t.hero.greeting + " " + profile.name} width={112} height={112} priority className="avatar" /><span className="avatar-mark">PQM</span></div>
      <p className="eyebrow hero-eyebrow">{t.hero.eyebrow}</p>
      <h1>{t.hero.greeting}<br/><span>{profile.name}</span></h1>
      <p className="hero-title">{profile.title}</p>
      <p className="hero-description">{t.hero.tagline}</p>
      <p className="hero-stack"><SiNodedotjs/> Node.js <span>·</span> <SiNestjs/> NestJS <span>·</span> <SiTypescript/> TypeScript</p>
      <div className="hero-ctas"><a className="button button-primary" href="#projects">{t.hero.view}<ArrowDown size={16}/></a><a className="button button-outline" href="#contact">{t.hero.contact}<ArrowUpRight size={16}/></a></div>
      <div className="hero-badges">{t.hero.badges.map(b => <span key={b}>{b}</span>)}</div>
      <a className="hero-location" href={profile.linkedin} target="_blank" rel="noreferrer"><MapPin size={14}/>{profile.location}<ArrowUpRight size={13}/></a>
    </motion.div><div className="hero-index"><span>01</span><i/> SCROLL TO EXPLORE</div>
  </section>;
}
