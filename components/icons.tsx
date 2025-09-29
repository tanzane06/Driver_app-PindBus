import React from 'react';

export const PindBusLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 125" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M 66 123 C 22 111 -18 63 11 26 C 29 2 81 -10 112 10 L 118 14 C 137 25 141 33 155 83 C 159 99 160 100 168 100 C 175 100 178 97 182 89 C 187 77 195 72 198 76 C 201 82 183 112 177 117 C 172 121 155 120 128 113 C 104 107 88 107 79 112 C 73 115 69 119 66 123 Z"
      fill="#2596be"
      transform="matrix(0.9, 0, 0, 0.9, 0, -10)"
    />
    <path 
      d="M152.2,25.4c-2.4,0-4.8,0-7.2,0c-1.2,0-2.1-0.9-2.1-2.1c0-5.4-4.4-9.8-9.8-9.8c-1.2,0-2.3-0.5-3.1-1.3c-2.9-2.9-6.8-4.5-11-4.5c-8.6,0-15.6,7-15.6,15.6c0,1.2-0.9,2.1-2.1,2.1H88.4c-1.2,0-2.1-0.9-2.1-2.1c0-8.6-7-15.6-15.6-15.6c-4.2,0-8.1,1.7-11,4.5c-0.8,0.8-1.9,1.3-3.1,1.3c-5.4,0-9.8,4.4-9.8,9.8c0,1.2-0.9,2.1-2.1,2.1c-2.4,0-4.8,0-7.2,0c-13.8,0-25.1,11.2-25.1,25.1c0,2.4,0,4.8,0,7.2c0,1.2,0.9,2.1,2.1,2.1c5.4,0,9.8,4.4,9.8,9.8c0,1.2,0.5,2.3,1.3,3.1c2.9,2.9,4.5,6.8,4.5,11c0,8.6,7,15.6,15.6,15.6c1.2,0,2.1,0.9,2.1,2.1v12.9c0,1.2,0.9,2.1,2.1,2.1h12.9c1.2,0,2.1-0.9,2.1-2.1c0-8.6,7-15.6,15.6-15.6c1.2,0,2.3-0.5,3.1-1.3c2.9-2.9,6.8-4.5,11-4.5c8.6,0,15.6,7,15.6,15.6c0,1.2,0.9,2.1,2.1,2.1h12.9c1.2,0,2.1-0.9,2.1-2.1V91.7c0-1.2,0.9,2.1,2.1,2.1c8.6,0,15.6-7,15.6-15.6c0-4.2-1.7-8.1-4.5-11c-0.8-0.8-1.3-1.9-1.3-3.1c0-5.4-4.4-9.8-9.8-9.8c-1.2,0-2.1-0.9-2.1-2.1c0-2.4,0-4.8,0-7.2C177.3,36.6,166,25.4,152.2,25.4z"
      fill="#66c9ec"
    />
     <path 
      d="M136.1,38.3H72.4c-4.2,0-7.6,3.4-7.6,7.6v23.2c0,4.2,3.4,7.6,7.6,7.6h63.7c4.2,0,7.6-3.4,7.6-7.6V45.9C143.7,41.7,140.3,38.3,136.1,38.3z M132.9,71H75.6c-1.3,0-2.3-1-2.3-2.3V50.1c0-1.3,1-2.3,2.3-2.3h57.3c1.3,0,2.3,1,2.3,2.3v18.6C135.2,70,134.2,71,132.9,71z"
      fill="#ffffff"
    />
  </svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
);


export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const WarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export const SignalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
  </svg>
);

export const SignalSlashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
  </svg>
);

export const BatteryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h13.5v-12h-13.5v12zM3.75 6.75h13.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-13.5c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125z" />
  </svg>
);

export const BoltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

export const GPSErrorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
);

export const QueueIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
    </svg>
);