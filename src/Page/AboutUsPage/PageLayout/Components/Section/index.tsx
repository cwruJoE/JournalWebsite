import React from 'react';

interface SectionProps {
    label: string;
    body: string;
}

function Section(props: SectionProps) {

  return (
    <div className="flex flex-row my-2 items-start">
      <u className="text-md font-marcellus mb-2 whitespace-nowrap w-fit mr-4">{props.label}</u>
      <p className="text-md font-marcellus mb-2 overflow-auto">{props.body}</p>
    </div>
  );
}

export default Section;
 