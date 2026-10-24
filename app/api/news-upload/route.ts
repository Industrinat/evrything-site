// app/api/news-upload/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomBytes } from 'crypto'
import { detectFileType } from '@/lib/file-type'

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://flowen.eu',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.NEWS_UPLOAD_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'NEWS_UPLOAD_API_KEY is not configured' }, { status: 503, headers: corsHeaders })
    }
    const authHeader = request.headers.get('x-api-key')
    if (authHeader !== apiKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: corsHeaders })
    }
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400, headers: corsHeaders })
    }
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Max 10MB.' }, { status: 400, headers: corsHeaders })
    }
    const buffer = Buffer.from(await file.arrayBuffer())
    const detected = detectFileType(buffer)
    if (!detected) {
      return NextResponse.json({ error: 'Invalid file type. Only JPG, PNG, WebP, GIF allowed.' }, { status: 400, headers: corsHeaders })
    }
    const fileName = `${Date.now()}-${randomBytes(8).toString('hex')}.${detected.ext}`
    const uploadDir = join(process.cwd(), 'public', 'images', 'nyheter')
    await mkdir(uploadDir, { recursive: true })
    const filePath = join(uploadDir, fileName)
    await writeFile(filePath, buffer)
    console.log(`News image uploaded: ${fileName}`)
    return NextResponse.json({
      success: true,
      url: `/images/nyheter/${fileName}`,
      fileName,
      size: file.size
    }, { headers: corsHeaders })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500, headers: corsHeaders })
  }
}
