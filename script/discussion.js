let DiscussionRuntime=()=>{window.setTimeout(DiscussionRuntime,3e3);var e=new Date("2024-07-18 12:40:08"),e=((new Date).getTime()-e.getTime())/864e5,n=Math.floor(e),e=24*(e-n),t=Math.floor(e),i=60*(e-t),e=Math.floor(60*(e-t)),i=Math.floor(60*(i-e)),s=document.getElementById("discussion_runtime_days"),o=document.getElementById("discussion_runtime_hours"),u=document.getElementById("discussion_runtime_minutes"),d=document.getElementById("discussion_runtime_seconds");s&&(s.innerHTML=n),o&&(o.innerHTML=t),u&&(u.innerHTML=e),d&&(d.innerHTML=i)};window.addEventListener("DOMContentLoaded",DiscussionRuntime);