"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, X } from "lucide-react";
import { projects } from "@/data/projects";
import { useT } from "@/i18n/LanguageProvider";

export function Projects() {
  const { language, t } = useT();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const project = projects[active];
  const prev = () => setActive((active + projects.length - 1) % projects.length);
  const next = () => setActive((active + 1) % projects.length);
  const role = language === "vi" ? project.role.vi : project.role.en;
  const description = language === "vi" ? project.description.vi : project.description.en;
  const highlights = language === "vi" ? project.highlights.vi : project.highlights.en;
  const entries = [{ src: project.images.admin, label: t.projects.admin, ratio: "wide" }, { src: project.images.mobile, label: t.projects.mobile, ratio: "phone" }];

  return <section className="section-wrap section-pad projects-section" id="projects"><div className="section-heading project-section-heading"><div><p className="eyebrow"><span className="eyebrow-line"/>{t.projects.eyebrow}</p><h2>{t.projects.title}</h2><p className="section-description">{t.projects.description}</p></div><div className="carousel-controls"><button className="icon-button" aria-label={t.projects.previous} onClick={prev}><ArrowLeft size={18}/></button><span className="carousel-count">0{active + 1}<i/>0{projects.length}</span><button className="icon-button" aria-label={t.projects.next} onClick={next}><ArrowRight size={18}/></button></div></div>
    <AnimatePresence mode="wait"><motion.article key={project.id} className="project-card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .25 }}>
      <div className="project-visuals"><button className="project-image-button admin-preview" onClick={() => setLightbox(entries[0].src)} aria-label={`${t.projects.open}: ${entries[0].label}`}><Image src={entries[0].src} alt={`${project.title} ${entries[0].label}`} width={960} height={600} /><span className="image-label"><span className="window-dots"><i/><i/><i/></span>{entries[0].label}<ExternalLink size={13}/></span></button><button className="project-image-button mobile-preview" onClick={() => setLightbox(entries[1].src)} aria-label={`${t.projects.open}: ${entries[1].label}`}><Image src={entries[1].src} alt={`${project.title} ${entries[1].label}`} width={420} height={840}/><span className="phone-frame"><i/></span><span className="image-label">{entries[1].label}</span></button></div>
      <div className="project-content"><div className="project-meta"><span className="project-number">0{active + 1}</span><span>{project.dates}</span></div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{description}</p><div className="project-role"><span className="role-dot"/>{role}</div>{"award" in project && project.award && <p className="project-award">✳ {t.projects.award}</p>}
        <div className="project-detail"><h4>{t.projects.highlights}</h4><ul>{highlights.map(item => <li key={item}>{item}</li>)}</ul></div><div className="tag-list project-tech">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links">{project.links.length ? project.links.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14}/></a>) : <span className="project-link-placeholder">{t.projects.unavailable}</span>}</div>
        {"todo" in project && project.todo && <p className="todo-note">{t.common.todo}</p>}
      </div></motion.article></AnimatePresence>
    <div className="project-pagination">{projects.map((p, i) => <button key={p.id} aria-label={`${i + 1}: ${p.title}`} aria-current={active === i} onClick={() => setActive(i)}><span/></button>)}</div>
    <AnimatePresence>{lightbox && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)} role="presentation"><button className="icon-button lightbox-close" onClick={() => setLightbox(null)} aria-label={t.common.lightboxClose}><X/></button><Image src={lightbox} alt={`${project.title} ${t.projects.screenshots}`} width={1300} height={900} onClick={e => e.stopPropagation()} /></motion.div>}</AnimatePresence>
  </section>;
}
