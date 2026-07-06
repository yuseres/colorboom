/* app.jsx — root: theme + highlight + hero variant + reveal + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "petal",
  "highlight": "#F97A2E",
  "confetti": true
}/*EDITMODE-END*/;

const HL2 = {
  "#F97A2E": "#FC9442", // orange
  "#F0567A": "#F87394", // coral
  "#4F8FF0": "#6BA6F6", // blue
  "#46B86A": "#5FC982", // green
  "#9B6BE0": "#B083EE", // purple
};

const VARIANTS = [
  { id: "d", label: "Headliner" },
  { id: "a", label: "Spotlight" },
  { id: "b", label: "Stack" },
  { id: "c", label: "Split" },
];

function VariantSwitch({ value, onChange }) {
  return (
    <div className="variant-switch" role="tablist" aria-label="Hero layout">
      <span className="vs-label">Hero layout</span>
      {VARIANTS.map((v, i) => (
        <button key={v.id} className={value === v.id ? "on" : ""} onClick={() => onChange(v.id)} role="tab" aria-selected={value === v.id}>
          <span className="n">{i + 1}</span>{v.label}
        </button>
      ))}
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [variant, setVariant] = React.useState(() => localStorage.getItem("cb_variant") || "d");

  // theme
  React.useEffect(() => { document.documentElement.setAttribute("data-theme", t.theme); }, [t.theme]);
  // highlight color override
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.highlight) {
      root.style.setProperty("--primary", t.highlight);
      root.style.setProperty("--primary-2", HL2[t.highlight] || t.highlight);
    } else {
      root.style.removeProperty("--primary"); root.style.removeProperty("--primary-2");
    }
  }, [t.highlight]);
  // confetti
  React.useEffect(() => { document.body.classList.toggle("no-confetti", !t.confetti); }, [t.confetti]);
  // persist variant
  React.useEffect(() => { localStorage.setItem("cb_variant", variant); }, [variant]);

  return (
    <>
      <div className="bg-decor"><i className="blob-a" /><i className="blob-b" /><i className="blob-c" /><i className="blob-d" /></div>

      <Nav />
      <Hero variant={variant} />
      <Proof />
      <Features />
      <Gamification />
      <CTA />
      <Footer />

      <VariantSwitch value={variant} onChange={setVariant} />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <ThemePicker value={t.theme} onChange={(v) => setTweak("theme", v)} />
        <TweakColor label="Highlight color" value={t.highlight}
          options={["#F97A2E", "#F0567A", "#4F8FF0", "#46B86A", "#9B6BE0"]}
          onChange={(v) => setTweak("highlight", v)} />
        <TweakSection label="Playfulness" />
        <TweakToggle label="Confetti accents" value={t.confetti} onChange={(v) => setTweak("confetti", v)} />
      </TweaksPanel>
    </>
  );
}

// custom theme swatch picker
function ThemePicker({ value, onChange }) {
  const themes = [
    { id: "petal", name: "Spring Petal", bg: "#F5DBD9", c1: "#FFFCFA", c2: "#F97A2E" },
    { id: "sunset", name: "Warm Sunset", bg: "#FBE2CB", c1: "#FFFDFB", c2: "#F26C26" },
    { id: "midnight", name: "Midnight", bg: "#18162C", c1: "#2A2749", c2: "#FB8C3D" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {themes.map((th) => (
        <button key={th.id} onClick={() => onChange(th.id)} style={{
          display: "flex", alignItems: "center", gap: 10, padding: "7px 9px", borderRadius: 10,
          border: value === th.id ? "1.5px solid var(--primary, #F97A2E)" : "1px solid rgba(0,0,0,.1)",
          background: value === th.id ? "rgba(249,122,46,.10)" : "rgba(255,255,255,.5)",
          cursor: "pointer", font: "inherit", color: "#29261b", textAlign: "left",
        }}>
          <span style={{ display: "flex", borderRadius: 6, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,.18)" }}>
            <span style={{ width: 16, height: 22, background: th.bg }} />
            <span style={{ width: 16, height: 22, background: th.c1 }} />
            <span style={{ width: 16, height: 22, background: th.c2 }} />
          </span>
          <span style={{ fontWeight: 600, fontSize: 12 }}>{th.name}</span>
        </button>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
