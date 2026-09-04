"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  BookOpen,
  Clock3,
  Coffee,
  Leaf,
  MapPin,
  Menu,
  Music,
  Sparkles,
  Sun,
  Wifi,
  X,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menu = {
  coffee: [
    { name: "House Espresso", note: "Chocolate · jaggery · roasted almond", price: "₹120" },
    { name: "Cloud Cappuccino", note: "Double shot · textured milk · cacao", price: "₹180" },
    { name: "Spanish Latte", note: "Espresso · condensed milk · sea salt", price: "₹220" },
    { name: "The Vansh Mocha", note: "Dark cocoa · orange zest · espresso", price: "₹230" },
  ],
  cold: [
    { name: "Black Cold Brew", note: "18-hour steep · bright finish", price: "₹190" },
    { name: "Mango Coffee Tonic", note: "Espresso · mango · citrus tonic", price: "₹220" },
    { name: "Tiramisu Cold Brew", note: "Mascarpone cream · cocoa · cold brew", price: "₹250" },
    { name: "Coconut Matcha", note: "Ceremonial matcha · coconut cloud", price: "₹240" },
  ],
  bakes: [
    { name: "Almond Croissant", note: "Twice baked · almond frangipane", price: "₹190" },
    { name: "Cinnamon Knot", note: "Brown sugar · cinnamon · vanilla glaze", price: "₹170" },
    { name: "Burnt Cheesecake", note: "Caramelised top · soft centre", price: "₹230" },
    { name: "Sea Salt Cookie", note: "Dark chocolate · browned butter", price: "₹140" },
  ],
};

const weekly = [
  { day: "Tue", title: "Study table", time: "4—7 PM", icon: BookOpen },
  { day: "Fri", title: "Open mic", time: "7—9 PM", icon: Music },
  { day: "Sun", title: "Slow brew", time: "10 AM", icon: Coffee },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.13 },
    );

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty("--px", x.toFixed(3));
      document.documentElement.style.setProperty("--py", y.toFixed(3));
    };

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      document.documentElement.style.setProperty("--progress", `${progress}`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="cafe-site">
      <div className="page-progress" aria-hidden="true" />

      <header className="header">
        <a href="#top" className="logo" aria-label="cafe.vanshthirani home">
          café<span>.</span>vansh
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our space</a>
          <a href="#weekly">Weekly</a>
          <a href="#visit">Visit</a>
        </nav>

        <a className="header-cta" href="#visit">
          Find a table <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {["Menu", "Our space", "Weekly", "Visit"].map((label, index) => {
            const href = ["#menu", "#story", "#weekly", "#visit"][index];
            return (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{label}<ArrowUpRight size={20} />
              </a>
            );
          })}
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-meta hero-in delay-1">
              <span>New Delhi · Student concept</span>
              <span>Est. 2026</span>
            </div>

            <h1 className="hero-title hero-in delay-2">
              Coffee.
              <span>Quiet.</span>
              <em>Culture.</em>
            </h1>

            <p className="hero-description hero-in delay-3">
              A neighbourhood café for slow mornings, ambitious afternoons and
              conversations that run past the last sip.
            </p>

            <div className="hero-actions hero-in delay-4">
              <a className="primary-button" href="#menu">
                Explore the menu <ArrowDown size={18} />
              </a>
              <div className="open-note">
                <Clock3 size={18} />
                <span><strong>Open daily</strong> 8 AM — 10 PM</span>
              </div>
            </div>
          </div>

          <div className="hero-scene hero-in delay-3">
            <div className="scene-image" aria-hidden="true" />
            <div className="scene-shade" aria-hidden="true" />
            <div className="steam" aria-hidden="true">
              <i /><i /><i />
            </div>
            <img className="hero-cup" src="/cafe-cup.png" alt="Cream ceramic cappuccino cup" />
            <div className="scene-sticker">
              <Sparkles size={16} />
              <span>Made to stay awhile</span>
            </div>
            <div className="spin-seal" aria-hidden="true">
              <span>FRESHLY ROASTED · SLOWLY POURED · </span>
              <strong>CV</strong>
            </div>
          </div>

          <div className="hero-footer hero-in delay-4">
            <span>Small batch beans</span>
            <i />
            <span>Good music</span>
            <i />
            <span>Free Wi-Fi</span>
          </div>
        </section>

        <div className="marquee" aria-label="Cafe highlights">
          <div className="marquee-track">
            <span>Espresso with personality</span><b>✦</b>
            <span>Pastries baked daily</span><b>✦</b>
            <span>Stay for one more</span><b>✦</b>
            <span aria-hidden="true">Espresso with personality</span><b aria-hidden="true">✦</b>
            <span aria-hidden="true">Pastries baked daily</span><b aria-hidden="true">✦</b>
            <span aria-hidden="true">Stay for one more</span><b aria-hidden="true">✦</b>
          </div>
        </div>

        <section className="menu-section" id="menu">
          <div className="section-intro reveal">
            <p className="eyebrow">01 · Menu</p>
            <h2>Made for your <em>current mood.</em></h2>
            <p>Familiar favourites, one unexpected detail, and ingredients that earn their place.</p>
          </div>

          <Tabs defaultValue="coffee" className="menu-tabs reveal">
            <TabsList className="menu-tab-list">
              <TabsTrigger value="coffee">Hot coffee</TabsTrigger>
              <TabsTrigger value="cold">Cold & bright</TabsTrigger>
              <TabsTrigger value="bakes">Fresh bakes</TabsTrigger>
            </TabsList>

            {(Object.keys(menu) as Array<keyof typeof menu>).map((category) => (
              <TabsContent value={category} key={category} className="menu-panel">
                {menu[category].map((item, index) => (
                  <article className="menu-item" key={item.name}>
                    <span className="menu-number">0{index + 1}</span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.note}</p>
                    </div>
                    <span className="menu-dots" aria-hidden="true" />
                    <strong>{item.price}</strong>
                  </article>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div className="menu-foot reveal">
            <span><Leaf size={17} /> Oat milk available</span>
            <span>All prices include taxes</span>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-visual reveal">
            <div className="story-image" aria-hidden="true" />
            <div className="story-card story-card-one">
              <Coffee size={22} />
              <span>Single-origin</span>
              <strong>Arabica</strong>
            </div>
            <div className="story-card story-card-two">
              <Sun size={22} />
              <span>Morning light</span>
              <strong>8:00 AM</strong>
            </div>
          </div>

          <div className="story-copy reveal">
            <p className="eyebrow">02 · The space</p>
            <h2>Not a stop.<br /><em>A pause.</em></h2>
            <p className="story-lead">
              We designed every corner around the feeling of finally finding the
              right table.
            </p>
            <p>
              Warm timber, soft light, generous sockets and a soundtrack that
              never asks for attention. Come for coffee, stay to sketch, study,
              plan or do absolutely nothing.
            </p>
            <div className="story-perks">
              <span><Wifi size={18} /> Fast Wi-Fi</span>
              <span><BookOpen size={18} /> Reading shelf</span>
              <span><Music size={18} /> Vinyl corner</span>
            </div>
          </div>
        </section>

        <section className="ritual-section">
          <div className="section-intro reveal">
            <p className="eyebrow">03 · Our ritual</p>
            <h2>Three steps.<br /><em>Zero shortcuts.</em></h2>
          </div>

          <div className="ritual-grid">
            <article className="ritual-card reveal">
              <span>01</span>
              <div className="ritual-orbit"><i /></div>
              <p>Source</p>
              <h3>Beans with a clear story.</h3>
            </article>
            <article className="ritual-card reveal">
              <span>02</span>
              <div className="ritual-waves"><i /><i /><i /></div>
              <p>Dial in</p>
              <h3>Measured, tasted, adjusted.</h3>
            </article>
            <article className="ritual-card reveal">
              <span>03</span>
              <div className="ritual-sun"><i /></div>
              <p>Pour</p>
              <h3>Made for this exact cup.</h3>
            </article>
          </div>
        </section>

        <section className="weekly-section" id="weekly">
          <div className="weekly-top reveal">
            <div>
              <p className="eyebrow">04 · Weekly rhythm</p>
              <h2>There’s always<br /><em>something brewing.</em></h2>
            </div>
            <p>Low-pressure reasons to leave the group chat and meet at the café.</p>
          </div>

          <div className="weekly-list">
            {weekly.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="weekly-row reveal" key={item.title}>
                  <span>0{index + 1}</span>
                  <div className="weekly-icon"><Icon size={24} /></div>
                  <strong>{item.day}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.time}</p>
                  <ArrowRight size={24} />
                </article>
              );
            })}
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-copy reveal">
            <p className="eyebrow">05 · Visit</p>
            <h2>Your table is<br /><em>waiting.</em></h2>
            <p>cafe.vanshthirani is a student concept café project set in New Delhi.</p>
            <a href="mailto:vanshthirani.123@gmail.com" className="visit-button">
              Contact the creator <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="visit-board reveal">
            <div className="visit-line">
              <span><MapPin size={20} /> Location</span>
              <strong>New Delhi, India</strong>
            </div>
            <div className="visit-line">
              <span><Clock3 size={20} /> Monday—Sunday</span>
              <strong>8 AM — 10 PM</strong>
            </div>
            <div className="visit-line">
              <span><AtSign size={20} /> Instagram</span>
              <strong>@cafe.vanshthirani</strong>
            </div>
            <div className="map-art" aria-hidden="true">
              <i className="map-route" />
              <span className="map-pin"><Coffee size={20} /></span>
              <small>YOU’RE HERE</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">café<span>.</span>vansh</div>
        <p>Student concept project · 2026</p>
        <a href="#top">Back to top <ArrowUpRight size={16} /></a>
      </footer>
    </div>
  );
}
