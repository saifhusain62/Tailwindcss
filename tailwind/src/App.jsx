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

             {/* LIST STYLE */}

             <ul className='list-disc text-center'>
              <li>A</li>
              <li>B</li>
             </ul>
             <ul className='list-decimal text-center'>
              <li>A</li>
              <li>B</li>
             </ul>
             {/* TEXT ALIGN */}
             <p className='text-left'>Lorem ipsum dolor sit amet.</p>
             <p className='text-center text-amber-600'>Lorem ipsum dolor sit amet.</p>
             <p className='text-right'>Lorem ipsum dolor sit amet.</p>
             <p className='text-justify text-blue-500'>Lorem ipsum dolor sit amet.</p>

             {/* TEXT COLOR */}

             <p className='text-red-300 text-center'>Lorem ipsum dolor sit amet.</p>
             <p className='text-pink-800 text-center'>Lorem ipsum dolor sit amet.</p>
             <p className='text-lime-400 text-center mb-7'>Lorem ipsum dolor sit amet.</p>

             {/* TEXT DECORATION */}
               <p className='text-center text-blue-900 underline'>Lorem ipsum dolor sit amet.</p>
                <p className='text-center text-blue-900 overline'>Lorem ipsum dolor sit amet.</p>   
                 <p className='text-center text-blue-900 underline decoration-dotted'>Lorem ipsum dolor sit amet.</p>     



            {/* TEXT TRANSFORM */}

            <p className='text-center text-2xl uppercase text-amber-950 p-5'>Lorem ipsum dolor sit amet.</p>
            <p className='text-center text-2xl lowercase text-cyan-700'>Lorem ipsum dolor sit amet.</p>
            <p className='text-center text-2xl capitalize text-fuchsia-700'>Lorem ipsum dolor sit amet.</p>
            <p className='text-center text-2xl normal-case text-lime-400'>Lorem ipsum dolor sit amet.</p>

              {/* TEXT START SPACING */}


              <p className='indent-5 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quo non dolorum? Explicabo recusandae non cupiditate quibusdam expedita soluta? Non?</p>
              <p className='indent-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi animi molestias illo fuga ratione autem maxime ducimus, culpa natus harum rem incidunt est quis? Qui neque hic temporibus animi, quos reprehenderit numquam, ex, mollitia optio et placeat sunt quas. Quas sapiente sunt magnam iure nemo voluptates fugiat soluta perferendis.</p>


              {/* CONETNT ICON */}

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, accusantium <a href="github.com/saifhusain62" className='text-sky-600 after:content-["_↗"] text-2xl'>saif Husain</a>repellendus. Quia quod aperiam impedit quaerat deserunt aspernatur nobis illum.</p> 



              {/* WIDTH */}


              <div  className='bg-blue-600 w-full justify-center flex items-center '>

                <p>Saif husain</p>

              </div>
              
              <div  className='bg-blue-600 w-1/2 justify-center flex items-center '>

                <p>Saif husain</p>

              </div>
              
              <div  className='bg-blue-600 w-1/3 justify-center flex items-center '>

                <p>Saif husain</p>

              </div>
              
              <div  className='bg-blue-600 w-1/4 justify-center flex items-center '>

                <p>Saif husain</p>

              </div>
              
              <div  className='bg-amber-600 w-5xl justify-center flex items-center '>

                <p>Saif husain</p>

              </div>
              <div  className='bg-amber-950 w-min justify-center flex items-center '>

                <p className='p-4'>Saif husain</p>

              </div>
              <div  className='bg-amber-950 w-max justify-center flex items-center '>

                <p className='p-10'>Saif husain</p>

              </div>
              <div  className='bg-amber-950 w-fit justify-center flex items-center '>

                <p className='p-6' >Saif husain</p>

              </div>


              {/* HEIGHT */}

              <div className='flex gap-5'>
                <div className='bg-pink-500 mt-7 w-fit h-96 mb-7'>
                <p className='p-10 text-center'>Hight  Class</p>
              </div>

              <div className='bg-cyan-700 mt-7 w-fit h-64 mb-7'>
                <p className='p-10 text-center'>2nd height</p>

              </div>
              <div className='bg-cyan-700 mt-7 w-fit h-48 mb-7'>
                <p className='p-10 text-center'>3nd height</p>

              </div>
               <div className='bg-cyan-700 mt-7 w-fit h-32 mb-7'>
                <p className='p-10 text-center'>3nd height</p>

              </div>

              </div>

              <div className='flex gap-5 max-w-[1600px] mx-auto'>
                <div className='bg-amber-500 w-1/2 text-center'>

                <p>HEllo Dear</p>

                </div>
                <div className='bg-amber-500 w-1/2 text-center'>

                <p>HEllo Dear</p>

                </div>

              </div>


              {/* SIZE */}

              <div className='bg-amber-700 size-96 flex mx-auto text-center mt-10 '>

                <p className='p-10'>Lorem ipsum dolor sit amet consectetur.</p>

              </div>

              {/* PADDING */}
              <div className='bg-yellow-400 w-2xl flex mx-auto items-center justify-center'>

                <p className='text-center px-10 py-10'>Lorem ipsum dolor sit amet.</p>

              </div>

              {/* MARGIN */}

              <div className='bg-blue-700 mx-auto text-center items-center mb-7 w-64 mt-5'>

                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              </div>
               <div className='bg-blue-700 mx-auto text-center items-center mt-8 mb-5 w-64'>

                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              </div>

              {/* SPACE BETWEEN */}

              <div className='space-y-5 mb-5'>

                    <div className='bg-blue-950 mx-auto items-center text-center text-amber-50 w-96 bord rounded-md'>

                      <p className='p-10'>Lorem ipsum dolor sit amet.</p>

                    </div>
                    <div className='bg-blue-950 mx-auto items-center text-center text-amber-50 w-96 rounded-md'>

                      <p className='p-10'>Lorem ipsum dolor sit amet.</p>

                    </div>

                    

              </div>

              {/* BACKGROUND IMAGE  */}


              <div className='bgarea w-6xl h-96 mx-auto bg-local'>
                        <p>Lorem ipsum dolor sit amet.</p>
                       
              </div>
               <div >
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur velit dolorum tenetur dolor non iure, rerum cupiditate eaque eum corrupti inventore praesentium sit labore dignissimos nemo omnis quisquam eius quas distinctio itaque eos fugit! Eum, fuga recusandae asperiores provident quo architecto voluptates ipsum harum. Sit eius expedita cum. Tenetur unde aut modi nemo possimus id, magni accusantium, eaque placeat ut ullam! Iure perferendis temporibus eligendi sequi, magni alias nisi nesciunt quis neque delectus voluptate exercitationem ut molestiae repellat unde pariatur modi possimus sed, explicabo maiores, amet similique odio perspiciatis. Rem sit officia cumque error, inventore nobis facilis hic nemo!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla eius incidunt ea sunt voluptates corrupti aut. Aspernatur fugiat nemo aliquam mollitia nulla maiores praesentium aut obcaecati, molestiae rerum assumenda exercitationem est eaque corrupti corporis iure quo debitis quasi delectus. Fugit totam nemo esse temporibus iusto pariatur, autem blanditiis asperiores natus velit accusamus officiis beatae facilis nostrum molestiae assumenda excepturi sit quia dolores perspiciatis sed accusantium officia architecto perferendis! Ex qui similique laborum quo ducimus itaque aliquid molestiae explicabo eius esse tempora repudiandae enim amet est libero sit quaerat iusto deserunt optio quasi perspiciatis, recusandae ipsum iure. Temporibus atque necessitatibus voluptates qui aut minima sint corporis, eos omnis repellat? Qui architecto consequatur facere sit quaerat pariatur odio voluptatem modi excepturi enim hic incidunt ad porro cum voluptatibus eos, ipsa in corrupti labore ipsum unde ducimus? Minus incidunt aliquid pariatur labore repellendus perferendis consequuntur magni totam, voluptatum, maiores suscipit molestias perspiciatis ipsum, sit atque? Quaerat itaque similique officiis dolores veniam tenetur sequi at amet molestias incidunt doloremque odit debitis quas fuga dolor voluptate non architecto aperiam quidem iusto, cum dicta. Assumenda soluta quo atque aut velit reprehenderit perspiciatis vitae placeat nostrum quod maiores, in, quos voluptatum non dicta, dolorum commodi sit?</p>
                        </div>
              


    </div>
  )
}

export default App
