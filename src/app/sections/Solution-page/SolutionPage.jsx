import { GreenTopWave } from '@/components/wave/GreenTopWave'
import React from 'react'
import Image from 'next/image';
import { SolutionContainer } from '@/components/solution-container/SolutionContainer';
import { Slide } from "react-awesome-reveal";
import loginMockup from '../../../imgs/login-mockup.png'

export const SolutionPage = () => {
  return (
    <div id='solution'>
        <GreenTopWave />
        <h2 className="text-xl lg:text-2xl text-center text-green-600 font-bold mt-5">
            Accede a tu cuenta
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
            Gestiona tus reportes, seguimientos y participación de forma personalizada.
        </h3>

        <Slide><Image src={loginMockup} alt='login mockup' className='m-auto'/></Slide>

        <SolutionContainer />
    </div>
  )
}





