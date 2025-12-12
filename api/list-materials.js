// api/list-materials.js - mock
export default function handler(req, res) {
  const items = [
    { title: 'Guia de Paris', category: 'City Guide', city: 'Paris', country: 'França', price: 49.90, file_url: '#' },
    { title: 'Guia Nova York - Gastronomia', category: 'Restaurantes', city: 'Nova York', country: 'EUA', price: 29.90, file_url: '#' }
  ];
  res.status(200).json(items);
}
