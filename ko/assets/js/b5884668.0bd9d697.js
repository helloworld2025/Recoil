(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[2189],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||c;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8406:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),a={title:"useResetRecoilState(state)"},i={unversionedId:"api-reference/core/useResetRecoilState",id:"api-reference/core/useResetRecoilState",isDocsHomePage:!1,title:"useResetRecoilState(state)",description:"\uc774 hook \ube44\ub3d9\uae30 selector\uc758 \uac12\uc744 \uc77d\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 hook\uc740 \uc554\ubb35\uc801\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ub3c5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useResetRecoilState.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useResetRecoilState",permalink:"/ko/docs/api-reference/core/useResetRecoilState",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useResetRecoilState.md",version:"current",frontMatter:{title:"useResetRecoilState(state)"},sidebar:"docs",previous:{title:"useSetRecoilState(state)",permalink:"/ko/docs/api-reference/core/useSetRecoilState"},next:{title:"useRecoilStateLoadable(state)",permalink:"/ko/docs/api-reference/core/useRecoilStateLoadable"}},l=[{value:"Example",id:"example",children:[]}],s={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\uc774 hook \ube44\ub3d9\uae30 selector\uc758 \uac12\uc744 \uc77d\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 hook\uc740 \uc554\ubb35\uc801\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ub3c5\ud569\ub2c8\ub2e4."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"useResetRecoilState()"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c \ub9ac\ub80c\ub354\ub9c1\uc744 \uc704\ud574 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ub3c5\ud558\uc9c0 \uc54a\uace0\ub3c4 \uc0c1\ud0dc\ub97c \uae30\ubcf8\uac12\uc73c\ub85c \ub9ac\uc14b\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,c.kt)("hr",null),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"function useResetRecoilState<T>(state: RecoilState<T>): () => void;\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"state"),": \uc4f0\uae30 \uac00\ub2a5\ud55c Recoil \uc0c1\ud0dc")),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'import {todoListState} from "../atoms/todoListState";\n\nconst TodoResetButton = () => {\n  const resetList = useResetRecoilState(todoListState);\n  return <button onClick={resetList}>Reset</button>;\n};\n')))}u.isMDXComponent=!0}}]);