import React, { ReactNode } from 'react';
import Slide from '../reveal/Slide';

export interface GenericChapterProps {
  title: string;
  index: number;
}

interface ChapterProps extends GenericChapterProps {
  subtitle?: ReactNode;
  children: ReactNode;
}

const Chapter: React.FC<ChapterProps> = (props: ChapterProps) => {
  const chapterTitle = `${props.index}. ${props.title}`;
  return (
    <Slide id={'chapter' + props.index}>
      {/* Chapter title that is shown on all slides */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          height: '100%',
          color: '#0070ad',
          opacity: 0.5,
          fontSize: 18
        }}
      >
        {chapterTitle}
      </div>
      {/* First slide in chapter */}
      <Slide isMain>
        <h2>{chapterTitle}</h2>
        {props.subtitle}
      </Slide>
      {/* All other chapter slides */}
      {props.children}
    </Slide>
  );
};

export default Chapter;
