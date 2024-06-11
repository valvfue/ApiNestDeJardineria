import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [gamas, setGamas] = useState([]);

  useEffect(() => {
    fetch('http://192.168.8.99:3000/api/gamas')
      .then((res) => res.json())
      .then((data) => setGamas(data));
  }, []);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            {gamas.map((gama) => (
              <li key={gama.id}>
                <Link href={`/gamas/${gama.id}`}>
                  <a className="text-white">{gama.nombre}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

