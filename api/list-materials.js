// api/list-materials.js
export default function handler(req, res){
  // Retorna dados mock — substitua por Supabase / DB no futuro
  const items = [
    { title:'Guia de Paris', category:'City Guide', city:'Paris', country:'França', price:49.90, file_url:'#' },
    { title:'Guia Nova York - restaurantes', category:'Restaurantes', city:'Nova York', country:'EUA', price:29.90, file_url:'#' }
  ];
  res.status(200).json(items);
}
