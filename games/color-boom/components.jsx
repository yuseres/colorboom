/* components.jsx — shared helpers + content data for Color Boom site */

const S = "assets/screens/"; // screen path prefix

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.colorboom.yuser";
const SOCIALS = {
  instagram: "https://www.instagram.com/colorboomers",
  facebook: "https://www.facebook.com/profile.php?id=61589805556275",
  tiktok: "https://www.tiktok.com/@trirongames",
};

// A floating app-screen card (cropped real screen)
function Screen({ src, className = "", style, alt = "" }) {
  return (
    <div className={"screen " + className} style={style}>
      <img src={S + src} alt={alt} />
    </div>
  );
}

// App store download badges (generic, non-trademark)
function AppBadges({ className = "" }) {
  return (
    <div className={"badges " + className}>
      <a className="badge" href={PLAY_STORE_URL} target="_blank" rel="noopener" aria-label="Get it on Google Play">
        <span className="gi">▶</span>
        <span className="bt"><small>Get it on</small><b>Google Play</b></span>
      </a>
    </div>
  );
}

function Eyebrow({ children }) { return <span className="eyebrow">{children}</span>; }

// little confetti dot field, deterministic
function Confetti({ items }) {
  return (
    <>
      {items.map((d, i) => (
        <span key={i} className={d.sq ? "sq" : "dot"} style={{
          width: d.s, height: d.s, background: d.c, top: d.t, left: d.l, right: d.r, bottom: d.b,
          opacity: d.o ?? 1, transform: d.rot ? `rotate(${d.rot}deg)` : undefined,
        }} />
      ))}
    </>
  );
}

const HUES = ["var(--gold)", "var(--blue)", "var(--green)", "var(--pink)", "var(--purple)", "var(--primary)"];

// Feature rows content
const FEATURES = [
  {
    eyebrow: "Color by number",
    title: "Paint by number,\nreimagined as art.",
    body: "Pick a canvas, tap the matching color, and watch intricate line-art bloom into a finished masterpiece. Hundreds of mandalas, florals and licensed packs — from beginner-easy to deeply detailed.",
    pills: [["🎨", "1,200+ canvases"], ["✨", "Magic-tile fills"], ["🆕", "New drops weekly"]],
    screen: "library", flip: false,
    float: { em: "🖼️", big: "Library", small: "1,200+ canvases", pos: { top: "4%", left: "-10%" } },
    blob: "var(--purple)",
  },
  {
    eyebrow: "Daily rewards",
    title: "Streaks &\nrewards that stick.",
    body: "Log in daily to grow your streak, claim coins and gems, and unlock rarer paint boosters. Daily missions hand you bite-size goals so every session pays off.",
    pills: [["🔥", "Streak boosters"], ["🪙", "Daily coins"], ["🎁", "Weekly calendar"]],
    screen: "daily-rewards", flip: true,
    float: { em: "🔥", big: "Day 2", small: "Streak active!", pos: { bottom: "8%", right: "-8%" } },
    blob: "var(--primary)",
    mini: "missions",
  },
  {
    eyebrow: "Compete",
    title: "Climb the\nweekly ranks.",
    body: "Paint fast, paint beautifully, and rise up the global leaderboard. Earn badges, stars and frames that show off your style to a community of millions.",
    pills: [["🏆", "Weekly ranks"], ["⭐", "Earn stars"], ["🏅", "Badges & frames"]],
    screen: "ranks", flip: false,
    float: { em: "🏆", big: "#54", small: "You're rising!", pos: { top: "6%", right: "-8%" } },
    blob: "var(--gold)",
    mini: "profile",
  },
  {
    eyebrow: "Make it yours",
    title: "Themes, effects\n& fill magic.",
    body: "Switch themes, swap highlight colors, and equip fill effects like Sparkle, Ripple and Splash. Color Boom adapts to your vibe — light, sunset or midnight.",
    pills: [["🎨", "5 themes"], ["💫", "Fill effects"], ["🖌️", "Custom frames"]],
    screen: "settings", flip: true,
    float: { em: "💫", big: "Sparkle", small: "Effect equipped", pos: { bottom: "6%", left: "-8%" } },
    blob: "var(--blue)",
    mini: "game-shop",
  },
];

// Claudiu's avatar (illustrated portrait).
function DevAvatar({ style }) {
  return (
    <img src="assets/claudiu.png" className="dev-avatar" style={style} alt="Claudiu Tănasă" />
  );
}

Object.assign(window, { Screen, AppBadges, Eyebrow, Confetti, HUES, FEATURES, DevAvatar, PLAY_STORE_URL, SOCIALS });
