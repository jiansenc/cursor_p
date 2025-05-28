"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4442a8ed-ddad-54e4-95cb-ee35da00ec38")}catch(e){}}();
(function(){const{ipcRenderer:o,webFrame:n,contextBridge:s}=require("electron");function t(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}const i={ipcRenderer:{send(e,...r){t(e)&&o.send(e,...r)},invoke(e,...r){return t(e),o.invoke(e,...r)}},webFrame:{setZoomLevel(e){typeof e=="number"&&n.setZoomLevel(e)}}};try{s.exposeInMainWorld("vscode",i)}catch(e){console.error(e)}})();

//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/f3f2ad556456ff2df80332923bb1e2a818110d10/core/vs\base\parts\sandbox\electron-sandbox\preload-aux.js.map

//# debugId=4442a8ed-ddad-54e4-95cb-ee35da00ec38
