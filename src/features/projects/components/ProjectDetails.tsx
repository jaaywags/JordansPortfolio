import React, { useEffect, useState } from 'react';
import { Project } from '../types/Project';
import ImgPlaceholder from '../assets/imgPlaceholder.png';

type Props = {
  info: Project;
};
const ProjectDetails = ({ info }: Props) => {
  const [img, setImg] = useState(ImgPlaceholder);
  useEffect(() => {
    const getImage = async () => {
      const img = await import(`../assets/${info.image}`);
      setImg(img.default);
    };

    getImage();
  }, []);

  return (
    <div className="flex flex-row m-20 gap-20 items-center max-[1190px]:flex-col max-[1190px]:mx-8">
      <img src={img} className='w-[400px] h-[300px]' alt={`Image for project, ${info.name}`} />
      <div className="flex flex-col">
        <p className="text-5xl mb-4 text-slate-700">{info.name}</p>
        <p className="text-2xl text-slate-700 whitespace-pre-line text-justify">{info.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;