import React from 'react'

export default function Description() {
  return (
    <div className='w-full h-[320px] justify-center items-center  flex flex-col bg-slate-100'>
      <div className='text-2xl flex space-x-4 text-center mt-3'>
        <h3>Desciption </h3>  <h3> Additional Information </h3> <h3> Reviews[5]</h3>
      </div>
      <div>
        <p className='text-justify mt-5 '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and
          sound of Marshall, unplugs the chords, and takes the show on the road.
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>
      <div>
        {/* <div>
          <img src="" alt="" />
        </div> */}
      </div>
    </div>
  )
};
