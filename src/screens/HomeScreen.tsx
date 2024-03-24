import Intro from '@features/intro/components/Intro';
import Projects from '@features/projects/components/Projects';
import Involvements from '@features/involvement/components/Involvements';
import React from 'react';

const HomeScreen = () => {
  return (
    <div className="">
      <Intro />
      <Involvements />
      <Projects />
    </div>
  );
};

export default HomeScreen;