// app/api/news-upload/route.ts
// API för att ta emot nyhetsbilder från Flowen
import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

// Enkel API-nyckel för säkerhet
const API_KEY = process.env.NEWS_UPLOAD_API_KEY || 'evrything-flowen-2026'

export async function POST(request: NextRequest) {
  try {
    // Validera API-nyckel
    const authHeader = request.headers.get('x-api-key')
    if (authHeader !== API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' }, 
        { status: 400 }
      )
    }

    // Validera filtyp
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, PNG, WebP, GIF allowed.' },
        { status: 400 }
      )
    }

    // Validera storlek (max 10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Max 10MB.' },
        { status: 400 }
      )
    }

    // Skapa filnamn med timestamp
    const timestamp = Date.now()
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg'
    const safeName = file.name
      .replace(/\.[^/.]+$/, '') // Ta bort extension
      .toLowerCase()
      .replace(/[åä]/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 50) // Max 50 tecken
    
    const fileName = `${safeName}-${timestamp}.${extension}`

    // Säkerställ att mappen finns
    const uploadDir = join(process.cwd(), 'public', 'images', 'nyheter')
    await mkdir(uploadDir, { recursive: true })

    // Spara filen
    const filePath = join(uploadDir, fileName)
    const buffer = Buffer.from(await file.arrayBuffer())
    await writeFile(filePath, buffer)

    console.log(`✅ News image uploaded: ${fileName}`)

    // Returnera URL
    return NextResponse.json({
      success: true,
      url: `/images/nyheter/${fileName}`,
      fileName,
      size: file.size
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}