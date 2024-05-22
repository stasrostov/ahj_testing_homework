!function(){"use strict";class t{constructor(t){this._createElement(t)}_createElement(t){const e=document.createElement(t);e.classList.add(`${t}_validate`),this._element=e}get element(){return this._element}}class e{constructor(){this._createForm()}_createForm(){this.form=new t("form").element,this.input=new t("input").element,this.button=new t("button").element,this.button.textContent="Click to Validate",this.form.appendChild(this.input),this.form.appendChild(this.button),this._element=this.form}get element(){return this._element}}(new class{constructor(){this.form=new e,this.setListeners(),this.icons}drawContainer(){const t=document.createElement("div");t.classList.add("container");const e=document.createElement("div");e.classList.add("iconContainer_validate"),t.appendChild(e),t.appendChild(this.form.element),document.children[0].children[1].appendChild(t),this._drawIcons(e)}_drawIcons(t){const e=document.createElement("img");e.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSG4HpDNA9-KhhonjmQ0-zqK41eJhFGbeKA&usqp=CAU"),e.setAttribute("alt","visa"),t.appendChild(e);const i=document.createElement("img");i.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"),i.setAttribute("alt","masterCard"),t.appendChild(i);const s=document.createElement("img");s.setAttribute("src","https://static-00.iconduck.com/assets.00/discover-icon-2048x1313-4euh7fjo.png"),s.setAttribute("alt","discover"),t.appendChild(s);const n=document.createElement("img");n.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png"),n.setAttribute("alt","amex"),t.appendChild(n);const a=document.createElement("img");a.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/2560px-Mir-logo.SVG.svg.png"),a.setAttribute("alt","mir"),t.appendChild(a),this.icons=Array.from(document.querySelectorAll("img")),this.icons.forEach((t=>{t.classList.add("icon_active"),t.classList.add(`icon_${t.alt}`)}))}setListeners(){this.form.element.addEventListener("submit",(t=>{t.preventDefault();const e=this.form.element.querySelector(".input_validate").value;if(function(t){const e=t.split("").filter((t=>" "!==t)).map((t=>Number(t)));let i=0;if(e.length%2==0)for(let t=0;t<e.length;t++)if(0===t||t%2==0){const s=2*e[t];i+=s>9?s-9:s}else i+=e[t];else for(let t=0;t<e.length;t++)if(0===t||t%2==0)i+=e[t];else if(t%2!=0){const s=2*e[t];i+=s<9?s:s-9}return i%10==0}(e)){const t=(i=e,["44","45","40","47","49","43"].find((t=>i.startsWith(t)))?"visa":["53","52","27","55","2221","51","54"].find((t=>i.startsWith(t)))?"masterCard":i.startsWith("60")?"discover":["34","37"].find((t=>i.startsWith(t)))?"amex":["2202","2200"].find((t=>i.startsWith(t)))?"mir":void 0);this.icons.forEach((e=>{e.classList.contains(`icon_${t}`)?(e.classList.remove("icon_inactive"),e.classList.add("icon_active")):(e.classList.remove("icon_active"),e.classList.add("icon_inactive"))}))}else this.icons.forEach((t=>{t.classList.remove("icon_inactive"),t.classList.add("icon_active")}));var i})),this.form.element.querySelector(".input_validate").addEventListener("input",(t=>{""===t.target.value&&(console.log(t.target.value),this.icons.forEach((t=>t.classList.remove("icon_inactive"))))}))}}).drawContainer()}();
//# sourceMappingURL=main.js.map