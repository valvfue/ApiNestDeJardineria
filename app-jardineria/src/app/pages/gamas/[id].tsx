import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from './src/app/layout.tsx';

export default function Gama() {
  const router = useRouter();
  const { id } = router.query;
  const [gama, setGama] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://192.168.8.99:3000/api/gamas/${id}`)
        .then((res) => res.json())
        .then((data) => setGama(data));
    }
  }, [id]);

  if (!gama) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{gama.nombre}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gama.productos.map((producto) => (
            <div key={producto.id} className="border p-4">
              <h2 className="text-xl font-bold">{producto.nombre}</h2>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
