import React from 'react';
import MeImg from '../assets/me.webp';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import MediumIcon from '../assets/mediumIcon.svg';

const Intro = () => {
  return (
    <div className="bg-stone-600 flex flex-row justify-between items-center gap-10 py-20 px-40 max-[1000px]:flex-col-reverse max-[1000px]:px-8">
      <div className="flex flex-col">
        <p className="text-7xl text-slate-300	mb-8 max-[1000px]:text-center">Jordan Wagner</p>
        <p className="text-5xl text-slate-300 max-[1000px]:text-center">Senior Software Engineer</p>
        <div className='flex flex-row mt-4 gap-7 max-[1000px]:justify-center'>
          <a href='https://github.com/jaaywags' target='_blank' className="flex flex-row gap-2 text-stone-100" aria-label="link to my github" aria-describedby="github">
            <IconBrandGithub />
            <p>GitHub</p>
          </a>
          <a href='https://www.linkedin.com/in/jordan-wagner-778739107/' target='_blank' className="flex flex-row gap-2 text-stone-100">
            <IconBrandLinkedin />
            <p>LinkedIn</p>
          </a>
          <a href='https://medium.com/@jwag' target='_blank' className="flex flex-row gap-2 text-stone-100 items-center">
            <img className="h-[19px]" src={MediumIcon} />
            <p>Medium</p>
          </a>
        </div>
      </div>
      <div>
        <img src={MeImg} width="400" alt="A photo of me" />
      </div>
    </div>
  );
};

export default Intro;