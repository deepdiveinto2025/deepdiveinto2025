/*! For license information please see components-Pages-_index-story.a5c1b022.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkadeepdiveinto2025=self.webpackChunkadeepdiveinto2025||[]).push([[4076],{"./node_modules/lucide-react/dist/esm/icons/list.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>List});const List=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]])},"./node_modules/lucide-react/dist/esm/icons/users-round.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>UsersRound});const UsersRound=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]])},"./src/components/Pages/_index/story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>story});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),arrow_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/arrow-right.js"),arrow_left=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/arrow-left.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/ThirdParty/ShadCn/Button/index.ts"),Carousel=__webpack_require__("./src/components/ThirdParty/ShadCn/Carousel/index.ts"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),use_content=__webpack_require__("./src/hooks/use-content.tsx"),chapterImages={1:"https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",2:"https://images.pexels.com/photos/1146358/pexels-photo-1146358.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",3:"https://images.pexels.com/photos/5668430/pexels-photo-5668430.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",4:"https://images.pexels.com/photos/3743542/pexels-photo-3743542.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",5:"https://images.pexels.com/photo/american-flag-on-top-of-white-house-1055400/",6:"https://images.pexels.com/photo/flags-of-different-countries-704772/",7:"https://images.pexels.com/photo/silhouette-of-man-standing-in-front-of-monitor-218717/",8:"https://images.pexels.com/photo/people-having-business-meeting-1181406/",9:"https://images.pexels.com/photo/person-holding-aid-kit-1169754/",10:"https://images.pexels.com/photo/green-corn-field-under-blue-sky-158827/",11:"https://images.pexels.com/photo/people-sitting-in-a-classroom-1181395/",12:"https://images.pexels.com/photo/solar-panel-array-356036/",13:"https://images.pexels.com/photo/forest-trees-158607/",14:"https://images.pexels.com/photo/doctor-holding-stethoscope-218297/",15:"https://images.pexels.com/photo/white-and-brown-concrete-building-106399/",16:"https://images.pexels.com/photo/mountain-during-sunset-167699/",17:"https://images.pexels.com/photo/scales-of-justice-607712/",18:"https://images.pexels.com/photo/person-holding-black-pen-1109541/",19:"https://images.pexels.com/photo/road-traffic-155144/",20:"https://images.pexels.com/photo/soldier-in-uniform-1053764/",21:"https://images.pexels.com/photo/people-working-in-office-1181400/",22:"https://images.pexels.com/photo/close-up-photo-of-u-s-dollar-banknotes-545064/",23:"https://images.pexels.com/photo/airplane-flying-above-city-buildings-210182/",24:"https://images.pexels.com/photo/low-angle-photo-of-high-rise-building-210598/",25:"https://images.pexels.com/photo/person-holding-open-signage-3345876/",26:"https://images.pexels.com/photo/container-van-in-terminal-1427541/",27:"https://images.pexels.com/photo/close-up-photo-of-pen-1109543/",28:"https://images.pexels.com/photo/satellite-dish-under-blue-sky-159451/",29:"https://images.pexels.com/photo/person-holding-voting-signage-1550337/",30:"https://images.pexels.com/photo/people-shopping-in-a-mall-264507/"},ExploreChaptersSection=function(){var _a=(0,react.useState)(),carouselApi=_a[0],setCarouselApi=_a[1],_b=(0,react.useState)(!1),canScrollPrev=_b[0],setCanScrollPrev=_b[1],_c=(0,react.useState)(!1),canScrollNext=_c[0],setCanScrollNext=_c[1],project2025=(0,use_content.H)().project2025,chapters=null==project2025?void 0:project2025.sections.map((function(section){return section.chapters})).flat(1/0);return console.log(chapters.length),(0,react.useEffect)((function(){if(carouselApi){var updateSelection=function(){setCanScrollPrev(carouselApi.canScrollPrev()),setCanScrollNext(carouselApi.canScrollNext())};return updateSelection(),carouselApi.on("select",updateSelection),function(){carouselApi.off("select",updateSelection)}}}),[carouselApi]),(0,jsx_runtime.jsxs)("section",{className:"py-32",children:[(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsxs)("div",{className:"mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{className:"mb-6 text-xs font-medium uppercase tracking-wider",children:"Quick Links"}),(0,jsx_runtime.jsx)("h2",{className:"mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6",children:"Chapters"}),(0,jsx_runtime.jsxs)(dist.N_,{to:"/contribute",className:"group flex items-center text-xs font-medium md:text-base lg:text-lg",children:["Contribute to the Analysis"," ",(0,jsx_runtime.jsx)(arrow_right.A,{className:"ml-2 size-4 transition-transform group-hover:translate-x-1"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-8 flex shrink-0 items-center justify-center gap-2",children:[(0,jsx_runtime.jsx)(Button.$,{size:"icon",variant:"outline",onClick:function(){null==carouselApi||carouselApi.scrollPrev()},disabled:!canScrollPrev,className:"disabled:pointer-events-auto",children:(0,jsx_runtime.jsx)(arrow_left.A,{className:"size-5"})}),(0,jsx_runtime.jsx)(Button.$,{size:"icon",variant:"outline",onClick:function(){null==carouselApi||carouselApi.scrollNext()},disabled:!canScrollNext,className:"disabled:pointer-events-auto",children:(0,jsx_runtime.jsx)(arrow_right.A,{className:"size-5"})})]})]})}),(0,jsx_runtime.jsx)("div",{className:"w-full overflow-hidden",children:(0,jsx_runtime.jsx)(Carousel.FN,{setApi:setCarouselApi,opts:{breakpoints:{"(max-width: 768px)":{dragFree:!0}}},children:(0,jsx_runtime.jsx)(Carousel.Wk,{className:"max-w-xs max-h-full ml-[calc(1rem-20px)] mr-[calc(1rem)] 2xl:ml-[calc(50vw-700px+1rem-20px)] 2xl:mr-[calc(50vw-700px+1rem)]",children:chapters.map((function(chapter){return(0,jsx_runtime.jsx)(Carousel.A7,{className:"pl-[20px] md:max-w-[452px]",children:(0,jsx_runtime.jsxs)(dist.N_,{to:chapter.url,className:"group flex flex-col justify-between",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:"flex aspect-[3/2] text-clip rounded-xl",children:(0,jsx_runtime.jsx)("div",{className:"flex-1",children:(0,jsx_runtime.jsx)("div",{className:"relative size-full origin-bottom transition duration-300 group-hover:scale-105",children:(0,jsx_runtime.jsx)("img",{src:chapterImages[chapter.chapterIdx],alt:chapter.title,className:"size-full object-cover object-center"})})})})}),(0,jsx_runtime.jsxs)("div",{className:"mb-2 line-clamp-1 ellipsis pt-4 text-md font-medium md:mb-3 md:pt-4 md:text-lg lg:pt-4 lg:text-xl",children:[chapter.chapterIdx,". ",chapter.title]}),(0,jsx_runtime.jsx)("div",{className:"mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9",children:chapter.description}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center text-sm self-end",children:["Read more"," ",(0,jsx_runtime.jsx)(arrow_right.A,{className:"ml-2 size-5 transition-transform group-hover:translate-x-1"})]})]})},chapter.chapterId)}))})})})]})},check=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js"),RetooledGoalsSection=function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"grid gap-6 md:grid-cols-2 py-24",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col justify-start gap-10 rounded-2xl border border-secondary-lighter p-5 lg:p-10",children:[(0,jsx_runtime.jsx)("p",{className:"text-sm text-muted-foreground",children:"OUR MISSION"}),(0,jsx_runtime.jsx)("p",{className:"text-lg font-medium",children:"To provide a clear and accessible analysis that identifies risks, simplifies complexity, and empowers communities to respond to potential impacts of policy."})]}),(0,jsx_runtime.jsx)("div",{className:"border flex flex-col justify-between bg-transparent gap-10 rounded-2xl border-secondary-lighter p-5 lg:p-10",children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsxs)("li",{className:"my-2",children:[(0,jsx_runtime.jsxs)("h3",{className:"flex gap-2 text-base sm:text-lg font-semibold",children:[(0,jsx_runtime.jsx)(check.A,{className:"stroke-primary-dark"})," Identify Risks and Implications"]}),(0,jsx_runtime.jsx)("p",{className:"text-muted-foreground text-sm pl-8",children:"Each chapter is carefully analyzed to uncover potential dangers, biases, and impacts on different communities. By identifying risks, we aim to empower stakeholders with actionable insights."})]}),(0,jsx_runtime.jsxs)("li",{className:"my-2",children:[(0,jsx_runtime.jsxs)("h3",{className:"flex gap-2 text-base sm:text-lg font-semibold",children:[(0,jsx_runtime.jsx)(check.A,{className:"stroke-primary-dark"})," Simplify and Clarify Content"]}),(0,jsx_runtime.jsx)("p",{className:"text-muted-foreground text-sm pl-8",children:"Complex language and dense policy details are broken down into clear, accessible explanations, ensuring everyone can engage with the material."})]}),(0,jsx_runtime.jsxs)("li",{className:"my-2",children:[(0,jsx_runtime.jsxs)("h3",{className:"flex gap-2 text-base sm:text-lg font-semibold",children:[(0,jsx_runtime.jsx)(check.A,{className:"stroke-primary-dark"})," Encourage Collaborative Analysis"]}),(0,jsx_runtime.jsx)("p",{className:"text-muted-foreground text-sm pl-8",children:"Fostering a space for open discussion is key to this effort. We aim to gather diverse perspectives to create a more inclusive and informed analysis."})]})]})})]})})},createLucideIcon=__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js");const PenLine=(0,createLucideIcon.A)("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);var list=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/list.js");const MessageCircle=(0,createLucideIcon.A)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);var users_round=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/users-round.js");function HowYouCanHelpSection(){return(0,jsx_runtime.jsx)("section",{className:"container py-24 lg:py-32",children:(0,jsx_runtime.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,jsx_runtime.jsxs)("div",{className:"text-center mb-12",children:[(0,jsx_runtime.jsx)("h2",{className:"text-3xl font-bold lg:text-4xl",children:"How You Can Help"}),(0,jsx_runtime.jsx)("p",{className:"mt-3 text-muted-foreground",children:"Join our efforts to analyze Project 2025. Whether you're a researcher, writer, or concerned citizen, there's a way for you to contribute."})]}),(0,jsx_runtime.jsxs)("div",{className:"space-y-6 lg:space-y-10",children:[(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)(PenLine,{className:"flex-shrink-0 mt-2 h-6 w-6 text-primary"}),(0,jsx_runtime.jsxs)("div",{className:"ms-5 sm:ms-8",children:[(0,jsx_runtime.jsx)("h3",{className:"text-base sm:text-lg font-semibold",children:"Validate Content"}),(0,jsx_runtime.jsx)("p",{className:"mt-1 text-muted-foreground",children:"Review and refine transcriptions of the document for accuracy and clarity."})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)(list.A,{className:"flex-shrink-0 mt-2 h-6 w-6 text-primary"}),(0,jsx_runtime.jsxs)("div",{className:"ms-5 sm:ms-8",children:[(0,jsx_runtime.jsx)("h3",{className:"text-base sm:text-lg font-semibold",children:"Transcribe Chapters"}),(0,jsx_runtime.jsx)("p",{className:"mt-1 text-muted-foreground",children:"Use our guidelines to create draft versions of untranscribed sections."})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)(MessageCircle,{className:"flex-shrink-0 mt-2 h-6 w-6 text-primary"}),(0,jsx_runtime.jsxs)("div",{className:"ms-5 sm:ms-8",children:[(0,jsx_runtime.jsx)("h3",{className:"text-base sm:text-lg font-semibold",children:"Collaborate on Analysis"}),(0,jsx_runtime.jsx)("p",{className:"mt-1 text-muted-foreground",children:"Help break down and analyze every sentence, paragraph, and section for better understanding."})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)(users_round.A,{className:"flex-shrink-0 mt-2 h-6 w-6 text-primary"}),(0,jsx_runtime.jsxs)("div",{className:"ms-5 sm:ms-8",children:[(0,jsx_runtime.jsx)("h3",{className:"text-base sm:text-lg font-semibold",children:"Join Discussions"}),(0,jsx_runtime.jsx)("p",{className:"mt-1 text-muted-foreground",children:"Engage in public conversations on GitHub to share insights and feedback with other contributors."})]})]})]})]})})}var HeroSection=function(){return(0,jsx_runtime.jsx)("div",{className:"container md:py-24 lg:py-32",children:(0,jsx_runtime.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h1",{className:"scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight",children:"Help Unpack the Blueprint for America's Future"}),(0,jsx_runtime.jsx)("p",{className:"mt-3 text-lg lg:text-xl text-muted-foreground",children:"Project 2025 outlines a vision for significant government restructuring and policy changes. Our mission is to critically analyze this document, uncovering its potential risks, impacts, and underlying motives. By collaborating on this analysis, we aim to create a transparent, accessible resource to inform and prepare communities for the possible implications of these proposals."}),(0,jsx_runtime.jsxs)("div",{className:"mt-7 block lg:flex w-full gap-4",children:[(0,jsx_runtime.jsx)(dist.N_,{className:"block my-2 flex-grow",to:"/project2025",children:(0,jsx_runtime.jsx)(Button.$,{className:"w-full",size:"lg",children:"Explore the Analysis"})}),(0,jsx_runtime.jsx)(dist.N_,{className:"block my-2 flex-grow",to:"/about",children:(0,jsx_runtime.jsx)(Button.$,{className:"w-full",variant:"outline",size:"lg",children:"Learn More"})})]})]}),(0,jsx_runtime.jsxs)("div",{className:"relative ms-4",children:[(0,jsx_runtime.jsx)("div",{className:"relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all",style:{paddingTop:"56.25%"},children:(0,jsx_runtime.jsx)("iframe",{className:"absolute inset-0 w-full h-full rounded-md",src:"https://www.youtube.com/embed/3h8C0QDEgsA?si=FJHzOwGIjcRrtexG",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})}),(0,jsx_runtime.jsx)("small",{className:"text-muted-foreground text-sm mt-4 block text-center",children:"Donald Trump endorses a 'mandate' from The Heritage Foundation. Following this endorsement, The Heritage Foundation released their Mandate for Leadership, also known as Project 2025."})]})]})})},WhyThisMattersSection=function(){return(0,jsx_runtime.jsx)("section",{className:"py-32",children:(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsx)("p",{className:"mb-4 text-sm text-muted-foreground lg:text-base",children:"OUR VALUES"}),(0,jsx_runtime.jsx)("h2",{className:"text-3xl font-medium lg:text-4xl",children:"Why This Matters"}),(0,jsx_runtime.jsx)("p",{className:"mt-8 mb-10",children:"Project 2025 isn't just a set of policy recommendations—it's a detailed roadmap for reshaping government and society. By analyzing it critically, we aim to create a transparent, accessible record that informs and empowers communities."}),(0,jsx_runtime.jsxs)("div",{className:"grid gap-6 lg:grid-cols-3",children:[(0,jsx_runtime.jsxs)("div",{className:"rounded-lg bg-white/50 border border-primary text-muted-foreground p-5",children:[(0,jsx_runtime.jsx)("h3",{className:"mb-2 text-xl font-medium",children:"Who Could Be Affected?"}),(0,jsx_runtime.jsx)("p",{className:"leading-7 text-muted-foreground",children:"Communities, institutions, and vulnerable populations may face significant changes in policies like healthcare, education, and civil rights."})]}),(0,jsx_runtime.jsxs)("div",{className:"rounded-lg bg-white/50 border border-secondary text-muted-foreground p-5",children:[(0,jsx_runtime.jsx)("h3",{className:"mb-2 text-xl font-medium",children:"What's at Stake?"}),(0,jsx_runtime.jsx)("p",{className:"leading-7 text-muted-foreground",children:"Transparency in decision-making, representation for all voices, and preparation for potential societal changes."})]}),(0,jsx_runtime.jsxs)("div",{className:"rounded-lg border border-accent bg-white/50 p-5",children:[(0,jsx_runtime.jsx)("h3",{className:"mb-2 text-xl font-medium",children:"A Public Record"}),(0,jsx_runtime.jsx)("p",{className:"leading-7 text-muted-foreground",children:"A fully transparent, sentence-by-sentence analysis to hold decision-makers accountable and combat misinformation."})]})]})]})})},IndexPage=function(){return(0,jsx_runtime.jsxs)("div",{className:"font-sans grid justify-center",children:[(0,jsx_runtime.jsx)(HeroSection,{}),(0,jsx_runtime.jsx)(RetooledGoalsSection,{}),(0,jsx_runtime.jsx)(ExploreChaptersSection,{}),(0,jsx_runtime.jsx)(WhyThisMattersSection,{}),(0,jsx_runtime.jsx)(HowYouCanHelpSection,{})]})};IndexPage.path="/";try{IndexPage.displayName="IndexPage",IndexPage.__docgenInfo={description:"",displayName:"IndexPage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pages/_index/component.tsx#IndexPage"]={docgenInfo:IndexPage.__docgenInfo,name:"IndexPage",path:"src/components/Pages/_index/component.tsx#IndexPage"})}catch(__react_docgen_typescript_loader_error){}const story={component:IndexPage,title:"Components/Pages"};var Default={}},"./src/hooks/use-content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>useContent});var _lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/data/project2025/index.tsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router/dist/index.js"),useContent=function(){var _a=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.g)(),chapterName=_a.chapterName,sectionName=_a.sectionName,output={project2025:_lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__.A,chapters:null===_lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__.A||void 0===_lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__.A?void 0:_lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__.A.sections.map((function(section){return section.chapters})).flat(1/0)};return sectionName&&(output.section=null===_lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__.A||void 0===_lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__.A?void 0:_lib_data_project2025__WEBPACK_IMPORTED_MODULE_0__.A.sections.find((function(section){return section.sectionId===sectionName}))),chapterName&&output.section&&(output.chapter=output.section.chapters.find((function(chapter){return chapter.chapterId===chapterName}))),output}}}]);