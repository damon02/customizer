declare module 'image-screenshot' {
  export function download(url: string, fullName: string): void
  export default async function screenshot(imgNode: any, format?: string, quality?: number): Promise<string>
}