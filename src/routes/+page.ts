export async function load() {
  const galleryImageModules = import.meta.glob('/static/img/gallery/medium/*.{jpg,jpeg,gif,webp}');
  const allGalleryImages = Object.keys(galleryImageModules).map(path => {
    const mediumUrl = path.replace('/static', '');
    const smallUrl = mediumUrl.replace('/medium/', '/small/');
    return {
      default: mediumUrl,
      small: smallUrl,
      medium: mediumUrl
    };
  });

  return {
    allGalleryImages
  };
}
