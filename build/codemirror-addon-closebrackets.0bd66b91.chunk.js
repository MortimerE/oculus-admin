(self.webpackChunkpc_admin=self.webpackChunkpc_admin||[]).push([[5178],{82801:(z,D,E)=>{(function(s){s(E(4631))})(function(s){var w={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},f=s.Pos;s.defineOption("autoCloseBrackets",!1,function(e,t,n){n&&n!=s.Init&&(e.removeKeyMap(c),e.state.closeBrackets=null),t&&(R(k(t,"pairs")),e.state.closeBrackets=t,e.addKeyMap(c))});function k(e,t){return t=="pairs"&&typeof e=="string"?e:typeof e=="object"&&e[t]!=null?e[t]:w[t]}var c={Backspace:K,Enter:L};function R(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),i="'"+n+"'";c[i]||(c[i]=F(n))}}R(w.pairs+"`");function F(e){return function(t){return j(t,e)}}function B(e){var t=e.state.closeBrackets;if(!t||t.override)return t;var n=e.getModeAt(e.getCursor());return n.closeBrackets||t}function K(e){var t=B(e);if(!t||e.getOption("disableInput"))return s.Pass;for(var n=k(t,"pairs"),i=e.listSelections(),a=0;a<i.length;a++){if(!i[a].empty())return s.Pass;var o=x(e,i[a].head);if(!o||n.indexOf(o)%2!=0)return s.Pass}for(var a=i.length-1;a>=0;a--){var l=i[a].head;e.replaceRange("",f(l.line,l.ch-1),f(l.line,l.ch+1),"+delete")}}function L(e){var t=B(e),n=t&&k(t,"explode");if(!n||e.getOption("disableInput"))return s.Pass;for(var i=e.listSelections(),a=0;a<i.length;a++){if(!i[a].empty())return s.Pass;var o=x(e,i[a].head);if(!o||n.indexOf(o)%2!=0)return s.Pass}e.operation(function(){var l=e.lineSeparator()||`
`;e.replaceSelection(l+l,null),S(e,-1),i=e.listSelections();for(var h=0;h<i.length;h++){var b=i[h].head.line;e.indentLine(b,null,!0),e.indentLine(b+1,null,!0)}})}function S(e,t){for(var n=[],i=e.listSelections(),a=0,o=0;o<i.length;o++){var l=i[o];l.head==e.getCursor()&&(a=o);var h=l.head.ch||t>0?{line:l.head.line,ch:l.head.ch+t}:{line:l.head.line-1};n.push({anchor:h,head:h})}e.setSelections(n,a)}function W(e){var t=s.cmpPos(e.anchor,e.head)>0;return{anchor:new f(e.anchor.line,e.anchor.ch+(t?-1:1)),head:new f(e.head.line,e.head.ch+(t?1:-1))}}function j(e,t){var n=B(e);if(!n||e.getOption("disableInput"))return s.Pass;var i=k(n,"pairs"),a=i.indexOf(t);if(a==-1)return s.Pass;for(var o=k(n,"closeBefore"),l=k(n,"triples"),h=i.charAt(a+1)==t,b=e.listSelections(),O=a%2==0,g,A=0;A<b.length;A++){var y=b[A],r=y.head,v,P=e.getRange(r,f(r.line,r.ch+1));if(O&&!y.empty())v="surround";else if((h||!O)&&P==t)h&&q(e,r)?v="both":l.indexOf(t)>=0&&e.getRange(r,f(r.line,r.ch+3))==t+t+t?v="skipThree":v="skip";else if(h&&r.ch>1&&l.indexOf(t)>=0&&e.getRange(f(r.line,r.ch-2),r)==t+t){if(r.ch>2&&/\bstring/.test(e.getTokenTypeAt(f(r.line,r.ch-2))))return s.Pass;v="addFour"}else if(h){var I=r.ch==0?" ":e.getRange(f(r.line,r.ch-1),r);if(!s.isWordChar(P)&&I!=t&&!s.isWordChar(I))v="both";else return s.Pass}else if(O&&(P.length===0||/\s/.test(P)||o.indexOf(P)>-1))v="both";else return s.Pass;if(!g)g=v;else if(g!=v)return s.Pass}var d=a%2?i.charAt(a-1):t,_=a%2?t:i.charAt(a+1);e.operation(function(){if(g=="skip")S(e,1);else if(g=="skipThree")S(e,3);else if(g=="surround"){for(var p=e.getSelections(),u=0;u<p.length;u++)p[u]=d+p[u]+_;e.replaceSelections(p,"around"),p=e.listSelections().slice();for(var u=0;u<p.length;u++)p[u]=W(p[u]);e.setSelections(p)}else g=="both"?(e.replaceSelection(d+_,null),e.triggerElectric(d+_),S(e,-1)):g=="addFour"&&(e.replaceSelection(d+d+d+d,"before"),S(e,1))})}function x(e,t){var n=e.getRange(f(t.line,t.ch-1),f(t.line,t.ch+1));return n.length==2?n:null}function q(e,t){var n=e.getTokenAt(f(t.line,t.ch+1));return/\bstring/.test(n.type)&&n.start==t.ch&&(t.ch==0||!/\bstring/.test(e.getTokenTypeAt(t)))}})}}]);
