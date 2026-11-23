"use client";
import { Award, BookOpenCheck, GraduationCap } from "lucide-react";
import { awards } from "@/data/awards";
import { useT } from "@/i18n/LanguageProvider";
const icons = [GraduationCap, Award, BookOpenCheck];
export function Awards() {
  const { language, t } = useT();
  return <section className="section-wrap section-pad awards-section"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line"/>{t.awards.eyebrow}</p><h2>{t.awards.title}</h2></div><div className="awards-grid">{awards.map((award, i) => { const Icon = icons[i]; return <article className="award-card" key={award.id}><div className="card-icon"><Icon size={18}/></div><div><h3>{language === "vi" ? award.vi : award.en}</h3><p>{award.place}</p>{award.dates && <span>{award.dates}</span>}</div><b>0{i + 1}</b></article>; })}</div></section>;
}
