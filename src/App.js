import React from 'react';
import Home from './Views/Home';
import AlbumMusique from './Views/album_musique';
import Article from './Views/article';
import Biographie from './Views/biographie';
import Calendrier from './Views/calendrier';
import CorpusSousPartie from './Views/corpus_sous_partie';
import Image from './Views/image';
import Musique from './Views/musique';
import Partie from './Views/partie';
import PlaylistVideo from './Views/playlist_video';
import SousPartie from './Views/sous_partie';
import Video from './Views/video';
import { useRoutes } from "react-router-dom";
 
/*function App() {
  return (
    <div>
        <Home />
    </div>
  );
}*/
 

const App = () => {
  let routes = useRoutes([
    { 
      path: '/', 
      element: <Home/>,
    },
    { 
      path: '/AlbumMusique', 
      element: <AlbumMusique/>,
    },
    { 
      path: '/Biographie', 
      element: <Biographie/>,
    },
    { 
      path: '/Article', 
      element: <Article/>,
    },
    { 
      path: '/Calendrier', 
      element: <Calendrier/>,
    },
    { 
      path: '/CorpusSousPartie', 
      element: <CorpusSousPartie/>,
    },
    { 
      path: '/Image', 
      element: <Image/>,
    },
    { 
      path: '/Partie', 
      element: <Partie/>,
    },
    { 
      path: '/PlaylistVideo', 
      element: <PlaylistVideo/>,
    },
    { 
      path: '/SousPartie', 
      element: <SousPartie/>,
    },
    { 
      path: '/Video', 
      element: <Video/>,
    },
    { 
      path: '/Musique', 
      element: <Musique/>,
    }

  ]);
  return routes;
} 
export default App;