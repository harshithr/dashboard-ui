(this["webpackJsonpdashboard-ui"]=this["webpackJsonpdashboard-ui"]||[]).push([[0],{187:function(e,t,a){e.exports=a(362)},192:function(e,t,a){},193:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),c=a(25),i=a.n(c),o=(a(192),a(70)),s=a(71),m=a(77),d=a(79),u=(a(193),a(363)),p=a(51),E=a(181),y=a(368),g=a(76),h=a(366),f=a(367),b=a(50),x=a(364),v=a(376),k=a(377),w=a(378),S=a(379),I=a(380),N=a(381),j=a(382),z=a(375),O=a(383),C=a(384),T=a(385),D=a(386),A=a(387),L=a(388),R=a(389),W=a(370),M=a(390),H=a(391),B=a(392),J=(a(108),a(96)),F=a(369),U=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(J.a,{overlay:K,trigger:["click"]},r.a.createElement("a",{style:{color:"black"},className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},r.a.createElement(F.a,null)," Main Table ",r.a.createElement(W.a,{style:{marginLeft:"3px"}})))}}]),a}(l.Component),K=r.a.createElement(p.a,null,r.a.createElement(p.a.Item,{key:"0"},r.a.createElement("a",{href:"https://github.com/harshithr"},"1st menu item")),r.a.createElement(p.a.Item,{key:"1"},r.a.createElement("a",{href:"https://github.com/harshithr"},"2nd menu item")),r.a.createElement(p.a.Divider,null),r.a.createElement(p.a.Item,{key:"3"},"3rd menu item")),P=U,Z=a(185),$=a(365),_=a(107),q=a(371),G=a(372),Q=a(373),V=a(374),X=a(160),Y=a.n(X),ee=a(105),te=a.n(ee),ae=Object(_.c)((function(){return r.a.createElement(q.a,{style:{cursor:"pointer",color:"lightskyblue"}})})),ne=function(e,t){return r.a.createElement("div",{style:{backgroundColor:"".concat(t)},className:"priority-style"},r.a.createElement("span",{style:{paddingTop:"10px",color:"white"}},e))},le=[{title:"Sort",dataIndex:"sort",width:30,className:"drag-visible",render:function(){return r.a.createElement(ae,null)}},{title:"Items",dataIndex:"items",className:"drag-visible"},{title:"Owner",dataIndex:"owner"},{title:"Status",dataIndex:"status"},{title:"Due date",dataIndex:"duedate"},{title:"Priority",dataIndex:"priority"},{title:r.a.createElement(b.a,{style:{border:0}},r.a.createElement(V.a,{style:{backgroundColor:"white",fontSize:"15px"}})),dataindex:"addContent"}],re=[{key:"1",items:r.a.createElement("h1",{style:{marginTop:"5px",width:"300px"}},"New To Do Item"),owner:r.a.createElement(te.a,{icon:r.a.createElement(z.a,null)}),status:(n="Working on it",r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"status-style"},r.a.createElement("span",{style:{paddingTop:"10px",color:"white"}},n)),r.a.createElement(G.a,{style:{marginLeft:"10px",paddingTop:"15px"}}))),duedate:"Sep 26",priority:ne("Urgent","black"),index:0},{key:"2",items:r.a.createElement("h1",{style:{marginTop:"5px",width:"300px"}},"Complete Assessment"),owner:r.a.createElement(te.a,{icon:r.a.createElement(z.a,null)}),status:function(e){return r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"status-style2"},r.a.createElement("span",{style:{paddingTop:"10px",color:"white"}},e)),r.a.createElement(Q.a,{style:{marginLeft:"10px",paddingTop:"15px"}}))}("Done"),duedate:"Sep 27",priority:ne("Medium","blueviolet"),index:1},{key:"3",items:r.a.createElement(h.a,{placeholder:"+ ADD"}),owner:r.a.createElement(te.a,{icon:r.a.createElement(z.a,null)}),status:function(e,t){return r.a.createElement("div",{className:"status-style2",style:{backgroundColor:"".concat(t)}},r.a.createElement("span",{style:{paddingTop:"10px",color:"white"}},e))}("","grey"),duedate:"",priority:ne("","grey"),index:1}],ce=Object(_.b)((function(e){return r.a.createElement("tr",e)})),ie=Object(_.a)((function(e){return r.a.createElement("tbody",e)})),oe=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={dataSource:re},e.onAddRow=function(){var t=e.state.dataSource;e.setState({dataSource:t[2]+t[0]})},e.onSortEnd=function(t){var a=t.oldIndex,n=t.newIndex,l=e.state.dataSource;if(a!==n){var r=Y()([].concat(l),a,n).filter((function(e){return!!e}));console.log("Sorted items: ",r),e.setState({dataSource:r})}},e.DraggableBodyRow=function(t){t.className,t.style;var a=Object(Z.a)(t,["className","style"]),n=e.state.dataSource.findIndex((function(e){return e.index===a["data-row-key"]}));return r.a.createElement(ce,Object.assign({index:n},a))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.dataSource;return r.a.createElement($.a,{pagination:!1,dataSource:t,columns:le,rowKey:"index",components:{body:{wrapper:function(t){return r.a.createElement(ie,Object.assign({useDragHandle:!0,helperClass:"row-dragging",onSortEnd:e.onSortEnd},t))},row:this.DraggableBodyRow}}})}}]),a}(r.a.Component),se=u.a.Header,me=u.a.Content,de=u.a.Sider,ue=p.a.SubMenu,pe=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={collapsed:!1},e.onCollapse=function(t){console.log(t),e.setState({collapsed:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{style:{height:"100vh",flex:1}},r.a.createElement(de,{collapsed:!0},r.a.createElement("div",{className:"logo"},r.a.createElement(E.a,{size:40,src:"/dashboard-ui/logo_icon.png"})),r.a.createElement(y.b,{direction:"vertical",size:"large"},r.a.createElement(p.a,{theme:"dark"},r.a.createElement(p.a.Item,{key:"1",style:{padding:0,marginLeft:"35%"},icon:r.a.createElement(v.a,{style:{fontSize:"24px"}})},"Notifications"),r.a.createElement(p.a.Item,{key:"2",style:{padding:0,marginLeft:"35%"},icon:r.a.createElement(k.a,{style:{fontSize:"24px"}})},"Inbox"))),r.a.createElement("div",{className:"upgrade-button"},r.a.createElement(w.a,{style:{paddingRight:"6px",color:"white",marginTop:"25px"}}),r.a.createElement("span",{style:{color:"white"}},"Upgrade")),r.a.createElement(y.b,{direction:"vertical",size:"large",style:{flexDirection:"row",justifyContent:"center",alignItems:"center",position:"absolute",bottom:20,left:0}},r.a.createElement(p.a,{theme:"dark"},r.a.createElement(p.a.Item,{key:"1",style:{padding:0,marginLeft:"35%"},icon:r.a.createElement(S.a,{style:{fontSize:"24px"}})},"My Week"),r.a.createElement(p.a.Item,{key:"2",style:{padding:0,marginLeft:"35%"},icon:r.a.createElement(I.a,{style:{fontSize:"24px"}})},"Invite Members"),r.a.createElement(p.a.Item,{key:"3",style:{padding:0,marginLeft:"35%"},icon:r.a.createElement(N.a,{style:{fontSize:"24px"}})},"Search Everything"),r.a.createElement(p.a.Item,{key:"4",style:{padding:0,marginLeft:"35%"},icon:r.a.createElement(j.a,{style:{fontSize:"24px"}})},"Help"),r.a.createElement(E.a,{size:50,style:{padding:0,marginLeft:"20%"},icon:r.a.createElement(g.a,{title:"Harshith R",placement:"left"}," ",r.a.createElement(z.a,null)," ")})))),r.a.createElement(de,{theme:"light",style:{backgroundColor:"white"},collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},r.a.createElement(p.a,{mode:"inline"},r.a.createElement(p.a.Item,{key:"1",style:{fontSize:"24px",fontWeight:500}},"Workspaces"),r.a.createElement(p.a.Item,{key:"2"},r.a.createElement(h.a,{style:{padding:0,left:0},placeholder:"Filter boards...",bordered:!1,prefix:r.a.createElement(N.a,null)})),r.a.createElement(p.a.Item,{key:"3",icon:r.a.createElement(O.a,null)},"Add"),r.a.createElement(ue,{key:"sub1",icon:r.a.createElement(C.a,null),title:"Main",style:{fontSize:"16px"}},r.a.createElement(p.a.Item,{key:"4"},"Web Design"),r.a.createElement(p.a.Item,{key:"5"},"REACT JS")))),r.a.createElement(u.a,{className:"site-layout"},r.a.createElement(se,{className:"site-layout-background"},r.a.createElement("div",{style:{textAlign:"left",width:"100%"}},r.a.createElement(f.a,{className:"site-page-header-responsive",title:r.a.createElement("h1",{style:{fontSize:"30px",marginTop:"5px"}},"Web Design"),subTitle:r.a.createElement(T.a,{style:{fontSize:"20px",color:"lightgray"}}),extra:[r.a.createElement(b.a,{style:{border:0}},r.a.createElement("img",{src:"avataradd.jpg",width:"52"})),r.a.createElement(b.a,{shape:"round",size:"large",type:"default"},r.a.createElement(D.a,null),"/ 0"),r.a.createElement(b.a,{shape:"round",size:"large",type:"default"},r.a.createElement(A.a,null),"/ 0"),r.a.createElement(b.a,{shape:"round",size:"large",type:"default"},r.a.createElement("img",{src:"/dashboard-ui/zoom.png",width:"20",style:{marginRight:5}}),"Start Zoom call"),r.a.createElement(b.a,{size:"large",type:"default"},r.a.createElement(L.a,null)," / 1 ",r.a.createElement(x.a,{type:"vertical"})," Activities / 0"),r.a.createElement(b.a,{style:{border:0}},r.a.createElement("a",{href:"https://github.com/harshithr"},r.a.createElement(R.a,null)))]}))),r.a.createElement("div",{style:{backgroundColor:"#ffffff"}},r.a.createElement(h.a,{style:{marginLeft:"15px"},placeholder:"Add board description",bordered:!1})),r.a.createElement(me,{className:"site-layout-background",style:{padding:0,top:"0%"}},r.a.createElement(f.a,{className:"site-page-header-responsive",title:r.a.createElement(P,null),extra:[r.a.createElement(b.a,{shape:"round",type:"primary"},"New Item",r.a.createElement(x.a,{style:{color:"white"},type:"vertical"}),r.a.createElement(W.a,null)),r.a.createElement(h.a,{placeholder:"Search / Filter Board",style:{borderRadius:"20px",width:"200px"}}),r.a.createElement(b.a,{shape:"circle-outline",type:"default"},r.a.createElement(I.a,null)),r.a.createElement(b.a,{style:{border:0}},r.a.createElement(M.a,null)),r.a.createElement(b.a,{style:{border:0}},r.a.createElement(H.a,null))]}),r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement("h1",{style:{textAlign:"start",color:"lightskyblue"}},r.a.createElement(B.a,null)," Things to do"),r.a.createElement(oe,null)),r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement("h1",{style:{textAlign:"start",color:"lightskyblue"}},r.a.createElement(B.a,null)," Done"),r.a.createElement(oe,null))))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.01bf2746.chunk.js.map