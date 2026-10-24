// lib/file-type.ts
// Identifierar bildtyp via magic bytes – litar aldrig på filnamn eller klientens MIME-typ

export type DetectedFileType = {
  mime: 'image/png' | 'image/jpeg' | 'image/gif' | 'image/webp'
  ext: 'png' | 'jpg' | 'gif' | 'webp'
}

function startsWith(buffer: Uint8Array, bytes: number[], offset = 0): boolean {
  if (buffer.length < offset + bytes.length) return false
  return bytes.every((b, i) => buffer[offset + i] === b)
}

function ascii(text: string): number[] {
  return Array.from(text, (c) => c.charCodeAt(0))
}

export function detectFileType(buffer: Uint8Array): DetectedFileType | null {
  if (startsWith(buffer, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) {
    return { mime: 'image/png', ext: 'png' }
  }
  if (startsWith(buffer, [0xff, 0xd8, 0xff])) {
    return { mime: 'image/jpeg', ext: 'jpg' }
  }
  if (startsWith(buffer, ascii('GIF87a')) || startsWith(buffer, ascii('GIF89a'))) {
    return { mime: 'image/gif', ext: 'gif' }
  }
  if (startsWith(buffer, ascii('RIFF')) && startsWith(buffer, ascii('WEBP'), 8)) {
    return { mime: 'image/webp', ext: 'webp' }
  }
  return null
}
