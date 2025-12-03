/**
 * Helper function to construct asset paths that work with GitHub Pages basePath
 * 
 * When deployed to GitHub Pages at freeforcharity.github.io/freeforcharity-web/, 
 * all assets need to be prefixed with the repository name.
 * 
 * For the custom domain (freeforcharity.org), no basePath is needed.
 * 
 * @param path - The asset path starting with /
 * @returns The full asset path including basePath if configured
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}
