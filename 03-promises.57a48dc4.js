!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t);var i=t("h6c0i"),c=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),r=document.querySelector('input[name="amount"]');function s(e,o){return new Promise((function(n,t){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}c.addEventListener("submit",(function(e){e.preventDefault();var o=parseInt(a.value),n=parseInt(l.value),t=parseInt(r.value),u=[];s(1,o).then((function(e){var o=e.position,n=e.delay;i.Notify.success("Fulfilled initial promise ".concat(o," in ").concat(n,"ms")),console.log("✅ Fulfilled initial promise ".concat(o," in ").concat(n,"ms")),c.reset()})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("Rejected initial promise ".concat(o," in ").concat(n,"ms")),console.log("❌ Rejected initial promise ".concat(o," in ").concat(n,"ms")),c.reset()}));for(var d=2;d<=t;d+=1){var f=s(d,o+n*(d-1));f.then((function(e){var o=e.position,n=e.delay;i.Notify.success("Fulfilled promise ".concat(o," in ").concat(n,"ms")),console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("Rejected promise ".concat(o," in ").concat(n,"ms")),console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),u.push(f)}Promise.all(u).then((function(e){e.position,e.delay;console.log("All promises have settled!")})).catch((function(){console.log("Error in Promise.all:")}))}))}();
//# sourceMappingURL=03-promises.57a48dc4.js.map