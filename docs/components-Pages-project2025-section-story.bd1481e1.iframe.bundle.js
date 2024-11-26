/*! For license information please see components-Pages-project2025-section-story.bd1481e1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkadeepdiveinto2025=self.webpackChunkadeepdiveinto2025||[]).push([[1579],{"./node_modules/@radix-ui/react-avatar/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BK:()=>AvatarImage,H4:()=>Fallback,_V:()=>Image,bL:()=>Root,eu:()=>Avatar,q5:()=>AvatarFallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),[createAvatarContext,createAvatarScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("Avatar"),[AvatarProvider,useAvatarContext]=createAvatarContext("Avatar"),Avatar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=react__WEBPACK_IMPORTED_MODULE_0__.useState("idle");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.span,{...avatarProps,ref:forwardedRef})})}));Avatar.displayName="Avatar";var AvatarImage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function useImageLoadingStatus(src){const[loadingStatus,setLoadingStatus]=react__WEBPACK_IMPORTED_MODULE_0__.useState("idle");return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,()=>{isMounted=!1}}),[src]),loadingStatus}(src),handleLoadingStatusChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__.c)((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.img,{...imageProps,ref:forwardedRef,src}):null}));AvatarImage.displayName="AvatarImage";var AvatarFallback=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0===delayMs);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.span,{...fallbackProps,ref:forwardedRef}):null}));AvatarFallback.displayName="AvatarFallback";var Root=Avatar,Image=AvatarImage,Fallback=AvatarFallback},"./node_modules/lucide-react/dist/esm/icons/chevron-left.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronLeft});const ChevronLeft=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},"./node_modules/lucide-react/dist/esm/icons/chevron-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronRight});const ChevronRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},"./node_modules/lucide-react/dist/esm/icons/ellipsis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Ellipsis});const Ellipsis=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},"./src/components/Pages/project2025/section/story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>story});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),change_case_dist=__webpack_require__("./node_modules/change-case/dist/index.js"),Avatar=__webpack_require__("./src/components/ThirdParty/ShadCn/Avatar/index.ts"),Badge=__webpack_require__("./src/components/ThirdParty/ShadCn/Badge/index.ts"),Pagination=__webpack_require__("./src/components/ThirdParty/ShadCn/Pagination/index.ts"),posts=[{id:"post-1",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-2",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-3",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-4",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-5",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-6",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-7",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-8",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"},{id:"post-9",title:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",summary:"Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",label:"Ut varius dolor turpis",author:"Jane Doe",published:"1 Jan 2024",href:"#",image:"https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"}],Blog6=function(){return(0,jsx_runtime.jsx)("section",{className:"py-32",children:(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsxs)("div",{className:"mb-8 md:mb-14 lg:mb-16",children:[(0,jsx_runtime.jsx)("p",{className:"text-wider mb-4 text-sm font-medium text-muted-foreground",children:"Eyebrow"}),(0,jsx_runtime.jsx)("h1",{className:"mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl",children:"Blog"}),(0,jsx_runtime.jsx)("p",{children:"Duis sem sem, gravida vel porttitor eu, volutpat ut arcu"})]}),(0,jsx_runtime.jsx)("div",{className:"grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3",children:posts.map((function(post){return(0,jsx_runtime.jsxs)("a",{href:post.href,className:"group flex flex-col",children:[(0,jsx_runtime.jsx)("div",{className:"mb-4 flex text-clip rounded-xl md:mb-5",children:(0,jsx_runtime.jsx)("div",{className:"size-full transition duration-300 group-hover:scale-105",children:(0,jsx_runtime.jsx)("img",{src:post.image,alt:post.title,className:"aspect-[3/2] size-full object-cover object-center"})})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Badge.E,{children:post.label})}),(0,jsx_runtime.jsx)("div",{className:"mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl",children:post.title}),(0,jsx_runtime.jsx)("div",{className:"mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base",children:post.summary}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsxs)(Avatar.eu,{className:"size-12",children:[(0,jsx_runtime.jsx)(Avatar.BK,{src:"https://www.shadcnblocks.com/images/block/avatar-1.webp"}),(0,jsx_runtime.jsx)(Avatar.q5,{children:"JD"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-px",children:[(0,jsx_runtime.jsx)("span",{className:"text-xs font-medium",children:post.author}),(0,jsx_runtime.jsx)("span",{className:"text-xs text-muted-foreground",children:post.published})]})]})]},post.id)}))}),(0,jsx_runtime.jsx)("div",{className:"mt-8 border-t border-border py-2 md:mt-10 lg:mt-12",children:(0,jsx_runtime.jsx)(Pagination.dK,{children:(0,jsx_runtime.jsxs)(Pagination.Iu,{className:"w-full justify-between",children:[(0,jsx_runtime.jsx)(Pagination.cU,{children:(0,jsx_runtime.jsx)(Pagination.Eb,{href:"#"})}),(0,jsx_runtime.jsxs)("div",{className:"hidden items-center gap-1 md:flex",children:[(0,jsx_runtime.jsx)(Pagination.cU,{children:(0,jsx_runtime.jsx)(Pagination.n$,{href:"#",children:"1"})}),(0,jsx_runtime.jsx)(Pagination.cU,{children:(0,jsx_runtime.jsx)(Pagination.n$,{href:"#",children:"2"})}),(0,jsx_runtime.jsx)(Pagination.cU,{children:(0,jsx_runtime.jsx)(Pagination.n$,{href:"#",children:"3"})})]}),(0,jsx_runtime.jsx)(Pagination.cU,{children:(0,jsx_runtime.jsx)(Pagination.WA,{href:"#"})})]})})})]})})},SectionPage=function(){var sectionName=(0,dist.g)().sectionName;return(0,jsx_runtime.jsx)("article",{children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("h1",{children:[change_case_dist.De(sectionName||"")," Page"]}),(0,jsx_runtime.jsx)(Blog6,{})]})})};SectionPage.path="/project2025/:sectionName";try{SectionPage.displayName="SectionPage",SectionPage.__docgenInfo={description:"",displayName:"SectionPage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pages/project2025/section/component.tsx#SectionPage"]={docgenInfo:SectionPage.__docgenInfo,name:"SectionPage",path:"src/components/Pages/project2025/section/component.tsx#SectionPage"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/Pages/project2025/section/chapter/index.ts");const story={component:SectionPage,title:"Components/Pages/section"};var Default={}},"./src/components/ThirdParty/ShadCn/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eu:()=>Avatar,q5:()=>AvatarFallback,BK:()=>AvatarImage});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-avatar/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Avatar=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)(dist.bL,__assign({ref,className:(0,utils.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className)},props))}));Avatar.displayName=dist.bL.displayName;var AvatarImage=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)(dist._V,__assign({ref,className:(0,utils.cn)("aspect-square h-full w-full",className)},props))}));AvatarImage.displayName=dist._V.displayName;var AvatarFallback=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)(dist.H4,__assign({ref,className:(0,utils.cn)("flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800",className)},props))}));AvatarFallback.displayName=dist.H4.displayName;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Avatar/component.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/ThirdParty/ShadCn/Avatar/component.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},onLoadingStatusChange:{defaultValue:null,description:"",name:"onLoadingStatusChange",required:!1,type:{name:"((status: ImageLoadingStatus) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}try{AvatarFallback.displayName="AvatarFallback",AvatarFallback.__docgenInfo={description:"",displayName:"AvatarFallback",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},delayMs:{defaultValue:null,description:"",name:"delayMs",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarFallback"]={docgenInfo:AvatarFallback.__docgenInfo,name:"AvatarFallback",path:"src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarFallback"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ThirdParty/ShadCn/Pagination/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dK:()=>Pagination,Iu:()=>PaginationContent,M_:()=>PaginationEllipsis,cU:()=>PaginationItem,n$:()=>PaginationLink,WA:()=>PaginationNext,Eb:()=>PaginationPrevious});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),chevron_left=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-left.js"),chevron_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-right.js"),ellipsis=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/ellipsis.js"),utils=__webpack_require__("./src/lib/utils.tsx"),Button=__webpack_require__("./src/components/ThirdParty/ShadCn/Button/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Pagination=function(_a){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("nav",__assign({role:"navigation","aria-label":"pagination",className:(0,utils.cn)("mx-auto flex w-full justify-center",className)},props))};Pagination.displayName="Pagination";var PaginationContent=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("ul",__assign({ref,className:(0,utils.cn)("flex flex-row items-center gap-1",className)},props))}));PaginationContent.displayName="PaginationContent";var PaginationItem=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("li",__assign({ref,className:(0,utils.cn)("",className)},props))}));PaginationItem.displayName="PaginationItem";var PaginationLink=function(_a){var className=_a.className,isActive=_a.isActive,_b=_a.size,size=void 0===_b?"icon":_b,props=__rest(_a,["className","isActive","size"]);return(0,jsx_runtime.jsx)("a",__assign({"aria-current":isActive?"page":void 0,className:(0,utils.cn)((0,Button.r)({variant:isActive?"outline":"ghost",size}),className)},props))};PaginationLink.displayName="PaginationLink";var PaginationPrevious=function(_a){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsxs)(PaginationLink,__assign({"aria-label":"Go to previous page",size:"default",className:(0,utils.cn)("gap-1 pl-2.5",className)},props,{children:[(0,jsx_runtime.jsx)(chevron_left.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{children:"Previous"})]}))};PaginationPrevious.displayName="PaginationPrevious";var PaginationNext=function(_a){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsxs)(PaginationLink,__assign({"aria-label":"Go to next page",size:"default",className:(0,utils.cn)("gap-1 pr-2.5",className)},props,{children:[(0,jsx_runtime.jsx)("span",{children:"Next"}),(0,jsx_runtime.jsx)(chevron_right.A,{className:"h-4 w-4"})]}))};PaginationNext.displayName="PaginationNext";var PaginationEllipsis=function(_a){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsxs)("span",__assign({"aria-hidden":!0,className:(0,utils.cn)("flex h-9 w-9 items-center justify-center",className)},props,{children:[(0,jsx_runtime.jsx)(ellipsis.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"More pages"})]}))};PaginationEllipsis.displayName="PaginationEllipsis";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Pagination/component.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/ThirdParty/ShadCn/Pagination/component.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}}}]);