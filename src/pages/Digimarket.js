// src/pages/Digimarket.js
import React from 'react';
import '../Styles/Digimarket.css';

const popularProducts = [
  {
    id: 1,
    name: 'Kemeja Pria',
    price: 'Rp105.000',
    image: 'path-to-image-1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Abon Ikan',
    price: 'Rp35.000',
    image: 'path-to-image-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Pouch Jumputan',
    price: 'Rp75.000',
    image: 'path-to-image-3.jpg',
    rating: 5,
  },
];

const products = [
  {
    id: 4,
    name: 'Kain Jumputan',
    price: 'Rp150.000',
    image: 'path-to-image-4.jpg',
  },
  {
    id: 5,
    name: 'CLA Beauty White',
    price: 'Rp150.000',
    image: 'path-to-image-5.jpg',
  },
  {
    id: 6,
    name: 'Kikat Kepala',
    price: 'Rp25.000',
    image: 'path-to-image-6.jpg',
  },
  {
    id: 7,
    name: 'Lumpia Cik Renren',
    price: 'Rp55.000',
    image: 'path-to-image-7.jpg',
  },
  {
    id: 8,
    name: 'Zatun Spicy Makaroni',
    price: 'Rp25.000',
    image: 'path-to-image-8.jpg',
  },
  {
    id: 9,
    name: 'Hiasan Interior',
    price: 'Rp250.000',
    image: 'path-to-image-9.jpg',
  },
];

const Digimarket = () => {
  return (
    <div className="digimarket">
      {/* <header className="digimarket-header"> */}
        <h1>DigiMarket</h1>
        <nav className="digimarket-nav">
          <a href="#kategori">Kategori</a>
          <div className="search-bar">
            <input type="text" placeholder="Cari barangmu disini" />
            <button>🔍</button>
          </div>
          <select>
            <option value="terlaris">Urutkan: Terlaris</option>
            <option value="termurah">Urutkan: Termurah</option>
            <option value="termahal">Urutkan: Termahal</option>
          </select>
        </nav>
      {/* </header> */}
      <main className="digimarket-content">
        <section className="popular-section">
          <div className="popular-header">
            <h2>Produk Terlaris Minggu Ini</h2>
            <button className="btn-primary">Cek Selengkapnya</button>
          </div>
          <div className="popular-products">
            {popularProducts.map((product) => (
              <div key={product.id} className="product-card popular-product">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <div className="rating">
                  {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="all-products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Digimarket;
