import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toolTitles } from '../utils/toolTitles';

export function useToolTitle() {
  const location = useLocation();
  
  useEffect(() => {
    // Get tool id from URL like /tools/image-to-webp
    const path = location.pathname;
    const toolId = path.split('/tools/')[1] || path.split('/').pop();
    
    if (toolTitles[toolId]) {
      document.title = toolTitles[toolId].title;
      
      // Also update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', toolTitles[toolId].desc);
      }
    } else {
      document.title = "WanaLab.org - Wana Based, Global Built - 64 Tools - Founder Nasir Khan";
    }
  }, [location]);
}
