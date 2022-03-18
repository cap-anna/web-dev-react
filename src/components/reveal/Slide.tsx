import React, { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  /**
   * The isMain attributes toggles between the main
   * page styling (Capgemini spade background and
   * white font) and the normal, basic page styling
   * (white background, black font).
   */
  isMain?: boolean;
}

const Slide: React.FC<SlideProps> = (props: SlideProps) => {
  return (
    <section
      data-background-image={props.isMain ? '/bg1.svg' : undefined}
      // @ts-expect-error not assignable to css props
      style={props.isMain ? { '--r-heading-color': 'white', color: 'white' } : {}}
    >
      {props.children}
    </section>
  );
};

export default Slide;
