import Link from "next/link";
import { fetchNoticias, deleteNoticia } from "./actions";
import { Button } from "@/components/ui/Button";

export default async function AdminNoticiasPage() {
  const noticias = await fetchNoticias();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notícias</h1>
        <Link href="/admin/noticias/novo">
          <Button>Nova Notícia</Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Título</th>
              <th className="py-2 px-4 border-b">Categoria</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Destaque Home</th>
              <th className="py-2 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {noticias.map((noticia: any) => (
              <tr key={noticia.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{noticia.title}</td>
                <td className="py-2 px-4 border-b">{noticia.category}</td>
                <td className="py-2 px-4 border-b">{noticia.status}</td>
                <td className="py-2 px-4 border-b">{noticia.is_home_featured ? "Sim" : "Não"}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <Link href={`/admin/noticias/${noticia.id}`}>
                    <Button variant="outline" size="sm">Editar</Button>
                  </Link>
                  <form action={async () => {
                    "use server";
                    await deleteNoticia(noticia.id);
                  }}>
                    <Button type="submit" variant="outline" size="sm" className="text-red-600 border-red-600">Excluir</Button>
                  </form>
                </td>
              </tr>
            ))}
            {noticias.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Nenhuma notícia cadastrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
