(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61fbf266"],{9406:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Plotly",{attrs:{data:t.getdate_data,layout:t.date_layout,"display-mode-bar":!1}}),t._v(" "),a("div"),t._v(" "),a("div",{staticClass:"mydivclass1"},[a("Plotly",{attrs:{data:t.data,layout:t.layout,"display-mode-bar":!1}})],1),t._v(" "),a("div",{staticClass:"mydivclass1"},[a("Plotly",{attrs:{data:t.data2,layout:t.layout2,"display-mode-bar":!1},on:{click:t.rdclick}})],1),t._v(" "),a("div",[a("b-table",{staticClass:"mytableclass",attrs:{striped:"",hover:"",items:t.items,fields:t.fields,bordered:"",fixed:""}})],1)],1)},s=[],i=a("04d1"),o=a("c098b"),r=a.n(o),n={mounted:function(){console.log(this.getdate_data)},methods:{rdclick:function(t){console.log(t)}},computed:{getdate_data:function(){Date.prototype.getWeek=function(){var t=new Date(this.getFullYear(),0,1);return Math.ceil(((this-t)/864e5+t.getDay()+1)/7)};var t=new Date,e=new Date(t.getFullYear(),0,1),a=[],l=[],s=[],i=[],o=[],r=[[!1,"#eeeeee"],[!0,"#76cf63"]];while(e.getFullYear()===t.getFullYear())a.push(e),s.push(e.getDay()),i.push(e.getMonth()+1+"月 - 周："+e.getWeek()),Math.floor(10*Math.random())>5?o.push(10):o.push(0),l.push(e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()),e.setDate(e.getDate()+1);var n=[{type:"heatmap",x:i,y:s,z:o,text:l,hoverinfo:"text",xgap:3,ygap:3,showscale:!1,colorscale:r}];return n}},components:{Plotly:i["Plotly"],heatmap:r.a},data:function(){return{date_layout:{title:"activity chart",height:280,yaxis:{showline:!1,showgrid:!1,zeroline:!1,tickmode:"array",ticktext:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tickvals:[1,2,3,4,5,6,0]},xaxis:{showline:!1,showgrid:!1,zeroline:!1},font:{size:"10",color:"#9e9e9e"},plot_bgcolor:"#fff",margin:{t:40}},fields:[{key:"last_name",sortable:!0},{key:"first_name",sortable:!1},{key:"age",label:"Person age",sortable:!0,variant:"danger"}],items:[{isActive:!0,age:40,first_name:"Dickerson111111111111111111111111111111111111111111111",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson"},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}],data:[{x:[1,2,3,4],y:[10,15,13,17],type:"scatter"}],layout:{title:"My graph"},data2:[{type:"scatterpolar",r:[39,28,8,7,28,39],theta:["A","B","C","D","E","A"],fill:"toself"}],layout2:{polar:{radialaxis:{visible:!0,range:[0,50]}},title:"My graph2",showlegend:!1}}}},d=n,c=(a("f618"),a("2877")),u=Object(c["a"])(d,l,s,!1,null,"5145c0d8",null);e["default"]=u.exports},f618:function(t,e,a){"use strict";var l=a("fbee"),s=a.n(l);s.a},fbee:function(t,e,a){}}]);