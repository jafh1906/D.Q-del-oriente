import React from 'react'
import imgMision from '../assets/images/imgMision.webp'

export const Mision = () => {
  return (
    <>
    <section className='pl-[3%]'>
        <div className='bg-white w-[70%] flex items-center px-5 py-5 rounded-4xl'>
            <div className='px-5 flex flex-col items-center'>
                <h1 className='letra-1 text-center text-4xl'>
                    Misión
                </h1>
                <span className='bg-[#006b96] h-[3px] w-full my-5'></span>
                <p className='letra-3 w-[520px] text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt quis corrupti sequi rerum ratione saepe doloribus at eaque? Eos necessitatibus deleniti id molestiae saepe excepturi. Quod minus sapiente culpa odit unde provident, nulla, deserunt ratione animi nam, possimus dicta nisi eos facere non vitae id praesentium aperiam. Numquam, odio!
                </p>
            </div>
            <div className='imgMision rounded-4xl'>
                <img className='rounded-4xl' src={imgMision} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}
