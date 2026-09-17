"use client";

import { ExternalLink, Github, BookOpen, FlaskConical, Trophy, Cpu, Orbit } from "lucide-react";
import { projects, worlds, hackathons, researchPapers, books, technologies } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const icons = {
  projects: Orbit,
  hackathons: Trophy,
  research: FlaskConical,
  library: BookOpen,
  technology: Cpu,
};

export function UniverseHeader() {
  return (
    <div className="section-padding pb-0">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-medium tracking-widest text-primary/60 uppercase">00</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <GradientText as="h2" className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            The Universe
          </GradientText>
          <p className="mt-4 max-w-xl text-text-secondary">
            Five worlds. Different subjects. One system of orbiting ideas.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

function WorldShell({ index, children }: { index: number; children: React.ReactNode }) {
  const world = worlds[index];
  const Icon = icons[world.kind];

  return (
    <div className="flex h-full items-center justify-end px-6 sm:px-12 lg:pr-24 lg:pl-[42%]">
      <div className="w-full max-w-xl rounded-3xl border border-white/[0.04] bg-[#050812]/90 p-7 text-center backdrop-blur-xl sm:p-10">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3">
            <span className="badge gap-2 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold uppercase tracking-widest text-primary-light">
              <Icon size={13} />
              {world.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h3 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">{world.name}</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-[1.8] text-text-secondary">{world.description}</p>
        </ScrollReveal>

        <div className="my-7 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

        {children}
      </div>
    </div>
  );
}

export function WorldDetail({ index }: { index: number }) {
  const world = worlds[index];
  if (!world) return null;

  if (world.kind === "projects") {
    return (
      <WorldShell index={index}>
        <div className="space-y-4 text-left">
          {projects.map((project, i) => (
            <div key={project.id} className={`rounded-2xl border p-5 ${i === 0 ? "border-primary/20 bg-primary/[0.06]" : "border-white/[0.06] bg-white/[0.02]"}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-1 font-display text-lg font-semibold text-white">{project.title}</h4>
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}
                    className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                    <Github size={14} />
                  </a>
                )}
              </div>
              <p className="mt-3 text-xs leading-6 text-text-secondary">{project.description}</p>
              {project.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge rounded-lg border border-white/[0.06] bg-white/[0.03] text-[10px] font-medium text-text-secondary">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </WorldShell>
    );
  }

  if (world.kind === "hackathons") {
    return (
      <WorldShell index={index}>
        <div className="space-y-3 text-left">
          {hackathons.map((item, i) => (
            <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="font-display text-sm text-primary/60">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="font-display text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-xs text-text-secondary">Competition archive</p>
              </div>
            </div>
          ))}
        </div>
      </WorldShell>
    );
  }

  if (world.kind === "research") {
    return (
      <WorldShell index={index}>
        <div className="space-y-3 text-left">
          {researchPapers.map((paper, i) => (
            <div key={paper.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60">
                PAPER {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{paper.label}</p>
            </div>
          ))}
        </div>
      </WorldShell>
    );
  }

  if (world.kind === "library") {
    return (
      <WorldShell index={index}>
        <div className="grid max-h-[48vh] grid-cols-1 gap-2 overflow-y-auto pr-1 text-left sm:grid-cols-2">
          {books.map((book, i) => (
            <div key={book.title} className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary/50">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 font-display text-sm text-white">{book.title}</p>
            </div>
          ))}
        </div>
      </WorldShell>
    );
  }

  return (
    <WorldShell index={index}>
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="badge rounded-xl border border-white/[0.06] bg-white/[0.03] text-sm font-medium text-text-secondary transition hover:border-primary/20 hover:text-white">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-text-secondary/40">
        <ExternalLink size={11} />
        Technologies shown from the verified portfolio material
      </div>
    </WorldShell>
  );
}

// Backward-compatible exports for the original component/test surface.
export const ProjectsHeader = UniverseHeader;
export const ProjectDetail = WorldDetail;
