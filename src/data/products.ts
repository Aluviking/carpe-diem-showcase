export type Category =
  | 'Camisetas'
  | 'Polos'
  | 'Sudaderas'
  | 'Bolsos'
  | 'Gorras'
  | 'Zapatos'
  | 'Accesorios'
  | 'Lifestyle';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  images?: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  stock: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  badge?: string;
}

export const categories: Category[] = [
  'Camisetas',
  'Polos',
  'Sudaderas',
  'Bolsos',
  'Gorras',
  'Zapatos',
  'Accesorios',
  'Lifestyle',
];

export const products: Product[] = [
  // ─── CAMISETAS ────────────────────────────────────────────────────────────
  {
    id: 'cam-01',
    name: 'Esencia Clásica',
    category: 'Camisetas',
    price: 89000,
    description: 'Camiseta de algodón premium con corte relajado. Tejido suave al tacto con acabado artesanal. Perfecta para el día a día con estilo.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Marfil', hex: '#F5F0E8' },
      { name: 'Carbón', hex: '#3A3A3A' },
      { name: 'Arena', hex: '#C4A882' },
    ],
    stock: 15,
    rating: 4.8,
    reviewCount: 124,
    badge: 'Más vendido',
    featured: true,
  },
  {
    id: 'cam-02',
    name: 'Mística Oversize',
    category: 'Camisetas',
    price: 95000,
    description: 'Oversize con estampado sutil. Algodón orgánico 100%, fresquito y cómodo. El favorito de quienes visten con carácter.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Gris Piedra', hex: '#8A8580' },
    ],
    stock: 8,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: 'cam-03',
    name: 'Aureum Tee',
    category: 'Camisetas',
    price: 110000,
    originalPrice: 138000,
    description: 'Edición limitada con detalles dorados bordados a mano. Corte slim fit contemporáneo para ocasiones especiales.',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco Hueso', hex: '#F0EBE0' },
      { name: 'Dorado Oscuro', hex: '#8B7355' },
    ],
    stock: 5,
    rating: 4.9,
    reviewCount: 67,
    badge: 'Edición limitada',
    featured: true,
  },
  {
    id: 'cam-04',
    name: 'Básica Premium',
    category: 'Camisetas',
    price: 75000,
    description: 'La camiseta básica perfecta. Algodón peinado 180g, corte regular. Disponible en los colores más versátiles de la colección.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Azul Marino', hex: '#1B2A4A' },
      { name: 'Vino', hex: '#722F37' },
    ],
    stock: 30,
    rating: 4.7,
    reviewCount: 203,
    badge: 'Nuevo',
  },

  // ─── POLOS ────────────────────────────────────────────────────────────────
  {
    id: 'pol-01',
    name: 'Polo Eterno',
    category: 'Polos',
    price: 98000,
    description: 'Polo piqué de algodón premium. Corte clásico con detalles modernos. Ideal para ambientes casuales y semi-formales.',
    image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#FAFAFA' },
      { name: 'Azul Marino', hex: '#1B2A4A' },
      { name: 'Verde Oliva', hex: '#556B2F' },
    ],
    stock: 18,
    rating: 4.7,
    reviewCount: 78,
    featured: true,
  },
  {
    id: 'pol-02',
    name: 'Polo Slim Heritage',
    category: 'Polos',
    price: 105000,
    description: 'Polo slim fit con bordado en el pecho. Tela stretch para mayor comodidad. Un clásico reinventado con sello colombiano.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Gris Claro', hex: '#C8C8C8' },
      { name: 'Beige', hex: '#D4C5A9' },
    ],
    stock: 12,
    rating: 4.5,
    reviewCount: 45,
  },

  // ─── SUDADERAS ────────────────────────────────────────────────────────────
  {
    id: 'sud-01',
    name: 'Sudadera Monumental',
    category: 'Sudaderas',
    price: 145000,
    description: 'Sudadera fleece 320g con capucha. Cordones planos, bolsillo canguro. El abrigo perfecto para los días de relax y comodidad total.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Gris Melange', hex: '#9E9E9E' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Crema', hex: '#F0EBE0' },
    ],
    stock: 14,
    rating: 4.8,
    reviewCount: 112,
    badge: 'Más vendido',
    featured: true,
  },
  {
    id: 'sud-02',
    name: 'Hoodie Oversize Premium',
    category: 'Sudaderas',
    price: 165000,
    originalPrice: 210000,
    description: 'Hoodie oversize de algodón heavyweight. Fit relajado y cómodo. Diseño clean con detalle bordado en el interior.',
    image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Café Oscuro', hex: '#3E2723' },
      { name: 'Azul Profundo', hex: '#1B2A4A' },
      { name: 'Blanco Hueso', hex: '#F0EBE0' },
    ],
    stock: 9,
    rating: 4.9,
    reviewCount: 88,
    badge: 'Edición limitada',
  },

  // ─── BOLSOS ───────────────────────────────────────────────────────────────
  {
    id: 'bol-01',
    name: 'Tote Claustro',
    category: 'Bolsos',
    price: 185000,
    originalPrice: 235000,
    description: 'Bolso tote de cuero vegano con acabado envejecido. Amplio y elegante para el día a día. Asas reforzadas y bolsillo interior con cierre.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&h=750&fit=crop',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Chocolate', hex: '#3E2723' },
      { name: 'Negro', hex: '#1A1A1A' },
    ],
    stock: 10,
    rating: 4.8,
    reviewCount: 56,
    featured: true,
  },
  {
    id: 'bol-02',
    name: 'Crossbody Vitral',
    category: 'Bolsos',
    price: 145000,
    description: 'Bandolera compacta con cierre magnético y compartimentos interiores. Correa ajustable. Cabe el celular, billetera y llaves.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&h=750&fit=crop',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Terracota', hex: '#A0522D' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Verde Oliva', hex: '#556B2F' },
    ],
    stock: 12,
    rating: 4.6,
    reviewCount: 73,
  },
  {
    id: 'bol-03',
    name: 'Bolso Domingo',
    category: 'Bolsos',
    price: 125000,
    description: 'Bolso mediano de lona canvas con detalles en cuero. Elegante y práctico. El accesorio ideal para acompañarte en cada momento.',
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Beige Canvas', hex: '#D4C5A9' },
      { name: 'Azul Marino', hex: '#1B2A4A' },
    ],
    stock: 7,
    rating: 4.5,
    reviewCount: 34,
    badge: 'Nuevo',
  },

  // ─── GORRAS ───────────────────────────────────────────────────────────────
  {
    id: 'gor-01',
    name: 'Cap Arco Curved',
    category: 'Gorras',
    price: 65000,
    description: 'Gorra curved con bordado frontal discreto. Ajuste trasero metálico. Tela 100% algodón lavado para un look casual premium.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=750&fit=crop',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Beige', hex: '#D4C5A9' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Verde Musgo', hex: '#4A5D23' },
    ],
    stock: 20,
    rating: 4.7,
    reviewCount: 149,
    badge: 'Más vendido',
  },
  {
    id: 'gor-02',
    name: 'Bucket Cúpula',
    category: 'Gorras',
    price: 72000,
    description: 'Bucket hat de algodón lavado con ala ancha. Protección solar con estilo. Reversible, viene en dos colores en una sola pieza.',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=750&fit=crop',
    ],
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Crema', hex: '#F5F0E8' },
      { name: 'Café', hex: '#6B4E37' },
    ],
    stock: 14,
    rating: 4.5,
    reviewCount: 62,
  },
  {
    id: 'gor-03',
    name: 'Trucker Classic',
    category: 'Gorras',
    price: 58000,
    description: 'Gorra trucker con malla trasera. Bordado en el frente con diseño minimalista. Ajuste snapback, talla única.',
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=750&fit=crop',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Blanco/Negro', hex: '#F5F5F5' },
      { name: 'Negro/Negro', hex: '#1A1A1A' },
    ],
    stock: 22,
    rating: 4.4,
    reviewCount: 41,
    badge: 'Nuevo',
  },

  // ─── ZAPATOS ──────────────────────────────────────────────────────────────
  {
    id: 'zap-01',
    name: 'Derby Nave',
    category: 'Zapatos',
    price: 280000,
    originalPrice: 348000,
    description: 'Derby de cuero con suela de goma natural. Costura Goodyear para máxima durabilidad. Ideal para ocasiones formales y casuales.',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1542291026-5ef686a87469?w=600&h=750&fit=crop',
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Cognac', hex: '#9A6233' },
      { name: 'Negro', hex: '#1A1A1A' },
    ],
    stock: 7,
    rating: 4.9,
    reviewCount: 93,
    featured: true,
  },
  {
    id: 'zap-02',
    name: 'Sneaker Cripta',
    category: 'Zapatos',
    price: 220000,
    description: 'Sneaker minimalista en cuero suave. Suela chunky con perfil bajo. Comodidad suprema para el día a día urbano.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1542291026-5ef686a87469?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=750&fit=crop',
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Blanco Roto', hex: '#F0EBE0' },
      { name: 'Beige', hex: '#D4C5A9' },
      { name: 'Negro', hex: '#1A1A1A' },
    ],
    stock: 11,
    rating: 4.7,
    reviewCount: 118,
    badge: 'Más vendido',
  },
  {
    id: 'zap-03',
    name: 'Boot Ábside',
    category: 'Zapatos',
    price: 350000,
    originalPrice: 428000,
    description: 'Bota Chelsea en cuero envejecido con elásticos laterales. Suela de cuero y goma mixta. Carácter y elegancia en cada paso.',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1542291026-5ef686a87469?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=750&fit=crop',
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Marrón Envejecido', hex: '#6B4E37' },
      { name: 'Negro', hex: '#2A2A2A' },
    ],
    stock: 4,
    rating: 4.8,
    reviewCount: 47,
    badge: 'Edición limitada',
  },

  // ─── ACCESORIOS ───────────────────────────────────────────────────────────
  {
    id: 'acc-01',
    name: 'Cinturón Clásico',
    category: 'Accesorios',
    price: 75000,
    description: 'Cinturón de cuero genuino con hebilla metálica dorada. Ancho 3.5cm. El detalle que eleva cualquier outfit al siguiente nivel.',
    image: 'https://images.unsplash.com/photo-1624222247344-552a4abe4b10?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1624222247344-552a4abe4b10?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop',
    ],
    sizes: ['S (80-90cm)', 'M (90-100cm)', 'L (100-110cm)', 'XL (110-120cm)'],
    colors: [
      { name: 'Marrón', hex: '#8B5E3C' },
      { name: 'Negro', hex: '#1A1A1A' },
    ],
    stock: 18,
    rating: 4.6,
    reviewCount: 55,
  },
  {
    id: 'acc-02',
    name: 'Billetera Slim',
    category: 'Accesorios',
    price: 65000,
    originalPrice: 82000,
    description: 'Billetera delgada en cuero genuino. 6 compartimentos para tarjetas + porta billetes. Bloqueo RFID incluido.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1624222247344-552a4abe4b10?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=750&fit=crop',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Marrón', hex: '#8B5E3C' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Cognac', hex: '#9A6233' },
    ],
    stock: 25,
    rating: 4.8,
    reviewCount: 87,
    badge: 'Más vendido',
  },
  {
    id: 'acc-03',
    name: 'Gafas Heritage',
    category: 'Accesorios',
    price: 88000,
    description: 'Gafas de sol con armazón acetato y lentes polarizadas UV400. Estuche incluido. Protege tus ojos con estilo.',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1624222247344-552a4abe4b10?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Carey', hex: '#8B5E3C' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Transparente', hex: '#E8E0D0' },
    ],
    stock: 13,
    rating: 4.5,
    reviewCount: 39,
    badge: 'Nuevo',
  },
  {
    id: 'acc-04',
    name: 'Medias Pack x3',
    category: 'Accesorios',
    price: 35000,
    description: 'Pack de 3 pares de medias de algodón con diseños únicos. Comodidad y estilo en cada detalle. El complemento perfecto del look.',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1624222247344-552a4abe4b10?w=600&h=750&fit=crop',
    ],
    sizes: ['35-38', '39-42', '43-46'],
    colors: [
      { name: 'Mix Clásico', hex: '#D4C5A9' },
      { name: 'Mix Oscuro', hex: '#3A3A3A' },
    ],
    stock: 40,
    rating: 4.9,
    reviewCount: 201,
    badge: 'Más vendido',
  },

  // ─── LIFESTYLE ────────────────────────────────────────────────────────────
  {
    id: 'ls-01',
    name: 'Tee Signature',
    category: 'Lifestyle',
    price: 95000,
    description: 'Camiseta con tipografía artesanal bordada a mano. Algodón premium, edición especial de colección. Estilo que comunica.',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Crema', hex: '#F0EBE0' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Arena', hex: '#C4A882' },
    ],
    stock: 16,
    rating: 5.0,
    reviewCount: 76,
    badge: 'Edición limitada',
    featured: true,
  },
  {
    id: 'ls-02',
    name: 'Hoodie Signature',
    category: 'Lifestyle',
    price: 160000,
    description: 'Hoodie heavyweight con bordado artesanal en el pecho. Algodón premium, fit oversize. Un básico de alto impacto visual.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=750&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=750&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&h=750&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=750&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Azul Profundo', hex: '#1B2A4A' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Gris Carbón', hex: '#4A4A4A' },
    ],
    stock: 10,
    rating: 4.9,
    reviewCount: 54,
    badge: 'Nuevo',
  },
  {
    id: 'ls-03',
    name: 'Gorra Heritage',
    category: 'Lifestyle',
    price: 65000,
    description: 'Gorra curved con bordado exclusivo en el frente. Ajuste velcro trasero. Diseño de colección, piezas limitadas.',
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=750&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=750&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=750&fit=crop&q=80',
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Beige', hex: '#D4C5A9' },
      { name: 'Blanco', hex: '#F5F5F5' },
      { name: 'Negro', hex: '#1A1A1A' },
    ],
    stock: 19,
    rating: 4.8,
    reviewCount: 98,
    badge: 'Más vendido',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'María Camila R.',
    city: 'Medellín',
    rating: 5,
    comment: 'La calidad es increíble, la Esencia Clásica se siente premium desde el primer uso. El empaque también es hermoso. ¡100% recomendada!',
    product: 'Esencia Clásica',
    initials: 'MC',
  },
  {
    id: 2,
    name: 'Andrés Felipe G.',
    city: 'Bogotá',
    rating: 5,
    comment: 'Pedí el Derby Nave y llegó en perfectas condiciones. El cuero es de primera y la comodidad es total. Ya estoy pensando en el siguiente par.',
    product: 'Derby Nave',
    initials: 'AG',
  },
  {
    id: 3,
    name: 'Valentina S.',
    city: 'Cali',
    rating: 5,
    comment: 'Me encantó la Tee Signature. Diseño único y tela súper suave. Recibí muchos comentarios positivos. La entrega fue rápida y el empaque impecable.',
    product: 'Tee Signature',
    initials: 'VS',
  },
  {
    id: 4,
    name: 'Juan Pablo M.',
    city: 'Pereira',
    rating: 5,
    comment: 'El Hoodie Oversize Premium es todo. Cómodo, estético y con una confección de primera. La atención fue rápida y el envío llegó antes de lo esperado.',
    product: 'Hoodie Oversize Premium',
    initials: 'JM',
  },
  {
    id: 5,
    name: 'Laura Cristina H.',
    city: 'Barranquilla',
    rating: 4,
    comment: 'El Tote Claustro superó mis expectativas. El cuero vegano se ve y se siente de lujo. Gran capacidad. Lo uso para trabajar y es perfecto.',
    product: 'Tote Claustro',
    initials: 'LH',
  },
  {
    id: 6,
    name: 'Santiago O.',
    city: 'Manizales',
    rating: 5,
    comment: 'Compré el Polo Eterno para una reunión y todos preguntaron dónde lo conseguí. Elegante, cómodo y de muy buena calidad. Volveré seguro.',
    product: 'Polo Eterno',
    initials: 'SO',
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
};
