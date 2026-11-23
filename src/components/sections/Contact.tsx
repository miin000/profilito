"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/LanguageProvider";

export function Contact() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const mailto = `mailto:${profile.email}`;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(data)) });
      if (!response.ok) throw new Error("Contact endpoint unavailable");
      setStatus("success"); form.reset();
    } catch {
      setStatus("error");
      const name = String(data.get("name") ?? ""); const email = String(data.get("email") ?? ""); const message = String(data.get("message") ?? "");
      window.location.href = `${mailto}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;
    }
  }
  return <section className="section-wrap section-pad contact-section" id="contact"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line"/>{t.contact.eyebrow}</p><h2>{t.contact.title}</h2><p className="section-description">{t.contact.body}</p></div>
    <div className="contact-grid"><div className="contact-info"><a className="contact-item" href={mailto}><span className="contact-icon"><Mail size={18}/></span><span><small>{t.contact.email}</small><strong>{profile.email}</strong></span><ArrowUpRight size={15}/></a><a className="contact-item" href={`tel:${profile.phone}`}><span className="contact-icon"><Phone size={18}/></span><span><small>{t.contact.phone}</small><strong>{profile.phone}</strong></span><ArrowUpRight size={15}/></a><div className="contact-item"><span className="contact-icon"><MapPin size={18}/></span><span><small>{t.contact.location}</small><strong>{profile.location}</strong></span></div>
      <div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div>
    </div><form className="contact-form" onSubmit={submit}><h3>{t.contact.formTitle}</h3><label>{t.contact.name}<input name="name" required maxLength={100} autoComplete="name" /></label><label>{t.contact.emailLabel}<input name="email" type="email" required maxLength={254} autoComplete="email" /></label><label>{t.contact.message}<textarea name="message" rows={5} required minLength={10} maxLength={4000}/></label><label className="honeypot" aria-hidden="true">{t.contact.honeypot}<input name="website" tabIndex={-1} autoComplete="off"/></label><button className="button button-primary" type="submit" disabled={status === "sending"}><Send size={15}/>{status === "sending" ? t.contact.sending : t.contact.send}</button>{status === "success" && <p className="form-status success" role="status">{t.contact.success}</p>}{status === "error" && <p className="form-status" role="alert">{t.contact.error} <a href={mailto}>{t.contact.mailto}</a></p>}</form></div></section>;
}
