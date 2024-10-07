import React from 'react';
import './PhotoGallery.css'; 


import ArousalHueSaturation from '../assets/Arousal Hue Saturation.png';
import ArousalHueBrightness from '../assets/Arousal Hue Brightness.png';
import ArousalYellowBrightnessSaturation from '../assets/Arousal Yellow Brightness Saturation.png';
import ArousalYellowSaturationBrightness from '../assets/Arousal Yellow Saturation Brightness.png';
import ArousalBrownBrightnessSaturation from '../assets/Arousal Brown Brightness Saturation.png';
import ArousalBrownSaturationBrightness from '../assets/Arousal Brown Saturation Brightness.png';
import ValenceHueSaturation from '../assets/Valence Hue Saturation.png';
import ValenceHueBrightness from '../assets/Valence Hue Brightness.png';
import ValenceBrownBrightnessSaturation from '../assets/Valence Brown Brightness Saturation.png';
import ValenceBrownSaturationBrightness from '../assets/Valence Brown Saturation Brightness.png';
import LikingHueSaturation from '../assets/Liking Hue Saturation.png';
import LikingBrownBrightnessSaturation from '../assets/Liking Brown Brightness Saturation.png';

const Graphs = () => {
  
  const photoData = [
    { src: ArousalHueSaturation, alt: 'Graph 1', caption: 'Arousal Hue x Saturation' },
    { src: ArousalHueBrightness, alt: 'Graph 2', caption: 'Arousal Hue x Brightness' },
    { src: ArousalYellowBrightnessSaturation, alt: 'Graph 3', caption: 'Arousal - Yellow x Brightness x Saturation' },
    { src: ArousalYellowSaturationBrightness, alt: 'Graph 4', caption: 'Arousal - Yellow x Saturation x Brightness' },
    { src: ArousalBrownBrightnessSaturation, alt: 'Graph 5', caption: 'Arousal - Brown x Brightness x Saturation' },
    { src: ArousalBrownSaturationBrightness, alt: 'Graph 6', caption: 'Arousal - Brown x Saturation x Brightness' },
    { src: ValenceHueSaturation, alt: 'Graph 7', caption: 'Valence Hue x Saturation' },
    { src: ValenceHueBrightness, alt: 'Graph 8', caption: 'Valence Hue x Brightness' },
    { src: ValenceBrownBrightnessSaturation, alt: 'Graph 9', caption: 'Valence - Brown x Brightness x Saturation' },
    { src: ValenceBrownSaturationBrightness, alt: 'Graph 10', caption: 'Valence - Brown x Saturation x Brightness' },
    { src: LikingHueSaturation, alt: 'Graph 11', caption: 'Liking Hue x Saturation' },
    { src: LikingBrownBrightnessSaturation, alt: 'Graph 12', caption: 'Liking - Brown x Brightness x Saturation' },

  ];

  console.log(photoData);
  return (
    <div className="photo-gallery">
      <h3>Graphs Gallery</h3>
      <br></br>
      <div className="photo-gallery-container">
        {photoData.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.alt} className="photo-image" />
            <p className="photo-caption">{photo.caption}</p>
          </div>
        ))}
        <br></br>
      </div>
    </div>
  );
};

export default Graphs;

