/** Clean images for detail-page CTAs — no marketing text overlays. */
export const detailCtaImages = [
  '/images/stock/cta-truck.jpg',
  '/images/stock/cta-reefer.jpg',
  '/images/stock/hero-truck.jpg',
  '/banners/refie 3.jpg',
  '/banners/refire 2.jpg',
  '/banners/refieg cold storage.jpg',
] as const;

export function getDetailCtaImage(id: string, sectionOffset = 0) {
  const numericId = Number.parseInt(id, 10);
  const index = (numericId + sectionOffset) % detailCtaImages.length;
  return detailCtaImages[index];
}
