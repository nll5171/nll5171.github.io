import{_ as a,r as o,o as r,u as c,c as i,a as l}from"./index-BaADpJYD.js";const d=["innerHTML"],m=`
  <div class="mt-4 mb-md-4 d-flex justify-content-center align-items-center">
    <div
      class="spinner-border text-light"
      style="--bs-spinner-width: 10rem; --bs-spinner-height: 10rem; --bs-spinner-border-width: 1.25em"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
`,p={__name:"ProjectView",setup(u){const e=o(m),s=c();return r(async()=>{const t=await(await fetch(`../src/components/projects/markup/${s.params.name}.html`)).text();e.value=t}),(n,t)=>(l(),i("main",{class:"bd-content",role:"main",innerHTML:e.value},null,8,d))}},h=a(p,[["__scopeId","data-v-542e53ae"]]);export{h as default};
