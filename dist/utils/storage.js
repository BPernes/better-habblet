(()=>{async function a(e){let t=await chrome.storage.sync.get([e]);return JSON.parse(t[e])}})();
