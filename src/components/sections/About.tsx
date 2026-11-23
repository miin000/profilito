"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Languages, Target } from "lucide-react";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/LanguageProvider";
export function About() {
  const { language, t } = useT();
  const e = profile.education;
  return <section className="section-wrap section-pad" id="about"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line"/>{t.about.eyebrow}</p><h2>{t.about.title}</h2></div>
    <div className="about-grid"><motion.p className="about-copy" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{t.about.body}</motion.p>
      <div className="about-cards"><article className="info-card education-card"><div className="card-icon"><GraduationCap size={19}/></div><div><p className="card-label">{t.about.education}</p><h3>{e.university}</h3><p>{language === "vi" ? "Công nghệ thông tin" : e.degree}</p><p className="muted">{language === "vi" ? "09/2023 – 06/2027 · Dự kiến" : t.about.dates}</p></div><div className="gpa"><strong>{e.gpa}</strong><small>{t.about.gpa}</small></div></article>
        <article className="info-card compact-card"><div className="card-icon"><Target size={18}/></div><div><p className="card-label">{t.about.focus}</p><strong>{t.about.focusValue}</strong><p>{t.about.strength}: {t.about.strengthValue}</p></div></article>
        <article className="info-card compact-card"><div className="card-icon"><Languages size={18}/></div><div><p className="card-label">{language === "vi" ? "Ngoại ngữ" : "Language"}</p><strong>{e.language}</strong></div><a className="card-arrow" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><ArrowUpRight size={17}/></a></article>
      </div></div></section>;
}
