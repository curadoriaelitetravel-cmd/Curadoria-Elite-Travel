// /api/list-materials.js
// Mock para listar materiais/produtos no painel ADMIN
// Depois pode ser substituído por banco de dados

export default function handler(req, res) {
  const items = [
    {
      title: "Guia Veneza — Essencial",
      category: "Guia Digital",
      city: "Veneza",
      country: "Itália",
      price: 89.90,
      file_url: "https://curadoriaelitetravel.com/materials/veneza.pdf"
    },
    {
      title: "Guia Paris — 3 Dias Inspiradores",
      category: "Guia Digital",
      city: "Paris",
      country: "França",
      price: 119.90,
      file_url: "https://curadoriaelitetravel.com/materials/paris.pdf"
    },
    {
      title: "Guia Vale Sagrado — Completo",
      category: "Guia Digital",
      city: "Cusco",
      country: "Peru",
      price: 99.90,
      file_url: "https://curadoriaelitetravel.com/materials/valesagrado.pdf"
    }
  ];

  res.status(200).json({ items });
}
