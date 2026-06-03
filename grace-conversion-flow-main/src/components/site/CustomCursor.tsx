import { useEffect, useRef, useState } from "react";

/* ───────────────────────────────────────────────
   ichta-style custom cursor for Lexi Translation Lab

   - A large outlined circle that TRAILS the mouse with
     smooth easing (lerp), plus a small solid dot that
     tracks the real pointer 1:1.
   - The big ring GROWS + fills when hovering anything
     marked interactive (a, button, [data-cursor]).
   - Hides the native cursor everywhere.
   - Auto-disabled on touch devices.

   Brand: navy + terracotta.
─────────────────────────────────────────────── */

const TERRA = "oklch(0.62 0.16 38)";
const NAVY  = "#1e2a4a";

export function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);

  // live mouse position
  const mouse = useRef({ x: 0, y: 0 });
  // eased ring position
  const ring  = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden]     = useState(true);
  const isTouch = useRef(false);

  useEffect(() => {
    // bail on touch devices — no cursor there
    isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch.current) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (hidden) setHidden(false);
      // dot tracks instantly
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    // detect hover over interactive elements
    const onOver = (e) => {
      const t = e.target.closest("a, button, [data-cursor], input, textarea, select");
      setHovering(!!t);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // smooth follow loop for the ring
    let raf;
    const lerp = (a, b, n) => a + (b - a) * n;
    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.15);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.15);
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [hidden]);

  if (isTouch.current) return null;

  return (
    <>
      <style>{`
        /* hide native cursor everywhere */
        * { cursor: none !important; }
      `}</style>

      {/* big trailing ring */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: hovering ? 64 : 40,
          height: hovering ? 64 : 40,
          borderRadius: "50%",
          border: `1.5px solid ${TERRA}`,
          background: hovering ? `${TERRA}1a` : "transparent",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: hidden ? 0 : 1,
          transition:
            "width 0.28s cubic-bezier(0.16,1,0.3,1), height 0.28s cubic-bezier(0.16,1,0.3,1), background 0.28s ease, opacity 0.25s ease",
          willChange: "transform",
          mixBlendMode: "normal",
        }}
      />

      {/* small solid dot — tracks pointer exactly */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: hovering ? 8 : 10,
          height: hovering ? 8 : 10,
          borderRadius: "50%",
          background: TERRA,
          pointerEvents: "none",
          zIndex: 99999,
          opacity: hidden ? 0 : 1,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.25s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}

/* ───────────────────────────────────────────────
   DEMO PAGE below — just to preview the cursor.
   In your real project you only need the component
   above. Move your mouse around and hover the
   buttons / links to see it react.
─────────────────────────────────────────────── */

export function Demo() {
  return (
    <div style={{
      minHeight: "100vh",
      background: NAVY,
      color: "#f5f0e8",
      fontFamily: "Georgia, serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 28,
      padding: 40,
      textAlign: "center",
    }}>
      <CustomCursor />
      <p style={{
        fontFamily: "system-ui, sans-serif",
        fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
        textTransform: "uppercase", color: TERRA
      }}>
        Move your mouse · Hover the buttons
      </p>
      <h1 style={{
        fontSize: "clamp(40px, 8vw, 96px)",
        fontWeight: 300, lineHeight: 1.05, fontStyle: "italic",
        margin: 0, maxWidth: 800
      }}>
        Professional Legal<br/>
        <span style={{ color: TERRA }}>Language Services</span>
      </h1>
      <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
        <button style={{
          fontFamily: "system-ui, sans-serif",
          padding: "14px 34px", fontSize: 13, fontWeight: 600,
          letterSpacing: "0.1em", textTransform: "uppercase",
          background: TERRA, border: "none", borderRadius: 2,
          color: "#f5f0e8"
        }}>
          Get a quote
        </button>
        <button style={{
          fontFamily: "system-ui, sans-serif",
          padding: "14px 34px", fontSize: 13, fontWeight: 500,
          letterSpacing: "0.1em", textTransform: "uppercase",
          background: "transparent", border: "1px solid #f5f0e840",
          borderRadius: 2, color: "#f5f0e8cc"
        }}>
          Our services
        </button>
      </div>
      <a href="#" data-cursor style={{
        fontFamily: "system-ui, sans-serif",
        color: "#f5f0e899", fontSize: 14, marginTop: 20,
        textDecoration: "underline", textUnderlineOffset: 4
      }}>
        This link reacts too →
      </a>
    </div>
  );
}
