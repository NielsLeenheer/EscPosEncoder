function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={exports:{}},s={html:{skipScheme:"html",lineBreakScheme:"html",whitespace:"collapse"}},i=/<\s*br(?:[\s/]*|\s[^>]*)>/gi,n={unix:[/\n/g,"\n"],dos:[/\r\n/g,"\r\n"],mac:[/\r/g,"\r"],html:[i,"<br>"],xhtml:[i,"<br/>"]},a={"ansi-color":/\x1B\[[^m]*m/g,html:/<[^>]*>/g,bbcode:/\[[^]]*\]/g},r={soft:1,hard:1},o={collapse:1,default:1,line:1,all:1},h={all:1,multi:1,none:1},c=/([sm])(\d+)/,l=/[-/\\^$*+?.()|[\]{}]/g;function p(e){return e.replace(l,"\\$&")}var d=t.exports=function(e,t,i){"object"==typeof e&&(e=(i=e).start,t=i.stop),"object"==typeof t&&(i=t,e=e||i.start,t=void 0),t||(t=e,e=0),i||(i={});var l,d,g,u,f,w,m,b,_,y,v,k,E,x,L,q,j,A,I="soft",B="default",M=4,R="all",S="",T="";if(l=i.preset)for(l instanceof Array||(l=[l]),A=0;A<l.length;A++){if(!(q=s[l[A]]))throw new TypeError('preset must be one of "'+Object.keys(s).join('", "')+'"');q.mode&&(I=q.mode),q.whitespace&&(B=q.whitespace),void 0!==q.tabWidth&&(M=q.tabWidth),q.skip&&(d=q.skip),q.skipScheme&&(g=q.skipScheme),q.lineBreak&&(u=q.lineBreak),q.lineBreakScheme&&(f=q.lineBreakScheme),q.respectLineBreaks&&(R=q.respectLineBreaks),void 0!==q.preservedLineIndent&&(m=q.preservedLineIndent),void 0!==q.wrapLineIndent&&(b=q.wrapLineIndent),q.wrapLineIndentBase&&(_=q.wrapLineIndentBase)}if(i.mode){if(!r[i.mode])throw new TypeError('mode must be one of "'+Object.keys(r).join('", "')+'"');I=i.mode}if(i.whitespace){if(!o[i.whitespace])throw new TypeError('whitespace must be one of "'+Object.keys(o).join('", "')+'"');B=i.whitespace}if(void 0!==i.tabWidth){if(!(parseInt(i.tabWidth,10)>=0))throw new TypeError("tabWidth must be a non-negative integer");M=parseInt(i.tabWidth,10)}if(L=new Array(M+1).join(" "),i.respectLineBreaks){if(!h[i.respectLineBreaks]&&!c.test(i.respectLineBreaks))throw new TypeError('respectLineBreaks must be one of "'+Object.keys(h).join('", "')+'", "m<num>", "s<num>"');R=i.respectLineBreaks}if("multi"===R)R="m",w=2;else if(!h[R]){var z=c.exec(R);R=z[1],w=parseInt(z[2],10)}if(void 0!==i.preservedLineIndent){if(!(parseInt(i.preservedLineIndent,10)>=0))throw new TypeError("preservedLineIndent must be a non-negative integer");m=parseInt(i.preservedLineIndent,10)}if(m>0&&(S=new Array(m+1).join(" ")),void 0!==i.wrapLineIndent){if(isNaN(parseInt(i.wrapLineIndent,10)))throw new TypeError("wrapLineIndent must be an integer");b=parseInt(i.wrapLineIndent,10)}if(i.wrapLineIndentBase&&(_=i.wrapLineIndentBase),_){if(void 0===b)throw new TypeError("wrapLineIndent must be specified when wrapLineIndentBase is specified");if(_ instanceof RegExp)x=_;else{if("string"!=typeof _)throw new TypeError("wrapLineIndentBase must be either a RegExp object or a string");x=new RegExp(p(_))}}else if(b>0)T=new Array(b+1).join(" ");else if(b<0)throw new TypeError("wrapLineIndent must be non-negative when a base is not specified");if(i.skipScheme){if(!a[i.skipScheme])throw new TypeError('skipScheme must be one of "'+Object.keys(a).join('", "')+'"');g=i.skipScheme}if(i.skip&&(d=i.skip),d)if(d instanceof RegExp)(y=d).global||(j="g",y.ignoreCase&&(j+="i"),y.multiline&&(j+="m"),y=new RegExp(y.source,j));else{if("string"!=typeof d)throw new TypeError("skip must be either a RegExp object or a string");y=new RegExp(p(d),"g")}if(!y&&g&&(y=a[g]),i.lineBreakScheme){if(!n[i.lineBreakScheme])throw new TypeError('lineBreakScheme must be one of "'+Object.keys(n).join('", "')+'"');f=i.lineBreakScheme}if(i.lineBreak&&(u=i.lineBreak),f&&(q=n[f])&&(v=q[0],k=q[1]),u)if(u instanceof Array&&(1===u.length?u=u[0]:u.length>=2&&(u[0]instanceof RegExp?(v=u[0],"string"==typeof u[1]&&(k=u[1])):u[1]instanceof RegExp?(v=u[1],"string"==typeof u[0]&&(k=u[0])):"string"==typeof u[0]&&"string"==typeof u[1]?(v=new RegExp(p(u[0]),"g"),k=u[1]):u=u[0])),"string"==typeof u)k=u,v||(v=new RegExp(p(u),"g"));else if(u instanceof RegExp)v=u;else if(!(u instanceof Array))throw new TypeError("lineBreak must be a RegExp object, a string, or an array consisted of a RegExp object and a string");v||(v=/\n/g,k="\n"),j="g",v.ignoreCase&&(j+="i"),v.multiline&&(j+="m"),E=new RegExp("\\s*(?:"+v.source+")(?:"+v.source+"|\\s)*",j),v.global||(v=new RegExp(v.source,j));var O="hard"===I?/\b/:/(\S+\s+)/,C=new Array(e+1).join(" "),U="default"===B||"collapse"===B,W="collapse"===B,N="line"===B,P="all"===B,G=/\t/g,H=/  +/g,K=/^\s+/,$=/\s+$/,F=/\S/,Q=/\s/,D=t-e;return function(s){var i;if(s=s.toString().replace(G,L),!k){if(v.lastIndex=0,!(i=v.exec(s)))throw new TypeError("Line break string for the output not specified");k=i[0]}var n,a,r,o,h,c,l,p,d,g=0;for(n=[],E.lastIndex=0,i=E.exec(s);i;){if(n.push(s.substring(g,i.index)),"none"!==R){for(r=[],o=0,v.lastIndex=0,a=v.exec(i[0]);a;)r.push(i[0].substring(o,a.index)),o=a.index+a[0].length,a=v.exec(i[0]);r.push(i[0].substring(o)),n.push({type:"break",breaks:r})}else h=W?" ":i[0].replace(v,""),n.push({type:"break",remaining:h});g=i.index+i[0].length,i=E.exec(s)}if(n.push(s.substring(g)),y)for(d=[],c=0;c<n.length;c++){var u=n[c];if("string"!=typeof u)d.push(u);else{for(g=0,y.lastIndex=0,i=y.exec(u);i;)d.push(u.substring(g,i.index)),d.push({type:"skip",value:i[0]}),g=i.index+i[0].length,i=y.exec(u);d.push(u.substring(g))}}else d=n;var f=[];for(c=0;c<d.length;c++){var m=d[c];if("string"!=typeof m)f.push(m);else{W&&(m=m.replace(H," "));var _=m.split(O),q=[];for(l=0;l<_.length;l++){var j=_[l];if("hard"===I)for(p=0;p<j.length;p+=D)q.push(j.slice(p,p+D));else q.push(j)}f=f.concat(q)}}var A,B=0,M=e+S.length,z=[C+S],V=0,J=!0,X=!0,Y=T;function Z(s){var i,n,a,r=z[B];if(P)M>t&&(V=V||t,a=r.length-(M-V),z[B]=r.substring(0,a)),V=0;else{for(i=r.length-1;i>=e&&" "===r[i];)i--;for(;i>=e&&Q.test(r[i]);)i--;++i!==r.length&&(z[B]=r.substring(0,i)),X&&J&&N&&M>t&&(a=r.length-(M-t))<i&&(a=i)}if(X&&(X=!1,x&&(i=z[B].substring(e).search(x),Y=i>=0&&i+b>0?new Array(i+b+1).join(" "):"")),a){for(;a+D<r.length;)P?(n=r.substring(a,a+D),z.push(C+Y+n)):z.push(C+Y),a+=D,B++;if(!s)return n=r.substring(a),Y+n;P?(n=r.substring(a),z.push(C+Y+n)):z.push(C+Y),B++}return""}for(c=0;c<f.length;c++){var ee=f[c];if(""!==ee)if("string"==typeof ee){for(var te;;){if(te=void 0,M+ee.length>t&&M+(te=ee.replace($,"")).length>t&&""!==te&&M>e){if(A=Z(!1),z.push(C+Y),B++,M=e+Y.length,A){z[B]+=A,M+=A.length,J=!0;continue}!U&&(!N||X&&J)||(ee=ee.replace(K,"")),J=!1}else J&&(U||N&&(!X||!J)?""!==(ee=ee.replace(K,""))&&(J=!1):F.test(ee)&&(J=!1));break}P&&te&&M+te.length>t&&(V=M+te.length),z[B]+=ee,M+=ee.length}else if("break"===ee.type)if("none"!==R){var se=ee.breaks,ie=se.length-1;if("s"===R){for(l=0;l<ie;l++)se[l+1].length<w?se[l+1]=W?" ":se[l]+se[l+1]:(P&&(z[B]+=se[l],M+=se[l].length),Z(!0),z.push(C+S),B++,M=e+S.length,X=J=!0);(!J||P||N&&X)&&((W||!J&&""===se[ie])&&(se[ie]=" "),z[B]+=se[ie],M+=se[ie].length)}else if("m"===R&&ie<w)(!J||P||N&&X)&&(W?ee=" ":(ee=se.join(""),J||""!==ee||(ee=" ")),z[B]+=ee,M+=ee.length);else if(U){for(Z(!0),l=0;l<ie;l++)z.push(C+S),B++;M=e+S.length,X=J=!0}else for((P||X&&J)&&(z[B]+=se[0],M+=se[0].length),l=0;l<ie;l++)Z(!0),z.push(C+S+se[l+1]),B++,M=e+S.length+se[l+1].length,X=J=!0}else(!J||P||N&&X)&&(ee=ee.remaining,(W||!J&&""===ee)&&(ee=" "),z[B]+=ee,M+=ee.length);else"skip"===ee.type&&(M>t&&(A=Z(!1),z.push(C+Y),B++,M=e+Y.length,A&&(z[B]+=A,M+=A.length),J=!0),z[B]+=ee.value)}return Z(!0),z.join(k)}};d.soft=d,d.hard=function(){var e=[].slice.call(arguments),t=e.length-1;return"object"==typeof e[t]?e[t].mode="hard":e.push({mode:"hard"}),d.apply(null,e)},d.wrap=function(e){var t=[].slice.call(arguments);return t.shift(),d.apply(null,t)(e)};var g=e(t.exports);var u=e(new class{grayscale(e){for(let t=0;t<e.data.length;t+=4){const s=.299*e.data[t]+.587*e.data[t+1]+.114*e.data[t+2];e.data.fill(s,t,t+3)}return e}threshold(e,t){for(let s=0;s<e.data.length;s+=4){const i=.299*e.data[s]+.587*e.data[s+1]+.114*e.data[s+2]<t?0:255;e.data.fill(i,s,s+3)}return e}bayer(e,t){const s=[[15,135,45,165],[195,75,225,105],[60,180,30,150],[240,120,210,90]];for(let i=0;i<e.data.length;i+=4){const n=.299*e.data[i]+.587*e.data[i+1]+.114*e.data[i+2],a=i/4%e.width,r=Math.floor(i/4/e.width),o=Math.floor((n+s[a%4][r%4])/2)<t?0:255;e.data.fill(o,i,i+3)}return e}floydsteinberg(e){const t=e.width,s=new Uint8ClampedArray(e.width*e.height);for(let t=0,i=0;i<e.data.length;t++,i+=4)s[t]=.299*e.data[i]+.587*e.data[i+1]+.114*e.data[i+2];for(let i=0,n=0;n<e.data.length;i++,n+=4){const a=s[i]<129?0:255,r=Math.floor((s[i]-a)/16);e.data.fill(a,n,n+3),s[i+1]+=7*r,s[i+t-1]+=3*r,s[i+t]+=5*r,s[i+t+1]+=1*r}return e}atkinson(e){const t=e.width,s=new Uint8ClampedArray(e.width*e.height);for(let t=0,i=0;i<e.data.length;t++,i+=4)s[t]=.299*e.data[i]+.587*e.data[i+1]+.114*e.data[i+2];for(let i=0,n=0;n<e.data.length;i++,n+=4){const a=s[i]<129?0:255,r=Math.floor((s[i]-a)/8);e.data.fill(a,n,n+3),s[i+1]+=r,s[i+2]+=r,s[i+t-1]+=r,s[i+t]+=r,s[i+t+1]+=r,s[i+2*t]+=r}return e}});var f=e(new class{flatten(e,t){for(let s=0;s<e.data.length;s+=4){const i=e.data[s+3],n=255-i;e.data[s]=(i*e.data[s]+n*t[0])/255,e.data[s+1]=(i*e.data[s+1]+n*t[1])/255,e.data[s+2]=(i*e.data[s+2]+n*t[2])/255,e.data[s+3]=255}return e}});const w={cp437:{name:"USA, Standard Europe",languages:["en"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp720:{name:"Arabic",languages:["ar"],offset:128,chars:"éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ "},cp737:{name:"Greek",languages:["el"],offset:128,chars:"ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "},cp775:{name:"Baltic Rim",languages:["et","lt"],offset:128,chars:"ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "},cp850:{name:"Multilingual",languages:["en"],offset:128,chars:"ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "},cp851:{name:"Greek",languages:["el"],offset:128,chars:"ÇüéâäàΆçêëèïîΈÄΉΊ ΌôöΎûùΏÖÜά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ´­±υφχ§ψ¸°¨ωϋΰώ■ "},cp852:{name:"Latin 2",languages:["hu","pl","cz"],offset:128,chars:"ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "},cp853:{name:"Turkish",languages:["tr"],offset:128,chars:"ÇüéâäàĉçêëèïîìÄĈÉċĊôöòûùİÖÜĝ£Ĝ×ĵáíóúñÑĞğĤĥ�½Ĵş«»░▒▓│┤ÁÂÀŞ╣║╗╝Żż┐└┴┬├─┼Ŝŝ╚╔╩╦╠═╬¤��ÊËÈıÍÎÏ┘┌█▄�Ì▀ÓßÔÒĠġµĦħÚÛÙŬŭ�´­�ℓŉ˘§÷¸°¨˙�³²■ "},cp855:{name:"Cyrillic",languages:["bg"],offset:128,chars:"ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "},cp857:{name:"Turkish",languages:["tr"],offset:128,chars:"ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "},cp858:{name:"Euro",languages:["en"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "},cp860:{name:"Portuguese",languages:["pt"],offset:128,chars:"ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp861:{name:"Icelandic",languages:["is"],offset:128,chars:"ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp862:{name:"Hebrew",languages:["he"],offset:128,chars:"אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp863:{name:"Canadian French",languages:["fr"],offset:128,chars:"ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp864:{name:"Arabic",languages:["ar"],offset:0,chars:"\0\b\t\n\v\f\r !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"},cp865:{name:"Nordic",languages:["sv","dk"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp866:{name:"Cyrillic 2",languages:["ru"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "},cp869:{name:"Greek",languages:["el"],offset:128,chars:"������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "},cp874:{name:"Thai",languages:["th"],offset:128,chars:"€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"},cp1098:{name:"Farsi",languages:["fa"],offset:128,chars:"  ،؛؟ًآﺂاﺎءأﺄؤﺋبﺑﭖﭘتﺗثﺛجﺟﭺﭼ×حﺣخﺧدذرزﮊسﺳشﺷصﺻ«»░▒▓│┤ضﺿﻁﻃ╣║╗╝¤ﻅ┐└┴┬├─┼ﻇع╚╔╩╦╠═╬ ﻊﻋﻌغﻎﻏﻐفﻓ┘┌█▄قﻗ▀ﮎﻛﮒﮔلﻟمﻣنﻧوهﻫﻬﮤﯼ­ﯽﯾـ٠١٢٣٤٥٦٧٨٩■ "},cp1118:{name:"Lithuanian",languages:["lt"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀αβΓπΣσµτΦΘΩδ∞φε⋂≡±≥≤„“÷≈°∙˙√ⁿ²■ "},cp1119:{name:"Lithuanian",languages:["lt"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁё≥≤„“÷≈°∙·√ⁿ²■ "},cp1125:{name:"Ukrainian",languages:["uk"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "},cp1162:{name:"Thai",languages:["th"],offset:128,chars:"€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"},cp2001:{name:"Lithuanian KBL or 771",languages:["lt"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█ĄąČčрстуфхцчшщъыьэюяĘęĖėĮįŠšŲųŪūŽž■ "},cp3001:{name:"Estonian 1 or 1116",languages:["et"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤šŠÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµžŽÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "},cp3002:{name:"Estonian 2",languages:["et"],offset:128,chars:" ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"},cp3011:{name:"Latvian 1",languages:["lv"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤Ā╢ņ╕╣║╗╝╜╛┐└┴┬├─┼ā╟╚╔╩╦╠═╬╧Š╤čČ╘╒ģĪī┘┌█▄ūŪ▀αßΓπΣσµτΦΘΩδ∞φε∩ĒēĢķĶļĻžŽ∙·√Ņš■ "},cp3012:{name:"Latvian 2 (modified 866)",languages:["lv"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤Ā╢ņ╕╣║╗╝Ō╛┐└┴┬├─┼ā╟╚╔╩╦╠═╬╧Š╤čČ╘╒ģĪī┘┌█▄ūŪ▀рстуфхцчшщъыьэюяĒēĢķĶļĻžŽō·√Ņš■ "},cp3021:{name:"Bulgarian (MIK)",languages:["bg"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3041:{name:"Maltese ISO 646",languages:["mt"],offset:0,chars:"\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZġżħ^_ċabcdefghijklmnopqrstuvwxyzĠŻĦĊ"},cp3840:{name:"Russian (modified 866)",languages:["ru"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюя≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3841:{name:"Ghost",languages:["ru"],offset:128,chars:"ғәёіїјҝөўүӽӈҹҷє£ҒӘЁІЇЈҜӨЎҮӼӇҸҶЄЪ !\"#$%&'()*+,-./0123456789:;<=>?юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧ∅"},cp3843:{name:"Polish (Mazovia)",languages:["pl"],offset:128,chars:"ÇüéâäàąçêëèïîćÄĄĘęłôöĆûùŚÖÜ¢Ł¥śƒŹŻóÓńŃźż¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3844:{name:"Czech (Kamenický)",languages:["cz"],offset:128,chars:"ČüéďäĎŤčěĚĹÍľĺÄÁÉžŽôöÓůÚýÖÜŠĽÝŘťáíóúňŇŮÔšřŕŔ¼§«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3845:{name:"Hungarian (CWI-2)",languages:["hu"],offset:128,chars:"ÇüéâäàåçêëèïîÍÄÁÉæÆőöÓűÚŰÖÜ¢£¥₧ƒáíóúñÑªŐ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3846:{name:"Turkish",languages:["tr"],offset:128,chars:"ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜ¢£¥ŞşáíóúñÑĞğ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3847:{name:"Brazil ABNT",languages:["pt"],offset:256,chars:""},cp3848:{name:"Brazil ABICOMP",languages:["pt"],offset:160,chars:" ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖŒÙÚÛÜŸ¨£¦§°¡àáâãäçèéêëìíîïñòóôõöœùúûüÿßªº¿±"},iso88591:{name:"Latin 1",languages:["en"],offset:128,chars:" ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},iso88592:{name:"Latin 2",languages:["hu","pl","cz"],offset:128,chars:" Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"},iso88597:{name:"Greek",languages:["el"],offset:128,chars:" ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"},iso885915:{name:"Latin 9",languages:["fr"],offset:128,chars:" ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},rk1048:{name:"Kazakh",languages:["kk"],offset:128,chars:"ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"},windows1250:{name:"Latin 2",languages:["hu","pl","cz"],offset:128,chars:"€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"},windows1251:{name:"Cyrillic",languages:["ru"],offset:128,chars:"ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"},windows1252:{name:"Latin",languages:["fr"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},windows1253:{name:"Greek",languages:["el"],offset:128,chars:"€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"},windows1254:{name:"Turkish",languages:["tr"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"},windows1255:{name:"Hebrew",languages:["he"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"},windows1256:{name:"Arabic",languages:["ar"],offset:128,chars:"€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"},windows1257:{name:"Baltic Rim",languages:["et","lt"],offset:128,chars:"€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"},windows1258:{name:"Vietnamese",languages:["vi"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"}},m={en:"The quick brown fox jumps over the lazy dog.",jp:"イロハニホヘト チリヌルヲ ワカヨタレソ ツネナラム",pt:"O próximo vôo à noite sobre o Atlântico, põe freqüentemente o único médico.",fr:"Les naïfs ægithales hâtifs pondant à Noël où il gèle sont sûrs d'être déçus en voyant leurs drôles d'œufs abîmés.",sv:"Flygande bäckasiner söka strax hwila på mjuka tuvor.",dk:"Quizdeltagerne spiste jordbær med fløde",el:"ξεσκεπάζω την ψυχοφθόρα βδελυγμία",tr:"Pijamalı hasta, yağız şoföre çabucak güvendi.",ru:"Съешь же ещё этих мягких французских булок да выпей чаю",hu:"Árvíztűrő tükörfúrógép",pl:"Pchnąć w tę łódź jeża lub ośm skrzyń fig",cz:"Mohu jíst sklo, neublíží mi.",ar:"أنا قادر على أكل الزجاج و هذا لا يؤلمني.",et:"Ma võin klaasi süüa, see ei tee mulle midagi.",lt:"Aš galiu valgyti stiklą ir jis manęs nežeidžia.",bg:"Мога да ям стъкло, то не ми вреди.",is:"Ég get etið gler án þess að meiða mig.",he:"אני יכול לאכול זכוכית וזה לא מזיק לי.",fa:".من می توانم بدونِ احساس درد شيشه بخورم",uk:"Я можу їсти скло, і воно мені не зашкодить.",vi:"Tôi có thể ăn thủy tinh mà không hại gì.",kk:"қазақша",lv:"Es varu ēst stiklu, tas man nekaitē.",mt:"Nista' niekol il-ħġieġ u ma jagħmilli xejn.",th:"ฉันกินกระจกได้ แต่มันไม่ทำให้ฉันเจ็บ"};class b{static getEncodings(){return Object.keys(w)}static getTestStrings(e){return void 0!==w[e]&&void 0!==w[e].languages?w[e].languages.map((e=>({language:e,string:m[e]}))):[]}static supports(e){return void 0!==w[e]&&void 0!==w[e].chars}static encode(e,t){const s=new Uint8Array(e.length);let i="\0".repeat(128),n=128;void 0!==w[t]&&void 0!==w[t].chars&&(i=w[t].chars,n=w[t].offset);for(let t=0;t<e.length;t++){const a=e.codePointAt(t);if(a<128)s[t]=a;else{const r=i.indexOf(e[t]);-1!==r?s[t]=n+r:a<256&&(a<n||a>=n+i.length)?s[t]=a:s[t]=63}}return s}static autoEncode(e,t){const s=[];let i,n=-1;for(let a=0;a<e.length;a++){const r=e.codePointAt(a);let o,h=0;if(r<128&&(o=i||t[0],h=r),!o&&i){const t=w[i].chars.indexOf(e[a]);-1!==t&&(o=i,h=w[i].offset+t)}if(!o)for(let s=0;s<t.length;s++){const i=w[t[s]].chars.indexOf(e[a]);if(-1!==i){o=t[s],h=w[t[s]].offset+i;break}}o||(o=i||t[0],h=63),i!=o&&(i&&(s[n].bytes=new Uint8Array(s[n].bytes)),n++,s[n]={codepage:o,bytes:[]},i=o),s[n].bytes.push(h)}return i&&(s[n].bytes=new Uint8Array(s[n].bytes)),s}}const _={epson:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,cp851:11,cp853:12,cp857:13,cp737:14,iso88597:15,windows1252:16,cp866:17,cp852:18,cp858:19,cp720:32,cp775:33,cp855:34,cp861:35,cp862:36,cp864:37,cp869:38,iso88592:39,iso885915:40,cp1098:41,cp1118:42,cp1119:43,cp1125:44,windows1250:45,windows1251:46,windows1253:47,windows1254:48,windows1255:49,windows1256:50,windows1257:51,windows1258:52,rk1048:53},zjiang:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,windows1252:16,cp866:17,cp852:18,cp858:19,windows1255:32,cp861:56,cp855:60,cp857:61,cp862:62,cp864:63,cp737:64,cp851:65,cp869:66,cp1119:68,cp1118:69,windows1250:72,windows1251:73,cp3840:74,cp3843:76,cp3844:77,cp3845:78,cp3846:79,cp3847:80,cp3848:81,cp2001:83,cp3001:84,cp3002:85,cp3011:86,cp3012:87,cp3021:88,cp3041:89,windows1253:90,windows1254:91,windows1256:92,cp720:93,windows1258:94,cp775:95},bixolon:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,cp851:11,cp858:19},star:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,windows1252:16,cp866:17,cp852:18,cp858:19},citizen:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,cp852:18,cp866:17,cp857:8,windows1252:16,cp858:19,cp864:40},xprinter:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,windows1252:16,cp866:17,cp852:18,cp858:19,windows1257:25,cp864:28,windows1255:32,windows1256:33,cp861:56,cp855:60,cp857:61,cp862:62,cp737:64,cp851:65,cp869:66,cp874:70,windows1250:72,windows1251:73,cp3840:74,cp3841:75,cp3843:76,cp3844:77,cp3845:78,cp3846:79,cp3847:80,cp3848:81,cp2001:83,cp3001:84,cp3002:85,cp3011:86,cp3012:87,cp3021:88,cp3041:89},legacy:{cp437:0,cp737:64,cp850:2,cp775:95,cp852:18,cp855:60,cp857:61,cp858:19,cp860:3,cp861:56,cp862:62,cp863:4,cp864:28,cp865:5,cp866:17,cp869:66,cp936:255,cp949:253,cp950:254,cp1252:16,iso88596:22,shiftjis:252,cp874:30,windows1250:72,windows1251:73,windows1252:71,windows1253:90,windows1254:91,windows1255:32,windows1256:92,windows1257:25,windows1258:94}};class y{constructor(e){this._options=Object.assign({width:null,embedded:!1,wordWrap:!0,imageMode:"column",codepageMapping:"epson",codepageCandidates:["cp437","cp858","cp860","cp861","cp863","cp865","cp852","cp857","cp855","cp866","cp869"]},e),this._reset()}_reset(){this._embedded=this._options.width&&this._options.embedded,this._buffer=[],this._queued=[],this._cursor=0,this._codepage="ascii",this._state={codepage:0,align:"left",bold:!1,italic:!1,underline:!1,invert:!1,width:1,height:1}}_encode(e){if("auto"!=this._codepage)return b.encode(e,this._codepage);let t;t="string"==typeof this._options.codepageMapping?_[this._options.codepageMapping]:this._options.codepageMapping;const s=b.autoEncode(e,this._options.codepageCandidates);let i=0;for(let e=0;e<s.length;e++)i+=3+s[e].bytes.byteLength;const n=new Uint8Array(i);let a=0;for(let e=0;e<s.length;e++)n.set([27,116,t[s[e].codepage]],a),n.set(s[e].bytes,a+3),a+=3+s[e].bytes.byteLength,this._state.codepage=t[s[e].codepage];return n}_queue(e){e.forEach((e=>this._queued.push(e)))}_flush(){if(this._embedded){let e=this._options.width-this._cursor;if("left"==this._state.align&&this._queued.push(new Array(e).fill(32)),"center"==this._state.align){const t=e%2;e>>=1,e>0&&this._queued.push(new Array(e).fill(32)),e+t>0&&this._queued.unshift(new Array(e+t).fill(32))}"right"==this._state.align&&this._queued.unshift(new Array(e).fill(32))}this._buffer=this._buffer.concat(this._queued),this._queued=[],this._cursor=0}_wrap(e,t){if(t||this._options.wordWrap&&this._options.width){const s="-".repeat(this._cursor);return g(t||this._options.width,{lineBreak:"\n",whitespace:"all"})(s+e).substring(this._cursor).split("\n")}return[e]}_restoreState(){this.bold(this._state.bold),this.italic(this._state.italic),this.underline(this._state.underline),this.invert(this._state.invert),this._queue([27,116,this._state.codepage])}_getCodepageIdentifier(e){let t;return t="string"==typeof this._options.codepageMapping?_[this._options.codepageMapping]:this._options.codepageMapping,t[e]}initialize(){return this._queue([27,64]),this._flush(),this}codepage(e){if("auto"===e)return this._codepage=e,this;if(!b.supports(e))throw new Error("Unknown codepage");let t;if(t="string"==typeof this._options.codepageMapping?_[this._options.codepageMapping]:this._options.codepageMapping,void 0===t[e])throw new Error("Codepage not supported by printer");return this._codepage=e,this._state.codepage=t[e],this._queue([27,116,t[e]]),this}text(e,t){const s=this._wrap(e,t);for(let e=0;e<s.length;e++){const t=this._encode(s[e]);this._queue([t]),this._cursor+=s[e].length*this._state.width,this._options.width&&!this._embedded&&(this._cursor=this._cursor%this._options.width),e<s.length-1&&this.newline()}return this}newline(){return this._flush(),this._queue([10,13]),this._embedded&&this._restoreState(),this}line(e,t){return this.text(e,t),this.newline(),this}underline(e){return void 0===e&&(e=!this._state.underline),this._state.underline=e,this._queue([27,45,Number(e)]),this}italic(e){return void 0===e&&(e=!this._state.italic),this._state.italic=e,this._queue([27,52,Number(e)]),this}bold(e){return void 0===e&&(e=!this._state.bold),this._state.bold=e,this._queue([27,69,Number(e)]),this}width(e){if(void 0===e&&(e=1),"number"!=typeof e)throw new Error("Width must be a number");if(e<1||e>8)throw new Error("Width must be between 1 and 8");return this._state.width=e,this._queue([29,33,this._state.height-1|this._state.width-1<<4]),this}height(e){if(void 0===e&&(e=1),"number"!=typeof e)throw new Error("Height must be a number");if(e<1||e>8)throw new Error("Height must be between 1 and 8");return this._state.height=e,this._queue([29,33,this._state.height-1|this._state.width-1<<4]),this}invert(e){return void 0===e&&(e=!this._state.invert),this._state.invert=e,this._queue([29,66,Number(e)]),this}size(e){return e="small"===e?1:0,this._queue([27,77,e]),this}align(e){const t={left:0,center:1,right:2};if(!(e in t))throw new Error("Unknown alignment");return this._state.align=e,this._embedded||this._queue([27,97,t[e]]),this}table(e,t){0!=this._cursor&&this.newline();for(let s=0;s<t.length;s++){const i=[];let n=0;for(let a=0;a<e.length;a++){const r=[];if("string"==typeof t[s][a]){const i=g(e[a].width,{lineBreak:"\n"})(t[s][a]).split("\n");for(let t=0;t<i.length;t++)"right"==e[a].align?r[t]=this._encode(i[t].padStart(e[a].width)):r[t]=this._encode(i[t].padEnd(e[a].width))}if("function"==typeof t[s][a]){const i=new y(Object.assign({},this._options,{width:e[a].width,embedded:!0}));i._codepage=this._codepage,i.align(e[a].align),t[s][a](i);const n=i.encode();let o=[];for(let e=0;e<n.byteLength;e++)e<n.byteLength-1&&10===n[e]&&13===n[e+1]?(r.push(o),o=[],e++):o.push(n[e]);o.length&&r.push(o)}n=Math.max(n,r.length),i[a]=r}for(let t=0;t<e.length;t++)if(i[t].length<n)for(let s=i[t].length;s<n;s++){let s="top";void 0!==e[t].verticalAlign&&(s=e[t].verticalAlign),"bottom"==s?i[t].unshift(new Array(e[t].width).fill(32)):i[t].push(new Array(e[t].width).fill(32))}for(let t=0;t<n;t++){for(let s=0;s<e.length;s++)void 0!==e[s].marginLeft&&this.raw(new Array(e[s].marginLeft).fill(32)),this.raw(i[s][t]),void 0!==e[s].marginRight&&this.raw(new Array(e[s].marginRight).fill(32));this.newline()}}return this}rule(e){return e=Object.assign({style:"single",width:this._options.width||10},e||{}),this._queue([27,116,this._getCodepageIdentifier("cp437"),new Array(e.width).fill("double"===e.style?205:196)]),this._queue([27,116,this._state.codepage]),this.newline(),this}box(e,t){let s;s="double"==(e=Object.assign({style:"single",width:this._options.width||30,marginLeft:0,marginRight:0,paddingLeft:0,paddingRight:0},e||{})).style?[201,187,200,188,205,186]:[218,191,192,217,196,179],0!=this._cursor&&this.newline(),this._restoreState(),this._queue([27,116,this._getCodepageIdentifier("cp437")]),this._queue([new Array(e.marginLeft).fill(32),s[0],new Array(e.width-2).fill(s[4]),s[1],new Array(e.marginRight).fill(32)]),this.newline();const i=[];if("string"==typeof t){const s=g(e.width-2-e.paddingLeft-e.paddingRight,{lineBreak:"\n"})(t).split("\n");for(let t=0;t<s.length;t++)"right"==e.align?i[t]=this._encode(s[t].padStart(e.width-2-e.paddingLeft-e.paddingRight)):i[t]=this._encode(s[t].padEnd(e.width-2-e.paddingLeft-e.paddingRight))}if("function"==typeof t){const s=new y(Object.assign({},this._options,{width:e.width-2-e.paddingLeft-e.paddingRight,embedded:!0}));s._codepage=this._codepage,s.align(e.align),t(s);const n=s.encode();let a=[];for(let e=0;e<n.byteLength;e++)e<n.byteLength-1&&10===n[e]&&13===n[e+1]?(i.push(a),a=[],e++):a.push(n[e]);a.length&&i.push(a)}for(let t=0;t<i.length;t++)this._queue([new Array(e.marginLeft).fill(32),s[5],new Array(e.paddingLeft).fill(32)]),this._queue([i[t]]),this._restoreState(),this._queue([27,116,this._getCodepageIdentifier("cp437")]),this._queue([new Array(e.paddingRight).fill(32),s[5],new Array(e.marginRight).fill(32)]),this.newline();return this._queue([new Array(e.marginLeft).fill(32),s[2],new Array(e.width-2).fill(s[4]),s[3],new Array(e.marginRight).fill(32)]),this._restoreState(),this.newline(),this}barcode(e,t,s){if(this._embedded)throw new Error("Barcodes are not supported in table cells or boxes");const i={upca:0,upce:1,ean13:2,ean8:3,code39:4,coda39:4,itf:5,codabar:6,code93:72,code128:73,"gs1-128":80,"gs1-databar-omni":81,"gs1-databar-truncated":82,"gs1-databar-limited":83,"gs1-databar-expanded":84,"code128-auto":85};if(!(t in i))throw new Error("Symbology not supported by printer");{const n=b.encode(e,"ascii");0!=this._cursor&&this.newline(),this._queue([29,104,s,29,119,"code39"===t?2:3]),"code128"==t&&123!==n[0]?this._queue([29,107,i[t],n.length+2,123,66,n]):i[t]>64?this._queue([29,107,i[t],n.length,n]):this._queue([29,107,i[t],n,0])}return this._flush(),this}qrcode(e,t,s,i){if(this._embedded)throw new Error("QR codes are not supported in table cells or boxes");this._queue([10]);const n={1:49,2:50};if(void 0===t&&(t=2),!(t in n))throw new Error("Model must be 1 or 2");if(this._queue([29,40,107,4,0,49,65,n[t],0]),void 0===s&&(s=6),"number"!=typeof s)throw new Error("Size must be a number");if(s<1||s>8)throw new Error("Size must be between 1 and 8");this._queue([29,40,107,3,0,49,67,s]);const a={l:48,m:49,q:50,h:51};if(void 0===i&&(i="m"),!(i in a))throw new Error("Error level must be l, m, q or h");this._queue([29,40,107,3,0,49,69,a[i]]);const r=b.encode(e,"iso88591"),o=r.length+3;return this._queue([29,40,107,o%255,o/255,49,80,48,r]),this._queue([29,40,107,3,0,49,81,48]),this._flush(),this}image(e,t,s,i,n){if(this._embedded)throw new Error("Images are not supported in table cells or boxes");if(t%8!=0)throw new Error("Width must be a multiple of 8");if(s%8!=0)throw new Error("Height must be a multiple of 8");void 0===i&&(i="threshold"),void 0===n&&(n=128);const a=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})}(t,s),r=a.getContext("2d");r.drawImage(e,0,0,t,s);let o=r.getImageData(0,0,t,s);switch(o=f.flatten(o,[255,255,255]),i){case"threshold":o=u.threshold(o,n);break;case"bayer":o=u.bayer(o,n);break;case"floydsteinberg":o=u.floydsteinberg(o);break;case"atkinson":o=u.atkinson(o)}const h=(e,i)=>e<t&&i<s?o.data[4*(t*i+e)]>0?0:1:0,c=(e,t)=>{const s=new Uint8Array(e*t>>3);for(let i=0;i<t;i++)for(let t=0;t<e;t+=8)for(let n=0;n<8;n++)s[i*(e>>3)+(t>>3)]|=h(t+n,i)<<7-n;return s};return 0!=this._cursor&&this.newline(),"column"==this._options.imageMode&&(this._queue([27,51,36]),((e,t)=>{const s=[];for(let i=0;i<Math.ceil(t/24);i++){const t=new Uint8Array(3*e);for(let s=0;s<e;s++)for(let e=0;e<3;e++)for(let n=0;n<8;n++)t[3*s+e]|=h(s,24*i+n+8*e)<<7-n;s.push(t)}return s})(t,s).forEach((e=>{this._queue([27,42,33,255&t,t>>8&255,e,10])})),this._queue([27,50])),"raster"==this._options.imageMode&&this._queue([29,118,48,0,t>>3&255,t>>3>>8&255,255&s,s>>8&255,c(t,s)]),this._flush(),this}cut(e){if(this._embedded)throw new Error("Cut is not supported in table cells or boxes");let t=0;return"partial"==e&&(t=1),this._queue([29,86,t]),this}pulse(e,t,s){if(this._embedded)throw new Error("Pulse is not supported in table cells or boxes");return void 0===e&&(e=0),void 0===t&&(t=100),void 0===s&&(s=500),t=Math.min(500,Math.round(t/2)),s=Math.min(500,Math.round(s/2)),this._queue([27,112,e?1:0,255&t,255&s]),this}raw(e){return this._queue(e),this}encode(){this._flush();let e=0;this._buffer.forEach((t=>{"number"==typeof t?e++:e+=t.length}));const t=new Uint8Array(e);let s=0;return this._buffer.forEach((e=>{"number"==typeof e?(t[s]=e,s++):(t.set(e,s),s+=e.length)})),this._reset(),t}}export{y as default};
