(()=>{async function o(e){let a=await chrome.storage.sync.get([e]);return JSON.parse(a[e])}var r=document.querySelector("input[name='hide-player']"),c=document.querySelector("input[name='stop-radio']");r.addEventListener("click",async()=>{let e=r.checked,a=e.toString();await chrome.storage.sync.set({radioPanelState:a});try{let[t]=await chrome.tabs.query({active:!0,lastFocusedWindow:!0});await chrome.tabs.sendMessage(t.id,{action:"hide-radio-panel",radioPanelStatus:e})}catch(t){console.error(t)}});c.addEventListener("click",async()=>{let e=c.checked,a=e.toString();await chrome.storage.sync.set({radioPlayerStatus:a});try{let[t]=await chrome.tabs.query({active:!0,lastFocusedWindow:!0});await chrome.tabs.sendMessage(t.id,{action:"radio-player-click",radioPlayerStatus:e})}catch(t){console.error(t)}});document.addEventListener("DOMContentLoaded",async()=>{let e=await o("radioPanelStatus"),a=await o("radioPlayerStatus");r.checked=e,c.checked=a});})();
