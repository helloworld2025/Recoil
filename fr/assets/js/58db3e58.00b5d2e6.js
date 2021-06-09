(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3843],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2035:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={title:"useSetRecoilState(state)",sidebar_label:"useSetRecoilState()"},c={unversionedId:"api-reference/core/useSetRecoilState",id:"api-reference/core/useSetRecoilState",isDocsHomePage:!1,title:"useSetRecoilState(state)",description:"Renvoie une fonction de r\xe9glage pour mettre \xe0 jour la valeur de l'\xe9tat Recoil inscriptible.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useSetRecoilState.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useSetRecoilState",permalink:"/fr/docs/api-reference/core/useSetRecoilState",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useSetRecoilState.md",version:"current",sidebar_label:"useSetRecoilState()",frontMatter:{title:"useSetRecoilState(state)",sidebar_label:"useSetRecoilState()"},sidebar:"docs",previous:{title:"useRecoilValue(state)",permalink:"/fr/docs/api-reference/core/useRecoilValue"},next:{title:"useResetRecoilState(state)",permalink:"/fr/docs/api-reference/core/useResetRecoilState"}},l=[{value:"Exemple",id:"exemple",children:[]}],u={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Renvoie une fonction de r\xe9glage pour mettre \xe0 jour la valeur de l'\xe9tat Recoil inscriptible."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useSetRecoilState<T>(state: RecoilState<T>): SetterOrUpdater<T>;\n\ntype SetterOrUpdater<T> = (T | (T => T)) => void;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": \xe9tat Recoil inscriptible (un ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atome"))," ou un ",(0,o.kt)("em",{parentName:"li"},"writeable")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"s\xe9lecteur")),")")),(0,o.kt)("p",null,"Renvoie une fonction setter qui peut \xeatre utilis\xe9e de mani\xe8re asynchrone pour changer l'\xe9tat. Le setter peut recevoir une nouvelle valeur ou une fonction de mise \xe0 jour qui re\xe7oit la valeur pr\xe9c\xe9dente comme argument."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Il s'agit du hook recommand\xe9 \xe0 utiliser lorsqu'un composant a l'intention d'\xe9crire dans l'\xe9tat sans le lire. Si un composant utilisait le hook ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilState"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilState()"))," pour obtenir le setter, il s'abonnerait \xe9galement aux mises \xe0 jour et effectuerait un nouveau rendu lorsque l'atome ou le s\xe9lecteur serait mis \xe0 jour. L'utilisation de ",(0,o.kt)("inlineCode",{parentName:"p"},"useSetRecoilState()")," permet \xe0 un composant de d\xe9finir la valeur sans souscrire au composant pour le restituer lorsque la valeur change."),(0,o.kt)("h3",{id:"exemple"},"Exemple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useSetRecoilState} from 'recoil';\n\nconst namesState = atom({\n  key: 'namesState',\n  default: ['Ella', 'Chris', 'Paul'],\n});\n\nfunction FormContent({setNamesState}) {\n  const [name, setName] = useState('');\n  \n  return (\n    <>\n      <input type=\"text\" value={name} onChange={(e) => setName(e.target.value)} />\n      <button onClick={() => setNamesState(names => [...names, name])}>Ajouter un nom</button>\n    </>\n)}\n\n// Ce composant sera rendu une fois\nfunction Form() {\n  const setNamesState = useSetRecoilState(namesState);\n  \n  return <FormContent setNamesState={setNamesState} />;\n}\n")))}s.isMDXComponent=!0}}]);