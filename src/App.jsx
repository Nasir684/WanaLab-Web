import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LinkEngine from './systems/LinkEngine'
import StudentOS from './systems/StudentOS'
import EarningHub from './systems/EarningHub'
import DiscoverySEO from './systems/DiscoverySEO'
import SportsSuper from './systems/SportsSuper'
import LiveDataHub from './systems/LiveDataHub'

export default function App(){
  return (
    <BrowserRouter>
      <nav style={{display:'flex',gap:'10px',padding:'12px',background:'black',color:'white'}}>
        <Link to="/" style={{color:'white',fontWeight:'bold'}}>WanaLab</Link>
        <Link to="/l" style={{color:'#0f0'}}>Link Engine</Link>
        <Link to="/student" style={{color:'#0ff'}}>Student OS</Link>
        <Link to="/earning" style={{color:'white'}}>Earning</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div style={{padding:20}}><h1>WanaLab = Web That PAYS You + Saves Students Offline</h1><p>Go to /l and /student</p><p>14 Systems Unlocked</p></div>} />
        <Route path="/l/*" element={<LinkEngine />} />
        <Route path="/l/:id" element={<LinkEngine />} />
        <Route path="/student/*" element={<StudentOS />} />
        <Route path="/earning" element={<EarningHub />} />
        <Route path="/discovery" element={<DiscoverySEO />} />
        <Route path="/sports" element={<SportsSuper />} />
        <Route path="/live" element={<LiveDataHub />} />
      </Routes>
    </BrowserRouter>
  )
}
