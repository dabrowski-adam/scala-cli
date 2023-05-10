"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3633],{9705:function(t,e,a){a.d(e,{m:function(){return s},v:function(){return l}});var i=a(7294),n=a(2004);function l(t){var e=t.children;return i.createElement("div",{className:"runnable-command"},e)}function s(t){var e=t.url;return i.createElement(n.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:e})}},9302:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var i=a(3117),n=a(102),l=(a(7294),a(3905)),s=a(9705),o=["components"],r={title:"Scala Scripts with instant startup",sidebar_position:7},c=void 0,p={unversionedId:"cookbooks/instant-startup-scala-scripts",id:"cookbooks/instant-startup-scala-scripts",title:"Scala Scripts with instant startup",description:"Scala CLI allows to easly compile and run Scala Scripts.",source:"@site/docs/cookbooks/instant-startup-scala-scripts.md",sourceDirName:"cookbooks",slug:"/cookbooks/instant-startup-scala-scripts",permalink:"/docs/cookbooks/instant-startup-scala-scripts",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/instant-startup-scala-scripts.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Scala Scripts with instant startup",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Using Scala CLI to run Scala Scripts",permalink:"/docs/cookbooks/scala-scripts"},next:{title:"Sharing and testing code with GitHub gists",permalink:"/docs/cookbooks/gists"}},u={},d=[{value:"Using Scala Native",id:"using-scala-native",level:2},{value:"Optimization options",id:"optimization-options",level:2},{value:"Additional considerations",id:"additional-considerations",level:2}],m={toc:d};function h(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,i.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Scala CLI allows to easly compile and run Scala Scripts.\nIt also allows for straightforward compilation with Scala Native.\nScala Native is an ahead-of-time compiler to native binary allowing\nfor instant startup times, meaning that along with scala-cli, it should\nperfectly suit the needs of a fast scripting tool."),(0,l.kt)("h2",{id:"using-scala-native"},"Using Scala Native"),(0,l.kt)("p",null,"As an example, let\u2019s build a script printing files from\na directory with sizes bigger than a passed value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=size-higher-than.scala",title:"size-higher-than.scala"},"//> using scala 3.1.1\n//> using dep com.lihaoyi::os-lib::0.8.1\n \n@main\ndef sizeHigherThan(dir: String, minSizeMB: Int) =\n  val wd = os.pwd / dir\n  val files = os.walk.attrs(wd).collect{\n    case (p, attrs) if attrs.size > minSizeMB * 10E6 => p\n  }\n  files.foreach(println(_))\n")),(0,l.kt)("p",null,"Running this for a ",(0,l.kt)("inlineCode",{parentName:"p"},"dir")," directory and 20 MB as a lower limit with\n",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli size-higher-than.scala \u2013 dir 20")," can give us for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:"title=dir/large-file.txt",title:"dir/large-file.txt"},"(>20MB of text)\n")),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli size-higher-than.scala -- dir 20\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Compiling project (Scala 3.1.1, JVM)\nCompiled project (Scala 3.1.1, JVM)\n/Users/user/Documents/workspace/dir/large-file.txt\n"))),(0,l.kt)("p",null,"A keen eye will notice that we have not yet compiled to Scala Native. We are still running on the JVM!\nWe can fix that by either running with a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u2014-native")," option, or,\nin this case, by including an additional using directive:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile title=size-higher-than.scala",compile:!0,title:"size-higher-than.scala"},"//> using scala 3.1.1\n//> using dep com.lihaoyi::os-lib::0.8.1\n//> using platform scala-native\n \n@main\ndef sizeHigherThan(dir: String, minSizeMB: Int) =\n  val wd = os.pwd / dir\n  val files = os.walk.attrs(wd).collect{\n    case (p, attrs) if attrs.size > minSizeMB * 10E6 => p\n  }\n  files.foreach(println(_))\n")),(0,l.kt)("p",null,"After rerunning, you may notice that while the initial compilation took a little longer,\nsubsequent runs will severely cut on the startup time compared to the JVM."),(0,l.kt)("h2",{id:"optimization-options"},"Optimization options"),(0,l.kt)("p",null,"We can make the runtime itself even faster, using various Scala Native optimization options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"debug")," - what was used by default up to this point, fast compilation with a slower runtime "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"release-fast")," - moderate compilation time with a faster runtime"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"release-full")," - slow compilation time with the fastest runtime")),(0,l.kt)("p",null,"We pass these using a ",(0,l.kt)("inlineCode",{parentName:"p"},"-\u2013native-mode")," scala-cli option or, like previously, by adding a using directive:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile title=size-higher-than.scala",compile:!0,title:"size-higher-than.scala"},"//> using scala 3.1.1\n//> using dep com.lihaoyi::os-lib::0.8.1\n//> using platform scala-native\n//> using nativeMode release-full\n \n@main\ndef sizeHigherThan(dir: String, minSizeMB: Int) =\n  val wd = os.pwd / dir\n  val files = os.walk.attrs(wd).collect{\n    case (p, attrs) if attrs.size > minSizeMB * 10E6 => p\n  }\n  files.foreach(println(_))\n")),(0,l.kt)("p",null,"We can also package this script into a separate binary with the ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," command,\nuseful especially on Windows where typically shebangs won\u2019t work:"),(0,l.kt)("h2",{id:"additional-considerations"},"Additional considerations"),(0,l.kt)("p",null,"Some things to look out for when working with Scala Native:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dependencies - libraries have to be published separately for Scala Native. Notice the ",(0,l.kt)("inlineCode",{parentName:"li"},"org::project::version")," double colon syntax used for os-lib - it basically hides ",(0,l.kt)("inlineCode",{parentName:"li"},"org::project_native[Scala Native binary version]:version")," underneath. Fortunately, many libraries are already available for Scala Native. However, Java dependencies will not work altogether."),(0,l.kt)("li",{parentName:"ul"},"some ",(0,l.kt)("a",{parentName:"li",href:"https://scala-native.readthedocs.io/en/stable/user/lang.html"},"differences")," exist when compared to Scala on the JVM.")))}h.isMDXComponent=!0}}]);