import { useEffect } from 'react'

export function SEO({ title, description, path }) {
  useEffect(() => {
    document.title = title + " - WanaLab.pk - Engineered in WANA"
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute("content", description)
    
    // Update OG tags for WhatsApp share preview
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", title)
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute("content", description)
  }, [title, description])

  return null
}

export function ShareButton({ toolName, path }) {
  const url = window.location.origin + path
  
  const shareWhatsApp = () => {
    const text = `🔥 ${toolName} - WanaLab - Offline Tool - Built in Wana, Used Worldwide\n${url}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  }
  
  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(url)
    alert('Link copied! Share on TikTok/WhatsApp')
  }

  return (
    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
      <button onClick={shareWhatsApp} style={{ flex: 1, background: '#25D366', color: 'white', padding: '10px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '12px' }}>WhatsApp</button>
      <button onClick={shareFacebook} style={{ flex: 1, background: '#1877F2', color: 'white', padding: '10px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '12px' }}>Facebook</button>
      <button onClick={copyLink} style={{ flex: 1, background: 'black', color: 'white', padding: '10px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '12px' }}>Copy Link</button>
    </div>
  )
}

export function SEOBottomText({ toolName }) {
  return (
    <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #eee', marginTop: '16px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: '800', margin: 0 }}>About {toolName} - WanaLab.pk</h3>
      <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6', marginTop: '8px' }}>
        {toolName} by WanaLab.pk - Independent Research Lab, WANA. This tool works 100% offline, no upload, private, secure. 
        Built in Wana, South Waziristan for students in Wana, DI Khan, and worldwide. No data is sent to server. 
        All processing happens in your browser. Free forever. Engineered in WANA.
      </p>
      <div style={{ fontSize: '11px', color: '#aaa', marginTop: '8px' }}>
        Keywords: {toolName} offline, {toolName} no upload, {toolName} Wana, {toolName} DI Khan, WanaLab {toolName}
      </div>
    </div>
  )
}
