import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section 
    class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40"> 
     
     <div className='max-w-[1400px] h-[580px]w-full m-auto py-16 px-4 relative group'>
    
    <div class="relative z-10"> 
        <div 
            class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"> 
            <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true"> 
                <defs> 
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" 
                        patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)"> 
                        <path d="M.5 200V.5H200" fill="none"></path> 
                    </pattern> 
                </defs> 
                <svg x="50%" y="50%" class="overflow-visible fill-blue-50"> 
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path> 
                </svg> 
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"> 
                </rect> 
            </svg> 
        </div> 
    </div> 

    <div class="max-w-[1000px]relative mx-auto mt-0 ">
  <img class="mx-auto object-contain w-1000 rounded-2xl border border-gray-100 shadow-100" src="/images/hero.gif" alt="GIF" />
 </div>

      <div class="relative z-20 mx-auto max-w-7xl px-9 lg:px-8 "> 
      
        <div class="mx-auto max-w-2xl text-center"> 
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> 
            Welcome to 
                <span class="text-blue-600">TotalTicket
           </span> 
            </h1> 
            <h2 class="mt-6 text-lg leading-8 text-gray-600"> 
            The easiest way to book tickets for your favorite events
            </h2> 
            <div class="mt-10 flex items-center justify-center gap-x-6"> 
                <a class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" 
                    href="/Bus"> Bus
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128"><g fill="#1769de"><path d="M117.13 87.29c0 7.35-2.06 13.3-4.58 13.3c-2.53 0-4.58-5.95-4.58-13.3s2.05-13.31 4.58-13.31c2.52 0 4.58 5.97 4.58 13.31"/><path d="M110.56 99.28s1.22 1.95 2.54 2.61c2.99 1.49 7.15.94 9.65-2.46l-1.34-8.1l-8.46 1.61z"/></g><g fill="#1769de"><path d="M23.71 104.14c0 7.85-2.77 14.22-6.17 14.22c-3.41 0-6.18-6.37-6.18-14.22c0-7.86 2.77-14.23 6.18-14.23c3.4.01 6.17 6.37 6.17 14.23"/><path d="M14.85 116.97s1.64 2.09 3.44 2.79c4.03 1.59 9.63 1 13-2.62l-1.81-8.66l-11.4 1.72z"/><path d="M34.95 104.14c0 7.85-2.77 14.22-6.17 14.22c-3.41 0-6.18-6.37-6.18-14.22c0-7.86 2.77-14.23 6.18-14.23c3.4.01 6.17 6.37 6.17 14.23"/></g><g fill="#1769de"><path d="M90.78 104.14c0 7.85-2.77 14.22-6.17 14.22c-3.41 0-6.18-6.37-6.18-14.22c0-7.86 2.77-14.23 6.18-14.23c3.4.01 6.17 6.37 6.17 14.23"/><path d="M81.92 116.97s1.64 2.09 3.44 2.79c4.03 1.59 9.63 1 13.01-2.62l-1.81-8.66l-11.4 1.72z"/></g><defs><path id="notoV1Bus0" d="M114 12.21H17.31C7.28 12.21.16 18.34.16 27.36V91.7c0 10.02 8.13 18.15 18.15 18.15h55.67c14.62 0 19.4-1.89 28.34-7.78C111.51 96.02 128 86.02 128 77.82V27.27c0-10.02-3.98-15.06-14-15.06"/></defs><use fill="#ffffff" href="#notoV1Bus0"/><clipPath id="notoV1Bus1"><use href="#notoV1Bus0"/></clipPath><path fill="white" d="M-.38 82.07h86.33v29.43H-.38zm86.33 35.52l45.37-29.65V54.85L85.95 82.07z" clip-path="url(#notoV1Bus1)"/><defs><path id="notoV1Bus2" d="M80.11 67.23c0 3.36-2.73 6.1-6.1 6.1h-58.6c-3.36 0-6.09-2.74-6.09-6.1V28.49c0-3.36 2.73-6.1 6.09-6.1H74c3.37 0 6.1 2.74 6.1 6.1v38.74z"/></defs><use fill="#1769de" href="#notoV1Bus2"/><clipPath id="notoV1Bus3"><use href="#notoV1Bus2"/></clipPath><path fill="#1769de" d="M6.61 20.04h77v17.88h-77z" clip-path="url(#notoV1Bus3)"/><path fill="#e5e1e1" d="M20.24 25.96h49.73v8.1H20.24z" clip-path="url(#notoV1Bus3)"/><path fill="#1769de" d="M108.42 48.97c0 2.6-1.52 5.56-3.51 6.69l-7.41 4.21c-2.74 1.54-5.13.17-5.13-3.2V29.25c0-3.36 2.4-6.09 5.13-6.09h7.41c1.99 0 3.51 2.11 3.51 4.69zm11.92-22.19c0-1.97-.73-3.57-1.67-3.57h-3.34c-1.16 0-2.16 1.91-2.16 4.25v19.06c0 2.34 1 3.64 2.16 2.91l3.34-2.04c.94-.58 1.67-2.62 1.67-4.59z"/><ellipse cx="16.08" cy="93.96" fill="#e5e1e1" rx="6.87" ry="6.86"/><path fill="#e5e1e1" d="M79.13 93.96c0 3.79-3.08 6.86-6.88 6.86c-3.78 0-6.86-3.07-6.86-6.86c0-3.8 3.07-6.86 6.86-6.86c3.8 0 6.88 3.06 6.88 6.86"/><path fill="#1769de" d="M102.02 104.14c0 7.85-2.77 14.22-6.17 14.22c-3.41 0-6.18-6.37-6.18-14.22c0-7.86 2.77-14.23 6.18-14.23c3.4.01 6.17 6.37 6.17 14.23m23.44-16.85c0 7.35-2.05 13.3-4.58 13.3c-2.53 0-4.58-5.95-4.58-13.3s2.05-13.31 4.58-13.31c2.54 0 4.58 5.97 4.58 13.31"/></svg>
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> 
                        <path fill-rule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clip-rule="evenodd"></path> 
                    </svg> 
                    
                     </a>
                     <a class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" 
                    href="/Airplane"> Airplane
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> 
                        <path fill-rule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clip-rule="evenodd"></path> 
                    </svg> 

                    </a>
                     <a class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" 
                    href="/Train"> train
                    
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path fill="currentColor" d="M21 3H11a5.006 5.006 0 0 0-5 5v12a4.99 4.99 0 0 0 3.582 4.77L7.769 29h2.176l1.714-4h8.682l1.714 4h2.176l-1.813-4.23A4.99 4.99 0 0 0 26 20V8a5.006 5.006 0 0 0-5-5M11 5h10a2.995 2.995 0 0 1 2.816 2H8.184A2.995 2.995 0 0 1 11 5m13 14h-3v2h2.816A2.995 2.995 0 0 1 21 23H11a2.995 2.995 0 0 1-2.816-2H11v-2H8v-2h16Zm0-4H8V9h16Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> 
                        <path fill-rule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clip-rule="evenodd"></path> 
                    </svg> 
                      </a>
                  
                
            </div> 
        </div> 
             
        
    
    </div> 
    </div>
</section>
    </>  
  );
};

export default Hero;