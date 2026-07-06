/* hero.jsx — Hero with 3 layout variants */

function HeroCopy({ variant }) {
  return (
    <div className="copy">
      <Eyebrow>Color by number × magic tiles</Eyebrow>
      <h1 className="hero-title">
        <span className="l">Tap a color,</span>
        <span className="l"><span className="pop">boom</span> — it's art.</span>
      </h1>
      <p className="hero-sub">
        The cozy color-by-number game where every tile you fill bursts into something beautiful. Paint, collect, and climb the ranks.
      </p>
      <AppBadges />
      <div className="hero-meta">
        <span className="stars">★★★★★</span>
        <span className="mt"><b>4.9</b> · 120K ratings</span>
        <span className="mt"><b>10M+</b> painters</span>
      </div>
    </div>
  );
}

// Variant A — Spotlight
function HeroA() {
  return (
    <div className="heroA">
      <HeroCopy variant="a" />
      <div className="heroA-stage">
        <span className="dot" style={{ width: 16, height: 16, background: "var(--gold)", top: "12%", right: "18%" }} />
        <span className="sq" style={{ width: 14, height: 14, background: "var(--blue)", bottom: "16%", left: "10%", transform: "rotate(20deg)" }} />
        <span className="dot" style={{ width: 22, height: 22, background: "var(--pink)", bottom: "30%", right: "6%" }} />
        <Screen src="profile.png" className="sidecard sc1 bob s2" alt="Player profile" />
        <Screen src="ranks.png" className="sidecard sc2 bob s3" alt="Weekly ranks" />
        <Screen src="library.png" className="main bob" alt="Art library" />
        <div className="puck bob s2" style={{ top: "2%", left: "12%" }}>
          <span className="pi">🔥</span>
          <span><small>Streak</small><b>Day 2</b></span>
        </div>
        <div className="puck bob s3" style={{ bottom: "10%", right: "14%" }}>
          <span className="pi">🪙</span>
          <span><small>Earned</small><b>+1,000</b></span>
        </div>
      </div>
    </div>
  );
}

// Variant B — Stack / fan
function HeroB() {
  return (
    <div className="heroB">
      <HeroCopy variant="b" />
      <div className="heroB-fan">
        <Screen src="missions.png" className="f3" alt="Daily missions" />
        <Screen src="profile.png" className="f4" alt="Profile" />
        <Screen src="ranks.png" className="f1" alt="Ranks" />
        <Screen src="daily-rewards.png" className="f2" alt="Daily rewards" />
        <Screen src="library.png" className="f0" alt="Art library" />
        <div className="puck bob" style={{ top: "8%", left: "12%", zIndex: 9 }}>
          <span className="pi">🎨</span>
          <span><small>Canvases</small><b>1,200+</b></span>
        </div>
        <div className="puck bob s3" style={{ top: "20%", right: "10%", zIndex: 9 }}>
          <span className="pi">💎</span>
          <span><small>Gems</small><b>+250</b></span>
        </div>
      </div>
    </div>
  );
}

// Variant C — Split
function HeroC() {
  return (
    <div className="heroC">
      <div className="panel">
        <span className="dot" style={{ width: 90, height: 90, background: "rgba(255,255,255,.16)", top: "-20px", right: "-10px" }} />
        <span className="sq" style={{ width: 50, height: 50, background: "rgba(255,255,255,.12)", bottom: "30px", right: "40px", transform: "rotate(18deg)" }} />
        <Eyebrow>Color by number × magic tiles</Eyebrow>
        <h1 className="hero-title"><span className="l">Tap a color,</span><span className="l"><span className="pop">boom</span> — it's art.</span></h1>
        <p className="hero-sub">The cozy color-by-number game where every tile bursts into something beautiful. Paint, collect & climb the ranks.</p>
        <AppBadges />
        <div className="hero-meta">
          <span className="stars" style={{ color: "#fff" }}>★★★★★</span>
          <span className="mt" style={{ color: "rgba(255,255,255,.92)" }}><b style={{ color: "#fff" }}>4.9</b> · 10M+ painters</span>
        </div>
      </div>
      <div className="collage">
        <span className="dot" style={{ width: 18, height: 18, background: "var(--gold)", top: "14%", left: "12%" }} />
        <span className="sq" style={{ width: 16, height: 16, background: "var(--blue)", bottom: "18%", right: "16%", transform: "rotate(20deg)" }} />
        <Screen src="ranks.png" className="mini m1 bob s2" alt="Ranks" />
        <Screen src="daily-rewards.png" className="mini m2 bob s3" alt="Daily rewards" />
        <Screen src="library.png" className="bob" alt="Art library" />
      </div>
    </div>
  );
}

// Variant D — Headliner (big game presentation, app-landing style)
function HeroD() {
  return (
    <div className="heroD">
      <div className="copy">
        <div className="hd-top">
          <div className="app-icon" aria-label="Color Boom app icon">🎨</div>
          <button className="trailer" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="play">▶</span>
            <span>Trailer</span>
          </button>
        </div>
        <h1 className="wordmark">Color<br /><span className="pop">Boom</span></h1>
        <p className="hd-tag">
          Unwind with the cozy color-by-number game where every tile you fill bursts into art.
          <br />Join millions of painters enjoying it daily!
        </p>
        <div className="hd-badges">
          <a className="badge" href="#download" aria-label="Download on the App Store">
            <span className="gi"></span>
            <span className="bt"><small>Download on the</small><b>App Store</b></span>
          </a>
          <a className="badge" href="#download" aria-label="Get it on Google Play">
            <span className="gi">▶</span>
            <span className="bt"><small>Get it on</small><b>Google Play</b></span>
          </a>
          <a className="badge" href="#download" aria-label="Available at Amazon Appstore">
            <span className="gi">a</span>
            <span className="bt"><small>Available at</small><b>Amazon</b></span>
          </a>
        </div>
        <div className="hd-follow">
          <span className="fl">Follow Us</span>
          <div className="socials">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="TikTok">🎵</a>
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="Telegram">✈️</a>
          </div>
        </div>
      </div>

      <div className="hd-art-wrap">
        <span className="hd-ring r1" />
        <span className="hd-ring r2" />
        <span className="dot bob s2" style={{ width: 18, height: 18, background: "var(--gold)", top: "10%", left: "8%" }} />
        <span className="sq bob s3" style={{ width: 16, height: 16, background: "var(--blue)", bottom: "14%", right: "10%", transform: "rotate(20deg)" }} />
        <span className="dot bob" style={{ width: 24, height: 24, background: "var(--pink)", bottom: "6%", left: "16%" }} />
        <div className="hd-art bob">
          <image-slot id="hero-art" shape="rounded" radius="34"
            placeholder="Drop a finished Color Boom painting"
            style={{ width: "100%", height: "100%", display: "block" }}></image-slot>
        </div>
        <div className="hd-puck bob s2" style={{ top: "4%", right: "2%" }}>
          <span className="pi">🖼️</span>
          <span><small>Canvases</small><b>1,200+</b></span>
        </div>
        <div className="hd-puck bob s3" style={{ bottom: "2%", left: "-2%" }}>
          <span className="pi">⭐</span>
          <span><small>Rated</small><b>4.9</b></span>
        </div>
      </div>
    </div>
  );
}

function ScrollCue() {
  return (
    <a className="scroll-cue" href="#features" aria-label="See more features">
      <span className="sc-label">More features</span>
      <span className="chev">⌄</span>
    </a>
  );
}

function Hero({ variant }) {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        {variant === "d" && <HeroD />}
        {variant === "a" && <HeroA />}
        {variant === "b" && <HeroB />}
        {variant === "c" && <HeroC />}
      </div>
      {variant === "d" && <ScrollCue />}
    </header>
  );
}

Object.assign(window, { Hero });
