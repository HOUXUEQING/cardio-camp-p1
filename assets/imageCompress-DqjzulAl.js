import{aa as y}from"./index-BnpY-nzl.js";/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=y("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);async function I(t,u={}){const{maxWidth:i=1280,maxHeight:o=1280,quality:m=.8,minWidth:h=300}=u;if(!t.type.startsWith("image/")||t.type==="image/gif")return t;try{const e=await createImageBitmap(t);if(e.width<=h&&e.height<=h)return e.close(),t;let{width:a,height:c}=e;a>i&&(c=Math.round(c*(i/a)),a=i),c>o&&(a=Math.round(a*(o/c)),c=o);const r=document.createElement("canvas");r.width=a,r.height=c;const g=r.getContext("2d");if(!g)return e.close(),t;g.drawImage(e,0,0,a,c),e.close();const n=await new Promise(p=>{r.toBlob(s=>{s&&s.size>0?p(s):r.toBlob(p,"image/jpeg",m)},"image/webp",m)});if(!n||n.size>=t.size)return t;const d=n.type==="image/webp"?"webp":"jpg",w=t.name.replace(/\.[^.]+$/,"");return new File([n],`${w}.${d}`,{type:n.type})}catch{return t}}export{x as C,I as c};
