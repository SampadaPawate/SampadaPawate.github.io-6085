// Helper to get the correct asset path with basePath prefix
export function getAssetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/SampadaPawate.github.io-6085' : '';
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
