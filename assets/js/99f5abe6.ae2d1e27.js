"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9119],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(g,s(s({ref:t},p),{},{components:n})):i.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),s=["components"],o={title:"Using directives",sidebar_position:5},l=void 0,c={unversionedId:"guides/using-directives",id:"guides/using-directives",title:"Using directives",description:"The using directives mechanism lets you define configuration information within .scala source code files,",source:"@site/docs/guides/using-directives.md",sourceDirName:"guides",slug:"/guides/using-directives",permalink:"/docs/guides/using-directives",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/using-directives.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Using directives",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Updating dependencies",permalink:"/docs/guides/update-dependencies"},next:{title:"IDE support",permalink:"/docs/guides/ide"}},p={},d=[{value:"Deprecated syntax",id:"deprecated-syntax",level:2},{value:"Semantics",id:"semantics",level:2},{value:"<code>using</code> directives in the Scala CLI",id:"using-directives-in-the-scala-cli",level:2},{value:"Explicit handling of paths in using directives",id:"explicit-handling-of-paths-in-using-directives",level:3},{value:"How to comment out using directives?",id:"how-to-comment-out-using-directives",level:2},{value:"Directives with a test scope equivalent",id:"directives-with-a-test-scope-equivalent",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives mechanism lets you define configuration information within ",(0,r.kt)("inlineCode",{parentName:"p"},".scala")," source code files,\neliminating the need for build tools to define a dedicated configuration syntax."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives are basically key-value pairs that let you provide multiple values to a single key. These directives\nneed to be put in comments with a special syntax. For instance, this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"//> using foo bar baz\n")),(0,r.kt)("h2",{id:"deprecated-syntax"},"Deprecated syntax"),(0,r.kt)("p",null,"As a part of ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.x")," series we experimented with different syntaxes for using directives. Based on feedback and\ndiscussions with the Scala compiler team, we decided to remove ",(0,r.kt)("inlineCode",{parentName:"p"},"@using")," (using annotations), ",(0,r.kt)("inlineCode",{parentName:"p"},"// using")," (using within\nplain comment) and ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," code directives. Those syntaxes will keep working in the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1.x")," series and will be ignored starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.x"),"."),(0,r.kt)("h2",{id:"semantics"},"Semantics"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives can be only declared ",(0,r.kt)("strong",{parentName:"p"},"before any other Scala code"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"//> using scala 2.13\n//> using platform scala-js\n//> using options -Xasync\n\n// package statements, import statements and other code follows ...\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives contribute settings to the whole compilation scope where a given ",(0,r.kt)("inlineCode",{parentName:"p"},".scala")," file is defined.\nThis means that a library or compiler option defined in one file applies to the whole application or test (depending on\nwhether the source file is a test, or not)."),(0,r.kt)("p",null,"The only exceptions are ",(0,r.kt)("inlineCode",{parentName:"p"},"using target")," directives, which only apply to the given file.\n",(0,r.kt)("inlineCode",{parentName:"p"},"using target")," is a marker to assign a given file to a given target (e.g., test or main sources)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We believe that syntax similar to ",(0,r.kt)("inlineCode",{parentName:"strong"},"using")," directives should become a part of Scala in the future and will already be included within the Scala runner itself")),(0,r.kt)("h2",{id:"using-directives-in-the-scala-cli"},(0,r.kt)("inlineCode",{parentName:"h2"},"using")," directives in the Scala CLI"),(0,r.kt)("p",null,"Below is a list of the most important ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives that Scala CLI supports. The full list can be found in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/directives"},"Reference section of this documentation"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using scala <scala-version>")," - defines version of Scala used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using dep org::name:version")," - defines dependency to a given\nlibrary ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/dependencies"},"more in dedicated guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using dep org:name:version"),"  - defines dependency to a given ",(0,r.kt)("strong",{parentName:"li"},"java")," library, note the ",(0,r.kt)("inlineCode",{parentName:"li"},":")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"::")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using dep org::name:version,url=url")," - defines dependency to a given library with a fallback to its jar url"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using resourceDir dir")," - marks directory as source of resources. Resources accessible at runtime and packaged\ntogether with compiled code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using javaOpt opt")," - use given java options when running application or tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using target.scope test")," used to marked or unmarked given source as test"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//> using testFramework framework")," - select test framework to use")),(0,r.kt)("p",null,"There are several reasons that we believe ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives are a good solution:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One of the main Scala CLI use cases is prototyping, and the ability to ship one or more source code files with a\ncomplete configuration is a game-changer for this use case."),(0,r.kt)("li",{parentName:"ul"},"Defining dependencies and other settings is common in Ammonite scripts as well."),(0,r.kt)("li",{parentName:"ul"},"From a teaching perspective, the ability to provide pre-configured pieces of code that fit into one slide is also\nbeneficial."),(0,r.kt)("li",{parentName:"ul"},"Having configuration close to the code is beneficial, since often \u2014 especially in small programs \u2014 the given\ndependencies are only used within one source file.")),(0,r.kt)("p",null,"We acknowledge that configuration distributed across many source files may be hard to maintain in the long term.\nTherefore, in the near feature we will introduce a set of lints to ensure that above a given project size or complexity,\nall configuration details will be centralized."),(0,r.kt)("p",null,"How can configuration that\u2019s contained in source files be centralized?\n",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives can be placed in any ",(0,r.kt)("inlineCode",{parentName:"p"},".scala")," file, so it\u2019s possible to create a ",(0,r.kt)("inlineCode",{parentName:"p"},".scala")," file that contains only\nconfiguration information.\nTherefore, when your project needs to centralize its configuration, we recommend creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"project.scala")," file, and\nplacing the configuration there.\nWe plan to add ways to Scala CLI to migrate these settings into a centralized location with one command or click."),(0,r.kt)("p",null,"We are aware that ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives may be a controversial topic, so we\u2019ve created\na ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VirtusLab/scala-cli/discussions/categories/using-directives-and-cmd-configuration-options"},"dedicated space for discussing ",(0,r.kt)("inlineCode",{parentName:"a"},"using")," directives"),"."),(0,r.kt)("h3",{id:"explicit-handling-of-paths-in-using-directives"},"Explicit handling of paths in using directives"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"${.}")," pattern in directive values will be replaced by the parent directory of the file containing the\ndirective. This makes it possible for example to generate coverage output files relative to the source file location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"//> using options -coverage-out:${.}\n")),(0,r.kt)("p",null,"However, if you want to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"${.}")," pattern in the directive value without it being replaced, you can precede it\nwith two dollar signs (",(0,r.kt)("inlineCode",{parentName:"p"},"$$"),"), like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"//> using options -coverage-out:$${.}\n")),(0,r.kt)("h2",{id:"how-to-comment-out-using-directives"},"How to comment out using directives?"),(0,r.kt)("p",null,"Using directives are part of the code so similarly, developers should be able to comment them out."),(0,r.kt)("p",null,"Commenting out comment-based directives does not cause any problems. Below, some examples how to do it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},'// //> using dep "no::lib:123"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},'// // using dep "no::lib:123"\n')),(0,r.kt)("h2",{id:"directives-with-a-test-scope-equivalent"},"Directives with a test scope equivalent"),(0,r.kt)("p",null,"Some directives have a test scope equivalent. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"using dep")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"using test.dep"),", which allows to declare\ndependencies that are only used in tests outside test-specific sources."),(0,r.kt)("p",null,"For example, this way you can declare the dependency to ",(0,r.kt)("inlineCode",{parentName:"p"},"munit")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"project.scala")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=project.scala",title:"project.scala"},"//> using test.dep org.scalameta::munit::0.7.29\n")),(0,r.kt)("p",null,"The dependency will then only be available in test sources.\nIt's effectively an equivalent to just ",(0,r.kt)("inlineCode",{parentName:"p"},"using dep")," inside of a test source (except you can define it anywhere):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=src/test/scala/Tests.scala",title:"src/test/scala/Tests.scala"},"//> using dep org.scalameta::munit::0.7.29\n")),(0,r.kt)("p",null,"Directives with a test scope equivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},"//> using test.dep org.scalameta::munit::0.7.29\n//> using test.jar path/to/jar\n//> using test.javaOpt -Dfoo=bar\n//> using test.javacOpt source 1.8 target 1.8\n//> using test.javaProp foo1=bar1\n//> using test.option -Xfatal-warnings\n//> using test.resourceDir testResources\n//> using test.toolkit latest\n")))}m.isMDXComponent=!0}}]);