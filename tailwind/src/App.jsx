import React from 'react'
import Home from './components/Home'




function App() {
  return (
    <div>
      <Home/>
      <h1 className='text-orange-400 text-center'>Hello dear friend</h1>
      <h1 className='text-orange-400 font-mono text-xs text-center'>Hello dear friend</h1>\
       <h1 className='text-orange-400 font-mono text-4xl text-center'>Hello dear friend</h1>
       <h1 className='text-center italic'>This is Italic tag</h1>

                 {/* FONT WEIGHT */}
       <h1 className='text-center font-thin'>Font weight thin</h1>
       <h1 className='text-center font-light'>Font weight light</h1>
       <h1 className='text-center font-light'>Font weight light</h1>
       <h1 className='text-center font-normal'>Font weight normal</h1>
       <h1 className='text-center font-bold'>Font weight bold</h1>
        <h1 className='text-center font-extrabold'>Font weight extra-bold</h1>
        <h1 className='text-center font-black'>Font weight black</h1>
        <h1 className='text-center font-black'>Font weight black</h1>

                   {/* LETTER SPACING */}

        <h1 className='text-center tracking tighter'>Letter Spacing tight</h1>
         <h1 className='text-center tracking-wide'>Letter Spacing tight</h1>
          <h1 className='text-center tracking-wider'>Letter Spacing tight</h1>
          <h1 className='text-center tracking-widest'>Letter Spacing tight</h1>

          {/* LINE HEIGHT */}
          <p className='text-center text-base/6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur eius, odit nam maiores ex ab eligendi quam impedit ipsum?</p>
          <p className='text-center text-base/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur eius, odit nam maiores ex ab eligendi quam impedit ipsum?</p>
           {/* NUMBER CHANGES */}
           <p className='diagonal-fractions text-center'>1/2 3/4 5/6</p>

           {/* SPACING LETTER */}
           <p className='text-center tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, libero?</p>
           <p className='text-center tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, libero?</p>
           <p className='text-center tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, libero?</p>
           <p className='text-center -tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, libero?</p>
           <br />
             {/* LINE HEIGHT */}
             <p className='text-center leading-5'>Lorem ipsum dolor sit amet.</p>
             <p className='text-center leading-2'>Lorem ipsum dolor sit amet.</p>
             <p className='text-center leading-4'>Lorem ipsum dolor sit amet.</p>
             <p className='text-center leading-10'>Lorem ipsum dolor sit amet.</p>
        
      
    </div>
  )
}

export default App
