import React from 'react';
import AllInvolvements from '../constants/AllInvolvements';
import ProjectDetails from '../../projects/components/ProjectDetails';

const Involvements = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <p className="text-6xl underline text-center mx-8">Community Involvement</p>
      {AllInvolvements.map(p => <ProjectDetails key={p.id} info={p} />)}
    </div>
  );
};

export default Involvements;