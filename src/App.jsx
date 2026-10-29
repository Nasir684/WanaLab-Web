import { useState } from 'react'

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div style={{ minHeight: '100vh', background: '#f0f9ff', fontFamily: 'system-ui', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '20px', borderRadius: '16px' }}>
        <h1 style={{ color: '#2563eb' }}>NEW CODE LIVE ✅ - CACHE FIXED!</h1>
        <p>If you see BLUE background and this message, Factory v2.3 is GONE.</p>
        
        <div style={{ marginTop: '20px', padding: '16px', background: '#eff6ff', borderRadius: '12px' }}>
          <h2>Image Compressor - WORKING TEST</h2>
          <input type="file" accept="image/*" onChange={(e) => {
            const file = e.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = (ev) => {
              const img = new Image()
              img.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = img.width * 0.5
                canvas.height = img.height * 0.5
                canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
                const link = document.createElement('a')
                link.href = canvas.toDataURL('image/jpeg', 0.6)
                link.download = 'compressed.jpg'
                link.click()
                alert('Downloaded!')
              }
              img.src = ev.target.result
            }
            reader.readAsDataURL(file)
          }} />
          <p>Select image → Will compress & auto-download</p>
        </div>

        <button onClick={() => setActive('test')} style={{ marginTop: '20px', padding: '10px 20px', background: '#2563eb', color: '#fff', borderRadius: '8px', border: 'none' }}>
          Test Button - Click Me
        </button>
        {active && <p>✅ Button Working! State: {active}</p>}
      </div>
    </div>
  )
                  }
