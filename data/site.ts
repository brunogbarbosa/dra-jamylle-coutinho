export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Jamylle Coutinho', monogram: 'JC',
  headline: 'Sua beleza. Sua essência. Sua versão.',
  cro: '',
  bio: 'Dra. Jamylle Coutinho. Harmonização facial e Método JC FULL. Um olhar para uma versão mais jovem, elegante e natural, respeitando os seus traços e a sua identidade.',
  education: [] as string[], specialties: ['Harmonização facial', 'Método JC FULL'],
  phone: '+55 85 99222-5327', whatsapp: '5585992225327',
  whatsappUrl: 'https://wa.me/5585992225327?text=Ol%C3%A1%2C%20Dra.%20Jamylle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: '', professionalPhilosophy: 'Jovem, elegante e natural.',
  instagram: 'https://www.instagram.com/dra.jamyllecoutinho/', instagramHandle: '@dra.jamyllecoutinho',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA VERSÃO.'],
  colors: { paper: '#F5F2EA', surface: '#E8E2D6', white: '#FFFDF7', ink: '#20282B', taupe: '#8B7956', champagne: '#CDB887', dark: '#10171B', wine: '#20282B', muted: '#686C68' },
  images: { hero: '/images/jamylle-hero.png', essence: '/images/jamylle-essencia.png', about: '/images/jamylle-sobre.png', beauty: '/images/jamylle-ambiente.png' },
  procedures: [] as Procedure[], office: [] as { src: string; alt: string }[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.jpg', label: 'Identidade em primeiro lugar', alt: 'Registro original lado a lado, sem e com Método JC, em vista frontal.', orientation: 'horizontal', beforeShare: 648/1284, comparisonRatio: 1284/1290 },
    { image: '/images/resultado-02.jpg', label: 'O olhar do Método JC FULL', alt: 'Registro original de antes e depois, lado a lado, em vista de três quartos.', orientation: 'horizontal', beforeShare: 618/1257, comparisonRatio: 1257/1600 },
    { image: '/images/resultado-03.jpg', label: 'A beleza de cada ângulo', alt: 'Comparação original lado a lado do perfil facial.', orientation: 'horizontal', beforeShare: 648/1282, comparisonRatio: 1282/1600 },
    { image: '/images/resultado-04.jpg', label: 'Traços e expressão', alt: 'Comparação original frontal de antes e depois, lado a lado.', orientation: 'horizontal', beforeShare: 624/1252, comparisonRatio: 1252/1600 },
    { image: '/images/resultado-05.jpg', label: 'Harmonia no perfil', alt: 'Registro original de perfil, antes e depois do Método JC FULL, lado a lado.', orientation: 'horizontal', beforeShare: 630/1284, comparisonRatio: 1284/1590 },
    { image: '/images/resultado-06.jpg', label: 'Uma beleza singular', alt: 'Registro original frontal, antes e depois, lado a lado.', orientation: 'horizontal', beforeShare: 591/1193, comparisonRatio: 1193/1600 },
  ] },
  seo: { title: 'Dra. Jamylle Coutinho | Harmonização Facial · Método JC FULL', description: 'Conheça o olhar da Dra. Jamylle Coutinho para a harmonização facial. Método JC FULL, resultados reais e agendamento pelo WhatsApp.', url: '' },
};
export const appointmentUrl = site.whatsappUrl;
