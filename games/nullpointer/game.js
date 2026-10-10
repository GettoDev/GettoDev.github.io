var PalugoGame = (() => {
  // Engine/Palettes.js
  var PALETTE_NAMES = {
    VECTOR: "VECTOR NEON",
    RETRO: "RETRO GREEN",
    MONO: "MONOCHROME",
    SUNSET: "SUNSET HUES",
    CYBER: "CYBER PUNK"
  };
  var Palettes = {
    // VECTOR - Contiene los 45 colores vectoriales de alta visibilidad.
    // Integra tonos neón de azul, amarillo, verde y acentos complementarios.
    VECTOR: [
      "#030712",
      // 0  Fondo espacio negro / void abisal
      "#071a30",
      // 1  Fondo UI contenedor / Azul navy profundo
      "#00b4d8",
      // 2  Azul cian eléctrico neón (Subtítulos, bordes UI, secundario)
      "#ffffff",
      // 3  Blanco puro titanio (Alto contraste, texto principal nítido)
      "#1e90ff",
      // 4  Azul cobalto brillante (CRUISER)
      "#00ff66",
      // 5  Verde neón puro (Activos, vidas, indicadores OK)
      "#39ff14",
      // 6  Verde lima neón eléctrico (Destacados de interfaz)
      "#ffe600",
      // 7  Amarillo neón cyber (Selección, títulos, alertas)
      "#ffd000",
      // 8  Oro amarillo neón (Cursor de powerup)
      "#00f5d4",
      // 9  Cian turquesa neón
      "#10e860",
      // 10 Verde esmeralda neón (Bordes activos)
      "#70ff00",
      // 11 Verde chartreuse neón (Línea superior slot activo)
      "#0f2b48",
      // 12 Azul pizarra
      "#1b4965",
      // 13 Azul acero
      "#62b6cb",
      // 14 Azul hielo suave
      "#bee9e8",
      // 15 Azul pálido luminoso
      "#f9f871",
      // 16 Amarillo neón claro
      "#fff3b0",
      // 17 Amarillo marfil
      "#ffffff",
      // 18 Blanco puro (Balas, estrellas)
      "#ff0055",
      // 19 Carmesí oscuro (HEAVY)
      "#ff2a55",
      // 20 Carmesí neón (HUNTER)
      "#ff3366",
      // 21 Rojo láser neón (DRONE)
      "#ff6b35",
      // 22 Bermellón neón (SCOUT)
      "#ff9f1c",
      // 23 Mandarina neón (BOMBER)
      "#ffbf00",
      // 24 Ámbar dorado neón
      "#ffe600",
      // 25 Amarillo neón puro (Balas doradas, cursor)
      "#ffff70",
      // 26 Amarillo destello / Flash blanco-amarillo
      "#7209b7",
      // 27 Violeta cósmico profundo
      "#560bad",
      // 28 Índigo neón (WAVE)
      "#480ca8",
      // 29 Púrpura azulado
      "#3a0ca3",
      // 30 Amatista real (INTERCEPTOR)
      "#b5179e",
      // 31 Lavanda / Magenta neón (MOTHERSHIP)
      "#f72585",
      // 32 Rosa caliente neón
      "#4cc9f0",
      // 33 Azul cielo neón
      "#4895ef",
      // 34 Azul eléctrico
      "#4361ee",
      // 35 Azul real
      "#3f37c9",
      // 36 Azul marino profundo
      "#0077b6",
      // 37 Azul océano
      "#0096c7",
      // 38 Azul cerúleo
      "#00e5ff",
      // 39 Cian neón brillante
      "#00f0ff",
      // 40 Cian vivido
      "#05ffa1",
      // 41 Cian esmeralda
      "#00ff87",
      // 42 Verde primavera neón
      "#60efff",
      // 43 Cian resplandor
      "#00ff44"
      // 44 Verde matriz puro
    ],
    // RETRO - Clásica estética fósforo verde / Game Boy arcade
    RETRO: [
      "#061106",
      // 0  Fondo espacio musgo oscuro
      "#0f260f",
      // 1  Fondo UI contenedor verde oscuro
      "#397839",
      // 2  Borde verde bosque
      "#d8fcd8",
      // 3  Texto fósforo verde brillante
      "#306230",
      // 4  Verde oliva arcade
      "#8bac0f",
      // 5  Verde Game Boy OK
      "#9bbc0f",
      // 6  Verde lima claro
      "#bcf425",
      // 7  Amarillo lima neón título
      "#d0ff36",
      // 8  Cursor verde dorado
      "#4ade80",
      // 9  Menta verde
      "#22c55e",
      // 10 Esmeralda
      "#86efac",
      // 11 Menta brillante
      "#143814",
      // 12 Pino oscuro
      "#1b4d1b",
      // 13 Bosque medio
      "#2d6a4f",
      // 14 Verde azulado oscuro
      "#52b788",
      // 15 Salvia claro
      "#b7efc5",
      // 16 Fósforo claro
      "#d8f3dc",
      // 17 Marfil verdoso
      "#f0fff0",
      // 18 Balas / estrellas blanco fósforo
      "#4d7c0f",
      // 19 Oliva profundo (HEAVY)
      "#65a30d",
      // 20 Oliva brillante (HUNTER)
      "#84cc16",
      // 21 Lima láser (DRONE)
      "#a3e635",
      // 22 Lima vivo (SCOUT)
      "#bef264",
      // 23 Amarillo lima (BOMBER)
      "#d9f99d",
      // 24 Pálido lima
      "#ccff00",
      // 25 Fósforo amarillo neón (Cursor/balas)
      "#eeff99",
      // 26 Destello fósforo
      "#1e3a1e",
      // 27 Ciprés oscuro
      "#285228",
      // 28 Ciprés medio (WAVE)
      "#326632",
      // 29 Helecho
      "#3d7a3d",
      // 30 Jungla (INTERCEPTOR)
      "#4d994d",
      // 31 Hoja verde (MOTHERSHIP)
      "#5cb85c",
      // 32 Trébol
      "#70d670",
      // 33 Helecho brillante
      "#85e085",
      // 34 Menta pastel
      "#99eb99",
      // 35 Salvia luminosa
      "#163316",
      // 36 Sombra ciprés
      "#1e461e",
      // 37 Verde profundo
      "#275c27",
      // 38 Jade oscuro
      "#33ff33",
      // 39 Terminal verde puro
      "#55ff55",
      // 40 Verde fluorescente
      "#77ff77",
      // 41 Verde fósforo vívido
      "#aaffaa",
      // 42 Fósforo suave
      "#ccffcc",
      // 43 Menta pálido
      "#00ff00"
      // 44 Matriz verde puro
    ],
    // MONO - Monocromo / Fósforo blanco Vectrex de alto contraste
    MONO: [
      "#000000",
      // 0  Negro absoluto / void
      "#141414",
      // 1  Contenedor gris carbón
      "#666666",
      // 2  Bordes gris medio
      "#ffffff",
      // 3  Blanco puro titanio
      "#777777",
      // 4  Gris plata medio
      "#cccccc",
      // 5  Gris claro OK
      "#e0e0e0",
      // 6  Blanco suave
      "#ffffff",
      // 7  Blanco títulos
      "#d4d4d4",
      // 8  Cursor plata
      "#a8a8a8",
      // 9  Gris humo
      "#c0c0c0",
      // 10 Plata clásica
      "#e4e4e4",
      // 11 Platino
      "#1f1f1f",
      // 12 Carbón profundo
      "#2e2e2e",
      // 13 Grafito
      "#404040",
      // 14 Pizarra
      "#5c5c5c",
      // 15 Ceniza
      "#bfbfbf",
      // 16 Plata fina
      "#dcdcdc",
      // 17 Humo claro
      "#ffffff",
      // 18 Estrellas blanco puro
      "#525252",
      // 19 Plomo (HEAVY)
      "#696969",
      // 20 Peltre (HUNTER)
      "#808080",
      // 21 Gris neutro (DRONE)
      "#9c9c9c",
      // 22 Plata satinada (SCOUT)
      "#b8b8b8",
      // 23 Plata brillante (BOMBER)
      "#d1d1d1",
      // 24 Perla
      "#ffffff",
      // 25 Blanco estelar (Cursor/balas)
      "#ffffff",
      // 26 Destello blanco
      "#292929",
      // 27 Obsidiana
      "#3b3b3b",
      // 28 Acero oscuro (WAVE)
      "#4a4a4a",
      // 29 Acero medio
      "#5e5e5e",
      // 30 Acero claro (INTERCEPTOR)
      "#737373",
      // 31 Plata oscura (MOTHERSHIP)
      "#8a8a8a",
      // 32 Cromo
      "#a3a3a3",
      // 33 Cromo brillante
      "#bcbcbc",
      // 34 Cromo suave
      "#d6d6d6",
      // 35 Platino suave
      "#1a1a1a",
      // 36 Sombra gris
      "#262626",
      // 37 Basalto
      "#363636",
      // 38 Carbón mate
      "#ffffff",
      // 39 Rayo láser blanco puro
      "#e6e6e6",
      // 40 Resplandor blanco
      "#d9d9d9",
      // 41 Halo plata
      "#f2f2f2",
      // 42 Blanco niebla
      "#ffffff",
      // 43 Blanco cenit
      "#eeeeee"
      // 44 Blanco puro láser
    ],
    // SUNSET - Crepúsculo cálido / Degradados ámbar, mandarina y violeta
    SUNSET: [
      "#0d0517",
      // 0  Espacio violeta nocturno
      "#1d0b2e",
      // 1  Contenedor crepúsculo
      "#f77f00",
      // 2  Borde mandarina neón
      "#fff1e6",
      // 3  Texto marfil cálido
      "#e63946",
      // 4  Rojo sol poniente
      "#ffb703",
      // 5  Oro crepuscular OK
      "#fd9e02",
      // 6  Ámbar brillante
      "#fb8500",
      // 7  Oro solar título
      "#ffd166",
      // 8  Cursor oro brillante
      "#f48c06",
      // 9  Naranja fuego
      "#e85d04",
      // 10 Bermellón cálido
      "#dc2f02",
      // 11 Bermellón profundo
      "#2d1537",
      // 12 Uva nocturna
      "#3d1c47",
      // 13 Mora oscura
      "#5e245e",
      // 14 Ciruela
      "#8338ec",
      // 15 Púrpura horizonte
      "#ffbe0b",
      // 16 Amarillo sol
      "#ffe49e",
      // 17 Vainilla suave
      "#ffffff",
      // 18 Estrellas blanco puro
      "#9d0208",
      // 19 Carmesí oscuro (HEAVY)
      "#d00000",
      // 20 Rojo fuego (HUNTER)
      "#dc2f02",
      // 21 Fuego láser (DRONE)
      "#e85d04",
      // 22 Naranja solar (SCOUT)
      "#f48c06",
      // 23 Mandarina (BOMBER)
      "#faa307",
      // 24 Oro brillante
      "#ffba08",
      // 25 Oro estelar (Cursor/balas)
      "#ffea85",
      // 26 Destello solar
      "#3a0ca3",
      // 27 Violeta cósmico
      "#560bad",
      // 28 Añil crepúsculo (WAVE)
      "#7209b7",
      // 29 Amatista crepúsculo
      "#9d4edd",
      // 30 Lila brillante (INTERCEPTOR)
      "#c77dff",
      // 31 Lavanda solar (MOTHERSHIP)
      "#f72585",
      // 32 Magenta puesta de sol
      "#ff477e",
      // 33 Coral neón
      "#ff7096",
      // 34 Rosa crepúsculo
      "#ff85a1",
      // 35 Rosa suave
      "#25093b",
      // 36 Sombra ciruela
      "#320d4f",
      // 37 Crepúsculo profundo
      "#491174",
      // 38 Violeta real
      "#ff9e00",
      // 39 Naranja láser
      "#ffa200",
      // 40 Fulgor solar
      "#ffb703",
      // 41 Oro ámbar
      "#ffc300",
      // 42 Rayos de sol
      "#ffd000",
      // 43 Oro puro
      "#ff6000"
      // 44 Fuego horizonte
    ],
    // CYBER - Cyberpunk neón / Cian radioactivo, fucsia intenso y ultravioleta
    CYBER: [
      "#050510",
      // 0  Vacío cibernético abisal
      "#0d0f2b",
      // 1  Contenedor azul marino cyber
      "#00f0ff",
      // 2  Borde cian láser eléctrico
      "#ffffff",
      // 3  Texto blanco titanio
      "#ff007f",
      // 4  Fucsia magenta brillante
      "#00ffc8",
      // 5  Neo-Tokyo menta OK
      "#39ff14",
      // 6  Verde ácido
      "#ffe600",
      // 7  Amarillo voltaje título
      "#ff00ea",
      // 8  Cursor fucsia neón
      "#00e5ff",
      // 9  Aqua láser
      "#00ffa3",
      // 10 Esmeralda cyber
      "#70ff00",
      // 11 Chartreuse neón
      "#12163b",
      // 12 Pizarra digital
      "#1c2259",
      // 13 Azul digital
      "#2b3487",
      // 14 Cobalto
      "#00b4d8",
      // 15 Cian digital
      "#f7ff00",
      // 16 Amarillo hipervolt
      "#fff8a5",
      // 17 Marfil voltaje
      "#ffffff",
      // 18 Estrellas blanco puro
      "#d90429",
      // 19 Carmesí cyber (HEAVY)
      "#ef233c",
      // 20 Láser rojo neón (HUNTER)
      "#ff0055",
      // 21 Fucsia láser (DRONE)
      "#ff2a85",
      // 22 Rosa eléctrico (SCOUT)
      "#ff5400",
      // 23 Naranja radiactivo (BOMBER)
      "#ff9e00",
      // 24 Ámbar cyber
      "#ffe600",
      // 25 Oro cyber (Cursor/balas)
      "#ffff66",
      // 26 Destello voltaje
      "#4a00e0",
      // 27 Ultravioleta profundo
      "#6200ea",
      // 28 Violeta eléctrico (WAVE)
      "#7c4dff",
      // 29 Lavanda neón
      "#8e24aa",
      // 30 Púrpura cyber (INTERCEPTOR)
      "#d500f9",
      // 31 Violeta caliente (MOTHERSHIP)
      "#ff007f",
      // 32 Fucsia ácido
      "#00f5ff",
      // 33 Hielo cyber
      "#00d2ff",
      // 34 Plasma cian
      "#3a86ff",
      // 35 Azul neo
      "#180033",
      // 36 Sombra ultravioleta
      "#29004d",
      // 37 Ciruela cyber
      "#3d0066",
      // 38 Púrpura profundo
      "#00ffff",
      // 39 Cian cyber puro
      "#05ffa1",
      // 40 Bio verde neón
      "#ff00bf",
      // 41 Ultra rosa
      "#b026ff",
      // 42 Violeta fluorescente
      "#50e3c2",
      // 43 Turquesa matrix
      "#ff0055"
      // 44 Láser caliente
    ]
  };
  function clampPalette(palette, max = 45) {
    if (!Array.isArray(palette)) {
      return Palettes.VECTOR;
    }
    return palette.slice(0, max);
  }

  // Engine/Display.js
  function getNeonColors(palette) {
    const p = palette || Palettes.VECTOR;
    return {
      PLAYER: p[2] || p[4] || "#24f2f2",
      PLAYER_ACCENT: p[5] || p[7] || "#24f249",
      SCOUT: p[22] || "#f25c24",
      SCOUT_ALT: p[7] || p[25] || "#f2d554",
      HEAVY: p[19] || "#a724f2",
      HEAVY_ALT: p[20] || p[31] || "#f224cc",
      WHITE: p[3] || "#FFFFFF"
    };
  }
  var NEON = getNeonColors(Palettes.VECTOR);
  function hexWithAlpha(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  var Display = class {
    constructor(options = {}) {
      this.width = options.width || 640;
      this.height = options.height || 480;
      this.palette = clampPalette(options.palette || Palettes.VECTOR);
      this.windowed = options.windowed !== false;
      this.container = options.container || (typeof document !== "undefined" ? document.getElementById("palugo-window") || document.body : null);
      this.crtEnabled = true;
      this.flickerEnabled = true;
      this.vectorMode = true;
      this._enemyGeometryCache = /* @__PURE__ */ new Map();
      this._initEnemyGeometryCache();
      this._playerShipGeometryCache = /* @__PURE__ */ new Map();
      this._initPlayerShipGeometries();
      this.canvas = typeof document !== "undefined" ? document.createElement("canvas") : {};
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.id = "palugo-canvas";
      this.ctx = typeof document !== "undefined" && this.canvas.getContext ? this.canvas.getContext("2d") : null;
      if (this.ctx) {
        this.ctx.imageSmoothingEnabled = false;
      }
      this.setupCanvas();
      if (!this.windowed) {
        this._bindResize();
      }
    }
    _initEnemyGeometryCache() {
      const geometries = {
        SCOUT: {
          shipW: 28,
          shipH: 16,
          outer: [[0, 8], [12, 2], [26, 8], [22, 11], [26, 14], [12, 20], [0, 14], [4, 11]],
          innerLines: [[[12, 2], [4, 11]], [[12, 20], [4, 11]]],
          nodes: [[26, 8], [26, 14], [0, 11]],
          hasDoubleFin: true
        },
        DART: {
          shipW: 24,
          shipH: 14,
          outer: [[0, 7], [10, 3], [18, 6], [14, 0], [18, 6], [24, 11], [18, 14], [14, 21], [18, 14], [10, 17], [0, 14]],
          innerLines: [[[10, 3], [6, 11]], [[10, 17], [6, 11]]],
          nodes: [[24, 11], [0, 11]],
          hasDoubleFin: false
        },
        DRONE: {
          shipW: 32,
          shipH: 18,
          outer: [[4, 4], [28, 4], [32, 8], [32, 14], [28, 18], [4, 18], [0, 11]],
          innerLines: [[[8, 8], [24, 8]], [[8, 14], [24, 14]], [[12, 4], [12, 18]]],
          nodes: [[32, 11], [0, 11], [16, 11]],
          hasDoubleFin: false
        },
        INTERCEPTOR: {
          shipW: 38,
          shipH: 20,
          outer: [[4, 10], [16, 3], [28, 2], [36, 11], [28, 20], [16, 19], [4, 12]],
          innerLines: [[[16, 3], [10, 11]], [[16, 19], [10, 11]], [[28, 2], [22, 11]], [[28, 20], [22, 11]]],
          nodes: [[36, 11], [4, 11], [16, 11]],
          hasDoubleFin: false,
          cores: 1
        },
        HUNTER: {
          shipW: 40,
          shipH: 18,
          outer: [[0, 9], [14, 2], [28, 5], [40, 11], [28, 16], [14, 19], [0, 11]],
          innerLines: [[[14, 2], [8, 11]], [[14, 19], [8, 11]], [[28, 5], [20, 11]], [[28, 16], [20, 11]]],
          nodes: [[40, 11], [0, 11]],
          hasDoubleFin: false
        },
        WAVE: {
          shipW: 36,
          shipH: 22,
          outer: [[2, 11], [12, 3], [26, 3], [36, 11], [26, 19], [12, 19], [2, 11]],
          innerLines: [[[12, 3], [18, 11]], [[12, 19], [18, 11]], [[26, 3], [26, 19]]],
          nodes: [[36, 11], [2, 11], [18, 11]],
          hasDoubleFin: false,
          cores: 1
        },
        BOMBER: {
          shipW: 56,
          shipH: 28,
          outer: [[2, 14], [10, 4], [28, 5], [44, 9], [56, 14], [44, 19], [28, 23], [10, 24], [2, 14]],
          innerLines: [[[16, 8], [38, 8]], [[24, 4], [24, 12]], [[16, 20], [38, 20]], [[24, 16], [24, 24]], [[10, 14], [46, 14]], [[36, 9], [36, 19]]],
          nodes: [[56, 14], [2, 14], [28, 5], [28, 23], [44, 9], [44, 19]],
          hasDoubleFin: true,
          cores: 2
        },
        CRUISER: {
          shipW: 66,
          shipH: 26,
          outer: [[0, 13], [12, 5], [36, 4], [52, 7], [66, 13], [52, 19], [36, 22], [12, 21], [0, 13]],
          innerLines: [[[18, 8], [48, 8]], [[18, 18], [48, 18]], [[20, 5], [20, 21]], [[38, 5], [38, 21]], [[52, 7], [36, 13]], [[52, 19], [36, 13]], [[6, 13], [36, 13]]],
          nodes: [[66, 13], [0, 13], [36, 4], [36, 22], [52, 7], [52, 19], [20, 13]],
          hasDoubleFin: false,
          cores: 2
        },
        HEAVY: {
          shipW: 60,
          shipH: 30,
          outer: [[0, 15], [8, 4], [28, 3], [46, 6], [60, 11], [48, 15], [60, 19], [46, 24], [28, 27], [8, 26], [0, 15]],
          innerLines: [[[14, 7], [40, 7]], [[14, 23], [40, 23]], [[26, 3], [26, 27]], [[42, 6], [42, 24]], [[10, 15], [44, 15]]],
          nodes: [[60, 11], [60, 19], [0, 15], [28, 3], [28, 27], [18, 15], [38, 15]],
          hasDoubleFin: false,
          cores: 2
        },
        MOTHERSHIP: {
          shipW: 82,
          shipH: 36,
          outer: [[0, 18], [12, 4], [46, 4], [68, 9], [82, 18], [68, 27], [46, 32], [12, 32], [0, 18]],
          innerLines: [[[16, 18], [66, 18]], [[18, 8], [54, 8]], [[18, 28], [54, 28]], [[28, 4], [28, 32]], [[48, 4], [48, 32]], [[68, 9], [54, 18]], [[68, 27], [54, 18]]],
          nodes: [[82, 18], [0, 18], [12, 4], [12, 32], [46, 4], [46, 32], [28, 18], [48, 18], [68, 18]],
          hasDoubleFin: false,
          cores: 3
        },
        CARRIER: {
          shipW: 28,
          shipH: 18,
          outer: [[4, 4], [20, 4], [24, 8], [24, 14], [20, 18], [4, 18], [0, 11]],
          innerLines: [[[8, 8], [16, 8]], [[12, 4], [12, 18]]],
          nodes: [[24, 9], [0, 9], [12, 9]],
          hasDoubleFin: false
        },
        STALKER: {
          shipW: 48,
          shipH: 26,
          outer: [[4, 13], [16, 3], [32, 2], [48, 13], [32, 23], [16, 22], [4, 13]],
          innerLines: [[[16, 3], [10, 13]], [[16, 22], [10, 13]], [[32, 2], [24, 13]], [[32, 23], [24, 13]]],
          nodes: [[48, 13], [4, 13], [16, 13]],
          hasDoubleFin: false,
          cores: 1
        },
        SPLITTER: {
          shipW: 32,
          shipH: 18,
          outer: [[2, 9], [10, 3], [22, 3], [32, 9], [22, 15], [10, 15], [2, 9]],
          innerLines: [[[10, 3], [16, 9]], [[10, 15], [16, 9]], [[22, 3], [22, 15]]],
          nodes: [[32, 9], [2, 9], [16, 9]],
          hasDoubleFin: false
        },
        SHIELDER: {
          shipW: 56,
          shipH: 28,
          outer: [[0, 14], [14, 4], [42, 4], [56, 14], [42, 24], [14, 24], [0, 14]],
          innerLines: [[[14, 4], [42, 4]], [[14, 24], [42, 24]], [[28, 4], [28, 24]], [[20, 8], [20, 20]], [[36, 8], [36, 20]]],
          nodes: [[56, 14], [0, 14], [14, 4], [42, 4], [28, 14]],
          hasDoubleFin: false,
          cores: 1
        },
        KAMIKAZE: {
          shipW: 24,
          shipH: 16,
          outer: [[0, 8], [8, 2], [20, 2], [24, 8], [20, 14], [8, 14], [0, 8]],
          innerLines: [[[8, 2], [8, 14]], [[16, 2], [16, 14]]],
          nodes: [[24, 8], [0, 8], [12, 8]],
          hasDoubleFin: false
        },
        DEFAULT: {
          shipW: 38,
          shipH: 22,
          outer: [[4, 4], [28, 4], [28, 18], [4, 18], [0, 11]],
          innerLines: [[[10, 7], [20, 7]]],
          nodes: [[28, 11], [0, 11]],
          hasDoubleFin: false
        }
      };
      for (const [type, geo] of Object.entries(geometries)) {
        this._enemyGeometryCache.set(type, geo);
      }
    }
    // Player ship geometries - unique designs for each ship type
    _initPlayerShipGeometries() {
      this._playerShipGeometryCache = /* @__PURE__ */ new Map();
      const playerGeometries = {
        DEFAULT: {
          shipW: 48,
          shipH: 16,
          outer: [[0, 8], [16, 2], [32, 6], [48, 8], [36, 14], [12, 14], [0, 8]],
          innerLines: [[[16, 2], [24, 8]], [[32, 6], [24, 8]], [[12, 14], [24, 8]]],
          nodes: [[48, 8], [24, 8], [36, 14], [12, 14]],
          hasDoubleFin: false,
          thrusterCount: 2
        },
        INTERCEPTOR: {
          shipW: 40,
          shipH: 14,
          outer: [[0, 7], [8, 3], [24, 2], [40, 7], [32, 11], [8, 11], [0, 7]],
          innerLines: [[[8, 3], [18, 7]], [[24, 2], [18, 7]], [[32, 11], [18, 7]], [[8, 11], [18, 7]]],
          nodes: [[40, 7], [18, 7], [32, 11], [8, 11]],
          hasDoubleFin: true,
          thrusterCount: 2
        },
        BOMBER: {
          shipW: 64,
          shipH: 28,
          outer: [[0, 14], [12, 6], [32, 4], [52, 6], [64, 14], [52, 22], [32, 24], [12, 22], [0, 14]],
          innerLines: [[[12, 6], [26, 14]], [[32, 4], [26, 14]], [[52, 6], [42, 14]], [[52, 22], [42, 14]], [[12, 22], [26, 14]], [[32, 4], [42, 14]], [[32, 24], [42, 14]]],
          nodes: [[64, 14], [26, 14], [52, 22], [12, 22], [42, 14], [32, 4], [32, 24]],
          hasDoubleFin: false,
          thrusterCount: 4
        },
        PHANTOM: {
          shipW: 36,
          shipH: 12,
          outer: [[0, 6], [10, 2], [26, 2], [36, 6], [28, 10], [8, 10], [0, 6]],
          innerLines: [[[10, 2], [18, 6]], [[26, 2], [18, 6]], [[28, 10], [18, 6]], [[8, 10], [18, 6]]],
          nodes: [[36, 6], [18, 6], [28, 10], [8, 10]],
          hasDoubleFin: false,
          thrusterCount: 2
        },
        PROTOTYPE: {
          shipW: 52,
          shipH: 18,
          outer: [[0, 9], [12, 3], [28, 2], [44, 4], [52, 9], [44, 15], [28, 16], [12, 15], [0, 9]],
          innerLines: [[[12, 3], [20, 9]], [[28, 2], [20, 9]], [[44, 4], [36, 9]], [[44, 15], [36, 9]], [[12, 15], [20, 9]], [[28, 2], [36, 9]], [[28, 16], [36, 9]]],
          nodes: [[52, 9], [20, 9], [44, 15], [12, 15], [36, 9], [28, 2], [28, 16]],
          hasDoubleFin: true,
          thrusterCount: 4
        }
      };
      for (const [type, geo] of Object.entries(playerGeometries)) {
        this._playerShipGeometryCache.set(type, geo);
      }
    }
    _getEnemyGeometry(typeKey) {
      return this._enemyGeometryCache.get(typeKey) || this._enemyGeometryCache.get("DEFAULT");
    }
    setupCanvas() {
      if (typeof document === "undefined") {
        return;
      }
      if (!this.container) {
        this.container = document.getElementById("palugo-window") || document.body;
      }
      if (!this.container) {
        return;
      }
      if (this.windowed) {
        this.canvas.style.cssText = `
        display:block;
        width:${this.width}px;
        height:${this.height}px;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        background: ${this.palette[0]};
      `;
        if (this.container === document.body) {
          this.wrapper = document.createElement("div");
          this.wrapper.id = "palugo-window";
          this.wrapper.style.cssText = `
          width:${this.width}px;
          height:${this.height}px;
          background:#000;
          border:2px solid #306230;
          border-top: 18px solid #306230;
          box-shadow: 0 6px 20px rgba(0,0,0,0.6), inset 0 0 0 1px #0f380f;
          overflow:hidden;
          position:relative;
          flex-shrink:0;
          box-sizing: content-box;
        `;
          this.wrapper.appendChild(this.canvas);
          this.container.appendChild(this.wrapper);
        } else {
          this.container.style.overflow = "hidden";
          this.container.style.position = "relative";
          this.container.style.boxSizing = "content-box";
          this.container.appendChild(this.canvas);
          this.wrapper = this.container;
        }
        this._applyWindowedResponsive();
        window.addEventListener("resize", () => this._applyWindowedResponsive());
        this.setCRT(true);
        this.setFlicker(true);
      } else {
        this.wrapper = document.createElement("div");
        this.wrapper.id = "palugo-wrapper";
        this.wrapper.style.cssText = `
        display:flex; align-items:center; justify-content:center;
        width:100%; height:100%; position:fixed; inset:0;
        background:#000; overflow:hidden; z-index:1;
      `;
        this.canvas.style.cssText = `
        display:block;
        max-width:100vw;
        max-height:100vh;
        aspect-ratio: 4 / 3;
        object-fit: contain;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        background: ${this.palette[0]};
      `;
        this.wrapper.appendChild(this.canvas);
        this.container.appendChild(this.wrapper);
        this.applyScaling();
        requestAnimationFrame(() => this.applyScaling());
        setTimeout(() => this.applyScaling(), 100);
        this.setCRT(true);
        this.setFlicker(true);
      }
    }
    _applyWindowedResponsive() {
      const win = this.wrapper;
      if (!win) {
        return;
      }
      if (document.body?.classList.contains("palugo-mobile-mode")) {
        const vw2 = window.innerWidth;
        const vh2 = window.innerHeight;
        const isPortrait = vh2 > vw2;
        if (isPortrait) {
          const gameH = Math.min(Math.floor(vw2 * (this.height / this.width)), Math.floor(vh2 * 0.52));
          win.style.width = "100vw";
          win.style.height = `${gameH}px`;
          this.canvas.style.width = "100vw";
          this.canvas.style.height = `${gameH}px`;
          return;
        }
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scaleW = vw / this.width;
      const scaleH = vh / this.height;
      const scale = Math.min(scaleW, scaleH);
      const scaledW = Math.floor(this.width * scale);
      const scaledH = Math.floor(this.height * scale);
      win.style.width = `${scaledW}px`;
      win.style.height = `${scaledH}px`;
      this.canvas.style.width = `${scaledW}px`;
      this.canvas.style.height = `${scaledH}px`;
    }
    _bindResize() {
      window.addEventListener("resize", () => this.applyScaling());
      window.addEventListener("orientationchange", () => setTimeout(() => this.applyScaling(), 100));
      window.matchMedia?.(`(resolution: ${window.devicePixelRatio}dppx)`)?.addEventListener?.("change", () => this.applyScaling());
    }
    applyScaling() {
      if (this.windowed) {
        return;
      }
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (!vw || !vh) {
        return;
      }
      const scale = Math.min(vw / this.width, vh / this.height);
      if (scale <= 0) {
        return;
      }
      this.canvas.style.width = `${Math.floor(this.width * scale)}px`;
      this.canvas.style.height = `${Math.floor(this.height * scale)}px`;
    }
    setPalette(palette) {
      this.palette = clampPalette(palette);
      if (this.canvas) this.canvas.style.background = this.palette[0];
      if (this.wrapper && this.wrapper.id === "palugo-window") {
        this.wrapper.style.borderColor = this.palette[2];
        this.wrapper.style.borderTopColor = this.palette[2];
      }
    }
    getNeon() {
      return getNeonColors(this.palette);
    }
    setPalettePreset(name) {
      if (Palettes[name]) {
        this.setPalette(Palettes[name]);
        this.vectorMode = true;
        this.canvas.classList.toggle("vector-mode", this.vectorMode);
      }
    }
    getPalette() {
      return [...this.palette];
    }
    isVector() {
      return !!this.vectorMode;
    }
    drawLine(x0, y0, x1, y1, colorIndex = 3, lineWidth = 1.5) {
      this.ctx.save();
      this.ctx.strokeStyle = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[3];
      this.ctx.lineWidth = lineWidth;
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
      if (this.vectorMode) {
        this.ctx.shadowColor = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[3];
        this.ctx.shadowBlur = 6;
      }
      this.ctx.beginPath();
      this.ctx.moveTo(x0 | 0, y0 | 0);
      this.ctx.lineTo(x1 | 0, y1 | 0);
      this.ctx.stroke();
      this.ctx.restore();
    }
    drawPoly(points, colorIndex = 3, fill = false, close = true) {
      if (!points.length) {
        return;
      }
      this.ctx.save();
      this.ctx.strokeStyle = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[3];
      this.ctx.fillStyle = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[3];
      this.ctx.lineWidth = this.vectorMode ? 2.2 : 1.2;
      this.ctx.lineJoin = "round";
      if (this.vectorMode) {
        this.ctx.shadowColor = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[3];
        this.ctx.shadowBlur = 10;
      }
      this.ctx.beginPath();
      this.ctx.moveTo(points[0][0] | 0, points[0][1] | 0);
      for (let i = 1; i < points.length; i++) {
        this.ctx.lineTo(points[i][0] | 0, points[i][1] | 0);
      }
      if (close) {
        this.ctx.closePath();
      }
      if (fill) {
        this.ctx.globalAlpha = this.vectorMode ? 0.55 : 1;
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
      }
      this.ctx.stroke();
      this.ctx.restore();
    }
    // ── Renderizado Vectorial: Nave del Jugador ─────────────────────────
    drawVectorShip(x, y, color = 18, scale = 1, shipType = "DEFAULT") {
      const ctx = this.ctx;
      const p = this.palette;
      const shipCol = typeof color === "string" ? color : p[color] || p[4] || p[2];
      const neonCyan = p[2] || shipCol;
      const neonBlue = p[4] || shipCol;
      const neonRed = p[20] || p[19] || p[7];
      const white = p[3] || p[18] || "#ffffff";
      const glowGold = p[25] || p[8] || "#ffd040";
      const geo = this._playerShipGeometryCache.get(shipType) || this._playerShipGeometryCache.get("DEFAULT");
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.save();
      ctx.globalAlpha = 0.14;
      ctx.fillStyle = neonCyan;
      ctx.beginPath();
      ctx.moveTo(geo.outer[0][0], geo.outer[0][1]);
      for (let i = 1; i < geo.outer.length; i++) {
        ctx.lineTo(geo.outer[i][0], geo.outer[i][1]);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = white;
      ctx.lineWidth = 1.8;
      ctx.shadowColor = neonCyan;
      ctx.shadowBlur = 10;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      geo.innerLines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line[0][0], line[0][1]);
        ctx.lineTo(line[1][0], line[1][1]);
        ctx.stroke();
      });
      if (geo.nodes && geo.nodes.length > 0) {
        geo.nodes.forEach((node) => {
          ctx.beginPath();
          ctx.arc(node[0], node[1], 2, 0, Math.PI * 2);
          ctx.stroke();
        });
      }
      if (geo.hasDoubleFin) {
        ctx.strokeStyle = neonCyan;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(geo.outer[1][0], geo.outer[1][1]);
        ctx.lineTo(geo.outer[1][0] - 4, geo.outer[1][1] + 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(geo.outer[geo.outer.length - 2][0], geo.outer[geo.outer.length - 2][1]);
        ctx.lineTo(geo.outer[geo.outer.length - 2][0] - 4, geo.outer[geo.outer.length - 2][1] - 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(18, 17);
      ctx.lineTo(34, 18);
      ctx.lineTo(48, 19);
      ctx.lineTo(48, 17);
      ctx.lineTo(32, 14.5);
      ctx.lineTo(22, 14.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = glowGold;
      ctx.lineWidth = 1.2;
      ctx.moveTo(20, 14);
      ctx.lineTo(34, 14);
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = white;
      ctx.lineWidth = 1.8;
      ctx.moveTo(24, 10);
      ctx.lineTo(8, 3);
      ctx.lineTo(2, 1);
      ctx.lineTo(6, 7);
      ctx.lineTo(12, 10);
      ctx.lineTo(4, 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(24, 18);
      ctx.lineTo(8, 25);
      ctx.lineTo(2, 27);
      ctx.lineTo(6, 21);
      ctx.lineTo(12, 18);
      ctx.lineTo(4, 18);
      ctx.stroke();
      if (geo.thrusterCount) {
        ctx.strokeStyle = neonBlue;
        ctx.lineWidth = 1.6;
        const thrusterBaseY2 = geo.shipH / 2;
        const thrusterSpacing2 = 4;
        for (let i = 0; i < geo.thrusterCount; i++) {
          const offset = (i - (geo.thrusterCount - 1) / 2) * thrusterSpacing2;
          ctx.beginPath();
          ctx.moveTo(0, thrusterBaseY2 + offset);
          ctx.lineTo(-3, thrusterBaseY2 + offset);
          ctx.lineTo(-3, thrusterBaseY2 + offset + 3);
          ctx.lineTo(0, thrusterBaseY2 + offset + 3);
          ctx.stroke();
        }
      }
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = neonRed;
      ctx.shadowColor = neonRed;
      ctx.shadowBlur = 6;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(8, geo.shipH / 2);
      ctx.lineTo(16, geo.shipH / 2);
      ctx.stroke();
      ctx.strokeStyle = neonCyan;
      ctx.shadowColor = neonCyan;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(16, geo.shipH / 2 - 3);
      ctx.lineTo(8, geo.shipH / 2);
      ctx.moveTo(16, geo.shipH / 2 + 3);
      ctx.lineTo(8, geo.shipH / 2);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = neonCyan;
      ctx.strokeStyle = white;
      ctx.shadowColor = neonCyan;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      const cockpitY = geo.shipH / 2;
      ctx.moveTo(12, cockpitY);
      ctx.lineTo(18, cockpitY - 2.5);
      ctx.lineTo(24, cockpitY);
      ctx.lineTo(18, cockpitY + 2.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = white;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(16, cockpitY - 1);
      ctx.lineTo(22, cockpitY + 0.8);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = white;
      ctx.shadowColor = neonCyan;
      ctx.shadowBlur = 6;
      const nodePositions = geo.nodes || [
        [geo.shipW - 4, geo.shipH / 2 - 3],
        // Front tip
        [geo.shipW - 4, geo.shipH / 2 + 3],
        // Front tip lower
        [4, geo.shipH / 2 - 3],
        // Back tip
        [4, geo.shipH / 2 + 3]
        // Back tip lower
      ];
      nodePositions.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node[0], node[1], 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
      ctx.save();
      ctx.lineCap = "round";
      const thrusterCount = geo.thrusterCount || 2;
      const thrusterSpacing = 4;
      const thrusterBaseY = geo.shipH / 2;
      for (let e = 0; e < thrusterCount; e++) {
        const offset = (e - (thrusterCount - 1) / 2) * thrusterSpacing;
        const ey = thrusterBaseY + offset;
        const plumeLen = 8 + Math.random() * 11;
        ctx.strokeStyle = neonCyan;
        ctx.shadowColor = neonCyan;
        ctx.shadowBlur = 12;
        ctx.lineWidth = 2.2;
        ctx.globalAlpha = 0.8 + Math.random() * 0.2;
        ctx.beginPath();
        ctx.moveTo(-1, ey);
        ctx.lineTo(-1 - plumeLen, ey + (Math.random() - 0.5) * 1.5);
        ctx.stroke();
        const coreLen = 4 + Math.random() * 5;
        ctx.strokeStyle = white;
        ctx.shadowColor = white;
        ctx.shadowBlur = 8;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.moveTo(-1, ey);
        ctx.lineTo(-1 - coreLen, ey);
        ctx.stroke();
      }
      ctx.restore();
      ctx.restore();
    }
    drawVectorEnemy(x, y, typeKey, colorIdx, flipX = false, isFlash = false) {
      const ctx = this.ctx;
      const t = typeKey || "DRONE";
      const neon = this.getNeon();
      let primary, secondary;
      if (isFlash) {
        primary = neon.WHITE;
        secondary = this.palette[25] || this.palette[8] || "#ffd040";
      } else {
        const customCol = typeof colorIdx === "number" && this.palette[colorIdx] ? this.palette[colorIdx] : null;
        if (["SCOUT", "DART", "DRONE"].includes(t)) {
          primary = customCol || neon.SCOUT;
          secondary = neon.SCOUT_ALT;
        } else if (["INTERCEPTOR", "HUNTER", "WAVE"].includes(t)) {
          primary = customCol || neon.SCOUT_ALT;
          secondary = neon.SCOUT;
        } else if (["BOMBER", "CRUISER"].includes(t)) {
          primary = customCol || neon.HEAVY;
          secondary = neon.HEAVY_ALT;
        } else {
          primary = customCol || neon.HEAVY_ALT;
          secondary = neon.HEAVY;
        }
      }
      const white = neon.WHITE;
      const flip = flipX ? -1 : 1;
      const geo = this._getEnemyGeometry(t);
      const { shipW, shipH, outer, innerLines, nodes, cores = 1, hasDoubleFin = false } = geo;
      ctx.save();
      ctx.translate(x, y);
      if (flip === -1) {
        ctx.scale(-1, 1);
        ctx.translate(-shipW, 0);
      }
      ctx.save();
      ctx.globalAlpha = 0.13;
      ctx.fillStyle = primary;
      ctx.beginPath();
      ctx.moveTo(outer[0][0], outer[0][1]);
      for (let i = 1; i < outer.length; i++) {
        ctx.lineTo(outer[i][0], outer[i][1]);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = primary;
      ctx.lineWidth = 2;
      ctx.shadowColor = primary;
      ctx.shadowBlur = 10;
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(outer[0][0], outer[0][1]);
      for (let i = 1; i < outer.length; i++) {
        ctx.lineTo(outer[i][0], outer[i][1]);
      }
      ctx.closePath();
      ctx.stroke();
      if (hasDoubleFin) {
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(outer[0][0], outer[0][1]);
        ctx.lineTo(outer[0][0] + 6, outer[0][1]);
        ctx.moveTo(outer[outer.length - 2][0], outer[outer.length - 2][1]);
        ctx.lineTo(outer[outer.length - 2][0] + 6, outer[outer.length - 2][1]);
        ctx.stroke();
      }
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = secondary;
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1.1;
      ctx.shadowColor = secondary;
      ctx.shadowBlur = 6;
      for (const seg of innerLines) {
        ctx.beginPath();
        ctx.moveTo(seg[0][0], seg[0][1]);
        ctx.lineTo(seg[1][0], seg[1][1]);
        ctx.stroke();
      }
      ctx.restore();
      ctx.save();
      ctx.fillStyle = white;
      ctx.shadowColor = white;
      ctx.shadowBlur = 7;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n[0], n[1], 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.save();
      ctx.fillStyle = white;
      ctx.shadowColor = white;
      ctx.shadowBlur = 14;
      const cy = shipH / 2;
      const cx = shipW / 2 + (flip === -1 ? -4 : 4);
      const drawCore = (x2, y2, s = 3) => {
        ctx.beginPath();
        ctx.moveTo(x2, y2 - s);
        ctx.lineTo(x2 + s * 0.7, y2);
        ctx.lineTo(x2, y2 + s);
        ctx.lineTo(x2 - s * 0.7, y2);
        ctx.closePath();
        ctx.fill();
      };
      if (cores >= 1) drawCore(cx, cy);
      if (cores >= 2) drawCore(cx - 10, cy);
      if (cores >= 3) drawCore(cx + 10, cy);
      ctx.restore();
      if (["HEAVY", "MOTHERSHIP", "CRUISER", "BOMBER"].includes(t)) {
        ctx.save();
        ctx.strokeStyle = white;
        ctx.shadowColor = white;
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 0.85;
        ctx.lineWidth = 1.5;
        const tx = flip === -1 ? shipW - 2 : 2;
        const thrusterCount = t === "MOTHERSHIP" ? 4 : 3;
        for (let i = 0; i < thrusterCount; i++) {
          const off = (i - (thrusterCount - 1) / 2) * 5;
          const len = 6 + Math.random() * 8;
          ctx.beginPath();
          ctx.moveTo(tx, cy + off);
          ctx.lineTo(tx + (flip === -1 ? len : -len), cy + off + (Math.random() - 0.5) * 2);
          ctx.stroke();
        }
        ctx.restore();
      }
      ctx.restore();
    }
    setCRT(enabled) {
      this.crtEnabled = true;
      let crt = document.getElementById("palugo-crt");
      if (this.crtEnabled) {
        if (!crt) {
          crt = document.createElement("div");
          crt.id = "palugo-crt";
          crt.style.cssText = `
          position:absolute; inset:0; pointer-events:none; z-index:6;
          background:
            repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.184) 3px),
            radial-gradient(ellipse at center, transparent 68%, rgba(0,0,0,0.253) 100%);
          opacity:1;
          mix-blend-mode: normal;
        `;
          const style = document.createElement("style");
          style.id = "palugo-crt-style";
          style.textContent = `
          @keyframes palugo-flicker { 0%{opacity:0.96} 50%{opacity:1} 100%{opacity:0.97} }
          #palugo-crt { animation: palugo-flicker 0.14s steps(2) infinite; }
          #palugo-canvas.crt-on { filter: contrast(1.22) brightness(1.20) saturate(1.24); }
        `;
          if (!document.getElementById("palugo-crt-style")) {
            document.head.appendChild(style);
          }
          this.wrapper.appendChild(crt);
        }
        crt.style.display = "block";
        this.canvas.classList.add("crt-on");
      } else {
        if (crt) {
          crt.style.display = "none";
        }
        this.canvas.classList.remove("crt-on");
        this.canvas.style.filter = "none";
      }
    }
    toggleCRT() {
      this.setCRT(true);
      return this.crtEnabled;
    }
    setFlicker(enabled) {
      this.flickerEnabled = true;
      let flick = document.getElementById("palugo-flicker");
      if (this.flickerEnabled) {
        if (!flick) {
          flick = document.createElement("div");
          flick.id = "palugo-flicker";
          flick.style.cssText = `
          position:absolute; inset:0; pointer-events:none; z-index:7;
          background: linear-gradient(transparent 50%, rgba(255,255,255,0.02) 50%);
          background-size: 100% 4px;
          opacity:1;
        `;
          const style = document.createElement("style");
          style.id = "palugo-flicker-style";
          style.textContent = `
          @keyframes palugo-tube-flicker {
            0%{ opacity:0.92; filter:brightness(1); }
            4%{ opacity:0.88; filter:brightness(1.12); }
            5%{ opacity:0.98; filter:brightness(0.98); }
            8%{ opacity:0.94; filter:brightness(1.06); }
            12%{ opacity:1; filter:brightness(1); }
            70%{ opacity:1; filter:brightness(1); }
            71%{ opacity:0.85; filter:brightness(1.18); }
            72%{ opacity:1; filter:brightness(1); }
            100%{ opacity:0.97; filter:brightness(1); }
          }
          #palugo-flicker.flicker-on { animation: palugo-tube-flicker 0.18s steps(1) infinite; }
          #palugo-flicker.flicker-on::after {
            content:""; position:absolute; inset:0;
            background: radial-gradient(ellipse at center, transparent 60%, rgba(255,255,200,0.04) 100%);
            animation: palugo-tube-flicker 0.18s steps(1) infinite reverse;
          }
        `;
          if (!document.getElementById("palugo-flicker-style")) {
            document.head.appendChild(style);
          }
          this.wrapper.appendChild(flick);
        }
        flick.classList.add("flicker-on");
        flick.style.display = "block";
        if (!this._flickerFlashId) {
          this._flickerFlashId = setInterval(() => {
            if (!this.flickerEnabled || !flick) {
              return;
            }
            flick.style.background = "rgba(255,255,220,0.08)";
            setTimeout(() => {
              if (flick) {
                flick.style.background = "linear-gradient(transparent 50%, rgba(255,255,255,0.02) 50%)";
              }
              flick.style.backgroundSize = "100% 4px";
            }, 40);
          }, 3200 + Math.random() * 1800);
        }
      } else {
        if (flick) {
          flick.classList.remove("flicker-on");
          flick.style.display = "none";
        }
        if (this._flickerFlashId) {
          clearInterval(this._flickerFlashId);
          this._flickerFlashId = null;
        }
      }
    }
    toggleFlicker() {
      this.setFlicker(true);
      return this.flickerEnabled;
    }
    clear(colorIndex = 0) {
      this.ctx.fillStyle = this.palette[colorIndex] || this.palette[0];
      this.ctx.fillRect(0, 0, this.width, this.height);
    }
    drawPixel(x, y, colorIndex = 3) {
      this.ctx.fillStyle = this.palette[colorIndex] || this.palette[0];
      this.ctx.fillRect(x | 0, y | 0, 1, 1);
    }
    drawRect(x, y, w, h, colorIndex = 3, fill = true) {
      this.ctx.fillStyle = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[0];
      this.ctx.strokeStyle = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[0];
      if (fill) {
        this.ctx.fillRect(x | 0, y | 0, w | 0, h | 0);
      } else {
        this.ctx.strokeRect(x | 0, y | 0, w | 0, h | 0);
      }
    }
    drawCircle(x, y, radius, colorIndex = 3, fill = false, lineWidth = 1.5) {
      this.ctx.save();
      const col = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[3];
      this.ctx.strokeStyle = col;
      this.ctx.fillStyle = col;
      this.ctx.lineWidth = lineWidth;
      if (this.vectorMode) {
        this.ctx.shadowColor = col;
        this.ctx.shadowBlur = 8;
      }
      this.ctx.beginPath();
      this.ctx.arc(x | 0, y | 0, radius, 0, Math.PI * 2);
      if (fill) {
        this.ctx.fill();
      } else {
        this.ctx.stroke();
      }
      this.ctx.restore();
    }
    drawVectorPlanet(x, y, r, colorIndex = 18, opts = {}) {
      const { hasRing = false, ringCol = 22, rot = 0.25, craters = true } = opts;
      const ctx = this.ctx;
      ctx.save();
      const col = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[18];
      ctx.fillStyle = col;
      ctx.strokeStyle = typeof ringCol === "string" ? ringCol : this.palette[ringCol] || this.palette[22];
      ctx.shadowColor = col;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(x | 0, y | 0, r | 0, 0, Math.PI * 2);
      ctx.fill();
      if (craters) {
        ctx.fillStyle = this.palette[1] || "rgba(0,0,0,0.3)";
        ctx.globalAlpha = 0.28;
        ctx.beginPath();
        ctx.arc(x + r * 0.28 | 0, y - r * 0.18 | 0, r * 0.35 | 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x - r * 0.32 | 0, y + r * 0.22 | 0, r * 0.22 | 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      if (hasRing) {
        ctx.lineWidth = 2.2;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.ellipse(x | 0, y | 0, r * 1.6 | 0, r * 0.45 | 0, rot, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }
    drawVectorSun(x, y, r, colorIndex = 25) {
      const ctx = this.ctx;
      ctx.save();
      const col = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[25];
      ctx.shadowColor = col;
      ctx.shadowBlur = 18;
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(x | 0, y | 0, r | 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 6;
      ctx.strokeStyle = this.palette[3] || "#ffffff";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(x | 0, y | 0, r * 0.65 | 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 8; i++) {
        const angle = i * Math.PI / 4;
        const x1 = x + Math.cos(angle) * (r + 4);
        const y1 = y + Math.sin(angle) * (r + 4);
        const x2 = x + Math.cos(angle) * (r + 14);
        const y2 = y + Math.sin(angle) * (r + 14);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();
    }
    // ── Renderizado Vectorial: Miniboss Cósmico ───────────────────────────
    drawVectorMiniboss(cx, cy, b, t = 0, isFlash = false) {
      const ctx = this.ctx;
      const p = this.palette;
      const bossCol = isFlash ? p[3] || "#ffffff" : p[20] || p[19] || "#ff2a55";
      const auraCol = isFlash ? p[25] || "#ffd040" : p[27] || p[30] || "#8e24aa";
      const eyeCol = isFlash ? p[3] || "#ffffff" : p[7] || p[25] || "#ffe600";
      const pupilCol = p[21] || p[19] || "#ff1100";
      const ringCol = isFlash ? p[3] || "#ffffff" : p[2] || p[39] || "#00e5ff";
      const white = p[3] || "#ffffff";
      const R = 48;
      ctx.save();
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = auraCol;
      ctx.shadowColor = auraCol;
      ctx.shadowBlur = 24;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      for (let k = 0; k < 8; k++) {
        const baseAngle = k / 8 * Math.PI * 2;
        const wave1 = Math.sin(t * 3.2 + k * 1.2) * 0.35;
        const wave2 = Math.cos(t * 4.1 + k * 1.5) * 0.45;
        const wave3 = Math.sin(t * 5 + k * 1.8) * 0.55;
        const x0 = cx + Math.cos(baseAngle) * (R - 2);
        const y0 = cy + Math.sin(baseAngle) * (R - 2);
        const a1 = baseAngle + wave1;
        const x1 = x0 + Math.cos(a1) * 24;
        const y1 = y0 + Math.sin(a1) * 24;
        const a2 = a1 + wave2;
        const x2 = x1 + Math.cos(a2) * 22;
        const y2 = y1 + Math.sin(a2) * 22;
        const a3 = a2 + wave3;
        const x3 = x2 + Math.cos(a3) * 18;
        const y3 = y2 + Math.sin(a3) * 18;
        const aTip = a3 + 0.6;
        const tx = x3 + Math.cos(aTip) * 10;
        const ty = y3 + Math.sin(aTip) * 10;
        ctx.save();
        ctx.strokeStyle = bossCol;
        ctx.shadowColor = bossCol;
        ctx.shadowBlur = 10;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 3.6;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        ctx.fillStyle = ringCol;
        ctx.shadowColor = ringCol;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc((x0 + x1) / 2, (y0 + y1) / 2, 2.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc((x1 + x2) / 2, (y1 + y2) / 2, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc((x2 + x3) / 2, (y2 + y3) / 2, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = white;
        ctx.shadowColor = white;
        ctx.beginPath();
        ctx.arc(x3, y3, 1.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.save();
      ctx.strokeStyle = ringCol;
      ctx.shadowColor = ringCol;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, R * 1.8, R * 0.42, -0.22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(cx, cy, R * 1.5, R * 0.35, -0.22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = p[0] || "#12041a";
      ctx.strokeStyle = bossCol;
      ctx.shadowColor = bossCol;
      ctx.shadowBlur = 16;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = auraCol;
      ctx.shadowColor = auraCol;
      ctx.shadowBlur = 8;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx - 32, cy - 24);
      ctx.lineTo(cx - 22, cy - 18);
      ctx.lineTo(cx - 28, cy - 8);
      ctx.lineTo(cx - 38, cy - 4);
      ctx.moveTo(cx + 30, cy - 22);
      ctx.lineTo(cx + 22, cy - 16);
      ctx.lineTo(cx + 26, cy - 6);
      ctx.lineTo(cx + 36, cy - 2);
      ctx.moveTo(cx - 18, cy + 28);
      ctx.lineTo(cx - 8, cy + 34);
      ctx.lineTo(cx + 8, cy + 32);
      ctx.lineTo(cx + 18, cy + 38);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = bossCol;
      ctx.shadowColor = bossCol;
      ctx.shadowBlur = 10;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 24, cy - 38);
      ctx.lineTo(cx - 34, cy - 54);
      ctx.lineTo(cx - 18, cy - 42);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 24, cy - 38);
      ctx.lineTo(cx + 34, cy - 54);
      ctx.lineTo(cx + 18, cy - 42);
      ctx.stroke();
      ctx.fillStyle = ringCol;
      ctx.strokeStyle = white;
      ctx.shadowColor = ringCol;
      ctx.shadowBlur = 14;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 34);
      ctx.lineTo(cx + 6, cy - 28);
      ctx.lineTo(cx, cy - 22);
      ctx.lineTo(cx - 6, cy - 28);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = white;
      ctx.shadowColor = bossCol;
      ctx.shadowBlur = 10;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(cx - 34, cy - 20);
      ctx.lineTo(cx - 10, cy - 12);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 34, cy - 20);
      ctx.lineTo(cx + 10, cy - 12);
      ctx.stroke();
      ctx.fillStyle = eyeCol;
      ctx.strokeStyle = bossCol;
      ctx.shadowColor = eyeCol;
      ctx.shadowBlur = 16;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(cx - 32, cy - 18);
      ctx.lineTo(cx - 10, cy - 11);
      ctx.lineTo(cx - 16, cy - 3);
      ctx.lineTo(cx - 30, cy - 8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 32, cy - 18);
      ctx.lineTo(cx + 10, cy - 11);
      ctx.lineTo(cx + 16, cy - 3);
      ctx.lineTo(cx + 30, cy - 8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = pupilCol;
      ctx.shadowColor = pupilCol;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.ellipse(cx - 20, cy - 11, 2.2, 5.5, 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx + 20, cy - 11, 2.2, 5.5, -0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = p[0] || "#0a0008";
      ctx.strokeStyle = bossCol;
      ctx.shadowColor = bossCol;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 26, cy + 6);
      ctx.quadraticCurveTo(cx, cy + 12, cx + 26, cy + 6);
      ctx.quadraticCurveTo(cx + 22, cy + 24, cx, cy + 26);
      ctx.quadraticCurveTo(cx - 22, cy + 24, cx - 26, cy + 6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = white;
      ctx.strokeStyle = white;
      ctx.lineWidth = 1;
      const upperFangs = [
        [cx - 20, cy + 7, cx - 17, cy + 15, cx - 14, cy + 8],
        [cx - 10, cy + 8, cx - 7, cy + 17, cx - 4, cy + 9],
        [cx + 4, cy + 9, cx + 7, cy + 17, cx + 10, cy + 8],
        [cx + 14, cy + 8, cx + 17, cy + 15, cx + 20, cy + 7]
      ];
      for (const f of upperFangs) {
        ctx.beginPath();
        ctx.moveTo(f[0], f[1]);
        ctx.lineTo(f[2], f[3]);
        ctx.lineTo(f[4], f[5]);
        ctx.closePath();
        ctx.fill();
      }
      const lowerFangs = [
        [cx - 15, cy + 22, cx - 12, cy + 14, cx - 9, cy + 23],
        [cx - 2, cy + 24, cx, cy + 13, cx + 2, cy + 24],
        [cx + 9, cy + 23, cx + 12, cy + 14, cx + 15, cy + 22]
      ];
      for (const f of lowerFangs) {
        ctx.beginPath();
        ctx.moveTo(f[0], f[1]);
        ctx.lineTo(f[2], f[3]);
        ctx.lineTo(f[4], f[5]);
        ctx.closePath();
        ctx.fill();
      }
      if (b && b.patternPhase !== void 0) {
        const chargeGlow = Math.sin(t * 12) * 0.5 + 0.5;
        ctx.fillStyle = ringCol;
        ctx.shadowColor = ringCol;
        ctx.shadowBlur = 14;
        ctx.globalAlpha = chargeGlow * 0.75;
        ctx.beginPath();
        ctx.arc(cx, cy + 16, 4 + chargeGlow * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.restore();
    }
    // ── Renderizado Vectorial: Miniboss 2 - CYCLOPS-EGG (Huevo Cósmico Cíclope) ──
    drawVectorCyclopsEgg(cx, cy, b, t = 0, isFlash = false, target = null) {
      const ctx = this.ctx;
      const p = this.palette;
      const shellCol = isFlash ? p[3] || "#ffffff" : p[25] || p[7] || "#ffd000";
      const crackCol = isFlash ? p[3] || "#ffffff" : p[19] || p[20] || "#ff0055";
      const eyeGlow = isFlash ? p[3] || "#ffffff" : p[2] || p[39] || "#00e5ff";
      const auraCol = isFlash ? p[25] || "#ffd040" : p[27] || p[30] || "#7209b7";
      const white = p[3] || "#ffffff";
      const W = 46, H = 56;
      ctx.save();
      ctx.save();
      ctx.globalAlpha = 0.24;
      ctx.fillStyle = auraCol;
      ctx.shadowColor = auraCol;
      ctx.shadowBlur = 24;
      ctx.beginPath();
      ctx.ellipse(cx, cy, W + 14, H + 14, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      const flap = Math.sin(t * 18) * 0.45;
      for (const side of [-1, 1]) {
        ctx.save();
        ctx.translate(cx + side * (W - 4), cy - 6);
        ctx.rotate(side * (0.3 + flap));
        ctx.strokeStyle = shellCol;
        ctx.fillStyle = hexWithAlpha(shellCol, 0.2);
        ctx.shadowColor = shellCol;
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(side * 28, -20, side * 36, -6);
        ctx.quadraticCurveTo(side * 32, 16, side * 14, 18);
        ctx.quadraticCurveTo(side * 6, 12, 0, 0);
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = crackCol;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(side * 8, 2);
        ctx.lineTo(side * 26, -4);
        ctx.moveTo(side * 6, 8);
        ctx.lineTo(side * 22, 6);
        ctx.stroke();
        ctx.restore();
      }
      ctx.save();
      ctx.fillStyle = p[0] || "#0e0416";
      ctx.strokeStyle = shellCol;
      ctx.shadowColor = shellCol;
      ctx.shadowBlur = 16;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.moveTo(cx, cy - H);
      ctx.bezierCurveTo(cx + W * 0.82, cy - H * 0.85, cx + W, cy + H * 0.4, cx + W * 0.65, cy + H);
      ctx.bezierCurveTo(cx + W * 0.35, cy + H * 1.1, cx - W * 0.35, cy + H * 1.1, cx - W * 0.65, cy + H);
      ctx.bezierCurveTo(cx - W, cy + H * 0.4, cx - W * 0.82, cy - H * 0.85, cx, cy - H);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = crackCol;
      ctx.shadowColor = crackCol;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(cx - 8, cy - H + 6);
      ctx.lineTo(cx - 24, cy - H * 0.4);
      ctx.lineTo(cx - 16, cy - H * 0.2);
      ctx.lineTo(cx - 32, cy + 4);
      ctx.moveTo(cx + 34, cy - H * 0.3);
      ctx.lineTo(cx + 22, cy - 4);
      ctx.lineTo(cx + 30, cy + 18);
      ctx.moveTo(cx - 14, cy + H * 0.6);
      ctx.lineTo(cx + 6, cy + H * 0.8);
      ctx.lineTo(cx - 4, cy + H * 0.95);
      ctx.stroke();
      const eyeR = 22;
      const eyeY = cy - 4;
      ctx.fillStyle = p[0] || "#000000";
      ctx.strokeStyle = eyeGlow;
      ctx.shadowColor = eyeGlow;
      ctx.shadowBlur = 14;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.arc(cx, eyeY, eyeR + 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = isFlash ? p[3] || "#ffffff" : p[17] || p[3] || "#fff3b0";
      ctx.beginPath();
      ctx.arc(cx, eyeY, eyeR, 0, Math.PI * 2);
      ctx.fill();
      let pupDx = -6, pupDy = 0;
      if (target) {
        const angleToShip = Math.atan2(target.y - eyeY, target.x - cx);
        pupDx = Math.cos(angleToShip) * 9;
        pupDy = Math.sin(angleToShip) * 7;
      } else {
        pupDx = Math.sin(t * 3.5) * 8;
        pupDy = Math.cos(t * 2.8) * 5;
      }
      ctx.fillStyle = crackCol;
      ctx.shadowColor = crackCol;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(cx + pupDx, eyeY + pupDy, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = p[0] || "#050002";
      ctx.beginPath();
      ctx.ellipse(cx + pupDx, eyeY + pupDy, 3.5, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = white;
      ctx.shadowColor = white;
      ctx.beginPath();
      ctx.arc(cx + pupDx - 3, eyeY + pupDy - 3, 3, 0, Math.PI * 2);
      ctx.fill();
      const blink = Math.sin(t * 4);
      if (blink > 0.82) {
        const closePct = (blink - 0.82) / 0.18;
        ctx.fillStyle = shellCol;
        ctx.strokeStyle = crackCol;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, eyeY, eyeR + 2, Math.PI, Math.PI * 2);
        ctx.lineTo(cx + eyeR + 2, eyeY - (1 - closePct) * eyeR);
        ctx.lineTo(cx - eyeR - 2, eyeY - (1 - closePct) * eyeR);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      ctx.fillStyle = p[0] || "#080005";
      ctx.strokeStyle = crackCol;
      ctx.shadowColor = crackCol;
      ctx.shadowBlur = 8;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(cx - 18, cy + H * 0.52);
      ctx.quadraticCurveTo(cx, cy + H * 0.72, cx + 18, cy + H * 0.52);
      ctx.quadraticCurveTo(cx, cy + H * 0.44, cx - 18, cy + H * 0.52);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = white;
      ctx.beginPath();
      ctx.moveTo(cx - 12, cy + H * 0.51);
      ctx.lineTo(cx - 9, cy + H * 0.62);
      ctx.lineTo(cx - 6, cy + H * 0.52);
      ctx.moveTo(cx + 6, cy + H * 0.52);
      ctx.lineTo(cx + 9, cy + H * 0.62);
      ctx.lineTo(cx + 12, cy + H * 0.51);
      ctx.fill();
      const flameH = 8 + Math.sin(t * 22) * 5;
      ctx.fillStyle = eyeGlow;
      ctx.shadowColor = eyeGlow;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(cx - 8, cy + H + 2);
      ctx.lineTo(cx, cy + H + flameH + 4);
      ctx.lineTo(cx + 8, cy + H + 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
    // ── Renderizado Vectorial: Miniboss 3 - NEON-SLIME (Slime Neón Gigante) ───────
    drawVectorNeonSlime(cx, cy, b, t = 0, isFlash = false) {
      const ctx = this.ctx;
      const p = this.palette;
      const slimeCol = isFlash ? p[3] || "#ffffff" : p[6] || p[5] || "#39ff14";
      const coreCol = isFlash ? p[3] || "#ffffff" : p[9] || p[2] || "#00f5d4";
      const eyeCol = isFlash ? p[3] || "#ffffff" : p[7] || p[25] || "#ffe600";
      const pupilCol = p[0] || p[1] || "#1a0022";
      const auraCol = isFlash ? p[25] || "#ffd040" : p[41] || p[10] || "#05ffa1";
      const white = p[3] || "#ffffff";
      const baseR = 52;
      const points = 16;
      ctx.save();
      ctx.save();
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = auraCol;
      ctx.shadowColor = auraCol;
      ctx.shadowBlur = 28;
      ctx.beginPath();
      ctx.arc(cx, cy, baseR + 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      for (let k = 0; k < 5; k++) {
        const dropAng = t * (1.8 + k * 0.4) + k * 1.25;
        const dropDist = baseR + 22 + Math.sin(t * 3.5 + k) * 10;
        const dx = cx + Math.cos(dropAng) * dropDist;
        const dy = cy + Math.sin(dropAng) * dropDist * 0.75;
        const dr = 4 + Math.sin(t * 5 + k) * 2;
        ctx.save();
        ctx.fillStyle = slimeCol;
        ctx.shadowColor = slimeCol;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(dx, dy, dr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.save();
      ctx.fillStyle = p[0] || "#06180a";
      ctx.strokeStyle = slimeCol;
      ctx.shadowColor = slimeCol;
      ctx.shadowBlur = 20;
      ctx.lineWidth = 3.2;
      ctx.beginPath();
      const polyPoints = [];
      for (let i = 0; i < points; i++) {
        const angle = i / points * Math.PI * 2;
        const wobble = Math.sin(angle * 3 + t * 4.2) * 7 + Math.cos(angle * 5 - t * 3.1) * 5 + Math.sin(t * 6 + i) * 3;
        const r = baseR + wobble;
        const px = cx + Math.cos(angle) * (r * 1.08);
        const py = cy + Math.sin(angle) * (r * 0.94);
        polyPoints.push({ x: px, y: py });
      }
      ctx.moveTo((polyPoints[0].x + polyPoints[points - 1].x) / 2, (polyPoints[0].y + polyPoints[points - 1].y) / 2);
      for (let i = 0; i < points; i++) {
        const curr = polyPoints[i];
        const next = polyPoints[(i + 1) % points];
        const mx = (curr.x + next.x) / 2;
        const my = (curr.y + next.y) / 2;
        ctx.quadraticCurveTo(curr.x, curr.y, mx, my);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      const coreR = 18 + Math.sin(t * 5) * 4;
      ctx.fillStyle = coreCol;
      ctx.shadowColor = coreCol;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(cx, cy + 4, coreR, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = white;
      ctx.shadowColor = slimeCol;
      const bubbles = [
        [cx - 16, cy - 14, 3.5],
        [cx + 18, cy - 10, 4.2],
        [cx - 24, cy + 12, 2.8],
        [cx + 20, cy + 18, 3.2],
        [cx + 4, cy + 24, 2.4]
      ];
      for (const b2 of bubbles) {
        const by = b2[1] + Math.sin(t * 4 + b2[0]) * 3;
        ctx.beginPath();
        ctx.arc(b2[0], by, b2[2], 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.save();
      const eye1X = cx - 18, eye1Y = cy - 16;
      const eye1R = 14;
      ctx.fillStyle = eyeCol;
      ctx.strokeStyle = slimeCol;
      ctx.shadowColor = eyeCol;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(eye1X, eye1Y, eye1R, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      const eye2X = cx + 16, eye2Y = cy - 20;
      const eye2R = 10.5;
      ctx.beginPath();
      ctx.arc(eye2X, eye2Y, eye2R, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = p[2] || p[0] || "#053810";
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(eye1X - 12, eye1Y - 14);
      ctx.lineTo(eye1X + 8, eye1Y - 10);
      ctx.moveTo(eye2X - 8, eye2Y - 10);
      ctx.lineTo(eye2X + 10, eye2Y - 14);
      ctx.stroke();
      const pupWobble = Math.sin(t * 7) * 3;
      ctx.fillStyle = pupilCol;
      ctx.beginPath();
      ctx.arc(eye1X + pupWobble - 2, eye1Y + 1, 4.5, 0, Math.PI * 2);
      ctx.arc(eye2X + pupWobble - 1, eye2Y + 1, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = white;
      ctx.beginPath();
      ctx.arc(eye1X + pupWobble - 4, eye1Y - 1, 1.8, 0, Math.PI * 2);
      ctx.arc(eye2X + pupWobble - 2, eye2Y - 1, 1.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = p[0] || "#06180a";
      ctx.strokeStyle = slimeCol;
      ctx.shadowColor = slimeCol;
      ctx.shadowBlur = 10;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(cx - 22, cy + 12);
      ctx.quadraticCurveTo(cx, cy + 28, cx + 22, cy + 12);
      ctx.quadraticCurveTo(cx, cy + 16, cx - 22, cy + 12);
      ctx.fill();
      ctx.stroke();
      const dripY = cy + 22 + Math.sin(t * 6) * 4;
      ctx.fillStyle = slimeCol;
      ctx.beginPath();
      ctx.arc(cx - 6, dripY, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
    // ── Renderizado Vectorial: Miniboss 4 - SAW-SPINNER (Bola Sierra con Ojos Grandes) ─
    drawVectorSawSpinner(cx, cy, b, t = 0, isFlash = false) {
      const ctx = this.ctx;
      const p = this.palette;
      const bladeCol = isFlash ? p[3] || "#ffffff" : p[23] || p[22] || "#ff9f1c";
      const sparkCol = isFlash ? p[3] || "#ffffff" : p[25] || p[7] || "#ffe600";
      const bodyCol = isFlash ? p[3] || "#ffffff" : p[2] || p[4] || "#00b4d8";
      const auraCol = isFlash ? p[25] || "#ffd040" : p[32] || p[19] || "#f72585";
      const white = p[3] || "#ffffff";
      const R = 44;
      const teeth = 14;
      const rotSpeed = 16;
      const rotAngle = t * rotSpeed;
      ctx.save();
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = auraCol;
      ctx.shadowColor = auraCol;
      ctx.shadowBlur = 26;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotAngle);
      ctx.fillStyle = p[0] || "#140600";
      ctx.strokeStyle = bladeCol;
      ctx.shadowColor = bladeCol;
      ctx.shadowBlur = 16;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      const outerR = R + 18;
      const innerR = R + 2;
      for (let i = 0; i < teeth; i++) {
        const a0 = i / teeth * Math.PI * 2;
        const a1 = a0 + Math.PI / teeth * 0.45;
        const a2 = a0 + Math.PI * 2 / teeth;
        const x0 = Math.cos(a0) * innerR, y0 = Math.sin(a0) * innerR;
        const x1 = Math.cos(a1) * outerR, y1 = Math.sin(a1) * outerR;
        const x2 = Math.cos(a2) * innerR, y2 = Math.sin(a2) * innerR;
        if (i === 0) {
          ctx.moveTo(x0, y0);
        }
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = sparkCol;
      ctx.shadowColor = sparkCol;
      ctx.shadowBlur = 10;
      for (let i = 0; i < teeth; i += 2) {
        const a = i / teeth * Math.PI * 2 + Math.PI / teeth * 0.45;
        const sx = Math.cos(a) * (outerR + 2);
        const sy = Math.sin(a) * (outerR + 2);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.save();
      ctx.fillStyle = p[1] || "#061320";
      ctx.strokeStyle = bodyCol;
      ctx.shadowColor = bodyCol;
      ctx.shadowBlur = 14;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = sparkCol;
      ctx.shadowColor = sparkCol;
      for (let i = 0; i < 8; i++) {
        const ra = i / 8 * Math.PI * 2;
        const rx = cx + Math.cos(ra) * (R - 5);
        const ry = cy + Math.sin(ra) * (R - 5);
        ctx.beginPath();
        ctx.arc(rx, ry, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      const eyeR = 15;
      const eyeY = cy - 8;
      for (const side of [-1, 1]) {
        const ex = cx + side * 17;
        ctx.fillStyle = isFlash ? p[3] || "#ffffff" : p[3] || "#ffffff";
        ctx.strokeStyle = bodyCol;
        ctx.shadowColor = white;
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ex, eyeY, eyeR, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = bladeCol;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(ex - side * (eyeR + 2), eyeY - 14);
        ctx.lineTo(ex + side * (eyeR - 4), eyeY - 8);
        ctx.stroke();
        ctx.fillStyle = bladeCol;
        ctx.shadowColor = bladeCol;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(ex - side * 2, eyeY, 8.5, 0, Math.PI * 2);
        ctx.fill();
        const shakeX = Math.sin(t * 32 + side) * 1.6;
        const shakeY = Math.cos(t * 28 + side) * 1.6;
        ctx.fillStyle = p[0] || "#050208";
        ctx.beginPath();
        ctx.arc(ex - side * 2 + shakeX, eyeY + shakeY, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = white;
        ctx.beginPath();
        ctx.arc(ex - side * 2 + shakeX - 1.5, eyeY + shakeY - 1.5, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = p[0] || "#02070e";
      ctx.strokeStyle = bladeCol;
      ctx.shadowColor = bladeCol;
      ctx.shadowBlur = 10;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy + 16);
      ctx.quadraticCurveTo(cx, cy + 28, cx + 20, cy + 16);
      ctx.quadraticCurveTo(cx, cy + 12, cx - 20, cy + 16);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = sparkCol;
      for (let k = -2; k <= 2; k++) {
        ctx.fillRect(cx + k * 7 - 2, cy + 16, 4, 6);
      }
      ctx.fillStyle = auraCol;
      ctx.shadowColor = auraCol;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(cx, cy + 20, 4 + Math.sin(t * 15) * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
    // ── Dispatcher de Minibosses ──────────────────────────────────────────
    drawMiniboss(cx, cy, b, t = 0, isFlash = false, target = null) {
      const type = b && (b.bossType || b.subType) || "octo_planet";
      if (type === "cyclops_egg" || type === "egg") {
        this.drawVectorCyclopsEgg(cx, cy, b, t, isFlash, target);
      } else if (type === "neon_slime" || type === "slime") {
        this.drawVectorNeonSlime(cx, cy, b, t, isFlash);
      } else if (type === "saw_spinner" || type === "saw") {
        this.drawVectorSawSpinner(cx, cy, b, t, isFlash);
      } else {
        this.drawVectorMiniboss(cx, cy, b, t, isFlash);
      }
    }
    // ── Renderizado Vectorial: Obstáculos Flotantes Centrales ─────────────
    drawVectorObstacle(ob, t = 0) {
      const ctx = this.ctx;
      const p = this.palette;
      const cx = ob.x + ob.w / 2 | 0;
      const cy = ob.y + ob.h / 2 | 0;
      const col = typeof ob.color === "number" ? p[ob.color] || p[2] : ob.color || p[2];
      const core = typeof ob.coreColor === "number" ? p[ob.coreColor] || p[25] : ob.coreColor || p[25];
      const R = Math.min(ob.w, ob.h) / 2;
      ctx.save();
      ctx.fillStyle = p[1] || "#071526";
      ctx.strokeStyle = col;
      ctx.shadowColor = col;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      const sides = 6;
      for (let i = 0; i < sides; i++) {
        const a = i / sides * Math.PI * 2 + (ob.rot || 0);
        const rad = R * (0.85 + Math.sin(i * 1.7 + 1) * 0.15);
        const px = cx + Math.cos(a) * rad;
        const py = cy + Math.sin(a) * rad;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = core;
      ctx.shadowColor = core;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.35 + Math.sin(t * 6 + ob.x * 0.1) * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx - R * 0.6, cy);
      ctx.lineTo(cx + R * 0.6, cy);
      ctx.moveTo(cx, cy - R * 0.6);
      ctx.lineTo(cx, cy + R * 0.6);
      ctx.stroke();
      ctx.restore();
    }
    drawText(text, x, y, colorIndex = 3, fontSize = 14, opts = {}) {
      const { shadow = false, shadowColor = 0, align = "left", font = "Consolas", bold = true } = opts;
      const ALIGN_MAP = {
        "w": "left",
        "west": "left",
        "left": "left",
        "e": "right",
        "east": "right",
        "right": "right",
        "center": "center",
        "c": "center",
        "start": "start",
        "end": "end"
      };
      const validAlign = ALIGN_MAP[align] || "left";
      const weight = bold ? "bold " : "600 ";
      const family = font ? `"${font}", "Segoe UI Symbol", "Consolas", "Courier New", monospace` : `"Segoe UI Symbol", "Consolas", "Courier New", monospace`;
      this.ctx.font = `${weight}${fontSize}px ${family}`;
      this.ctx.textBaseline = "top";
      this.ctx.textAlign = validAlign;
      if (shadow) {
        this.ctx.fillStyle = typeof shadowColor === "string" ? shadowColor : this.palette[shadowColor] || this.palette[0];
        this.ctx.fillText(text, (x | 0) + 1, (y | 0) + 1);
      }
      this.ctx.fillStyle = typeof colorIndex === "string" ? colorIndex : this.palette[colorIndex] || this.palette[3];
      this.ctx.fillText(text, x | 0, y | 0);
    }
    drawTextASCII(text, x, y, colorIndex = 3, fontSize = 14, opts = {}) {
      return this.drawText(text, x, y, colorIndex, fontSize, opts);
    }
    drawSpriteASCII(lines, x, y, colorIndex = 3, lineHeight = 10, fontSize = 10, opts = {}) {
      lines.forEach((line, i) => {
        this.drawText(line, x, y + i * lineHeight, colorIndex, fontSize, opts);
      });
    }
    measureText(text, fontSize = 12, font = "Consolas", bold = true) {
      const weight = bold ? "bold " : "";
      const family = font ? `"${font}", "Consolas", "Lucida Console", monospace` : `"Consolas", monospace`;
      this.ctx.font = `${weight}${fontSize}px ${family}`;
      return this.ctx.measureText(text).width;
    }
    drawBitmap1bpp(bitmap, x, y, colorIndex = 3) {
      for (let row = 0; row < bitmap.length; row++) {
        for (let col = 0; col < bitmap[row].length; col++) {
          if (bitmap[row][col]) {
            this.drawPixel(x + col, y + row, colorIndex);
          }
        }
      }
    }
  };

  // Engine/Input.js
  var Input = class {
    constructor(options = {}) {
      this.gamepadIndex = options.gamepadIndex ?? 0;
      this.deadzone = options.deadzone ?? 0.2;
      this._inputBuffer = [];
      this._bufferTime = options.bufferTime ?? 0.1;
      this.state = {
        up: false,
        down: false,
        left: false,
        right: false,
        btnA: false,
        btnB: false,
        btnStart: false,
        btnPause: false
      };
      this._prev = { ...this.state };
      this._cur = { ...this.state };
      this.keyMap = {
        ArrowUp: "up",
        KeyW: "up",
        ArrowDown: "down",
        KeyS: "down",
        ArrowLeft: "left",
        KeyA: "left",
        ArrowRight: "right",
        KeyD: "right",
        KeyJ: "btnA",
        KeyK: "btnB",
        Enter: "btnStart",
        Space: "btnStart",
        Escape: "btnPause",
        KeyP: "btnPause"
      };
      this._pressedKeys = /* @__PURE__ */ new Set();
      this._justPressedKeys = /* @__PURE__ */ new Set();
      this._initKeyboard();
      window.addEventListener("gamepadconnected", (e) => this._onGamepadConnected(e));
      window.addEventListener("gamepaddisconnected", (e) => this._onGamepadDisconnected(e));
    }
    _initKeyboard() {
      window.addEventListener("keydown", (e) => {
        const key = this.keyMap[e.code];
        if (key) {
          if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
            e.preventDefault();
          }
          this.state[key] = true;
          this._bufferInput(key);
        }
        this._pressedKeys.add(e.code);
        this._justPressedKeys.add(e.code);
      });
      window.addEventListener("keyup", (e) => {
        const key = this.keyMap[e.code];
        if (key) {
          this.state[key] = false;
        }
        this._pressedKeys.delete(e.code);
      });
      window.addEventListener("blur", () => {
        for (const k of Object.keys(this.state)) {
          this.state[k] = false;
        }
        this._pressedKeys.clear();
      });
    }
    _onGamepadConnected(e) {
      if (this.gamepadIndex === null || e.gamepad.index === this.gamepadIndex) {
        this.gamepadIndex = e.gamepad.index;
      }
    }
    _onGamepadDisconnected(e) {
      if (e.gamepad.index === this.gamepadIndex) {
        this.gamepadIndex = null;
      }
    }
    _getGamepad() {
      if (this.gamepadIndex === null) return null;
      const pads = navigator.getGamepads();
      return pads[this.gamepadIndex] || null;
    }
    _applyDeadzone(value) {
      return Math.abs(value) < this.deadzone ? 0 : value;
    }
    _bufferInput(key) {
      const now = performance.now() / 1e3;
      this._inputBuffer.push({ key, time: now });
      this._inputBuffer = this._inputBuffer.filter((entry) => now - entry.time <= this._bufferTime);
    }
    _pollGamepad() {
      const gp = this._getGamepad();
      if (!gp) return;
      const axisX = this._applyDeadzone(gp.axes[0] ?? 0);
      const axisY = this._applyDeadzone(gp.axes[1] ?? 0);
      const dpadUp = gp.buttons[12]?.pressed ?? false;
      const dpadDown = gp.buttons[13]?.pressed ?? false;
      const dpadLeft = gp.buttons[14]?.pressed ?? false;
      const dpadRight = gp.buttons[15]?.pressed ?? false;
      this.state.up = this.state.up || axisY < -0.5 || dpadUp;
      this.state.down = this.state.down || axisY > 0.5 || dpadDown;
      this.state.left = this.state.left || axisX < -0.5 || dpadLeft;
      this.state.right = this.state.right || axisX > 0.5 || dpadRight;
      const btnA = gp.buttons[0]?.pressed ?? false;
      const btnB = gp.buttons[1]?.pressed ?? false;
      const btnStart = gp.buttons[9]?.pressed ?? false;
      const btnPause = gp.buttons[8]?.pressed ?? false;
      this.state.btnA = this.state.btnA || btnA;
      this.state.btnB = this.state.btnB || btnB;
      this.state.btnStart = this.state.btnStart || btnStart;
      this.state.btnPause = this.state.btnPause || btnPause;
    }
    _resolvedState() {
      return {
        up: this.state.up,
        down: this.state.down,
        left: this.state.left,
        right: this.state.right,
        btnA: this.state.btnA,
        btnB: this.state.btnB,
        btnStart: this.state.btnStart,
        btnPause: this.state.btnPause,
        rawA: this.state.btnA,
        rawB: this.state.btnB
      };
    }
    update(dt) {
      this._prev = { ...this._cur };
      this._pollGamepad();
      this._cur = { ...this._resolvedState() };
    }
    // Call AFTER game.update() so game logic can read just-pressed keys first
    flushJustPressed() {
      this._justPressedKeys.clear();
    }
    justPressedKeyCode(keyCode) {
      return this._justPressedKeys.has(keyCode);
    }
    getState() {
      return { ...this._cur };
    }
    justPressed(key) {
      return this._cur[key] && !this._prev[key];
    }
    justReleased(key) {
      return !this._cur[key] && this._prev[key];
    }
    // Input buffering: check if key was pressed within buffer window
    wasPressedRecently(key) {
      const now = performance.now() / 1e3;
      return this._inputBuffer.some((entry) => entry.key === key && now - entry.time <= this._bufferTime);
    }
    consumeBuffer(key) {
      const now = performance.now() / 1e3;
      const idx = this._inputBuffer.findIndex((entry) => entry.key === key && now - entry.time <= this._bufferTime);
      if (idx !== -1) {
        this._inputBuffer.splice(idx, 1);
        return true;
      }
      return false;
    }
    destroy() {
    }
  };

  // Engine/TouchControls.js
  function isSmartphone() {
    if (typeof window === "undefined") return false;
    if (window.location && window.location.search && /[\?&]mobile=1\b/i.test(window.location.search)) {
      return true;
    }
    if (window.FORCE_MOBILE === true) {
      return true;
    }
    const ua = (navigator.userAgent || navigator.vendor || window.opera || "").toLowerCase();
    const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|crios|fennec|windows phone/i.test(ua);
    if (isMobileUA) {
      return true;
    }
    const isDesktopOS = /windows nt|macintosh|linux x86_64/i.test(ua);
    const maxTouch = navigator.maxTouchPoints || 0;
    const hasTouch = maxTouch > 0 || "ontouchstart" in window && !isDesktopOS;
    const screenW = window.screen && window.screen.width > 0 ? window.screen.width : window.innerWidth || 0;
    const screenH = window.screen && window.screen.height > 0 ? window.screen.height : window.innerHeight || 0;
    const isMobileScreen = screenW > 0 && Math.min(screenW, screenH) <= 840;
    return !isDesktopOS && hasTouch && isMobileScreen;
  }
  function isAndroid() {
    if (typeof window === "undefined") return false;
    const ua = (navigator.userAgent || navigator.vendor || window.opera || "").toLowerCase();
    return /android/i.test(ua);
  }
  function enterFullscreen() {
    if (typeof document === "undefined") return;
    const doc = document.documentElement;
    try {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (doc.requestFullscreen) {
          doc.requestFullscreen().catch(() => {
          });
        } else if (doc.webkitRequestFullscreen) {
          doc.webkitRequestFullscreen();
        } else if (doc.msRequestFullscreen) {
          doc.msRequestFullscreen();
        }
      }
    } catch (err) {
    }
  }
  var TouchControls = class {
    constructor(input, options = {}) {
      this.input = input;
      this.isMobile = options.isMobile !== void 0 ? options.isMobile : isSmartphone();
      this.windowed = options.windowed !== false;
      this.palette = options.palette || null;
      this._stickPointerId = null;
      this._stickCenterX = 0;
      this._stickCenterY = 0;
      this._stickMaxRadius = 45;
      this._stickDeadzone = 0.28;
      this.create();
    }
    create() {
      if (typeof document === "undefined") return;
      if (document.getElementById("palugo-mobile-controls")) return;
      if (this.isMobile) {
        this._createSmartphoneLayout();
      } else {
        this._createFallbackLayout();
      }
      if (this.palette) {
        this.applyPalette(this.palette);
      }
    }
    _createSmartphoneLayout() {
      document.body.classList.add("palugo-mobile-mode");
      enterFullscreen();
      const triggerFsOnTouch = () => {
        enterFullscreen();
        window.removeEventListener("pointerdown", triggerFsOnTouch);
        window.removeEventListener("touchstart", triggerFsOnTouch);
      };
      window.addEventListener("pointerdown", triggerFsOnTouch, { passive: true });
      window.addEventListener("touchstart", triggerFsOnTouch, { passive: true });
      if (!document.getElementById("palugo-touch-styles")) {
        const style = document.createElement("style");
        style.id = "palugo-touch-styles";
        style.textContent = `
        body.palugo-mobile-mode {
          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-start !important;
          align-items: center !important;
          width: 100vw !important;
          height: 100vh !important;
          height: 100dvh !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          background: var(--mobile-bg, #000) !important;
          touch-action: none !important;
          user-select: none !important;
          -webkit-user-select: none !important;
        }

        body.palugo-mobile-mode #palugo-window {
          width: 100vw !important;
          max-width: 100vw !important;
          height: auto !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          border-top: none !important;
          box-shadow: none !important;
          flex: 0 0 auto !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          background: var(--mobile-bg, #000) !important;
          border-bottom: 2px solid var(--mobile-accent, #00b4d8) !important;
        }

        body.palugo-mobile-mode #palugo-canvas {
          width: 100vw !important;
          max-width: 100vw !important;
          height: calc(100vw * 480 / 640) !important;
          max-height: 52vh !important;
          aspect-ratio: 4 / 3 !important;
          object-fit: contain !important;
          display: block !important;
        }

        #palugo-mobile-controls {
          --mobile-accent: #00b4d8;
          --mobile-btn-j: #00ff66;
          --mobile-btn-k: #ffd000;
          --mobile-bg: #030712;
          --mobile-surface: #071a30;
          --mobile-text: #ffffff;

          flex: 1 1 auto;
          width: 100vw;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px;
          box-sizing: border-box;
          background: var(--mobile-bg, #030712);
          position: relative;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
        }

        /* Zona del Stick */
        .palugo-stick-zone {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          touch-action: none;
          user-select: none;
        }

        .palugo-stick-base {
          width: 128px;
          height: 128px;
          border-radius: 50%;
          border: 2px solid var(--mobile-accent, #00b4d8);
          background: radial-gradient(circle, rgba(0, 180, 216, 0.14) 0%, rgba(3, 7, 18, 0.8) 75%);
          box-shadow: 0 0 14px rgba(0, 180, 216, 0.3), inset 0 0 10px rgba(0, 180, 216, 0.15);
          position: relative;
          touch-action: none;
          cursor: pointer;
        }

        .palugo-stick-axis-h {
          position: absolute;
          top: 50%;
          left: 10px;
          right: 10px;
          height: 1px;
          background: rgba(0, 180, 216, 0.35);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .palugo-stick-axis-v {
          position: absolute;
          left: 50%;
          top: 10px;
          bottom: 10px;
          width: 1px;
          background: rgba(0, 180, 216, 0.35);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .palugo-stick-knob {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 2px solid var(--mobile-text, #ffffff);
          background: radial-gradient(circle, var(--mobile-accent, #00f0ff) 0%, #0077b6 80%);
          box-shadow: 0 0 14px var(--mobile-accent, #00f0ff);
          position: absolute;
          top: calc(50% - 27px);
          left: calc(50% - 27px);
          pointer-events: none;
          transform: translate(0px, 0px);
          will-change: transform;
        }

        .palugo-control-label {
          font: 700 10px Consolas, monospace;
          color: var(--mobile-accent, #00b4d8);
          margin-top: 6px;
          letter-spacing: 1.5px;
          pointer-events: none;
        }

        /* Columna central de utilidades */
        .palugo-center-zone {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 0 4px;
        }

        .palugo-util-btn {
          border-radius: 14px;
          padding: 6px 14px;
          font: 700 11px Consolas, monospace;
          letter-spacing: 1px;
          color: var(--mobile-accent, #00b4d8);
          border: 1.5px solid var(--mobile-accent, #00b4d8);
          background: rgba(0, 180, 216, 0.12);
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .palugo-util-btn.active, .palugo-util-btn:active {
          background: rgba(0, 180, 216, 0.4);
          transform: scale(0.94);
        }

        .palugo-btn-fs {
          font-size: 9px;
          padding: 5px 10px;
          border-color: var(--mobile-btn-k, #ffd000);
          color: var(--mobile-btn-k, #ffd000);
          background: rgba(255, 208, 0, 0.12);
        }

        /* Zona de Botones J y K */
        .palugo-actions-zone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          position: relative;
          touch-action: none;
        }

        .palugo-action-btn {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font: 700 24px Consolas, monospace;
          color: #ffffff;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          transition: transform 0.05s ease, box-shadow 0.05s ease;
          will-change: transform;
          cursor: pointer;
        }

        .palugo-btn-j {
          border: 2.5px solid var(--mobile-btn-j, #00ff66);
          background: radial-gradient(circle, rgba(0, 255, 102, 0.3) 0%, rgba(0, 40, 15, 0.8) 80%);
          box-shadow: 0 0 14px rgba(0, 255, 102, 0.4), inset 0 0 8px rgba(0, 255, 102, 0.25);
          text-shadow: 0 0 8px var(--mobile-btn-j, #00ff66);
        }

        .palugo-btn-j.active, .palugo-btn-j:active {
          background: radial-gradient(circle, rgba(0, 255, 102, 0.85) 0%, rgba(0, 80, 25, 0.9) 80%);
          box-shadow: 0 0 22px var(--mobile-btn-j, #00ff66);
          transform: scale(0.92);
        }

        .palugo-btn-k {
          border: 2.5px solid var(--mobile-btn-k, #ffd000);
          background: radial-gradient(circle, rgba(255, 208, 0, 0.3) 0%, rgba(50, 35, 0, 0.8) 80%);
          box-shadow: 0 0 14px rgba(255, 208, 0, 0.4), inset 0 0 8px rgba(255, 208, 0, 0.25);
          text-shadow: 0 0 8px var(--mobile-btn-k, #ffd000);
        }

        .palugo-btn-k.active, .palugo-btn-k:active {
          background: radial-gradient(circle, rgba(255, 208, 0, 0.85) 0%, rgba(120, 80, 0, 0.9) 80%);
          box-shadow: 0 0 22px var(--mobile-btn-k, #ffd000);
          transform: scale(0.92);
        }

        /* Adaptaci\xF3n a smartphone horizontal (Landscape) */
        @media (orientation: landscape) and (max-height: 520px) {
          body.palugo-mobile-mode {
            flex-direction: row !important;
            justify-content: center !important;
          }
          body.palugo-mobile-mode #palugo-window {
            width: auto !important;
            height: 100vh !important;
            max-height: 100vh !important;
            border-bottom: none !important;
          }
          body.palugo-mobile-mode #palugo-canvas {
            height: 100vh !important;
            width: calc(100vh * 640 / 480) !important;
            max-height: 100vh !important;
          }
          #palugo-mobile-controls {
            position: fixed;
            inset: 0;
            background: transparent;
            pointer-events: none;
            padding: 10px 24px;
          }
          .palugo-stick-zone, .palugo-actions-zone, .palugo-center-zone {
            pointer-events: auto;
          }
        }
      `;
        document.head.appendChild(style);
      }
      const controls = document.createElement("div");
      controls.id = "palugo-mobile-controls";
      controls.innerHTML = `
      <div class="palugo-stick-zone">
        <div id="palugo-stick-base" class="palugo-stick-base">
          <div class="palugo-stick-axis-h"></div>
          <div class="palugo-stick-axis-v"></div>
          <div id="palugo-stick-knob" class="palugo-stick-knob"></div>
        </div>
        <div class="palugo-control-label">STICK</div>
      </div>

      <div class="palugo-center-zone">
        <div id="palugo-btn-start" class="palugo-util-btn">START</div>
        <div id="palugo-btn-fs" class="palugo-util-btn palugo-btn-fs">FULLSCREEN</div>
      </div>

      <div class="palugo-actions-zone">
        <div id="palugo-btn-k" class="palugo-action-btn palugo-btn-k">K</div>
        <div id="palugo-btn-j" class="palugo-action-btn palugo-btn-j">J</div>
      </div>
    `;
      document.body.appendChild(controls);
      this._bindStick();
      this._bindButtons();
    }
    _bindStick() {
      const base = document.getElementById("palugo-stick-base");
      const knob = document.getElementById("palugo-stick-knob");
      if (!base || !knob) return;
      this._stickBase = base;
      this._stickKnob = knob;
      const onPointerDown = (e) => {
        if (this._stickPointerId !== null) return;
        this._stickPointerId = e.pointerId;
        base.setPointerCapture?.(e.pointerId);
        const rect = base.getBoundingClientRect();
        this._stickCenterX = rect.left + rect.width / 2;
        this._stickCenterY = rect.top + rect.height / 2;
        enterFullscreen();
        this._handleStickMove(e.clientX, e.clientY);
      };
      const onPointerMove = (e) => {
        if (e.pointerId !== this._stickPointerId) return;
        this._handleStickMove(e.clientX, e.clientY);
      };
      const onPointerUp = (e) => {
        if (e.pointerId !== this._stickPointerId) return;
        this._stickPointerId = null;
        this._resetStick();
      };
      base.addEventListener("pointerdown", onPointerDown);
      base.addEventListener("pointermove", onPointerMove);
      base.addEventListener("pointerup", onPointerUp);
      base.addEventListener("pointercancel", onPointerUp);
    }
    _handleStickMove(clientX, clientY) {
      if (!this._stickKnob) return;
      const dx = clientX - this._stickCenterX;
      const dy = clientY - this._stickCenterY;
      const dist = Math.hypot(dx, dy);
      const clampedDist = Math.min(dist, this._stickMaxRadius);
      const angle = Math.atan2(dy, dx);
      const knobX = clampedDist * Math.cos(angle);
      const knobY = clampedDist * Math.sin(angle);
      this._stickKnob.style.transform = `translate(${knobX}px, ${knobY}px)`;
      const normX = clampedDist > 0 ? knobX / this._stickMaxRadius : 0;
      const normY = clampedDist > 0 ? knobY / this._stickMaxRadius : 0;
      const left = normX < -this._stickDeadzone;
      const right = normX > this._stickDeadzone;
      const up = normY < -this._stickDeadzone;
      const down = normY > this._stickDeadzone;
      this.input.state.left = left;
      this.input.state.right = right;
      this.input.state.up = up;
      this.input.state.down = down;
      this._syncKey("ArrowLeft", left);
      this._syncKey("ArrowRight", right);
      this._syncKey("ArrowUp", up);
      this._syncKey("ArrowDown", down);
    }
    _resetStick() {
      if (this._stickKnob) {
        this._stickKnob.style.transform = "translate(0px, 0px)";
      }
      this.input.state.left = false;
      this.input.state.right = false;
      this.input.state.up = false;
      this.input.state.down = false;
      this._syncKey("ArrowLeft", false);
      this._syncKey("ArrowRight", false);
      this._syncKey("ArrowUp", false);
      this._syncKey("ArrowDown", false);
    }
    _syncKey(code, pressed) {
      if (!this.input) return;
      if (pressed) {
        if (!this.input._pressedKeys.has(code)) {
          this.input._pressedKeys.add(code);
          this.input._justPressedKeys.add(code);
        }
      } else {
        this.input._pressedKeys.delete(code);
      }
    }
    _bindButtons() {
      const bindBtn = (id, stateKey, keyCode) => {
        const el = document.getElementById(id);
        if (!el) return;
        const onDown = (e) => {
          e.preventDefault();
          el.setPointerCapture?.(e.pointerId);
          el.classList.add("active");
          this.input.state[stateKey] = true;
          this.input._pressedKeys.add(keyCode);
          this.input._justPressedKeys.add(keyCode);
          if (typeof this.input._bufferInput === "function") {
            this.input._bufferInput(stateKey);
          }
          enterFullscreen();
        };
        const onUp = (e) => {
          e.preventDefault();
          el.classList.remove("active");
          this.input.state[stateKey] = false;
          this.input._pressedKeys.delete(keyCode);
        };
        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("pointercancel", onUp);
      };
      bindBtn("palugo-btn-j", "btnA", "KeyJ");
      bindBtn("palugo-btn-k", "btnB", "KeyK");
      bindBtn("palugo-btn-start", "btnStart", "Enter");
      const fsBtn = document.getElementById("palugo-btn-fs");
      if (fsBtn) {
        fsBtn.addEventListener("pointerdown", (e) => {
          e.preventDefault();
          enterFullscreen();
        });
      }
    }
    _createFallbackLayout() {
      const overlay = document.createElement("div");
      overlay.id = "palugo-mobile-controls";
      overlay.style.cssText = `display:none;`;
      document.body.appendChild(overlay);
    }
    applyPalette(palette) {
      if (!palette || !Array.isArray(palette)) return;
      this.palette = palette;
      const ctrl = document.getElementById("palugo-mobile-controls");
      if (ctrl) {
        ctrl.style.setProperty("--mobile-accent", palette[2] || "#00b4d8");
        ctrl.style.setProperty("--mobile-btn-j", palette[5] || "#00ff66");
        ctrl.style.setProperty("--mobile-btn-k", palette[25] || palette[2] || "#ffd000");
        ctrl.style.setProperty("--mobile-bg", palette[0] || "#030712");
        ctrl.style.setProperty("--mobile-surface", palette[1] || "#071a30");
        ctrl.style.setProperty("--mobile-text", palette[3] || "#ffffff");
      }
    }
    destroy() {
      document.body.classList.remove("palugo-mobile-mode");
      document.getElementById("palugo-mobile-controls")?.remove();
      document.getElementById("palugo-touch-styles")?.remove();
    }
  };

  // Engine/Audio.js
  var PalugoAudio = class {
    constructor(options = {}) {
      this.masterVolume = options.masterVolume ?? 0.16;
      this.musicVolume = options.musicVolume ?? 0.9;
      this.sfxVolume = options.sfxVolume ?? 1;
      this.ctx = null;
      this.masterGain = null;
      this.musicGain = null;
      this.sfxGain = null;
      this.channelGains = { pulse1: null, pulse2: null, triangle: null, noise: null };
      this._pulseDuty = options.pulseDuty ?? 0.5;
      this._readyCbs = [];
      this._unlockBound = this._unlock.bind(this);
      window.addEventListener("pointerdown", this._unlockBound, { once: true, passive: true });
      window.addEventListener("keydown", this._unlockBound, { once: true, passive: true });
      window.addEventListener("touchstart", this._unlockBound, { once: true, passive: true });
    }
    // Desbloquea el contexto de audio tras el primer gesto del usuario y procesa las llamadas en cola.
    _unlock() {
      window.removeEventListener("pointerdown", this._unlockBound);
      window.removeEventListener("keydown", this._unlockBound);
      window.removeEventListener("touchstart", this._unlockBound);
      this.init();
      const cbs = this._readyCbs.splice(0);
      cbs.forEach((cb) => {
        try {
          cb();
        } catch {
        }
      });
    }
    init() {
      if (this.ctx) {
        if (this.ctx.state === "suspended") {
          this.ctx.resume().then(() => {
            const cbs = this._readyCbs.splice(0);
            cbs.forEach((cb) => {
              try {
                cb();
              } catch {
              }
            });
          }).catch(() => {
          });
        }
        return true;
      }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) {
        return false;
      }
      try {
        this.ctx = new AC();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.masterVolume;
        this.masterGain.connect(this.ctx.destination);
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = this.musicVolume;
        this.musicGain.connect(this.masterGain);
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = this.sfxVolume;
        this.sfxGain.connect(this.masterGain);
        for (const ch of ["pulse1", "pulse2", "triangle", "noise"]) {
          const g = this.ctx.createGain();
          g.gain.value = 1;
          g.connect(this.sfxGain);
          this.channelGains[ch] = g;
        }
        const sr = this.ctx.sampleRate;
        this._noiseBuffer = this.ctx.createBuffer(1, sr, sr);
        const ndata = this._noiseBuffer.getChannelData(0);
        for (let i = 0; i < sr; i++) {
          ndata[i] = Math.random() * 2 - 1;
        }
        this._metallicBuffer = this.ctx.createBuffer(1, sr, sr);
        const mdata = this._metallicBuffer.getChannelData(0);
        let last = 0;
        for (let i = 0; i < sr; i++) {
          last = (last + Math.random()) % 2 > 1 ? 1 : -1;
          mdata[i] = last * (Math.random() * 0.5 + 0.5);
        }
        return true;
      } catch {
        return false;
      }
    }
    // Reactiva el contexto de audio si se encuentra suspendido.
    resume() {
      if (this.ctx && this.ctx.state === "suspended") {
        return this.ctx.resume().then(() => {
          const cbs = this._readyCbs.splice(0);
          cbs.forEach((cb) => {
            try {
              cb();
            } catch {
            }
          });
        }).catch(() => {
        });
      }
      return Promise.resolve();
    }
    // Comprueba si el AudioContext está activo y en ejecución.
    isReady() {
      return !!(this.ctx && this.ctx.state === "running");
    }
    // Ejecuta el callback inmediatamente o lo encola hasta que el audio esté disponible.
    onReady(cb) {
      if (this.isReady()) {
        cb();
        return;
      }
      this._readyCbs.push(cb);
    }
    // Valida la disponibilidad del sistema de audio sin forzar inicialización prematura.
    _ensure() {
      return this.isReady();
    }
    setMasterVolume(v) {
      this.masterVolume = Math.max(0, Math.min(1, v));
      if (this.masterGain && this.ctx) {
        try {
          this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
          this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
        } catch {
        }
      }
    }
    setMusicVolume(v) {
      this.musicVolume = Math.max(0, Math.min(1.2, v));
      if (this.musicGain && this.ctx) {
        try {
          this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
          this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
        } catch {
        }
      }
    }
    setSfxVolume(v) {
      this.sfxVolume = Math.max(0, Math.min(1, v));
      if (this.sfxGain && this.ctx) {
        try {
          this.sfxGain.gain.cancelScheduledValues(this.ctx.currentTime);
          this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
        } catch {
        }
      }
    }
    // Ajusta simultáneamente los volúmenes de música y efectos.
    setVolumes(music01, sfx01) {
      this.setMusicVolume(music01);
      this.setSfxVolume(sfx01);
    }
    mute(muted = true) {
      if (this.masterGain && this.ctx) {
        try {
          this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
          this.masterGain.gain.setValueAtTime(muted ? 0 : this.masterVolume, this.ctx.currentTime);
        } catch {
        }
      }
    }
    _targetBus(isMusic) {
      if (!this.musicGain || !this.sfxGain) {
        return this.masterGain;
      }
      return isMusic ? this.musicGain : this.sfxGain;
    }
    _playPulse(channel, freq, { duration = 0.12, volume = 0.15, duty = 0.5, slide = 0, isMusic = false } = {}) {
      if (!this._ensure()) {
        return;
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      if (duty !== 0.5 && duty !== 0) {
        try {
          const wave = this._createPulseWave(duty);
          osc.setPeriodicWave(wave);
        } catch {
          osc.type = "square";
        }
      } else {
        osc.type = "square";
      }
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      if (slide) {
        osc.frequency.linearRampToValueAtTime(freq + slide, this.ctx.currentTime + duration);
      }
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-4, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this._targetBus(isMusic));
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
      return osc;
    }
    playPulse1(freq, opts = {}) {
      return this._playPulse("pulse1", freq, opts);
    }
    playPulse2(freq, opts = {}) {
      return this._playPulse("pulse2", freq, opts);
    }
    playTriangle(freq, { duration = 0.12, volume = 0.18, isMusic = false } = {}) {
      if (!this._ensure()) {
        return;
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(volume * 0.7, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-4, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this._targetBus(isMusic));
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
      return osc;
    }
    playNoise({ duration = 0.12, volume = 0.12, metallic = false, isMusic = false } = {}) {
      if (!this._ensure()) {
        return;
      }
      const src = this.ctx.createBufferSource();
      src.buffer = (metallic ? this._metallicBuffer : this._noiseBuffer) || this.ctx.createBuffer(1, 256, this.ctx.sampleRate);
      src.loop = true;
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 800;
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-4, this.ctx.currentTime + duration);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(this._targetBus(isMusic));
      src.start();
      src.stop(this.ctx.currentTime + duration);
      return src;
    }
    schedulePulse(channel, freq, startTime, duration, { volume = 0.15, duty = 0.5, slide = 0, isMusic = true } = {}) {
      if (!this._ensure() || !Number.isFinite(freq) || !Number.isFinite(startTime) || !Number.isFinite(duration) || freq <= 0 || duration <= 0) {
        return null;
      }
      if (!Number.isFinite(volume)) {
        volume = 0.15;
      }
      if (!Number.isFinite(slide)) {
        slide = 0;
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      if (duty !== 0.5 && duty !== 0) {
        try {
          const wave = this._createPulseWave(duty);
          osc.setPeriodicWave(wave);
        } catch {
          osc.type = "square";
        }
      } else {
        osc.type = "square";
      }
      const t0 = Math.max(this.ctx.currentTime, startTime);
      if (!Number.isFinite(t0)) {
        return null;
      }
      osc.frequency.setValueAtTime(freq, t0);
      if (slide && Number.isFinite(freq + slide)) {
        osc.frequency.linearRampToValueAtTime(freq + slide, t0 + duration);
      }
      gain.gain.setValueAtTime(volume, t0);
      gain.gain.exponentialRampToValueAtTime(1e-4, t0 + duration);
      osc.connect(gain);
      gain.connect(this._targetBus(isMusic));
      osc.start(t0);
      osc.stop(t0 + duration);
      return osc;
    }
    scheduleTriangle(freq, startTime, duration, { volume = 0.18, isMusic = true } = {}) {
      if (!this._ensure() || !Number.isFinite(freq) || !Number.isFinite(startTime) || !Number.isFinite(duration) || freq <= 0 || duration <= 0) {
        return null;
      }
      if (!Number.isFinite(volume)) {
        volume = 0.18;
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      const t0 = Math.max(this.ctx.currentTime, startTime);
      if (!Number.isFinite(t0)) {
        return null;
      }
      osc.frequency.setValueAtTime(freq, t0);
      gain.gain.setValueAtTime(volume * 0.75, t0);
      gain.gain.exponentialRampToValueAtTime(1e-4, t0 + duration);
      osc.connect(gain);
      gain.connect(this._targetBus(isMusic));
      osc.start(t0);
      osc.stop(t0 + duration);
      return osc;
    }
    scheduleNoise(startTime, duration, { volume = 0.12, metallic = false, isMusic = true } = {}) {
      if (!this._ensure() || !Number.isFinite(startTime) || !Number.isFinite(duration) || duration <= 0) {
        return null;
      }
      if (!Number.isFinite(volume)) {
        volume = 0.12;
      }
      const src = this.ctx.createBufferSource();
      src.buffer = (metallic ? this._metallicBuffer : this._noiseBuffer) || this.ctx.createBuffer(1, 256, this.ctx.sampleRate);
      src.loop = true;
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 750;
      const t0 = Math.max(this.ctx.currentTime, startTime);
      if (!Number.isFinite(t0)) {
        return null;
      }
      gain.gain.setValueAtTime(volume, t0);
      gain.gain.exponentialRampToValueAtTime(1e-4, t0 + duration);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(this._targetBus(isMusic));
      src.start(t0);
      src.stop(t0 + duration);
      return src;
    }
    playTone(freq, type = "square", duration = 0.1, volume = 0.1) {
      if (type === "triangle") {
        return this.playTriangle(freq, { duration, volume, isMusic: false });
      }
      if (type === "square") {
        return this.playPulse1(freq, { duration, volume, isMusic: false });
      }
      return this._playPulse("pulse1", freq, { duration, volume, isMusic: false });
    }
    sfxJump() {
      this.playPulse1(300, { duration: 0.12, volume: 0.18 });
      this.playPulse2(600, { duration: 0.08, volume: 0.12 });
    }
    sfxCoin() {
      this.playPulse1(880, { duration: 0.1, volume: 0.15 });
      setTimeout(() => this.playPulse1(1200, { duration: 0.15, volume: 0.14 }), 80);
    }
    sfxHit() {
      this.playNoise({ duration: 0.08, volume: 0.2 });
      this.playPulse1(120, { duration: 0.06, volume: 0.2 });
    }
    sfxExplosion() {
      this.playNoise({ duration: 0.35, volume: 0.22 });
    }
    sfxLaser() {
      this.playPulse1(800, { duration: 0.08, volume: 0.15, slide: -400 });
    }
    sfxSelect() {
      this.playPulse1(600, { duration: 0.08, volume: 0.14 });
    }
    sfxBack() {
      this.playPulse1(300, { duration: 0.08, volume: 0.14, slide: -100 });
    }
    playSequence(notes, tempo = 120, isMusic = true) {
      if (!this._ensure()) {
        return;
      }
      const beatSec = 60 / tempo;
      let t = this.ctx.currentTime + 0.03;
      notes.forEach((n) => {
        const dur = (n.durationBeats || 1) * beatSec;
        const vol = n.volume ?? 0.12;
        const ch = n.channel;
        const freq = n.freq;
        const useMusic = n.isMusic ?? isMusic;
        const duty = n.duty ?? 0.5;
        const slide = n.slide ?? 0;
        if (freq > 0) {
          if (ch === "triangle") {
            this.scheduleTriangle(freq, t, dur * 0.92, { volume: vol, isMusic: useMusic });
          } else if (ch === "noise") {
            this.scheduleNoise(t, dur * 0.92, { volume: vol, isMusic: useMusic });
          } else {
            this.schedulePulse(ch || "pulse1", freq, t, dur * 0.92, { volume: vol, duty, slide, isMusic: useMusic });
          }
        } else if (ch === "noise" && n.isNoiseHit) {
          this.scheduleNoise(t, dur * 0.92, { volume: vol, isMusic: useMusic });
        }
        t += dur;
      });
    }
    _createPulseWave(duty) {
      const real = new Float32Array(8);
      const imag = new Float32Array(8);
      for (let n = 1; n < 8; n++) {
        const a = 2 / (Math.PI * n) * Math.sin(Math.PI * n * duty);
        imag[n] = a;
      }
      return this.ctx.createPeriodicWave(real, imag, { disableNormalization: false });
    }
  };

  // Engine/SDK.js
  var SDKManager = class {
    constructor(options = {}) {
      this.gameId = options.gameId || null;
      this.ready = false;
      this.paused = false;
      this._queue = [];
      this._onPause = options.onPause || (() => {
      });
      this._onResume = options.onResume || (() => {
      });
      this.debug = !!options.debug;
      this._lastAdTime = 0;
      this._adCooldown = 3e4;
      this._adPlacement = null;
      this._gdprConsent = false;
      this._consentChecked = false;
      try {
        window.addEventListener("error", (e) => {
          const msg = String(e.message || e.error?.message || "");
          const stack = String(e.error?.stack || "");
          if (msg.includes("WX") || stack.includes("ima3") || msg.includes("VAST") || stack.includes("VAST")) {
            e.preventDefault();
            if (this.debug) {
              console.warn("[PALUGO SDK] VAST silenciado:", msg);
            }
            return true;
          }
        });
        window.addEventListener("unhandledrejection", (e) => {
          const msg = String(e.reason?.message || e.reason || "");
          if (msg.includes("WX") || msg.includes("VAST") || String(e.reason?.stack || "").includes("ima3")) {
            e.preventDefault();
          }
        });
      } catch {
      }
      if (options.autoInit !== false) {
        this.init();
      }
    }
    init() {
      try {
        const consent = localStorage.getItem("palugo_gdpr_consent");
        this._gdprConsent = consent === "true";
        this._consentChecked = true;
      } catch {
      }
      if (!this.gameId || this.gameId.includes("YOUR_GAMEMONETIZE") || this.gameId === "Demo") {
        if (this.debug) {
          console.warn("PALUGO SDK: gameId no configurado (Demo), ads deshabilitados.");
        }
        this.ready = true;
        return;
      }
      if (window.sdk) {
        this.ready = true;
        return;
      }
      window.SDK_OPTIONS = {
        gameId: this.gameId,
        onEvent: (event) => this._handleEvent(event)
      };
      if (document.getElementById("gamemonetize-sdk")) {
        return;
      }
      const script = document.createElement("script");
      script.id = "gamemonetize-sdk";
      script.src = "https://api.gamemonetize.com/sdk.js";
      script.async = true;
      script.onload = () => {
        if (this.debug) {
          console.log("PALUGO SDK loaded", this.gameId);
        }
      };
      script.onerror = () => console.warn("PALUGO SDK: fallo al cargar sdk.js");
      const first = document.getElementsByTagName("script")[0];
      if (first && first.parentNode) {
        first.parentNode.insertBefore(script, first);
      } else {
        document.head.appendChild(script);
      }
      setTimeout(() => {
        if (!this.ready) {
          this.ready = true;
          this._flushQueue();
        }
      }, 5e3);
    }
    _handleEvent(event) {
      console.log("[PALUGO SDK] Event received:", event);
      const name = event && (event.name || event.type || "");
      switch (name) {
        case "SDK_READY":
          this.ready = true;
          this._flushQueue();
          break;
        case "SDK_GAME_PAUSE":
          console.log("[PALUGO SDK] SDK_GAME_PAUSE detected - pausing");
          this.paused = true;
          this._onPause(this._adPlacement);
          break;
        case "SDK_GAME_START":
          console.log("[PALUGO SDK] SDK_GAME_START detected - resuming");
          this.paused = false;
          this._onResume(this._adPlacement);
          if (this._adPlacement === "rewarded_continue") {
            this._onRewardedComplete?.();
          }
          break;
        case "SDK_BANNER_DISMISSED":
          console.log("[PALUGO SDK] SDK_BANNER_DISMISSED detected - resuming");
          this.paused = false;
          this._onResume(this._adPlacement);
          break;
        case "SDK_REWARDED_WATCH_COMPLETE":
          console.log("[PALUGO SDK] SDK_REWARDED_WATCH_COMPLETE detected - resuming");
          this.paused = false;
          this._onResume(this._adPlacement);
          if (this._adPlacement === "rewarded_continue") {
            this._onRewardedComplete?.();
          }
          break;
        case "SDK_ERROR":
        case "adLoadError":
        case "adError":
          console.warn("[PALUGO SDK] Error event:", event);
          this.paused = false;
          this._onResume(this._adPlacement);
          break;
        default:
          console.log("[PALUGO SDK] Unknown event:", name, event);
          break;
      }
    }
    _flushQueue() {
      while (this._queue.length) {
        const fn = this._queue.shift();
        try {
          fn();
        } catch (e) {
          console.warn(e);
        }
      }
    }
    _whenReady(fn) {
      if (this.ready) {
        fn();
      } else {
        this._queue.push(fn);
      }
    }
    forceResume() {
      clearTimeout(this._pauseWatchdog);
      this.paused = false;
      try {
        this._onResume(this._adPlacement);
      } catch {
      }
    }
    // GDPR Consent Management
    setGDPConsent(consent) {
      this._gdprConsent = consent;
      this._consentChecked = true;
      try {
        localStorage.setItem("palugo_gdpr_consent", consent.toString());
      } catch {
      }
      if (this.debug) {
        console.log("PALUGO SDK: GDPR consent", consent);
      }
    }
    hasGDPConsent() {
      return this._gdprConsent;
    }
    needsGDPRPrompt() {
      return !this._consentChecked;
    }
    // Submit score to GameMonetize leaderboard
    submitScore(score) {
      if (!this.ready) {
        return;
      }
      try {
        if (window.sdk && typeof window.sdk.submitScore === "function") {
          window.sdk.submitScore(score);
          if (this.debug) {
            console.log("PALUGO SDK: Score submitted", score);
          }
        }
      } catch (e) {
        console.warn("submitScore error", e);
      }
    }
    // Show GameMonetize leaderboard
    showLeaderboard() {
      if (!this.ready) {
        return;
      }
      try {
        if (window.sdk && typeof window.sdk.showLeaderboard === "function") {
          window.sdk.showLeaderboard();
          if (this.debug) {
            console.log("PALUGO SDK: Show leaderboard");
          }
        }
      } catch (e) {
        console.warn("showLeaderboard error", e);
      }
    }
    // Show interstitial with placement tracking
    showInterstitial({ onClose, onError, placement = "default" } = {}) {
      this._adPlacement = placement;
      let closed = false;
      const safeClose = () => {
        if (closed) {
          return;
        }
        closed = true;
        this.forceResume();
        try {
          onClose?.(placement);
        } catch {
        }
      };
      const now = Date.now();
      if (this._lastAdTime && now - this._lastAdTime < this._adCooldown) {
        if (this.debug) {
          console.log("PALUGO SDK: Ad cooldown, skipping", placement);
        }
        safeClose();
        return;
      }
      this._lastAdTime = now;
      const timer = setTimeout(safeClose, 1800);
      this._whenReady(() => {
        try {
          if (window.sdk && typeof window.sdk.showBanner === "function") {
            window.sdk.showBanner();
            safeClose();
          } else if (typeof window.showBanner === "function") {
            window.showBanner();
            safeClose();
          } else {
            if (this.debug) {
              console.log("[MOCK AD] Interstitial", placement);
            }
            safeClose();
          }
        } catch (e) {
          console.warn("showInterstitial error", e);
          try {
            onError?.(e);
          } catch {
          }
          safeClose();
        } finally {
          clearTimeout(timer);
        }
      });
    }
    // Show rewarded ad with placement tracking
    showRewarded({ onRewarded, onClose, onError, placement = "rewarded" } = {}) {
      this._adPlacement = placement;
      let handled = false;
      const safeEnd = () => {
        if (handled) {
          return;
        }
        handled = true;
        this.forceResume();
        try {
          onRewarded?.(placement);
        } catch {
        }
        try {
          onClose?.(placement);
        } catch {
        }
      };
      const timer = setTimeout(safeEnd, 2e3);
      this._whenReady(() => {
        try {
          if (window.sdk && typeof window.sdk.showRewarded === "function") {
            window.sdk.showRewarded(() => {
              clearTimeout(timer);
              safeEnd();
            });
          } else {
            if (this.debug) {
              console.log("[MOCK AD] Rewarded", placement);
            }
            setTimeout(() => {
              clearTimeout(timer);
              safeEnd();
            }, 300);
          }
        } catch (e) {
          console.warn("showRewarded error", e);
          try {
            onError?.(e);
          } catch {
          }
          safeEnd();
        }
      });
    }
    // Set callback for rewarded completion (used for continue)
    onRewardedComplete(callback) {
      this._onRewardedComplete = callback;
    }
    showBanner(...args) {
      return this.showInterstitial(...args);
    }
  };

  // Engine/Palugo.js
  var Palugo = class {
    constructor(options = {}) {
      this.width = options.width || 640;
      this.height = options.height || 480;
      this.fps = options.fps === 30 ? 30 : 60;
      this.fixedDt = 1 / this.fps;
      this.paused = false;
      this._running = false;
      const hasWindowElem = !!document.getElementById("palugo-window");
      const windowed = options.windowed !== void 0 ? !!options.windowed : hasWindowElem;
      const isMobile2 = options.isMobile !== void 0 ? !!options.isMobile : isSmartphone();
      const enableTouch = options.touchControls !== void 0 ? !!options.touchControls : isMobile2;
      this.display = new Display({
        width: this.width,
        height: this.height,
        palette: options.palette || Palettes.VECTOR,
        container: options.container,
        windowed,
        crt: options.crt,
        flicker: options.flicker
      });
      this.input = new Input({
        windowed
      });
      this.touchControls = null;
      if (enableTouch) {
        this.touchControls = new TouchControls(this.input, {
          windowed,
          isMobile: isMobile2,
          palette: this.display.palette
        });
      }
      this.audio = new PalugoAudio({ masterVolume: options.masterVolume });
      this.sdk = new SDKManager({
        gameId: options.gameId,
        debug: options.debug,
        autoInit: options.sdk !== false,
        onPause: () => {
          console.log("[PALUGO] SDK_GAME_PAUSE - pausing game");
          this.paused = true;
        },
        onResume: () => {
          console.log("[PALUGO] SDK_GAME_START - resuming game");
          this.paused = false;
          if (this.game && this.game.ship) {
            this.game.ship.iframes = 2;
            console.log("[PALUGO] Invincibility granted after ad");
          }
        }
      });
      window.palugo = this;
      this.canvas = this.display.canvas;
      this.ctx = this.display.ctx;
      this.palette = this.display.palette;
      this.inputs = this.input.state;
      this.sdkReady = false;
      this.showFPS = !!options.showFPS;
      this._frameCount = 0;
      this._fpsValue = this.fps;
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.paused = true;
        } else if (!this.sdk.paused) {
          this.paused = false;
        }
      });
    }
    // ── Fachada de Renderizado ──────────────────────────────────────────
    clear(c) {
      this.display.clear(c);
    }
    drawText(...a) {
      return this.display.drawText(...a);
    }
    drawTextASCII(...a) {
      return this.display.drawText(...a);
    }
    drawSpriteASCII(...a) {
      return this.display.drawSpriteASCII(...a);
    }
    drawRect(...a) {
      return this.display.drawRect(...a);
    }
    drawCircle(...a) {
      return this.display.drawCircle(...a);
    }
    drawPixel(...a) {
      return this.display.drawPixel(...a);
    }
    drawLine(...a) {
      return this.display.drawLine(...a);
    }
    drawPoly(...a) {
      return this.display.drawPoly(...a);
    }
    drawVectorShip(...a) {
      return this.display.drawVectorShip(...a);
    }
    drawVectorEnemy(...a) {
      return this.display.drawVectorEnemy(...a);
    }
    drawVectorPlanet(...a) {
      return this.display.drawVectorPlanet(...a);
    }
    drawVectorSun(...a) {
      return this.display.drawVectorSun(...a);
    }
    drawVectorMiniboss(...a) {
      return this.display.drawVectorMiniboss(...a);
    }
    drawVectorCyclopsEgg(...a) {
      return this.display.drawVectorCyclopsEgg(...a);
    }
    drawVectorNeonSlime(...a) {
      return this.display.drawVectorNeonSlime(...a);
    }
    drawVectorSawSpinner(...a) {
      return this.display.drawVectorSawSpinner(...a);
    }
    drawMiniboss(...a) {
      return this.display.drawMiniboss(...a);
    }
    drawVectorObstacle(...a) {
      return this.display.drawVectorObstacle(...a);
    }
    isVector() {
      return this.display.isVector();
    }
    setPalette(p) {
      this.display.setPalette(p);
      this.palette = this.display.palette;
      if (this.touchControls?.applyPalette) this.touchControls.applyPalette(this.palette);
    }
    setPalettePreset(n) {
      this.display.setPalettePreset(n);
      this.palette = this.display.palette;
      if (this.touchControls?.applyPalette) this.touchControls.applyPalette(this.palette);
    }
    getPalette() {
      return this.display.getPalette();
    }
    measureText(...a) {
      return this.display.measureText(...a);
    }
    // ── Fachada de SDK y Servicios ──────────────────────────────────────
    showBanner(o) {
      return this.sdk.showInterstitial(o);
    }
    showInterstitial(o) {
      return this.sdk.showInterstitial(o);
    }
    showRewarded(o) {
      return this.sdk.showRewarded(o);
    }
    pause() {
      this.paused = true;
      if (this.sdk) {
        this.sdk.paused = true;
      }
    }
    resume() {
      this.paused = false;
      if (this.sdk) {
        this.sdk.forceResume();
      }
    }
    requestFullscreen() {
      try {
        const el = this.display?.container || this.display?.canvas || document.documentElement;
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      } catch {
      }
    }
    // ── Bucle de Juego con Intervalo de Tiempo Fijo ─────────────────────
    start(gameInstance) {
      if (!gameInstance || typeof gameInstance.update !== "function" || typeof gameInstance.render !== "function") {
        throw new Error("PALUGO: gameInstance debe implementar update(inputs, dt) y render(engine)");
      }
      if (this._running) {
        return;
      }
      this._running = true;
      this.game = gameInstance;
      if (typeof gameInstance.init === "function") {
        gameInstance.init(this);
      }
      let last = performance.now();
      let acc = 0;
      let fpsTimer = 0;
      const loop = (now) => {
        if (!this._running) {
          return;
        }
        requestAnimationFrame(loop);
        if (this.paused) {
          return;
        }
        let frameDt = (now - last) / 1e3;
        last = now;
        frameDt = Math.min(frameDt, 0.1);
        this.sdkReady = this.sdk.ready;
        acc += frameDt;
        fpsTimer += frameDt;
        this._frameCount++;
        let ticks = 0;
        while (acc >= this.fixedDt && ticks < 4) {
          this.input.update(this.fixedDt);
          const inputs = this.input.getState();
          this.inputs = inputs;
          this.game.update(inputs, this.fixedDt);
          this.input.flushJustPressed();
          acc -= this.fixedDt;
          ticks++;
        }
        this.display.clear(0);
        this.game.render(this);
        if (this.showFPS && fpsTimer >= 0.5) {
          console.log(`FPS: ${this._frameCount / fpsTimer}`);
          this._frameCount = 0;
          fpsTimer = 0;
        }
      };
      requestAnimationFrame(loop);
    }
    stop() {
      this._running = false;
      if (this.touchControls) {
        this.touchControls.destroy();
        this.touchControls = null;
      }
    }
    // Modifica dinámicamente la frecuencia de actualización del motor.
    setFPS(fps) {
      this.fps = fps === 30 ? 30 : 60;
      this.fixedDt = 1 / this.fps;
    }
  };

  // HudConfig.js
  var HudConfig = {
    "hud_title": {
      "x": 14,
      "y": 8,
      "size": 16,
      "font": "Consolas",
      "align": "w",
      "text": "LIVES = 3"
    },
    "hud_wave_counter": {
      "x": 220,
      "y": 8,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "WAVE = 0"
    },
    "hud_score": {
      "x": 410,
      "y": 8,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "SCORE 0"
    },
    "hud_boss": {
      "x": 626,
      "y": 8,
      "size": 15,
      "font": "Consolas",
      "align": "right",
      "text": "BOSS 02:00"
    },
    "hud_pausa": {
      "x": 600,
      "y": 9,
      "size": 13,
      "font": "Consolas",
      "align": "e",
      "text": "J:PAUSE"
    },
    "hud_help": {
      "x": 14,
      "y": 458,
      "size": 11,
      "font": "Consolas",
      "align": "w",
      "text": "WASD:MOVE J/U:FIRE"
    },
    "hud_wave": {
      "x": 626,
      "y": 458,
      "size": 11,
      "font": "Consolas",
      "align": "e",
      "text": "4xSCOUT"
    },
    "hud_vector": {
      "x": 320,
      "y": 458,
      "size": 11,
      "font": "Consolas",
      "align": "center",
      "text": "VECTOR 45 - MAX DETAIL"
    },
    "hud_warning_title": {
      "x": 320,
      "y": 198,
      "size": 28,
      "font": "Consolas",
      "align": "center",
      "text": "WARNING"
    },
    "hud_warning_sub": {
      "x": 320,
      "y": 224,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "SOMETHING IS APPROACHING"
    },
    "hud_boss_label": {
      "x": 320,
      "y": 48,
      "size": 12,
      "font": "Consolas",
      "align": "center",
      "text": "\nPipolo the Octopus"
    },
    "hud_continue_title": {
      "x": 320,
      "y": 185,
      "size": 20,
      "font": "Consolas",
      "align": "center",
      "text": "SHIP DESTROYED"
    },
    "hud_continue_lives": {
      "x": 320,
      "y": 210,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": "LIVES = 3"
    },
    "hud_continue_prompt": {
      "x": 320,
      "y": 234,
      "size": 13,
      "font": "Consolas",
      "align": "center",
      "text": "PRESS ANY KEY"
    },
    "hud_continue_ad": {
      "x": 320,
      "y": 256,
      "size": 9,
      "font": "Consolas",
      "align": "center",
      "text": "AD WILL PLAY"
    },
    "hud_continue_loading": {
      "x": 320,
      "y": 220,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": "LOADING AD..."
    },
    "hud_ready": {
      "x": 320,
      "y": 198,
      "size": 26,
      "font": "Consolas",
      "align": "center",
      "text": "READY IN 3"
    },
    "hud_ready_lives": {
      "x": 320,
      "y": 234,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "LIVES = 3"
    },
    "menu_title": {
      "x": 320,
      "y": 68,
      "size": 32,
      "font": "Consolas",
      "align": "center",
      "text": "NULLPOINTER.Type"
    },
    "menu_engine": {
      "x": 320,
      "y": 106,
      "size": 12,
      "font": "Consolas",
      "align": "center",
      "text": "Made with Pocket Engine"
    },
    "menu_opt_play": {
      "x": 320,
      "y": 156,
      "size": 18,
      "font": "Consolas",
      "align": "center",
      "text": "PLAY"
    },
    "menu_opt_options": {
      "x": 320,
      "y": 204,
      "size": 18,
      "font": "Consolas",
      "align": "center",
      "text": "OPTIONS"
    },
    "menu_opt_ranking": {
      "x": 320,
      "y": 252,
      "size": 18,
      "font": "Consolas",
      "align": "center",
      "text": "RANKING"
    },
    "menu_opt_credits": {
      "x": 320,
      "y": 300,
      "size": 18,
      "font": "Consolas",
      "align": "center",
      "text": "CREDITS"
    },
    "menu_footer_hint1": {
      "x": 320,
      "y": 398,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": "ARROWS/WASD: NAVIGATE  J: CONFIRM  K: BACK"
    },
    "menu_footer_hint2": {
      "x": 320,
      "y": 422,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": ""
    },
    "menu_option": {
      "x": 320,
      "y": 212,
      "size": 21,
      "font": "Consolas",
      "align": "center",
      "text": "PLAY"
    },
    "menu_footer": {
      "x": 320,
      "y": 400,
      "size": 12,
      "font": "Consolas",
      "align": "center",
      "text": "W/S: Navigate \xA0|\xA0 J: Confirm \xA0|\xA0 K: Cancel"
    },
    "options_title": {
      "x": 320,
      "y": 20,
      "size": 28,
      "font": "Consolas",
      "align": "center",
      "text": "OPTIONS"
    },
    "options_music": {
      "x": 320,
      "y": 80,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "MUSIC"
    },
    "options_sfx": {
      "x": 320,
      "y": 124,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "SFX"
    },
    "options_palette": {
      "x": 320,
      "y": 168,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "PALETTE"
    },
    "options_back": {
      "x": 320,
      "y": 212,
      "size": 16,
      "font": "Consolas",
      "align": "center",
      "text": "BACK"
    },
    "options_footer": {
      "x": 320,
      "y": 370,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": "J: CONFIRM  ARROWS: NAVIGATE  K: BACK  A - D <-/->: ADJUST"
    },
    "pause_title": {
      "x": 320,
      "y": 130,
      "size": 26,
      "font": "Consolas",
      "align": "center",
      "text": "PAUSE"
    },
    "pause_opt_resume": {
      "x": 320,
      "y": 174,
      "size": 18,
      "font": "Consolas",
      "align": "center",
      "text": "RESUME"
    },
    "pause_opt_options": {
      "x": 320,
      "y": 224,
      "size": 18,
      "font": "Consolas",
      "align": "center",
      "text": "OPTIONS"
    },
    "pause_opt_quit": {
      "x": 320,
      "y": 274,
      "size": 18,
      "font": "Consolas",
      "align": "center",
      "text": "QUIT TO TITLE"
    },
    "pause_footer": {
      "x": 320,
      "y": 360,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": "J: CONFIRM  K: BACK"
    },
    "ranking_title": {
      "x": 320,
      "y": 20,
      "size": 28,
      "font": "Consolas",
      "align": "center",
      "text": "RANKING"
    },
    "ranking_sub": {
      "x": 320,
      "y": 68,
      "size": 13,
      "font": "Consolas",
      "align": "center",
      "text": ""
    },
    "ranking_header": {
      "x": 320,
      "y": 92,
      "size": 15,
      "font": "Consolas",
      "align": "center",
      "text": "RANK  NAME      SCORE"
    },
    "ranking_footer": {
      "x": 320,
      "y": 322,
      "size": 15,
      "font": "Consolas",
      "align": "center",
      "text": "K: BACK"
    },
    "ranking_footer2": {
      "x": 320,
      "y": 346,
      "size": 13,
      "font": "Consolas",
      "align": "center",
      "text": ""
    },
    "credits_title": {
      "x": 320,
      "y": 20,
      "size": 28,
      "font": "Consolas",
      "align": "center",
      "text": "CREDITS"
    },
    "credits_version": {
      "x": 320,
      "y": 150,
      "size": 13,
      "font": "Consolas",
      "align": "center",
      "text": "v1.0 "
    },
    "credits_dev_label": {
      "x": 320,
      "y": 186,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": "DEVELOPER"
    },
    "credits_dev_name": {
      "x": 320,
      "y": 208,
      "size": 20,
      "font": "Consolas",
      "align": "center",
      "text": "GettoDev"
    },
    "credits_pub_label": {
      "x": 320,
      "y": 246,
      "size": 15,
      "font": "Consolas",
      "align": "center",
      "text": "This game is part of"
    },
    "credits_pub_name": {
      "x": 320,
      "y": 268,
      "size": 15,
      "font": "Consolas",
      "align": "center",
      "text": " Pocket Arcade Games."
    },
    "credits_footer": {
      "x": 320,
      "y": 314,
      "size": 15,
      "font": "Consolas",
      "align": "center",
      "text": "K: BACK"
    },
    "gameover_title": {
      "x": 320,
      "y": 196,
      "size": 20,
      "font": "Consolas",
      "align": "center",
      "text": "GAME OVER"
    },
    "gameover_score": {
      "x": 320,
      "y": 224,
      "size": 14,
      "font": "Consolas",
      "align": "center",
      "text": "SCORE:"
    },
    "gameover_restart": {
      "x": 320,
      "y": 246,
      "size": 12,
      "font": "Consolas",
      "align": "center",
      "text": ""
    },
    "_gameId": "k573z71gvdx902ocvegl74uvgrwqsi73"
  };

  // Engine/Menu.js
  function hud(key, fallback) {
    return HudConfig && HudConfig[key] ? HudConfig[key] : fallback;
  }
  var PalugoMenu = class {
    constructor(engine2, options = {}) {
      this.engine = engine2;
      this.gameTitle = options.title || "PALUGO GAME";
      this.engineName = "PALUGO ENGINE";
      this.developer = "GettoDev";
      this.onPlay = options.onPlay || null;
      this.gameInstance = options.gameInstance || null;
      this.state = "title";
      this.selTitle = 0;
      this.pilotNameBuffer = "";
      this.pilotNameCursor = 0;
      this.savedPilotName = "";
      try {
        this.savedPilotName = localStorage.getItem("palugo_pilotname") || "";
      } catch {
      }
      this.selOptions = 0;
      this.selPause = 0;
      this.selHangar = 0;
      this._hangarDefs = [
        { id: "DEFAULT", name: "STAR BLAST", desc: "Balanced", unlockScore: 0 },
        { id: "INTERCEPTOR", name: "INTERCEPTOR MK-II", desc: "High speed", unlockScore: 5e4 },
        { id: "BOMBER", name: "HEAVY BOMBER", desc: "Heavy fire", unlockScore: 1e5 },
        { id: "PHANTOM", name: "PHANTOM X", desc: "Fast firing", unlockScore: 25e4 },
        { id: "PROTOTYPE", name: "PROTOTYPE-0", desc: "Overclocked", unlockScore: 5e5 }
      ];
      this.musicVol = 8;
      this.sfxVol = 8;
      this.ranking = [];
      this.rankingLoading = false;
      this.rankingError = "";
      this._rankingFetched = false;
      this.selAchievement = 0;
      this._applyVolumes();
      this._applyPalette();
      this.menuBpm = 165;
      this.menuMusicId = null;
      this.engine.audio.onReady(() => {
        if (this.state !== "playing" && this.state !== "paused") {
          this._startMenuMusic();
        }
      });
    }
    _applyVolumes() {
      const m = Math.min(1.2, this.musicVol / 10 * 1.2);
      const s = this.sfxVol / 10;
      this.engine.audio.setMusicVolume(m);
      this.engine.audio.setSfxVolume(s);
    }
    _applyPalette() {
      const prof = this.gameInstance ? this.gameInstance.profile : null;
      const pal = prof ? prof.selectedPalette || "VECTOR" : this._currentPalette || "VECTOR";
      this.engine.setPalettePreset(pal);
    }
    _playMenuBar() {
      if (this.state === "playing" || this.state === "paused") {
        return;
      }
      if (!this.engine.audio.isReady()) {
        return;
      }
      const tempo = this.menuBpm;
      this.engine.audio.playSequence([
        { freq: 130, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true },
        { freq: 164, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true },
        { freq: 196, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true },
        { freq: 164, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true },
        { freq: 130, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true },
        { freq: 146, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true },
        { freq: 174, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true },
        { freq: 164, durationBeats: 1, channel: "triangle", volume: 0.11, isMusic: true }
      ], tempo, true);
      this.engine.audio.playSequence([
        { freq: 523, durationBeats: 0.5, channel: "pulse1", volume: 0.09, isMusic: true },
        { freq: 659, durationBeats: 0.5, channel: "pulse1", volume: 0.09, isMusic: true },
        { freq: 783, durationBeats: 0.5, channel: "pulse2", volume: 0.07, isMusic: true },
        { freq: 659, durationBeats: 0.5, channel: "pulse2", volume: 0.07, isMusic: true },
        { freq: 587, durationBeats: 0.5, channel: "pulse1", volume: 0.09, isMusic: true },
        { freq: 659, durationBeats: 0.5, channel: "pulse1", volume: 0.09, isMusic: true },
        { freq: 523, durationBeats: 1, channel: "pulse1", volume: 0.09, isMusic: true },
        { freq: 0, durationBeats: 0.5, channel: "pulse1", volume: 0, isMusic: true },
        { freq: 392, durationBeats: 0.5, channel: "pulse1", volume: 0.08, isMusic: true },
        { freq: 440, durationBeats: 1, channel: "pulse1", volume: 0.09, isMusic: true }
      ], tempo, true);
      this.engine.audio.playSequence([
        { freq: 0, durationBeats: 1, channel: "noise", volume: 0.04, isMusic: true },
        { freq: 0, durationBeats: 1, channel: "noise", volume: 0, isMusic: true },
        { freq: 0, durationBeats: 1, channel: "noise", volume: 0.04, isMusic: true },
        { freq: 0, durationBeats: 1, channel: "noise", volume: 0, isMusic: true }
      ], tempo, true);
    }
    _startMenuMusic() {
      if (this.menuMusicId) {
        return;
      }
      this._playMenuBar();
      const barMs = 60 / this.menuBpm * 8 * 1e3;
      this.menuMusicId = setInterval(() => this._playMenuBar(), barMs);
    }
    _stopMenuMusic() {
      clearInterval(this.menuMusicId);
      this.menuMusicId = null;
    }
    update(inputs, dt) {
      if (this.state === "playing") {
        if (this.engine.input.justPressed("btnStart") || this.engine.input.justPressed("btnPause")) {
          this.state = "paused";
          this.selPause = 0;
          this.engine.audio.sfxSelect();
        }
        if (this.gameInstance && typeof this.gameInstance.update === "function") {
          this.gameInstance.update(inputs, dt);
        }
        return;
      }
      if (this.state === "paused") {
        this._updatePaused(inputs);
        return;
      }
      if (this.state === "title") {
        this._updateTitle(inputs);
      } else if (this.state === "hangar") {
        this._updateHangar(inputs);
      } else if (this.state === "options") {
        this._updateOptions(inputs);
      } else if (this.state === "achievements") {
        this._updateAchievements(inputs);
      } else if (this.state === "ranking") {
        this._updateRanking(inputs);
      } else if (this.state === "credits") {
        this._updateCredits(inputs);
      } else if (this.state === "pilot_name") {
        this._updatePilotName(inputs);
      }
    }
    _updateTitle(inputs) {
      const totalOptions = 6;
      if (this.engine.input.justPressed("up")) {
        this.selTitle = (this.selTitle - 1 + totalOptions) % totalOptions;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("down")) {
        this.selTitle = (this.selTitle + 1) % totalOptions;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnStart")) {
        this.engine.audio.sfxCoin();
        switch (this.selTitle) {
          case 0:
            this._stopMenuMusic();
            this.state = "pilot_name";
            this.pilotNameBuffer = this.savedPilotName || "";
            this.pilotNameCursor = this.pilotNameBuffer.length;
            break;
          case 1:
            this.state = "hangar";
            this.selHangar = 0;
            if (this.gameInstance && this.gameInstance.currentShip) {
              const idx = this._hangarDefs.findIndex((h) => h.id === this.gameInstance.currentShip);
              if (idx >= 0) {
                this.selHangar = idx;
              }
            }
            break;
          case 2:
            this.state = "options";
            this.selOptions = 0;
            break;
          case 3:
            this.state = "achievements";
            this.selAchievement = 0;
            break;
          case 4:
            this.state = "ranking";
            break;
          case 5:
            this.state = "credits";
            break;
        }
      }
    }
    _updateHangar(inputs) {
      if (this.engine.input.justPressed("up")) {
        this.selHangar = (this.selHangar - 1 + this._hangarDefs.length) % this._hangarDefs.length;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("down")) {
        this.selHangar = (this.selHangar + 1) % this._hangarDefs.length;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnStart")) {
        const def = this._hangarDefs[this.selHangar];
        const prof = this.gameInstance ? this.gameInstance.profile : null;
        const total = prof ? prof.totalScore || 0 : 0;
        const unlocked = !prof || prof.unlockedShips.includes(def.id) || total >= def.unlockScore;
        if (unlocked) {
          if (this.gameInstance) {
            this.gameInstance.currentShip = def.id;
            if (prof) {
              prof.selectedShip = def.id;
              this.gameInstance._saveProfile();
            }
            this.gameInstance._applyShipStats();
          }
          this.engine.audio.sfxCoin();
        } else {
          this.engine.audio.sfxBack();
        }
      }
      if (this.engine.input.justPressed("btnB")) {
        this.engine.audio.sfxBack();
        this.state = "title";
      }
    }
    _updateOptions(inputs) {
      const numOptions = 4;
      if (this.engine.input.justPressed("up")) {
        this.selOptions = (this.selOptions - 1 + numOptions) % numOptions;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("down")) {
        this.selOptions = (this.selOptions + 1) % numOptions;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("left")) {
        if (this.selOptions === 0) {
          this.musicVol = Math.max(0, this.musicVol - 1);
          this._applyVolumes();
          this.engine.audio.sfxSelect();
        }
        if (this.selOptions === 1) {
          this.sfxVol = Math.max(0, this.sfxVol - 1);
          this._applyVolumes();
          this.engine.audio.playPulse1(600, { duration: 0.07, volume: 0.14 });
        }
        if (this.selOptions === 2) {
          this._cyclePalette(-1);
        }
      }
      if (this.engine.input.justPressed("right")) {
        if (this.selOptions === 0) {
          this.musicVol = Math.min(10, this.musicVol + 1);
          this._applyVolumes();
          this.engine.audio.sfxSelect();
        }
        if (this.selOptions === 1) {
          this.sfxVol = Math.min(10, this.sfxVol + 1);
          this._applyVolumes();
          this.engine.audio.playPulse1(700, { duration: 0.07, volume: 0.14 });
        }
        if (this.selOptions === 2) {
          this._cyclePalette(1);
        }
      }
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnStart")) {
        if (this.selOptions === 2) {
          this._cyclePalette(1);
        } else if (this.selOptions === 3) {
          this.engine.audio.sfxBack();
          this.state = this._prevState || "title";
          this._prevState = null;
        }
      }
      if (this.engine.input.justPressed("btnB")) {
        this.engine.audio.sfxBack();
        this.state = this._prevState || "title";
        this._prevState = null;
      }
    }
    _cyclePalette(dir) {
      const prof = this.gameInstance ? this.gameInstance.profile : null;
      const unlocked = prof && Array.isArray(prof.unlockedPalettes) ? prof.unlockedPalettes : ["VECTOR"];
      if (unlocked.length <= 1) {
        this.engine.audio.sfxBack();
        return;
      }
      const current = prof ? prof.selectedPalette || "VECTOR" : this._currentPalette || "VECTOR";
      let idx = unlocked.indexOf(current);
      if (idx < 0) idx = 0;
      const nextIdx = (idx + dir + unlocked.length) % unlocked.length;
      const nextPal = unlocked[nextIdx];
      this._currentPalette = nextPal;
      if (prof) {
        prof.selectedPalette = nextPal;
        if (this.gameInstance && typeof this.gameInstance._saveProfile === "function") {
          this.gameInstance._saveProfile();
        }
      }
      this.engine.setPalettePreset(nextPal);
      if (this.gameInstance && typeof this.gameInstance._applyPalette === "function") {
        this.gameInstance._applyPalette();
      }
      this.engine.audio.sfxSelect();
    }
    _fetchRanking() {
      if (this.rankingLoading) {
        return;
      }
      if (this._nextFetchAt && Date.now() < this._nextFetchAt) {
        return;
      }
      this.rankingLoading = true;
      this.rankingError = "";
      this.ranking = [];
      const host = typeof window !== "undefined" && window.location && window.location.hostname ? window.location.hostname : "";
      const isLocal = host === "localhost" || host === "127.0.0.1" || host === "";
      const primaryBase = typeof window !== "undefined" && window.RANKING_API_BASE ? window.RANKING_API_BASE : isLocal ? "" : "https://piesfrescos.alwaysdata.net/";
      const fallbackBase = primaryBase === "" ? "https://piesfrescos.alwaysdata.net/" : "";
      const urls = [primaryBase + "nullpointer_obtener.php?limit=7"];
      if (fallbackBase) {
        urls.push(fallbackBase + "nullpointer_obtener.php?limit=7");
      }
      const tryFetch = (idx) => {
        if (idx >= urls.length) {
          this.rankingError = "RANKING OFFLINE";
          this.rankingLoading = false;
          this._nextFetchAt = Date.now() + 3e4;
          return;
        }
        fetch(urls[idx]).then((r) => {
          if (!r.ok) {
            throw new Error("HTTP " + r.status);
          }
          return r.json();
        }).then((data) => {
          const list = data.results || data.ranking || data || [];
          const arr = Array.isArray(list) ? list : [];
          if (arr.length) {
            this.ranking = arr.slice(0, 7).map((row, i) => ({
              rank: i + 1,
              name: (row.nombre || row.name || "PLR").toString().slice(0, 8).toUpperCase(),
              score: parseInt(row.score, 10) || 0,
              time: (row.tiempo || row.time || "").toString().replace(/[\n\r]/g, "").trim()
            }));
          } else if (Array.isArray(data) && data.length) {
            this.ranking = data.slice(0, 7).map((row, i) => ({
              rank: i + 1,
              name: (row.nombre || row.name || "PLR").toString().slice(0, 8).toUpperCase(),
              score: parseInt(row.score, 10) || 0,
              time: (row.tiempo || row.time || "").toString().replace(/[\n\r]/g, "").trim()
            }));
          }
          this._rankingFetched = true;
          this.rankingError = arr.length ? "" : "EMPTY";
          this.rankingLoading = false;
        }).catch(() => {
          if (idx + 1 < urls.length) {
            tryFetch(idx + 1);
          } else {
            this.rankingError = "RANKING OFFLINE";
            this.rankingLoading = false;
            this._nextFetchAt = Date.now() + 3e4;
          }
        });
      };
      tryFetch(0);
    }
    _updateAchievements(inputs) {
      const profile = this.gameInstance ? this.gameInstance.profile : null;
      const achievements = profile ? profile.achievements : {};
      const achievementList = this.gameInstance ? this.gameInstance.achievements : {};
      const achievementIds = Object.keys(achievementList);
      const total = achievementIds.length;
      if (total === 0) {
        if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnB") || this.engine.input.justPressed("btnStart")) {
          this.engine.audio.sfxBack();
          this.state = "title";
        }
        return;
      }
      if (this.engine.input.justPressed("up")) {
        if (this.selAchievement - 2 >= 0) {
          this.selAchievement -= 2;
        } else {
          const target = this.selAchievement % 2 === 0 ? total % 2 === 1 ? total - 1 : total - 2 : total % 2 === 0 ? total - 1 : total - 2;
          this.selAchievement = Math.max(0, target);
        }
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("down")) {
        if (this.selAchievement + 2 < total) {
          this.selAchievement += 2;
        } else {
          this.selAchievement = this.selAchievement % 2;
        }
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("left")) {
        if (this.selAchievement % 2 === 1) {
          this.selAchievement -= 1;
          this.engine.audio.sfxSelect();
        }
      }
      if (this.engine.input.justPressed("right")) {
        if (this.selAchievement % 2 === 0 && this.selAchievement + 1 < total) {
          this.selAchievement += 1;
          this.engine.audio.sfxSelect();
        }
      }
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnB") || this.engine.input.justPressed("btnStart")) {
        this.engine.audio.sfxBack();
        this.state = "title";
      }
    }
    _updateRanking(inputs) {
      if (!this._rankingFetched && !this.rankingLoading) {
        if (!this._nextFetchAt || Date.now() >= this._nextFetchAt) {
          this._fetchRanking();
        }
      }
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnB") || this.engine.input.justPressed("btnStart")) {
        this.engine.audio.sfxBack();
        this.state = "title";
      }
    }
    _updatePaused(inputs) {
      if (this.engine.input.justPressed("up")) {
        this.selPause = (this.selPause - 1 + 3) % 3;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("down")) {
        this.selPause = (this.selPause + 1) % 3;
        this.engine.audio.sfxSelect();
      }
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnStart")) {
        this.engine.audio.sfxCoin();
        if (this.selPause === 0) {
          this.state = "playing";
        } else if (this.selPause === 1) {
          this._prevState = "paused";
          this.state = "options";
          this.selOptions = 0;
        } else {
          if (this.gameInstance && typeof this.gameInstance.stopMusicLoop === "function") {
            this.gameInstance.stopMusicLoop();
          }
          this._startMenuMusic();
          this.state = "title";
          this.selTitle = 0;
        }
      }
      if (this.engine.input.justPressed("btnB")) {
        this.engine.audio.sfxBack();
        this.state = "playing";
      }
    }
    _updateCredits(inputs) {
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnB") || this.engine.input.justPressed("btnStart")) {
        this.engine.audio.sfxBack();
        this.state = "title";
      }
    }
    _updatePilotName(inputs) {
      const keyMap = {
        "KeyA": "A",
        "KeyB": "B",
        "KeyC": "C",
        "KeyD": "D",
        "KeyE": "E",
        "KeyF": "F",
        "KeyG": "G",
        "KeyH": "H",
        "KeyI": "I",
        "KeyJ": "J",
        "KeyK": "K",
        "KeyL": "L",
        "KeyM": "M",
        "KeyN": "N",
        "KeyO": "O",
        "KeyP": "P",
        "KeyQ": "Q",
        "KeyR": "R",
        "KeyS": "S",
        "KeyT": "T",
        "KeyU": "U",
        "KeyV": "V",
        "KeyW": "W",
        "KeyX": "X",
        "KeyY": "Y",
        "KeyZ": "Z",
        "Digit0": "0",
        "Digit1": "1",
        "Digit2": "2",
        "Digit3": "3",
        "Digit4": "4",
        "Digit5": "5",
        "Digit6": "6",
        "Digit7": "7",
        "Digit8": "8",
        "Digit9": "9",
        "Space": " ",
        "Minus": "-",
        "Underscore": "_"
      };
      for (const [code, char] of Object.entries(keyMap)) {
        if (this.engine.input.justPressedKeyCode(code) && this.pilotNameBuffer.length < 8) {
          this.pilotNameBuffer += char;
          this.pilotNameCursor = this.pilotNameBuffer.length;
          break;
        }
      }
      if (this.engine.input.justPressedKeyCode("Backspace")) {
        if (this.pilotNameBuffer.length > 0) {
          this.pilotNameBuffer = this.pilotNameBuffer.slice(0, -1);
          this.pilotNameCursor = this.pilotNameBuffer.length;
        }
        return;
      }
      if (this.engine.input.justPressed("btnStart") || this.engine.input.justPressedKeyCode("Enter")) {
        const name = this.pilotNameBuffer.trim().slice(0, 8).toUpperCase().replace(/[^A-Z0-9 _-]/g, "") || "PLR";
        this.savedPilotName = name;
        try {
          localStorage.setItem("palugo_pilotname", name);
        } catch {
        }
        if (this.gameInstance) {
          this.gameInstance.pilotName = name;
          if (this.gameInstance.profile) {
            this.gameInstance.profile.pilotName = name;
            this.gameInstance._saveProfile();
          }
        }
        this.state = "playing";
        if (this.onPlay) {
          this.onPlay();
        }
        if (this.gameInstance && typeof this.gameInstance.init === "function") {
          this.gameInstance.init(this.engine);
        }
        return;
      }
      if (this.engine.input.justPressed("btnPause") || this.engine.input.justPressedKeyCode("Escape")) {
        this.state = "title";
        return;
      }
    }
    notifyGameOver() {
      this._startMenuMusic();
    }
    render(engine2) {
      if (this.state === "playing") {
        if (this.gameInstance && typeof this.gameInstance.render === "function") {
          this.gameInstance.render(engine2);
        }
        return;
      }
      if (this.state === "paused") {
        if (this.gameInstance && typeof this.gameInstance.render === "function") {
          this.gameInstance.render(engine2);
        }
        engine2.drawRect(0, 0, 640, 480, 0, true);
        for (let y = 0; y < 480; y += 4) {
          engine2.drawRect(0, y, 640, 2, 1, true);
        }
        this._renderPause(engine2);
        return;
      }
      engine2.clear(0);
      engine2.drawRect(0, 0, 640, 480, 2, false);
      if (this.state === "title") {
        this._renderTitle(engine2);
      } else if (this.state === "hangar") {
        this._renderHangar(engine2);
      } else if (this.state === "options") {
        this._renderOptions(engine2);
      } else if (this.state === "achievements") {
        this._renderAchievements(engine2);
      } else if (this.state === "ranking") {
        this._renderRanking(engine2);
      } else if (this.state === "credits") {
        this._renderCredits(engine2);
      } else if (this.state === "pilot_name") {
        this._renderPilotName(engine2);
      }
    }
    _renderTitle(engine2) {
      const t = this.engine.display?.ctx ? this.gameInstance ? this.gameInstance.animTimer : 0 : 0;
      const W = 640, H = 480;
      if (!this._stars) {
        this._stars = [];
        for (let i = 0; i < 80; i++) {
          this._stars.push({
            x: Math.random() * W,
            y: Math.random() * H,
            speed: 15 + Math.random() * 40,
            size: Math.random() < 0.15 ? 2 : 1,
            bright: Math.random() < 0.3
          });
        }
      }
      for (const s of this._stars) {
        s.x -= s.speed * 0.016;
        if (s.x < 0) {
          s.x = W;
          s.y = Math.random() * H;
        }
        const col = s.bright ? 18 : s.size > 1 ? 3 : 2;
        if (s.size > 1) {
          engine2.drawRect(s.x | 0, s.y | 0, 2, 1, col, true);
        } else {
          engine2.drawRect(s.x | 0, s.y | 0, 1, 1, col, true);
        }
      }
      for (let y = 0; y < H; y += 4) {
        engine2.drawRect(0, y, W, 1, 0, true);
      }
      engine2.drawRect(0, 0, W, 3, 2, true);
      engine2.drawRect(0, 3, W, 1, 5, true);
      const titleY = 60;
      engine2.drawText("NULLPOINTER.Type", 322, titleY + 2, 0, 42, { align: "center", font: "Consolas", bold: true });
      const titlePulse = Math.floor(t * 3) % 4;
      const titleCol = [25, 3, 18, 3][titlePulse];
      engine2.drawText("NULLPOINTER.Type", 320, titleY, titleCol, 42, { align: "center", font: "Consolas", bold: true, shadow: true, shadowColor: 1 });
      engine2.drawText("VECTOR  COMBAT  OPERATOR", 320, titleY + 48, 2, 12, { align: "center", font: "Consolas" });
      engine2.drawRect(100, titleY + 68, 440, 1, 5, true);
      engine2.drawRect(100, titleY + 70, 440, 1, 2, true);
      const menuItems = [
        { text: "PLAY", color: 25 },
        { text: "HANGAR", color: 30 },
        { text: "OPTIONS", color: 18 },
        { text: "ACHIEVEMENTS", color: 23 },
        { text: "RANKING", color: 27 },
        { text: "CREDITS", color: 5 }
      ];
      const listY = 180;
      const itemH = 36;
      const textSize = 16;
      for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const isSelected = this.selTitle === i;
        const y = listY + i * itemH;
        if (isSelected) {
          engine2.drawRect(160, y - 4, 320, itemH - 4, 1, true);
          engine2.drawRect(160, y - 4, 320, itemH - 4, 25, false, 2);
          const markerBlink = Math.floor(t * 6) % 2 === 0;
          if (markerBlink) {
            engine2.drawRect(152, y + 4, 6, 2, 25, true);
            engine2.drawRect(152, y + 10, 6, 2, 25, true);
            engine2.drawRect(482, y + 4, 6, 2, 25, true);
            engine2.drawRect(482, y + 10, 6, 2, 25, true);
          }
          engine2.drawPoly([
            [168, y + 8],
            [178, y + 14],
            [168, y + 20]
          ], 25, true, true);
        }
        const col = isSelected ? 25 : item.color;
        const shadowCol = isSelected ? 1 : 1;
        engine2.drawText(item.text, 320, y + 6, col, textSize, {
          align: "center",
          font: "Consolas",
          bold: true,
          shadow: true,
          shadowColor: shadowCol
        });
      }
      engine2.drawRect(100, listY + menuItems.length * itemH + 10, 440, 1, 2, true);
      engine2.drawRect(100, listY + menuItems.length * itemH + 12, 440, 1, 5, true);
      const footerY = 440;
      engine2.drawText("ARROWS:Move  J:Select", 320, footerY, 25, 11, { align: "center", font: "Consolas" });
      engine2.drawText("2026 - Powered By GettoDev", 320, 465, 25, 9, { align: "center", font: "Consolas" });
      const decoPulse = Math.floor(t * 2) % 3;
      const decoColors = [5, 2, 25];
      engine2.drawRect(10, 140, 4, 200, decoColors[decoPulse], true);
      engine2.drawRect(626, 140, 4, 200, decoColors[decoPulse], true);
    }
    _renderAchievements(engine2) {
      engine2.drawText("ACHIEVEMENTS", 320, 20, 25, 28, { align: "center", shadow: true, shadowColor: 1 });
      engine2.drawLine(220, 50, 420, 50, 5, 1.5);
      const profile = this.gameInstance ? this.gameInstance.profile : null;
      const achievements = profile ? profile.achievements : {};
      const achievementList = this.gameInstance ? this.gameInstance.achievements : {};
      const achievementIds = Object.keys(achievementList);
      const unlockedIds = Object.keys(achievements);
      const startY = 55;
      const itemHeight = 36;
      const col1X = 20;
      const col2X = 330;
      const itemWidth = 300;
      if (achievementIds.length === 0) {
        engine2.drawText("No achievements available", 320, 240, 3, 14, {
          align: "center",
          font: "Consolas"
        });
      } else {
        for (let i = 0; i < achievementIds.length; i++) {
          const id = achievementIds[i];
          const ach = achievementList[id];
          const isUnlocked = achievements[id];
          const isSelected = this.selAchievement === i;
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = col === 0 ? col1X : col2X;
          const y = startY + row * itemHeight;
          engine2.drawRect(x, y - 2, itemWidth, itemHeight, 0, true);
          const borderColor = isUnlocked ? 5 : isSelected ? 18 : 20;
          engine2.drawRect(x, y - 2, itemWidth, itemHeight, borderColor, false, isSelected ? 3 : 2);
          const statusText = isUnlocked ? "[UNL]" : "[LOC]";
          const statusColor = isUnlocked ? 5 : 20;
          const nameColor = isUnlocked ? 3 : 20;
          engine2.drawText(statusText, x + 8, y + 6, statusColor, 10, {
            shadow: true,
            shadowColor: 1,
            font: "Consolas",
            align: "left"
          });
          engine2.drawText(ach.name, x + 52, y + 6, nameColor, 12, {
            shadow: true,
            shadowColor: 1,
            font: "Consolas",
            align: "left"
          });
          const scoreText = `+${ach.score}`;
          engine2.drawText(scoreText, x + itemWidth - 8, y + 6, 25, 11, {
            align: "right",
            font: "Consolas"
          });
          engine2.drawText(ach.desc, x + itemWidth / 2, y + 22, 25, 9, {
            font: "Consolas",
            align: "center"
          });
          if (isSelected) {
            const triangleX = x + 5;
            const triangleY = y + 14;
            engine2.drawPoly([
              [triangleX, triangleY - 4],
              [triangleX + 5, triangleY],
              [triangleX, triangleY + 4]
            ], 25, true, true);
          }
        }
      }
      const totalCount = achievementIds.length;
      const unlockedCount = achievementIds.filter((id) => !!achievements[id]).length;
      engine2.drawText(`Unlocked: ${unlockedCount}/${totalCount}   |   WASD: Navigate  J: Back`, 320, 490, 25, 11, {
        align: "center",
        font: "Consolas"
      });
    }
    _renderHangar(engine2) {
      engine2.drawText("HANGAR", 320, 20, 25, 28, { align: "center", shadow: true, shadowColor: 1 });
      engine2.drawLine(220, 50, 420, 50, 5, 1.5);
      const prof = this.gameInstance ? this.gameInstance.profile : { totalScore: 0, unlockedShips: ["DEFAULT"] };
      const total = prof.totalScore || 0;
      const hi = prof.highScore || 0;
      engine2.drawText(`TOTAL: ${total}  HIGH: ${hi}`, 320, 68, 2, 12, { align: "center" });
      const nextDef = this._hangarDefs.find((d) => !prof.unlockedShips.includes(d.id));
      if (nextDef) {
        const need = Math.max(0, nextDef.unlockScore - total);
        const pct = Math.min(1, total / nextDef.unlockScore);
        engine2.drawText(`NEXT: ${nextDef.name} - ${need} PTS`, 320, 88, 3, 11, { align: "center" });
        engine2.drawRect(170, 100, 300, 10, 1, true);
        engine2.drawRect(170, 100, 300, 10, 2, false);
        engine2.drawRect(172, 102, 296 * pct | 0, 6, 5, true);
      } else {
        engine2.drawText("ALL SHIPS UNLOCKED", 320, 88, 5, 11, { align: "center" });
      }
      const baseY = 120;
      this._hangarDefs.forEach((def, i) => {
        const y = baseY + i * 48;
        const sel = i === this.selHangar;
        const unlocked = prof.unlockedShips.includes(def.id) || total >= def.unlockScore;
        const isCurrent = this.gameInstance && this.gameInstance.currentShip === def.id;
        const bg = sel ? 1 : 0;
        const bdr = sel ? 5 : 2;
        engine2.drawRect(70, y - 6, 500, 42, bg, true);
        engine2.drawRect(70, y - 6, 500, 42, bdr, false);
        if (sel) {
          engine2.drawPoly([[84, y + 8], [94, y + 13], [84, y + 18]], 25, true);
          engine2.drawPoly([[556, y + 8], [546, y + 13], [556, y + 18]], 25, true);
        }
        if (unlocked) {
          const previewX = 480;
          const previewY = y + 15;
          const previewScale = 0.8;
          const shipColors = {
            "DEFAULT": 18,
            "INTERCEPTOR": 30,
            "BOMBER": 23,
            "PHANTOM": 27,
            "PROTOTYPE": 39
          };
          const shipColor = shipColors[def.id] || 18;
          engine2.drawVectorShip(previewX, previewY, shipColor, previewScale, def.id);
        } else {
          engine2.drawText("LOCKED", 475, y + 14, 2, 10, { align: "center" });
        }
        const label = unlocked ? def.name : `LOCKED - ${def.unlockScore} PTS`;
        const col = !unlocked ? 2 : isCurrent ? 5 : sel ? 3 : 3;
        engine2.drawText(label, 140, y + 4, col, 13, { align: "left", shadow: sel, shadowColor: 1 });
        const badge = !unlocked ? "[LOCKED]" : isCurrent ? "[ACTIVE]" : "[UNLOCKED]";
        const bcol = !unlocked ? 2 : isCurrent ? 5 : 2;
        engine2.drawText(badge, 400, y + 4, bcol, 10, { align: "center" });
        engine2.drawText(def.desc, 140, y + 20, 25, 9, { align: "left" });
      });
      engine2.drawText("ENTER: SELECT  K/ESC: BACK", 320, 390, 25, 11, { align: "center" });
    }
    _renderOptions(engine2) {
      const ot = hud("options_title", { x: 320, y: 20, size: 28, font: "Consolas", align: "center", text: "OPTIONS" });
      engine2.drawText(ot.text || "OPTIONS", ot.x, ot.y, 25, ot.size, { align: ot.align, shadow: true, shadowColor: 1, font: ot.font });
      engine2.drawLine(220, 52, 420, 52, 2, 1.5);
      const lblMusic = hud("options_music", { text: "MUSIC" }).text || "MUSIC";
      const lblSfx = hud("options_sfx", { text: "SFX" }).text || "SFX";
      const lblBack = hud("options_back", { text: "BACK" }).text || "BACK";
      const prof = this.gameInstance ? this.gameInstance.profile : null;
      const unlocked = prof && Array.isArray(prof.unlockedPalettes) ? prof.unlockedPalettes : ["VECTOR"];
      const isPaletteEnabled = unlocked.length > 1;
      const currentPalKey = prof ? prof.selectedPalette || "VECTOR" : this._currentPalette || "VECTOR";
      const palName = PALETTE_NAMES[currentPalKey] || currentPalKey;
      const palText = isPaletteEnabled ? `PALETTE: < ${palName} >` : "PALETTE: [LOCKED - 75000 PTS]";
      const labels = [
        `${lblMusic}: ${this.musicVol * 10}%`,
        `${lblSfx}: ${this.sfxVol * 10}%`,
        palText,
        lblBack
      ];
      const baseY = 110;
      labels.forEach((txt, i) => {
        const y = baseY + i * 54;
        const sel = i === this.selOptions;
        const isLockedPalette = i === 2 && !isPaletteEnabled;
        if (sel) {
          engine2.drawRect(70, y - 6, 500, 42, 1, true);
          engine2.drawRect(70, y - 6, 500, 42, isLockedPalette ? 2 : 5, false);
          const textCol = isLockedPalette ? 2 : 3;
          engine2.drawText(labels[i], 320, y + 4, textCol, 18, { align: "center", shadow: true, shadowColor: 1 });
          if (i < 2 || i === 2 && isPaletteEnabled) {
            engine2.drawPoly([[86, y + 10], [76, y + 15], [86, y + 20]], 25, true);
            engine2.drawPoly([[554, y + 10], [564, y + 15], [554, y + 20]], 25, true);
          }
        } else {
          const textCol = isLockedPalette ? 2 : 25;
          engine2.drawText(txt, 320, y + 4, textCol, 17, { align: "center" });
        }
        if (i === 0 || i === 1) {
          const val = i === 0 ? this.musicVol : this.sfxVol;
          const barX = 390, barY = y + 8, barW = 120, barH = 10;
          engine2.drawRect(barX, barY, barW, barH, 0, true);
          engine2.drawRect(barX, barY, barW, barH, sel ? 5 : 2, false);
          if (val > 0) {
            engine2.drawRect(barX + 2, barY + 2, (barW - 4) * (val / 10), barH - 4, sel ? 5 : 2, true);
          }
        }
      });
      const of = hud("options_footer", { x: 320, y: 380, size: 14, font: "Consolas", align: "center", text: "J: Select  ARROWS: Move  ESC: Back  <-/->: Adjust" });
      engine2.drawText(of.text, of.x, of.y, 25, of.size, { align: of.align, font: of.font });
    }
    _renderRanking(engine2) {
      const rt = hud("ranking_title", { x: 320, y: 20, size: 28, font: "Consolas", align: "center", text: "RANKING" });
      engine2.drawText(rt.text || "RANKING", rt.x, rt.y, 25, rt.size, { align: rt.align, shadow: true, shadowColor: 1, font: rt.font });
      engine2.drawLine(220, 52, 420, 52, 5, 1.5);
      const drawFooter = () => {
        const rFoot12 = hud("ranking_footer", { x: 320, y: 322, size: 15, font: "Consolas", align: "center", text: "K: BACK" });
        engine2.drawText(rFoot12.text, rFoot12.x, rFoot12.y, 25, rFoot12.size, { align: rFoot12.align, font: rFoot12.font });
      };
      if (this.rankingLoading || !this._rankingFetched && this.rankingError === "") {
        const rSub = hud("ranking_sub", { x: 320, y: 180, size: 16, font: "Consolas", align: "center", text: "LOADING..." });
        engine2.drawText(rSub.text, rSub.x, rSub.y, 25, rSub.size, { align: rSub.align, font: rSub.font });
        drawFooter();
        return;
      }
      if (this.rankingError === "OFFLINE") {
        const rSub = hud("ranking_sub", { x: 320, y: 180, size: 16, font: "Consolas", align: "center", text: "OFFLINE - NO CONNECTION" });
        engine2.drawText(rSub.text, rSub.x, rSub.y, 21, rSub.size, { align: rSub.align, font: rSub.font });
        drawFooter();
        return;
      }
      if (this.rankingError === "EMPTY" || this.ranking.length === 0) {
        const rSub = hud("ranking_sub", { x: 320, y: 180, size: 16, font: "Consolas", align: "center", text: "NO SCORES YET" });
        engine2.drawText(rSub.text, rSub.x, rSub.y, 25, rSub.size, { align: rSub.align, font: rSub.font });
        drawFooter();
        return;
      }
      const tableX = 70;
      const tableY = 90;
      const tableW = 500;
      const rowH = 26;
      const headerH = 28;
      const tableH = this.ranking.length * rowH + headerH + 16;
      engine2.drawRect(tableX + 2, tableY + 2, tableW, tableH, 0, true);
      engine2.drawRect(tableX, tableY, tableW, tableH, 0, true);
      engine2.drawRect(tableX, tableY, tableW, tableH, 5, false);
      engine2.drawRect(tableX + 1, tableY + 1, tableW - 2, tableH - 2, 1, false);
      engine2.drawRect(tableX + 2, tableY + 2, tableW - 4, headerH, 1, true);
      engine2.drawLine(tableX + 2, tableY + 2 + headerH, tableX + tableW - 2, tableY + 2 + headerH, 5, 1);
      const headers = [
        { text: "RANK", x: 88, col: 25 },
        { text: "NAME", x: 150, col: 25 },
        { text: "TIME", x: 290, col: 25 },
        { text: "SCORE", x: 380, col: 25 }
      ];
      headers.forEach((h) => {
        engine2.drawText(h.text, h.x, tableY + 6, h.col, 12, { align: "left", shadow: true, shadowColor: 1 });
      });
      engine2.drawLine(142, tableY + 3, 142, tableY + headerH - 1, 1, 1);
      engine2.drawLine(280, tableY + 3, 280, tableY + headerH - 1, 1, 1);
      engine2.drawLine(370, tableY + 3, 370, tableY + headerH - 1, 1, 1);
      if (this.rankingLoading) {
        const loadingY = tableY + headerH + 20;
        engine2.drawText("LOADING...", 320, loadingY, 25, 16, { align: "center", shadow: true, shadowColor: 1 });
      } else if (this.rankingError && this.rankingError === "RANKING OFFLINE") {
        const offlineY = tableY + headerH + 20;
        engine2.drawText("RANKING OFFLINE", 320, offlineY, 21, 16, { align: "center", shadow: true, shadowColor: 1 });
      } else if (this.ranking.length === 0) {
        const emptyY = tableY + headerH + 20;
        engine2.drawText("NO SCORES YET", 320, emptyY, 25, 16, { align: "center", shadow: true, shadowColor: 1 });
      } else {
        this.ranking.forEach((r, i) => {
          const y = tableY + headerH + 4 + i * rowH;
          const isTop = i === 0;
          const isTop3 = i < 3;
          let rowCol, rowBorder, rankBadge;
          if (isTop) {
            rowCol = 25;
            rowBorder = 5;
            rankBadge = 25;
          } else if (i === 1) {
            rowCol = 25;
            rowBorder = 5;
            rankBadge = 25;
          } else if (i === 2) {
            rowCol = 25;
            rowBorder = 3;
            rankBadge = 25;
          } else {
            rowCol = 25;
            rowBorder = 1;
            rankBadge = 25;
          }
          const bgFill = i % 2 === 0 ? 0 : 1;
          engine2.drawRect(tableX + 2, y, tableW - 4, rowH - 2, bgFill, true);
          if (isTop3) {
            engine2.drawRect(tableX + 2, y, 3, rowH - 2, rowBorder, true);
          }
          const time = r.time ? ` ${String(r.time).padStart(5, "0")}` : " ---";
          const rankStr = String(r.rank).padStart(2, " ");
          engine2.drawText(rankStr, 90, y + 3, rankBadge, 13, { align: "left", shadow: isTop, shadowColor: 1 });
          engine2.drawText(r.name.padEnd(12, " "), 150, y + 3, rowCol, 13, { align: "left", shadow: isTop, shadowColor: 1 });
          engine2.drawText(time, 290, y + 3, rowCol, 13, { align: "left", shadow: isTop, shadowColor: 1 });
          engine2.drawText(String(r.score).padStart(6, "0"), 380, y + 3, rowCol, 13, { align: "left", shadow: isTop, shadowColor: 1 });
          if (isTop3) {
            const medalX = 78;
            const medalY = y + 4;
            if (isTop) {
              engine2.drawText("\u2605", medalX, medalY, 25, 14, { align: "center" });
            } else if (i === 1) {
              engine2.drawText("\u25C6", medalX, medalY, 3, 14, { align: "center" });
            } else if (i === 2) {
              engine2.drawText("\u25CF", medalX, medalY, 2, 14, { align: "center" });
            }
          }
        });
      }
      engine2.drawLine(tableX + 10, tableY + tableH - 10, tableX + tableW - 10, tableY + tableH - 10, 5, 1.5);
      const rFoot1 = hud("ranking_footer", { x: 320, y: 322, size: 15, font: "Consolas", align: "center", text: "J: BACK" });
      engine2.drawText(rFoot1.text, rFoot1.x, rFoot1.y, 25, rFoot1.size, { align: rFoot1.align, font: rFoot1.font });
      const rFoot2 = hud("ranking_footer2", { x: 320, y: 346, size: 13, font: "Consolas", align: "center", text: "" });
      engine2.drawText(rFoot2.text, rFoot2.x, rFoot2.y, 2, rFoot2.size, { align: rFoot2.align, font: rFoot2.font });
    }
    _renderCredits(engine2) {
      const ct = hud("credits_title", { x: 320, y: 20, size: 28, font: "Consolas", align: "center", text: "CREDITS" });
      engine2.drawText(ct.text || "CREDITS", ct.x, ct.y, 25, ct.size, { align: ct.align, shadow: true, shadowColor: 1, font: ct.font });
      engine2.drawLine(220, 50, 420, 50, 5, 1.5);
      engine2.drawRect(110, 80, 420, 280, 1, true);
      engine2.drawRect(110, 80, 420, 280, 2, false);
      const mt = hud("menu_title", { text: this.gameTitle });
      engine2.drawText(mt.text || this.gameTitle, 320, 96, 25, 20, { align: "center", shadow: true, shadowColor: 1 });
      const me = hud("menu_engine", { text: this.engineName });
      engine2.drawText(me.text || this.engineName, 320, 128, 2, 14, { align: "center" });
      const cVer = hud("credits_version", { x: 320, y: 150, size: 13, font: "Consolas", align: "center", text: "v1.0  \u2022  Vanilla ES6" });
      engine2.drawText(cVer.text, cVer.x, cVer.y, 5, cVer.size, { align: cVer.align, font: cVer.font });
      const cDevL = hud("credits_dev_label", { x: 320, y: 186, size: 14, font: "Consolas", align: "center", text: "DEVELOPER" });
      engine2.drawText(cDevL.text, cDevL.x, cDevL.y, 5, cDevL.size, { align: cDevL.align, font: cDevL.font });
      const cDevN = hud("credits_dev_name", { x: 320, y: 208, size: 20, font: "Consolas", align: "center", text: this.developer || "GettoDev" });
      engine2.drawText(cDevN.text, cDevN.x, cDevN.y, 3, cDevN.size, { align: cDevN.align, shadow: true, shadowColor: 1, font: cDevN.font });
      const cPubL = hud("credits_pub_label", { x: 320, y: 246, size: 14, font: "Consolas", align: "center", text: "PUBLISHER" });
      engine2.drawText(cPubL.text, cPubL.x, cPubL.y, 5, cPubL.size, { align: cPubL.align, font: cPubL.font });
      const cPubN = hud("credits_pub_name", { x: 320, y: 268, size: 15, font: "Consolas", align: "center", text: "Pocketto Ashcade Engine" });
      engine2.drawText(cPubN.text, cPubN.x, cPubN.y, 3, cPubN.size, { align: cPubN.align, font: cPubN.font });
      const cFoot = hud("credits_footer", { x: 320, y: 314, size: 15, font: "Consolas", align: "center", text: "J: BACK" });
      engine2.drawText(cFoot.text, cFoot.x, cFoot.y, 25, cFoot.size, { align: cFoot.align, font: cFoot.font });
    }
    _renderPilotName(engine2) {
      engine2.drawText("ENTER PILOT NAME", 320, 20, 25, 28, { align: "center", shadow: true, shadowColor: 1 });
      engine2.drawLine(220, 50, 420, 50, 5, 1.5);
      const boxX = 155, boxY = 180, boxW = 330, boxH = 120;
      engine2.drawRect(boxX, boxY, boxW, boxH, 0, true);
      engine2.drawRect(boxX, boxY, boxW, boxH, 25, false);
      engine2.drawText("ENTER YOUR PILOT NAME", 320, boxY + 20, 25, 16, { align: "center", shadow: true, shadowColor: 1 });
      const fieldX = 185, fieldY = boxY + 45, fieldW = 270, fieldH = 30;
      engine2.drawRect(fieldX, fieldY, fieldW, fieldH, 0, true);
      engine2.drawRect(fieldX, fieldY, fieldW, fieldH, 5, false);
      const blink = Math.floor((this.gameInstance ? this.gameInstance.animTimer : 0) * 4) % 2 === 0;
      const cursor = blink ? "_" : "";
      const displayName = this.pilotNameBuffer || cursor;
      const nameCol = this.pilotNameBuffer.length > 0 ? 25 : 2;
      engine2.drawText(displayName, 320, fieldY + 8, nameCol, 18, { align: "center", shadow: true, shadowColor: 1 });
      engine2.drawText("MAX 8 CHARACTERS - A-Z 0-9 _ -", 320, boxY + 90, 3, 11, { align: "center", font: "Consolas" });
      engine2.drawText("ENTER:CONFIRM  BACKSPACE:DELETE  ESC:CANCEL", 320, boxY + 105, 2, 12, { align: "center", font: "Consolas" });
    }
    _renderPause(engine2) {
      const pt = hud("pause_title", { x: 320, y: 130, size: 26, font: "Consolas", align: "center", text: "PAUSE" });
      engine2.drawText(pt.text || "PAUSE", pt.x, pt.y, 25, pt.size, { align: pt.align, shadow: true, shadowColor: 1, font: pt.font });
      const pResume = hud("pause_opt_resume", { text: "RESUME" }).text || "RESUME";
      const pOptions = hud("pause_opt_options", { text: "OPTIONS" }).text || "OPTIONS";
      const pQuit = hud("pause_opt_quit", { text: "QUIT TO TITLE" }).text || "QUIT TO TITLE";
      const items = [pResume, pOptions, pQuit];
      const baseY = 174;
      items.forEach((lab, i) => {
        const y = baseY + i * 50;
        const sel = i === this.selPause;
        if (sel) {
          engine2.drawRect(180, y - 6, 280, 38, 1, true);
          engine2.drawRect(180, y - 6, 280, 38, 5, false);
          engine2.drawPoly([[194, y + 8], [204, y + 13], [194, y + 18]], 25, true);
          engine2.drawPoly([[446, y + 8], [436, y + 13], [446, y + 18]], 25, true);
          engine2.drawText(lab, 320, y + 3, 3, 18, { align: "center", shadow: true, shadowColor: 1 });
        } else {
          engine2.drawText(lab, 320, y + 3, 2, 16, { align: "center" });
        }
      });
      const pf = hud("pause_footer", { x: 320, y: 360, size: 14, font: "Consolas", align: "center", text: "J: RESUME  ESC: RESUME" });
      engine2.drawText(pf.text, pf.x, pf.y, 2, pf.size, { align: pf.align, font: pf.font });
    }
  };

  // Engine/ObjectPool.js
  var ObjectPool = class {
    constructor(factory, initialSize = 10, maxSize = 100) {
      this.factory = factory;
      this.pool = [];
      this.active = /* @__PURE__ */ new Set();
      this.initialSize = initialSize;
      this.maxSize = maxSize;
      for (let i = 0; i < initialSize; i++) {
        this.pool.push(factory());
      }
    }
    acquire() {
      let obj;
      if (this.pool.length > 0) {
        obj = this.pool.pop();
      } else if (this.active.size < this.maxSize) {
        obj = this.factory();
      } else {
        const oldest = this.active.values().next().value;
        if (oldest) {
          this.active.delete(oldest);
          this.pool.push(oldest);
        }
        obj = this.factory();
      }
      this.active.add(obj);
      return obj;
    }
    release(obj) {
      if (this.active.has(obj)) {
        this.active.delete(obj);
        this.pool.push(obj);
      }
    }
    releaseAll() {
      for (const obj of this.active) {
        this.pool.push(obj);
      }
      this.active.clear();
    }
    remove(obj) {
      if (this.active.has(obj)) {
        this.active.delete(obj);
        this.pool.push(obj);
      }
    }
    getStats() {
      return {
        available: this.pool.length,
        active: this.active.size,
        total: this.pool.length + this.active.size,
        maxSize: this.maxSize
      };
    }
    clear() {
      this.pool = [];
      this.active.clear();
      for (let i = 0; i < this.initialSize; i++) {
        this.pool.push(this.factory());
      }
    }
  };
  var EnemyPool = class _EnemyPool extends ObjectPool {
    constructor(enemyDefs, initialSize = 20, maxSize = 150) {
      super(() => _EnemyPool.createEnemyTemplate(), initialSize, maxSize);
      this.enemyDefs = enemyDefs;
    }
    static createEnemyTemplate() {
      return {
        type: null,
        x: 0,
        y: 0,
        baseY: 0,
        w: 0,
        h: 0,
        hp: 0,
        maxHp: 0,
        vx: 0,
        vy: 0,
        t: 0,
        pattern: null,
        sprite: null,
        color: 0,
        score: 0,
        amp: 0,
        freq: 0,
        isCarrier: false,
        // Inicializa los parámetros de trayectoria para formaciones en cadena.
        wormRole: 0,
        wormLeader: null,
        wormPhase: "enter",
        wormFlip: false,
        FOLLOW_DELAY: 30,
        HISTORY_MAX: 600,
        pathHistory: null,
        // Marca el estado activo de la entidad dentro del sistema.
        active: false
      };
    }
    // Extrae y configura una entidad enemiga para su aparición en pantalla.
    acquire(typeKey, y, opts = {}) {
      const enemy = super.acquire();
      const def = this.enemyDefs[typeKey];
      enemy.type = typeKey;
      enemy.x = 680 + (opts.delay || 0) * 155;
      enemy.y = y;
      enemy.baseY = y;
      enemy.w = def.w;
      enemy.h = def.h;
      enemy.hp = def.hp;
      enemy.maxHp = def.hp;
      enemy.vx = def.vx + (Math.random() * 16 - 8);
      enemy.vy = def.vy || 0;
      enemy.t = opts.phase || Math.random() * 0.5;
      enemy.pattern = def.pattern;
      enemy.sprite = def.sprite;
      enemy.color = def.color;
      enemy.score = def.score;
      enemy.amp = def.amp || 0;
      enemy.freq = def.freq || 0;
      enemy.isCarrier = !!def.isCarrier;
      enemy.active = true;
      enemy.wormRole = 0;
      enemy.wormLeader = null;
      enemy.wormPhase = "enter";
      enemy.wormFlip = false;
      enemy.pathHistory = null;
      if (enemy.pattern === "zigzag") {
        enemy.vy = def.vy * (Math.random() > 0.5 ? 1 : -1);
      }
      return enemy;
    }
    // Configura los atributos requeridos para el comportamiento en formación ondulante.
    acquireInterceptorWorm(typeKey, startX, startY, wormRole, wormLeader, pathHistory) {
      const enemy = super.acquire();
      const def = this.enemyDefs[typeKey];
      enemy.type = typeKey;
      enemy.x = startX;
      enemy.y = startY;
      enemy.baseY = startY;
      enemy.w = def.w;
      enemy.h = def.h;
      enemy.hp = def.hp;
      enemy.maxHp = def.hp;
      enemy.vx = 128;
      enemy.vy = 0;
      enemy.t = 0;
      enemy.pattern = "interceptor_worm";
      enemy.sprite = def.sprite;
      enemy.color = def.color;
      enemy.score = def.score;
      enemy.amp = 0;
      enemy.freq = 0;
      enemy.isCarrier = false;
      enemy.active = true;
      enemy.wormRole = wormRole;
      enemy.wormLeader = wormLeader;
      enemy.wormPhase = "enter";
      enemy.wormFlip = false;
      enemy.FOLLOW_DELAY = 30;
      enemy.HISTORY_MAX = 600;
      enemy.pathHistory = pathHistory;
      return enemy;
    }
  };
  var ProjectilePool = class _ProjectilePool extends ObjectPool {
    constructor(initialSize = 50, maxSize = 200) {
      super(() => _ProjectilePool.createProjectileTemplate(), initialSize, maxSize);
    }
    static createProjectileTemplate() {
      return {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        w: 0,
        h: 0,
        life: 0,
        isLaser: false,
        isMissile: false,
        fromOption: false,
        color: 18,
        // Color por defecto (blanco)
        active: false
      };
    }
    // Extrae y configura un proyectil según su origen y trayectoria.
    acquire(x, y, vx, vy, opts = {}) {
      const projectile = super.acquire();
      projectile.x = x;
      projectile.y = y;
      projectile.vx = vx;
      projectile.vy = vy;
      projectile.w = opts.w || 6;
      projectile.h = opts.h || 3;
      projectile.life = opts.life || 4.5;
      projectile.isLaser = !!opts.isLaser;
      projectile.isMissile = !!opts.isMissile;
      projectile.fromOption = !!opts.fromOption;
      projectile.color = opts.color || 18;
      projectile.active = true;
      return projectile;
    }
  };
  var ParticlePool = class _ParticlePool extends ObjectPool {
    constructor(initialSize = 30, maxSize = 100) {
      super(() => _ParticlePool.createParticleTemplate(), initialSize, maxSize);
    }
    static createParticleTemplate() {
      return {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        life: 0,
        maxLife: 0.6,
        c: 0,
        active: false
      };
    }
    acquire(x, y, vx, vy, life, maxLife, color) {
      const particle = super.acquire();
      particle.x = x;
      particle.y = y;
      particle.vx = vx;
      particle.vy = vy;
      particle.life = life;
      particle.maxLife = maxLife;
      particle.c = color;
      particle.active = true;
      return particle;
    }
  };

  // Engine/PatternCommands.js
  var PatternCommand = class {
    execute(enemy, context, dt) {
      throw new Error("Execute debe ser implementado");
    }
    isComplete(enemy, context) {
      return true;
    }
  };
  var MoveLinearCommand = class extends PatternCommand {
    constructor(vx, vy, duration = null) {
      super();
      this.vx = vx;
      this.vy = vy;
      this.duration = duration;
      this.elapsed = 0;
    }
    execute(enemy, context, dt) {
      enemy.x += this.vx * dt;
      enemy.y += this.vy * dt;
      if (this.duration !== null) {
        this.elapsed += dt;
      }
    }
    isComplete() {
      return this.duration !== null && this.elapsed >= this.duration;
    }
  };
  var MoveSineCommand = class extends PatternCommand {
    constructor(amplitude, frequency, baseVx, duration = null) {
      super();
      this.amplitude = amplitude;
      this.frequency = frequency;
      this.baseVx = baseVx;
      this.duration = duration;
      this.elapsed = 0;
      this._started = false;
      this.startY = 0;
    }
    execute(enemy, context, dt) {
      if (!this._started) {
        this.startY = enemy.y;
        this._started = true;
      }
      enemy.x += this.baseVx * dt;
      enemy.y = this.startY + Math.sin(this.elapsed * this.frequency) * this.amplitude;
      this.elapsed += dt;
    }
    isComplete() {
      return this.duration !== null && this.elapsed >= this.duration;
    }
  };
  var MoveCircleCommand = class extends PatternCommand {
    constructor(radius, angularSpeed, centerX, centerY, duration = null) {
      super();
      this.radius = radius;
      this.angularSpeed = angularSpeed;
      this.centerX = centerX;
      this.centerY = centerY;
      this.duration = duration;
      this.elapsed = 0;
      this._started = false;
      this.startAngle = 0;
      this._relCenter = false;
    }
    execute(enemy, context, dt) {
      if (!this._started) {
        const dist = Math.hypot(enemy.x - this.centerX, enemy.y - this.centerY);
        if (dist > this.radius * 2.5) {
          this.centerX = enemy.x;
          this.centerY = enemy.y;
          this._relCenter = true;
        }
        this.startAngle = Math.atan2(enemy.y - this.centerY, enemy.x - this.centerX);
        this._started = true;
      }
      const angle = this.startAngle + this.elapsed * this.angularSpeed;
      enemy.x = this.centerX + Math.cos(angle) * this.radius;
      enemy.y = this.centerY + Math.sin(angle) * this.radius;
      this.elapsed += dt;
    }
    isComplete() {
      return this.duration !== null && this.elapsed >= this.duration;
    }
  };
  var MoveSpiralCommand = class extends PatternCommand {
    constructor(initialRadius, radiusGrowth, angularSpeed, centerX, centerY, duration = null) {
      super();
      this.initialRadius = initialRadius;
      this.radiusGrowth = radiusGrowth;
      this.angularSpeed = angularSpeed;
      this.centerX = centerX;
      this.centerY = centerY;
      this.duration = duration;
      this.elapsed = 0;
      this._started = false;
      this.startAngle = 0;
    }
    execute(enemy, context, dt) {
      if (!this._started) {
        const dist = Math.hypot(enemy.x - this.centerX, enemy.y - this.centerY);
        if (dist > this.initialRadius * 3) {
          this.centerX = enemy.x;
          this.centerY = enemy.y;
        }
        this.startAngle = Math.atan2(enemy.y - this.centerY, enemy.x - this.centerX);
        this._started = true;
      }
      const curR = this.initialRadius + this.elapsed * this.radiusGrowth;
      const angle = this.startAngle + this.elapsed * this.angularSpeed;
      enemy.x = this.centerX + Math.cos(angle) * curR;
      enemy.y = this.centerY + Math.sin(angle) * curR;
      this.elapsed += dt;
    }
    isComplete() {
      return this.duration !== null && this.elapsed >= this.duration;
    }
  };
  var MoveBezierCommand = class extends PatternCommand {
    constructor(controlPoints, duration) {
      super();
      this.controlPoints = controlPoints;
      this.duration = duration;
      this.elapsed = 0;
      this._started = false;
      this.startPos = { x: 0, y: 0 };
    }
    execute(enemy, context, dt) {
      if (!this._started) {
        this.startPos = { x: enemy.x, y: enemy.y };
        this._started = true;
      }
      const t = Math.min(1, this.elapsed / this.duration);
      const pos = this.calculateBezierPoint(t, this.controlPoints);
      enemy.x = this.startPos.x + pos.x;
      enemy.y = this.startPos.y + pos.y;
      this.elapsed += dt;
    }
    calculateBezierPoint(t, points) {
      if (points.length === 4) {
        const [p0, p1, p2, p3] = points;
        const mt = 1 - t, mt2 = mt * mt, mt3 = mt2 * mt, t2 = t * t, t3 = t2 * t;
        return { x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x, y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y };
      }
      if (points.length >= 2) {
        const idx = Math.floor(t * (points.length - 1));
        const nextIdx = Math.min(idx + 1, points.length - 1);
        const localT = t * (points.length - 1) - idx;
        return { x: points[idx].x + (points[nextIdx].x - points[idx].x) * localT, y: points[idx].y + (points[nextIdx].y - points[idx].y) * localT };
      }
      return { x: 0, y: 0 };
    }
    isComplete() {
      return this.elapsed >= this.duration;
    }
  };
  var WaitCommand = class extends PatternCommand {
    constructor(duration) {
      super();
      this.duration = duration;
      this.elapsed = 0;
    }
    execute(e, c, dt) {
      this.elapsed += dt;
    }
    isComplete() {
      return this.elapsed >= this.duration;
    }
  };
  var ShootCommand = class extends PatternCommand {
    constructor(direction, speed, count = 1, interval = 0.1) {
      super();
      this.direction = direction;
      this.speed = speed;
      this.count = count;
      this.interval = interval;
      this.fired = 0;
      this.lastFire = 0;
    }
    execute(enemy, context, dt) {
      this.lastFire += dt;
      if (this.fired < this.count && this.lastFire >= this.interval) {
        context.spawnProjectile(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, this.direction.x * this.speed, this.direction.y * this.speed);
        this.fired++;
        this.lastFire = 0;
      }
    }
    isComplete() {
      return this.fired >= this.count;
    }
  };
  var ChangeDirectionCommand = class extends PatternCommand {
    constructor(angleDegrees) {
      super();
      this.angleRadians = angleDegrees * (Math.PI / 180);
      this.executed = false;
    }
    execute(enemy, c, dt) {
      if (!this.executed) {
        const s = Math.hypot(enemy.vx, enemy.vy) || 120;
        enemy.vx = Math.cos(this.angleRadians) * s;
        enemy.vy = Math.sin(this.angleRadians) * s;
        this.executed = true;
      }
    }
    isComplete() {
      return this.executed;
    }
  };
  var PursueTargetCommand = class extends PatternCommand {
    constructor(speed, turnRate, duration) {
      super();
      this.speed = speed;
      this.turnRate = turnRate;
      this.duration = duration;
      this.elapsed = 0;
    }
    execute(enemy, context, dt) {
      const target = context.getTargetPosition();
      const dx = target.x - enemy.x, dy = target.y - enemy.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 1) {
        const desiredAngle = Math.atan2(dy, dx);
        const curAngle = Math.atan2(enemy.vy || -1, enemy.vx || -1);
        const diff = this.normalizeAngle(desiredAngle - curAngle);
        const maxTurn = this.turnRate * dt;
        const newAngle = curAngle + Math.max(-maxTurn, Math.min(maxTurn, diff));
        enemy.vx = Math.cos(newAngle) * this.speed;
        enemy.vy = Math.sin(newAngle) * this.speed;
      }
      enemy.x += enemy.vx * dt;
      enemy.y += enemy.vy * dt;
      this.elapsed += dt;
    }
    normalizeAngle(a) {
      while (a > Math.PI) {
        a -= 2 * Math.PI;
      }
      while (a < -Math.PI) {
        a += 2 * Math.PI;
      }
      return a;
    }
    isComplete() {
      return this.duration !== null && this.elapsed >= this.duration;
    }
  };
  var FanAttackCommand = class extends PatternCommand {
    constructor(centerAngle, spreadAngle, bulletCount, bulletSpeed, interval) {
      super();
      this.centerAngle = centerAngle * (Math.PI / 180);
      this.spreadAngle = spreadAngle * (Math.PI / 180);
      this.bulletCount = bulletCount;
      this.bulletSpeed = bulletSpeed;
      this.interval = interval;
      this.fired = 0;
      this.lastFire = 0;
    }
    execute(enemy, context, dt) {
      this.lastFire += dt;
      if (this.fired < this.bulletCount && this.lastFire >= this.interval) {
        const t = this.fired / (this.bulletCount - 1 || 1);
        const angle = this.centerAngle + (t - 0.5) * this.spreadAngle;
        context.spawnProjectile(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, Math.cos(angle) * this.bulletSpeed, Math.sin(angle) * this.bulletSpeed);
        this.fired++;
        this.lastFire = 0;
      }
    }
    isComplete() {
      return this.fired >= this.bulletCount;
    }
  };
  var EntranceBezierCommand = class extends PatternCommand {
    // Entrada suave desde la derecha con curva Bézier hacia posición de combate
    constructor(targetY, curveDepth, duration) {
      super();
      this.targetY = targetY;
      this.curveDepth = curveDepth;
      this.duration = duration;
      this.elapsed = 0;
      this._started = false;
      this.startPos = { x: 0, y: 0 };
    }
    execute(enemy, context, dt) {
      if (!this._started) {
        this.startPos = { x: enemy.x, y: enemy.y };
        this._started = true;
      }
      const t = Math.min(1, this.elapsed / this.duration);
      const p0 = this.startPos;
      const p1 = { x: this.startPos.x - this.curveDepth, y: this.startPos.y };
      const p2 = { x: 400, y: this.targetY };
      const p3 = { x: 350, y: this.targetY };
      const mt = 1 - t, mt2 = mt * mt, mt3 = mt2 * mt, t2 = t * t, t3 = t2 * t;
      enemy.x = mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
      enemy.y = mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;
      this.elapsed += dt;
    }
    isComplete() {
      return this.elapsed >= this.duration;
    }
  };
  var RetreatBezierCommand = class extends PatternCommand {
    // Retirada suave hacia la derecha con curva Bézier
    constructor(exitY, curveHeight, duration) {
      super();
      this.exitY = exitY;
      this.curveHeight = curveHeight;
      this.duration = duration;
      this.elapsed = 0;
      this._started = false;
      this.startPos = { x: 0, y: 0 };
    }
    execute(enemy, context, dt) {
      if (!this._started) {
        this.startPos = { x: enemy.x, y: enemy.y };
        this._started = true;
      }
      const t = Math.min(1, this.elapsed / this.duration);
      const p0 = this.startPos;
      const p1 = { x: this.startPos.x - 50, y: this.startPos.y };
      const p2 = { x: 500, y: this.exitY + this.curveHeight };
      const p3 = { x: 700, y: this.exitY };
      const mt = 1 - t, mt2 = mt * mt, mt3 = mt2 * mt, t2 = t * t, t3 = t2 * t;
      enemy.x = mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
      enemy.y = mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;
      this.elapsed += dt;
    }
    isComplete() {
      return this.elapsed >= this.duration;
    }
  };
  var LoopDeLoopCommand = class extends PatternCommand {
    // Patrón de bucle clásico de Gradius: entrada -> bucle -> salida
    constructor(loopRadius, loopSpeed, duration) {
      super();
      this.loopRadius = loopRadius;
      this.loopSpeed = loopSpeed;
      this.duration = duration;
      this.elapsed = 0;
      this._started = false;
      this.centerX = 0;
      this.centerY = 0;
      this.startAngle = 0;
    }
    execute(enemy, context, dt) {
      if (!this._started) {
        this.centerX = enemy.x - this.loopRadius;
        this.centerY = enemy.y;
        this.startAngle = Math.PI;
        this._started = true;
      }
      enemy.x -= 80 * dt;
      const angle = this.startAngle + this.elapsed * this.loopSpeed;
      const loopX = Math.cos(angle) * this.loopRadius;
      const loopY = Math.sin(angle) * this.loopRadius;
      enemy.y = this.centerY + loopY;
      this.elapsed += dt;
    }
    isComplete() {
      return this.elapsed >= this.duration;
    }
  };
  var BezierPresets = {
    // Patrón de entrada suave desde arriba
    swoopFromTop: [
      { x: 700, y: -50 },
      // Start (fuera de pantalla arriba)
      { x: 500, y: 100 },
      // Control 1
      { x: 400, y: 200 },
      // Control 2
      { x: 300, y: 240 }
      // End (posición de combate)
    ],
    // Patrón de entrada suave desde abajo
    swoopFromBottom: [
      { x: 700, y: 530 },
      // Start (fuera de pantalla abajo)
      { x: 500, y: 380 },
      // Control 1
      { x: 400, y: 280 },
      // Control 2
      { x: 300, y: 240 }
      // End (posición de combate)
    ],
    // Patrón de entrada en Z (zigzag horizontal)
    zigzagEntry: [
      { x: 700, y: 240 },
      // Start
      { x: 550, y: 150 },
      // Control 1 (arriba)
      { x: 450, y: 330 },
      // Control 2 (abajo)
      { x: 300, y: 240 }
      // End (centro)
    ],
    // Patrón de retirada en S
    sCurveRetreat: [
      { x: 300, y: 240 },
      // Start
      { x: 400, y: 150 },
      // Control 1
      { x: 500, y: 330 },
      // Control 2
      { x: 700, y: 240 }
      // End (fuera de pantalla)
    ],
    // Patrón de bucle de Gradius
    gradiusLoop: [
      { x: 700, y: 240 },
      // Start
      { x: 500, y: 100 },
      // Control 1 (arriba del bucle)
      { x: 300, y: 380 },
      // Control 2 (abajo del bucle)
      { x: 100, y: 240 }
      // End (completar el bucle)
    ],
    // Patrón de espiral de entrada
    spiralEntry: [
      { x: 700, y: 240 },
      // Start
      { x: 600, y: 180 },
      // Control 1
      { x: 500, y: 300 },
      // Control 2
      { x: 400, y: 240 },
      // Control 3
      { x: 350, y: 200 },
      // Control 4
      { x: 300, y: 240 }
      // End
    ]
  };
  function createBezierFromPreset(presetName, duration = 2) {
    const points = BezierPresets[presetName];
    if (!points) {
      console.warn(`Bezier preset not found: ${presetName}`);
      return new MoveBezierCommand([{ x: 0, y: 0 }], duration);
    }
    return new MoveBezierCommand(points, duration);
  }
  var PatternInterpreter = class {
    constructor() {
      this.commands = [];
      this.currentCommand = 0;
      this.context = null;
    }
    loadCommands(cmds) {
      this.commands = cmds;
      this.currentCommand = 0;
    }
    setContext(ctx) {
      this.context = ctx;
    }
    execute(enemy, dt) {
      if (this.currentCommand >= this.commands.length) {
        return false;
      }
      const cmd = this.commands[this.currentCommand];
      cmd.execute(enemy, this.context, dt);
      if (cmd.isComplete(enemy, this.context)) {
        this.currentCommand++;
      }
      return true;
    }
    reset() {
      this.currentCommand = 0;
      for (const c of this.commands) {
        if (c.elapsed !== void 0) {
          c.elapsed = 0;
        }
        if (c.executed !== void 0) {
          c.executed = false;
        }
        if (c.fired !== void 0) {
          c.fired = 0;
          c.lastFire = 0;
        }
        if (c._started !== void 0) {
          c._started = false;
        }
        if (c.segment !== void 0) {
          c.segment = 0;
          c.segmentProgress = 0;
        }
      }
    }
    isComplete() {
      return this.currentCommand >= this.commands.length;
    }
  };
  var PatternFactory = class {
    static createSinePattern(a, f, vx, d) {
      return [new MoveSineCommand(a, f, vx, d)];
    }
    static createCirclePattern(r, av, cx, cy, d) {
      return [new MoveCircleCommand(r, av, cx, cy, d)];
    }
    static createSpiralPattern(ir, rg, av, cx, cy, d) {
      return [new MoveSpiralCommand(ir, rg, av, cx, cy, d)];
    }
    static createBezierPattern(pts, d) {
      return [new MoveBezierCommand(pts, d)];
    }
    static createAttackPattern(vx, vy, iv, bc) {
      return [new MoveLinearCommand(vx, vy, null), new ShootCommand({ x: -1, y: 0 }, 400, bc, iv)];
    }
    static createComplexPattern() {
      return [new MoveLinearCommand(-150, 0, 1), new WaitCommand(0.5), new ChangeDirectionCommand(-45), new MoveLinearCommand(-120, 0, 1.5), new ShootCommand({ x: -1, y: 0.3 }, 350, 3, 0.15), new ChangeDirectionCommand(45), new MoveLinearCommand(-100, 0, 2)];
    }
    static createInterceptorPattern() {
      return [
        new MoveLinearCommand(-190, 0, 0.9),
        new PursueTargetCommand(170, 2.2, 0.9),
        new WaitCommand(0.15),
        new FanAttackCommand(180, 55, 3, 340, 0.13),
        new MoveLinearCommand(-140, 0, 0.6),
        new ShootCommand({ x: -1, y: 0 }, 420, 2, 0.14),
        new MoveLinearCommand(-260, 0, 1.1)
      ];
    }
    static createInterceptorSquadronPattern() {
      return [
        new MoveLinearCommand(-170, 0, 0.7),
        new WaitCommand(0.25),
        new ShootCommand({ x: -1, y: 0 }, 360, 2, 0.16),
        new MoveLinearCommand(-150, 0, 0.6),
        new FanAttackCommand(180, 70, 3, 360, 0.12),
        new MoveLinearCommand(-220, 0, 1)
      ];
    }
    // Patrones mejorados de entrada/retirada
    static createEntrancePattern(targetY, curveDepth, duration) {
      return [new EntranceBezierCommand(targetY, curveDepth, duration)];
    }
    static createRetreatPattern(exitY, curveHeight, duration) {
      return [new RetreatBezierCommand(exitY, curveHeight, duration)];
    }
    static createLoopPattern(loopRadius, loopSpeed, duration) {
      return [new LoopDeLoopCommand(loopRadius, loopSpeed, duration)];
    }
    // Patrones usando presets de Bézier
    static createSwoopFromTop(duration = 2) {
      return [createBezierFromPreset("swoopFromTop", duration)];
    }
    static createSwoopFromBottom(duration = 2) {
      return [createBezierFromPreset("swoopFromBottom", duration)];
    }
    static createZigzagEntry(duration = 2.5) {
      return [createBezierFromPreset("zigzagEntry", duration)];
    }
    static createGradiusLoop(duration = 3) {
      return [createBezierFromPreset("gradiusLoop", duration)];
    }
    static createSpiralEntry(duration = 2.5) {
      return [createBezierFromPreset("spiralEntry", duration)];
    }
    // Patrón completo de entrada-combate-retirada
    static createFullCombatPattern(targetY, combatDuration = 2) {
      return [
        new EntranceBezierCommand(targetY, 150, 1.5),
        new WaitCommand(combatDuration),
        new RetreatBezierCommand(targetY, 100, 1.5)
      ];
    }
  };

  // Engine/GameMath.js
  var Vector2D = class _Vector2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    // Crear desde ángulo y magnitud
    static fromAngle(angle, magnitude = 1) {
      return new _Vector2D(
        Math.cos(angle) * magnitude,
        Math.sin(angle) * magnitude
      );
    }
    // Retorna la suma de este vector con otro.
    add(v) {
      return new _Vector2D(this.x + v.x, this.y + v.y);
    }
    // Retorna la resta entre este vector y otro.
    subtract(v) {
      return new _Vector2D(this.x - v.x, this.y - v.y);
    }
    // Retorna el vector multiplicado por un valor escalar.
    multiply(scalar) {
      return new _Vector2D(this.x * scalar, this.y * scalar);
    }
    // Retorna el vector dividido por un valor escalar.
    divide(scalar) {
      return new _Vector2D(this.x / scalar, this.y / scalar);
    }
    // Producto punto
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    // Producto cruz (2D retorna escalar z)
    cross(v) {
      return this.x * v.y - this.y * v.x;
    }
    // Magnitud (longitud)
    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    // Magnitud al cuadrado (más eficiente para comparaciones)
    magnitudeSquared() {
      return this.x * this.x + this.y * this.y;
    }
    // Normalizar (vector unitario)
    normalize() {
      const mag = this.magnitude();
      if (mag === 0) {
        return new _Vector2D(0, 0);
      }
      return this.divide(mag);
    }
    // Calcula la distancia euclidiana hacia otro punto o vector.
    distanceTo(v) {
      return this.subtract(v).magnitude();
    }
    // Ángulo en radianes
    angle() {
      return Math.atan2(this.y, this.x);
    }
    // Ángulo en grados
    angleDegrees() {
      return this.angle() * (180 / Math.PI);
    }
    // Rotar vector
    rotate(angleRadians) {
      const cos = Math.cos(angleRadians);
      const sin = Math.sin(angleRadians);
      return new _Vector2D(
        this.x * cos - this.y * sin,
        this.x * sin + this.y * cos
      );
    }
    // Escalar a una magnitud específica
    scaleTo(magnitude) {
      return this.normalize().multiply(magnitude);
    }
    // Lerp hacia otro vector
    lerp(v, t) {
      return new _Vector2D(
        this.x + (v.x - this.x) * t,
        this.y + (v.y - this.y) * t
      );
    }
    // Retorna una copia independiente de la instancia vectorial.
    clone() {
      return new _Vector2D(this.x, this.y);
    }
    // Convertir a string
    toString() {
      return `Vector2D(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  };
  function vFormation(count, spread, depth) {
    const points = [];
    if (count <= 0) {
      return points;
    }
    points.push(new Vector2D(0, 0));
    for (let i = 1; i < count; i++) {
      const pair = Math.ceil(i / 2);
      const side = i % 2 === 1 ? 1 : -1;
      points.push(new Vector2D(pair * depth, side * pair * spread));
    }
    return points;
  }
  function circleFormation(count, radius) {
    const points = [];
    for (let i = 0; i < count; i++) {
      const angle = i / count * Math.PI * 2;
      points.push(new Vector2D(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius
      ));
    }
    return points;
  }

  // Engine/LevelTimeline.js
  var LevelTimeline = class {
    constructor(timelineEvents) {
      this.events = timelineEvents || [];
      this.currentTime = 0;
      this.eventIndex = 0;
      this.activeSquads = /* @__PURE__ */ new Map();
      this.squadIdCounter = 0;
      this.isPaused = false;
      this.pendingSpawns = [];
    }
    // Avanza el timeline y ejecuta eventos cuando corresponde
    update(dt, spawnSystem) {
      if (this.isPaused) {
        return;
      }
      this.currentTime += dt;
      while (this.eventIndex < this.events.length && this.events[this.eventIndex].time <= this.currentTime) {
        const event = this.events[this.eventIndex];
        this.executeEvent(event, spawnSystem);
        this.eventIndex++;
      }
      this.processPendingSpawns(dt, spawnSystem);
      this.cleanupCompletedSquads();
    }
    // Procesa spawns programados usando dt en lugar de setTimeout
    processPendingSpawns(dt, spawnSystem) {
      const now = this.currentTime;
      let i = 0;
      while (i < this.pendingSpawns.length) {
        const spawn = this.pendingSpawns[i];
        if (spawn.time <= now) {
          spawn.fn(spawnSystem);
          this.pendingSpawns.splice(i, 1);
        } else {
          i++;
        }
      }
    }
    // Programa un spawn para un tiempo futuro relativo al timeline
    scheduleSpawn(delayMs, fn) {
      const spawnTime = this.currentTime + delayMs / 1e3;
      this.pendingSpawns.push({ time: spawnTime, fn });
    }
    // Ejecuta un evento individual del timeline
    executeEvent(event, spawnSystem) {
      const squadId = this.generateSquadId();
      const tracker = new WaveTracker(
        squadId,
        event.count || 1,
        (position) => this.onSquadComplete(squadId, position, spawnSystem)
      );
      this.activeSquads.set(squadId, tracker);
      switch (event.pattern) {
        case "gradius_v_rush":
          this.spawnGradiusVRush(event, spawnSystem, squadId);
          break;
        case "rtype_wave_column":
          this.spawnRTypeColumn(event, spawnSystem, squadId);
          break;
        case "heavy_escort":
          this.spawnHeavyEscort(event, spawnSystem, squadId);
          break;
        case "circle_formation":
          this.spawnCircleFormation(event, spawnSystem, squadId);
          break;
        case "sine_wave":
          this.spawnSineWave(event, spawnSystem, squadId);
          break;
        case "interceptor_squadron":
          this.spawnInterceptorSquadron(event, spawnSystem, squadId);
          break;
        case "bomber_train":
          this.spawnBomberTrain(event, spawnSystem, squadId);
          break;
        case "carrier_wave":
          this.spawnCarrierWave(event, spawnSystem, squadId);
          break;
        case "hunter_wave":
          this.spawnHunterWave(event, spawnSystem, squadId);
          break;
        case "kamikaze_swarm":
          this.spawnKamikazeSwarm(event, spawnSystem, squadId);
          break;
        case "spiral_formation":
          this.spawnSpiralFormation(event, spawnSystem, squadId);
          break;
        case "mothership_solo":
          this.spawnMothershipSolo(event, spawnSystem, squadId);
          break;
        case "heavy_wave":
          this.spawnHeavyWave(event, spawnSystem, squadId);
          break;
        case "wall_row":
          this.spawnWallRow(event, spawnSystem, squadId);
          break;
        case "boss_entry":
          this.spawnBossEntry(event, spawnSystem, squadId);
          break;
        case "boss_phase1":
        case "boss_phase2":
        case "boss_phase3":
        case "boss_final":
          this.spawnBossPhase(event, spawnSystem, squadId);
          break;
        case "boss_adds":
          this.spawnBossAdds(event, spawnSystem, squadId);
          break;
        default:
          console.warn(`Unknown pattern: ${event.pattern}`);
      }
    }
    // Genera un ID único para el squad
    generateSquadId() {
      return `squad_${this.squadIdCounter++}_${Date.now()}`;
    }
    // Callback cuando un squad es completamente eliminado
    onSquadComplete(squadId, position, spawnSystem) {
      if (spawnSystem && spawnSystem.spawnPowerup) {
        spawnSystem.spawnPowerup(position.x, position.y);
      }
      this.activeSquads.delete(squadId);
    }
    // Limpia squads completados
    cleanupCompletedSquads() {
      for (const [squadId, tracker] of this.activeSquads) {
        if (tracker.aliveCount === 0) {
          this.activeSquads.delete(squadId);
        }
      }
    }
    // Notifica que un enemigo fue destruido
    onEnemyDestroyed(enemy) {
      if (enemy.squadId && this.activeSquads.has(enemy.squadId)) {
        const tracker = this.activeSquads.get(enemy.squadId);
        tracker.onEnemyDestroyed(enemy);
      }
    }
    // Reinicia el timeline
    reset() {
      this.currentTime = 0;
      this.eventIndex = 0;
      this.activeSquads.clear();
      this.squadIdCounter = 0;
      this.isPaused = false;
      this.pendingSpawns = [];
    }
    // Pausa/reanuda el timeline
    pause() {
      this.isPaused = true;
    }
    resume() {
      this.isPaused = false;
    }
    isFinished() {
      return this.eventIndex >= this.events.length && this.pendingSpawns.length === 0 && this.activeSquads.size === 0;
    }
    getProgress() {
      if (!this.events.length) {
        return 1;
      }
      return Math.min(1, this.eventIndex / this.events.length);
    }
    // ── Patrones de Spawning Específicos ─────────────────────────────────────
    spawnGradiusVRush(event, spawnSystem, squadId) {
      const { startY, count = 5, intervalMs = 250, enemyType = "SCOUT" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const y = startY + i * 30;
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, y, {
            squadId,
            pattern: "straight",
            vx: 180
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnRTypeColumn(event, spawnSystem, squadId) {
      const { startY, count = 4, intervalMs = 400, enemyType = "DART" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const y = startY + i * 25;
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, y, {
            squadId,
            pattern: "sine",
            vx: 120,
            amp: 40,
            freq: 2
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnHeavyEscort(event, spawnSystem, squadId) {
      const { startY, enemyType = "CRUISER" } = event;
      const enemy = spawnSystem.spawnEnemy(enemyType, 680, startY, {
        squadId,
        pattern: "straight",
        vx: 60
      });
      if (enemy) {
        enemy.squadId = squadId;
      }
    }
    spawnCircleFormation(event, spawnSystem, squadId) {
      const { startY, count = 6, radius = 60, enemyType = "DRONE" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * 100;
        const angle = i / count * Math.PI * 2;
        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;
        this.scheduleSpawn(delay, () => {
          const enemy = spawnSystem.spawnEnemy(enemyType, 680 + offsetX, startY + offsetY, {
            squadId,
            pattern: "circle",
            centerX: 680,
            centerY: startY,
            radius,
            speed: 100
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnSineWave(event, spawnSystem, squadId) {
      const { startY, count = 8, intervalMs = 200, enemyType = "WAVE" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const y = startY + Math.sin(i * 0.5) * 50;
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, y, {
            squadId,
            pattern: "sine",
            vx: 90,
            amp: 35,
            freq: 2.5
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnInterceptorSquadron(event, spawnSystem, squadId) {
      const { startY, count = 4, enemyType = "INTERCEPTOR" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * 150;
        this.scheduleSpawn(delay, () => {
          const y = startY + (i * 40 - count * 20);
          const enemy = spawnSystem.spawnEnemy(enemyType, 680 + i * 50, y, {
            squadId,
            pattern: "interceptor_advanced",
            vx: 110
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    // FASE 3: New spawn methods
    spawnBomberTrain(event, spawnSystem, squadId) {
      const { startY, count = 3, intervalMs = 800, enemyType = "BOMBER" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const y = startY + i * 30;
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, y, {
            squadId,
            pattern: "sine",
            vx: 70,
            amp: 24,
            freq: 1.6
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnCarrierWave(event, spawnSystem, squadId) {
      const { startY, count = 2, intervalMs = 2e3, enemyType = "CARRIER" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, startY, {
            squadId,
            pattern: "sine",
            vx: 82,
            amp: 24,
            freq: 2.4
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnHunterWave(event, spawnSystem, squadId) {
      const { startY, count = 4, intervalMs = 400, enemyType = "HUNTER" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const y = startY + i * 25;
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, y, {
            squadId,
            pattern: "hunter",
            vx: 105
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnKamikazeSwarm(event, spawnSystem, squadId) {
      const { startY, count = 8, intervalMs = 100, enemyType = "KAMIKAZE" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const y = startY + (i * 20 - count * 10);
          const enemy = spawnSystem.spawnEnemy(enemyType, 680 + i * 30, y, {
            squadId,
            pattern: "straight",
            vx: 200
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnSpiralFormation(event, spawnSystem, squadId) {
      const { startY, count = 10, radius = 70, enemyType = "WAVE" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * 80;
        const angle = i / count * Math.PI * 2 * 2;
        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;
        this.scheduleSpawn(delay, () => {
          const enemy = spawnSystem.spawnEnemy(enemyType, 680 + offsetX, startY + offsetY, {
            squadId,
            pattern: "circle",
            centerX: 680,
            centerY: startY,
            radius: radius - i * 3,
            speed: 80
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnMothershipSolo(event, spawnSystem, squadId) {
      const { startY, enemyType = "MOTHERSHIP" } = event;
      const enemy = spawnSystem.spawnEnemy(enemyType, 680, startY, {
        squadId,
        pattern: "sine",
        vx: 35,
        amp: 32,
        freq: 1.1
      });
      if (enemy) {
        enemy.squadId = squadId;
      }
    }
    spawnHeavyWave(event, spawnSystem, squadId) {
      const { startY, count = 2, intervalMs = 1e3, enemyType = "HEAVY" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, startY, {
            squadId,
            pattern: "zigzag",
            vx: 52,
            vy: 60
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnWallRow(event, spawnSystem, squadId) {
      const { startY, count = 6, intervalMs = 150, enemyType = "DRONE" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, startY, {
            squadId,
            pattern: "straight",
            vx: 110
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
    spawnBossEntry(event, spawnSystem, squadId) {
      const { startY, enemyType = "BOSS_VOID_CORE" } = event;
      const enemy = spawnSystem.spawnEnemy(enemyType, 680, startY, {
        squadId,
        pattern: "boss_entry",
        vx: 50
      });
      if (enemy) {
        enemy.squadId = squadId;
        enemy.isBoss = true;
      }
    }
    spawnBossPhase(event, spawnSystem, squadId) {
      const { startY, enemyType = "BOSS_VOID_CORE" } = event;
      const existingBoss = this.gameContext?.enemies?.find((e) => e.isBoss);
      if (existingBoss) {
        existingBoss.phase = event.pattern;
        existingBoss.patternTimer = 0;
      } else {
        const enemy = spawnSystem.spawnEnemy(enemyType, 520, startY, {
          squadId,
          pattern: event.pattern,
          vx: 0
        });
        if (enemy) {
          enemy.squadId = squadId;
          enemy.isBoss = true;
        }
      }
    }
    spawnBossAdds(event, spawnSystem, squadId) {
      const { startY, count = 6, intervalMs = 300, enemyType = "KAMIKAZE" } = event;
      for (let i = 0; i < count; i++) {
        const delay = i * intervalMs;
        this.scheduleSpawn(delay, () => {
          const y = startY + i * 30;
          const enemy = spawnSystem.spawnEnemy(enemyType, 680, y, {
            squadId,
            pattern: "straight",
            vx: 180
          });
          if (enemy) {
            enemy.squadId = squadId;
          }
        });
      }
    }
  };
  var WaveTracker = class {
    constructor(id, totalCount, onCompleteAll) {
      this.id = id;
      this.aliveCount = totalCount;
      this.totalCount = totalCount;
      this.onCompleteAll = onCompleteAll;
      this.lastDestroyedPosition = null;
    }
    onEnemyDestroyed(enemyInstance) {
      this.aliveCount--;
      this.lastDestroyedPosition = {
        x: enemyInstance.x + enemyInstance.w / 2,
        y: enemyInstance.y + enemyInstance.h / 2
      };
      if (this.aliveCount === 0) {
        this.onCompleteAll(this.lastDestroyedPosition);
      }
    }
    isComplete() {
      return this.aliveCount === 0;
    }
  };
  var LEVEL_1_TIMELINE = [
    // 0:00 - Opening popcorn sweep
    { time: 1.5, pattern: "gradius_v_rush", startY: 100, count: 5, intervalMs: 250, enemyType: "SCOUT" },
    { time: 5, pattern: "gradius_v_rush", startY: 380, count: 5, intervalMs: 250, enemyType: "SCOUT" },
    // 0:08 - Column wall
    { time: 9, pattern: "rtype_wave_column", startY: 200, count: 4, intervalMs: 400, enemyType: "DART" },
    // 0:14 - First heavy
    { time: 14, pattern: "heavy_escort", startY: 240, count: 1, enemyType: "CRUISER" },
    // 0:18 - Circle swarm
    { time: 18, pattern: "circle_formation", startY: 240, count: 6, radius: 50, enemyType: "DRONE" },
    // 0:22 - Sine wave curtain
    { time: 22, pattern: "sine_wave", startY: 240, count: 8, intervalMs: 200, enemyType: "WAVE" },
    // 0:28 - Interceptor hunt
    { time: 28, pattern: "interceptor_squadron", startY: 240, count: 4, enemyType: "INTERCEPTOR" },
    // 0:33 - Mixed pincer
    { time: 33, pattern: "gradius_v_rush", startY: 150, count: 3, intervalMs: 300, enemyType: "DART" },
    { time: 34.5, pattern: "gradius_v_rush", startY: 330, count: 3, intervalMs: 300, enemyType: "DRONE" },
    // 0:40 - Double heavy
    { time: 40, pattern: "heavy_escort", startY: 200, count: 1, enemyType: "HEAVY" },
    { time: 42, pattern: "heavy_escort", startY: 280, count: 1, enemyType: "HEAVY" },
    // 0:48 - Splitter swarm
    { time: 48, pattern: "circle_formation", startY: 240, count: 8, radius: 60, enemyType: "SPLITTER" },
    // 0:55 - Kamikaze dive
    { time: 55, pattern: "gradius_v_rush", startY: 120, count: 6, intervalMs: 180, enemyType: "KAMIKAZE" },
    { time: 57, pattern: "gradius_v_rush", startY: 360, count: 6, intervalMs: 180, enemyType: "KAMIKAZE" },
    // 1:02 - Shielder column
    { time: 62, pattern: "rtype_wave_column", startY: 200, count: 5, intervalMs: 350, enemyType: "SHIELDER" },
    // 1:10 - Cruiser duo
    { time: 70, pattern: "heavy_escort", startY: 180, count: 1, enemyType: "CRUISER" },
    { time: 72, pattern: "heavy_escort", startY: 300, count: 1, enemyType: "CRUISER" },
    // 1:18 - Wave curtain
    { time: 78, pattern: "sine_wave", startY: 240, count: 10, intervalMs: 180, enemyType: "WAVE" },
    // 1:25 - Mixed assault
    { time: 85, pattern: "interceptor_squadron", startY: 160, count: 4, enemyType: "INTERCEPTOR" },
    { time: 87, pattern: "gradius_v_rush", startY: 320, count: 4, intervalMs: 250, enemyType: "SCOUT" },
    // 1:33 - Carrier escort
    { time: 93, pattern: "carrier_wave", startY: 240, count: 2, intervalMs: 2e3, enemyType: "CARRIER" },
    // 1:40 - Stalker hunters
    { time: 100, pattern: "interceptor_squadron", startY: 240, count: 4, enemyType: "STALKER" },
    // 1:48 - Double heavy + drone screen
    { time: 108, pattern: "heavy_escort", startY: 200, count: 1, enemyType: "HEAVY" },
    { time: 108.5, pattern: "gradius_v_rush", startY: 350, count: 4, intervalMs: 200, enemyType: "DRONE" },
    { time: 110, pattern: "heavy_escort", startY: 280, count: 1, enemyType: "HEAVY" }
  ];
  var LEVEL_2_TIMELINE = [
    // 0:00 - Fast scouts
    { time: 1, pattern: "gradius_v_rush", startY: 80, count: 4, intervalMs: 200, enemyType: "SCOUT" },
    { time: 2.5, pattern: "gradius_v_rush", startY: 400, count: 4, intervalMs: 200, enemyType: "SCOUT" },
    // 0:05 - Bomber train
    { time: 5, pattern: "bomber_train", startY: 200, count: 3, intervalMs: 800, enemyType: "BOMBER" },
    { time: 8, pattern: "bomber_train", startY: 280, count: 3, intervalMs: 800, enemyType: "BOMBER" },
    // 0:12 - Cruiser duo
    { time: 12, pattern: "heavy_escort", startY: 160, count: 1, enemyType: "CRUISER" },
    { time: 13.5, pattern: "heavy_escort", startY: 320, count: 1, enemyType: "CRUISER" },
    // 0:16 - Stalker squadron
    { time: 16, pattern: "interceptor_squadron", startY: 240, count: 4, enemyType: "STALKER" },
    // 0:20 - Splitter circle
    { time: 20, pattern: "circle_formation", startY: 240, count: 8, radius: 55, enemyType: "SPLITTER" },
    // 0:25 - Shielder columns
    { time: 25, pattern: "rtype_wave_column", startY: 180, count: 5, intervalMs: 350, enemyType: "SHIELDER" },
    { time: 28, pattern: "rtype_wave_column", startY: 300, count: 5, intervalMs: 350, enemyType: "SHIELDER" },
    // 0:32 - Kamikaze storm
    { time: 32, pattern: "gradius_v_rush", startY: 120, count: 6, intervalMs: 180, enemyType: "KAMIKAZE" },
    { time: 34, pattern: "gradius_v_rush", startY: 360, count: 6, intervalMs: 180, enemyType: "KAMIKAZE" },
    // 0:38 - Carrier wave
    { time: 38, pattern: "carrier_wave", startY: 240, count: 2, intervalMs: 2e3, enemyType: "CARRIER" },
    // 0:42 - Mothership duo
    { time: 42, pattern: "heavy_escort", startY: 200, count: 1, enemyType: "MOTHERSHIP" },
    { time: 44, pattern: "heavy_escort", startY: 280, count: 1, enemyType: "MOTHERSHIP" },
    // 0:48 - Heavy wall
    { time: 48, pattern: "heavy_wave", startY: 240, count: 2, intervalMs: 1e3, enemyType: "HEAVY" },
    // 0:55 - Hunter sweep
    { time: 55, pattern: "hunter_wave", startY: 150, count: 5, intervalMs: 350, enemyType: "HUNTER" },
    { time: 57, pattern: "hunter_wave", startY: 330, count: 5, intervalMs: 350, enemyType: "HUNTER" },
    // 1:04 - Bomber + Drone mix
    { time: 64, pattern: "bomber_train", startY: 200, count: 3, intervalMs: 600, enemyType: "BOMBER" },
    { time: 65, pattern: "gradius_v_rush", startY: 350, count: 4, intervalMs: 250, enemyType: "DRONE" },
    // 1:12 - Stalker + Interceptor pincer
    { time: 72, pattern: "interceptor_squadron", startY: 160, count: 4, enemyType: "STALKER" },
    { time: 74, pattern: "interceptor_squadron", startY: 320, count: 4, enemyType: "INTERCEPTOR" },
    // 1:20 - Sine wave heavy
    { time: 80, pattern: "sine_wave", startY: 240, count: 10, intervalMs: 180, enemyType: "WAVE" },
    // 1:28 - Triple cruiser
    { time: 88, pattern: "heavy_escort", startY: 160, count: 1, enemyType: "CRUISER" },
    { time: 90, pattern: "heavy_escort", startY: 240, count: 1, enemyType: "CRUISER" },
    { time: 92, pattern: "heavy_escort", startY: 320, count: 1, enemyType: "CRUISER" },
    // 1:36 - Kamikaze swarm
    { time: 96, pattern: "kamikaze_swarm", startY: 240, count: 12, intervalMs: 100, enemyType: "KAMIKAZE" },
    // 1:44 - Shielder + Splitter mix
    { time: 104, pattern: "rtype_wave_column", startY: 200, count: 4, intervalMs: 300, enemyType: "SHIELDER" },
    { time: 106, pattern: "circle_formation", startY: 300, count: 6, radius: 45, enemyType: "SPLITTER" },
    // 1:52 - Final heavy assault
    { time: 112, pattern: "heavy_escort", startY: 180, count: 1, enemyType: "MOTHERSHIP" },
    { time: 112.5, pattern: "gradius_v_rush", startY: 350, count: 5, intervalMs: 200, enemyType: "KAMIKAZE" },
    { time: 114, pattern: "heavy_escort", startY: 300, count: 1, enemyType: "HEAVY" }
  ];
  var LEVEL_3_TIMELINE = [
    // 0:00 - Fortress entrance wall
    { time: 1, pattern: "wall_row", startY: 240, count: 6, intervalMs: 150, enemyType: "DRONE" },
    // 0:05 - Hunter/Interceptor corridor
    { time: 5, pattern: "hunter_wave", startY: 150, count: 4, intervalMs: 400, enemyType: "HUNTER" },
    { time: 7, pattern: "interceptor_squadron", startY: 330, count: 4, enemyType: "INTERCEPTOR" },
    { time: 9, pattern: "hunter_wave", startY: 330, count: 4, intervalMs: 400, enemyType: "HUNTER" },
    { time: 11, pattern: "interceptor_squadron", startY: 150, count: 4, enemyType: "INTERCEPTOR" },
    // 0:14 - Spiral WAVE
    { time: 14, pattern: "spiral_formation", startY: 240, count: 10, radius: 70, enemyType: "WAVE" },
    // 0:18 - Bomber formation
    { time: 18, pattern: "bomber_train", startY: 200, count: 4, intervalMs: 600, enemyType: "BOMBER" },
    { time: 22, pattern: "bomber_train", startY: 280, count: 4, intervalMs: 600, enemyType: "BOMBER" },
    // 0:26 - Cruiser + Splitter escort
    { time: 26, pattern: "heavy_escort", startY: 180, count: 1, enemyType: "CRUISER" },
    { time: 27, pattern: "gradius_v_rush", startY: 160, count: 4, intervalMs: 300, enemyType: "SPLITTER" },
    { time: 28, pattern: "heavy_escort", startY: 300, count: 1, enemyType: "CRUISER" },
    { time: 29, pattern: "gradius_v_rush", startY: 320, count: 4, intervalMs: 300, enemyType: "SPLITTER" },
    // 0:32 - Kamikaze swarm
    { time: 32, pattern: "kamikaze_swarm", startY: 240, count: 12, intervalMs: 100, enemyType: "KAMIKAZE" },
    // 0:36 - Mothership duo
    { time: 36, pattern: "mothership_solo", startY: 200, count: 1, enemyType: "MOTHERSHIP" },
    { time: 37.5, pattern: "mothership_solo", startY: 280, count: 1, enemyType: "MOTHERSHIP" },
    // 0:42 - Mixed gauntlet
    { time: 42, pattern: "gradius_v_rush", startY: 100, count: 3, intervalMs: 200, enemyType: "DART" },
    { time: 42.5, pattern: "gradius_v_rush", startY: 380, count: 3, intervalMs: 200, enemyType: "DART" },
    { time: 44, pattern: "rtype_wave_column", startY: 180, count: 4, intervalMs: 300, enemyType: "WAVE" },
    { time: 45.5, pattern: "rtype_wave_column", startY: 300, count: 4, intervalMs: 300, enemyType: "WAVE" },
    // 0:47 - Stalker hunt
    { time: 47, pattern: "interceptor_squadron", startY: 240, count: 6, enemyType: "STALKER" },
    // 0:54 - Pre-boss elites
    { time: 54, pattern: "heavy_escort", startY: 160, count: 1, enemyType: "HEAVY" },
    { time: 55, pattern: "heavy_escort", startY: 320, count: 1, enemyType: "HEAVY" },
    { time: 56, pattern: "carrier_wave", startY: 240, count: 3, intervalMs: 1500, enemyType: "CARRIER" },
    // 1:02 - Shielder wall
    { time: 62, pattern: "rtype_wave_column", startY: 200, count: 6, intervalMs: 300, enemyType: "SHIELDER" },
    { time: 64, pattern: "rtype_wave_column", startY: 300, count: 6, intervalMs: 300, enemyType: "SHIELDER" },
    // 1:10 - Double cruiser + kamikaze screen
    { time: 70, pattern: "heavy_escort", startY: 180, count: 1, enemyType: "CRUISER" },
    { time: 70.5, pattern: "gradius_v_rush", startY: 350, count: 5, intervalMs: 150, enemyType: "KAMIKAZE" },
    { time: 72, pattern: "heavy_escort", startY: 300, count: 1, enemyType: "CRUISER" },
    // 1:18 - Hunter + Interceptor crossfire
    { time: 78, pattern: "hunter_wave", startY: 120, count: 5, intervalMs: 350, enemyType: "HUNTER" },
    { time: 80, pattern: "interceptor_squadron", startY: 360, count: 5, enemyType: "INTERCEPTOR" },
    // 1:26 - Bomber mothership combo
    { time: 86, pattern: "heavy_escort", startY: 200, count: 1, enemyType: "MOTHERSHIP" },
    { time: 87, pattern: "bomber_train", startY: 300, count: 3, intervalMs: 500, enemyType: "BOMBER" },
    // 1:34 - Spiral splitter
    { time: 94, pattern: "circle_formation", startY: 240, count: 10, radius: 65, enemyType: "SPLITTER" },
    // 1:42 - Final heavy wall
    { time: 102, pattern: "heavy_wave", startY: 200, count: 3, intervalMs: 800, enemyType: "HEAVY" },
    { time: 104, pattern: "heavy_wave", startY: 300, count: 3, intervalMs: 800, enemyType: "HEAVY" },
    // 1:50 - Everything at once
    { time: 110, pattern: "gradius_v_rush", startY: 100, count: 4, intervalMs: 200, enemyType: "KAMIKAZE" },
    { time: 110.5, pattern: "gradius_v_rush", startY: 240, count: 4, intervalMs: 200, enemyType: "SCOUT" },
    { time: 111, pattern: "gradius_v_rush", startY: 380, count: 4, intervalMs: 200, enemyType: "KAMIKAZE" },
    { time: 113, pattern: "heavy_escort", startY: 240, count: 1, enemyType: "MOTHERSHIP" }
  ];

  // Engine/EnemySpawnSystem.js
  var SpawnPattern = class {
    constructor(name, config) {
      this.name = name;
      this.config = config;
      this.enemyTypes = config.enemyTypes || [];
      this.count = config.count || 1;
      this.interval = config.interval || 0;
      this.formation = config.formation || "column";
      this.patternCommands = config.patternCommands || null;
      this.behavior = config.behavior || "default";
      this.spawnOffset = config.spawnOffset || { x: 0, y: 0 };
    }
    // Genera offsets locales centrados - para SHMUP horizontal:
    //  column = stack vertical (mismo X, Y separado) -> ataque frontal Gradius
    //  line   = fila horizontal (X separado, mismo Y) -> fila que entra
    //  v      = V abierta hacia atrás (típica Gradius)
    //  echelon= diagonal
    //  circle = círculo (para rodear)
    generateSpawnPositions(originX, originY) {
      const positions = [];
      switch (this.formation) {
        case "column": {
          const spacing = this.config.spacingY || 44;
          const totalH = (this.count - 1) * spacing;
          for (let i = 0; i < this.count; i++) {
            positions.push({ x: originX, y: originY - totalH / 2 + i * spacing });
          }
          break;
        }
        case "line": {
          const spacing = this.config.spacingX || 64;
          for (let i = 0; i < this.count; i++) {
            positions.push({ x: originX + i * spacing, y: originY });
          }
          break;
        }
        case "v": {
          const spread = this.config.spread || 36;
          const depth = this.config.depth || 48;
          const pts = vFormation(this.count, spread, depth);
          for (const p of pts) {
            positions.push({ x: originX + p.x, y: originY + p.y });
          }
          break;
        }
        case "echelon": {
          const dx = this.config.spacingX || 48;
          const dy = this.config.spacingY || 36;
          for (let i = 0; i < this.count; i++) {
            positions.push({ x: originX + i * dx, y: originY + i * dy });
          }
          break;
        }
        case "wave_column": {
          const spacing = 40;
          const totalH = (this.count - 1) * spacing;
          for (let i = 0; i < this.count; i++) {
            const y = originY - totalH / 2 + i * spacing;
            const phase = i / this.count * Math.PI * 2;
            positions.push({ x: originX + Math.sin(phase) * 12, y });
          }
          break;
        }
        case "circle": {
          const pts = circleFormation(this.count, this.config.radius || 70);
          for (const p of pts) {
            positions.push({ x: originX + p.x, y: originY + p.y });
          }
          break;
        }
        case "single":
        default:
          positions.push({ x: originX, y: originY });
          break;
      }
      return positions;
    }
  };
  var EnemySpawnSystem = class {
    constructor(enemyDefs, gameContext) {
      this.enemyDefs = enemyDefs;
      this.gameContext = gameContext;
      this.enemyPool = new EnemyPool(enemyDefs, 30, 200);
      this.projectilePool = new ProjectilePool(60, 300);
      this.particlePool = new ParticlePool(40, 150);
      this.waves = [];
      this.waveIndex = 0;
      this.patterns = /* @__PURE__ */ new Map();
      this.registerDefaultPatterns();
      this.patternContext = {
        spawnProjectile: (x, y, vx, vy) => this.spawnEnemyProjectile(x, y, vx, vy),
        getTargetPosition: () => ({ x: this.gameContext.ship.x, y: this.gameContext.ship.y }),
        getGapAtX: (x) => this.gameContext.getGapAtX(x)
      };
      this.timeline = null;
      this.useTimeline = false;
      this.pendingFormations = [];
    }
    // Carril Y aleatorio dentro del gap usando padding dinámico por tamaño de nave
    _randomLaneY(gapPadding = 22, enemyH = 22) {
      const gap = this.gameContext.getGapAtX(680);
      const minY = gap.top + gapPadding;
      const maxY = gap.bottom - enemyH - gapPadding;
      if (maxY <= minY) {
        return (gap.top + gap.bottom - enemyH) / 2;
      }
      const r = Math.random();
      let t;
      if (r < 0.25) {
        t = Math.random() * 0.32;
      } else if (r < 0.75) {
        t = 0.34 + Math.random() * 0.32;
      } else {
        t = 0.68 + Math.random() * 0.32;
      }
      return minY + t * (maxY - minY);
    }
    registerDefaultPatterns() {
      this.registerPattern("gradius_v_rush", {
        enemyTypes: ["SCOUT"],
        count: 5,
        interval: 0.09,
        formation: "v",
        spread: 36,
        depth: 52,
        behavior: "straight"
      });
      this.registerPattern("rtype_wave_column", {
        enemyTypes: ["WAVE"],
        count: 4,
        interval: 0.09,
        formation: "column",
        spacingY: 64,
        behavior: "sine"
      });
      this.registerPattern("dart_echelon", {
        enemyTypes: ["DART"],
        count: 4,
        interval: 0.11,
        formation: "echelon",
        spacingX: 56,
        spacingY: 38,
        behavior: "zigzag"
      });
      this.registerPattern("wall_row", {
        enemyTypes: ["DRONE"],
        count: 4,
        interval: 0.08,
        formation: "column",
        spacingY: 48,
        behavior: "straight"
      });
      this.registerPattern("hunter_pair", {
        enemyTypes: ["HUNTER"],
        count: 3,
        interval: 0.14,
        formation: "column",
        spacingY: 60,
        behavior: "hunter"
      });
      this.registerPattern("heavy_escort", {
        enemyTypes: ["CRUISER", "DART", "DART"],
        count: 3,
        interval: 0.18,
        formation: "v",
        spread: 44,
        depth: 64,
        behavior: "straight"
      });
      this.registerPattern("bomber_train", {
        enemyTypes: ["BOMBER"],
        count: 2,
        interval: 0.32,
        formation: "line",
        spacingX: 100,
        behavior: "sine"
      });
      this.registerPattern("basic_line", { enemyTypes: ["SCOUT", "DART"], count: 5, interval: 0.09, formation: "v", spread: 36, depth: 52, behavior: "straight" });
      this.registerPattern("sine_wave", { enemyTypes: ["WAVE"], count: 4, interval: 0.1, formation: "column", spacingY: 64, behavior: "sine" });
      this.registerPattern("v_formation", { enemyTypes: ["DRONE", "INTERCEPTOR"], count: 5, interval: 0.09, formation: "v", spread: 36, depth: 52, behavior: "straight" });
      this.registerPattern("heavy_wave", { enemyTypes: ["HEAVY", "CRUISER"], count: 2, interval: 0.22, formation: "v", spread: 48, depth: 68, behavior: "straight" });
      this.registerPattern("carrier_wave", { enemyTypes: ["CARRIER"], count: 1, interval: 0, formation: "single", behavior: "sine" });
      this.registerPattern("hunter_wave", { enemyTypes: ["HUNTER"], count: 3, interval: 0.14, formation: "column", spacingY: 60, behavior: "hunter" });
      this.registerPattern("interceptor_advanced", { enemyTypes: ["INTERCEPTOR"], count: 1, interval: 0, formation: "single", behavior: "interceptor_advanced" });
      this.registerPattern("interceptor_squadron", { enemyTypes: ["INTERCEPTOR"], count: 3, interval: 0.16, formation: "echelon", spacingX: 58, spacingY: 42, behavior: "interceptor_advanced" });
      this.registerPattern("scout_column", { enemyTypes: ["SCOUT"], count: 4, interval: 0.08, formation: "column", spacingY: 46, behavior: "zigzag" });
      this.registerPattern("mothership_solo", { enemyTypes: ["MOTHERSHIP"], count: 1, interval: 0, formation: "single", behavior: "sine" });
      this.registerPattern("stalker_squadron", {
        enemyTypes: ["STALKER"],
        count: 3,
        interval: 0.18,
        formation: "echelon",
        spacingX: 60,
        spacingY: 45,
        behavior: "hunter"
      });
      this.registerPattern("splitter_wave", {
        enemyTypes: ["SPLITTER"],
        count: 4,
        interval: 0.12,
        formation: "column",
        spacingY: 55,
        behavior: "sine"
      });
      this.registerPattern("shielder_column", {
        enemyTypes: ["SHIELDER"],
        count: 3,
        interval: 0.15,
        formation: "column",
        spacingY: 70,
        behavior: "straight"
      });
      this.registerPattern("kamikaze_swarm", {
        enemyTypes: ["KAMIKAZE"],
        count: 8,
        interval: 0.06,
        formation: "v",
        spread: 40,
        depth: 30,
        behavior: "straight"
      });
      this.registerPattern("spiral_formation", {
        enemyTypes: ["WAVE"],
        count: 8,
        interval: 0.1,
        formation: "circle",
        radius: 70,
        behavior: "circle"
      });
      this.registerPattern("mothership_solo", { enemyTypes: ["MOTHERSHIP"], count: 1, interval: 0, formation: "single", behavior: "sine" });
      this.registerPattern("heavy_wave", { enemyTypes: ["HEAVY", "CRUISER"], count: 2, interval: 0.22, formation: "v", spread: 48, depth: 68, behavior: "straight" });
    }
    registerPattern(name, config) {
      this.patterns.set(name, new SpawnPattern(name, config));
    }
    getPattern(name) {
      return this.patterns.get(name);
    }
    scheduleWave(patternName, delay = 0) {
      const pattern = this.getPattern(patternName);
      if (!pattern) {
        console.warn(`Pattern ${patternName} not found`);
        return;
      }
      const types = pattern.config.enemyTypes || [];
      const maxH = types.reduce((m, t) => {
        const def = this.enemyDefs[t];
        return def ? Math.max(m, def.h) : m;
      }, 22);
      this.waves.push({ pattern, delay, timer: delay, spawned: 0, originY: this._randomLaneY(22, maxH), completed: false });
    }
    // Evita Y superpuesto en spawn contra enemigos existentes (grid anti-overlap en X cercano)
    _resolveSpawnOverlap(x, y, w, h) {
      const enemies = this.gameContext.enemies;
      const gap = this.gameContext.getGapAtX(x);
      const minY = gap.top + 4;
      const maxY = gap.bottom - h - 4;
      let yy = Math.max(minY, Math.min(maxY, y));
      const PAD = 6;
      for (let attempt = 0; attempt < 10; attempt++) {
        let collides = false;
        for (const e of enemies) {
          if (Math.abs(e.x - x) > 90) {
            continue;
          }
          const sepY = (h + e.h) / 2 + PAD;
          if (Math.abs(e.y + e.h / 2 - (yy + h / 2)) < sepY) {
            collides = true;
            break;
          }
        }
        if (!collides) {
          break;
        }
        const step = h + PAD + 4;
        const dir = attempt % 2 === 0 ? 1 : -1;
        const mag = Math.ceil((attempt + 1) / 2) * step * dir;
        yy = y + mag;
        if (yy < minY) {
          yy = minY + (attempt + 1) * 4;
        }
        if (yy > maxY) {
          yy = maxY - (attempt + 1) * 4;
        }
        yy = Math.max(minY, Math.min(maxY, yy));
      }
      return Math.max(minY, Math.min(maxY, yy));
    }
    createBasicEnemy(typeKey, x, y, opts = {}) {
      const def = this.enemyDefs[typeKey];
      const gap = this.gameContext.getGapAtX(x);
      const resolvedY = this._resolveSpawnOverlap(x, y, def.w, def.h);
      const clampedY = Math.max(gap.top + 4, Math.min(gap.bottom - def.h - 4, resolvedY));
      const e = {
        type: typeKey,
        x,
        y: clampedY,
        baseY: clampedY,
        w: def.w,
        h: def.h,
        hp: def.hp,
        maxHp: def.hp,
        vx: def.vx + (Math.random() * 10 - 5),
        vy: def.vy || 0,
        t: opts.phaseOffset !== void 0 ? opts.phaseOffset : Math.random() * 0.6,
        pattern: def.pattern,
        sprite: def.sprite,
        color: def.color,
        score: def.score,
        amp: def.amp || 0,
        freq: def.freq || 0,
        isCarrier: !!def.isCarrier,
        wormRole: 0,
        wormLeader: null,
        wormPhase: "enter",
        wormFlip: false,
        FOLLOW_DELAY: 30,
        HISTORY_MAX: 600,
        pathHistory: null,
        patternInterpreter: null,
        shootCooldown: 1 + Math.random() * 0.8,
        hunterOffset: 0
      };
      if (e.pattern === "zigzag") {
        const dir = opts.waveSpawnIndex !== void 0 ? opts.waveSpawnIndex % 2 === 0 ? 1 : -1 : Math.random() > 0.5 ? 1 : -1;
        e.vy = (def.vy || 75) * dir;
      }
      if (e.pattern === "hunter" && opts.hunterOffset !== void 0) {
        e.hunterOffset = opts.hunterOffset;
      }
      return e;
    }
    spawnEnemy(typeKey, x, y, opts = {}) {
      const gap = this.gameContext.getGapAtX(x);
      const def = this.enemyDefs[typeKey];
      const clampedY = Math.max(gap.top + 4, Math.min(gap.bottom - def.h - 4, y));
      const enemy = this.enemyPool.acquire(typeKey, clampedY, opts);
      enemy.x = x;
      if (def.isBoss || def.isMiniboss) {
        enemy._damageCooldown = 0;
      }
      if (opts.patternCommands && opts.useInterpreter) {
        enemy.patternInterpreter = new PatternInterpreter();
        enemy.patternInterpreter.loadCommands(opts.patternCommands);
        enemy.patternInterpreter.setContext(this.patternContext);
      }
      this.gameContext.enemies.push(enemy);
      return enemy;
    }
    spawnProjectile(x, y, vx, vy, opts = {}) {
      const p = this.projectilePool.acquire(x, y, vx, vy, opts);
      this.gameContext.bullets.push(p);
      return p;
    }
    // proyectil enemigo separado (no se mezcla con balas del jugador para colisión limpia)
    spawnEnemyProjectile(x, y, vx, vy) {
      if (!this.gameContext.enemyBullets) {
        this.gameContext.enemyBullets = [];
      }
      const arr = this.gameContext.enemyBullets;
      const p = { x, y, vx, vy, w: 6, h: 4, life: 4, isEnemy: true };
      arr.push(p);
      return p;
    }
    spawnParticle(x, y, vx, vy, life, maxLife, color) {
      const p = this.particlePool.acquire(x, y, vx, vy, life, maxLife, color);
      this.gameContext.particles.push(p);
      return p;
    }
    spawnFormation(patternName, originX, originY) {
      const pattern = this.getPattern(patternName);
      if (!pattern) {
        return;
      }
      const positions = pattern.generateSpawnPositions(originX, originY);
      positions.forEach((pos, i) => {
        const typeKey = pattern.enemyTypes[i % pattern.enemyTypes.length];
        const delay = i * (pattern.interval || 0.12);
        this.pendingFormations.push({ time: delay, typeKey, x: pos.x, y: pos.y });
      });
    }
    spawnBezierEnemy(typeKey, startX, startY, controlPoints, duration) {
      const enemy = this.spawnEnemy(typeKey, startX, startY);
      const bezierCmd = PatternFactory.createBezierPattern(controlPoints, duration);
      enemy.patternInterpreter = new PatternInterpreter();
      enemy.patternInterpreter.loadCommands(bezierCmd);
      enemy.patternInterpreter.setContext(this.patternContext);
      return enemy;
    }
    spawnCircularEnemy(typeKey, centerX, centerY, radius, angularSpeed, duration) {
      const startPos = { x: centerX + Math.cos(0) * radius, y: centerY + Math.sin(0) * radius };
      const enemy = this.spawnEnemy(typeKey, startPos.x, startPos.y);
      const circleCmd = PatternFactory.createCirclePattern(radius, angularSpeed, centerX, centerY, duration);
      enemy.patternInterpreter = new PatternInterpreter();
      enemy.patternInterpreter.loadCommands(circleCmd);
      enemy.patternInterpreter.setContext(this.patternContext);
      return enemy;
    }
    spawnSpiralEnemy(typeKey, centerX, centerY, initialRadius, radiusGrowth, angularSpeed, duration) {
      const startPos = { x: centerX + Math.cos(0) * initialRadius, y: centerY + Math.sin(0) * initialRadius };
      const enemy = this.spawnEnemy(typeKey, startPos.x, startPos.y);
      const spiralCmd = PatternFactory.createSpiralPattern(initialRadius, radiusGrowth, angularSpeed, centerX, centerY, duration);
      enemy.patternInterpreter = new PatternInterpreter();
      enemy.patternInterpreter.loadCommands(spiralCmd);
      enemy.patternInterpreter.setContext(this.patternContext);
      return enemy;
    }
    update(dt) {
      if (this.useTimeline && this.timeline) {
        this.timeline.update(dt, this);
      } else {
        this.updateProcedural(dt);
      }
      this.processPendingFormations(dt);
      for (const enemy of this.gameContext.enemies) {
        if (enemy.patternInterpreter && !enemy.patternInterpreter.isComplete()) {
          enemy.patternInterpreter.execute(enemy, dt);
          const gap = this.gameContext.getGapAtX(enemy.x + enemy.w / 2);
          const minY = gap.top + 2, maxY = gap.bottom - enemy.h - 2;
          if (enemy.y < minY) {
            enemy.y = minY;
          }
          if (enemy.y > maxY) {
            enemy.y = maxY;
          }
        }
      }
    }
    processPendingFormations(dt) {
      let i = 0;
      while (i < this.pendingFormations.length) {
        const formation = this.pendingFormations[i];
        formation.time -= dt;
        if (formation.time <= 0) {
          this.spawnEnemy(formation.typeKey, formation.x, formation.y);
          this.pendingFormations.splice(i, 1);
        } else {
          i++;
        }
      }
    }
    updateProcedural(dt) {
      for (let i = this.waves.length - 1; i >= 0; i--) {
        const wave = this.waves[i];
        if (wave.completed) {
          this.waves.splice(i, 1);
          continue;
        }
        wave.timer -= dt;
        if (wave.timer <= 0 && wave.spawned < wave.pattern.count) {
          const pattern = wave.pattern;
          if (pattern.behavior === "interceptor_advanced") {
            const typeKey2 = pattern.enemyTypes[wave.spawned % pattern.enemyTypes.length];
            const positions2 = pattern.generateSpawnPositions(680, wave.originY);
            const pos2 = positions2[wave.spawned % positions2.length];
            const advCmds = pattern.count === 1 ? PatternFactory.createInterceptorPattern() : PatternFactory.createInterceptorSquadronPattern();
            const enemy2 = this.createBasicEnemy(typeKey2, pos2.x, pos2.y);
            enemy2.patternInterpreter = new PatternInterpreter();
            enemy2.patternInterpreter.loadCommands(advCmds);
            enemy2.patternInterpreter.setContext(this.patternContext);
            this.gameContext.enemies.push(enemy2);
            wave.spawned++;
            wave.timer = pattern.interval || 0.12;
            if (wave.spawned >= pattern.count) {
              wave.completed = true;
            }
            continue;
          }
          const positions = pattern.generateSpawnPositions(680, wave.originY);
          const pos = positions[wave.spawned];
          const typeKey = pattern.enemyTypes[wave.spawned % pattern.enemyTypes.length];
          const phaseOffset = pattern.behavior === "sine" ? wave.spawned * 0.85 : void 0;
          const waveSpawnIndex = wave.spawned;
          const hunterOffsets = pattern.behavior === "hunter" ? [-22, 0, 22] : null;
          const hunterOffset = hunterOffsets ? hunterOffsets[wave.spawned % hunterOffsets.length] : 0;
          const enemy = this.createBasicEnemy(typeKey, pos.x, pos.y, { phaseOffset, waveSpawnIndex, hunterOffset });
          if (pattern.behavior && pattern.behavior !== "default") {
            if (["straight", "sine", "hunter", "zigzag"].includes(pattern.behavior)) {
              enemy.pattern = pattern.behavior;
              if (enemy.pattern === "zigzag" && !enemy.vy) {
                enemy.vy = 70 * (waveSpawnIndex % 2 === 0 ? 1 : -1);
              }
              if (enemy.pattern === "sine") {
                enemy.t = phaseOffset + Math.random() * 0.25;
              }
              if (enemy.pattern === "hunter") {
                enemy.hunterOffset = hunterOffset;
              }
            }
          }
          this.gameContext.enemies.push(enemy);
          wave.spawned++;
          wave.timer = pattern.interval;
          if (wave.spawned >= pattern.count) {
            wave.completed = true;
          }
        }
      }
    }
    // ── Timeline System Integration ─────────────────────────────────────────────
    loadTimeline(timelineEvents) {
      this.timeline = new LevelTimeline(timelineEvents);
      this.useTimeline = true;
    }
    enableTimeline() {
      this.useTimeline = true;
    }
    disableTimeline() {
      this.useTimeline = false;
    }
    setTimeline(timeline) {
      this.timeline = timeline;
    }
    isTimelineFinished() {
      return this.timeline && typeof this.timeline.isFinished === "function" && this.timeline.isFinished();
    }
    getTimelineProgress() {
      if (!this.timeline) {
        return 0;
      }
      return typeof this.timeline.getProgress === "function" ? this.timeline.getProgress() : 0;
    }
    // Método para spawn de powerups (recompensa de squads)
    spawnPowerup(x, y) {
      if (!this.gameContext.capsules) {
        this.gameContext.capsules = [];
      }
      const capsule = {
        x,
        y,
        vx: -80,
        vy: 0,
        w: 16,
        h: 16,
        type: "powerup"
      };
      this.gameContext.capsules.push(capsule);
    }
    // Notificar destrucción de enemigo al timeline
    onEnemyDestroyed(enemy) {
      if (this.timeline) {
        this.timeline.onEnemyDestroyed(enemy);
      }
    }
    reset() {
      this.enemyPool.releaseAll();
      this.projectilePool.releaseAll();
      this.particlePool.releaseAll();
      this.waves = [];
      this.waveIndex = 0;
      this.pendingFormations = [];
      if (this.timeline) {
        this.timeline.reset();
      }
    }
    getPoolStats() {
      return { enemies: this.enemyPool.getStats(), projectiles: this.projectilePool.getStats(), particles: this.particlePool.getStats() };
    }
    releaseEnemy(e) {
      this.enemyPool.release(e);
    }
    releaseProjectile(p) {
      this.projectilePool.release(p);
    }
    releaseParticle(p) {
      this.particlePool.release(p);
    }
  };
  var ProceduralWaveGenerator = class {
    constructor(spawnSystem) {
      this.spawnSystem = spawnSystem;
      this.difficulty = 1;
      this.waveCount = 0;
      this.cooldown = 0;
    }
    // Secuencia inicial estructurada para introducir las mecánicas progresivamente.
    _pickPattern() {
      this.waveCount++;
      this.difficulty = 1 + this.waveCount * 0.06;
      if (this.waveCount % 9 === 0) {
        return "carrier_wave";
      }
      if (this.waveCount <= 12) {
        const seq = [
          "gradius_v_rush",
          // 1
          "rtype_wave_column",
          // 2
          "dart_echelon",
          // 3
          "gradius_v_rush",
          // 4
          "wall_row",
          // 5
          "interceptor_advanced",
          // 6
          "rtype_wave_column",
          // 7
          "hunter_pair",
          // 8
          "carrier_wave",
          // 9
          "bomber_train",
          // 10
          "interceptor_squadron",
          // 11
          "heavy_escort"
          // 12
        ];
        return seq[this.waveCount - 1];
      }
      const r = Math.random();
      if (r < 0.22) {
        return "gradius_v_rush";
      }
      if (r < 0.38) {
        return "rtype_wave_column";
      }
      if (r < 0.52) {
        return "dart_echelon";
      }
      if (r < 0.64) {
        return "wall_row";
      }
      if (r < 0.74) {
        return "hunter_pair";
      }
      if (r < 0.84) {
        return "bomber_train";
      }
      if (r < 0.91) {
        return "heavy_escort";
      }
      if (r < 0.96) {
        return "interceptor_advanced";
      }
      return "interceptor_squadron";
    }
    generateWave() {
      const name = this._pickPattern();
      const pat = this.spawnSystem.getPattern(name);
      if (!pat) {
        return name;
      }
      const delay = Math.max(0.9, 1.55 - this.difficulty * 0.08) + Math.random() * 0.35;
      this.spawnSystem.scheduleWave(name, 0.15);
      this.cooldown = delay;
      return name;
    }
    shouldGenerateWave() {
      return this.cooldown <= 0;
    }
    tick(dt) {
      if (this.cooldown > 0) {
        this.cooldown -= dt;
      }
    }
    reset() {
      this.difficulty = 1;
      this.waveCount = 0;
      this.cooldown = 0;
    }
  };

  // Main.js
  console.log("PALUGO VERSION: numero 8");
  var LEVEL_TIMELINES = [LEVEL_1_TIMELINE, LEVEL_2_TIMELINE, LEVEL_3_TIMELINE];
  function getRankingApiBase() {
    const host = typeof window !== "undefined" && window.location && window.location.hostname ? window.location.hostname : "";
    const isLocal = host === "localhost" || host === "127.0.0.1" || host === "";
    return typeof window !== "undefined" && window.RANKING_API_BASE ? window.RANKING_API_BASE : isLocal ? "" : "https://piesfrescos.alwaysdata.net/";
  }
  function getRankingSaveUrl() {
    return getRankingApiBase() + "nullpointer_guardar.php";
  }
  var HUD = HudConfig;
  function hud2(key, fallback) {
    return HUD && HUD[key] ? HUD[key] : fallback;
  }
  var ENEMY_DEFS = {
    SCOUT: { w: 36, h: 20, hp: 5, score: 80, vx: 140, color: 22, pattern: "zigzag", vy: 75 },
    DART: { w: 30, h: 18, hp: 5, score: 90, vx: 155, color: 25, pattern: "zigzag", vy: 90 },
    DRONE: { w: 40, h: 22, hp: 6, score: 100, vx: 110, color: 21, pattern: "straight" },
    INTERCEPTOR: { w: 46, h: 24, hp: 7, score: 150, vx: 120, color: 30, pattern: "hunter" },
    HUNTER: { w: 48, h: 22, hp: 7, score: 150, vx: 105, color: 20, pattern: "hunter" },
    WAVE: { w: 44, h: 26, hp: 8, score: 200, vx: 78, color: 28, pattern: "sine", amp: 36, freq: 2.4 },
    BOMBER: { w: 68, h: 32, hp: 10, score: 220, vx: 70, color: 23, pattern: "sine", amp: 24, freq: 1.6 },
    CRUISER: { w: 80, h: 30, hp: 14, score: 320, vx: 58, color: 4, pattern: "straight" },
    HEAVY: { w: 72, h: 36, hp: 16, score: 380, vx: 52, color: 19, pattern: "zigzag", vy: 60 },
    MOTHERSHIP: { w: 98, h: 42, hp: 24, score: 850, vx: 35, color: 31, pattern: "sine", amp: 32, freq: 1.1 },
    CARRIER: { w: 34, h: 22, hp: 6, score: 500, vx: 82, color: 3, pattern: "sine", amp: 24, freq: 2.4, isCarrier: true },
    MINIBOSS: { w: 170, h: 170, hp: 1800, score: 6e3, vx: 0, color: 26, pattern: "miniboss", isMiniboss: true },
    // FASE 3: New enemy types
    STALKER: { w: 48, h: 26, hp: 10, score: 400, vx: 100, color: 27, pattern: "hunter", vy: 80 },
    SPLITTER: { w: 38, h: 22, hp: 8, score: 250, vx: 90, color: 6, pattern: "sine", amp: 30, freq: 2 },
    SHIELDER: { w: 56, h: 28, hp: 14, score: 450, vx: 65, color: 4, pattern: "straight", shield: 3 },
    KAMIKAZE: { w: 28, h: 20, hp: 3, score: 180, vx: 200, color: 21, pattern: "straight" },
    // Bosses
    BOSS_VOID_CORE: { w: 180, h: 180, hp: 1e3, score: 25e3, vx: 0, color: 27, pattern: "boss_void_core", isBoss: true, isMiniboss: false },
    BOSS_BOMBER_PRIME: { w: 200, h: 160, hp: 1100, score: 35e3, vx: 0, color: 23, pattern: "boss_bomber_prime", isBoss: true, isMiniboss: false },
    BOSS_FORTRESS_CORE: { w: 220, h: 200, hp: 1200, score: 5e4, vx: 0, color: 26, pattern: "boss_fortress_core", isBoss: true, isMiniboss: false }
  };
  var MINIBOSS_SPECS = [
    { id: "octo_planet", name: "OCTO-PLANET", w: 200, h: 200, hp: 150, score: 6e3, color: 26 },
    { id: "cyclops_egg", name: "CYCLOPS-EGG", w: 190, h: 200, hp: 160, score: 8e3, color: 7 },
    { id: "neon_slime", name: "NEON-SLIME", w: 200, h: 190, hp: 130, score: 1e4, color: 6 },
    { id: "saw_spinner", name: "SAW-SPINNER", w: 200, h: 200, hp: 305, score: 12e3, color: 23 }
  ];
  var VECTOR_PLANETS = [
    { name: "saturn", r: 46, color: 18, hasRing: true, ringCol: 22, rot: 0.28 },
    { name: "crater_moon", r: 38, color: 17, hasRing: false, craters: true },
    { name: "gas_giant", r: 54, color: 19, hasRing: true, ringCol: 25, rot: -0.22, craters: false }
  ];
  var COLORBLIND_MODES = {
    NONE: { name: "Normal", matrix: null },
    PROTANOPIA: {
      name: "Protanopia (Red-blind)",
      matrix: [
        0.567,
        0.433,
        0,
        0,
        0,
        0.558,
        0.442,
        0,
        0,
        0,
        0,
        0.242,
        0.758,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1
      ]
    },
    DEUTERANOPIA: {
      name: "Deuteranopia (Green-blind)",
      matrix: [
        0.625,
        0.375,
        0,
        0,
        0,
        0.7,
        0.3,
        0,
        0,
        0,
        0,
        0.3,
        0.7,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1
      ]
    },
    TRITANOPIA: {
      name: "Tritanopia (Blue-blind)",
      matrix: [
        0.95,
        0.05,
        0,
        0,
        0,
        0,
        0.433,
        0.567,
        0,
        0,
        0,
        0.475,
        0.525,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1
      ]
    }
  };
  var ACCESSIBILITY_DEFAULTS = {
    colorblindMode: "NONE",
    reducedMotion: false,
    screenShakeEnabled: true,
    hitPauseEnabled: true,
    crtEffectsEnabled: true,
    parallaxEnabled: true,
    tutorialSeen: false,
    keyBindings: {
      left: ["ArrowLeft", "KeyA"],
      right: ["ArrowRight", "KeyD"],
      up: ["ArrowUp", "KeyW"],
      down: ["ArrowDown", "KeyS"],
      btnA: ["KeyJ"],
      btnB: ["KeyK"],
      btnStart: ["Enter", "Space"],
      btnPause: ["Escape", "KeyP"]
    }
  };
  var SHIP_DEFS = {
    DEFAULT: {
      name: "STAR BLAST",
      desc: "Balanced all-rounder",
      baseSpeed: 220,
      baseFireRate: 0.2,
      baseLaserRate: 0.3,
      color: 18,
      unlockScore: 0,
      stats: { speed: 5, firepower: 5, handling: 5 },
      width: 48,
      height: 16,
      bullet: {
        color: 18,
        size: { w: 6, h: 3 },
        speed: 560,
        sound: { freq: 880, duration: 0.06, volume: 0.17, slide: -320, duty: 0.25 },
        laserColor: 18,
        laserSize: { w: 58, h: 4 },
        laserSound: { freq: 660, duration: 0.05, volume: 0.11, slide: -80, duty: 0.5 }
      }
    },
    INTERCEPTOR: {
      name: "INTERCEPTOR MK-II",
      desc: "High speed, low firepower",
      baseSpeed: 280,
      baseFireRate: 0.24,
      baseLaserRate: 0.36,
      color: 30,
      unlockScore: 5e4,
      stats: { speed: 9, firepower: 3, handling: 7 },
      width: 40,
      height: 14,
      bullet: {
        color: 30,
        size: { w: 4, h: 2 },
        speed: 680,
        sound: { freq: 1040, duration: 0.04, volume: 0.14, slide: -400, duty: 0.2 },
        laserColor: 30,
        laserSize: { w: 44, h: 3 },
        laserSound: { freq: 880, duration: 0.04, volume: 0.1, slide: -120, duty: 0.4 }
      }
    },
    BOMBER: {
      name: "HEAVY BOMBER",
      desc: "Slow but devastating",
      baseSpeed: 160,
      baseFireRate: 0.16,
      baseLaserRate: 0.24,
      color: 23,
      unlockScore: 1e5,
      stats: { speed: 3, firepower: 9, handling: 4 },
      width: 64,
      height: 28,
      bullet: {
        color: 23,
        size: { w: 10, h: 5 },
        speed: 440,
        sound: { freq: 440, duration: 0.08, volume: 0.22, slide: -220, duty: 0.4 },
        laserColor: 23,
        laserSize: { w: 72, h: 6 },
        laserSound: { freq: 330, duration: 0.07, volume: 0.16, slide: -60, duty: 0.6 }
      }
    },
    PHANTOM: {
      name: "PHANTOM X",
      desc: "Stealth fighter, fast firing",
      baseSpeed: 240,
      baseFireRate: 0.14,
      baseLaserRate: 0.22,
      color: 27,
      unlockScore: 25e4,
      stats: { speed: 7, firepower: 7, handling: 8 },
      width: 36,
      height: 12,
      bullet: {
        color: 27,
        size: { w: 3, h: 2 },
        speed: 720,
        sound: { freq: 1320, duration: 0.03, volume: 0.12, slide: -480, duty: 0.15 },
        laserColor: 27,
        laserSize: { w: 38, h: 2 },
        laserSound: { freq: 1100, duration: 0.03, volume: 0.09, slide: -160, duty: 0.3 }
      }
    },
    PROTOTYPE: {
      name: "PROTOTYPE-0",
      desc: "Experimental tech, overclocked",
      baseSpeed: 300,
      baseFireRate: 0.12,
      baseLaserRate: 0.18,
      color: 39,
      unlockScore: 5e5,
      stats: { speed: 10, firepower: 10, handling: 6 },
      width: 52,
      height: 18,
      bullet: {
        color: 39,
        size: { w: 8, h: 4 },
        speed: 800,
        sound: { freq: 1540, duration: 0.05, volume: 0.2, slide: -520, duty: 0.3 },
        laserColor: 39,
        laserSize: { w: 64, h: 5 },
        laserSound: { freq: 1320, duration: 0.05, volume: 0.14, slide: -200, duty: 0.5 }
      }
    }
  };
  var PALETTE_DEFS = {
    VECTOR: { name: "VECTOR NEON", unlockScore: 0, default: true },
    RETRO: { name: "RETRO GREEN", unlockScore: 75e3 },
    MONO: { name: "MONOCHROME", unlockScore: 15e4 },
    SUNSET: { name: "SUNSET HUES", unlockScore: 3e5 },
    CYBER: { name: "CYBER PUNK", unlockScore: 4e5 }
  };
  var UNLOCK_NOTIFICATION_TIME = 3;
  var PW_SLOTS = ["SPEEDUP", "MISSILE", "DOUBLE", "LASER", "OPTION", "?"];
  var PW_COUNT = PW_SLOTS.length;
  var PowerUpSystem = class {
    constructor() {
      this.reset();
      this._gameInstance = null;
      this._playerFired = false;
    }
    setGameInstance(game2) {
      this._gameInstance = game2;
    }
    // Restablece todos los power-ups, el cursor y los timers (GameOver o nueva partida).
    reset() {
      this.cursor = -1;
      this.effects = {
        speedLevel: 0,
        // +35 vel/stack, máx 3
        speedTimer: 0,
        // segundos restantes de velocidad (0 = sin timer, activo permanente nivel 1 mínimo)
        missileLevel: 0,
        // 0: ninguno, 1: abajo, 2: abajo + arriba
        missileTimer: 0,
        // segundos restantes del nivel de misil actual
        hasDouble: false,
        // disparo adicional arriba (permanente)
        laserActive: false,
        // láser ancho (permanente)
        optionCount: 0,
        // orbes activos (0–2)
        optionTimer: 0,
        // segundos restantes de OPTIONS
        optionEnergy: 1e3,
        // energía de los Options (0-1000)
        optionMaxEnergy: 1e3
        // energía máxima de los Options
      };
      this.options = [];
      this.missiles = [];
      this.missileTimer = 0;
    }
    // Retorna el nivel de poder actual del jugador (0–5) para escalar la dificultad enemiga.
    get powerLevel() {
      let lvl = 0;
      if (this.effects.speedLevel > 0) {
        lvl += this.effects.speedLevel;
      }
      if (this.effects.missileLevel > 0) {
        lvl += this.effects.missileLevel;
      }
      if (this.effects.hasDouble) {
        lvl += 1;
      }
      if (this.effects.laserActive) {
        lvl += 2;
      }
      if (this.effects.optionCount > 0) {
        lvl += this.effects.optionCount;
      }
      return Math.min(lvl, 10);
    }
    // Avanza cursor al recoger una cápsula.
    advance() {
      if (this.cursor === -1) {
        this.cursor = 0;
      } else {
        this.cursor = (this.cursor + 1) % PW_COUNT;
      }
    }
    // Activa el power-up del slot actual y restablece el cursor a -1.
    activate(game2) {
      if (this.cursor < 0 || this.cursor >= PW_COUNT) {
        return;
      }
      const slot = PW_SLOTS[this.cursor];
      const SPEED_DUR = 28;
      const MISS_DUR = 25;
      const OPT_DUR = 32;
      switch (slot) {
        case "SPEEDUP":
          this.effects.speedLevel = Math.min(3, this.effects.speedLevel + 1);
          this.effects.speedTimer = SPEED_DUR;
          game2.engine.audio.playPulse1(660, { duration: 0.15, volume: 0.22, slide: 220, duty: 0.25, isMusic: false });
          break;
        case "MISSILE":
          this.effects.missileLevel = Math.min(2, this.effects.missileLevel + 1);
          this.effects.missileTimer = MISS_DUR;
          game2.engine.audio.playPulse1(440 + this.effects.missileLevel * 120, { duration: 0.14, volume: 0.2, duty: 0.5, isMusic: false });
          break;
        case "DOUBLE":
          this.effects.hasDouble = true;
          this.effects.laserActive = false;
          game2.engine.audio.playPulse1(550, { duration: 0.1, volume: 0.18, duty: 0.25, isMusic: false });
          break;
        case "LASER":
          this.effects.laserActive = true;
          this.effects.hasDouble = false;
          game2.engine.audio.playPulse1(880, { duration: 0.18, volume: 0.22, slide: 400, duty: 0.125, isMusic: false });
          break;
        case "OPTION":
          if (this.effects.optionCount < 2) {
            this.effects.optionCount++;
            this.effects.optionTimer = OPT_DUR;
            this.effects.optionEnergy = this.effects.optionMaxEnergy;
            const trailLen = 80;
            this.options.push({
              x: game2.ship.x - 50,
              y: game2.ship.y + 14,
              histX: new Array(trailLen).fill(game2.ship.x - 50),
              histY: new Array(trailLen).fill(game2.ship.y + 14)
            });
            game2.engine.audio.sfxCoin();
          } else {
            this.effects.optionEnergy = this.effects.optionMaxEnergy;
            game2.engine.audio.sfxCoin();
          }
          break;
        case "?":
          if (Math.random() < 0.5) {
            this.effects.speedLevel = Math.min(3, this.effects.speedLevel + 1);
            this.effects.speedTimer = SPEED_DUR;
            game2.engine.audio.playPulse1(660, { duration: 0.15, volume: 0.22, slide: 220, duty: 0.25, isMusic: false });
          } else {
            const bonus = game2.enemies.reduce((s, e) => s + e.score, 0);
            for (const e of game2.enemies) {
              game2.explode(e.x + e.w / 2, e.y + e.h / 2, e.color, 7);
            }
            game2.score += bonus;
            game2.enemies = [];
            game2.engine.audio.sfxExplosion();
          }
          break;
      }
      this.cursor = -1;
    }
    // Actualiza timers, degradación automática de power-ups y posición de orbes.
    update(dt, ship) {
      if (this.effects.speedLevel > 0 && this.effects.speedTimer > 0) {
        this.effects.speedTimer -= dt;
        if (this.effects.speedTimer <= 0) {
          this.effects.speedLevel = Math.max(0, this.effects.speedLevel - 1);
          this.effects.speedTimer = this.effects.speedLevel > 0 ? 20 : 0;
        }
      }
      if (this.effects.missileLevel > 0 && this.effects.missileTimer > 0) {
        this.effects.missileTimer -= dt;
        if (this.effects.missileTimer <= 0) {
          this.effects.missileLevel = Math.max(0, this.effects.missileLevel - 1);
          this.effects.missileTimer = this.effects.missileLevel > 0 ? 18 : 0;
        }
      }
      if (this.effects.optionCount > 0 && this.effects.optionTimer > 0) {
        this.effects.optionTimer -= dt;
        if (this.effects.optionTimer <= 0) {
          this.effects.optionCount = Math.max(0, this.effects.optionCount - 1);
          this.options.splice(this.effects.optionCount);
          this.effects.optionTimer = this.effects.optionCount > 0 ? 24 : 0;
          this.effects.optionEnergy = this.effects.optionMaxEnergy;
        }
      }
      for (let oi = 0; oi < this.options.length; oi++) {
        const opt = this.options[oi];
        opt.histX.push(ship.x + 26);
        opt.histY.push(ship.y + 14);
        if (opt.histX.length > 80) {
          opt.histX.shift();
          opt.histY.shift();
        }
        const delay = 55 + oi * 22;
        const idx = Math.max(0, opt.histX.length - 1 - delay);
        opt.x = opt.histX[idx];
        opt.y = opt.histY[idx];
      }
      if (this.effects.optionCount > 0 && this._playerFired) {
        this.effects.optionEnergy -= 1;
        this._playerFired = false;
        if (this.effects.optionEnergy <= 0) {
          this.effects.optionEnergy = 0;
          if (this.options.length > 0) {
            const optToRemove = this.options.length - 1;
            const opt = this.options[optToRemove];
            if (this._gameInstance && this._gameInstance.explode) {
              this._gameInstance.explode(opt.x + 10, opt.y + 5, 6, 8);
            }
            this.options.splice(optToRemove, 1);
            this.effects.optionCount--;
            if (this.options.length > 0) {
              this.effects.optionEnergy = this.effects.optionMaxEnergy;
            }
          }
        }
      }
      if (this.effects.missileLevel > 0) {
        this.missileTimer += dt;
      }
      for (const m of this.missiles) {
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        m.life -= dt;
      }
      this.missiles = this.missiles.filter((m) => m.life > 0 && m.x < 700 && m.y > 0 && m.y < 500);
    }
    // Retorna true cuando toca disparar un misil automático.
    shouldFireMissile() {
      if (this.effects.missileLevel <= 0) {
        return false;
      }
      if (this.missileTimer >= 1.3) {
        this.missileTimer = 0;
        return true;
      }
      return false;
    }
    // Genera los misiles de apoyo (1 o 2 según nivel activo).
    spawnMissile(x, y) {
      if (this.effects.missileLevel >= 1) {
        this.missiles.push({ x, y: y + 4, vx: 320, vy: 110, life: 4.5, w: 6, h: 3, isMissile: true });
      }
      if (this.effects.missileLevel >= 2) {
        this.missiles.push({ x, y: y - 4, vx: 320, vy: -110, life: 4.5, w: 6, h: 3, isMissile: true });
      }
    }
  };
  var ShmupGame = class {
    constructor() {
      this.ship = { x: 80, y: 240, w: 48, h: 16, color: 18 };
      this.baseSpeed = 220;
      this.animTimer = 0;
      this.bullets = [];
      this.enemyBullets = [];
      this.enemies = [];
      this.particles = [];
      this.capsules = [];
      this.stars = [];
      for (let i = 0; i < 46; i++) {
        const r = Math.random();
        const c = r > 0.7 ? 6 : r > 0.4 ? 18 : 17;
        this.stars.push({ x: Math.random() * 640, y: Math.random() * 480, s: 0.5 + Math.random() * 1.6, c });
      }
      this.fireCooldown = 0;
      this.fireRate = 0.2;
      this.laserRate = 0.3;
      this.spawnTimer = 0;
      this.waveIdx = 0;
      this.score = 0;
      this.lives = 3;
      this.respawnTimer = 0;
      this.gameOver = false;
      this.musicLoopId = null;
      this._scoreSubmitted = false;
      this._nameEntryActive = false;
      this._nameEntryBuffer = "";
      this._nameEntryCursor = 0;
      this._rankingStatus = "";
      this._rankingName = "";
      this._rankingSaved = false;
      this._gameOverMenuSelection = 0;
      this.pilotName = this.profile && this.profile.pilotName ? this.profile.pilotName : "PLR";
      this.tipOffset = { x: 48, y: 14 };
      this.structures = [];
      this.structTimer = 5;
      this.structSpeed = 78;
      this.planets = [];
      this.planetTimer = 22 + Math.random() * 15;
      this.sunTimer = 55 + Math.random() * 25;
      this.wallBurst = 0;
      this.wallGapTimer = 0;
      this.pwr = new PowerUpSystem();
      this.pwr.setGameInstance(this);
      this.pwr.effects.optionEnergy = this.pwr.effects.optionMaxEnergy;
      this.wormTimer = 10 + Math.random() * 5;
      this.wormPathHistory = [];
      this.wormFromTop = true;
      this.wormDiveDir = 1;
      this.profile = this._loadProfile();
      this.currentShip = this.profile.selectedShip || "DEFAULT";
      this.unlockables = this._initUnlockables();
      this.prestigeLevel = this.profile.prestige || 0;
      this.ngPlusActive = false;
      this.achievements = this._initAchievements();
      this.achievementNotifications = [];
      this._lastKillCount = 0;
      this._lastGrazeCount = 0;
      this._lastCombo = 0;
      this.consecutiveNoMissWaves = 0;
      this.lastGrazeTime = -999;
      this.defeatedBosses = /* @__PURE__ */ new Set();
      this._sessionAchievementsUnlocked = /* @__PURE__ */ new Set();
      if (this.profile && this.profile.achievements) {
        for (const id of Object.keys(this.profile.achievements)) {
          if (this.achievements[id] && this.profile.achievements[id]) {
            this.achievements[id].unlocked = true;
          }
        }
      }
      this.accessibility = this._loadAccessibilitySettings();
      this._applyAccessibilitySettings();
      this._checkReducedMotion();
      this.spawnSystem = null;
      this.waveGenerator = null;
      this.wave = 0;
      this.obstacles = [];
      this.obstacleTimer = 6;
      this.stageClearTimer = 0;
      this.gameTime = 0;
      this.minibossState = "waves";
      this.minibossWarning = 0;
      this.miniboss = null;
      this.awaitingContinue = false;
      this.combo = 0;
      this.comboTimer = 0;
      this.comboTimeout = 0.8;
      this.lastKillTime = 0;
      this.grazedBullets = /* @__PURE__ */ new Set();
      this.cleanWaveBonus = false;
      this.noMissWave = true;
      this.waveStartScore = 0;
      this.screenShake = 0;
      this.screenShakeIntensity = 0;
      this.hitPause = 0;
      this.hitPauseDuration = 0;
      this.scorePopups = [];
      this.killCamera = { active: false, timer: 0, zoom: 1, target: null };
      this.maxCombo = 0;
      this.totalKills = 0;
      this.totalGraze = 0;
    }
    get speed() {
      return this.baseSpeed + this.pwr.effects.speedLevel * 35;
    }
    init(engine2) {
      this.engine = engine2;
      this._reset();
      this._applyShipStats();
      this._applyPalette();
      this.spawnSystem = new EnemySpawnSystem(ENEMY_DEFS, this);
      this.waveGenerator = new ProceduralWaveGenerator(this.spawnSystem);
      const lvlIdx = this.wave % LEVEL_TIMELINES.length | 0;
      this.spawnSystem.loadTimeline(LEVEL_TIMELINES[lvlIdx]);
      this._checkGDPConsent();
      if (this.engine.sdk) {
        this.engine.sdk.onRewardedComplete(() => {
          this._onRewardedContinue?.();
        });
      }
      this.startMusicLoop();
      this._initTutorial();
      this._createColorblindFilters();
    }
    _reset() {
      this.ship.x = 80;
      this.ship.y = 240;
      this.bullets = [];
      this.enemyBullets = [];
      this.enemies = [];
      this.particles = [];
      this.capsules = [];
      this.structures = [];
      this.planets = [];
      this.obstacles = [];
      this.obstacleTimer = 6;
      this.stageClearTimer = 0;
      this.wave = 0;
      this.spawnTimer = 0;
      this.structTimer = 5;
      this.planetTimer = 22 + Math.random() * 15;
      this.sunTimer = 55 + Math.random() * 25;
      this.wallBurst = 0;
      this.wallGapTimer = 0;
      this.waveIdx = 0;
      this.score = 0;
      this.lives = 3;
      this.respawnTimer = 0;
      this.gameOver = false;
      this.awaitingContinue = false;
      this.pwr = new PowerUpSystem();
      this.pwr.setGameInstance(this);
      this.totalKills = 0;
      this.totalGraze = 0;
      this.maxCombo = 0;
      this._lastKillCount = 0;
      this._lastGrazeCount = 0;
      this._lastCombo = 0;
      this._usedContinue = false;
      this._grazeAndKillThisSecond = false;
      this.consecutiveNoMissWaves = 0;
      this.lastGrazeTime = -999;
      this.defeatedBosses = /* @__PURE__ */ new Set();
      this._sessionAchievementsUnlocked.clear();
      this.pwr.effects.optionEnergy = this.pwr.effects.optionMaxEnergy;
      this.wormTimer = 10 + Math.random() * 5;
      this.gameTime = 0;
      this.minibossState = "waves";
      this.minibossWarning = 0;
      this.miniboss = null;
      this.achievementNotifications = [];
      this._applyShipStats();
      this.combo = 0;
      this.comboTimer = 0;
      this.lastKillTime = 0;
      this.grazedBullets.clear();
      this.cleanWaveBonus = false;
      this.noMissWave = true;
      this.waveStartScore = 0;
      this.screenShake = 0;
      this.screenShakeIntensity = 0;
      this.hitPause = 0;
      this.hitPauseDuration = 0;
      this.scorePopups = [];
      this.killCamera = { active: false, timer: 0, zoom: 1, target: null };
      this._scoreSubmitted = false;
      this._rankingName = "";
      this._rankingStatus = "";
      this._nameEntryActive = false;
      this._nameEntryBuffer = "";
      this._nameEntryCursor = 0;
      if (this.spawnSystem) {
        this.spawnSystem.reset();
      }
      if (this.waveGenerator) {
        this.waveGenerator.reset();
      }
    }
    // ── Música: Synthwave Rápido (A Minor, 155 BPM) ───────────────────────────
    // Usa el patrón "lookahead scheduler" (Chris Wilson / Web Audio):
    // En lugar de crear cientos de nodos de una vez, un micro-intervalo de 25ms
    // programa solo las notas que caen en los próximos 150ms, distribuyendo
    // la carga uniformemente y eliminando el freeze al reiniciar el loop.
    startMusicLoop() {
      if (!this.engine) {
        return;
      }
      const audio = this.engine.audio;
      if (!audio) {
        return;
      }
      if (!audio.isReady()) {
        if (typeof audio.resume === "function") {
          audio.resume();
        }
        audio.onReady(() => {
          if (!this.gameOver && !this.awaitingContinue) {
            this.startMusicLoop();
          }
        });
        return;
      }
      this.stopMusicLoop();
      const TEMPO = 155;
      const SPB = 60 / TEMPO;
      const SUBDIV = SPB / 4;
      const LOOKAHEAD = 0.15;
      const TICK_MS = 25;
      const N = {
        A2: 110,
        B2: 123.47,
        C3: 130.81,
        D3: 146.83,
        E3: 164.81,
        F3: 174.61,
        G3: 196,
        A3: 220,
        B3: 246.94,
        C4: 261.63,
        D4: 293.66,
        E4: 329.63,
        F4: 349.23,
        G4: 392,
        A4: 440,
        B4: 493.88,
        C5: 523.25,
        D5: 587.33,
        E5: 659.25,
        F5: 698.46,
        G5: 783.99,
        A5: 880,
        B5: 987.77,
        C6: 1046.5
      };
      const events = [];
      const addTri = (t, f, dur, vol) => events.push({ t, dur, ch: "tri", f, vol, duty: 0, slide: 0 });
      const addP1 = (t, f, dur, vol, duty, slide) => events.push({ t, dur, ch: "p1", f, vol, duty, slide });
      const addP2 = (t, f, dur, vol, duty, slide) => events.push({ t, dur, ch: "p2", f, vol, duty, slide });
      const addNoi = (t, dur, vol) => events.push({ t, dur, ch: "noise", f: 0, vol, duty: 0, slide: 0 });
      const bassPattern = [
        N.A2,
        N.A2,
        N.C3,
        N.A2,
        N.E3,
        N.E3,
        N.G3,
        N.E3,
        N.F2,
        N.F2,
        N.A2,
        N.F2,
        N.D3,
        N.D3,
        N.F3,
        N.D3,
        N.G2,
        N.G2,
        N.B3,
        N.G2,
        N.E3,
        N.E3,
        N.G3,
        N.E3,
        N.E2,
        N.E2,
        N.G2,
        N.E2,
        N.D3,
        N.D3,
        N.E3,
        N.D3
      ];
      bassPattern.forEach((note, i) => {
        const bt = i * 0.5;
        const v = i % 2 === 0 ? 0.24 : 0.18;
        addTri(bt, note, 0.5 * 0.9, v);
      });
      for (let bar = 0; bar < 16; bar++) {
        const barBeat = bar * 4;
        const isFillBar = bar === 7 || bar === 15;
        if (isFillBar) {
          for (let s = 0; s < 16; s++) {
            const bt = barBeat + s * 0.25;
            addNoi(bt, 0.06, s % 2 === 1 ? 0.22 : 0.15);
          }
        } else {
          for (let k = 0; k < 16; k++) {
            const bt = barBeat + k * 0.25;
            addNoi(bt, 0.02, 0.05);
            if (k === 4 || k === 12) {
              addNoi(bt, 0.12, 0.18);
            }
            if (k === 8) {
              addNoi(bt, 0.08, 0.12);
            }
          }
        }
      }
      const lead = [
        // Am arpegio pattern
        [N.A4, 0.25],
        [N.C5, 0.25],
        [N.E5, 0.5],
        [N.A5, 0.5],
        [N.G5, 0.25],
        [N.E5, 0.25],
        [N.C5, 0.5],
        [N.F4, 0.25],
        [N.A4, 0.25],
        [N.C5, 0.5],
        [N.F5, 0.5],
        [N.E5, 0.25],
        [N.C5, 0.25],
        [N.A4, 0.5],
        [N.G4, 0.25],
        [N.B4, 0.25],
        [N.D5, 0.5],
        [N.G5, 0.5],
        [N.F5, 0.25],
        [N.D5, 0.25],
        [N.B4, 0.5],
        [N.E4, 0.25],
        [N.G4, 0.25],
        [N.B4, 0.5],
        [N.E5, 0.5],
        [N.D5, 0.25],
        [N.B4, 0.25],
        [N.G4, 0.5],
        // F major section
        [N.F4, 0.25],
        [N.A4, 0.25],
        [N.C5, 0.5],
        [N.F5, 0.5],
        [N.E5, 0.25],
        [N.C5, 0.25],
        [N.A4, 0.5],
        [N.G4, 0.25],
        [N.B4, 0.25],
        [N.D5, 0.5],
        [N.G5, 0.5],
        [N.F5, 0.25],
        [N.D5, 0.25],
        [N.B4, 0.5],
        [N.C5, 0.25],
        [N.E5, 0.25],
        [N.G5, 0.5],
        [N.C6, 0.5],
        [N.B5, 0.25],
        [N.G5, 0.25],
        [N.E5, 0.5],
        [N.F4, 0.25],
        [N.A4, 0.25],
        [N.C5, 0.5],
        [N.F5, 0.5],
        [N.E5, 0.25],
        [N.C5, 0.25],
        [N.A4, 0.5],
        // Bridge with slides
        [N.D4, 0.5],
        [N.F4, 0.5],
        [N.A4, 1, 50],
        [N.D5, 1, 30],
        [N.E4, 0.5],
        [N.G4, 0.5],
        [N.B4, 1, 40],
        [N.E5, 1, 20],
        // Build-up
        [N.A4, 0.25],
        [N.C5, 0.25],
        [N.E5, 0.25],
        [N.G5, 0.25],
        [N.A5, 0.5],
        [N.G5, 0.25],
        [N.E5, 0.25],
        [N.C5, 0.25],
        [N.E5, 0.25],
        [N.G5, 0.25],
        [N.B5, 0.25],
        [N.C6, 0.5],
        [N.B5, 0.25],
        [N.G5, 0.25],
        // Climax
        [N.A5, 1],
        [N.G5, 0.5],
        [N.E5, 0.5],
        [N.C5, 1],
        [N.A4, 1],
        [N.G4, 0.5],
        [N.E4, 0.5],
        [N.D5, 1.5, 40],
        [N.C5, 0.5],
        [N.A4, 1],
        [N.G4, 1],
        [N.E4, 2, -60]
      ];
      {
        let bt = 0;
        lead.forEach(([f, d, sl = 0]) => {
          addP1(bt, f, d * 0.96, 0.18, 0.125, sl);
          bt += d;
        });
      }
      const pad = [
        // Am - F - C - G progression (sustained chords)
        [N.A3, 2],
        [N.C4, 2],
        [N.E4, 2],
        [N.A4, 2],
        [N.F3, 2],
        [N.A3, 2],
        [N.C4, 2],
        [N.F4, 2],
        [N.C3, 2],
        [N.E3, 2],
        [N.G3, 2],
        [N.C4, 2],
        [N.G3, 2],
        [N.B3, 2],
        [N.D4, 2],
        [N.G4, 2],
        // Repeat with variation
        [N.A3, 1],
        [N.C4, 1],
        [N.E4, 1],
        [N.A4, 1],
        [N.G4, 1],
        [N.E4, 1],
        [N.C4, 1],
        [N.A3, 1],
        [N.F3, 1],
        [N.A3, 1],
        [N.C4, 1],
        [N.F4, 1],
        [N.E4, 1],
        [N.C4, 1],
        [N.A3, 1],
        [N.F3, 1],
        [N.C3, 1],
        [N.E3, 1],
        [N.G3, 1],
        [N.C4, 1],
        [N.B3, 1],
        [N.G3, 1],
        [N.E3, 1],
        [N.C3, 1],
        [N.G3, 1],
        [N.B3, 1],
        [N.D4, 1],
        [N.G4, 1],
        [N.F4, 1],
        [N.D4, 1],
        [N.B3, 1],
        [N.G3, 1],
        // Final section
        [N.A3, 2],
        [N.C4, 2],
        [N.E4, 2],
        [N.A4, 2],
        [N.G3, 2],
        [N.B3, 2],
        [N.D4, 2],
        [N.G4, 2],
        [N.F3, 2],
        [N.A3, 2],
        [N.C4, 2],
        [N.F4, 2],
        [N.E3, 2],
        [N.G3, 2],
        [N.B3, 2],
        [N.E4, 2]
      ];
      {
        let bt = 0;
        pad.forEach(([f, d, sl = 0]) => {
          addP2(bt, f, d * 0.98, 0.14, 0.5, sl);
          bt += d;
        });
      }
      const LOOP_BEATS = 64;
      const LOOP_SEC = LOOP_BEATS * SPB;
      events.sort((a, b) => a.t - b.t);
      const loopStart = audio.ctx.currentTime + 0.05;
      let eventIdx = 0;
      const tick = () => {
        if (this.gameOver || this.awaitingContinue || !audio.isReady()) {
          return;
        }
        const horizon = audio.ctx.currentTime + LOOKAHEAD;
        while (true) {
          const ev = events[eventIdx % events.length];
          const loop = Math.floor(eventIdx / events.length);
          const evT = loopStart + loop * LOOP_SEC + ev.t * SPB;
          if (evT > horizon) {
            break;
          }
          if (evT >= audio.ctx.currentTime - 0.02) {
            if (ev.ch === "tri") {
              audio.scheduleTriangle(ev.f, evT, ev.dur * SPB, { volume: ev.vol, isMusic: true });
            } else if (ev.ch === "p1") {
              audio.schedulePulse("pulse1", ev.f, evT, ev.dur * SPB, { volume: ev.vol, duty: ev.duty, slide: ev.slide, isMusic: true });
            } else if (ev.ch === "p2") {
              audio.schedulePulse("pulse2", ev.f, evT, ev.dur * SPB, { volume: ev.vol, duty: ev.duty, slide: ev.slide, isMusic: true });
            } else if (ev.ch === "noise") {
              audio.scheduleNoise(evT, ev.dur * SPB, { volume: ev.vol, isMusic: true });
            }
          }
          eventIdx++;
        }
      };
      tick();
      this.musicLoopId = setInterval(tick, TICK_MS);
    }
    stopMusicLoop() {
      if (this.musicLoopId) {
        clearInterval(this.musicLoopId);
        this.musicLoopId = null;
      }
    }
    // ── Ship helpers ──
    getShipTip() {
      return { x: this.ship.x + this.tipOffset.x, y: this.ship.y + this.tipOffset.y };
    }
    // Disparo principal (J)
    fireBullet() {
      const tip = this.getShipTip();
      this.pwr._playerFired = true;
      const shipDef = SHIP_DEFS[this.currentShip] || SHIP_DEFS.DEFAULT;
      const bullet = shipDef.bullet;
      if (this.pwr.effects.laserActive) {
        if (this.spawnSystem) {
          this.spawnSystem.spawnProjectile(tip.x, tip.y - 5, bullet.speed * 1.3, 0, {
            w: bullet.laserSize.w,
            h: bullet.laserSize.h,
            isLaser: true,
            color: bullet.laserColor,
            vx: bullet.speed * 1.3,
            vy: 0
          });
          this.spawnSystem.spawnProjectile(tip.x, tip.y + 1, bullet.speed * 1.3, 0, {
            w: bullet.laserSize.w,
            h: bullet.laserSize.h,
            isLaser: true,
            color: bullet.laserColor,
            vx: bullet.speed * 1.3,
            vy: 0
          });
        } else {
          this.bullets.push({
            x: tip.x,
            y: tip.y - 5,
            vx: bullet.speed * 1.3,
            vy: 0,
            w: bullet.laserSize.w,
            h: bullet.laserSize.h,
            isLaser: true,
            color: bullet.laserColor
          });
          this.bullets.push({
            x: tip.x,
            y: tip.y + 1,
            vx: bullet.speed * 1.3,
            vy: 0,
            w: bullet.laserSize.w,
            h: bullet.laserSize.h,
            isLaser: true,
            color: bullet.laserColor
          });
        }
        this.engine.audio.playPulse1(bullet.laserSound.freq, {
          duration: bullet.laserSound.duration,
          volume: bullet.laserSound.volume,
          slide: bullet.laserSound.slide,
          duty: bullet.laserSound.duty,
          isMusic: false
        });
      } else {
        if (this.spawnSystem) {
          this.spawnSystem.spawnProjectile(tip.x, tip.y - 2, bullet.speed, 0, {
            w: bullet.size.w,
            h: bullet.size.h,
            color: bullet.color,
            vx: bullet.speed,
            vy: 0
          });
        } else {
          this.bullets.push({
            x: tip.x,
            y: tip.y - 2,
            vx: bullet.speed,
            vy: 0,
            w: bullet.size.w,
            h: bullet.size.h,
            color: bullet.color
          });
        }
        this.engine.audio.playPulse1(bullet.sound.freq, {
          duration: bullet.sound.duration,
          volume: bullet.sound.volume,
          slide: bullet.sound.slide,
          duty: bullet.sound.duty,
          isMusic: false
        });
        this.engine.audio.playNoise({ duration: 0.03, volume: 0.05, isMusic: false });
        if (this.pwr.effects.hasDouble) {
          if (this.spawnSystem) {
            this.spawnSystem.spawnProjectile(tip.x, tip.y - 9, bullet.speed * 0.95, -55, {
              w: bullet.size.w,
              h: bullet.size.h,
              color: bullet.color
            });
          } else {
            this.bullets.push({
              x: tip.x,
              y: tip.y - 9,
              vx: bullet.speed * 0.95,
              vy: -55,
              w: bullet.size.w,
              h: bullet.size.h,
              color: bullet.color
            });
          }
        }
      }
      for (const opt of this.pwr.options) {
        if (this.spawnSystem) {
          this.spawnSystem.spawnProjectile(opt.x + 20, opt.y, bullet.speed, 0, {
            w: bullet.size.w,
            h: bullet.size.h,
            fromOption: true,
            color: bullet.color
          });
        } else {
          this.bullets.push({
            x: opt.x + 20,
            y: opt.y,
            vx: bullet.speed,
            vy: 0,
            w: bullet.size.w,
            h: bullet.size.h,
            fromOption: true,
            color: bullet.color
          });
        }
      }
    }
    // ── Estructuras / límite nivel (sin invadir HUD superior 0-34 ni barra powerups inferior 440-480)
    getGapAtX(x) {
      let top = 34, bottom = 436;
      for (const seg of this.structures) {
        if (x >= seg.x - 20 && x <= seg.x + seg.w + 20) {
          const sT = 32 + seg.topH;
          const sB = 438 - seg.bottomH;
          if (sT > top) {
            top = sT;
          }
          if (sB < bottom) {
            bottom = sB;
          }
        }
      }
      if (bottom - top < 120) {
        const mid = (top + bottom) / 2;
        top = Math.max(34, mid - 60);
        bottom = Math.min(436, mid + 60);
      }
      return { top, bottom };
    }
    // ── Anti-superposición: separación suave entre enemigos solapados ──
    _applyEnemySeparation(dt) {
      const PAD = 4;
      const MAX_ITERS = 2;
      for (let iter = 0; iter < MAX_ITERS; iter++) {
        let moved = false;
        for (let i = 0; i < this.enemies.length; i++) {
          for (let j = i + 1; j < this.enemies.length; j++) {
            const a = this.enemies[i], b = this.enemies[j];
            if (a.pattern === "interceptor_worm" || b.pattern === "interceptor_worm" || a.isMiniboss || b.isMiniboss) {
              continue;
            }
            const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
            const bx = b.x + b.w / 2, by = b.y + b.h / 2;
            const dx = ax - bx, dy = ay - by;
            if (Math.abs(dx) > (a.w + b.w) / 2 + 24) {
              continue;
            }
            const needY = (a.h + b.h) / 2 + PAD;
            if (Math.abs(dy) >= needY) {
              continue;
            }
            const overlap = needY - Math.abs(dy);
            if (overlap <= 0.1) {
              continue;
            }
            const push = (overlap / 2 + 1.2) * Math.min(1, dt * 60);
            if (ay < by) {
              a.y -= push;
              b.y += push;
              if (a.pattern === "sine") {
                a.baseY -= push;
              }
              if (b.pattern === "sine") {
                b.baseY += push;
              }
              if (a.pattern === "zigzag") {
                a.vy = Math.min(a.vy - 8, -15);
              }
              if (b.pattern === "zigzag") {
                b.vy = Math.max(b.vy + 8, 15);
              }
            } else {
              a.y += push;
              b.y -= push;
              if (a.pattern === "sine") {
                a.baseY += push;
              }
              if (b.pattern === "sine") {
                b.baseY -= push;
              }
              if (a.pattern === "zigzag") {
                a.vy = Math.max(a.vy + 8, 15);
              }
              if (b.pattern === "zigzag") {
                b.vy = Math.min(b.vy - 8, -15);
              }
            }
            const gapA = this.getGapAtX(a.x + a.w / 2);
            const gapB = this.getGapAtX(b.x + b.w / 2);
            a.y = Math.max(gapA.top + 2, Math.min(gapA.bottom - a.h - 2, a.y));
            b.y = Math.max(gapB.top + 2, Math.min(gapB.bottom - b.h - 2, b.y));
            if (a.pattern === "sine") {
              a.baseY = Math.max(gapA.top + 2, Math.min(gapA.bottom - a.h - 2, a.baseY));
            }
            if (b.pattern === "sine") {
              b.baseY = Math.max(gapB.top + 2, Math.min(gapB.bottom - b.h - 2, b.baseY));
            }
            moved = true;
          }
        }
        if (!moved) {
          break;
        }
      }
    }
    spawnStructure() {
      const r = Math.random();
      let topH = 0, bottomH = 0, w = 320;
      if (r < 0.25) {
        topH = 0;
        bottomH = 58 + Math.random() * 42;
        w = 340 + Math.random() * 80;
      } else if (r < 0.5) {
        topH = 58 + Math.random() * 42;
        bottomH = 0;
        w = 340 + Math.random() * 80;
      } else if (r < 0.72) {
        topH = 56 + Math.random() * 28;
        bottomH = 56 + Math.random() * 28;
        w = 380 + Math.random() * 80;
      } else if (r < 0.88) {
        topH = 88 + Math.random() * 22;
        bottomH = 88 + Math.random() * 22;
        w = 300 + Math.random() * 60;
      } else {
        topH = 34 + Math.random() * 18;
        bottomH = 34 + Math.random() * 18;
        w = 520 + Math.random() * 60;
      }
      const gap = 424 - topH - bottomH;
      if (gap < 140) {
        const sc = (424 - 140) / (topH + bottomH);
        topH *= sc;
        bottomH *= sc;
      }
      this.structures.push({ x: 640, w, topH: topH | 0, bottomH: bottomH | 0 });
    }
    spawnPlanet() {
      const t = VECTOR_PLANETS[Math.random() * VECTOR_PLANETS.length | 0];
      this.planets.push({
        x: 680,
        y: 40 + Math.random() * 140,
        r: t.r,
        c: t.color,
        hasRing: t.hasRing,
        ringCol: t.ringCol,
        rot: t.rot,
        craters: t.craters,
        isSun: false
      });
    }
    spawnSun() {
      this.planets.push({
        x: 680,
        y: 50 + Math.random() * 120,
        r: 44,
        c: 25,
        isSun: true
      });
    }
    spawnInterceptorWorm() {
      if (this.spawnSystem) {
        this.spawnSystem.scheduleWave("interceptor_squadron", 0.1);
      } else {
        const gap = this.getGapAtX(680);
        const startY = (gap.top + gap.bottom) / 2;
        for (let i = 0; i < 4; i++) {
          this.enemies.push({
            type: "INTERCEPTOR",
            x: 680 + i * 45,
            y: startY,
            baseY: startY,
            w: ENEMY_DEFS.INTERCEPTOR.w,
            h: ENEMY_DEFS.INTERCEPTOR.h,
            hp: ENEMY_DEFS.INTERCEPTOR.hp,
            maxHp: ENEMY_DEFS.INTERCEPTOR.hp,
            vx: ENEMY_DEFS.INTERCEPTOR.vx,
            vy: 0,
            t: 0,
            pattern: "interceptor_advanced",
            color: ENEMY_DEFS.INTERCEPTOR.color,
            score: ENEMY_DEFS.INTERCEPTOR.score,
            dived: false
          });
        }
      }
    }
    spawnWave() {
      if (this.spawnSystem) {
        this.spawnSystem.scheduleWave("gradius_v_rush", 0.1);
      }
    }
    // Escala el HP de los enemigos recién añadidos según el nivel de poder del jugador.
    // Solo se aplica una vez por enemigo (flag _scaled) y no afecta Minibosses.
    _scaleNewEnemies() {
      const pl = this.pwr.powerLevel;
      if (pl <= 0) {
        return;
      }
      const hpFactor = Math.min(3, 1 + pl * 0.2);
      for (const e of this.enemies) {
        if (e._scaled || e.isMiniboss) {
          continue;
        }
        e._scaled = true;
        if (e.maxHp && e.maxHp > 1) {
          const newMax = Math.ceil(e.maxHp * hpFactor);
          e.hp = Math.ceil(e.hp / e.maxHp * newMax);
          e.maxHp = newMax;
        }
      }
    }
    // ── Obstáculos Centrales Flotantes ───────────────────────────────────────
    spawnObstacle() {
      const biome = this.wave % 4;
      const colors = [
        { border: 2, core: 25 },
        // Wave 0: Abisal
        { border: 19, core: 25 },
        // Wave 1: Cristal/Magma
        { border: 6, core: 9 },
        // Wave 2: Slime/Ácido
        { border: 4, core: 23 }
        // Wave 3: Tecno/Sierra
      ];
      const col = colors[biome];
      const size = 36 + Math.floor(Math.random() * 26);
      const y = 185 + Math.random() * 80;
      this.obstacles.push({
        x: 660,
        y,
        w: size,
        h: size,
        vx: -(55 + Math.random() * 25),
        hp: 12 + Math.floor(Math.random() * 8),
        maxHp: 16,
        rot: 0,
        vrot: (Math.random() - 0.5) * 1.5,
        color: col.border,
        coreColor: col.core,
        _hitFlash: 0
      });
    }
    // ── MINIBOSS: invocación y despacho según oleada ─────────────────────────
    spawnMiniboss() {
      const spec = MINIBOSS_SPECS[this.wave % MINIBOSS_SPECS.length];
      const gap = this.getGapAtX(520);
      const y = (gap.top + gap.bottom) / 2 - spec.h / 2;
      const boss = {
        type: "MINIBOSS",
        bossType: spec.id,
        bossName: spec.name,
        x: 700,
        y,
        baseY: y,
        w: spec.w,
        h: spec.h,
        hp: spec.hp + Math.floor(this.wave / 4) * 40,
        maxHp: spec.hp + Math.floor(this.wave / 4) * 40,
        vx: 85,
        vy: 0,
        t: 0,
        pattern: "miniboss",
        color: spec.color,
        score: spec.score + Math.floor(this.wave / 4) * 2e3,
        amp: 0,
        freq: 0,
        isMiniboss: true,
        phase: "enter",
        // enter -> hover
        shootT: 0,
        patternPhase: 0,
        patternTimer: 0,
        spiralAngle: 0,
        burstCooldown: 0,
        chargeT: 0,
        _damageCooldown: 0
      };
      this.enemies.push(boss);
      this.miniboss = boss;
      this.minibossState = "miniboss";
      this.enemyBullets = [];
      this.engine.audio.playPulse1(120, { duration: 0.4, volume: 0.28, slide: 180, duty: 0.12, isMusic: false });
      this.engine.audio.sfxCoin();
    }
    _updateMiniboss(b, dt) {
      b.t += dt;
      if (b._hitFlash) {
        b._hitFlash -= dt;
      }
      if (b.phase === "enter") {
        b.x -= b.vx * dt;
        if (b.x <= 430) {
          b.x = 430;
          b.phase = "hover";
          b.vx = 0;
        }
        return;
      }
      const gap = this.getGapAtX(b.x + b.w / 2);
      const maxHoverAmp = Math.max(4, (gap.bottom - gap.top - b.h - 16) / 2);
      const effHoverAmp = Math.min(22, maxHoverAmp);
      const safeMidY = (gap.top + gap.bottom - b.h) / 2;
      b.baseY = Math.max(gap.top + effHoverAmp + 6, Math.min(gap.bottom - b.h - effHoverAmp - 6, safeMidY));
      b.y = b.baseY + Math.sin(b.t * 0.85) * effHoverAmp;
      b.y = Math.max(gap.top + 6, Math.min(gap.bottom - b.h - 6, b.y));
      const type = b.bossType || "octo_planet";
      if (type === "cyclops_egg") {
        this._updateCyclopsEgg(b, dt);
      } else if (type === "neon_slime") {
        this._updateNeonSlime(b, dt);
      } else if (type === "saw_spinner") {
        this._updateSawSpinner(b, dt);
      } else {
        this._updateOctoPlanet(b, dt);
      }
    }
    // Miniboss 1: OCTO-PLANET
    _updateOctoPlanet(b, dt) {
      b.patternTimer += dt;
      if (b.patternTimer > 7) {
        b.patternTimer = 0;
        b.patternPhase = (b.patternPhase + 1) % 3;
        b.burstCooldown = 0;
      }
      b.shootT += dt;
      b.burstCooldown -= dt;
      const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
      const mouthY = cy + 14;
      if (b.patternPhase === 0) {
        if (b.burstCooldown <= 0) {
          const n = 16, spd = 148;
          for (let i = 0; i < n; i++) {
            const a = i / n * Math.PI * 2 + b.t * 0.55;
            this._minibossBullet(cx, mouthY, Math.cos(a) * spd, Math.sin(a) * spd, 9);
          }
          b.burstCooldown = 1.15;
          this.engine.audio.playPulse1(440, { duration: 0.08, volume: 0.12, isMusic: false });
        }
      } else if (b.patternPhase === 1) {
        if (b.shootT > 0.055) {
          b.shootT = 0;
          const spd = 142;
          for (let k = 0; k < 2; k++) {
            const a = b.spiralAngle + k * Math.PI;
            this._minibossBullet(cx, mouthY, Math.cos(a) * spd, Math.sin(a) * spd, 8);
          }
          b.spiralAngle += 0.28;
          if (Math.random() < 0.12) {
            this.engine.audio.playPulse1(620, { duration: 0.04, volume: 0.08, isMusic: false });
          }
        }
      } else {
        if (b.burstCooldown <= 0) {
          const dx = this.ship.x + 14 - cx, dy = this.ship.y + 14 - mouthY;
          const ang = Math.atan2(dy, dx);
          const spd = 178;
          for (let i = -2; i <= 2; i++) {
            const a = ang + i * 0.22;
            this._minibossBullet(cx, mouthY, Math.cos(a) * spd, Math.sin(a) * spd, 9);
          }
          for (const s of [-1, 1]) {
            this._minibossBullet(cx, mouthY, -58, s * 92, 8);
          }
          b.burstCooldown = 0.55;
          this.engine.audio.playPulse1(300, { duration: 0.09, volume: 0.14, slide: 80, isMusic: false });
        }
      }
    }
    // Miniboss 2: CYCLOPS-EGG
    _updateCyclopsEgg(b, dt) {
      b.patternTimer += dt;
      if (b.patternTimer > 6.5) {
        b.patternTimer = 0;
        b.patternPhase = (b.patternPhase + 1) % 3;
        b.burstCooldown = 0;
      }
      b.shootT += dt;
      b.burstCooldown -= dt;
      const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
      const eyeY = cy - 4;
      if (b.patternPhase === 0) {
        if (b.burstCooldown <= 0) {
          const dx = this.ship.x + 14 - cx, dy = this.ship.y + 14 - eyeY;
          const ang = Math.atan2(dy, dx);
          const spd = 205;
          for (let k = 0; k < 3; k++) {
            setTimeout(() => {
              if (this.miniboss === b) {
                this._minibossBullet(cx - 10, eyeY, Math.cos(ang) * spd, Math.sin(ang) * spd, 9);
              }
            }, k * 120);
          }
          b.burstCooldown = 1.05;
          this.engine.audio.playPulse1(780, { duration: 0.08, volume: 0.14, isMusic: false });
        }
      } else if (b.patternPhase === 1) {
        if (b.burstCooldown <= 0) {
          for (const side of [-1, 1]) {
            for (let i = 0; i < 4; i++) {
              const vy = side * (75 + i * 35);
              const vx = -(95 + Math.random() * 45);
              this._minibossBullet(cx, cy + side * 24, vx, vy, 8);
            }
          }
          b.burstCooldown = 0.85;
          this.engine.audio.playPulse1(480, { duration: 0.08, volume: 0.12, slide: -120, isMusic: false });
        }
      } else {
        if (b.burstCooldown <= 0) {
          const n = 12, spd = 145;
          for (let i = 0; i < n; i++) {
            const a = i / n * Math.PI * 2 + b.t * 0.8;
            this._minibossBullet(cx, eyeY, Math.cos(a) * spd, Math.sin(a) * spd, 8);
          }
          b.burstCooldown = 1.25;
          this.engine.audio.playPulse1(540, { duration: 0.1, volume: 0.15, isMusic: false });
        }
      }
    }
    // Miniboss 3: NEON-SLIME
    _updateNeonSlime(b, dt) {
      b.patternTimer += dt;
      if (b.patternTimer > 6.8) {
        b.patternTimer = 0;
        b.patternPhase = (b.patternPhase + 1) % 3;
        b.burstCooldown = 0;
      }
      b.shootT += dt;
      b.burstCooldown -= dt;
      const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
      if (b.patternPhase === 0) {
        if (b.burstCooldown <= 0) {
          for (let k = -2; k <= 2; k++) {
            const vx = -130 - Math.abs(k) * 15;
            const vy = k * 55;
            this._minibossBullet(cx - 15, cy + 10, vx, vy, 11);
          }
          b.burstCooldown = 0.95;
          this.engine.audio.playPulse1(220, { duration: 0.12, volume: 0.18, slide: 120, isMusic: false });
        }
      } else if (b.patternPhase === 1) {
        if (b.burstCooldown <= 0) {
          const n = 14, spd = 138;
          for (let i = 0; i < n; i++) {
            const a = i / n * Math.PI * 2 + Math.sin(b.t * 2) * 0.4;
            this._minibossBullet(cx, cy, Math.cos(a) * spd, Math.sin(a) * spd, 8);
          }
          b.burstCooldown = 1.15;
          this.engine.audio.playPulse1(340, { duration: 0.1, volume: 0.14, isMusic: false });
        }
      } else {
        if (b.shootT > 0.18) {
          b.shootT = 0;
          const dx = this.ship.x + 14 - cx, dy = this.ship.y + 14 - cy;
          const ang = Math.atan2(dy, dx);
          const spd = 160;
          const spread = (Math.random() - 0.5) * 0.45;
          this._minibossBullet(cx - 20, cy + 14, Math.cos(ang + spread) * spd, Math.sin(ang + spread) * spd, 9);
          if (Math.random() < 0.25) {
            this.engine.audio.playPulse1(400, { duration: 0.04, volume: 0.08, isMusic: false });
          }
        }
      }
    }
    // Miniboss 4: SAW-SPINNER
    _updateSawSpinner(b, dt) {
      b.patternTimer += dt;
      if (b.patternTimer > 7) {
        b.patternTimer = 0;
        b.patternPhase = (b.patternPhase + 1) % 3;
        b.burstCooldown = 0;
      }
      b.shootT += dt;
      b.burstCooldown -= dt;
      const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
      if (b.patternPhase === 0) {
        if (b.burstCooldown <= 0) {
          const dx = this.ship.x + 14 - cx, dy = this.ship.y + 14 - cy;
          const ang = Math.atan2(dy, dx);
          const spd = 215;
          for (let i = -1; i <= 1; i++) {
            const a = ang + i * 0.24;
            this._minibossBullet(cx - 15, cy + 18, Math.cos(a) * spd, Math.sin(a) * spd, 10);
          }
          b.burstCooldown = 0.72;
          this.engine.audio.playPulse1(650, { duration: 0.08, volume: 0.16, slide: -180, isMusic: false });
        }
      } else if (b.patternPhase === 1) {
        if (b.shootT > 0.065) {
          b.shootT = 0;
          const n = 4, spd = 152;
          for (let i = 0; i < n; i++) {
            const a = b.spiralAngle + i / n * Math.PI * 2;
            this._minibossBullet(cx, cy, Math.cos(a) * spd, Math.sin(a) * spd, 8);
          }
          b.spiralAngle += 0.38;
          if (Math.random() < 0.15) {
            this.engine.audio.playPulse1(850, { duration: 0.03, volume: 0.08, isMusic: false });
          }
        }
      } else {
        if (b.burstCooldown <= 0) {
          const n = 10, spd = 168;
          for (let i = 0; i < n; i++) {
            const a = i / n * Math.PI + Math.PI / 2;
            this._minibossBullet(cx - 10, cy, Math.cos(a) * spd, Math.sin(a) * spd, 9);
          }
          b.burstCooldown = 0.95;
          this.engine.audio.playPulse1(320, { duration: 0.12, volume: 0.18, isMusic: false });
        }
      }
    }
    // FASE 3: Boss update logic
    _updateBoss(b, dt) {
      b.t = (b.t || 0) + dt;
      b.patternTimer = (b.patternTimer || 0) + dt;
      if (b._hitFlash) {
        b._hitFlash -= dt;
      }
      const gap = this.getGapAtX(b.x + b.w / 2);
      const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
      b.y = Math.max(gap.top + 20, Math.min(gap.bottom - b.h - 20, b.y + Math.sin(b.t * 0.5) * 15));
      switch (b.type) {
        case "BOSS_VOID_CORE":
          this._updateVoidCoreBoss(b, dt, cx, cy);
          break;
        case "BOSS_BOMBER_PRIME":
          this._updateBomberPrimeBoss(b, dt, cx, cy);
          break;
        case "BOSS_FORTRESS_CORE":
          this._updateFortressCoreBoss(b, dt, cx, cy);
          break;
      }
    }
    _updateVoidCoreBoss(b, dt, cx, cy) {
      b.phase = b.phase || "phase1";
      if (b.hp < b.maxHp * 0.66 && b.phase === "phase1") {
        b.phase = "phase2";
        b.patternTimer = 0;
      }
      if (b.hp < b.maxHp * 0.33 && b.phase === "phase2") {
        b.phase = "phase3";
        b.patternTimer = 0;
      }
      if (b.phase === "phase1") {
        if (b.patternTimer > 0.8) {
          b.patternTimer = 0;
          for (let i = 0; i < 12; i++) {
            const a = b.t * 2 + i * Math.PI / 6;
            this._minibossBullet(cx, cy, Math.cos(a) * 160, Math.sin(a) * 160, 8);
          }
          this.engine.audio.playPulse1(220, { duration: 0.05, volume: 0.1, isMusic: false });
        }
      } else if (b.phase === "phase2") {
        if (b.patternTimer > 1.2) {
          b.patternTimer = 0;
          const ang = Math.atan2(this.ship.y - cy, this.ship.x - cx);
          for (let i = -2; i <= 2; i++) {
            this._minibossBullet(cx, cy, Math.cos(ang + i * 0.15) * 200, Math.sin(ang + i * 0.15) * 200, 9);
          }
          for (let i = 0; i < 8; i++) {
            const a = i * Math.PI / 4;
            this.enemyBullets.push({ x: cx, y: cy, vx: Math.cos(a) * 80, vy: Math.sin(a) * 80, w: 10, h: 10, life: 8, isEnemy: true, orbit: true, orbitCenterX: cx, orbitCenterY: cy, orbitRadius: 100, orbitAngle: a });
          }
          this.engine.audio.playPulse1(180, { duration: 0.08, volume: 0.12, isMusic: false });
        }
      } else {
        if (b.patternTimer > 0.5) {
          b.patternTimer = 0;
          for (let i = 0; i < 16; i++) {
            const a = Math.random() * Math.PI * 2;
            this._minibossBullet(cx, cy, Math.cos(a) * 180, Math.sin(a) * 180, 8);
          }
          this.engine.audio.playPulse1(150, { duration: 0.04, volume: 0.15, isMusic: false });
        }
      }
    }
    _updateBomberPrimeBoss(b, dt, cx, cy) {
      b.phase = b.phase || "phase1";
      if (b.hp < b.maxHp * 0.66 && b.phase === "phase1") {
        b.phase = "phase2";
        b.patternTimer = 0;
      }
      if (b.hp < b.maxHp * 0.33 && b.phase === "phase2") {
        b.phase = "phase3";
        b.patternTimer = 0;
      }
      if (b.phase === "phase1") {
        if (b.patternTimer > 1) {
          b.patternTimer = 0;
          for (let i = -3; i <= 3; i++) {
            this._minibossBullet(cx - 40 + i * 20, cy + 30, 0, 220, 10);
          }
          this.engine.audio.playPulse1(120, { duration: 0.1, volume: 0.15, isMusic: false });
        }
      } else if (b.phase === "phase2") {
        if (b.patternTimer > 1.5) {
          b.patternTimer = 0;
          const ang = Math.atan2(this.ship.y - cy, this.ship.x - cx);
          for (let i = 0; i < 6; i++) {
            this._minibossBullet(cx, cy, Math.cos(ang + i * 0.3) * 180, Math.sin(ang + i * 0.3) * 180, 11);
          }
          for (let i = 0; i < 2; i++) {
            this.enemies.push({
              type: "BOMBER",
              x: 680,
              y: 150 + i * 180,
              w: 56,
              h: 28,
              hp: 6,
              maxHp: 6,
              vx: 70,
              vy: 0,
              t: 0,
              pattern: "sine",
              color: 23,
              score: 300,
              amp: 20,
              freq: 1.8
            });
          }
          this.engine.audio.playPulse1(100, { duration: 0.12, volume: 0.18, isMusic: false });
        }
      } else {
        if (b.patternTimer > 0.6) {
          b.patternTimer = 0;
          for (let i = 0; i < 20; i++) {
            const a = Math.random() * Math.PI * 2;
            this._minibossBullet(cx, cy, Math.cos(a) * 150, Math.sin(a) * 150, 9);
          }
          this.engine.audio.playPulse1(80, { duration: 0.06, volume: 0.2, isMusic: false });
        }
      }
    }
    _updateFortressCoreBoss(b, dt, cx, cy) {
      b.phase = b.phase || "phase1";
      if (b.hp < b.maxHp * 0.75 && b.phase === "phase1") {
        b.phase = "phase2";
        b.patternTimer = 0;
      }
      if (b.hp < b.maxHp * 0.5 && b.phase === "phase2") {
        b.phase = "phase3";
        b.patternTimer = 0;
      }
      if (b.hp < b.maxHp * 0.25 && b.phase === "phase3") {
        b.phase = "final";
        b.patternTimer = 0;
      }
      if (b.phase === "phase1") {
        if (b.patternTimer > 0.4) {
          b.patternTimer = 0;
          for (let i = 0; i < 4; i++) {
            const a = b.t * 3 + i * Math.PI / 2;
            this._minibossBullet(cx + Math.cos(a) * 60, cy + Math.sin(a) * 60, Math.cos(a) * 200, Math.sin(a) * 200, 10);
          }
          this.engine.audio.playPulse1(200, { duration: 0.04, volume: 0.1, isMusic: false });
        }
      } else if (b.phase === "phase2") {
        if (b.patternTimer > 1) {
          b.patternTimer = 0;
          for (const y of [cy - 40, cy, cy + 40]) {
            this.enemyBullets.push({ x: 700, y, vx: -400, vy: 0, w: 80, h: 6, life: 2.5, isEnemy: true, isLaser: true, color: 26 });
          }
          this.engine.audio.playPulse1(160, { duration: 0.15, volume: 0.15, isMusic: false });
        }
      } else if (b.phase === "phase3") {
        if (b.patternTimer > 2) {
          b.patternTimer = 0;
          for (let i = 0; i < 3; i++) {
            this.enemies.push({
              type: "STALKER",
              x: 680,
              y: 100 + i * 120,
              w: 40,
              h: 22,
              hp: 4,
              maxHp: 4,
              vx: 100,
              vy: 80,
              t: 0,
              pattern: "stalker",
              color: 27,
              score: 400
            });
          }
          this.engine.audio.playPulse1(140, { duration: 0.1, volume: 0.12, isMusic: false });
        }
      } else {
        if (b.patternTimer > 0.3) {
          b.patternTimer = 0;
          for (let i = 0; i < 24; i++) {
            const a = i * Math.PI / 12;
            this._minibossBullet(cx, cy, Math.cos(a) * 180, Math.sin(a) * 180, 9);
          }
          this.engine.audio.playPulse1(100, { duration: 0.05, volume: 0.2, isMusic: false });
        }
      }
    }
    _minibossBullet(x, y, vx, vy, sz = 8) {
      this.enemyBullets.push({ x, y, vx, vy, w: sz, h: sz, life: 5.8, isEnemy: true, isMiniboss: true, grazed: false });
    }
    explode(x, y, base = 2, n = 9) {
      for (let i = 0; i < n; i++) {
        this.particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 310,
          vy: (Math.random() - 0.5) * 310,
          life: 0.26 + Math.random() * 0.34,
          maxLife: 0.6,
          c: base
        });
      }
      this.engine.audio.playNoise({ duration: 0.13, volume: 0.15, isMusic: false });
      this.engine.audio.playPulse1(110, { duration: 0.09, volume: 0.19, isMusic: false });
    }
    // Despliega una cápsula de mejora al ser destruido un enemigo portador.
    spawnCapsule(x, y) {
      this.capsules.push({
        x,
        y: y - 8,
        vx: -48,
        // va lentamente hacia la izquierda
        t: 0
        // timer para animación de bote
      });
      this.engine.audio.playPulse1(1046, { duration: 0.12, volume: 0.2, slide: 200, duty: 0.125, isMusic: false });
    }
    killShip() {
      if ((this.ship.iframes || 0) > 0) {
        return;
      }
      this.noMissWave = false;
      this.consecutiveNoMissWaves = 0;
      const cx = this.ship.x + this.ship.w / 2;
      const cy = this.ship.y + this.ship.h / 2;
      this.explode(cx, cy, 25, 24);
      this.engine.audio.sfxExplosion();
      this.lives--;
      this.pwr.reset();
      if (this._adPrevMusic === void 0 || this._adPrevMusic < 0.1) {
        this._adPrevMusic = this.engine.audio && this.engine.audio.musicVolume > 0.1 ? this.engine.audio.musicVolume : 0.9;
        this._adPrevSfx = this.engine.audio && this.engine.audio.sfxVolume > 0.1 ? this.engine.audio.sfxVolume : 1;
      }
      this.stopMusicLoop();
      try {
        this.engine.audio.setMusicVolume(0);
      } catch (e) {
      }
      if (this.lives <= 0) {
        this.gameOver = true;
        this.capsules = [];
        this.bullets = [];
        this.enemyBullets = [];
        this.enemies = [];
        this._finalizeRun();
        if (this.engine.sdk) {
          this.engine.sdk.submitScore(this.score);
        }
        console.log("[PALUGO] Game Over - pausing game before ad");
        this.engine.paused = true;
        try {
          if (this.engine.audio.ctx && this.engine.audio.ctx.state === "running") {
            this.engine.audio.ctx.suspend().catch(() => {
            });
          }
        } catch (e) {
        }
        if (this.engine.sdk) {
          this.engine.sdk.showInterstitial({
            placement: "gameover",
            onClose: () => {
              console.log("[PALUGO] Ad closed - resuming game");
              this.engine.paused = false;
              if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
                this.engine.audio.ctx.resume().catch(() => {
                });
              }
            },
            onError: () => {
              console.log("[PALUGO] Ad error - resuming game");
              this.engine.paused = false;
              if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
                this.engine.audio.ctx.resume().catch(() => {
                });
              }
            }
          });
        } else {
          this.engine.paused = false;
        }
      } else {
        this.awaitingContinue = true;
      }
    }
    _doContinueRespawn() {
      const doRespawn = () => {
        if (this.engine) {
          this.engine.paused = false;
          if (this.engine.sdk) {
            this.engine.sdk.forceResume();
          }
        }
        const prevMusic = this._adPrevMusic !== void 0 && this._adPrevMusic > 0.1 ? this._adPrevMusic : 0.9;
        const prevSfx = this._adPrevSfx !== void 0 && this._adPrevSfx > 0.1 ? this._adPrevSfx : 1;
        this._adPrevMusic = void 0;
        this._adPrevSfx = void 0;
        if (this.engine && this.engine.audio) {
          this.engine.audio.setMusicVolume(prevMusic);
          this.engine.audio.setSfxVolume(prevSfx);
          if (typeof this.engine.audio.resume === "function") {
            this.engine.audio.resume();
          } else if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
            this.engine.audio.ctx.resume().catch(() => {
            });
          }
        }
        this.awaitingContinue = false;
        this.respawnTimer = 3;
        this.ship.iframes = 2.8;
        this.ship.x = 80;
        this.ship.y = 240;
        this._triggerContinue();
        if (this.miniboss) {
          this.enemies = this.enemies.filter((e) => e.isMiniboss);
          this.bullets = [];
          this.enemyBullets = [];
          this.pwr.missiles = [];
        } else {
          this.enemies = [];
          this.bullets = [];
          this.enemyBullets = [];
          this.pwr.missiles = [];
        }
        this.spawnTimer = 0;
        if (this.waveGenerator && this.minibossState === "waves") {
          this.waveGenerator.cooldown = 1.2;
        }
        this.startMusicLoop();
      };
      if (this.engine.sdk) {
        console.log("[PALUGO] Continue - pausing game before rewarded ad");
        this.engine.paused = true;
        try {
          if (this.engine.audio.ctx && this.engine.audio.ctx.state === "running") {
            this.engine.audio.ctx.suspend().catch(() => {
            });
          }
        } catch (e) {
        }
        this.engine.sdk.showRewarded({
          placement: "rewarded_continue",
          onRewarded: () => {
            console.log("[PALUGO] Rewarded ad completed - resuming");
            this.engine.paused = false;
            doRespawn();
            if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
              this.engine.audio.ctx.resume().catch(() => {
              });
            }
          },
          onClose: () => {
            console.log("[PALUGO] Rewarded ad closed - resuming");
            this.engine.paused = false;
            doRespawn();
            if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
              this.engine.audio.ctx.resume().catch(() => {
              });
            }
          },
          onError: () => {
            console.log("[PALUGO] Rewarded ad error - resuming");
            this.engine.paused = false;
            doRespawn();
            if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
              this.engine.audio.ctx.resume().catch(() => {
              });
            }
          }
        });
      } else {
        doRespawn();
      }
    }
    // ── UPDATE ──────────────────────────────────────────────────────────────────
    update(inputs, dt) {
      if (this.gameOver) {
        this._updateGameOver(inputs);
        return;
      }
      if (this.respawnTimer > 0) {
        this._updateRespawn(dt);
        return;
      }
      if (this.awaitingContinue) {
        this._updateAwaitingContinue(inputs, dt);
        return;
      }
      this._updatePlayer(inputs, dt);
      this._updatePlayerFire(inputs, dt);
      this._updatePowerups(dt);
      this._updateBackground(dt);
      this._updateStructuresAndObstacles(dt);
      this._updateMinibossAndWaves(dt);
      this._updateSpawnSystemAndEnemies(dt);
      this._updateBullets(dt);
      this._updateEnemyBullets(dt);
      this._updateBulletObstacleCollisions();
      this._updateBulletEnemyCollisions();
      this._updateMissileEnemyCollisions();
      this._updatePlayerEnemyCollisions();
      this._updateCapsules(dt);
      this._updateParticles(dt);
      this._updateScoreSystem(dt);
      this._updateUnlockNotifications(dt);
      this._checkAchievements();
      this._updateAchievementNotifications(dt);
      this._handleGDPRInput(inputs);
      this._updateTutorial(dt);
      this.animTimer += dt;
    }
    // ── Update Helpers ────────────────────────────────────────────────────────
    _formatTime(sec) {
      const s = Math.max(0, Math.floor(sec));
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    }
    _submitScore(name, score, timeStr) {
      const payload = { nombre: name, score, tiempo: timeStr, name, time: timeStr };
      fetch(getRankingSaveUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then((r) => r.json()).then((data) => {
        if (data.success) {
          this._rankingStatus = `Saved #${data.rank || "?"}`;
        } else {
          this._rankingStatus = data.message || "Error";
        }
        this._rankingSaved = true;
        if (this.engine && this.engine._menu) {
          this.engine._menu._rankingFetched = false;
        }
      }).catch(() => {
        const fd = new FormData();
        fd.append("nombre", name);
        fd.append("score", String(score));
        fd.append("tiempo", timeStr);
        fetch(getRankingSaveUrl(), { method: "POST", body: fd }).then((r) => r.json()).then((d) => {
          this._rankingStatus = d.success ? `Saved #${d.rank || "?"}` : d.message || "Error";
          this._rankingSaved = true;
        }).catch(() => {
          this._rankingStatus = "No connection";
          this._rankingSaved = true;
        });
      });
    }
    _trySubmitRanking() {
      if (this._scoreSubmitted || this.score <= 0) {
        return;
      }
      this._scoreSubmitted = true;
      const pilotName = this.pilotName || "PLR";
      this._rankingName = pilotName;
      this._rankingStatus = "Saving...";
      this._submitScore(pilotName, this.score, this._formatTime(this.gameTime));
      this._rankingSaved = true;
    }
    _handleNameEntry(inputs) {
      if (!this._nameEntryActive) return false;
      if (inputs.btnB || this.engine.input.justPressedKeyCode("Backspace")) {
        if (this._nameEntryBuffer.length > 0) {
          this._nameEntryBuffer = this._nameEntryBuffer.slice(0, -1);
          this._nameEntryCursor = this._nameEntryBuffer.length;
        }
        return true;
      }
      const keyMap = {
        "KeyA": "A",
        "KeyB": "B",
        "KeyC": "C",
        "KeyD": "D",
        "KeyE": "E",
        "KeyF": "F",
        "KeyG": "G",
        "KeyH": "H",
        "KeyI": "I",
        "KeyJ": "J",
        "KeyK": "K",
        "KeyL": "L",
        "KeyM": "M",
        "KeyN": "N",
        "KeyO": "O",
        "KeyP": "P",
        "KeyQ": "Q",
        "KeyR": "R",
        "KeyS": "S",
        "KeyT": "T",
        "KeyU": "U",
        "KeyV": "V",
        "KeyW": "W",
        "KeyX": "X",
        "KeyY": "Y",
        "KeyZ": "Z",
        "Digit0": "0",
        "Digit1": "1",
        "Digit2": "2",
        "Digit3": "3",
        "Digit4": "4",
        "Digit5": "5",
        "Digit6": "6",
        "Digit7": "7",
        "Digit8": "8",
        "Digit9": "9",
        "Space": " ",
        "Minus": "-",
        "Equal": "_"
      };
      for (const [keyCode, char] of Object.entries(keyMap)) {
        if (this.engine.input.justPressedKeyCode(keyCode) && this._nameEntryBuffer.length < 8) {
          this._nameEntryBuffer += char;
          this._nameEntryCursor = this._nameEntryBuffer.length;
          return true;
        }
      }
      if (inputs.btnA || inputs.btnStart) {
        const name = this._nameEntryBuffer.trim().slice(0, 8).toUpperCase().replace(/[^A-Z0-9 _-]/g, "") || "PLR";
        try {
          localStorage.setItem("palugo_lastname", name);
        } catch {
        }
        this._rankingName = name;
        this._rankingStatus = "Saving...";
        this._submitScore(name, this.score, this._formatTime(this.gameTime));
        this._nameEntryActive = false;
        this._nameEntryBuffer = "";
        this._nameEntryCursor = 0;
        this._rankingSaved = true;
        return true;
      }
      if (this.engine.input.justPressed("btnPause") || this.engine.input.justPressedKeyCode("Escape")) {
        this._rankingStatus = "Cancelled";
        this._nameEntryActive = false;
        this._nameEntryBuffer = "";
        this._nameEntryCursor = 0;
        this._rankingSaved = true;
        return true;
      }
      return true;
    }
    _updateGameOver(inputs) {
      if (!this._scoreSubmitted && this.score > 0) {
        this._trySubmitRanking();
      }
      if (this._rankingSaved) {
        if (this.engine.input.justPressed("up") || this.engine.input.justPressed("down")) {
          this._gameOverMenuSelection = (this._gameOverMenuSelection + 1) % 2;
          this.engine.audio.sfxSelect();
        }
        if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnStart")) {
          if (this._gameOverMenuSelection === 0) {
            this._reset();
            try {
              this.engine.audio.setMusicVolume(0.9);
              this.engine.audio.setSfxVolume(1);
              if (typeof this.engine.audio.resume === "function") {
                this.engine.audio.resume();
              } else if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
                this.engine.audio.ctx.resume().catch(() => {
                });
              }
            } catch (e) {
            }
            this.startMusicLoop();
          } else {
            this.engine._menu.state = "title";
            this.engine._menu.selTitle = 0;
            this.engine._menu._startMenuMusic();
          }
        }
        return;
      }
      if (this.tutorial.active) {
        if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnB") || this.engine.input.justPressed("btnStart") || this.engine.input.justPressed("up") || this.engine.input.justPressed("down") || this.engine.input.justPressed("left") || this.engine.input.justPressed("right")) {
          this.tutorial.step++;
          this.tutorial.timer = 0;
          if (this.tutorial.step >= this.tutorial.steps.length) {
            this._completeTutorial();
          }
        }
        return;
      }
      if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnB") || this.engine.input.justPressed("btnStart")) {
        this._reset();
        try {
          this.engine.audio.setMusicVolume(0.9);
          this.engine.audio.setSfxVolume(1);
          if (typeof this.engine.audio.resume === "function") {
            this.engine.audio.resume();
          } else if (this.engine.audio.ctx && this.engine.audio.ctx.state === "suspended") {
            this.engine.audio.ctx.resume().catch(() => {
            });
          }
        } catch (e) {
        }
        this.startMusicLoop();
      }
    }
    _updateRespawn(dt) {
      this.respawnTimer -= dt;
      for (const s of this.stars) {
        s.x -= s.s * 70 * dt;
        if (s.x < 0) {
          s.x = 640;
          s.y = Math.random() * 480;
        }
      }
      for (const p of this.particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        p.vx *= 0.98;
        p.vy *= 0.98;
      }
      this.particles = this.particles.filter((p) => p.life > 0);
      this.animTimer += dt;
    }
    _updateAwaitingContinue(inputs, dt) {
      if (this.awaitingContinue === true) {
        for (const s of this.stars) {
          s.x -= s.s * 18 * dt;
          if (s.x < 0) {
            s.x = 640;
            s.y = Math.random() * 480;
          }
        }
        for (const p of this.particles) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.life -= dt;
          p.vx *= 0.98;
          p.vy *= 0.98;
        }
        this.particles = this.particles.filter((p) => p.life > 0);
        this.animTimer += dt;
        if (this.engine.input.justPressed("btnA") || this.engine.input.justPressed("btnB") || this.engine.input.justPressed("btnStart")) {
          this.awaitingContinue = "ad";
          try {
            this.engine.audio.setMusicVolume(0);
            this.engine.audio.setSfxVolume(0);
          } catch {
          }
          const doRespawn = () => this._doContinueRespawn();
          try {
            if (this.engine.sdk) {
              this.engine.sdk.showInterstitial({ onClose: doRespawn, onError: doRespawn });
            } else {
              doRespawn();
            }
          } catch (e) {
            doRespawn();
          }
          setTimeout(() => {
            if (this.awaitingContinue === "ad") {
              doRespawn();
            }
          }, 4e3);
        }
      }
    }
    _updatePlayer(inputs, dt) {
      let mx = 0, my = 0;
      if (inputs.left) {
        mx -= 1;
      }
      if (inputs.right) {
        mx += 1;
      }
      if (inputs.up) {
        my -= 1;
      }
      if (inputs.down) {
        my += 1;
      }
      this.ship.x += mx * this.speed * dt;
      this.ship.y += my * this.speed * dt;
      this.ship.x = Math.max(8, Math.min(640 - this.ship.w - 8, this.ship.x));
      const gap = this.getGapAtX(this.ship.x + this.ship.w / 2);
      this.ship.y = Math.max(gap.top + 1, Math.min(gap.bottom - this.ship.h - 1, this.ship.y));
      if ((this.ship.iframes || 0) > 0) {
        this.ship.iframes -= dt;
      }
    }
    _updatePlayerFire(inputs, dt) {
      this.fireCooldown -= dt;
      const wantFire = inputs.btnA;
      let rate = this.fireRate;
      if (this.pwr.effects.laserActive) {
        rate = this.laserRate;
      }
      if (wantFire && this.fireCooldown <= 0) {
        this.fireBullet();
        this.fireCooldown = rate;
      }
      if (this.engine.input.justPressed("btnB")) {
        this.pwr.activate(this);
      }
      if (this.pwr.shouldFireMissile()) {
        const tip = this.getShipTip();
        this.pwr.spawnMissile(tip.x, tip.y);
        this.engine.audio.playPulse1(330, { duration: 0.1, volume: 0.14, slide: 100, duty: 0.5, isMusic: false });
      }
    }
    _updatePowerups(dt) {
      this.pwr.update(dt, this.ship);
    }
    _updateBackground(dt) {
      for (const s of this.stars) {
        s.x -= s.s * 70 * dt;
        if (s.x < 0) {
          s.x = 640;
          s.y = Math.random() * 480;
        }
      }
      for (const p of this.planets) {
        p.x -= 20 * dt;
      }
      this.planets = this.planets.filter((p) => p.x > -150);
      this.planetTimer -= dt;
      if (this.planetTimer <= 0) {
        this.spawnPlanet();
        this.planetTimer = 22 + Math.random() * 18;
      }
      this.sunTimer -= dt;
      if (this.sunTimer <= 0) {
        this.spawnSun();
        this.sunTimer = 50 + Math.random() * 25;
      }
    }
    _updateStructuresAndObstacles(dt) {
      for (const seg of this.structures) {
        seg.x -= this.structSpeed * dt;
      }
      this.structures = this.structures.filter((s) => s.x + s.w > -40);
      this.structTimer -= dt;
      if (this.structTimer <= 0) {
        this.spawnStructure();
        this.structTimer = 4.2 + Math.random() * 3.5;
      }
      this.obstacleTimer -= dt;
      if (this.obstacleTimer <= 0 && this.minibossState === "waves") {
        this.spawnObstacle();
        this.obstacleTimer = 6.5 + Math.random() * 4.5;
      }
      for (const ob of this.obstacles) {
        ob.x += ob.vx * dt;
        ob.rot += ob.vrot * dt;
        if (ob._hitFlash > 0) {
          ob._hitFlash -= dt;
        }
        if ((this.ship.iframes || 0) <= 0 && this.respawnTimer <= 0 && !this.gameOver) {
          const sx = this.ship.x + 4, sy = this.ship.y + 2, sw = this.ship.w - 8, sh = this.ship.h - 4;
          if (sx + sw > ob.x && sx < ob.x + ob.w && sy + sh > ob.y && sy < ob.y + ob.h) {
            this.killShip();
          }
        }
      }
      this.obstacles = this.obstacles.filter((ob) => ob.x + ob.w > -40);
    }
    _updateMinibossAndWaves(dt) {
      let BOSS_TRIGGER = 120;
      if (this.spawnSystem && this.spawnSystem.useTimeline && this.spawnSystem.timeline && this.spawnSystem.timeline.events.length) {
        const lastEv = this.spawnSystem.timeline.events[this.spawnSystem.timeline.events.length - 1];
        BOSS_TRIGGER = (lastEv.time || 42) + 8;
      }
      if (this.minibossState === "waves") {
        if (this.gameTime >= BOSS_TRIGGER) {
          this.minibossState = "warning";
          this.minibossWarning = 3;
          this.engine.audio.playPulse1(180, { duration: 0.6, volume: 0.25, slide: -60, isMusic: false });
        } else if (this.spawnSystem && this.spawnSystem.useTimeline) {
        } else {
          if (this.waveGenerator) {
            this.waveGenerator.tick(dt);
            if (this.waveGenerator.shouldGenerateWave()) {
              this.waveGenerator.generateWave();
            }
          } else {
            this.spawnTimer -= dt;
            if (this.spawnTimer <= 0) {
              this.spawnWave();
              this.spawnTimer = 2.8 + Math.random() * 1.6;
            }
          }
        }
      } else if (this.minibossState === "warning") {
        this.minibossWarning -= dt;
        if (this.minibossWarning <= 0) {
          this.spawnMiniboss();
        }
      } else if (this.minibossState === "defeated") {
        this.stageClearTimer -= dt;
        if (this.stageClearTimer <= 0) {
          try {
            this.wave++;
            this.gameTime = 0;
            this.minibossState = "waves";
            this.enemies = [];
            this.enemyBullets = [];
            this.obstacles = [];
            if (this.waveGenerator) {
              this.waveGenerator.reset();
            }
            if (this.spawnSystem) {
              this.spawnSystem.reset();
              const lvlIdx = this.wave % LEVEL_TIMELINES.length | 0;
              this.spawnSystem.loadTimeline(LEVEL_TIMELINES[lvlIdx]);
            }
            this.engine.audio.playPulse1(880, { duration: 0.2, volume: 0.2, isMusic: false });
            this._triggerWaveClear();
          } catch (e) {
            console.error("Error al reiniciar oleada:", e);
            this.wave++;
            this.gameTime = 0;
            this.minibossState = "waves";
            this.enemies = [];
            this.enemyBullets = [];
            this.obstacles = [];
            if (this.waveGenerator) {
              this.waveGenerator.reset();
            }
            if (this.spawnSystem) {
              this.spawnSystem.reset();
              try {
                const lvlIdx = this.wave % LEVEL_TIMELINES.length | 0;
                this.spawnSystem.loadTimeline(LEVEL_TIMELINES[lvlIdx]);
              } catch (e2) {
                console.error("Error al cargar timeline:", e2);
              }
            }
            this._triggerWaveClear();
          }
        }
      }
      this.wormTimer -= dt;
      if (this.wormTimer <= 0 && this.minibossState === "waves") {
        this.spawnInterceptorWorm();
        this.wormTimer = 18 + Math.random() * 12;
      }
      this.gameTime += dt;
    }
    _updateSpawnSystemAndEnemies(dt) {
      if (this.spawnSystem) {
        this.spawnSystem.update(dt);
        if (this.spawnSystem.useTimeline && this.spawnSystem.timeline) {
          this.gameTime = this.spawnSystem.timeline.currentTime;
          if (this.spawnSystem.isTimelineFinished() && this.minibossState === "waves") {
            if (this.enemies.length === 0) {
              this.spawnSystem.disableTimeline();
              this.waveGenerator.cooldown = 0.5;
            } else if (this.gameTime > 45) {
              const aliveTimeline = this.enemies.filter((e) => e.squadId).length;
              if (aliveTimeline <= 2) {
                this.minibossState = "warning";
                this.minibossWarning = 3;
                this.engine.audio.playPulse1(180, { duration: 0.6, volume: 0.25, slide: -60, isMusic: false });
              }
            }
          }
        }
      }
      this._scaleNewEnemies();
      for (const e of this.enemies) {
        e.t = (e.t || 0) + dt;
        if (e._hitFlash) {
          e._hitFlash -= dt;
        }
        if (e._damageCooldown) {
          e._damageCooldown -= dt;
        }
        if (e.isMiniboss) {
          this._updateMiniboss(e, dt);
          continue;
        }
        if (e.isBoss) {
          this._updateBoss(e, dt);
          continue;
        }
        const gap = this.getGapAtX(e.x + e.w / 2);
        if (e.pattern === "zigzag") {
          e.x -= e.vx * dt;
          e.y += (e.vy || 60) * dt;
          if (e.y < gap.top + 4) {
            e.y = gap.top + 4;
            e.vy = Math.abs(e.vy || 60);
          }
          if (e.y > gap.bottom - e.h - 4) {
            e.y = gap.bottom - e.h - 4;
            e.vy = -Math.abs(e.vy || 60);
          }
        } else if (e.pattern === "sine") {
          e.x -= e.vx * dt;
          const maxAmp = Math.max(4, (gap.bottom - gap.top - e.h - 12) / 2);
          const effAmp = Math.min(e.amp || 26, maxAmp);
          const safeBaseY = Math.max(gap.top + effAmp + 4, Math.min(gap.bottom - e.h - effAmp - 4, e.baseY || (gap.top + gap.bottom - e.h) / 2));
          e.y = safeBaseY + Math.sin(e.t * (e.freq || 2.2)) * effAmp;
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern === "hunter") {
          e.x -= e.vx * dt;
          const targetY = this.ship.y + (e.hunterOffset || 0);
          if (e.y < targetY - 4) {
            e.y += 65 * dt;
          } else if (e.y > targetY + 4) {
            e.y -= 65 * dt;
          }
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern === "stalker") {
          e.stalkTimer = (e.stalkTimer || 0) + dt;
          if (e.stalkTimer > 3 && e.x < 500) {
            e.stalkTimer = 0;
            const behindX = this.ship.x + 80;
            const behindY = this.ship.y + (Math.random() - 0.5) * 60;
            e.x = Math.min(behindX, 580);
            e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, behindY));
            this.engine.audio.playPulse1(400, { duration: 0.05, volume: 0.08, isMusic: false });
          } else {
            e.x -= e.vx * dt;
          }
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern === "shielder") {
          e.shieldHP = e.shieldHP ?? (e.shield || 3);
          e.x -= e.vx * dt;
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern === "kamikaze") {
          e.x -= e.vx * dt;
          const dy = this.ship.y - e.y;
          if (Math.abs(dy) > 20) {
            e.y += Math.sign(dy) * 120 * dt;
          }
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern === "splitter") {
          e.x -= e.vx * dt;
          const maxAmp = Math.max(4, (gap.bottom - gap.top - e.h - 12) / 2);
          const effAmp = Math.min(e.amp || 30, maxAmp);
          const safeBaseY = Math.max(gap.top + effAmp + 4, Math.min(gap.bottom - e.h - effAmp - 4, e.baseY || (gap.top + gap.bottom - e.h) / 2));
          e.y = safeBaseY + Math.sin(e.t * (e.freq || 2)) * effAmp;
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern === "circle") {
          e.circleAngle = (e.circleAngle || 0) + (e.speed || 100) / (e.radius || 70) * dt;
          e.x = (e.centerX || 680) + Math.cos(e.circleAngle) * (e.radius || 70);
          e.y = (e.centerY || 240) + Math.sin(e.circleAngle) * (e.radius || 70);
          e.x -= 30 * dt;
        } else if (e.pattern === "interceptor_worm") {
          if (!e.dived && e.x < 330) {
            e.dived = true;
            e.vy = (this.wormDiveDir || 1) * 140;
          }
          e.x -= e.vx * dt;
          e.y += (e.vy || 0) * dt;
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern === "boss_entry") {
          e.x -= e.vx * dt;
          if (e.x <= 520) {
            e.x = 520;
            e.pattern = "boss_phase1";
            e.patternTimer = 0;
          }
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        } else if (e.pattern.startsWith("boss_")) {
          this._updateBoss(e, dt);
          continue;
        } else {
          e.x -= e.vx * dt;
          e.y = Math.max(gap.top + 4, Math.min(gap.bottom - e.h - 4, e.y));
        }
      }
      this.enemies = this.enemies.filter((e) => e.x > -100 && e.hp > 0);
      this._applyEnemySeparation(dt);
    }
    _updateBullets(dt) {
      for (const b of this.bullets) {
        b.x += b.vx * dt;
        b.y += (b.vy || 0) * dt;
      }
      this.bullets = this.bullets.filter((b) => b.x < 680 && b.x > -20 && b.y > 0 && b.y < 480);
    }
    _updateEnemyBullets(dt) {
      for (const eb of this.enemyBullets) {
        eb.x += eb.vx * dt;
        eb.y += eb.vy * dt;
        eb.life = (eb.life || 5) - dt;
      }
      const shipBox = { x: this.ship.x + 4, y: this.ship.y + 2, w: this.ship.w - 8, h: this.ship.h - 4 };
      for (const eb of this.enemyBullets) {
        const bulletCenterX = eb.x + eb.w / 2;
        const bulletCenterY = eb.y + eb.h / 2;
        const shipCenterX = this.ship.x + this.ship.w / 2;
        const shipCenterY = this.ship.y + this.ship.h / 2;
        const dist = Math.hypot(bulletCenterX - shipCenterX, bulletCenterY - shipCenterY);
        const grazeRadius = 18;
        if (dist <= grazeRadius && dist > 8 && !eb.grazed) {
          const hitting = eb.x < shipBox.x + shipBox.w && eb.x + eb.w > shipBox.x && eb.y < shipBox.y + shipBox.h && eb.y + eb.h > shipBox.y;
          if (!hitting) {
            eb.grazed = true;
            this._onGraze(bulletCenterX, bulletCenterY);
          }
        }
        if (eb.x < shipBox.x + shipBox.w && eb.x + eb.w > shipBox.x && eb.y < shipBox.y + shipBox.h && eb.y + eb.h > shipBox.y) {
          eb.life = 0;
          this.killShip();
        }
      }
      this.enemyBullets = this.enemyBullets.filter((eb) => eb.life > 0 && eb.x > -30 && eb.x < 680 && eb.y > -20 && eb.y < 500);
    }
    _updateBulletObstacleCollisions() {
      for (let bi = this.bullets.length - 1; bi >= 0; bi--) {
        const b = this.bullets[bi];
        for (let oi = this.obstacles.length - 1; oi >= 0; oi--) {
          const ob = this.obstacles[oi];
          if (b.x + (b.w || 6) > ob.x && b.x < ob.x + ob.w && b.y + (b.h || 3) > ob.y && b.y < ob.y + ob.h) {
            const dmg = b.isLaser ? 2 : 1;
            ob.hp -= dmg;
            ob._hitFlash = 0.08;
            this.engine.audio.playPulse1(480, { duration: 0.03, volume: 0.08, isMusic: false });
            if (ob.hp <= 0) {
              const cx = ob.x + ob.w / 2, cy = ob.y + ob.h / 2;
              this.explode(cx, cy, 25, 12);
              this.score += 250;
              this.obstacles.splice(oi, 1);
            }
            if (!b.isLaser) {
              this.bullets.splice(bi, 1);
              break;
            }
          }
        }
      }
    }
    _updateBulletEnemyCollisions() {
      for (let bi = this.bullets.length - 1; bi >= 0; bi--) {
        const b = this.bullets[bi];
        let hit = false;
        for (let ei = this.enemies.length - 1; ei >= 0; ei--) {
          const e = this.enemies[ei];
          if (b.x + (b.w || 6) > e.x && b.x < e.x + e.w && b.y + (b.h || 3) > e.y && b.y < e.y + e.h) {
            if (e.pattern === "shielder" && b.x > e.x + e.w / 2 && e.shieldHP > 0) {
              e.shieldHP--;
              e._hitFlash = 0.05;
              this.engine.audio.playPulse1(800, { duration: 0.02, volume: 0.05, isMusic: false });
              if (!b.isLaser) {
                hit = true;
                break;
              }
              continue;
            }
            if (e.isBoss || e.isMiniboss) {
              if (e._damageCooldown && e._damageCooldown > 0) {
                if (!b.isLaser) {
                  hit = true;
                  break;
                }
                continue;
              }
              e._damageCooldown = 0.05;
            }
            const dmg = b.isLaser ? 2 : 1;
            e.hp -= dmg;
            e._hitFlash = 0.08;
            this.engine.audio.playPulse1(600, { duration: 0.03, volume: 0.08, isMusic: false });
            this._triggerHitPause(0.02);
            if (e.hp <= 0) {
              const cx = e.x + e.w / 2, cy = e.y + e.h / 2;
              this.explode(cx, cy, e.color || 25, e.isMiniboss ? 24 : 9);
              const overkill = Math.abs(e.hp) > e.maxHp * 0.5;
              let points = e.score || 100;
              if (overkill) {
                points = Math.floor(points * 1.5);
              }
              points = Math.floor(points * this._getScoreMultiplier());
              const now = this.gameTime;
              if (now - this.lastKillTime <= this.comboTimeout) {
                this.combo++;
              } else {
                this.combo = 1;
              }
              this.lastKillTime = now;
              this.maxCombo = Math.max(this.maxCombo, this.combo);
              this.totalKills++;
              if (this.lastGrazeTime && now - this.lastGrazeTime <= 1) {
                this._checkAndUnlock("graze_kill", true);
              }
              const comboMultiplier = Math.min(1 + this.combo * 0.1, 3);
              points = Math.floor(points * comboMultiplier);
              this._addScorePopup(cx, cy, points, overkill ? 25 : 5);
              this.score += points;
              if (this.spawnSystem) {
                this.spawnSystem.onEnemyDestroyed(e);
              }
              if (e.isCarrier) {
                this.spawnCapsule(e.x, e.y);
              }
              if (e.isMiniboss) {
                this.minibossState = "defeated";
                this.miniboss = null;
                this.stageClearTimer = 3.5;
                this.enemyBullets = [];
                this.engine.audio.sfxCoin();
                this._triggerBossDefeat(e.bossType || e.type);
              }
              if (e.isBoss) {
                this.minibossState = "defeated";
                this.miniboss = null;
                this.stageClearTimer = 5;
                this.enemyBullets = [];
                this.engine.audio.sfxCoin();
                this.engine.audio.playPulse1(440, { duration: 0.5, volume: 0.3, slide: -200, isMusic: false });
                this._triggerBossDefeat(e.bossType || e.type);
              }
              if ((e.type === "SPLITTER" || e.pattern === "splitter") && !e._isSplitFragment) {
                for (let i = 0; i < 2; i++) {
                  const splitX = e.x + (i === 0 ? -15 : 15);
                  const splitY = e.y;
                  this.enemies.push({
                    type: "SPLITTER_FRAGMENT",
                    x: splitX,
                    y: splitY,
                    w: 20,
                    h: 12,
                    hp: 1,
                    maxHp: 1,
                    vx: e.vx * 1.2,
                    vy: (i === 0 ? -1 : 1) * 80,
                    t: 0,
                    pattern: "sine",
                    color: 6,
                    score: 50,
                    amp: 15,
                    freq: 3,
                    _isSplitFragment: true
                  });
                }
              }
              if (!b.isLaser) {
                hit = true;
                break;
              }
            }
          }
        }
        if (hit) {
          this.bullets.splice(bi, 1);
        }
      }
    }
    _updateMissileEnemyCollisions() {
      for (let mi = this.pwr.missiles.length - 1; mi >= 0; mi--) {
        const m = this.pwr.missiles[mi];
        for (const e of this.enemies) {
          if (m.x + m.w > e.x && m.x < e.x + e.w && m.y + m.h > e.y && m.y < e.y + e.h) {
            e.hp -= 2;
            e._hitFlash = 0.08;
            m.life = 0;
            this.explode(m.x, m.y, 26, 6);
            if (e.hp <= 0) {
              this.explode(e.x + e.w / 2, e.y + e.h / 2, e.color || 25, 10);
              this.score += e.score || 100;
              if (this.spawnSystem) {
                this.spawnSystem.onEnemyDestroyed(e);
              }
              if (e.isCarrier) {
                this.spawnCapsule(e.x, e.y);
              }
            }
            break;
          }
        }
      }
    }
    _updatePlayerEnemyCollisions() {
      if ((this.ship.iframes || 0) <= 0 && !this.gameOver) {
        const shipBox = { x: this.ship.x + 4, y: this.ship.y + 2, w: this.ship.w - 8, h: this.ship.h - 4 };
        for (const e of this.enemies) {
          if (shipBox.x < e.x + e.w && shipBox.x + shipBox.w > e.x && shipBox.y < e.y + e.h && shipBox.y + shipBox.h > e.y) {
            this.killShip();
            break;
          }
        }
      }
    }
    _updateCapsules(dt) {
      for (let ci = this.capsules.length - 1; ci >= 0; ci--) {
        const cap = this.capsules[ci];
        cap.x += (cap.vx || -48) * dt;
        cap.t = (cap.t || 0) + dt;
        if (this.ship.x < cap.x + 18 && this.ship.x + this.ship.w > cap.x && this.ship.y < cap.y + 18 && this.ship.y + this.ship.h > cap.y) {
          this.pwr.advance();
          this.engine.audio.sfxCoin();
          this.score += 200;
          this.capsules.splice(ci, 1);
        }
      }
      this.capsules = this.capsules.filter((c) => c.x > -30);
    }
    _updateParticles(dt) {
      for (const p of this.particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        p.vx *= 0.98;
        p.vy *= 0.98;
      }
      this.particles = this.particles.filter((p) => p.life > 0);
    }
    // FASE 2: Score System Helpers
    _triggerHitPause(duration) {
      this.hitPause = duration;
      this.hitPauseDuration = duration;
      this._triggerGamepadVibration(Math.min(duration * 2, 0.15));
    }
    _addScorePopup(x, y, value, color = 5) {
      this.scorePopups.push({
        x,
        y,
        text: "+" + value.toLocaleString(),
        color,
        life: 1,
        maxLife: 1,
        vy: -30,
        scale: 1
      });
      if (this.scorePopups.length > 30) {
        this.scorePopups.shift();
      }
    }
    _onGraze(x, y) {
      this.totalGraze++;
      this.lastGrazeTime = this.gameTime;
      if (this.lastKillTime && this.gameTime - this.lastKillTime <= 1) {
        this._checkAndUnlock("graze_kill", true);
      }
      this.score += 50;
      this._addScorePopup(x, y, 50, 25);
      this.engine.audio.playPulse1(1200, { duration: 0.02, volume: 0.04, isMusic: false });
      this._triggerHitPause(0.01);
      this.screenShake = 0.15;
      this.screenShakeIntensity = 2;
    }
    _updateScoreSystem(dt) {
      if (this.combo > 0) {
        this.comboTimer += dt;
        if (this.comboTimer >= this.comboTimeout) {
          this.combo = 0;
          this.comboTimer = 0;
        }
      } else {
        this.comboTimer = 0;
      }
      if (this.screenShake > 0) {
        this.screenShake -= dt;
        this.screenShakeIntensity *= 0.9;
      }
      if (this.hitPause > 0) {
        this.hitPause -= dt;
      }
      for (const pop of this.scorePopups) {
        pop.life -= dt;
        pop.y += pop.vy * dt;
        pop.vy *= 0.98;
        pop.scale = 1 - (1 - pop.life / pop.maxLife) * 0.5;
      }
      this.scorePopups = this.scorePopups.filter((p) => p.life > 0);
      if (this.killCamera.active) {
        this.killCamera.timer -= dt;
        if (this.killCamera.timer <= 0) {
          this.killCamera.active = false;
          this.killCamera.zoom = 1;
        }
      }
      this._checkUnlocks();
    }
    // FASE 2: Progression System
    _loadProfile() {
      try {
        const data = localStorage.getItem("palugo_profile");
        if (data) {
          const parsed = JSON.parse(data);
          const total = parsed.totalScore || 0;
          const unlockedPalettes = ["VECTOR"];
          for (const [id, def] of Object.entries(PALETTE_DEFS)) {
            if (total >= def.unlockScore && !unlockedPalettes.includes(id)) {
              unlockedPalettes.push(id);
            }
          }
          let selectedPalette = parsed.selectedPalette || "VECTOR";
          if (!unlockedPalettes.includes(selectedPalette)) {
            selectedPalette = unlockedPalettes[unlockedPalettes.length - 1] || "VECTOR";
          }
          return {
            highScore: parsed.highScore || 0,
            totalScore: total,
            totalKills: parsed.totalKills || 0,
            totalGraze: parsed.totalGraze || 0,
            totalPlayTime: parsed.totalPlayTime || 0,
            wavesCleared: parsed.wavesCleared || 0,
            maxCombo: parsed.maxCombo || 0,
            selectedShip: parsed.selectedShip || "DEFAULT",
            selectedPalette,
            unlockedShips: parsed.unlockedShips || ["DEFAULT"],
            unlockedPalettes,
            prestige: parsed.prestige || 0,
            achievements: parsed.achievements || {},
            version: parsed.version || 1
          };
        }
      } catch (e) {
        console.warn("Failed to load profile", e);
      }
      return {
        highScore: 0,
        totalScore: 0,
        totalKills: 0,
        totalGraze: 0,
        totalPlayTime: 0,
        wavesCleared: 0,
        maxCombo: 0,
        selectedShip: "DEFAULT",
        selectedPalette: "VECTOR",
        unlockedShips: ["DEFAULT"],
        unlockedPalettes: ["VECTOR"],
        prestige: 0,
        achievements: {},
        version: 1
      };
    }
    _saveProfile() {
      try {
        this.profile.totalPlayTime += this.gameTime;
        localStorage.setItem("palugo_profile", JSON.stringify(this.profile));
      } catch (e) {
        console.warn("Failed to save profile", e);
      }
    }
    _initUnlockables() {
      return {
        ships: Object.keys(SHIP_DEFS),
        palettes: Object.keys(PALETTE_DEFS),
        notifications: []
        // { text, timer, color }
      };
    }
    _triggerGamepadVibration(duration) {
      this._gamepadVibration = duration;
      const gp = navigator.getGamepads ? navigator.getGamepads()[0] : null;
      if (gp && gp.vibrationActuator) {
        gp.vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: duration * 1e3,
          weakMagnitude: 0.3,
          strongMagnitude: 0.5
        }).catch(() => {
        });
      }
    }
    // FASE 6: Tutorial System
    _initTutorial() {
      this.tutorial = {
        step: 0,
        steps: [
          { text: "WASD / ARROWS: Move ship", highlight: "move", duration: 4 },
          { text: "J / X (Gamepad A): Fire", highlight: "fire", duration: 4 },
          { text: "K / B (Gamepad B): Activate Powerup", highlight: "powerup", duration: 4 },
          { text: "U / X (Gamepad X): Turbo Fire", highlight: "turbo", duration: 4 },
          { text: "ESC / Start: Pause", highlight: "pause", duration: 3 },
          { text: "Collect P capsules to advance powerup bar", highlight: "capsule", duration: 4 },
          { text: "Graze enemy bullets for bonus points!", highlight: "graze", duration: 4 }
        ],
        active: false,
        timer: 0,
        showArrow: false,
        arrowTarget: null
      };
      if (!this.accessibility.tutorialSeen) {
        this.tutorial.active = true;
      }
    }
    _updateTutorial(dt) {
      if (!this.tutorial.active) {
        return;
      }
      const step = this.tutorial.steps[this.tutorial.step];
      if (!step) {
        this._completeTutorial();
        return;
      }
      this.tutorial.timer += dt;
      if (this.tutorial.timer >= step.duration) {
        this.tutorial.step++;
        this.tutorial.timer = 0;
      }
    }
    _completeTutorial() {
      this.tutorial.active = false;
      this.accessibility.tutorialSeen = true;
      this._saveAccessibilitySettings();
    }
    _renderTutorial(engine2) {
      if (!this.tutorial.active) {
        return;
      }
      const step = this.tutorial.steps[this.tutorial.step];
      if (!step) {
        return;
      }
      engine2.ctx.save();
      engine2.drawRect(80, 350, 480, 80, 1, true);
      engine2.drawRect(80, 350, 480, 80, 25, false);
      engine2.drawText(step.text, 320, 370, 25, 14, { align: "center", shadow: true, shadowColor: 1 });
      engine2.drawText(`Step ${this.tutorial.step + 1} / ${this.tutorial.steps.length}`, 320, 400, 3, 11, { align: "center" });
      engine2.drawText("Press any key to continue", 320, 415, 2, 10, { align: "center" });
      engine2.ctx.restore();
    }
    // FASE 6: Accessibility
    _loadAccessibilitySettings() {
      try {
        const data = localStorage.getItem("palugo_accessibility");
        if (data) {
          const parsed = JSON.parse(data);
          return { ...ACCESSIBILITY_DEFAULTS, ...parsed };
        }
      } catch (e) {
        console.warn("Failed to load accessibility settings", e);
      }
      return { ...ACCESSIBILITY_DEFAULTS };
    }
    _saveAccessibilitySettings() {
      try {
        localStorage.setItem("palugo_accessibility", JSON.stringify(this.accessibility));
      } catch (e) {
        console.warn("Failed to save accessibility settings", e);
      }
    }
    _applyAccessibilitySettings() {
      const a = this.accessibility;
      const canvas = this.engine?.canvas;
      if (canvas) {
        const mode = COLORBLIND_MODES[a.colorblindMode] || COLORBLIND_MODES.NONE;
        if (mode.matrix) {
          canvas.style.filter = `url(#colorblind-${a.colorblindMode.toLowerCase()})`;
        } else {
          canvas.style.filter = "";
        }
      }
    }
    _checkReducedMotion() {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      this.accessibility.reducedMotion = prefersReduced || this.accessibility.reducedMotion;
      if (this.accessibility.reducedMotion) {
        this.accessibility.screenShakeEnabled = false;
        this.accessibility.hitPauseEnabled = false;
        this.accessibility.crtEffectsEnabled = false;
        this.accessibility.parallaxEnabled = false;
      }
    }
    _createColorblindFilters() {
      if (document.getElementById("palugo-colorblind-filters")) {
        return;
      }
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.id = "palugo-colorblind-filters";
      svg.style.display = "none";
      svg.innerHTML = `
      <defs>
        <filter id="colorblind-protanopia">
          <feColorMatrix type="matrix" values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0 0 0 0 0 0 1"/>
        </filter>
        <filter id="colorblind-deuteranopia">
          <feColorMatrix type="matrix" values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0 0 0 0 0 0 1"/>
        </filter>
        <filter id="colorblind-tritanopia">
          <feColorMatrix type="matrix" values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0 0 0 0 0 0 1"/>
        </filter>
      </defs>
    `;
      document.body.appendChild(svg);
    }
    _toggleColorblindMode() {
      const modes = ["NONE", "PROTANOPIA", "DEUTERANOPIA", "TRITANOPIA"];
      const currentIdx = modes.indexOf(this.accessibility.colorblindMode);
      this.accessibility.colorblindMode = modes[(currentIdx + 1) % modes.length];
      this._saveAccessibilitySettings();
      this._applyAccessibilitySettings();
    }
    _checkUnlocks() {
      const totalScore = this.profile.totalScore + this.score;
      for (const [id, def] of Object.entries(SHIP_DEFS)) {
        if (!this.profile.unlockedShips.includes(id) && totalScore >= def.unlockScore) {
          this.profile.unlockedShips.push(id);
          this._addUnlockNotification(`NEW SHIP: ${def.name}`, 2);
          this._triggerUnlock();
        }
      }
      for (const [id, def] of Object.entries(PALETTE_DEFS)) {
        if (!this.profile.unlockedPalettes.includes(id) && totalScore >= def.unlockScore) {
          this.profile.unlockedPalettes.push(id);
          this._addUnlockNotification(`NEW PALETTE: ${def.name}`, 25);
          this._triggerUnlock();
        }
      }
    }
    _addUnlockNotification(text, color) {
      this.unlockables.notifications.push({ text, timer: UNLOCK_NOTIFICATION_TIME, color });
      this.engine.audio.sfxCoin();
      this.engine.audio.playPulse1(880, { duration: 0.15, volume: 0.2, slide: 400, isMusic: false });
    }
    _updateUnlockNotifications(dt) {
      for (let i = this.unlockables.notifications.length - 1; i >= 0; i--) {
        const n = this.unlockables.notifications[i];
        n.timer -= dt;
        if (n.timer <= 0) {
          this.unlockables.notifications.splice(i, 1);
        }
      }
    }
    _applyShipStats() {
      const def = SHIP_DEFS[this.currentShip] || SHIP_DEFS.DEFAULT;
      this.baseSpeed = def.baseSpeed;
      this.fireRate = def.baseFireRate;
      this.laserRate = def.baseLaserRate;
      this.ship.color = def.color;
      this.ship.w = def.width || 48;
      this.ship.h = def.height || 16;
    }
    _applyPalette() {
      const palette = this.profile.selectedPalette || "VECTOR";
      this.engine.setPalettePreset(palette);
    }
    _checkPrestige() {
      if (this.wave >= 50 && !this.ngPlusActive) {
        this.ngPlusActive = true;
        this.prestigeLevel++;
        this.profile.prestige = this.prestigeLevel;
        this._addUnlockNotification(`PRESTIGE ${this.prestigeLevel} UNLOCKED!`, 19);
        this._triggerPrestige();
      }
    }
    _getScoreMultiplier() {
      return 1 + this.prestigeLevel * 0.1;
    }
    // Called at game over or wave clear
    _finalizeRun() {
      this.profile.totalScore += this.score;
      this.profile.totalKills += this.totalKills;
      this.profile.totalGraze += this.totalGraze;
      this.profile.wavesCleared = Math.max(this.profile.wavesCleared, this.wave);
      this.profile.maxCombo = Math.max(this.profile.maxCombo, this.maxCombo);
      if (this.score > this.profile.highScore) {
        this.profile.highScore = this.score;
        this._addUnlockNotification(`NEW HIGH SCORE: ${this.score}`, 19);
      }
      this._checkUnlocks();
      this._checkPrestige();
      this._saveProfile();
    }
    // UI: Ship Select Screen (called from menu)
    _renderShipSelect(engine2) {
      const ships = this.profile.unlockedShips.map((id) => SHIP_DEFS[id]);
      const selectedIdx = ships.findIndex((s) => s.name === SHIP_DEFS[this.currentShip].name);
    }
    // UI: Palette Select
    _renderPaletteSelect(engine2) {
      const palettes = this.profile.unlockedPalettes.map((id) => PALETTE_DEFS[id]);
    }
    // FASE 4: Achievements System
    _initAchievements() {
      return {
        "first_kill": { name: "First Blood", desc: "Destroy your first enemy", unlocked: false, score: 1e3 },
        "kill_100": { name: "Hunter", desc: "Destroy 100 enemies", unlocked: false, score: 5e3 },
        "kill_1000": { name: "Exterminator", desc: "Destroy 1000 enemies", unlocked: false, score: 25e3 },
        "graze_50": { name: "Dodge Master", desc: "Graze 50 bullets", unlocked: false, score: 1e4 },
        "graze_500": { name: "Bullet Dancer", desc: "Graze 500 bullets", unlocked: false, score: 5e4 },
        "combo_10": { name: "Chain Reaction", desc: "Reach 10x combo", unlocked: false, score: 15e3 },
        "combo_50": { name: "Unstoppable", desc: "Reach 50x combo", unlocked: false, score: 5e4 },
        "wave_5": { name: "Survivor", desc: "Clear Wave 5", unlocked: false, score: 1e4 },
        "wave_20": { name: "Veteran", desc: "Clear Wave 20", unlocked: false, score: 5e4 },
        "wave_50": { name: "Legend", desc: "Clear Wave 50", unlocked: false, score: 1e5 },
        "no_miss_1": { name: "Flawless", desc: "Clear a wave without taking damage", unlocked: false, score: 2e4 },
        "no_miss_5": { name: "Perfectionist", desc: "Clear 5 waves without taking damage", unlocked: false, score: 75e3 },
        "boss_1": { name: "Boss Slayer", desc: "Defeat first boss", unlocked: false, score: 25e3 },
        "boss_3": { name: "Tyrant", desc: "Defeat all 3 bosses", unlocked: false, score: 75e3 },
        "prestige_1": { name: "New Beginning", desc: "Reach Prestige 1", unlocked: false, score: 1e5 },
        "prestige_5": { name: "Eternal", desc: "Reach Prestige 5", unlocked: false, score: 5e5 },
        "unlock_all_ships": { name: "Collector", desc: "Unlock all ships", unlocked: false, score: 1e5 },
        "unlock_all_palettes": { name: "Chromatic", desc: "Unlock all palettes", unlocked: false, score: 5e4 },
        "score_100k": { name: "High Scorer", desc: "Reach 100,000 points", unlocked: false, score: 25e3 },
        "score_1m": { name: "Millionaire", desc: "Reach 1,000,000 points", unlocked: false, score: 1e5 },
        "continue_1": { name: "Second Chance", desc: "Use a continue", unlocked: false, score: 5e3 },
        "graze_kill": { name: "Close Call", desc: "Graze and kill in same second", unlocked: false, score: 15e3 }
      };
    }
    _checkAchievements() {
      if (this.totalKills > this._lastKillCount) {
        this._checkAndUnlock("first_kill", this.totalKills >= 1);
        this._checkAndUnlock("kill_100", this.totalKills >= 100);
        this._checkAndUnlock("kill_1000", this.totalKills >= 1e3);
        this._lastKillCount = this.totalKills;
      }
      if (this.totalGraze > this._lastGrazeCount) {
        this._checkAndUnlock("graze_50", this.totalGraze >= 50);
        this._checkAndUnlock("graze_500", this.totalGraze >= 500);
        this._lastGrazeCount = this.totalGraze;
      }
      if (this.combo > this._lastCombo) {
        this._checkAndUnlock("combo_10", this.combo >= 10);
        this._checkAndUnlock("combo_50", this.combo >= 50);
        this._lastCombo = this.combo;
      }
      this._checkAndUnlock("score_100k", this.score >= 1e5);
      this._checkAndUnlock("score_1m", this.score >= 1e6);
      if (this._usedContinue) {
        this._checkAndUnlock("continue_1", true);
        this._usedContinue = false;
      }
      if (this._grazeAndKillThisSecond) {
        this._triggerGrazeAndKill();
        this._grazeAndKillThisSecond = false;
      }
    }
    _checkAndUnlock(id, condition) {
      if (!condition) {
        return;
      }
      const ach = this.achievements ? this.achievements[id] : null;
      if (!ach) {
        return;
      }
      if (ach.unlocked || this.profile && this.profile.achievements && this.profile.achievements[id]) {
        return;
      }
      ach.unlocked = true;
      if (this.profile) {
        this.profile.achievements = this.profile.achievements || {};
        this.profile.achievements[id] = true;
        this._saveProfile();
      }
      this.score += ach.score || 0;
      this._addAchievementNotification(ach.name, ach.desc);
    }
    _triggerWaveClear() {
      this._checkAndUnlock("wave_5", this.wave >= 5);
      this._checkAndUnlock("wave_20", this.wave >= 20);
      this._checkAndUnlock("wave_50", this.wave >= 50);
      if (this.noMissWave) {
        this.consecutiveNoMissWaves = (this.consecutiveNoMissWaves || 0) + 1;
        this._checkAndUnlock("no_miss_1", true);
        this._checkAndUnlock("no_miss_5", this.consecutiveNoMissWaves >= 5);
      } else {
        this.consecutiveNoMissWaves = 0;
      }
      this.noMissWave = true;
    }
    _triggerBossDefeat(bossId) {
      if (!this.defeatedBosses) {
        this.defeatedBosses = /* @__PURE__ */ new Set();
      }
      if (bossId) {
        this.defeatedBosses.add(bossId);
      } else {
        this.defeatedBosses.add("boss_" + this.wave);
      }
      this._checkAndUnlock("boss_1", true);
      this._checkAndUnlock("boss_3", this.defeatedBosses.size >= 3 || this.wave >= 2);
    }
    _triggerUnlock() {
      this._checkAndUnlock("unlock_all_ships", this.profile.unlockedShips.length >= Object.keys(SHIP_DEFS).length);
      this._checkAndUnlock("unlock_all_palettes", this.profile.unlockedPalettes.length >= Object.keys(PALETTE_DEFS).length);
    }
    _triggerPrestige() {
      this._checkAndUnlock("prestige_1", this.profile.prestige >= 1);
      this._checkAndUnlock("prestige_5", this.profile.prestige >= 5);
    }
    _triggerContinue() {
      this._usedContinue = true;
      this._checkAndUnlock("continue_1", true);
    }
    _triggerGrazeAndKill() {
      this._checkAndUnlock("graze_kill", true);
    }
    _addAchievementNotification(name, desc) {
      this.achievementNotifications = this.achievementNotifications || [];
      this.achievementNotifications.push({
        name,
        desc,
        timer: 4,
        y: 50,
        // Posición superior central estilo PlayStation/Xbox
        color: 25
        // Color dorado para logros
      });
      this.engine.audio.sfxCoin();
      this.engine.audio.playPulse1(880, { duration: 0.2, volume: 0.2, slide: 600, isMusic: false });
    }
    _updateAchievementNotifications(dt) {
      if (!this.achievementNotifications) {
        return;
      }
      for (let i = this.achievementNotifications.length - 1; i >= 0; i--) {
        const n = this.achievementNotifications[i];
        n.timer -= dt;
        if (n.timer <= 0) {
          this.achievementNotifications.splice(i, 1);
        }
      }
    }
    // FASE 4: GDPR Consent
    _checkGDPConsent() {
      if (this.engine.sdk && this.engine.sdk.needsGDPRPrompt()) {
        this._showGDPRPrompt = true;
      }
    }
    _handleGDPRInput(inputs) {
      if (!this._showGDPRPrompt) {
        return;
      }
      if (inputs.btnA) {
        this.engine.sdk.setGDPConsent(true);
        this._showGDPRPrompt = false;
      }
      if (inputs.btnB) {
        this.engine.sdk.setGDPConsent(false);
        this._showGDPRPrompt = false;
      }
    }
    // FASE 4: Ad integration in pause menu
    _updatePausedMenu(inputs, dt) {
      if (this.engine.input.justPressed("btnStart")) {
        this.paused = false;
      }
    }
    // Called when player uses continue
    _onContinueUsed() {
      this._usedContinue = true;
    }
    // Called when graze and kill happen in same frame
    _onGrazeAndKill() {
      this._grazeAndKillThisSecond = true;
    }
    render(engine2) {
      const shakeX = this.screenShake > 0 ? (Math.random() - 0.5) * this.screenShakeIntensity * 4 : 0;
      const shakeY = this.screenShake > 0 ? (Math.random() - 0.5) * this.screenShakeIntensity * 4 : 0;
      const camZoom = this.killCamera.active ? this.killCamera.zoom : 1;
      engine2.ctx.save();
      if (camZoom !== 1 && this.killCamera.target) {
        engine2.ctx.translate(this.killCamera.target.x, this.killCamera.target.y);
        engine2.ctx.scale(camZoom, camZoom);
        engine2.ctx.translate(-this.killCamera.target.x, -this.killCamera.target.y);
      }
      engine2.ctx.translate(shakeX, shakeY);
      for (const s of this.stars) {
        engine2.drawPixel(s.x | 0, s.y | 0, s.c);
      }
      for (const p of this.planets) {
        if (p.isSun) {
          engine2.drawVectorSun(p.x, p.y, p.r, p.c);
        } else {
          engine2.drawVectorPlanet(p.x, p.y, p.r, p.c, {
            hasRing: p.hasRing,
            ringCol: p.ringCol,
            rot: p.rot,
            craters: p.craters
          });
        }
      }
      for (const seg of this.structures) {
        this._renderAlienBiomeSegment(engine2, seg, this.animTimer);
      }
      engine2.drawRect(0, 0, 640, 32, 1, true);
      engine2.drawLine(0, 32, 640, 32, 2, 1.5);
      engine2.drawRect(0, 442, 640, 38, 1, true);
      engine2.drawLine(0, 442, 640, 442, 2, 1.5);
      engine2.drawRect(0, 0, 640, 480, 2, false);
      const livesCfg = hud2("hud_title", { x: 14, y: 8, size: 16, font: "Consolas", align: "left", text: "LIVES = 3" });
      const livesLabel = livesCfg.text ? livesCfg.text.includes("=") ? livesCfg.text.split("=")[0].trim() + " = " : livesCfg.text.includes(":") ? livesCfg.text.split(":")[0].trim() + ": " : livesCfg.text.replace(/\d+.*$/, "").trim() + " " : "LIVES = ";
      engine2.drawText(`${livesLabel}${this.lives}`, livesCfg.x, livesCfg.y, 5, livesCfg.size, { font: livesCfg.font, align: livesCfg.align, shadow: true, shadowColor: 1 });
      const waveCfg = hud2("hud_wave_counter", { x: 220, y: 8, size: 16, font: "Consolas", align: "center", text: "WAVE = 0" });
      const waveLabel = waveCfg.text ? waveCfg.text.includes("=") ? waveCfg.text.split("=")[0].trim() + " = " : waveCfg.text.includes(":") ? waveCfg.text.split(":")[0].trim() + ": " : waveCfg.text.replace(/\d+.*$/, "").trim() + " " : "WAVE = ";
      engine2.drawText(`${waveLabel}${this.wave}`, waveCfg.x, waveCfg.y, 2, waveCfg.size, { font: waveCfg.font, align: waveCfg.align, shadow: true, shadowColor: 1 });
      const hs = hud2("hud_score", { x: 410, y: 8, size: 16, font: "Consolas", align: "center", text: "SCORE 0" });
      const scorePrefix = hs.text ? hs.text.replace(/\d+.*$/, "").trim() || "SCORE" : "SCORE";
      engine2.drawText(`${scorePrefix} ${this.score}`, hs.x, hs.y, 25, hs.size, { font: hs.font, align: hs.align, shadow: true, shadowColor: 1 });
      {
        const bossCfg = hud2("hud_boss", { x: 626, y: 8, size: 15, font: "Consolas", align: "right" });
        const BOSS_TOTAL = 120;
        let bossText = "";
        let bossCol = 25;
        if (this.minibossState === "waves") {
          const remain = Math.max(0, BOSS_TOTAL - this.gameTime);
          const m = Math.floor(remain / 60) | 0, s = Math.floor(remain % 60) | 0;
          bossText = `BOSS ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
          bossCol = remain <= 15 ? Math.floor(this.animTimer * 6) % 2 === 0 ? 25 : 3 : 25;
        } else if (this.minibossState === "draining" || this.minibossState === "warning") {
          bossText = "BOSS 00:00";
          bossCol = Math.floor(this.animTimer * 8) % 2 === 0 ? 25 : 3;
        } else if (this.miniboss) {
          bossText = "BOSS FIGHT";
          bossCol = Math.floor(this.animTimer * 5) % 2 === 0 ? 25 : 5;
        } else if (this.minibossState === "defeated") {
          bossText = "BOSS DOWN";
          bossCol = 5;
        }
        if (bossText) {
          engine2.drawText(bossText, bossCfg.x, bossCfg.y, bossCol, bossCfg.size, { font: bossCfg.font, align: bossCfg.align, shadow: true, shadowColor: 1 });
        }
      }
      if (this._showGDPRPrompt) {
        engine2.ctx.save();
        engine2.ctx.globalAlpha = 0.95;
        engine2.drawRect(80, 180, 480, 120, 1, true);
        engine2.drawRect(80, 180, 480, 120, 25, false);
        engine2.drawText("PRIVACY & CONSENT", 320, 200, 25, 18, { align: "center", shadow: true, shadowColor: 1 });
        engine2.drawText("This game uses ads and analytics.", 320, 225, 3, 12, { align: "center" });
        engine2.drawText("Allow personalized ads?", 320, 245, 3, 12, { align: "center" });
        engine2.drawText("ENTER = Accept  |  ESC = Decline", 320, 270, 5, 11, { align: "center" });
        engine2.ctx.restore();
      }
      this._renderPowerBar(engine2);
      for (const ob of this.obstacles) {
        engine2.drawVectorObstacle(ob, this.animTimer);
      }
      for (const e of this.enemies) {
        if (e.isMiniboss) {
          const isFlash = e._hitFlash > 0 && Math.floor(this.animTimer * 16) % 2 === 0;
          const cx = e.x + e.w / 2 | 0;
          const cy = e.y + e.h / 2 | 0;
          engine2.drawMiniboss(cx, cy, e, this.animTimer, isFlash, this.ship);
          continue;
        }
        if (e.maxHp > 2) {
          const pct = e.hp / e.maxHp;
          engine2.drawRect(e.x | 0, e.y - 6 | 0, e.w, 3, 1, true);
          engine2.drawRect(e.x | 0, e.y - 6 | 0, e.w * pct | 0, 3, 25, true);
        }
        const flip = !!e.wormFlip;
        if (e.isCarrier) {
          const cx = e.x + 14, cy = e.y + 9, sz = 10;
          const col = Math.floor(this.animTimer * 6) % 2 === 0 ? 3 : 26;
          engine2.drawPoly([[cx, cy - sz], [cx + sz, cy], [cx, cy + sz], [cx - sz, cy]], col, true, true);
          engine2.drawPoly([[cx, cy - sz], [cx + sz, cy], [cx, cy + sz], [cx - sz, cy]], 18, false, true);
          engine2.drawText("P", cx - 4 | 0, cy - 6 | 0, 25, 10);
        } else {
          const isFlash = e._hitFlash > 0 && Math.floor(this.animTimer * 16) % 2 === 0;
          engine2.drawVectorEnemy(e.x, e.y, e.type, e.color, flip, isFlash);
        }
      }
      for (const b of this.bullets) {
        const bulletColor = b.color || 18;
        if (b.isLaser) {
          engine2.drawLine(b.x | 0, b.y | 0, b.x + 60 | 0, b.y | 0, bulletColor, 3.5);
          engine2.drawLine(b.x | 0, b.y | 0, b.x + 60 | 0, b.y | 0, 3, 1.5);
        } else {
          const bx = b.x | 0;
          const by = b.y | 0;
          const bw = b.w || 6;
          const bh = b.h || 3;
          const lineLength = Math.max(10, bw * 2);
          engine2.drawLine(bx, by, bx + lineLength, by, bulletColor, 2.4);
          engine2.drawLine(bx, by, bx + lineLength - 4, by, 25, 1.4);
        }
      }
      for (const eb of this.enemyBullets) {
        if (eb.isMiniboss) {
          const r = eb.w >= 9 ? 4.2 : 3.4;
          engine2.drawLine(eb.x | 0, eb.y | 0, eb.x + 4 | 0, eb.y + 4 | 0, eb.w >= 8 ? 26 : 24, eb.w >= 8 ? 3.2 : 2.6);
          engine2.ctx.save();
          engine2.ctx.fillStyle = engine2.getPalette()[eb.w >= 8 ? 26 : 30];
          engine2.ctx.shadowColor = engine2.getPalette()[eb.w >= 8 ? 26 : 30];
          engine2.ctx.shadowBlur = 9;
          engine2.ctx.beginPath();
          engine2.ctx.arc(eb.x + eb.w / 2, eb.y + eb.h / 2, r, 0, Math.PI * 2);
          engine2.ctx.fill();
          engine2.ctx.restore();
        } else {
          engine2.drawLine(eb.x | 0, eb.y | 0, eb.x + 8 | 0, eb.y | 0, 24, 2);
        }
      }
      if (this.minibossState === "warning") {
        const wt = hud2("hud_warning_title", { x: 320, y: 198, size: 28, font: "Consolas", align: "center", text: "WARNING" });
        const ws = hud2("hud_warning_sub", { x: 320, y: 224, size: 13, font: "Consolas", align: "center", text: "MINIBOSS APPROACHING" });
        const blink = Math.floor(this.animTimer * 8) % 2 === 0;
        engine2.drawRect(150, 190, 340, 56, 1, true);
        engine2.drawRect(150, 190, 340, 56, blink ? 25 : 5, false);
        engine2.drawText(wt.text, wt.x, wt.y, blink ? 25 : 3, wt.size, { align: wt.align, shadow: true, shadowColor: 1, font: wt.font });
        engine2.drawText(ws.text, ws.x, ws.y, 25, ws.size, { align: ws.align, font: ws.font });
      }
      if (this.miniboss && this.miniboss.maxHp) {
        const b = this.miniboss;
        const pct = Math.max(0, Math.min(1, b.hp / b.maxHp));
        const spec = MINIBOSS_SPECS[this.wave % MINIBOSS_SPECS.length];
        const bossName = b.bossName || spec.name || "MINIBOSS";
        const bl = hud2("hud_boss_label", { x: 320, y: 48, size: 10, font: "Consolas", align: "center", text: bossName });
        const barCol = pct > 0.5 ? 5 : pct > 0.25 ? 25 : 21;
        const borderCol = 2;
        engine2.drawRect(90, 34, 460, 12, 1, true);
        engine2.drawRect(90, 34, 460, 12, borderCol, false);
        const fillW = Math.max(0, 456 * pct | 0);
        if (fillW > 0) {
          engine2.drawRect(92, 36, fillW, 8, barCol, true);
        }
        engine2.drawText(bossName, bl.x, bl.y, 25, bl.size, { align: bl.align, shadow: true, shadowColor: 1, font: bl.font });
      }
      if (this.minibossState === "defeated") {
        const blink = Math.floor(this.animTimer * 8) % 2 === 0;
        engine2.drawRect(140, 180, 360, 68, 1, true);
        engine2.drawRect(140, 180, 360, 68, blink ? 5 : 25, false);
        engine2.drawText(`WAVE ${this.wave} CLEARED!`, 320, 195, blink ? 5 : 25, 18, { align: "center", shadow: true, shadowColor: 1 });
        engine2.drawText("PREPARING NEXT WAVE...", 320, 222, 25, 12, { align: "center", font: "Consolas" });
      }
      for (const m of this.pwr.missiles) {
        engine2.drawLine(m.x | 0, m.y | 0, m.x + 8 | 0, m.y + (m.vy > 0 ? 6 : -6) | 0, 25, 2.4);
      }
      const isFlashing = this.respawnTimer > 0 || (this.ship.iframes || 0) > 0;
      if (!isFlashing || Math.floor(this.animTimer * 12) % 2 === 0) {
        engine2.drawVectorShip(this.ship.x, this.ship.y, this.ship.color, 1, this.currentShip);
      }
      for (const opt of this.pwr.options) {
        const col = Math.floor(this.animTimer * 5) % 2 === 0 ? 5 : 25;
        engine2.drawPoly([
          [opt.x, opt.y - 8],
          [opt.x + 8, opt.y],
          [opt.x, opt.y + 8],
          [opt.x - 8, opt.y]
        ], col, true, true);
        engine2.drawPoly([
          [opt.x, opt.y - 8],
          [opt.x + 8, opt.y],
          [opt.x, opt.y + 8],
          [opt.x - 8, opt.y]
        ], 3, false, true);
      }
      for (const cap of this.capsules) {
        const blinkCol = Math.floor(cap.t * 7) % 2 === 0 ? 25 : 5;
        engine2.drawRect(cap.x | 0, cap.y | 0, 18, 18, 1, true);
        engine2.drawRect(cap.x | 0, cap.y | 0, 18, 18, blinkCol, false);
        engine2.drawText("P", cap.x + 4 | 0, cap.y + 2 | 0, blinkCol, 13, { bold: true, font: "Consolas" });
      }
      for (const p of this.particles) {
        engine2.drawLine(p.x | 0, p.y | 0, p.x + 3 | 0, p.y + 3 | 0, p.c % 45, 1.8);
      }
      if (this.awaitingContinue && this.awaitingContinue !== "ad" && !this.gameOver) {
        const ct = hud2("hud_continue_title", { x: 320, y: 185, size: 20, font: "Consolas", align: "center", text: "SHIP DESTROYED" });
        const lp = hud2("hud_continue_lives", { x: 320, y: 210, size: 14, font: "Consolas", align: "center", text: "LIVES = 3" });
        const cp = hud2("hud_continue_prompt", { x: 320, y: 234, size: 13, font: "Consolas", align: "center", text: "PRESS J TO CONTINUE" });
        const adSub = hud2("hud_continue_ad", { x: 320, y: 256, size: 9, font: "Consolas", align: "center", text: "AD WILL PLAY" });
        engine2.drawRect(150, 175, 340, 110, 1, true);
        engine2.drawRect(150, 175, 340, 110, 2, false);
        engine2.drawText(ct.text, ct.x, ct.y, 25, ct.size, { align: ct.align, shadow: true, shadowColor: 1, font: ct.font });
        engine2.drawText(`${lp.text.replace(/=.*/, "=")}${this.lives}`, lp.x, lp.y, 5, lp.size, { align: lp.align, font: lp.font });
        const blink = Math.floor(this.animTimer * 5) % 2 === 0;
        engine2.drawText(cp.text, cp.x, cp.y, blink ? 25 : 3, cp.size, { align: cp.align, shadow: true, shadowColor: 1, font: cp.font });
        engine2.drawText(adSub.text, adSub.x, adSub.y, 25, adSub.size, { align: adSub.align, font: adSub.font });
      }
      if (this.awaitingContinue === "ad" && !this.gameOver) {
        const loadAd = hud2("hud_continue_loading", { x: 320, y: 220, size: 14, font: "Consolas", align: "center", text: "LOADING AD..." });
        engine2.drawRect(170, 195, 300, 70, 1, true);
        engine2.drawRect(170, 195, 300, 70, 5, false);
        engine2.drawText(loadAd.text, loadAd.x, loadAd.y, 25, loadAd.size, { align: loadAd.align, shadow: true, shadowColor: 1, font: loadAd.font });
      }
      if (this.respawnTimer > 0 && !this.gameOver) {
        const count = Math.ceil(this.respawnTimer);
        const rc = hud2("hud_ready", { x: 320, y: 198, size: 26, font: "Consolas", align: "center", text: `READY IN ${count}` });
        const lp2 = hud2("hud_ready_lives", { x: 320, y: 234, size: 16, font: "Consolas", align: "center", text: "LIVES = 3" });
        engine2.drawRect(180, 185, 280, 85, 1, true);
        engine2.drawRect(180, 185, 280, 85, 5, false);
        engine2.drawText(`READY IN ${count}`, rc.x, rc.y, 25, rc.size, { align: rc.align, bold: true, shadow: true, shadowColor: 1, font: rc.font });
        engine2.drawText(`${lp2.text.replace(/=.*/, "=")}${this.lives}`, lp2.x, lp2.y, 5, lp2.size, { align: lp2.align, bold: true, font: lp2.font });
      }
      if (this.gameOver) {
        const goX = 120, goY = 120, goW = 400, goH = 200;
        engine2.drawRect(goX + 2, goY + 2, goW, goH, 0, true);
        engine2.drawRect(goX, goY, goW, goH, 25, false);
        engine2.drawRect(goX + 1, goY + 1, goW - 2, goH - 2, 1, false);
        engine2.drawText("GAME OVER", 320, goY + 28, 25, 28, { align: "center", shadow: true, shadowColor: 1 });
        engine2.drawText(`SCORE  ${this.score}`, 320, goY + 60, 25, 18, { align: "center" });
        engine2.drawLine(goX + 20, goY + 78, goX + goW - 20, goY + 78, 5, 1);
        if (this._rankingSaved) {
          if (this._rankingName) {
            engine2.drawText(`${this._rankingName}  -  ${this._rankingStatus}`, 320, goY + 92, 5, 14, { align: "center", shadow: true, shadowColor: 1 });
          }
          const mX = 200, mY = goY + 110, mW = 240, mH = 75;
          engine2.drawRect(mX, mY, mW, mH, 0, true);
          engine2.drawRect(mX, mY, mW, mH, 2, false);
          const options = ["RESTART", "MAIN MENU"];
          options.forEach((opt, i) => {
            const isSelected = i === this._gameOverMenuSelection;
            const y = mY + 14 + i * 28;
            const color = isSelected ? 25 : 2;
            const prefix = isSelected ? "> " : "  ";
            engine2.drawText(prefix + opt, 320, y, color, 16, { align: "center", shadow: isSelected, shadowColor: 1 });
          });
          engine2.drawText("UP/DOWN:Select  J:Confirm", 320, goY + goH + 10, 25, 12, { align: "center" });
        } else {
          if (this._rankingName) {
            engine2.drawText(`${this._rankingName}  -  ${this._rankingStatus}`, 320, goY + 100, 5, 14, { align: "center", shadow: true, shadowColor: 1 });
          } else if (this._rankingStatus) {
            engine2.drawText(this._rankingStatus, 320, goY + 100, 25, 14, { align: "center" });
          } else if (this.score > 0) {
            engine2.drawText("Saving ranking...", 320, goY + 100, 25, 14, { align: "center" });
          }
          engine2.drawText("PRESS J TO RESTART", 320, goY + 130, 25, 14, { align: "center" });
        }
      }
      engine2.ctx.restore();
      for (let i = 0; i < this.unlockables.notifications.length; i++) {
        const n = this.unlockables.notifications[i];
        const alpha = Math.min(1, n.timer * 2);
        const y = 80 + i * 28;
        engine2.ctx.save();
        engine2.ctx.globalAlpha = alpha;
        engine2.drawRect(160, y - 4, 320, 24, 1, true);
        engine2.drawRect(160, y - 4, 320, 24, n.color, false);
        engine2.drawText(n.text, 320, y + 2, n.color, 13, {
          font: "Consolas",
          align: "center",
          shadow: true,
          shadowColor: 1
        });
        engine2.ctx.restore();
      }
      for (let i = 0; i < this.achievementNotifications.length; i++) {
        const n = this.achievementNotifications[i];
        const alpha = Math.min(1, n.timer * 2);
        const y = n.y + i * 35;
        engine2.ctx.save();
        engine2.ctx.globalAlpha = alpha;
        const boxWidth = 300;
        const boxHeight = 40;
        const boxX = (640 - boxWidth) / 2;
        engine2.drawRect(boxX, y, boxWidth, boxHeight, 1, true);
        engine2.drawRect(boxX, y, boxWidth, boxHeight, 25, false, 3);
        engine2.drawRect(boxX + 2, y + 2, boxWidth - 4, boxHeight - 4, 18, false, 1);
        engine2.drawText("ACHIEVEMENT UNLOCKED", boxX + boxWidth / 2, y + 8, 25, 10, {
          font: "Consolas",
          align: "center",
          shadow: true,
          shadowColor: 1
        });
        engine2.drawText(n.name, boxX + boxWidth / 2, y + 20, 18, 12, {
          font: "Consolas",
          align: "center",
          shadow: true,
          shadowColor: 1
        });
        const progressWidth = boxWidth - 20;
        const progressX = boxX + 10;
        const progressY = y + 32;
        engine2.drawRect(progressX, progressY, progressWidth, 3, 1, true);
        engine2.drawRect(progressX, progressY, progressWidth, 3, 25, false, 1);
        engine2.ctx.restore();
      }
      for (const pop of this.scorePopups) {
        const alpha = pop.life / pop.maxLife;
        engine2.ctx.save();
        engine2.ctx.globalAlpha = alpha;
        engine2.drawText(pop.text, pop.x | 0, pop.y | 0, pop.color, Math.round(16 * pop.scale), {
          font: "Consolas",
          align: "center",
          shadow: true,
          shadowColor: 1
        });
        engine2.ctx.restore();
      }
      if (this.combo > 1) {
        const comboColor = this.combo >= 10 ? 19 : this.combo >= 5 ? 25 : 5;
        engine2.drawText(`COMBO x${this.combo}`, 620, 20, comboColor, 14, {
          font: "Consolas",
          align: "right",
          shadow: true,
          shadowColor: 1
        });
        if (this.combo >= 5) {
          engine2.drawText("CHAIN!", 620, 38, comboColor, 12, {
            font: "Consolas",
            align: "right",
            shadow: true,
            shadowColor: 1
          });
        }
      }
      if (this.totalGraze > 0) {
        engine2.drawText(`GRAZE: ${this.totalGraze}`, 20, 20, 25, 12, {
          font: "Consolas",
          align: "left",
          shadow: true,
          shadowColor: 1
        });
      }
    }
    // ── Render de la barra de power-ups (ancho completo) ────────────────
    _renderPowerBar(engine2) {
      const SLOT_W = 100;
      const START_X = 20;
      const BAR_Y = 448;
      const BAR_H = 30;
      const t = this.animTimer;
      const pE = this.pwr.effects;
      engine2.drawRect(0, BAR_Y - 2, 640, BAR_H + 2, 0, true);
      engine2.drawRect(0, BAR_Y - 2, 640, 1, 2, true);
      const slotActive = [
        pE.speedLevel > 0,
        pE.missileLevel > 0,
        pE.hasDouble,
        pE.laserActive,
        pE.optionCount > 0,
        false
      ];
      const getStatusBadge = (idx) => {
        switch (idx) {
          case 0:
            if (pE.speedLevel === 1) {
              return "Lv1";
            }
            if (pE.speedLevel === 2) {
              return "Lv2";
            }
            if (pE.speedLevel >= 3) {
              return "MAX";
            }
            return "";
          case 1:
            if (pE.missileLevel === 1) {
              return "DOWN";
            }
            if (pE.missileLevel >= 2) {
              return "DUAL";
            }
            return "";
          case 2:
            return pE.hasDouble ? "ON" : "";
          case 3:
            return pE.laserActive ? "ON" : "";
          case 4:
            if (pE.optionCount === 1) {
              return "x1";
            }
            if (pE.optionCount >= 2) {
              return "x2";
            }
            return "";
          default:
            return "";
        }
      };
      for (let i = 0; i < PW_COUNT; i++) {
        const sx = START_X + i * SLOT_W | 0;
        const isCursor = this.pwr.cursor >= 0 && i === this.pwr.cursor;
        const isOn = slotActive[i];
        const statusBadge = getStatusBadge(i);
        let bgCol = isCursor ? Math.floor(t * 8) % 2 === 0 ? 1 : 0 : isOn ? 1 : 0;
        engine2.drawRect(sx, BAR_Y, SLOT_W - 4, BAR_H, bgCol, true);
        let bdrCol = isCursor ? Math.floor(t * 8) % 2 === 0 ? 25 : 3 : isOn ? 5 : 2;
        engine2.drawRect(sx, BAR_Y, SLOT_W - 4, BAR_H, bdrCol, false);
        if (isOn && !isCursor) {
          engine2.drawRect(sx + 2, BAR_Y + 1, SLOT_W - 8, 2, 6, true);
        }
        let txtCol = isCursor ? Math.floor(t * 8) % 2 === 0 ? 25 : 18 : isOn ? 25 : 3;
        engine2.drawText(
          PW_SLOTS[i],
          sx + (SLOT_W - 4) / 2 | 0,
          BAR_Y + 4,
          txtCol,
          10,
          { align: "center", bold: true, font: "Consolas" }
        );
        if (isOn && statusBadge) {
          const badgeCol = isCursor ? 25 : i === 3 && pE.laserTimer <= 3 && Math.floor(t * 6) % 2 === 0 ? 21 : 5;
          engine2.drawText(
            statusBadge,
            sx + (SLOT_W - 4) / 2 | 0,
            BAR_Y + 15,
            badgeCol,
            9,
            { align: "center", bold: true, font: "Consolas" }
          );
        }
        if (i === 4 && pE.optionCount > 0) {
          const ebW = SLOT_W - 12;
          const ebH = 3;
          const ebX = sx + 4;
          const ebY = BAR_Y + BAR_H - 5;
          const pct = pE.optionEnergy / pE.optionMaxEnergy;
          const fill = Math.floor(ebW * pct);
          const eCol = pct < 0.3 ? 21 : pct < 0.6 ? 25 : 5;
          engine2.drawRect(ebX, ebY, ebW, ebH, 0, true);
          engine2.drawRect(ebX, ebY, ebW, ebH, 2, false);
          if (fill > 0) {
            engine2.drawRect(ebX + 1, ebY + 1, fill - 2, ebH - 2, eCol, true);
          }
        }
        if (isCursor) {
          const arrowCol = Math.floor(t * 8) % 2 === 0 ? 25 : 3;
          engine2.drawPoly([
            [sx + (SLOT_W - 4) / 2 | 0, BAR_Y - 6],
            [sx + (SLOT_W - 4) / 2 - 4 | 0, BAR_Y - 1],
            [sx + (SLOT_W - 4) / 2 + 4 | 0, BAR_Y - 1]
          ], arrowCol, true, true);
        }
      }
    }
    // ── Renderizado de Estructuras Alienígenas Vivas ─────────────────────
    _renderAlienBiomeSegment(engine2, seg, t) {
      const ctx = engine2.ctx;
      if (!ctx) {
        return;
      }
      const biome = this.wave % 4;
      const pal = engine2.getPalette();
      const BIOME_PALETTES = [
        { navy: pal[1] || pal[0], primary: pal[2], secondary: pal[5], sub: pal[6] || pal[10], accent: pal[25], vein: pal[31] || pal[28] },
        // 0: Abisal (Cian/Verde)
        { navy: pal[0], primary: pal[19], secondary: pal[25], sub: pal[20], accent: pal[24] || pal[7], vein: pal[27] || pal[28] },
        // 1: Cristal/Magma (Oro/Carmesí)
        { navy: pal[1] || pal[0], primary: pal[6] || pal[5], secondary: pal[9] || pal[2], sub: pal[10] || pal[5], accent: pal[25], vein: pal[41] || pal[5] },
        // 2: Slime/Ácido (Lima/Turquesa)
        { navy: pal[0], primary: pal[4], secondary: pal[23] || pal[22], sub: pal[33] || pal[2], accent: pal[25], vein: pal[32] || pal[19] }
        // 3: Tecno/Sierra (Cobalto/Naranja)
      ];
      const bp = BIOME_PALETTES[biome];
      const bioDeepNavy = bp.navy;
      const bioCyan = bp.primary;
      const bioNeonGreen = bp.secondary;
      const bioLime = bp.sub;
      const bioGold = bp.accent;
      const bioViolet = bp.vein;
      if (seg.topH > 4) {
        const topBaseY = 32;
        const step = 16;
        const points = [];
        points.push([seg.x, topBaseY]);
        points.push([seg.x + seg.w, topBaseY]);
        for (let rx = seg.w; rx >= 0; rx -= step) {
          const wx = seg.x + rx;
          const breath = Math.sin(t * 2.4 + wx * 0.03) * 0.14 + Math.cos(t * 1.8 + wx * 0.05) * 0.08;
          const bump = Math.sin(wx * 0.06) * 5 + Math.sin(t * 3.2 + wx * 0.12) * 3;
          const hy = topBaseY + seg.topH * (0.84 + breath) + bump;
          points.push([wx, hy]);
        }
        points.push([seg.x, topBaseY]);
        ctx.save();
        ctx.fillStyle = bioDeepNavy;
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = bioCyan;
        ctx.shadowColor = bioCyan;
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2.2;
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(points[2][0], points[2][1]);
        for (let i = 3; i < points.length - 1; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.stroke();
        ctx.strokeStyle = bioLime;
        ctx.shadowColor = bioLime;
        ctx.shadowBlur = 6;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
        ctx.save();
        const veinCount = Math.floor(seg.w / 38);
        for (let v = 0; v < veinCount; v++) {
          const vx = seg.x + 18 + v * 38;
          const pulse = Math.sin(t * 3.5 + v * 0.9) * 0.5 + 0.5;
          const vCol = pulse > 0.6 ? bioGold : pulse > 0.3 ? bioNeonGreen : bioCyan;
          const vLen = seg.topH * 0.65;
          ctx.strokeStyle = vCol;
          ctx.shadowColor = vCol;
          ctx.shadowBlur = 8;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(vx, topBaseY + 4);
          ctx.quadraticCurveTo(vx + Math.sin(t * 2 + v) * 8, topBaseY + vLen * 0.5, vx + Math.cos(t * 3 + v) * 10, topBaseY + vLen);
          ctx.stroke();
          ctx.fillStyle = pulse > 0.5 ? bioGold : bioNeonGreen;
          ctx.beginPath();
          ctx.arc(vx + Math.cos(t * 3 + v) * 10, topBaseY + vLen, 2.2 + pulse * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        ctx.save();
        const ciliaCount = Math.floor(seg.w / 24);
        for (let c = 0; c < ciliaCount; c++) {
          const cx = seg.x + 12 + c * 24;
          const breath = Math.sin(t * 2.4 + cx * 0.03) * 0.14;
          const cy = topBaseY + seg.topH * (0.84 + breath) + Math.sin(cx * 0.06) * 5;
          const sway1 = Math.sin(t * 3 + c * 0.7) * 7;
          const sway2 = Math.cos(t * 4 + c * 0.9) * 10;
          const len = 10 + Math.sin(t * 2 + c) * 4;
          ctx.strokeStyle = bioNeonGreen;
          ctx.shadowColor = bioNeonGreen;
          ctx.shadowBlur = 6;
          ctx.lineWidth = 1.5;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.quadraticCurveTo(cx + sway1, cy + len * 0.5, cx + sway2, cy + len);
          ctx.stroke();
          ctx.fillStyle = bioGold;
          ctx.beginPath();
          ctx.arc(cx + sway2, cy + len, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      if (seg.bottomH > 4) {
        const botBaseY = 440;
        const step = 16;
        const points = [];
        points.push([seg.x, botBaseY]);
        points.push([seg.x + seg.w, botBaseY]);
        for (let rx = seg.w; rx >= 0; rx -= step) {
          const wx = seg.x + rx;
          const breath = Math.cos(t * 2.4 + wx * 0.03) * 0.14 + Math.sin(t * 1.8 + wx * 0.05) * 0.08;
          const bump = Math.cos(wx * 0.06) * 5 + Math.cos(t * 3.2 + wx * 0.12) * 3;
          const hy = botBaseY - seg.bottomH * (0.84 + breath) - bump;
          points.push([wx, hy]);
        }
        points.push([seg.x, botBaseY]);
        ctx.save();
        ctx.fillStyle = bioDeepNavy;
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = bioNeonGreen;
        ctx.shadowColor = bioNeonGreen;
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2.2;
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(points[2][0], points[2][1]);
        for (let i = 3; i < points.length - 1; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.stroke();
        ctx.strokeStyle = bioCyan;
        ctx.shadowColor = bioCyan;
        ctx.shadowBlur = 6;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
        ctx.save();
        const veinCount = Math.floor(seg.w / 38);
        for (let v = 0; v < veinCount; v++) {
          const vx = seg.x + 22 + v * 38;
          const pulse = Math.cos(t * 3.5 + v * 0.9) * 0.5 + 0.5;
          const vCol = pulse > 0.6 ? bioGold : pulse > 0.3 ? bioCyan : bioViolet;
          const vLen = seg.bottomH * 0.65;
          ctx.strokeStyle = vCol;
          ctx.shadowColor = vCol;
          ctx.shadowBlur = 8;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(vx, botBaseY - 4);
          ctx.quadraticCurveTo(vx + Math.cos(t * 2 + v) * 8, botBaseY - vLen * 0.5, vx + Math.sin(t * 3 + v) * 10, botBaseY - vLen);
          ctx.stroke();
          ctx.fillStyle = pulse > 0.5 ? bioGold : bioCyan;
          ctx.beginPath();
          ctx.arc(vx + Math.sin(t * 3 + v) * 10, botBaseY - vLen, 2.2 + pulse * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        ctx.save();
        const ciliaCount = Math.floor(seg.w / 24);
        for (let c = 0; c < ciliaCount; c++) {
          const cx = seg.x + 12 + c * 24;
          const breath = Math.cos(t * 2.4 + cx * 0.03) * 0.14;
          const cy = botBaseY - seg.bottomH * (0.84 + breath) - Math.cos(cx * 0.06) * 5;
          const sway1 = Math.cos(t * 3 + c * 0.7) * 7;
          const sway2 = Math.sin(t * 4 + c * 0.9) * 10;
          const len = 10 + Math.cos(t * 2 + c) * 4;
          ctx.strokeStyle = bioCyan;
          ctx.shadowColor = bioCyan;
          ctx.shadowBlur = 6;
          ctx.lineWidth = 1.5;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.quadraticCurveTo(cx + sway1, cy - len * 0.5, cx + sway2, cy - len);
          ctx.stroke();
          ctx.fillStyle = bioLime;
          ctx.beginPath();
          ctx.arc(cx + sway2, cy - len, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }
  };
  var isMobile = isSmartphone() && !isAndroid();
  var engine = new Palugo({
    width: 640,
    height: 480,
    fps: 60,
    palette: Palettes.VECTOR,
    touchControls: isMobile,
    isMobile,
    masterVolume: 0.16,
    debug: false,
    gameId: "k573z71gvdx902ocvegl74uvgrwqsi73"
  });
  var game = new ShmupGame();
  var _menuTitle = typeof HudConfig !== "undefined" && HudConfig.menu_title && HudConfig.menu_title.text ? HudConfig.menu_title.text : "NULLPOINTER.Type";
  var menu = new PalugoMenu(engine, { title: _menuTitle, gameInstance: game });
  menu.paletteIdx = 6;
  menu._applyPalette();
  engine._menu = menu;
  var app = {
    init(e) {
      menu.gameInstance = game;
    },
    update(i, dt) {
      menu.update(i, dt);
    },
    render(e) {
      menu.render(e);
    }
  };
  engine.start(app);
})();
//# sourceMappingURL=game.js.map
