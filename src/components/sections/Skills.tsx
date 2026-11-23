"use client";
import { Code2, Database, Layers3, Wrench, Smartphone, Sparkles } from "lucide-react";
import { skills } from "@/data/skills";
import { useT } from "@/i18n/LanguageProvider";
const icons = [Code2, Layers3, Database, Smartphone, Wrench, Sparkles];
export function Skills() {
  const { language, t } = useT();
  return <section className="section-wrap section-pad skills-section"><div className="section-heading centered"><p className="eyebrow"><span className="eyebrow-line"/>{t.skills.eyebrow}<span className="eyebrow-line"/></p><h2>{t.skills.title}</h2><p className="section-description">{t.skills.description}</p></div>
    <div className="skills-grid">{skills.map((group, i) => { const Icon = icons[i]; return <article key={group.id} className={`skill-card ${"featured" in group && group.featured ? "skill-featured" : ""}`}><div className="skill-card-heading"><span className="card-icon"><Icon size={18}/></span><h3>{language === "vi" ? group.vi : group.en}</h3></div><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div>
  </section>;
}
