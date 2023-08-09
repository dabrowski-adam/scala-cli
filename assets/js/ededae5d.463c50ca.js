"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6705],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1994:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],p={title:"Proxy authentication",sidebar_position:9},l=void 0,c={unversionedId:"reference/proxy-authentication",id:"reference/proxy-authentication",title:"Proxy authentication",description:"Scala CLI can download dependencies via HTTP proxies. Proxies can be setup in several ways:",source:"@site/docs/reference/proxy-authentication.md",sourceDirName:"reference",slug:"/reference/proxy-authentication",permalink:"/docs/reference/proxy-authentication",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/reference/proxy-authentication.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Proxy authentication",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Password options \u26a1\ufe0f",permalink:"/docs/reference/password-options"},next:{title:"Interaction with Bloop server",permalink:"/docs/reference/bloop"}},s={},u=[{value:"Maven configuration file",id:"maven-configuration-file",level:2},{value:"Command-line options",id:"command-line-options",level:2},{value:"Coursier or Scala CLI configuration files",id:"coursier-or-scala-cli-configuration-files",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scala CLI can download dependencies via HTTP proxies. Proxies can be setup in several ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"via the Maven configuration file (recommended for now)"),(0,i.kt)("li",{parentName:"ul"},"via command-line options"),(0,i.kt)("li",{parentName:"ul"},"via Scala CLI or coursier configuration files (soon)")),(0,i.kt)("h2",{id:"maven-configuration-file"},"Maven configuration file"),(0,i.kt)("p",null,"This file lives at ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.m2/settings.xml")),(0,i.kt)("p",null,"Example configuration file, without authentication:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<settings>\n  <proxies>\n    <proxy>\n      <id>test-proxy</id>\n      <protocol>http</protocol>\n      <host>proxy.corp.com</host>\n      <port>8080</port>\n    </proxy>\n  </proxies>\n</settings>\n")),(0,i.kt)("p",null,"Example configuration file, with authentication:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<settings>\n  <proxies>\n    <proxy>\n      <id>test-proxy</id>\n      <protocol>http</protocol>\n      <host>proxy.corp.com</host>\n      <port>8080</port>\n      <username>alex</username>\n      <password>1234</password>\n    </proxy>\n  </proxies>\n</settings>\n")),(0,i.kt)("p",null,"The value in ",(0,i.kt)("inlineCode",{parentName:"p"},"<protocol>\u2026</protocol>")," is assumed to be the protocol of the proxy itself\n(can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"https"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," is assumed by default not to inadvertently leak\nproxy credentials)."),(0,i.kt)("p",null,"Such a proxy is used for both http and https by Scala CLI."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/coursier/coursier"},"coursier")," command-line and library also pick those credentials, since version ",(0,i.kt)("inlineCode",{parentName:"p"},"2.1.0-M6-26-gcec901e9a")," (2022/05/31)."),(0,i.kt)("h2",{id:"command-line-options"},"Command-line options"),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ scala-cli \\\n    -Dhttp.proxyProtocol=http -Dhttp.proxyHost=proxy.corp.com -Dhttp.proxyPort=8080 \\\n    -Dhttp.proxyUsername=alex -Dhttp.proxyPassword=1234 \\\n    -Dhttps.proxyProtocol=http -Dhttps.proxyHost=proxy.corp.com -Dhttps.proxyPort=8080 \\\n    -Dhttps.proxyUsername=alex -Dhttps.proxyPassword=1234 \\\n    <(echo 'println(\"Hello from Scala CLI\")')\n")),(0,i.kt)("h2",{id:"coursier-or-scala-cli-configuration-files"},"Coursier or Scala CLI configuration files"),(0,i.kt)("p",null,"Support to be added soon"))}d.isMDXComponent=!0}}]);