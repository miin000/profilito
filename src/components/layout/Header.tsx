"use client";

import { useState } from "react";
import { Download, Menu, Moon, Sun, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useT } from "@/i18n/LanguageProvider";
import { assets } from "@/data/assets";
import { profile } from "@/data/profile";

export function Header() {
  const { language, setLanguage, t } = useT();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const links = [["home", "#home"], ["about", "#about"], ["projects", "#projects"], ["contact", "#contact"]] as const;
  const cvList = [
    { label: t.nav.backendCv, href: assets.cv.backend, available: profile.cv.backendAvailable },
    { label: t.nav.businessCv, href: assets.cv.business, available: profile.cv.businessAvailable }
  ];

  return <header className="site-header"><div className="header-inner">
    <a className="brand" href="#home" aria-label="PQM home">PQM<span>.</span></a>
    <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
      {links.map(([key, href]) => <a key={key} href={href} onClick={() => setOpen(false)}>{t.nav[key]}</a>)}
    </nav>
    <div className="header-actions">
      <button className="language-button" aria-label={t.common.language} onClick={() => setLanguage(language === "en" ? "vi" : "en")}>{language.toUpperCase()}</button>
      <button className="icon-button theme-button" aria-label={t.common.toggleTheme} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>
      <div className="cv-menu-wrap">
        <button className="button button-small button-outline cv-trigger" onClick={() => setCvOpen(!cvOpen)} aria-expanded={cvOpen}><Download size={15} />{t.nav.download}<ChevronDown size={14} /></button>
        {cvOpen && <div className="cv-dropdown">{cvList.map(item => item.available ? <a key={item.label} href={item.href} download>{item.label}</a> : <span key={item.label} title="TODO: add the approved CV PDF">{item.label}<small>{t.nav.unavailable}</small></span>)}</div>}
      </div>
      <button className="icon-button mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? t.common.close : t.common.menu}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
  </div></header>;
}
