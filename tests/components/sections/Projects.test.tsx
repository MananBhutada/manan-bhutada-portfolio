import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { UniverseHeader, WorldDetail } from "@/components/sections/Projects";
import { projects, worlds } from "@/lib/constants";

vi.mock("@gsap/react", () => ({
  useGSAP: (cb: () => void) => cb(),
}));

vi.mock("@/lib/gsap-config", () => ({
  gsap: { from: vi.fn() },
}));

afterEach(() => vi.restoreAllMocks());

describe("<UniverseHeader />", () => {
  it("renders the universe heading", () => {
    render(<UniverseHeader />);
    expect(
      screen.getByRole("heading", { level: 2, name: /the universe/i }),
    ).toBeInTheDocument();
  });
});

describe("<WorldDetail />", () => {
  it("renders nothing for an out-of-range index", () => {
    const { container } = render(<WorldDetail index={999} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders the projects world and its project archive", () => {
    render(<WorldDetail index={0} />);
    expect(screen.getByRole("heading", { level: 3, name: worlds[0].name })).toBeInTheDocument();

    for (const project of projects) {
      expect(screen.getByRole("heading", { level: 4, name: project.title })).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    }
  });

  it("renders the separate hackathon world", () => {
    render(<WorldDetail index={1} />);
    expect(screen.getByRole("heading", { level: 3, name: worlds[1].name })).toBeInTheDocument();
    expect(screen.getByText(/IIT Delhi Claw & Shield Hackathon/i)).toBeInTheDocument();
    expect(screen.getByText(/VNIT AI Ideathon/i)).toBeInTheDocument();
    expect(screen.getByText(/India Innovates 2026/i)).toBeInTheDocument();
  });

  it("renders the separate library world", () => {
    render(<WorldDetail index={3} />);
    expect(screen.getByRole("heading", { level: 3, name: worlds[3].name })).toBeInTheDocument();
    expect(screen.getByText("Notes from Underground")).toBeInTheDocument();
    expect(screen.getByText("Bhagavad Gita")).toBeInTheDocument();
  });

  it("renders the technology world without a conventional skill-card grid", () => {
    render(<WorldDetail index={4} />);
    expect(screen.getByRole("heading", { level: 3, name: worlds[4].name })).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Three.js")).toBeInTheDocument();
  });
});
