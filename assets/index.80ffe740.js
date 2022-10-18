var k=Object.defineProperty,w=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var b=(o,i,s)=>i in o?k(o,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[i]=s,l=(o,i)=>{for(var s in i||(i={}))N.call(i,s)&&b(o,s,i[s]);if(f)for(var s of f(i))x.call(i,s)&&b(o,s,i[s]);return o},c=(o,i)=>w(o,v(i));import{j as g,r as p,P as R,$ as C,S,R as B,a as A}from"./vendor.97729534.js";const F=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const h of a)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function s(a){const h={};return a.integrity&&(h.integrity=a.integrity),a.referrerpolicy&&(h.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?h.credentials="include":a.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(a){if(a.ep)return;a.ep=!0;const h=s(a);fetch(a.href,h)}};F();const e=g.exports.jsx,t=g.exports.jsxs,T=g.exports.Fragment,r=o=>e("section",c(l({"data-background-image":o.isMain?"/slides//bg1.svg":void 0,"data-background-transition":o.isMain?"slide":void 0,style:o.isMain?{"--r-heading-color":"white",color:"white"}:{},"data-auto-animate":o.dataAutoAnimate,id:o.id||""},o),{children:o.children})),d=o=>{const i=`${o.index}. ${o.title}`;return t(r,{id:"chapter"+o.index,children:[e("div",{style:{position:"absolute",right:0,writingMode:"vertical-lr",height:"100%",color:"#0070ad",opacity:.5},children:i}),t(r,{isMain:!0,children:[e("h2",{children:i}),o.subtitle]}),o.children]})};const n=o=>{const i=p.exports.useRef(null);return p.exports.useEffect(()=>{setTimeout(()=>{i.current&&R.highlightElement(i.current,!1,s=>console.log(s))},0)},[o.children]),e("pre",{className:o.className,"data-line":o.highlightedLines||"",children:e("code",{ref:i,className:`language-${o.language||"tsx"} line-numbers`,children:o.children})})},L=`import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      {children}
    </Router>
  )
}
`,H=`<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/users">Users</Link>
  </li>
</ul>
`,P=`<Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="users" element={<Users />} />
</Routes>`,M=`import {
  ...
  useParams
} from "react-router-dom";

function BlogPost() {

  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}
`,E=`<HashRouter 
  basename={optionalString}>
  <App />
</HashRouter>;
`,I=`class Routing {
  page: string

  // make this page observable (depends on your way to do it)

  setRoutingFromUrl(): void {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get('page');
  }

  setRouting(page: string): void {
    setPage(page);
    let params = new URLSearchParams(window.location.search);

    params.set('page', page);

    let url = window.location + params;

    window.location.replace(url);
  }

  private setPage(newPage: string): void {
    this.page = newPage;
  }
}
`,D=`useEffect(() => {
  Routing.setRoutingFromUrl()
}, [])

return (
  {Routing.page === 'about' && <About /> }
  {Routing.page === 'users' && <Users /> }
  {Routing.page === '' && <Home /> }
)
`,j=`const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/landing',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

// user logic

const App = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path="user" element={
      <ProtectedRoute 
        redirectPath="/" 
        isAllowed={!!user} />}>
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);
`,_=o=>t(d,c(l({},o),{subtitle:e("blockquote",{children:'"Routing is the base for making a react application capable of showing multiple screens or components with a history and URL "'}),children:[t(r,{children:[e("h2",{children:"What types do we have?"}),t("ul",{className:"fragment",children:[e("li",{children:"Browser Routing (Basic Routing)"}),e("li",{children:"Hashrouting"}),e("li",{children:"Parameter Routing (little bit extra \u{1F9D0})"})]}),e("p",{className:"fragment",children:"Consider using Browser Routing most of the time. Hashrouting only if Browser Routing is encoded (Mircofrontend). Use Parameter Routing only if EVERYTHING else fails \u{1F97A}"})]}),t(r,{children:[e("h2",{children:"Browser Routing"}),e("p",{children:"Needed imports:"}),e(n,{children:L})]}),t(r,{children:[e("p",{children:"Navigation Bar:"}),e(n,{children:H})]}),t(r,{children:[e("p",{children:"Defined Routes:"}),e(n,{children:P})]}),t(r,{children:[e("h2",{children:"Retrieve Parameters"}),e(n,{children:M})]}),t(r,{children:[e("h2",{children:"Hash Routing"}),e("p",{children:"basically the same as Browser Routing just another import and the URL will look like this:"}),e("p",{children:"...yoururl.de/#/path"}),e(n,{children:E})]}),t(r,{children:[e("p",{children:"Special cases:"}),t("ul",{children:[e("li",{className:"fragment",children:"the / will sometimes be converted to a %2F"}),e("li",{className:"fragment",children:"some browser do not understand the hashrouting"}),e("li",{className:"fragment",children:"it is not a 'real' routing"})]})]}),t(r,{children:[e("h2",{children:"Parameter Routing"}),e("p",{className:"fragment",children:"The most awkward one \u{1F605}"}),t("p",{className:"fragment",children:["Basically: Instead of ",e("a",{children:"domain.com/test/1"})," we will have something like ",e("a",{children:"domain.com/?page=test&id=1"})]})]}),t(r,{children:[e("p",{children:"We need to build our own routing. So forget about the react-dom-router \u{1F972}"}),e("p",{className:"fragment",children:"We will need to use a state management. Wheter it is mobx, context or redux. We need to store our routing somewhere"})]}),t(r,{children:[e("p",{className:"fragment",children:"We will start by declaring a routing class"}),e(n,{className:"fragment",children:I})]}),t(r,{children:[e("p",{children:"Also we need to restructure our main to the following"}),e(n,{className:"fragment",children:D})]}),t(r,{children:[e("h2",{children:"Guards"}),e("p",{className:"fragment",children:"One special, but important part."}),e("p",{className:"fragment",children:"Guards are for securing routes."}),e("p",{className:"fragment",children:"Whether you are allowed to ENTER or"}),e("p",{className:"fragment",children:"to LEAVE the page"})]}),t(r,{children:[e("p",{children:"Browser Router"}),e(n,{className:"fragment",children:j})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://reactrouter.com/docs/en/v6/getting-started/installation",target:"_blank",rel:"noreferrer",children:"React Router"})}),e("li",{children:e("a",{href:"https://reactrouter.com/docs/en/v6/hooks/use-params",target:"_blank",rel:"noreferrer",children:"Hooks"})})]})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[t("li",{children:["Use"," ",e("a",{href:"https://reactrouter.com/docs/en/v6/getting-started/overview",target:"_blank",rel:"noreferrer",children:"React Router"})," ","to implement a routing to the detail page of a book (in App.tsx)"]}),e("li",{children:"Clicking on the title of a book in the list should forward the user to the detail page (/detail/[isbn])"}),e("li",{children:"On the detail page, a request is triggered to get the book details (https://api.itbook.store/1.0/books/[isbn])"}),e("li",{children:"The book details are displayed on this page"})]})]})]}));const y=({scale:o=1})=>t("div",{className:"app","data-id":"logo",style:{transform:"scale("+o+")"},children:[e("div",{className:"react"}),e("div",{className:"dot"})]}),O=()=>t(T,{children:[t(r,{isMain:!0,dataAutoAnimate:!0,children:[e(y,{scale:2}),e("aside",{className:"notes",children:"Intro Notes."})]}),t(r,{isMain:!0,"data-auto-animate":!0,dataAutoAnimate:!0,children:[e("h2",{children:"React Training"}),e("div",{style:{marginTop:50},children:e(y,{})}),e("aside",{className:"notes",children:"Intro Notes."})]})]}),U=o=>t(r,{isMain:!0,children:[e("h2",{children:"Table of Contents"}),e("ol",{children:o.chapter.map((i,s)=>e("li",{children:e("a",{href:`#/chapter${s+1}`,style:{color:"white"},children:i.title})},s))})]}),J=()=>e("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490 490",width:40,height:40,children:e("g",{children:e("path",{d:"M52.8,311.3c-12.8-12.8-12.8-33.4,0-46.2c6.4-6.4,14.7-9.6,23.1-9.6s16.7,3.2,23.1,9.6l113.4,113.4V32.7 c0-18,14.6-32.7,32.7-32.7c18,0,32.7,14.6,32.7,32.7v345.8L391,265.1c12.8-12.8,33.4-12.8,46.2,0c12.8,12.8,12.8,33.4,0,46.2 L268.1,480.4c-6.1,6.1-14.4,9.6-23.1,9.6c-8.7,0-17-3.4-23.1-9.6L52.8,311.3z",fill:"white"})})}),z=`<ul>
  <li *ngFor="let todo of todos">{{todo}}</li>
</ul>
<form (ngSubmit)="addTodo()">
  <!-- Binding -->
  <input name="todotext" [(ngModel)]="todoText">
  <input type="submit" value="Add Todo">
</form>

        `,W=`import { Component } from '@angular/core';
@Component({
  selector: 'app-root\u2019,
  templateUrl: './app.component.html\u2019,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = [];
  todoText = \u2019\u2019;
  ngOnInit() {
    const existingTodos = localStorage.getItem('todos\u2019);
    this.todos = JSON.parse(existingTodos as string) || [];
  }
}
`,Q=`import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState();
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  return (
    <div>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
      <form onSubmit={() => console.log(...)}>
        <input type="text"
          value={todoText}
          onChange={e => setTodoText(e.target.value)} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}
export default App;
`,q=`<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>
    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" placeholder="What needs to be done?" />
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      todos: [],
      todoText: "",
    };
  },
  mounted: function () {
    const existingTodos = localStorage.getItem("todos");
    this.todos = JSON.parse(existingTodos) || [];
  },
};
<\/script>

`,V=o=>t(d,c(l({},o),{children:[e(r,{children:e("h2",{children:"Some number crunching"})}),t(r,{children:[e("h2",{children:"Stats at github"}),t("table",{style:{width:"100%"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Watchers"}),e("td",{children:"3200"}),e("td",{children:"6700"}),e("td",{children:"6300"})]}),t("tr",{children:[e("td",{children:"Stars"}),e("td",{children:"71k"}),e("td",{children:"164k"}),e("td",{children:"200k"})]}),t("tr",{children:[e("td",{children:"Forks"}),e("td",{children:"19k"}),e("td",{children:"33k"}),e("td",{children:"32k"})]}),t("tr",{children:[e("td",{children:"Contributers"}),e("td",{children:"1350"}),e("td",{children:"1550"}),e("td",{children:"380"})]}),t("tr",{children:[e("td",{children:"Used by"}),e("td",{children:"1.7M"}),e("td",{children:"5.7M"}),e("td",{children:"167k"})]})]})]}),e("small",{children:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"})]}),t(r,{children:[e("h2",{children:"Github Stars"}),e("img",{src:"./slide-assets/framework-github-starts.png"}),e("small",{children:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"})]}),t(r,{children:[e("h2",{children:"Stackoverflow"}),e("img",{src:"./slide-assets/framework-stackoverflow.png"}),e("small",{children:"https://scand.com/company/blog/top-5-front-end-development-frameworks/"})]}),t(r,{children:[e("h2",{children:"npm downloads"}),e("img",{src:"./slide-assets/framework-npm.png"}),e("small",{children:"https://os-system.com/blog/best-front-end-frameworks-for-web-development/"})]}),t(r,{children:[e("h2",{children:"user satisfaction"}),e("img",{src:"./slide-assets/framework-dx.png"}),e("small",{children:"https://os-system.com/blog/best-front-end-frameworks-for-web-development/"})]}),t(r,{children:[e("h2",{children:"jobs"}),e("img",{src:"./slide-assets/framework-jobs.png"}),e("small",{children:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"})]}),e(r,{children:e("h2",{children:"More Details"})}),t(r,{children:[e("h2",{children:"Facts"}),t("table",{style:{width:"100%",fontSize:"1.75rem"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Type"}),e("td",{children:"Framework"}),e("td",{children:"Library"}),e("td",{children:"Library"})]}),t("tr",{children:[e("td",{children:"Languages"}),e("td",{children:"HTML, SASS, TypeScript"}),e("td",{children:"HTML, CSS, JS/TS"}),e("td",{children:"HTML, CSS, JS/TS"})]}),t("tr",{children:[e("td",{children:"Mobile"}),e("td",{children:"Ionic (CSS needs adaption)"}),e("td",{children:"React Native (HTML needs adaption)"}),e("td",{children:"Vue Native (comiled to react native)"})]})]})]})]}),t(r,{children:[e("h2",{children:"Facts"}),t("table",{style:{width:"100%",fontSize:"1.75rem"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Upgrading"}),e("td",{children:"Needed every year (major version change). Quite difficult."}),e("td",{children:"No upgrade needed, built for stability. One upgrade command."}),e("td",{children:"Not regulary. Migration tool exists."})]}),t("tr",{children:[e("td",{children:"Payload"}),e("td",{children:"500KB"}),e("td",{children:"35KB"}),e("td",{children:"20KB"})]}),t("tr",{children:[e("td",{children:"Loading time (mean of DOM, Memory & Startup)"}),e("td",{children:"1.54s"}),e("td",{children:"1.17s"}),e("td",{children:"1.11s"})]})]})]})]}),e(r,{children:t("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e("div",{children:"HTML, CSS, JS"}),e("div",{style:{paddingTop:20,paddingBottom:10},children:e(J,{})}),t("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[t("div",{style:{background:"grey",borderRadius:"10%",padding:10},children:[e("h5",{children:"React"}),e("small",{children:"App.tsx"})]}),t("div",{style:{background:"grey",borderRadius:"10%",padding:10},children:[e("h5",{children:"Vue"}),e("small",{children:"App.vue"})]}),t("div",{style:{background:"grey",borderRadius:"10%",padding:10},children:[e("h5",{children:"Angular"}),e("small",{children:"App.component.css"}),e("br",{}),e("small",{children:"App.component.html"}),e("br",{}),e("small",{children:"App.component.ts"}),e("br",{}),e("small",{children:"main.module.ts"})]})]})]})}),t(r,{children:[e("h2",{children:"Example: TODO App"}),e("img",{src:"./slide-assets/framework-todo.png"}),e("small",{children:"https://www.youtube.com/watch?v=cuHDQhDhvPE"})]}),t(r,{children:[e("h2",{children:"Angular"}),t("div",{style:{display:"flex",justifyContent:"center",gap:10},children:[e(n,{children:z}),e(n,{children:W})]})]}),t(r,{children:[e("h2",{children:"React"}),e("div",{children:e(n,{children:Q})})]}),t(r,{children:[e("h2",{children:"Vue"}),e("div",{children:e(n,{children:q})})]}),t(r,{children:[e("h2",{children:"Same App: 10 Frameworks"}),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cuHDQhDhvPE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})]})),G=`const Welcome: React.FC = (props: Pros) {
  return <h1>Hello, {props.name}</h1>;
}`,X=`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`,Y=`function App = () => {
  const books: Book[] = [
    {id: 1, name: 'Moby Dick', author: 'Herman Melville'},
    {id: 2, name: 'Hamlet', author: 'Shakespeare'},]
  return (
    <div>
    <h1>Booklist</h1>
     {books.map((book, index) => (
       // always define keys when looping, unique identifier for React DOM
       <Book key={index} book={book} /> 
     ))}
    </div>
  )
}
`,$=`const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book: React.FC = (props: Book) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>author: {props.author}</p>
    </div>
  )
}
`,K=`const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`,Z=`const Book: FC = ({name="Tom", author="Rowling"}: Book) => {
return (
  <div>
    <h1>{name}</h1>
    <p>author: {author}</p>
  </div>
)}`,ee=`const Book: FC = (props: Props) => {
  props.title = "HI"
}`,te=`const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`,re=`const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      // notice the double curly braces
      <p style={{ color: 'green'}}>author: {author}</p>
    </div>
  )
}
`,ne="yarn add --save styled-components",oe=`import styled from 'styled-components';
const StyledAuthor = styled.p\`color: 'green'\`
const Book: React.FC = ({ name, author }: Book) => {
  return (<div>
      <h1 className='myHeadline'>{name}</h1>
        // notice the double curly braces
      <StyledAuthor>author: {author}</StyledAuthor>
    </div>
  )}
`,ie=`interface Props {
  title: string;
}
export default MyButton: React.FC = (props: Props) => {
    return (
        <button>{props.title}</button>
    )
}`,se=`<MyButton /> // error
<MyButton title={2} /> // error
<MyButton title='Hit me' /> // ok
`,ae=o=>t(d,c(l({},o),{subtitle:e("p",{children:"JavaScript functions, accept Props and return React Elements (JSX)"}),children:[t(r,{children:[e("h2",{children:"Class Components vs. Functional Components"}),e(n,{className:"fragment",children:G}),e(n,{className:"fragment",children:X}),e("p",{className:"fragment",children:"same output"})]}),t(r,{children:[e("h2",{children:"Class Components vs. Functional Components"}),e("p",{className:"fragment",children:"Whats the difference? When should I use which one?"}),t("ul",{className:"fragment",children:[e("li",{children:"historical reasons: no state-management / lifecycle hooks before 2019 in functional components"}),e("li",{children:"nowadays: hardly any usage of class components"}),e("li",{children:"functional components are easier to read and test, less code, better performance"})]}),e("a",{href:"https://www.twilio.com/blog/react-choose-functional-components",target:"_blank",className:"fragment",rel:"noreferrer",children:"\u{1F680} understanding functional components vs class components"})]}),t(r,{children:[e("h2",{children:"Properties (aka Props)"}),e("p",{children:"Pass information down the component tree"}),e(n,{className:"fragment",children:ie}),e(n,{className:"fragment",children:se}),e("aside",{className:"notes",children:"Or use any other way of passing JS objects (e.g. destructuring)."})]}),t(r,{children:[e("h2",{children:"Properties (aka Props)"}),e("p",{className:"fragment",children:"Book-List which renders various Books from a Book component"}),e("p",{className:"fragment",children:"The Book component doesn't 'know' what to render so we need to pass the information"})]}),t(r,{children:[e("h2",{children:"Properties (aka Props)"}),e(n,{highlightedLines:"10",children:Y}),e("pre",{children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-conditional-rendering-basic/react-training-codeexamples/src/App.tsx",children:"\u{1F680} code example on GitHub"})}),e("aside",{className:"notes",children:"map: this is how we iterate over arrays in React (angular ngFor, vue: v-for)"})]}),t(r,{children:[e("h2",{children:"Properties: not destructured"}),e(n,{className:"fragment",highlightedLines:"7",children:$})]}),t(r,{children:[e("h2",{children:"Properties: destructured"}),e(n,{className:"fragment",highlightedLines:"7",children:K})]}),t(r,{children:[e("h2",{children:"Properties: destructured vs not destructured"}),t("ul",{children:[t("li",{className:"fragment",children:["Pro: easier to apply default values",e(n,{highlightedLines:"1",children:Z})]}),e("li",{className:"fragment",children:"Con: in case of large components you might get confused which variables are defined in the component scope and which ones are passed as props"})]})]}),t(r,{children:[e("h2",{children:"Important sidenote: Props are immutable"}),t("ul",{children:[t("li",{children:["this means you ",e("strong",{children:"cannot"})," do something like this:"]}),e(n,{children:ee})]})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Implement a small app which renders a list of books (start in App.tsx)."}),e("li",{children:"There should be a Book-Component which accepts a property of type 'Book'."}),t("li",{children:["Find some sample data"," ",e("a",{href:"https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-styled-components/react-training-codeexamples/src/testData/Booklist.ts",target:"_blank",rel:"noreferrer",children:"here"})]})]})]}),t(r,{children:[e("h2",{children:"Let's style our Booklist"}),t("ul",{className:"fragment",children:[e("li",{children:"via css classes"}),e("li",{children:"via inline styling"}),e("li",{children:"CSS in JS"})]})]}),t(r,{children:[e("h2",{children:"className"}),e("p",{className:"fragment",children:"instead of using the 'class'-attribute, React expects 'className'"}),e(n,{className:"fragment",children:te})]}),t(r,{children:[e("h2",{children:"Inline Styling"}),e("p",{className:"fragment",children:"inline styling is also possible via the well known 'style'-attribute"}),e("p",{className:"fragment",children:"notice the double curly braces, usual CSS-syntax inside"}),e(n,{className:"fragment",children:re}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-basic/react-training-codeexamples/src/components/book/Book.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[e("h2",{children:"CSS in JS"}),t("ul",{className:"fragment",children:[e("li",{children:"Style components using JavsScript"}),e("li",{children:"JavaScript power in CSS"}),t("li",{children:["no React built-in-feature -",">"," external library"]}),t("ul",{className:"fragment",children:[t("li",{children:["most popular:"," ",e("a",{href:"https://styled-components.com/",target:"_blank",rel:"noreferrer",children:"Styled Components"})," ","(36K+ stars on GitHub)"]}),t("li",{children:["also used by"," ",e("a",{href:"https://mui.com/system/styled/",target:"_blank",rel:"noreferrer",children:"MUI"})]})]})]}),t("aside",{className:"notes",children:["hint: when working with MUI you should checkout the latest version of styling, `the system`, which implements"," ",e("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noreferrer",children:"tailwind"})," ","and makes your styling life a lot easier and esp. faster"]})]}),t(r,{children:[e("h2",{children:"CSS in JS - styled components"}),e(n,{className:"fragment",children:ne}),e(n,{className:"fragment",highlightedLines:"2,7",children:oe}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-styled-components/react-training-codeexamples/src/components/book/Book.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Our booklist isn't very pretty yet ..."}),e("li",{children:"Choose one styling-method you've just learned about and style your BookList."})]})]})]})),le=`  interface Props {
    userName?: string; // optional
  }
  const SayHi: React.FC = (props: Props) => {
    if (props.userName) {
      return <h1>Hi {props.userName}!</h1>
    } else {
      return <h1>Hello Guest!</h1>
    }
  }
`,ce=`export default LoginButton: React.FC = () => {
    return <button>Login</button>
}`,de=`export default LogoutButton: React.FC = () => {
    return <button>Logout</button>
}`,he=`const AuthenticationComponent: React.FC = (props: Props) => {
  let button;
  if (props.userName) {
    button = <LogoutButton />
  } else {
    button = <LoginButton />
  }
  return <div>{button}</div>
}
`,ue=`const UsersList: React.FC = (props: Props) => {
  const users = props.users
  return (
    <div>
      <h2>My fancy app</h2>
      {users.length > 0 && (
        <p>Your app is used by {users.length} users.</p>
      )}
    </div>
  )
}
`,me=`const UsersList: React.FC = (props: Props) => {
  const users = props.users
  return (
    <div>
      <h2>My fancy app</h2>
      {users.length > 0 ? (
        <p>Your app is used by {users.length} users.</p>
      ) : (
        <p>No one is interested in your app \u2639\uFE0F</p>
      )}
    </div>
  )
}`,pe=`const UsersList: React.FC = (props: Props) => {
  if (!props.users) {
    return null;
  }
  return (
    <div>
      <h2>My fancy app</h2>
      <p>Your app is used by {users.length} users.</p>
    </div>
  )
}`,ge=o=>t(d,c(l({},o),{subtitle:t("ul",{children:[e("li",{children:"rendering different components"}),e("li",{children:"inline conditions"})]}),children:[t(r,{children:[e("h2",{children:"Component uses different return statements"}),e(n,{className:"fragment",children:le})]}),t(r,{children:[e("h2",{children:"Conditionally assign component to variable"}),t("div",{className:"fragment",children:[e(n,{className:"",children:ce}),e(n,{className:"",children:de})]}),e(n,{className:"fragment",children:he})]}),t(r,{children:[e("h2",{children:"Inline Logic - variant 1"}),e(n,{className:"fragment",children:ue})]}),t(r,{children:[e("h2",{children:"Inline Logic - variant 2"}),e(n,{className:"fragment",children:me})]}),t(r,{children:[e("h2",{children:"Prevent component from rendering"}),e(n,{className:"fragment",children:pe})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Extend your Book-Component with a badge that notifies the user when a book is not available in store. (Pass an additional prop to your Book-Component)."}),e("li",{children:"Bear in mind that there might be a case where no books are available for rendering. Create a UI for that."})]})]})]})),fe=`// fetch user...
<Page user={props.user} />
// ... which renders ...
<PageLayout user={props.user} />
// ... which renders ...
<NavigationBar user={props.user} />
// ... which renders ...
<Link href={props.user.permalink}>
  <Avatar user={props.user} />
</Link>
`,be=`const UserContext = React.createContext<User>(null);

// fetch user...

<UserContext.Provider value={user}>
  <Page />
</UserContext.Provider>
`,ye=`const user = useContext(UserContext);

<Link href={user.permalink}>
  <Avatar user={user} />
</Link>
`,ke=`export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
`,we=`const {theme, toggleTheme} = useContext(UserContext)

return (
  <div
    style={{ background: theme.back }}
    onClick={() => toggleTheme()}>
    Click me
  </div>
)
`,ve=o=>t(d,c(l({},o),{subtitle:e("blockquote",{children:'"Context provides a way to pass data through the component tree without having to pass props down manually at every level."'}),children:[e(r,{children:e("img",{style:{width:800},src:"./slide-assets/context.png"})}),t(r,{children:[e("h2",{children:"When to use?"}),t("ul",{className:"fragment",children:[e("li",{children:"locale preferences"}),e("li",{children:"UI theme"}),e("li",{children:"user objects"})]}),e("aside",{className:"notes",children:"Really use with care! Just if many components need all of the data. Resuability gets more difficult."})]}),t(r,{children:[e("h2",{children:"\u{1F575}\uFE0F Be careful!"}),e("p",{className:"fragment",children:"Is it easier to pass down components as props?"}),e("p",{className:"fragment",children:"Be aware of restricted reusability!"}),e("p",{className:"fragment",children:"Only use if many components need the data."}),e("aside",{className:"notes",children:"Really use with care! Just if many components need all of the data. Resuability gets more difficult."})]}),t(r,{children:[e("h2",{children:"From"}),e(n,{children:fe})]}),t(r,{children:[e("h2",{children:"To"}),e(n,{highlightedLines:"1|1-7",children:be})]}),t(r,{children:[e("h2",{children:"To"}),e(n,{highlightedLines:"1|1-7",children:ye})]}),t(r,{children:[e("h2",{children:"Update from child"}),e(n,{children:ke}),e(n,{children:we})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://reactjs.org/docs/context.html",target:"_blank",rel:"noreferrer",children:"React Docs"})}),e("li",{children:"Advanced State Management:"}),t("ul",{children:[e("li",{children:e("a",{href:"https://kentcdodds.com/blog/application-state-management-with-react",target:"_blank",rel:"noreferrer",children:"\u{1F680} Application State Management with React"})}),e("li",{children:e("a",{href:"https://kentcdodds.com/blog/how-to-use-react-context-effectively",target:"_blank",rel:"noreferrer",children:"\u{1F680} How to use React Context effectively"})})]})]}),e("aside",{className:"notes",children:"Recommend Kent C. Dotts blog posts. You won't need redux anymore!"})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Extract the book list into a separate component"}),t("li",{children:["Use"," ",e("a",{href:"https://reactjs.org/docs/context.html",target:"_blank",rel:"noreferrer",children:"React Context"})," ","to create a context wrapper for light/dark mode switch"]}),e("li",{children:"Apply it to the outmost component (App.tsx)"}),e("li",{children:"Toggle stylings in book list (font color) according to dark mode context"}),e("li",{children:"Add button to App.tsx that toggles the color mode"}),e("li",{children:"Allow child components to toggle the color mode (and demonstrate it with a new component)"})]})]})]})),Ne=`  const Numbers: React.FC = () => {
    const [bookCounter, setBookCounter] = useState<number>(0);

    return (
      <p>{bookCounter}</p>
      <button onClick={() => setBookCounter(bookCounter + 1)}>
        increase bookCounter
      </button>
    )
  }
`,xe=`const [books, setBooks] = useState<Book>()

useEffect(() => {
  fetch(...)
    .then(data => setBooks(data))
}, [])  // empty array = runs at initial render

return (
  <BookList books={books} />
)
`,Re=`const [currentBooks, setCurrentBooks] = useState<Book[]>()
const [selectedBook, setSelectedBook] = useState<Book>()
useEffect(() => {
  const booksByAuthor = props.books
    .filter(book => book.author === props.author)
  setCurrentBooks(booksByAuthor)
  setSelectedBook(booksByAuthor[0])
}, [props.author]) // hook runs when props.author changes

return(
  <div>
    <Select
      options={currentBooks}
      onChange={e => setSelectedBook(e.target.value)}/>
    <p>Books by {props.author.name}</p>
    <BookList books={currentBooks} />
  </div>
)
`,Ce=`useEffect(() => {
  BooksApi.subscribeToUpdates(props.user.id);
  /**
   * return function only runs once before 
   * component's lifecycle is being destroyed
   */
  return () => {
    BooksApi.unsubscribeFromUpdates(props.user.id)
  }
}, [])
`,Se=`const useBooks = () => {
  const [books, setBooks] = useState<Book[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(...)
      .then(data => {
        setBooks(data)
        setLoading(false)
      })
  }, [])
  return {loading, books}
}
`,Be="const { loading, books } = useBooks()",Ae=`const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
`,Fe=`import { useQuery } from "react-query";
// query key is used to identify the query
const response = useQuery("users", fetchUsers);
`,Te=`data,
error,
failureCount,
isError,
isFetchedAfterMount,
isFetching,
isIdle,
isLoading,
isPreviousData,
isStale,
isSuccess,
refetch,
remove,
status,
`,Le=`const {loading, data, error} = useQuery("books", fetchBooks);

return (
  {loading ? <p>Loading...</p>
  : error ? <p>Error: {error.message}</p>
  : <BookList books={data} />}
)
`,He=`export class Test {
  continue: boolean | undefined = undefined;

  constructor() {
    makeAutoObservable(this)
  }

  someFunction = () => {
    const disposer = observe(this, 'continue', change => {
      console.log(change.newValue)
    })
  }
}
`,Pe=o=>t(d,c(l({},o),{subtitle:t("ul",{children:[e("li",{children:"Hooks"}),e("li",{children:"Databinding"}),e("li",{children:"Databinding and Hooks: influence the component's rendering"}),e("li",{children:"Custom Hooks"}),e("li",{children:"useQuery-Hook"})]}),children:[t(r,{children:[e("h2",{children:"Hooks"}),e("p",{children:"work with React state and lifecycle features from function components"}),e("p",{children:"No more need for Class Components \u{1F601}"}),e("p",{children:"most important React Hooks: useState, useEffect, (useContext, useReducer, useCallback, useMemo, ...)"})]}),t(r,{children:[e("h2",{children:"useState-Hook"}),t("ul",{children:[e("li",{className:"fragment",children:"add state management to function components"}),e("li",{className:"fragment",children:"component rerenders when state in hook changes"}),e("li",{className:"fragment",children:"syntax: array destructuring"}),t("ul",{children:[e("li",{className:"fragment",children:"first value is set to the state value"}),e("li",{className:"fragment",children:"second value is used to update the value"})]})]})]}),t(r,{children:[e("h2",{children:"useState-Hook"}),e(n,{children:Ne}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-hooks-usestate/react-training-codeexamples/src/App.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Implement some buttons, that determine how many books should be rendered inside your book-list."}),e("li",{children:"As you might have already guessed: the useState-hook is your friend!"})]})]}),t(r,{children:[e("h2",{children:"useEffect-Hook"}),t("ul",{children:[e("li",{className:"fragment",children:"perform side effects in components"}),e("li",{className:"fragment",children:"e.g. for data fetching"}),e("li",{className:"fragment",children:"cleanup when a component's lifecycle is over"}),e("li",{className:"fragment",children:"define when to run it with the dependency array"})]})]}),t(r,{children:[e("h2",{children:"useEffect-Hook: Data Fetching"}),e(n,{className:"fragment",children:xe}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-hooks-useeffect/react-training-codeexamples/src/App.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[e("h2",{children:"useEffect-Hook: Dependency Array"}),e(n,{className:"fragment",highlightedLines:"8",children:Re})]}),t(r,{children:[e("h2",{children:"useEffect-Hook: Unmount of Component"}),e(n,{className:"fragment",children:Ce})]}),t(r,{children:[e("h2",{children:"Rules of Hooks"}),t("ul",{children:[e("li",{className:"fragment",children:"only call Hooks at the top level of a component. React will run into problems when calling hooks after determining conditions"}),e("li",{className:"fragment",children:"Don't call Hooks from regular JS functions, the only other valid place are custom Hooks"})]})]}),t(r,{children:[e("h2",{children:"Custom Hooks"}),e("ul",{children:e("li",{className:"fragment",children:"extract component logic into reusable functions"})}),e(n,{className:"fragment",children:Se}),e(n,{className:"fragment",children:Be})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[t("li",{children:["As of now: we'd like to get rid of our dummy book-data and use an"," ",e("a",{href:"https://api.itbook.store/1.0/new",target:"_blank",rel:"noreferrer",children:"API"})," ","instead."]}),e("li",{children:"Fetch the books to display from the API."}),e("li",{children:`Update your conditional rendering in Book.tsx: Place a badge "cheap" when the book's price is less than 30$, else the badge should display "expensive".`}),e("li",{children:"Since data fetching takes some time, also provide a loading spinner that tells the user you are fetching data while there are no books to display yet."}),t("li",{children:["Brownie points: In case you're finished early: learn about the"," ",e("a",{href:"https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery",children:"useQuery-Hook"}),", do some refactoring and implement your datafetching by using useQuery."]})]})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),t("ul",{children:[e("li",{className:"fragment",children:"data-fetching library for React"}),e("li",{className:"fragment",children:"fetching, caching, synchronizing and updating server state in React applications"}),e("li",{className:"fragment",children:"useQuery-Hook: handle various states in the fetching process, e.g. loading, error, data, ..."}),e("li",{className:"fragment",children:"React Query provides further Hooks"})]})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),e(n,{className:"fragment",children:Ae}),e(n,{className:"fragment",children:Fe})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),e("p",{children:"Response Object"}),e(n,{className:"fragment",children:Te})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),e("p",{children:"save code, no need to handle states by yourself"}),e(n,{className:"fragment",children:Le}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-hooks-use-query-with-material/react-training-codeexamples/src/components/book-list/BookList.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Homework"}),e("ul",{children:e("li",{children:"If not done yet: refactor your code and implement the data fetching part by using the useQuery-Hook."})})]}),t(r,{children:[e("h2",{children:"Angular Excursus: Observable vs State"}),e("p",{className:"fragment",children:"When coming from Angular it is often asked what happened to the Observables"}),e("p",{className:"fragment",children:"You just simply don't need them :) The state listening in a useEffect for example is like a simple pipe in Angular"}),e("p",{className:"fragment",children:'However it is possible to have "real" subscribe with mobx for example.'})]}),t(r,{children:[e("h2",{children:"mobx"}),e(n,{children:He}),e("p",{className:"",children:"If you really really need it..."})]})]})),Me=`<Formik
 initialValues={{ email: '', password: '' }}
 validate={true}
 onSubmit={console.log}
>
 {({ isSubmitting }) => (
   <Form>
     <Field type="email" name="email" />
     <ErrorMessage name="email" component="div" />
     <button type="submit" disabled={isSubmitting}>
       Submit
     </button>
   </Form>
 )}
</Formik>
`,Ee=`const { register, handleSubmit, errors } = useForm<MyForm>();
const onSubmit = (data) => console.log(data);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue="test" {...register("fName")} />
    <input {...register("lName", { required: true })} />
    {errors.exampleRequired && <span>required!</span>}
    <input type="submit" />
  </form>
);
`,Ie=o=>t(d,c(l({},o),{children:[t(r,{children:[t("p",{children:["More of a personal preference,",e("br",{}),"but there are a few popular libs:"]}),t("ul",{className:"fragment",children:[e("li",{children:e("a",{href:"https://github.com/jaredpalmer/formik",target:"_blank",rel:"noreferrer",children:"Formik"})}),e("li",{children:e("a",{href:"https://github.com/react-hook-form/react-hook-form",target:"_blank",rel:"noreferrer",children:"React Hook Form"})})]}),e("aside",{className:"notes",children:"Depends on personal preference, used UI libs/frameworks and performance requirements."})]}),e(r,{children:t("div",{children:["Components based",e(n,{children:Me})]})}),t(r,{children:[t("div",{children:["Hooks based",e(n,{children:Ee})]}),e("aside",{className:"notes",children:"Better performance wise. Just updates necessary children."})]}),t(r,{children:[e("h2",{children:"Further Reads"}),e("ul",{children:e("li",{children:e("a",{href:"https://dev.to/pmbanugo/looking-for-the-best-react-form-library-in-2021-it-s-probably-on-this-list-e2h",target:"_blank",rel:"noreferrer",children:"\u{1F4C4} Comparison of four form libraries"})})}),e("aside",{className:"notes",children:"Recommend Kent C. Dotts blog posts. You won't need redux anymore!"})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"extend your booklist with the possibility to add a new book to your list. (For example, add some button that shows a form onClick())"}),t("li",{children:["install"," ",e("a",{href:"https://react-hook-form.com/api/useform/",target:"_blank",rel:"noreferrer",children:"useForm"})]}),t("li",{children:["In case you're finished early: try to use"," ",e("a",{href:"https://formik.org/docs/overview",target:"_blank",rel:"noreferrer",children:"Formik"})," ","\u{1F913}"]})]})]})]})),De="const element = <h1>Welcome to React!</h1>",je=`export default MyButton: React.FC = () => {
    return <button>Click Me!</button>
}`,_e=`import MyButton from './myButton';
<MyButton /> // ok
<MySuperSpecialButton /> // error
`,Oe=`const element = (
    const formatUser = user => user.firstName + user.lastName
    const mySource = "https://mylink.com"
    <div>
      <h1>Hello {formatUser(user)}</h1>
      <img src={mySource}/> 
    </div>
  )
  `,Ue=o=>t(d,c(l({},o),{subtitle:e("p",{children:"Templating with JavaScript"}),children:[t(r,{children:[e("h2",{children:"JSX / TSX"}),e("p",{className:"fragment",children:"syntax extension to JavaScript"}),e("p",{className:"fragment",children:"describe what the UI looks like"}),e("p",{className:"fragment",children:"full power of JavaScript"}),e("p",{className:"fragment",children:"produces React elements"}),e("p",{className:"fragment",children:"TSX enhances JSX in terms of type checking"}),e(n,{className:"fragment",children:De})]}),t(r,{children:[e("h2",{children:"JSX / TSX Elements"}),t("ul",{className:"fragment",children:[e("li",{children:"elements are looked up by identifiers"}),e("li",{children:"naming convention starts with capital letter"}),e("li",{children:"You can import them as a component in your app"})]}),e(n,{className:"fragment",children:je}),e(n,{className:"fragment",children:_e})]}),t(r,{children:[e("h2",{children:"JavaScript in Elements"}),e(n,{children:Oe}),e("p",{children:"notice the following:"}),t("ul",{children:[t("li",{children:["JSX Elements can have mutlitple children but need ",e("b",{children:"one"})," root element"]}),t("li",{children:["empty tags may be closed immediatly with `","/>","`"]}),t("li",{children:["JavaScript can be used inside JSX (","{}",")"]})]})]})]})),Je="<AddButton onClick={() => setIsAddOpen(true)} />",ze=`const moizedOpen = useCallback(() => {
    setIsAddOpen(true);
}, []);`,We=`export const AddButton = React.memo(
  function AddButton({ onClick }) {
    return (
        <button onClick={onClick}>Add</button>
    )
})`,Qe=`export const AddButton = React.memo(
  function AddButton({ onClick, books[] }) {
    return (
        <button onClick={onClick}>Add {books.length} books</button>
    )
}, (p1, p2) => p1.books.length === p2.books.length);`,qe=`const [books, setBooks] = useState(props.books);
const moizedBook = useMemo(() => {
  return books.find(book => book.author === props.author);
}, [books, props.author]);
`,Ve=`const AddModal = lazy(() => import('./AddModal))

return(
  <div>
    /* render other components */
    <Suspense fallback={<div>Loading...</div>}>
      <AddModal />
    </Suspense>
  <div>
)
`,Ge=`const About = React.lazy(() => import("./pages/About"));
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about"
        element={
          <React.Suspense fallback={<div>...</div>}>
            <About />
          </React.Suspense>
        }
      />
    <Routes>
  )
`,Xe=`const App = () => {
  const [additionCount, setAdditionCount] = useState(0);
  const [subtractionCount, setSubtractionCount] = useState(0);
  
  console.log("Component Rendering");
  ...
}
`,Ye=`const handleOnClickAsync = () => {
  fetch(\u201Chttps://jsonplaceholder.typicode.com/books/1").then(() => {
    setAdditionCount(additionCount + 1);
    setSubstractionCount(substractionCount \u2014 1);
  });
};
`,$e=`ReactDOM.createRoot(document.getElementById('app'))
  .render(<App /> );
`,Ke=o=>t(d,c(l({},o),{children:[t(r,{children:[e("h2",{children:"Ways to improve the performance of your app:"}),t("ul",{children:[e("li",{children:"avoiding wasted re-renders"}),e("li",{children:"Automatic Batching"}),e("li",{children:"caching expensive operations"}),e("li",{children:"lazy loading components"})]})]}),t(r,{children:[e("h2",{children:"Wasted Re-renders"}),e("div",{style:{position:"relative",width:"auto",height:"34rem",margin:"0 auto"},children:e("img",{className:"fragment fade-in","data-fragment-index":"0",width:"auto",height:"100%",src:"./slide-assets/wasted-re-renders.png",style:{position:"absolute",top:0,left:"25%"}})}),t("aside",{className:"notes",children:[e("p",{children:"React has a cheap represenation of the DOM: Virtual DOM"}),e("p",{children:"react sends mutations with nodes to the DOM"}),e("p",{children:"'knows' when to send mutations to DOM: only if content actually changes"}),e("p",{children:"when having wasted rerenders the virtualy DOM updates and rerenders without sending mutations to the actual DOM since there was no change of content"})]})]}),t(r,{children:[e("h2",{children:"React DEV Tools"}),t("ul",{children:[e("li",{children:e("a",{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",target:"_blank",rel:"noreferrer",children:"install Chrome Extension"})}),e("li",{children:"inspect your app with the profiler"})]}),e("img",{className:"fragment fade-in",src:"./slide-assets/pilot-devtools.png"}),t("aside",{className:"notes",children:[e("p",{children:'inspect the app together "live session"'}),e("p",{children:"record navigation through the app"}),e("p",{children:"profiler shows rerenders"}),t("p",{children:["#TODO: decision yet to make: inspect our own app or example from"," ",e("a",{href:"https://github.com/hendrikswan/pluralsight-react-performance",target:"_blank",rel:"noreferrer",children:"GitHub"})]}),e("p",{children:"image shows profiler. you can navigate through the rerender cycles and see components that are being rerendered"})]})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),e(n,{className:"fragment",children:Je}),t("ul",{className:"fragment",children:[e("li",{className:"fragment",children:"new on click function is rendered each time parent rerenders"}),t("li",{className:"fragment",children:["solution:"," ",e("a",{href:"https://reactjs.org/docs/hooks-reference.html#usecallback",target:"_blank",rel:"noreferrer",children:"useCallback-hook"})]}),e("li",{className:"fragment",children:"returns memoized version of the callback, only changes if a dependency changes"})]})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),e(n,{className:"fragment",children:ze}),t("aside",{className:"notes",children:[e("p",{children:"you can also pass dependecies in the array, might be useful on more complex operations"}),e("p",{children:"only using useCallback won't fix the whole problem, it's only one part of the solution"}),e("p",{children:"we need to tell the ChildComponent to only rerender when Props Change"}),e("p",{children:"children need to be optimzed as well: rely on reference equality"})]})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),t("ul",{children:[e("li",{className:"fragment",children:"children need to be optimized as well"}),t("li",{className:"fragment",children:["only rerender, when Props or references change by using"," ",e("a",{href:"https://reactjs.org/docs/react-api.html#reactmemo",target:"_blank",rel:"noreferrer",children:"React.memo"})]}),e("li",{className:"fragment",children:"In case React.memo has useState, useReducer or useContext Hook in its implementation, it will still rerender on according changes"})]}),e(n,{className:"fragment",children:We})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),t("ul",{children:[e("li",{className:"fragment",children:"by default only shallow comparison of props object"}),e("li",{className:"fragment",children:"React.memo takes a second argument where you could provide a comparison function"})]}),e(n,{className:"fragment",children:Qe}),t("aside",{className:"notes",children:[e("p",{children:"comparions function always needs to return a boolean, telling the component to rerender or not"}),e("p",{children:"p1, p2 stands for props before, props after"}),e("p",{children:"additional pitfall: parent component passing the props needs to make sure the reference doesn't change too early. e.G. for state updates: copy your state by using the spread operator and then set your State again."}),e("p",{children:"you gain a perfomance boost but still should use it wise, benefits are dependent the components actualy cost of computation so it's rather for medium size to big components"})]})]}),t(r,{children:[e("h2",{children:"When to use React.memo()?"}),e("div",{className:"fragment fade-in",children:t("ul",{children:[t("li",{children:["Pure functional Component",e("ul",{children:e("li",{children:"Your Component is functional and given the same Props, always renders the same output."})})]}),e("li",{children:"Renders often"}),t("li",{children:["Re-renders with the same Props",e("ul",{children:e("li",{children:"Your Component is usually provided with the same props during re-rendering"})})]}),t("li",{children:["Medium to big size",e("ul",{children:e("li",{children:"Your component contains a decent amount of UI-Elements to reason Props equality check."})})]})]})}),e("a",{className:"fragment",href:"https://dmitripavlutin.com/use-react-memo-wisely/",target:"_blank",rel:"noreferrer",children:"\u{1F680} use React.memo() wisely"})]}),t(r,{children:[e("h2",{children:"Automatic Batching"}),t("ul",{children:[e("li",{className:"fragment",children:"New in React 18: Automated Batching"}),e("li",{className:"fragment",children:"batching group state updates, native event handlers are batched as well"})]}),e(n,{className:"fragment",children:Xe}),e("aside",{className:"notes",children:"this batching example already works since React 17"})]}),t(r,{children:[e("h2",{children:"Automatic Batching"}),e("ul",{children:e("li",{className:"fragment",children:"Since React 18 this also works for state updates inside a context that is not associated with the browser, e.g. for fetch()"})}),e(n,{className:"fragment",children:Ye}),e("aside",{className:"notes",children:"this would rerender twice, because rerender would be triggered by both the state update AND the callback of fetch()"})]}),t(r,{children:[e("h2",{children:"Automatic Batching"}),e("ul",{className:"fragment",children:e("li",{className:"fragment",children:"By upgrading the render-method in index.tsx state updates in asynchronous function will cause only one re-rendering process"})}),e(n,{className:"fragment",children:$e}),e("a",{className:"fragment",href:"https://dmitripavlutin.com/use-react-memo-wisely/",target:"_blank",rel:"noreferrer",children:"\u{1F680} read more about automatic batching"})]}),t(r,{children:[e("h2",{children:"Caching expensive operations"}),e("ul",{children:t("li",{className:"fragment",children:[e("a",{href:"https://reactjs.org/docs/hooks-reference.html#usememo",target:"_blank",rel:"noreferrer",children:"useMemo"})," ","is your friend: it returns a memoized value that is only re-calculated when your dependencies change"]})}),e(n,{className:"fragment",children:qe}),e("ul",{className:"fragment",children:e("li",{children:"caution: be aware of the dependecies - always double check"})}),e("aside",{className:"notes",children:e("p",{children:"you might find yourself wondering why component doesn't rerender when you expect it to: typical cause is a missing dependy in the useMemo hook"})})]}),t(r,{children:[e("h2",{children:"Lazy loading expensive components"}),t("ul",{children:[e("li",{className:"fragment",children:"import lazy and Supense from React"}),e("li",{className:"fragment",children:"downloads the component's bundle on demand, renders rest of component and displays Suspense's fallback as long as the lazy loaded component isn't available"}),e("li",{className:"fragment",children:"only makes sense for big component, e.g. when rendering lots of data there"})]}),e(n,{className:"fragment",children:Ve})]}),t(r,{children:[e("h2",{children:"Lazy loading with React Router"}),t("ul",{children:[e("li",{className:"fragment",children:"lazy load individual route elements or portions of router hierarchy"}),e("li",{className:"fragment",children:"pages that are not required on the landing page can be split into seperate bundles, decreasing load time on initial page and improving performance"})]}),e(n,{className:"fragment",children:Ge})]}),t(r,{children:[e("h2",{children:"Measure page performance"}),t("ul",{children:[t("li",{className:"fragment",children:[e("a",{href:"https://pagespeed.web.dev/",target:"_blank",rel:"noreferrer",children:"web vital"})," ","or Chrome DevTools 'Lighthouse'"]}),e("li",{className:"fragment",children:"will analyze your performance on mobile and desktop"}),e("li",{className:"fragment",children:"reveals painpoints you can work on"})]}),e("aside",{className:"notes",children:"do a short live session, show some insights"})]})]})),Ze=o=>t(d,c(l({},o),{subtitle:e("blockquote",{children:'"Just like React but for mobile devices "'}),children:[t(r,{children:[e("h2",{children:"Basics"}),e("p",{className:"fragment",children:"React Native is a framework for building mobile apps with React. It is based on React, and uses the same components, but with some changes to make it work on native platforms like Android and iOS."})]}),t(r,{children:[e("h2",{children:"Components"}),e("p",{className:"fragment",children:"Instead of using HTML tags, React Native uses components."}),e(n,{className:"fragment",children:"<div></div> -> <View></View>"}),e(n,{className:"fragment",children:"<p></p> -> <Text></Text>"})]}),t(r,{children:[e("h2",{children:"Logic"}),e("p",{className:"fragment",children:"The logic can stay the same. We may need to adapt image uploads or other logic to use native components from React Native."}),e("p",{className:"fragment",children:"When we want to add a React Native application to an existing React application, we can use a mono-repo approach. A mono-repo contains the shared code aswell as the code for the native elements."})]}),t(r,{children:[e("h2",{children:"How to start"}),e("p",{className:"fragment",children:"We can simply add the imports for react native and add them to our repo and then restructure the code."}),e("p",{className:"fragment",children:"We could also use expo, which is a platform for building native apps more easily as it also includes approaches to directly test on iOS and Android Emulators and devices."})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://reactnative.dev/docs/environment-setup",target:"_blank",rel:"noreferrer",children:"React Native"})}),e("li",{children:e("a",{href:"https://docs.expo.dev/get-started/installation/",target:"_blank",rel:"noreferrer",children:"Expo"})})]})]}),e(r,{children:e("h2",{children:"\u{1F4AA} Exercise"})}),e(r,{children:e("h2",{children:"FIN \u{1F92A}"})})]})),et=`// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => {
  return <Button primary>Button</Button>;
};
`,tt=o=>{const i=({id:s,pixel:u})=>e(r,{dataAutoAnimate:!0,children:t("div",{style:{position:"relative"},children:[e("img",{src:"./slide-assets/atomic-design-example.png"}),e("div",{"data-id":s,style:{position:"absolute",background:"#191919",height:"100%",width:"100%",top:0,marginLeft:u}})]})});return t(d,c(l({},o),{children:[e(r,{children:e("h2",{children:"Atomic Design"})}),[207,390,572,755,979].map(s=>e(i,{id:"hi",pixel:s},s)),t(r,{children:[e("h2",{children:"Storybook"}),e("video",{autoPlay:!0,playsInline:!0,loop:!0,"data-autoplay":!0,children:e("source",{src:"https://storybook.js.org/cdb19b23da5e96c112ff3b8fded28a82/storybook-hero-video-optimized-lg.mp4",type:"video/mp4"})})]}),t(r,{children:[e("h2",{children:"Why you should use it"}),t("ul",{children:[e("li",{className:"fragment",children:"faster and easier development (isolation)"}),e("li",{className:"fragment",children:"better awareness about components"}),e("li",{className:"fragment",children:"easier to test edge cases"}),e("li",{className:"fragment",children:"better documentation"})]})]}),t(r,{children:[e("h2",{children:"Example"}),e(n,{highlightedLines:"5,13",children:et})]}),t(r,{children:[e("h2",{children:"Addons"}),e("img",{src:"./slide-assets/storybook-a11y-plugin.png"})]}),t(r,{children:[e("h2",{children:"Component library"}),e("img",{src:"./slide-assets/component-lib-approach.png"})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://storybook.js.org/docs/react/get-started/introduction",target:"_blank",rel:"noreferrer",children:"Storybook Docs"})}),e("li",{children:e("a",{href:"https://bradfrost.com/blog/post/atomic-web-design/",target:"_blank",rel:"noreferrer",children:"Atomic Design"})}),e("li",{children:e("a",{href:"https://bradfrost.com/blog/post/atomic-design-and-storybook/",target:"_blank",rel:"noreferrer",children:"Atomic Design & Storybook"})})]})]})]}))},rt=`test("loads and displays book list", async () => {
    render(<BookOverview />);
    expect(await screen.findByText("Hans")).toBeDefined();
});
`,nt=`screen.findByAltText();
screen.findByDisplayValue();
screen.findByLabelText();
screen.findByPlaceholderText();
screen.findByRole();
screen.findByTestId();
screen.findByText();
screen.findByTitle();
`,ot=`server.use(
    rest.get("/books", (req, res, ctx) => {
    return res(
        ctx.json([{ id: 1 })
    )})
);
`,it=`server.use(
    rest.get("/books", (req, res, ctx) => {
        return res(ctx.status(500));
    })
);
`,st="yarn add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom",at="yarn add -D ts-jest @types/jest @types/testing-library__react @types/testing-library__jest-dom",lt=`//jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};`,ct=`// package.json
...
"scripts": {
  ...
  "test": "jest"
}
...`,dt=o=>t(d,c(l({},o),{children:[t(r,{children:[e("h2",{children:"Ways of testing"}),t("ul",{children:[e("li",{className:"fragment",children:"Unit Tests"}),e("li",{className:"fragment",children:"e2e Tests (Running the complete app)"}),e("li",{className:"fragment",children:"Component Tests (Rendering components)"})]}),e("aside",{className:"notes",children:"We only want to look at rendering & testing the components, since unit and e2e tests are not react specific."})]}),t(r,{children:[e("h2",{children:"React Testing Library"}),t("p",{children:["A set of helpers to test React ",e("strong",{children:"components"}),", without relying on implementation details."]})]}),t(r,{children:[e("h2",{children:"Example"}),e(n,{className:"fragment",children:rt})]}),t(r,{children:[e("h2",{children:"Helper functions"}),e(n,{className:"fragment",children:nt})]}),t(r,{children:[e("h2",{children:"API Mocking with MSW"}),e(n,{className:"fragment",children:ot}),e(n,{className:"fragment",children:it})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://reactjs.org/docs/testing.html",target:"_blank",rel:"noreferrer",children:"React Docs"})}),e("li",{children:e("a",{href:"https://testing-library.com/docs/react-testing-library/intro",target:"_blank",rel:"noreferrer",children:"React Testing Library"})})]})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("p",{children:"Setup for testing"}),e(n,{language:"bash",children:st}),e(n,{language:"bash",children:at})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("p",{children:"Create / modify files"}),e(n,{language:"bash",children:lt}),e(n,{language:"bash",children:ct})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Implement test that verifies isCheap-badge logic"}),t("ul",{children:[e("li",{children:'show "cheap" on price < 30'}),e("li",{children:'show "expensive" on price > 30'})]}),e("li",{children:"If you're done, feel free to implement further tests."})]})]})]}));const ht={plugins:[S],slideNumber:!0,history:!0},ut=o=>(p.exports.useEffect(()=>{new C(ht).initialize()},[]),e("div",{className:"reveal",children:e("div",{className:"slides",children:o.children})})),mt=()=>{const o=[{title:"Comparison of Frameworks",component:V},{title:"JSX & TSX",component:Ue},{title:"Components & Styling",component:ae},{title:"Conditional Rendering",component:ge},{title:"Hooks & Databinding",component:Pe},{title:"Context",component:ve},{title:"Routing",component:_},{title:"Forms",component:Ie},{title:"Testing",component:dt},{title:"Atomic Design & Storybook",component:tt},{title:"Improving Performance",component:Ke},{title:"React Native",component:Ze}];return t(ut,{children:[e(O,{}),e(U,{chapter:o}),o.map((i,s)=>e(i.component,{title:i.title,index:s+1},s))]})};B.render(e(A.StrictMode,{children:e(mt,{})}),document.getElementById("root"));
