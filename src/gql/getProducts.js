import { gql } from "graphql-request";

export const getProducts = gql`
Query {
    produks {
      id_produk
      nama_produk
      deskripsi
      harga
      stok
      gambar
      kategoriId_kategori {
        kategori
      }
    }
  }`;