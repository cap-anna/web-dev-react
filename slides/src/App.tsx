import React from 'react';
import RoutingChapter from './chapters/06_routing/RoutingChapter';
import IntroChapter from './chapters/a_Intro/IntroChapter';
import TableOfContents from './chapters/a_Intro/TableOfContents';
import ComparisonChapter from './chapters/comparison/ComparisonChapter';
import ComponentsChapter from './chapters/components_props/ComponentsProps';
import ConditionalRenderingChapter from './chapters/conditional_rendering/ConditionalRendering';
import ContextChapter from './chapters/context/ContextChapter';
import DatabindingHooksChapter from './chapters/databinding/DatabindingHooks';
import FormsChapter from './chapters/forms/FormsChapter';
import JsxChapter from './chapters/jsx_tsx/JSX';
import RevealWrapper from './components/reveal/RevealWrapper';

const App: React.FC = () => {
  const chapter = [
    {
      title: 'Comparison of Frameworks & SPAs in General',
      component: ComparisonChapter
    },
    {
      title: 'JSX & TSX',
      component: JsxChapter
    },
    {
      title: 'Components & Styling',
      component: ComponentsChapter
    },
    {
      title: 'Conditional Rendering',
      component: ConditionalRenderingChapter
    },
    {
      title: 'Hooks & Databinding',
      component: DatabindingHooksChapter
    }

    /**
       * only if there's a lot of time left
       *  {
      title: 'Context',
      component: ContextChapter
    },
    {
      title: 'Routing',
      component: RoutingChapter
    },
    {
      title: 'Forms',
      component: FormsChapter
    },
       */
  ];

  return (
    <RevealWrapper>
      <IntroChapter />
      <TableOfContents chapter={chapter} />
      {chapter.map((chapter, index) => (
        <chapter.component key={index} title={chapter.title} index={index + 1} />
      ))}
    </RevealWrapper>
  );
};

export default App;
