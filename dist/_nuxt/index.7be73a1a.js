import{u as _,a as y}from"./useTitle.5b287647.js";import{a as d,r as f,e as g,f as a,h,w,i as t,F as c,j as N,u as V,k as i,l as x,o,m as B,t as r}from"./entry.eed129ac.js";import{_ as D}from"./_plugin-vue_export-helper.c27b6911.js";const k=()=>$fetch("https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=30&isVerify=1&pageNo=1"),v=d({__name:"index",setup(u){const{t:p}=_();y(p("homepage"));const n=f([]);return g(()=>{k().then(l=>{n.value=l.value.list})}),(s,l)=>{const m=x("VanButton");return o(),a(c,null,[h(m,{type:"primary"},{default:w(()=>[B("Select")]),_:1}),t("ul",{class:i(s.$style.list)},[(o(!0),a(c,null,N(V(n),e=>(o(),a("li",{class:i(s.$style.item),key:e.lotteryDrawNum},[t("span",null,r(e.lotteryDrawNum),1),t("span",null,r(e.lotteryDrawTime),1),t("span",null,r(e.lotteryDrawResult),1)],2))),128))],2)],64)}}}),C="_list_1hjtc_1",L="_item_1hjtc_6",T={list:C,item:L},$={$style:T},z=D(v,[["__cssModules",$]]);export{z as default};