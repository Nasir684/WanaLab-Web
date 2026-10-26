import { Routes, Route, Link, useParams } from 'react-router-dom'

// LOCK 1-9 Primes - Separate Files
import AgePrime from './primes/AgePrime'
import WordPrime from './primes/WordPrime'
import PercentPrime from './primes/PercentPrime'
import ImagePrime from './primes/ImagePrime'
import PdfPrime from './primes/PdfPrime'
import QrPrime from './primes/QrPrime'
import ResumePrime from './primes/ResumePrime'
import CurrencyPrime from './primes/CurrencyPrime'
import TravelPrime from './primes/TravelPrime'

// LOCK 5-6
import { AdSpot, AffiliateWidget } from './components/Earning'
import { ShareButton, SEOBottomText } from './components/Discovery'

// LOCK 7 - Sports
import SportsHub, { LeaguePage } from './sports/SportsHub'

function Header() {
  return (
    <div style={{ background: 'black', color: 'white', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '900', fontSize: '18px' }}>WanaLab</Link>
      <Link to="/sports" style={{ color: 'black', background: '#25D366', padding: '6px 12px', borderRadius: '20px', textDecoration: 'none', fontWeight: '800', fontSize: '12px' }}>🏏 Sports</Link>
    </div>
  )
}

function PrimeList() {
  const tools = [
    { path: '/age-prime', name: 'Age Prime', desc: 'Exact age with live seconds' },
    { path: '/word-prime', name: 'Word Prime', desc: 'Thesis counter offline' },
    { path: '/percent-prime', name: 'Percent Prime', desc: 'DI Khan % calc' },
    { path: '/image-prime', name: 'Image Prime', desc: 'Compress to 20KB 50KB' },
    { path: '/pdf-prime', name: 'PDF Prime', desc: 'Vault - No upload' },
    { path: '/qr-prime', name: 'QR Prime', desc: 'QR maker offline' },
    { path: '/resume-prime', name: 'Resume Prime', desc: 'CV maker' },
    { path: '/currency-prime', name: 'Currency Prime', desc: 'PKR USD SAR' },
    { path: '/travel-prime', name: 'Travel Prime', desc: 'Wana to DIK distance' },
    { path: '/sports', name: '🏏 Sports Hub', desc: 'PSL IPL EPL Live', special: true },
  ]

  return (
    <div style={{ padding: '16px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ background: 'black', color: 'white', padding: '20px', borderRadius: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '900' }}>WanaLab.pk</h1>
        <p style={{ margin: '6px 0 0', fontSize: '12px', opacity: 0.7 }}>Independent Research Lab, WANA<br/>Built in Wana, Used Worldwide</p>
      </div>

      <AdSpot position="HEADER" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
        {tools.map(t => (
          <Link key={t.path} to={t.path} style={{ background: t.special ? '#01411c' : 'white', color: t.special ? 'white' : 'black', padding: '14px', borderRadius: '16px', border: '1px solid #eee', textDecoration: 'none' }}>
            <div style={{ fontWeight: '800', fontSize: '13px' }}>{t.name}</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>{t.desc}</div>
          </Link>
        ))}
      </div>

      <AdSpot position="BETWEEN" />
      <AffiliateWidget />
      <AdSpot position="FOOTER" />

      <div style={{ textAlign: 'center', fontSize: '10px', color: '#aaa', marginTop: '20px', padding: '12px' }}>
        © 2026 WanaLab.pk - Engineered in WANA - Offline • Private • No Upload
      </div>
    </div>
  )
}

function ToolWrapper({ children, name, path }) {
  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ padding: '12px 16px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '13px', fontWeight: '700' }}>← Back</Link>
      </div>
      {children}
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 16px 20px' }}>
        <ShareButton toolName={name} path={path} />
        <AdSpot position={`${name} - Middle`} />
        <SEOBottomText toolName={name} />
        <AffiliateWidget />
      </div>
    </div>
  )
}

function SportsPageWrapper(){
  const { leagueId } = useParams()
  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ padding: '12px 16px' }}>
        <Link to="/sports" style={{ textDecoration: 'none', color: 'black', fontSize: '13px', fontWeight: '700' }}>← Back to Sports</Link>
      </div>
      <LeaguePage league={leagueId} />
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 16px 20px' }}>
        <ShareButton toolName={`${leagueId} Live`} path={`/sports/${leagueId}`} />
        <AdSpot position="Sports Footer" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PrimeList />} />
        <Route path="/age-prime" element={<ToolWrapper name="Age Prime" path="/age-prime"><AgePrime /></ToolWrapper>} />
        <Route path="/word-prime" element={<ToolWrapper name="Word Prime" path="/word-prime"><WordPrime /></ToolWrapper>} />
        <Route path="/percent-prime" element={<ToolWrapper name="Percent Prime" path="/percent-prime"><PercentPrime /></ToolWrapper>} />
        <Route path="/image-prime" element={<ToolWrapper name="Image Prime" path="/image-prime"><ImagePrime /></ToolWrapper>} />
        <Route path="/pdf-prime" element={<ToolWrapper name="PDF Prime" path="/pdf-prime"><PdfPrime /></ToolWrapper>} />
        <Route path="/qr-prime" element={<ToolWrapper name="QR Prime" path="/qr-prime"><QrPrime /></ToolWrapper>} />
        <Route path="/resume-prime" element={<ToolWrapper name="Resume Prime" path="/resume-prime"><ResumePrime /></ToolWrapper>} />
        <Route path="/currency-prime" element={<ToolWrapper name="Currency Prime" path="/currency-prime"><CurrencyPrime /></ToolWrapper>} />
        <Route path="/travel-prime" element={<ToolWrapper name="Travel Prime" path="/travel-prime"><TravelPrime /></ToolWrapper>} />
        <Route path="/sports" element={<SportsHub />} />
        <Route path="/sports/:leagueId" element={<SportsPageWrapper />} />
      </Routes>
    </>
  )
        }
