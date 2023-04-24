import{j as N}from"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const n=({AllCaps:t=!1,color:x="primary",label:c="No Label",size:L="normal",fontColor:V,backgroundColor:E="transparent"})=>N.jsx("span",{className:`label ${L} text-${x}`,style:{color:V,backgroundColor:E},children:t?c.toUpperCase():c});try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Este es el mensaje a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamaño en la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},AllCaps:{defaultValue:{value:"false"},description:"Si quiere todo capitalizado",name:"AllCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores básicos del bóton",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"Color personalizado de la fuente",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const M={title:"UI/MyLabel",component:n,tags:["autodocs"],argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{size:"normal",AllCaps:!1}},a={args:{size:"normal",AllCaps:!0}},r={args:{label:"",size:"normal",color:"secondary"}},o={args:{size:"normal",color:"tertiary"}},s={args:{size:"h1",fontColor:"#5517ac"}},l={args:{size:"h1",fontColor:"white",backgroundColor:"black"}};var i,u,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    AllCaps: false
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,d,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    AllCaps: true
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var C,y,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: '',
    size: 'normal',
    color: 'secondary'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,z,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'tertiary'
  }
}`,...(v=(z=o.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var h,_,q;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    fontColor: '#5517ac'
  }
}`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var S,k,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black'
  }
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const T=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,l as CustomBackgroundColor,s as CustomFontColor,r as Secondary,o as Tertiary,T as __namedExportsOrder,M as default};
//# sourceMappingURL=MyLabel.stories-611a5fbd.js.map
