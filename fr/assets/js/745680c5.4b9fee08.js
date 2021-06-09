(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4054],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6714:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={title:"useRecoilValue(state)",sidebar_label:"useRecoilValue()"},i={unversionedId:"api-reference/core/useRecoilValue",id:"api-reference/core/useRecoilValue",isDocsHomePage:!1,title:"useRecoilValue(state)",description:"Renvoie la valeur de l'\xe9tat Recoil donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValue.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilValue",permalink:"/fr/docs/api-reference/core/useRecoilValue",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValue.md",version:"current",sidebar_label:"useRecoilValue()",frontMatter:{title:"useRecoilValue(state)",sidebar_label:"useRecoilValue()"},sidebar:"docs",previous:{title:"useRecoilState(state)",permalink:"/fr/docs/api-reference/core/useRecoilState"},next:{title:"useSetRecoilState(state)",permalink:"/fr/docs/api-reference/core/useSetRecoilState"}},c=[{value:"Exemple",id:"exemple",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Renvoie la valeur de l'\xe9tat Recoil donn\xe9."),(0,o.kt)("p",null,"Ce hook abonnera implicitement le composant \xe0 l'\xe9tat donn\xe9."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilValue<T>(state: RecoilValue<T>): T;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": un ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atome"))," ou ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"s\xe9lecteur")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"C'est le hook recommand\xe9 \xe0 utiliser lorsqu'un composant a l'intention de lire l'\xe9tat sans y \xe9crire, car ce hook fonctionne \xe0 la fois avec ",(0,o.kt)("strong",{parentName:"p"},"l'\xe9tat en lecture seule")," et ",(0,o.kt)("strong",{parentName:"p"},"l'\xe9tat inscriptible"),". Les atomes sont des \xe9tats inscriptibles tandis que les s\xe9lecteurs peuvent \xeatre en lecture seule ou en \xe9criture. Voir ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"selector()"))," pour plus d'informations."),(0,o.kt)("p",null,"L'utilisation de ce hook dans un composant React abonnera le composant \xe0 restituer lorsque l'\xe9tat est mis \xe0 jour. Ce hook peut d\xe9clencher si l'\xe9tat a une erreur ou est en attente de r\xe9solution asynchrone. Veuillez consulter ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"ce guide"),"."),(0,o.kt)("h3",{id:"exemple"},"Exemple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilValue} from 'recoil';\n\nconst namesState = atom({\n  key: 'namesState',\n  default: ['', 'Ella', 'Chris', '', 'Paul'],\n});\n\nconst filteredNamesState = selector({\n  key: 'filteredNamesState',\n  get: ({get}) => get(namesState).filter((str) => str !== ''),\n});\n\nfunction NameDisplay() {\n  const names = useRecoilValue(namesState);\n  const filteredNames = useRecoilValue(filteredNamesState);\n\n  return (\n    <>\n      Original names: {names.join(',')}\n      <br />\n      Filtered names: {filteredNames.join(',')}\n    </>\n  );\n}\n")))}s.isMDXComponent=!0}}]);