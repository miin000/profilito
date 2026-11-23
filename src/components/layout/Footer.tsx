"use client";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/LanguageProvider";
export function Footer() {
  const { t } = useT();
  return <footer className="footer"><div className="footer-inner"><a href="#home" className="footer-brand">PQM<span>.</span></a><p>© 2026 {profile.name}. {t.footer.rights}</p><a className="footer-top" href="#home">{t.footer.top}<ArrowUpRight size={14}/></a></div></footer>;
}
