import { API_URL } from "@/lib/constants";

async function fetchJson(path) {
  const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 300 } });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`API error ${res.status} for ${path}`);

  return res.json();
}

function toArray(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.products)) return data.products;
  if (data && Array.isArray(data.categories)) return data.categories;
  return [];
}

export async function getProducts() {
  return toArray(await fetchJson("/products"));
}

export async function getCategories() {
  return toArray(await fetchJson("/categories"));
}

export async function getCategory(slug) {
  const data = await fetchJson(`/categories/${encodeURIComponent(slug)}`);
  if (!data || !data.slug) return null;
  return data;
}

export async function getProductsByCategory(slug) {
  return toArray(await fetchJson(`/products?category=${encodeURIComponent(slug)}`));
}

export async function getProductBySlug(slug) {
  const all = await getProducts();
  const found = all.find((product) => product.slug === slug);
  if (!found) return null;

  const full = await fetchJson(`/products/${found.id}`);
  return full || found;
}
