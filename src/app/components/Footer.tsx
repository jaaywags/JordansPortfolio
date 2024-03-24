import React from 'react';

const Footer = () => {
  const date = new Date();

  return (
    <div className="bg-black text-white flex justify-center items-center p-5 gap-8">
      <p>JordansPortfolio © {date.getFullYear()}</p>
      <a href='https://github.com/jaaywags/JordansPortfolio' target='_blank' className='underline'>This is an Open Source Project available on GitHub</a>
    </div>
  );
};

export default Footer;