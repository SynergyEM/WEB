import React, { useState } from "react";
import "./styles.css";

type Zona = {
  id: string;
  titulo: string;
  emoji: string;
  x: string;
  y: string;
  texto: string;
};

const zonas: Zona[] = [
  {
    id: "risa",
    titulo: "Tu risa",
    emoji: "♡",
    x: "18%",
    y: "24%",
    texto:
      "Tu risa es de esas cosas que cambian un día normal. Cuando te ríes, mi corazón late más rápido.",
  },
  {
    id: "ojos",
    titulo: "Tus ojos",
    emoji: "✦",
    x: "48%",
    y: "20%",
    texto:
      "Tus ojos tienen algo que me calma y me distrae como un vicio. Son como un lugar al que podría volver muchas veces sin cansarme.",
  },
  {
    id: "manias",
    titulo: "Tus manías",
    emoji: "↝",
    x: "73%",
    y: "27%",
    texto:
      "Me gustan tus detalles pequeños: tus gestos, tus formas raras de enojarte, tus costumbres. Esas cosas que tal vez tú ni notas, pero yo sí.",
  },
  {
    id: "calma",
    titulo: "Tu calma",
    emoji: "✧",
    x: "45%",
    y: "45%",
    texto:
      "Hay algo en ti que se siente como una pausa. Como si el mundo bajara un poco el volumen cuando estamos solos.",
  },
  {
    id: "admiro",
    titulo: "Lo que admiro de ti",
    emoji: "★",
    x: "22%",
    y: "52%",
    texto:
      "Admiro cómo eres, incluso en las cosas que no presumes y de ser tú.",
  },
  {
    id: "suenos",
    titulo: "Tus sueños",
    emoji: "☁",
    x: "72%",
    y: "55%",
    texto:
      "Me gusta imaginar todo lo que vas a lograr. Ojalá nunca dudes de lo que eres capaz.",
  },
  {
    id: "querer",
    titulo: "Tu forma de querer",
    emoji: "♥",
    x: "25%",
    y: "75%",
    texto: "Tu forma de querer tiene algo especial. y por eso se siente real.",
  },
  {
    id: "recuerdos",
    titulo: "Recuerdos contigo",
    emoji: "▧",
    x: "67%",
    y: "77%",
    texto:
      "Hay momentos contigo que guardo como si fueran fotos. Pequeños recuerdos que quizá parecían simples, pero para mí significan mucho.",
  },
];

export default function App() {
  const [zonaActiva, setZonaActiva] = useState<string | null>(null);
  const [inicio, setInicio] = useState(true);

  const zona = zonas.find((z) => z.id === zonaActiva);

  return (
    <div className="pagina">
      {inicio && (
        <section className="portada">
          <div className="portada-caja">
            <div className="icono-portada">📍</div>
            <h1 className="titulo-portada">Mapa de Ti</h1>
            <p className="texto-portada">
              Dicen que los mapas sirven para encontrar tesoros… yo hice este
              para explicar por qué tú eres el mío.
            </p>
            <button className="boton-inicio" onClick={() => setInicio(false)}>
              Abrir el mapa
            </button>
          </div>
        </section>
      )}

      <header className="encabezado">
        <p className="etiqueta">☾ carta interactiva ✦</p>
        <h1 className="titulo">Mapa de Ti</h1>
        <p className="subtitulo">
          Toca una zona del mapa para descubrir lo que guardé ahí.
        </p>
      </header>

      <main className="mapa-contenedor">
        <div className="brujula">◉ N · E · S · O</div>

        <div className="mapa">
          <svg viewBox="0 0 900 650" className="dibujo-mapa">
            <path
              d="M127 162 C178 93 268 130 329 105 C407 73 478 125 541 104 C624 75 770 116 782 221 C853 268 807 371 761 398 C796 482 716 555 619 525 C553 602 442 554 390 590 C316 641 245 548 207 535 C131 563 70 500 104 420 C33 349 67 222 127 162 Z"
              fill="#fff3dd"
              stroke="#3b2a22"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M320 111 C300 220 326 300 292 405 C260 492 288 550 390 590"
              fill="none"
              stroke="#7b5b4b"
              strokeWidth="3"
              strokeDasharray="10 10"
            />
            <path
              d="M542 105 C502 217 504 328 612 525"
              fill="none"
              stroke="#7b5b4b"
              strokeWidth="3"
              strokeDasharray="10 10"
            />
            <path
              d="M104 420 C235 385 337 382 450 416 C558 450 661 428 761 398"
              fill="none"
              stroke="#7b5b4b"
              strokeWidth="3"
              strokeDasharray="10 10"
            />
            <path
              d="M318 300 C408 245 490 266 548 319 C486 354 427 370 353 354"
              fill="none"
              stroke="#7b5b4b"
              strokeWidth="3"
              strokeDasharray="8 10"
            />
            <path
              d="M235 535 C295 496 356 493 431 522"
              fill="none"
              stroke="#7b5b4b"
              strokeWidth="3"
              strokeDasharray="8 10"
            />
            <path
              d="M563 525 C620 467 690 460 748 500"
              fill="none"
              stroke="#7b5b4b"
              strokeWidth="3"
              strokeDasharray="8 10"
            />
            <path
              d="M120 580 C210 615 308 619 392 596 C478 572 561 592 660 566 C734 547 797 581 845 608"
              fill="none"
              stroke="#3b2a22"
              strokeWidth="3"
              strokeDasharray="12 12"
            />

            <text x="115" y="135" fontSize="34">
              ⛰
            </text>
            <text x="742" y="205" fontSize="38">
              ⚑
            </text>
            <text x="760" y="522" fontSize="34">
              ♡
            </text>
            <text x="72" y="500" fontSize="34">
              ✧
            </text>
            <text x="425" y="337" fontSize="46">
              ✿
            </text>
          </svg>

          {zonas.map((z) => (
            <button
              key={z.id}
              className="zona"
              style={{ left: z.x, top: z.y }}
              onClick={() => setZonaActiva(z.id)}
            >
              <span>{z.emoji}</span> {z.titulo}
            </button>
          ))}

          <div className="equis">×</div>
        </div>
      </main>

      <footer className="footer">♡ Eres mi lugar favorito. ♡</footer>

      {zona && (
        <div className="modal-fondo" onClick={() => setZonaActiva(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={() => setZonaActiva(null)}>
              ×
            </button>
            <p className="coordenada">{zona.emoji} Coordenada encontrada</p>
            <h2>{zona.titulo}</h2>
            <p>{zona.texto}</p>
          </div>
        </div>
      )}
    </div>
  );
}
