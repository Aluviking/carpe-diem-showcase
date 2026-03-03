export type Category = 'Camisetas' | 'Bolsos' | 'Gorras' | 'Maletas' | 'Zapatos';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  stock: number;
}

export const categories: Category[] = ['Camisetas', 'Bolsos', 'Gorras', 'Maletas', 'Zapatos'];

export const products: Product[] = [
  // Camisetas
  {
    id: 'cam-01',
    name: 'Esencia Clásica',
    category: 'Camisetas',
    price: 89000,
    description: 'Camiseta de algodón premium con corte relajado. Tejido suave al tacto con acabado artesanal.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Marfil', hex: '#F5F0E8' },
      { name: 'Carbón', hex: '#3A3A3A' },
      { name: 'Arena', hex: '#C4A882' },
    ],
    stock: 15,
  },
  {
    id: 'cam-02',
    name: 'Mística Oversize',
    category: 'Camisetas',
    price: 95000,
    description: 'Oversize con estampado sutil inspirado en arquitectura gótica. Algodón orgánico 100%.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Gris Piedra', hex: '#8A8580' },
    ],
    stock: 8,
  },
  {
    id: 'cam-03',
    name: 'Aureum Tee',
    category: 'Camisetas',
    price: 110000,
    description: 'Edición limitada con detalles dorados bordados a mano. Corte slim fit contemporáneo.',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Blanco Hueso', hex: '#F0EBE0' },
      { name: 'Dorado Oscuro', hex: '#8B7355' },
    ],
    stock: 5,
  },
  // Bolsos
  {
    id: 'bol-01',
    name: 'Claustro Tote',
    category: 'Bolsos',
    price: 185000,
    description: 'Bolso tote de cuero vegano con acabado envejecido. Amplio y elegante para el día a día.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop',
    sizes: ['Único'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Chocolate', hex: '#3E2723' },
    ],
    stock: 10,
  },
  {
    id: 'bol-02',
    name: 'Vitral Crossbody',
    category: 'Bolsos',
    price: 145000,
    description: 'Bandolera compacta con cierre magnético y compartimentos interiores. Correa ajustable.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop',
    sizes: ['Único'],
    colors: [
      { name: 'Terracota', hex: '#A0522D' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Oliva', hex: '#556B2F' },
    ],
    stock: 12,
  },
  // Gorras
  {
    id: 'gor-01',
    name: 'Arco Curved Cap',
    category: 'Gorras',
    price: 65000,
    description: 'Gorra curved con bordado frontal discreto. Ajuste trasero metálico.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop',
    sizes: ['Único'],
    colors: [
      { name: 'Beige', hex: '#D4C5A9' },
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Verde Musgo', hex: '#4A5D23' },
    ],
    stock: 20,
  },
  {
    id: 'gor-02',
    name: 'Cúpula Bucket',
    category: 'Gorras',
    price: 72000,
    description: 'Bucket hat de algodón lavado con ala ancha. Protección solar con estilo monástico.',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=750&fit=crop',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Crema', hex: '#F5F0E8' },
      { name: 'Café', hex: '#6B4E37' },
    ],
    stock: 14,
  },
  // Maletas
  {
    id: 'mal-01',
    name: 'Peregrina Weekender',
    category: 'Maletas',
    price: 320000,
    description: 'Bolsa de viaje weekender en lona resistente con detalles de cuero. Capacidad 40L.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop',
    sizes: ['Único'],
    colors: [
      { name: 'Tabaco', hex: '#7B5B3A' },
      { name: 'Gris Ceniza', hex: '#808080' },
    ],
    stock: 6,
  },
  {
    id: 'mal-02',
    name: 'Sanctum Backpack',
    category: 'Maletas',
    price: 245000,
    description: 'Mochila urbana con compartimento acolchado para portátil. Diseño minimalista y funcional.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop',
    sizes: ['Único'],
    colors: [
      { name: 'Negro', hex: '#1A1A1A' },
      { name: 'Arena', hex: '#C4A882' },
    ],
    stock: 9,
  },
  // Zapatos
  {
    id: 'zap-01',
    name: 'Nave Derby',
    category: 'Zapatos',
    price: 280000,
    description: 'Derby de cuero con suela de goma natural. Costura Goodyear para máxima durabilidad.',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=750&fit=crop',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Cognac', hex: '#9A6233' },
      { name: 'Negro', hex: '#1A1A1A' },
    ],
    stock: 7,
  },
  {
    id: 'zap-02',
    name: 'Cripta Sneaker',
    category: 'Zapatos',
    price: 220000,
    description: 'Sneaker minimalista en cuero suave. Suela chunky con perfil bajo. Comodidad suprema.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=750&fit=crop',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Blanco Roto', hex: '#F0EBE0' },
      { name: 'Beige', hex: '#D4C5A9' },
      { name: 'Negro', hex: '#1A1A1A' },
    ],
    stock: 11,
  },
  {
    id: 'zap-03',
    name: 'Ábside Boot',
    category: 'Zapatos',
    price: 350000,
    description: 'Bota Chelsea en cuero envejecido con elásticos laterales. Suela de cuero y goma.',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Marrón Envejecido', hex: '#6B4E37' },
      { name: 'Negro', hex: '#2A2A2A' },
    ],
    stock: 4,
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
};
