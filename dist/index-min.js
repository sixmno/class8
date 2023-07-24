var cssClass=[],trbl=function(e){return["top","right","bottom","left"][["t","r","b","l"].indexOf(e)]},styleMaker=function(e){class8.log>=1&&console.log("styleMaking for: ",e);var t,a=!1;function s(t){return e.substr(e.nth_occurrence("-",t)+1).replace(/_/g," ")}switch(0==e.indexOf("!")&&(a=!0,e=e.substr(1)),!0){case 0==e.indexOf("dis-"):t="display: "+e.substr(4);break;case 0==e.indexOf("vis-"):t="visibility: "+s(1);break;case 0==e.indexOf("flex-grow-"):t="flex-grow: "+e.substr(10);break;case 0==e.indexOf("flex-wrap-"):t="flex-wrap: "+e.substr(10);break;case 0==e.indexOf("flex-flow-"):t="flex-flow: "+e.substr(10);break;case 0==e.indexOf("align-items-"):t="align-items: "+e.substr(12);break;case 0==e.indexOf("align-content-"):t="align-content: "+e.substr(14);break;case 0==e.indexOf("flex-dir-"):t="flex-direction: "+e.substr(9);break;case 0==e.indexOf("order-"):t="order: "+e.substr(6);break;case 0==e.indexOf("justify-"):t="justify-content: "+e.substr(8);break;case 0==e.indexOf("w-"):t="width: "+e.substr(2);break;case 0==e.indexOf("h-"):t="height: "+e.substr(2);break;case 0==e.indexOf("minw-"):t="min-width: "+e.substr(5);break;case 0==e.indexOf("minh-"):t="min-height: "+e.substr(5);break;case 0==e.indexOf("maxw-"):t="max-width: "+e.substr(5);break;case 0==e.indexOf("maxh-"):t="max-height: "+e.substr(5);break;case 0==e.indexOf("lstyle-"):t="list-style: "+e.substr(7);break;case 0==e.indexOf("lspacing-"):t="letter-spacing: "+e.substr(9);break;case 0==e.indexOf("cursor-"):t="cursor: "+e.substr(7);break;case 0==e.indexOf("fs-"):t="font-size: "+e.substr(3);break;case 0==e.indexOf("o-"):t="opacity: "+e.substr(2);break;case 0==e.indexOf("border-"):-1==e.nth_occurrence("-",2)?t="border: "+s(1):-1==e.nth_occurrence("-",3)?8==e.nth_occurrence("-",2)&&["t","r","b","l"].indexOf(e.substr(7,1))>-1?t="border-"+trbl(e.substr(7,1))+": "+s(2):8==e.nth_occurrence("-",2)&&["x","y"].indexOf(e.substr(7,1))>-1?"x"==e.substr(7,1)?t="border-left: "+s(2)+"; border-right: "+s(2):"y"==e.substr(7,1)&&(t="border-top: "+s(2)+"; border-bottom: "+s(2)):-1!=["color","width","style"].indexOf(e.substr(7,5))&&(t="border-"+e.substr(7,5)+": "+s(2)):-1!=e.nth_occurrence("-",3)&&(t="border-"+trbl(e.substr(7,1))+"-"+e.split("-")[2]+": "+e.split("-")[3]);break;case 0==e.indexOf("outline-"):t="outline: "+s(1);break;case 0==e.indexOf("resize-"):t="resize: "+s(1);break;case 0==e.indexOf("br-"):t="border-radius: "+e.substr(3).replace(/_/g," ");break;case 0==e.indexOf("bg-img-"):t='background-image: url("'+e.substr(7)+'")';break;case 0==e.indexOf("bg-pos-"):t="background-position: "+e.substr(7).replace(/___/g," ");break;case 0==e.indexOf("bg-size-"):t="background-size: "+e.substr(8);break;case 0==e.indexOf("bgl-"):t="background-image: linear-gradient("+s(1)+")";break;case 0==e.indexOf("bg-"):t="background-color: "+e.substr(3);break;case 0==e.indexOf("color-"):t="color: "+e.substr(6);break;case-1!=["text-left","text-right","text-center","text-justify"].indexOf(e):case-1!=["align-left","align-right","align-center","align-justify"].indexOf(e):t="text-align: "+s(1);break;case-1!=["float-left","float-right","float-none"].indexOf(e):t="float: "+s(1);break;case 0==e.indexOf("fw-"):t="font-weight: "+s(1);break;case 0==e.indexOf("text-decoration"):t="text-decoration: "+s(2);break;case 0==e.indexOf("text-overflow"):t="text-overflow: "+s(2);break;case-1!=["pos-absolute","pos-fixed","pos-relative","pos-static","pos-sticky"].indexOf(e):t="position: "+s(1);break;case 0==e.indexOf("top-"):t="top: "+s(1);break;case 0==e.indexOf("right-"):t="right: "+s(1);break;case 0==e.indexOf("bottom-"):t="bottom: "+s(1);break;case 0==e.indexOf("left-"):t="left: "+s(1);break;case 0==e.indexOf("z-"):t="z-index: "+s(1);break;case 0==e.indexOf("p-"):t="padding: "+s(1);break;case 0==e.indexOf("pt-"):t="padding-top: "+s(1);break;case 0==e.indexOf("pr-"):t="padding-right: "+s(1);break;case 0==e.indexOf("pb-"):t="padding-bottom: "+s(1);break;case 0==e.indexOf("pl-"):t="padding-left: "+s(1);break;case 0==e.indexOf("px-"):t="padding-left: "+s(1)+(a?" !important":""),t+="; padding-right: "+s(1);break;case 0==e.indexOf("py-"):t="padding-top: "+s(1)+(a?" !important":""),t+="; padding-bottom: "+s(1);break;case 0==e.indexOf("m-"):t="margin: "+s(1);break;case 0==e.indexOf("mt-"):t="margin-top: "+s(1);break;case 0==e.indexOf("mr-"):t="margin-right: "+s(1);break;case 0==e.indexOf("mb-"):t="margin-bottom: "+s(1);break;case 0==e.indexOf("ml-"):t="margin-left: "+s(1);break;case 0==e.indexOf("mx-"):t="margin-left: "+s(1)+(a?" !important":""),t+="; margin-right: "+s(1);break;case 0==e.indexOf("my-"):t="margin-top: "+s(1)+(a?" !important":""),t+="; margin-bottom: "+s(1);break;case 0==e.indexOf("valign-"):t="vertical-align: "+s(1);break;case 0==e.indexOf("dir-")&&-1!=["rtl","ltr","auto","revert","unset"].indexOf(s(1)):t="direction: "+s(1);break;case 0==e.indexOf("ws-"):t="white-space: "+s(1);break;case 0==e.indexOf("lh-"):t="line-height: "+s(1);break;case 0==e.indexOf("overflow-x-"):t="overflow-x: "+s(2);break;case 0==e.indexOf("overflow-y-"):t="overflow-y: "+s(2);break;case 0==e.indexOf("overflow-"):t="overflow: "+s(1);break;case 0==e.indexOf("content-"):t="content: "+(""==s(1)?'""':s(1));break;case 0==e.indexOf("tshadow-"):t="text-shadow: "+s(1);break;case 0==e.indexOf("shadow-"):t="box-shadow: "+s(1);break;case 0==e.indexOf("tr-"):t="transition: "+s(1);break;case 0==e.indexOf("trf-origin-"):t="transform-origin: "+s(2);break;case 0==e.indexOf("trf-"):t="transform: "+s(1);break;case 0==e.indexOf("perspective-"):t="perspective: "+s(1);break;case 0==e.indexOf("delay-"):t="animation-delay: "+s(1);break;case 0==e.indexOf("ani-du-"):t="animation-duration: "+s(2);break;case 0==e.indexOf("ani-infinite"):t="-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite";break;case 0==e.indexOf("ani-"):t="-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both";break;case 0==e.indexOf("gtc-"):t="grid-template-columns: "+e.substr(4).replace(/_/g," ");break;case 0==e.indexOf("gtr-"):t="grid-template-rows: "+e.substr(4).replace(/_/g," ");break;case 0==e.indexOf("gcs-"):t="grid-column-start: "+s(1);break;case 0==e.indexOf("gce-"):t="grid-column-end: "+s(1);break;case 0==e.indexOf("grid-area-"):t="grid-area: "+s(2);break;case 0==e.indexOf("gap-"):t="gap: "+e.substr(4).replace(/_/g," ");break;case 0==e.indexOf("will-change-"):t="will-change: "+e.substr(12);break;case 0==e.indexOf("filter-"):t="filter: "+s(1);break;case 0==e.indexOf("center-xy"):t=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) ";break;case 0==e.indexOf("center-y"):t=" position: absolute; top: 50%; transform: translateY(-50%); ";break;case 0==e.indexOf("mask-w-"):t='content: ""; position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; z-index: 1; background-color: rgba(255,255,255,'+e.substr(7)+") ";break;case 0==e.indexOf("mask-b-"):t='content: ""; position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; z-index: 1; background-color: rgba(0,0,0,'+e.substr(7)+") ";break;case 0==e.indexOf("flip-"):"x"==s(1)?t="transform: rotateY(180deg)":"y"==s(1)?t="transform: rotateX(180deg)":"xy"==s(1)?t="transform: rotate(180deg)":isNaN(s(1))||(t="transform: rotate("+s(1)+"deg)");break;case 0==e.indexOf("translate-x"):t="transform: translateX("+s(2)+")";break;case 0==e.indexOf("translate-y"):t="transform: translateY("+s(2)+")";break;case 0==e.indexOf("overlay-"):"all"==s(1)&&(t="position: absolute; top: 0; right: 0; left: 0; bottom: 0; width: 100%; height: 100%;")}return null!=t?"\t"+t+(a?" !important":"")+";\n":""},addStyleByClass=function(e,t){var a,s=e.toString(),r="",n="",i=e.match(/(((\{([^}]+)\}_)|(_\{([^}]+)\})))|(!|\b(\w|-|#|%|,|\.|\/|\(([^)]*)\))+)+/g),o="",c=0;if((i||[]).forEach(function(e){e&&(class8.log>=1&&console.group(e),/l\d+/.test(e)?(class8.log>=1&&console.log("type 1"),c=e.substr(1)):/_\{.+\}/.test(e)?(class8.log>=1&&console.log("type 2"),r+=e.slice(2,-1)):/\{.+\}_/.test(e)?(class8.log>=1&&console.log("type 3"),n+=e.slice(1,-2)):(class8.log>=1&&console.log("type 4"),o+=styleMaker(e,t)),class8.log>=1&&console.groupEnd(e))}),class8.log>=1&&console.log("style output: ",o),-1!=o.indexOf("calc(")){var l=o.match(/calc\(([^)]+)\)/);l.length&&(o=o.replace(l[1],l[1].replace("-"," - ").replace("+"," + ")))}if(o.trim().length>0){a=document.querySelector("style.class8-"+c);var d=document.head||document.getElementsByTagName("head")[0];if(!a){var b=document.createElement("style");b.className="class8-"+c,b.attributes.level=c,d.appendChild(b),a=document.querySelector("style.class8-"+c)}class8.log>=2&&console.log("_cls, cls",s,e),e=r.length>0||n.length>0?'[class*="'+s+'"]':"."+s.replace(/#/g,"\\#").replace(/:/g,"\\:").replace(/\//g,"\\/").replace(/\./g,"\\.").replace(/,/g,"\\,").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\{/g,"\\{").replace(/\}/g,"\\}").replace(/!/g,"\\!").replace(/%/g,"\\%"),class8.log>=2&&console.log("parent_cls,  >>",r),class8.log>=2&&console.log("cls >> ",e),class8.log>=2&&console.log("child_cls >>",n),r.split(",").forEach(function(t){n.split(",").forEach(function(r){var n=t+e+r+"{\n"+o+"\n}\n";a.append(n),class8.log>=2&&console.log("$target.append(style_line): ",s+"\n\n",n)})});var f=document.querySelectorAll('style[class^="class8-"');[].slice.call(f).sort(function(e,t){return parseInt(e.attributes.level)>parseInt(t.attributes.level)?1:-1}).forEach(function(e){d.appendChild(e),class8.log>=2&&console.log("appending",e)})}class8.log>=1&&console.info("new push:",s),cssClass.push(s)},setupResponsive=function(e){var t=e.matchMedia("only screen and (max-width : 900px)"),a=function(e){e.matches?(document.body.hasAttribute("desktop")&&document.body.removeAttribute("desktop"),document.body.hasAttribute("phone")||document.body.setAttribute("phone","")):(document.body.hasAttribute("phone")&&document.body.removeAttribute("phone"),document.body.hasAttribute("desktop")||document.body.setAttribute("desktop",""))};t.addListener(a),a(t)};function checkBrowser(){let e="",t=navigator.userAgent.search("Chrome"),a=navigator.userAgent.search("Firefox"),s=navigator.userAgent.search("MSIE 8.0"),r=navigator.userAgent.search("MSIE 9.0");return t>-1?e="Chrome":a>-1?e="Firefox":r>-1?e="MSIE 9.0":s>-1&&(e="MSIE 8.0"),e}const class8={install(e,t){if(t=t||{},class8.installed)return;if(new MutationObserver(function(e,t){document.querySelectorAll("[class]").forEach(e=>{(e.attributes.class.value.match(/(((\{([^}]+)\}_)|(_\{([^}]+)\})):)*(!|\b([^ ])+)+/g)||[]).forEach(t=>{0!=(t=t.trim()).length&&-1===cssClass.indexOf(t)&&(cssClass.push(t),addStyleByClass(t,e))})})}).observe(document.body,{attributes:!0,childList:!0,subtree:!0}),window){!1!==t.setupResponsive&&setupResponsive(window);const e=checkBrowser();document.body.setAttribute("browser",e),class8.browser=e}class8.installed=!0},installed:!1,browser:"",log:!1};String.prototype.nth_occurrence=function(e,t){var a=this.indexOf(e),s=a+1;if(1==t)return a;var r=this.slice(s).nth_occurrence(e,t-1);return-1===r?-1:s+r},"undefined"==typeof window||window.class8||(window.class8=class8,class8.installed||class8.install());export default class8;