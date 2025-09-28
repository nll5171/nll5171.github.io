import{_ as a,r,o,u as c,c as i,a as l}from"./index-CNRzHMAw.js";const d=["innerHTML"],m=`
  <div class="mt-4 mb-md-4 d-flex justify-content-center align-items-center">
    <div
      class="spinner-border text-light"
      style="--bs-spinner-width: 10rem; --bs-spinner-height: 10rem; --bs-spinner-border-width: 1.25em"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
`,p={__name:"ProjectView",setup(u){const e=r(m),s=c();return o(async()=>{const t=await(await fetch(`/markup/${s.params.name}.html`)).text();e.value=t}),(n,t)=>(l(),i("main",{class:"bd-content",role:"main",innerHTML:e.value},null,8,d))}},h=a(p,[["__scopeId","data-v-908e9ac6"]]);export{h as default};
