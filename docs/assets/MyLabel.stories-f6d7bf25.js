import{j as x}from"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const l=({AllCaps:n=!1,color:A="primary",label:t="No Label",size:S="normal",fontColor:h})=>x.jsx("span",{className:`label ${S} text-${A}`,style:{color:h},children:n?t.toUpperCase():t});try{l.displayName="MyLabel",l.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Este es el mensaje a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamaño en la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},AllCaps:{defaultValue:{value:"false"},description:"Si quiere todo capitalizado",name:"AllCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores básicos del bóton",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/MyLabel",component:l,tags:["autodocs"],argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"",size:"normal",AllCaps:!1}},a={args:{label:"",size:"normal",AllCaps:!0}},r={args:{label:"",size:"normal",color:"secondary"}},o={args:{label:"",size:"normal",color:"tertiary"}},s={args:{label:"",size:"h1",fontColor:"#5517ac"}};var c,i,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: '',
    size: 'normal',
    AllCaps: false
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: '',
    size: 'normal',
    AllCaps: true
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: '',
    size: 'normal',
    color: 'secondary'
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,C,z;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: '',
    size: 'normal',
    color: 'tertiary'
  }
}`,...(z=(C=o.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var v,_,q;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: '',
    size: 'h1',
    fontColor: '#5517ac'
  }
}`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const j=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,s as CustomFontColor,r as Secondary,o as Tertiary,j as __namedExportsOrder,V as default};
//# sourceMappingURL=MyLabel.stories-f6d7bf25.js.map
