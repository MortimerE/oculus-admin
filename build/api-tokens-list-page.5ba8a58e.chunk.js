"use strict";(self.webpackChunkpc_admin=self.webpackChunkpc_admin||[]).push([[8056],{8421:(Be,O,s)=>{s.r(O),s.d(O,{default:()=>Se});var n=s(67294),r=s(68547),L=s(87751),h=s(97132),b=s(23724),D=s(49656),G=s(80129),Y=s.n(G),J=s(67838),K=s(49066),X=s(185),q=s(29728),S=s(96315),I=s(23998);const _=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var ee=s(45697),o=s.n(ee),T=s(72735),te=s(550),ne=s(47144),g=s(18374),ae=s(46273),se=s(20022),oe=s(12028),re=s(35961),le=Object.defineProperty,M=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,R=(a,e,t)=>e in a?le(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,de=(a,e)=>{for(var t in e||(e={}))ie.call(e,t)&&R(a,t,e[t]);if(M)for(var t of M(e))ce.call(e,t)&&R(a,t,e[t]);return a};const N=({tokenName:a,onClickDelete:e})=>{const{formatMessage:t}=(0,h.useIntl)(),{trackUsage:u}=(0,r.useTracking)();return n.createElement(re.x,de({paddingLeft:1},r.stopPropagation),n.createElement(oe.h,{onClick:()=>{u("willDeleteToken"),e()},label:t({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${a}`}),name:"delete",noBorder:!0,icon:n.createElement(se.default,null)}))};N.propTypes={tokenName:o().string.isRequired,onClickDelete:o().func.isRequired};const ue=N;var me=s(4585),pe=s(71893);const fe={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},ye=(0,pe.default)(r.Link)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,k=({tokenName:a,tokenId:e,buttonType:t,children:u})=>{const{formatMessage:m}=(0,h.useIntl)(),{location:{pathname:p}}=(0,D.useHistory)();return n.createElement(ye,{to:`${p}/${e}`,title:m(fe[t],{target:a})},u)};k.propTypes={tokenName:o().string.isRequired,tokenId:o().oneOfType([o().string,o().number]).isRequired,buttonType:o().string,children:o().node.isRequired},k.defaultProps={buttonType:"edit"};const B=k,V=({tokenName:a,tokenId:e})=>n.createElement(B,{tokenName:a,tokenId:e},n.createElement(me.Z,null));V.propTypes={tokenName:o().string.isRequired,tokenId:o().oneOfType([o().string,o().number]).isRequired};const ge=V;var ve=s(8934);const U=({tokenName:a,tokenId:e})=>n.createElement(B,{tokenName:a,tokenId:e,buttonType:"read"},n.createElement(ve.default,null));U.propTypes={tokenName:o().string.isRequired,tokenId:o().oneOfType([o().string,o().number]).isRequired};const Te=U;var Ee=Object.defineProperty,j=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,x=(a,e,t)=>e in a?Ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,be=(a,e)=>{for(var t in e||(e={}))Pe.call(e,t)&&x(a,t,e[t]);if(j)for(var t of j(e))he.call(e,t)&&x(a,t,e[t]);return a};const A=({canDelete:a,canUpdate:e,canRead:t,onClickDelete:u,withBulkActions:m,rows:p})=>{const[{query:d}]=(0,r.useQueryParams)(),[,f]=d.sort.split(":"),{push:i,location:{pathname:y}}=(0,D.useHistory)(),{trackUsage:E}=(0,r.useTracking)(),C=p.sort((l,v)=>{const P=l.name.localeCompare(v.name);return f==="DESC"?-P:P});return n.createElement(te.p,null,C.map(l=>n.createElement(ne.Tr,be({key:l.id},(0,r.onRowClick)({fn(){E("willEditTokenFromList"),i(`${y}/${l.id}`)},condition:e})),n.createElement(g.Td,null,n.createElement(T.Z,{textColor:"neutral800",fontWeight:"bold"},l.name)),n.createElement(g.Td,{maxWidth:(0,r.pxToRem)(250)},n.createElement(T.Z,{textColor:"neutral800",ellipsis:!0},l.description)),n.createElement(g.Td,null,n.createElement(T.Z,{textColor:"neutral800"},n.createElement(r.RelativeTime,{timestamp:new Date(l.createdAt)}))),n.createElement(g.Td,null,l.lastUsedAt&&n.createElement(T.Z,{textColor:"neutral800"},n.createElement(r.RelativeTime,{timestamp:new Date(l.lastUsedAt)}))),m&&n.createElement(g.Td,null,n.createElement(ae.k,{justifyContent:"end"},e&&n.createElement(ge,{tokenName:l.name,tokenId:l.id}),!e&&t&&n.createElement(Te,{tokenName:l.name,tokenId:l.id}),a&&n.createElement(ue,{tokenName:l.name,onClickDelete:()=>u(l.id)}))))))};A.defaultProps={canDelete:!1,canUpdate:!1,canRead:!1,onClickDelete(){},rows:[],withBulkActions:!1},A.propTypes={canDelete:o().bool,canUpdate:o().bool,canRead:o().bool,onClickDelete:o().func,rows:o().array,withBulkActions:o().bool};const De=A;var ke=Object.defineProperty,Ae=Object.defineProperties,we=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,H=(a,e,t)=>e in a?ke(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Z=(a,e)=>{for(var t in e||(e={}))Ce.call(e,t)&&H(a,t,e[t]);if($)for(var t of $(e))Oe.call(e,t)&&H(a,t,e[t]);return a},F=(a,e)=>Ae(a,we(e)),w=(a,e,t)=>new Promise((u,m)=>{var p=i=>{try{f(t.next(i))}catch(y){m(y)}},d=i=>{try{f(t.throw(i))}catch(y){m(y)}},f=i=>i.done?u(i.value):Promise.resolve(i.value).then(p,d);f((t=t.apply(a,e)).next())});const Le=()=>{(0,r.useFocusWhenNavigate)();const a=(0,b.useQueryClient)(),{formatMessage:e}=(0,h.useIntl)(),t=(0,r.useNotification)(),{allowedActions:{canCreate:u,canDelete:m,canUpdate:p,canRead:d}}=(0,r.useRBAC)(L.Z.settings["api-tokens"]),{push:f}=(0,D.useHistory)(),{trackUsage:i}=(0,r.useTracking)(),{startSection:y}=(0,r.useGuidedTour)(),E=(0,n.useRef)(y);(0,n.useEffect)(()=>{E.current&&E.current("apiTokens")},[]),(0,n.useEffect)(()=>{f({search:Y().stringify({sort:"name:ASC"},{encode:!1})})},[f]);const C=_.map(c=>F(Z({},c),{metadatas:F(Z({},c.metadatas),{label:e(c.metadatas.label)})})),{data:l,status:v,isFetching:P}=(0,b.useQuery)(["api-tokens"],()=>w(void 0,null,function*(){i("willAccessTokenList");const{data:{data:c}}=yield I.be.get("/admin/api-tokens");return i("didAccessTokenList",{number:c.length}),c}),{enabled:d,onError(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Q=d&&(v!=="success"&&v!=="error"||v==="success"&&P),Ie=(0,b.useMutation)(c=>w(void 0,null,function*(){yield I.be.delete(`/admin/api-tokens/${c}`)}),{onSuccess(){return w(this,null,function*(){yield a.invalidateQueries(["api-tokens"]),i("didDeleteToken")})},onError(c){var W,z;(z=(W=c==null?void 0:c.response)==null?void 0:W.data)!=null&&z.data?t({type:"warning",message:c.response.data.data}):t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Me=d&&l,Re=d&&!l&&!u,Ne=d&&!l&&u;return n.createElement(X.o,{"aria-busy":Q},n.createElement(r.SettingsPageTitle,{name:"API Tokens"}),n.createElement(J.T,{title:e({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:e({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:u?n.createElement(r.LinkButton,{"data-testid":"create-api-token-button",startIcon:n.createElement(S.default,null),size:"S",onClick:()=>i("willAddTokenFromList"),to:"/settings/api-tokens/create"},e({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),n.createElement(K.D,null,!d&&n.createElement(r.NoPermissions,null),Me&&n.createElement(r.DynamicTable,{headers:C,contentType:"api-tokens",rows:l,withBulkActions:m||p||d,isLoading:Q,onConfirmDelete:c=>Ie.mutateAsync(c)},n.createElement(De,{canRead:d,canDelete:m,canUpdate:p,rows:l,withBulkActions:m||p||d})),Ne&&n.createElement(r.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:n.createElement(q.z,{variant:"secondary",startIcon:n.createElement(S.default,null)},e({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),Re&&n.createElement(r.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},Se=()=>n.createElement(r.CheckPagePermissions,{permissions:L.Z.settings["api-tokens"].main},n.createElement(Le,null))}}]);
