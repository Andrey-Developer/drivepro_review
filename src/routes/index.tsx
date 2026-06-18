import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wrench, Disc3, CircleGauge, Cog, Droplet, BatteryCharging,
  ShieldCheck, Clock, Award, Users, Sparkles, Zap, HandCoins, Eye,
  MapPin, Phone, Instagram, ChevronRight, X,
} from "lucide-react";
import logo from "@/assets/logo-drivepro.jpg";
import car1 from "@/assets/audi-capo.jpg";
import car2 from "@/assets/carro-capa.jpg";
import car3 from "@/assets/carro-2.jpg";
import car4 from "@/assets/mecanico.jpg";
import bateriasMoura from "@/assets/baterias.jpg";

const WHATSAPP = "https://wa.me/555197972896";
const PHONE_LABEL = "(51) 9797-2896";
const INSTAGRAM = "https://www.instagram.com/driveproautocenter";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Carlos+Barbosa,+1104+-+Medianeira,+Porto+Alegre+-+RS";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.09 0C5.51 0 .15 5.35.15 11.93c0 2.1.55 4.16 1.6 5.98L.05 24l6.24-1.64a11.93 11.93 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.94-11.93 0-3.19-1.24-6.18-3.52-8.43ZM12.1 21.82h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.86 9.86 0 0 1-1.51-5.29c0-5.46 4.45-9.9 9.92-9.9 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.45 9.89-9.96 9.89Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drive Pro Auto Center | Mecânica Automotiva em Porto Alegre" },
      { name: "description", content: "Mecânica completa, suspensão, freios, embreagens, troca de óleo e baterias em Porto Alegre. Atendimento de confiança, orçamento gratuito." },
      { property: "og:title", content: "Drive Pro Auto Center | Porto Alegre" },
      { property: "og:description", content: "Seu carro merece atendimento profissional e especializado." },
      { property: "og:image", content: car2 },
      { name: "twitter:image", content: car2 },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        name: "Drive Pro Auto Center",
        image: car2,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Dr. Carlos Barbosa, 1104",
          addressLocality: "Porto Alegre",
          addressRegion: "RS",
          addressCountry: "BR",
        },
        telephone: "+555197972896",
        url: "https://driveproautocenter.com.br",
        openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
        priceRange: "$$",
      }),
    }],
  }),
  component: HomePage,
});

const services = [
  { icon: Wrench, title: "Mecânica em Geral", desc: "Diagnóstico, manutenção preventiva e corretiva para diversas marcas e modelos." },
  { icon: CircleGauge, title: "Suspensão", desc: "Revisão, manutenção e substituição de componentes da suspensão." },
  { icon: Disc3, title: "Freios", desc: "Inspeção completa, troca de pastilhas, discos e manutenção do sistema de frenagem." },
  { icon: Cog, title: "Embreagens", desc: "Serviços especializados em embreagens com peças de qualidade." },
  { icon: Droplet, title: "Troca de Óleo", desc: "Lubrificantes de alta qualidade para aumentar a vida útil do motor." },
  { icon: BatteryCharging, title: "Baterias", desc: "Teste, venda e substituição de baterias automotivas." },
];

const differentials = [
  { icon: Users, label: "Atendimento especializado" },
  { icon: HandCoins, label: "Orçamento gratuito" },
  { icon: Award, label: "Profissionais qualificados" },
  { icon: Zap, label: "Equipamentos modernos" },
  { icon: Eye, label: "Transparência nos serviços" },
  { icon: Clock, label: "Agilidade na entrega" },
  { icon: Sparkles, label: "Peças de qualidade" },
  { icon: ShieldCheck, label: "Compromisso com a segurança" },
];

const gallery = [
  { src: car2, alt: "Audi A5 branco - Drive Pro Auto Center" },
  { src: car1, alt: "Audi com motor aberto na oficina" },
  { src: car4, alt: "Mecânico Drive Pro trabalhando em veículo" },
  { src: car3, alt: "Volkswagen na Drive Pro Auto Center" },
];

const schedule = [
  ["Segunda-feira", "08:00 às 18:00"],
  ["Terça-feira", "08:00 às 18:00"],
  ["Quarta-feira", "08:00 às 18:00"],
  ["Quinta-feira", "08:00 às 18:00"],
  ["Sexta-feira", "08:00 às 18:00"],
  ["Sábado", "08:00 às 12:00"],
  ["Domingo", "Fechado"],
];

function HomePage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Drive Pro Auto Center" className="h-10 w-10 rounded-md object-cover" />
            <span className="font-display font-bold text-lg tracking-wide hidden sm:block">
              DRIVE <span className="text-gradient-brand">PRO</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#galeria" className="hover:text-foreground transition">Galeria</a>
            <a href="#localizacao" className="hover:text-foreground transition">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram Drive Pro Auto Center" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/30 text-foreground hover:bg-background/60 transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition">
              <WhatsAppIcon className="h-4 w-4" /> <span className="hidden sm:inline">Orçamento</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={car2} alt="Audi branco na Drive Pro Auto Center" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, oklch(0.1 0.02 250 / 0.95) 0%, oklch(0.12 0.03 250 / 0.85) 45%, oklch(0.1 0.02 250 / 0.55) 100%)" }} />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-blue-light backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-light animate-pulse" />
              AUTO CENTER PREMIUM · PORTO ALEGRE
            </div>
            <h1 className="mt-6 font-display font-bold leading-[0.95] text-4xl sm:text-5xl lg:text-7xl">
              Seu carro merece <br />
              <span className="text-gradient-brand">atendimento profissional</span> <br />
              e especializado.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Mecânica completa, suspensão, freios, embreagens, troca de óleo e baterias em Porto Alegre. Atendimento de confiança, orçamento gratuito e serviço de qualidade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition">
                <WhatsAppIcon className="h-5 w-5" /> Solicitar Orçamento
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md border border-pink-400/60 bg-pink-500/20 px-6 py-3.5 font-semibold text-pink-100 shadow-[0_0_28px_rgba(236,72,153,0.28)] backdrop-blur hover:bg-pink-500/30 hover:scale-[1.03] transition">
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a href={MAPS} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/30 backdrop-blur px-6 py-3.5 font-semibold hover:bg-background/60 transition">
                <MapPin className="h-5 w-5" /> Ver Localização
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-sm">
              {[["+1k", "Clientes"], ["100%", "Confiança"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-brand">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={car1} alt="Audi com motor aberto na Drive Pro" className="rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 rounded-2xl gradient-brand p-6 shadow-glow max-w-xs hidden sm:block">
              <div className="font-display text-3xl font-bold text-primary-foreground">Excelência</div>
              <div className="text-sm text-primary-foreground/90 mt-1">em cada serviço prestado.</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue-light">Quem Somos</div>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl leading-tight">
              Mecânica de confiança no <span className="text-gradient-brand">coração de Porto Alegre</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A Drive Pro Auto Center é especializada em manutenção automotiva, oferecendo serviços completos para garantir segurança, desempenho e tranquilidade aos nossos clientes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Contamos com profissionais qualificados, equipamentos modernos e atendimento transparente para cuidar do seu veículo com excelência.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[["Diagnóstico preciso", ShieldCheck], ["Equipe certificada", Award]].map(([t, Ic]: any) => (
                <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Ic className="h-5 w-5 text-brand-blue-light shrink-0 mt-0.5" />
                  <div className="text-sm font-medium">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 sm:py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue-light">Serviços</div>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl leading-tight">
              Soluções completas para o seu <span className="text-gradient-brand">veículo</span>.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/60 transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl gradient-brand shadow-glow">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-light hover:gap-2 transition-all">
                  Solicitar serviço <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-elegant">
            <div className="grid lg:grid-cols-[1.05fr_1.25fr]">
              <img
                src={bateriasMoura}
                alt="Baterias Moura na Drive Pro Auto Center"
                className="h-72 w-full object-cover lg:h-full"
                loading="lazy"
              />
              <div className="p-7 sm:p-9">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue-light">
                  <BatteryCharging className="h-4 w-4" />
                  Venda de baterias
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                  Baterias Moura com instalação rápida.
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Trabalhamos com venda, teste e substituição de baterias Moura para o seu veículo sair pronto, seguro e sem complicação.
                </p>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-md gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition">
                  <WhatsAppIcon className="h-5 w-5" /> Consultar bateria
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue-light">Galeria</div>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl leading-tight">
                Nosso trabalho em <span className="text-gradient-brand">imagens</span>.
              </h2>
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-light hover:text-foreground transition">
              <Instagram className="h-4 w-4" /> @driveproautocenter
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(g.src)}
                className={`group relative overflow-hidden rounded-2xl border border-border ${i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto" : "aspect-square"}`}
              >
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-foreground">Ver imagem</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 sm:py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue-light">Diferenciais</div>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl leading-tight">
              Por que escolher a <span className="text-gradient-brand">Drive Pro</span>.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentials.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/60 hover:bg-card/80 transition">
                <div className="h-11 w-11 rounded-lg gradient-brand shrink-0 inline-flex items-center justify-center shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-medium text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-30">
          <img src={car4} alt="" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
            Faça seu <span className="text-gradient-brand">orçamento gratuito</span> agora mesmo!
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Nossa equipe está pronta para atender você e encontrar a melhor solução para o seu veículo.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-10 inline-flex items-center gap-3 rounded-md gradient-brand px-8 py-4 text-lg font-bold text-primary-foreground shadow-glow hover:scale-105 transition">
            <WhatsAppIcon className="h-6 w-6" /> Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* LOCALIZAÇÃO + HORÁRIO */}
      <section id="localizacao" className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue-light">Localização</div>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl leading-tight">
              Venha nos <span className="text-gradient-brand">visitar</span>.
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-blue-light shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Drive Pro Auto Center</div>
                  <div className="text-muted-foreground text-sm">Av. Dr. Carlos Barbosa, 1104 - Medianeira, Porto Alegre - RS</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-blue-light shrink-0 mt-1" />
                <a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-brand-blue-light">{PHONE_LABEL}</a>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-brand-blue-light shrink-0 mt-1" />
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-brand-blue-light">@driveproautocenter</a>
              </div>
            </div>
            <a href={MAPS} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition">
              <MapPin className="h-5 w-5" /> Como Chegar
            </a>

            <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-blue-light" />
                <span className="font-display font-semibold">Horário de Funcionamento</span>
              </div>
              <ul className="divide-y divide-border">
                {schedule.map(([d, h]) => (
                  <li key={d} className="flex items-center justify-between px-6 py-3 text-sm">
                    <span className="text-muted-foreground">{d}</span>
                    <span className={`font-medium ${h === "Fechado" ? "text-destructive" : ""}`}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-elegant min-h-[400px] lg:min-h-full">
            <iframe
              title="Mapa Drive Pro Auto Center"
              src="https://www.google.com/maps?q=Av.+Dr.+Carlos+Barbosa,+1104,+Medianeira,+Porto+Alegre+-+RS&output=embed"
              loading="lazy"
              className="w-full h-full min-h-[400px] border-0 grayscale-[0.3] contrast-[1.1]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-brand-dark py-14">
        <div className="container mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-12 rounded-md object-cover" />
              <div>
                <div className="font-display font-bold text-lg">DRIVE <span className="text-gradient-brand">PRO</span></div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Auto Center</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Atendimento profissional e especializado para o seu veículo.</p>
          </div>
          <div>
            <div className="font-display font-semibold mb-3">Endereço</div>
            <p className="text-sm text-muted-foreground flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Av. Dr. Carlos Barbosa, 1104 - Medianeira, Porto Alegre - RS</p>
          </div>
          <div>
            <div className="font-display font-semibold mb-3">Contato</div>
            <ul className="space-y-2 text-sm">
              <li><a href={WHATSAPP} target="_blank" rel="noopener" className="text-muted-foreground hover:text-brand-blue-light flex items-center gap-2"><WhatsAppIcon className="h-4 w-4" /> {PHONE_LABEL}</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener" className="text-muted-foreground hover:text-brand-blue-light flex items-center gap-2"><Instagram className="h-4 w-4" /> @driveproautocenter</a></li>
            </ul>
          </div>
          <div>
            <div className="font-display font-semibold mb-3">Navegação</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-foreground">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-foreground">Galeria</a></li>
              <li><a href="#localizacao" className="hover:text-foreground">Localização</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Drive Pro Auto Center. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full gradient-brand shadow-glow inline-flex items-center justify-center hover:scale-110 transition"
      >
        <WhatsAppIcon className="h-7 w-7 text-primary-foreground" />
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/40 -z-10" />
      </a>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in cursor-zoom-out">
          <button className="absolute top-5 right-5 h-10 w-10 rounded-full bg-card border border-border inline-flex items-center justify-center" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-elegant" />
        </div>
      )}
    </div>
  );
}
