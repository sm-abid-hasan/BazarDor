
export function getChange(product) {
  if (product.change && product.change.dir) {
    const dir = ["up", "down"].includes(product.change.dir)
      ? product.change.dir
      : "flat";
    return { dir, pct: Number(product.change.pct) || 0 };
  }

  const diff = product.today - product.yesterday;
  if (!product.yesterday || diff === 0) return { dir: "flat", pct: 0 };
  return {
    dir: diff > 0 ? "up" : "down",
    pct: Math.round((Math.abs(diff) / product.yesterday) * 1000) / 10,
  };
}

export function getTopMovers(products, dir, count = 6) {
  return products
    .filter((product) => getChange(product).dir === dir)
    .sort((a, b) => getChange(b).pct - getChange(a).pct)
    .slice(0, count);
}

export function sortProducts(products, mode) {
  const list = [...products];
  if (mode === "asc") return list.sort((a, b) => a.today - b.today);
  if (mode === "desc") return list.sort((a, b) => b.today - a.today);
  return list;
}

export function getPriceStats(markets = []) {
  if (markets.length === 0) return null;

  const rows = markets.map((m) => ({ ...m, avg: (m.min + m.max) / 2 }));

  const minRow = rows.reduce((a, b) => (b.min < a.min ? b : a));
  const maxRow = rows.reduce((a, b) => (b.max > a.max ? b : a));
  const average = rows.reduce((sum, r) => sum + r.avg, 0) / rows.length;

  return {
    rows,
    min: { value: minRow.min, market: minRow.market },
    max: { value: maxRow.max, market: maxRow.market },
    average,
    cheapestMarket: rows.reduce((a, b) => (b.avg < a.avg ? b : a)).market,
  };
}
