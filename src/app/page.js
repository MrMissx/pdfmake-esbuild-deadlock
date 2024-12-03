'use client'

import { useCallback } from "react";


export default function Home() {

  const handleClick = useCallback(async () => {
    const PdfMake = (await import('pdfmake/build/pdfmake')).default
    PdfMake.vfs = (await import('pdfmake/build/vfs_fonts')).default.pdfMake;
    PdfMake.createPdf({ content: "hello" }).download("example.pdf");
  }, [])

  return <button onClick={handleClick}>craete pdf</button>
}

export const runtime = 'edge'