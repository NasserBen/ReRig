import React from "react";
import Image from 'next/image';
import gpuSVG from './GPU.svg';
import phoneSVG from './phone.svg';
import gpuPic from './gpu.png';

export default function Post() {
    const headerStyle = {
        fontFamily: 'Arial',
        fontSize: '11px',
        color: '#334257',
      };
      
      const priceStyle = {
        fontFamily: 'Arial',
        fontSize: '15px',
        color: '#334257',
        margin: '0 11px',
      };
  
      const standardTextStyle = {
        fontFamily: 'Arial',
        fontSize: '9px',
        color: '#A3A3A3',
        // Add any other styles you need
      };

      const phoneTextStyle = {
        fontFamily: 'Arial',
        fontSize: '9px',
        color: '#334257',
        // Add any other styles you need
      };

    return (
    <div>
      <Image src={gpuPic} alt="My Image" width={200} height={200}  />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={headerStyle}>RADEON RX 480 8GB VRAM</h1>
        <h1 style={priceStyle}>$69</h1>
      </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={gpuSVG} alt="Icon" style={{ width: '20px', marginRight: '8px' }} />
          <p style={standardTextStyle}>Like New</p>
          </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={phoneSVG} alt="Icon" style={{ width: '15px', marginRight: '8px' }} />
            <p style={phoneTextStyle}>(696) 696-6969</p>
            </div>
          
    </div>
    
  );
}
