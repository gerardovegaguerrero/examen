(this.webpackJsonpexamen1=this.webpackJsonpexamen1||[]).push([[0],{19:function(a,c,e){},22:function(a,c,e){"use strict";e.r(c);var i=e(1),t=e.n(i),r=e(11),n=e.n(r),o=(e(19),e(2)),s=e(3),l=e(4),d=e(6),p=e(5),m=(e(7),e(20),e.p+"static/media/cinemex.261a0894.jpg"),j=e(0),u=function(a){Object(d.a)(e,a);var c=Object(p.a)(e);function e(){return Object(s.a)(this,e),c.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App-header",children:Object(j.jsx)("img",{style:{height:"10vh",alignitems:"center"},src:m,className:"Logo",alt:"logo"})})}}]),e}(i.Component),h=u,b=e(23),O=function(a){Object(d.a)(e,a);var c=Object(p.a)(e);function e(){return Object(s.a)(this,e),c.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){var a=this;return Object(j.jsxs)("div",{className:"cartel",children:[Object(j.jsx)("h1",{children:"cartelera"}),this.props.peliculas.map((function(c,e){return Object(j.jsxs)("div",{className:"contenedor",children:[Object(j.jsx)("div",{className:"imagen",children:Object(j.jsx)("img",{style:{height:"30vh",alignitems:"center"},src:c.url,className:"Logo",alt:"logo"})}),Object(j.jsxs)("div",{className:"informacion",children:[Object(j.jsx)("p",{children:c.nombre}),Object(j.jsx)("z",{children:c.idioma}),Object(j.jsx)("z",{children:c.clasificacion}),Object(j.jsx)("z",{children:c.duracion}),Object(j.jsx)("div",{className:"Horarios",children:c.horarios.map((function(e,i){return Object(j.jsx)(b.a,{variant:"dark",onClick:function(){return a.props.agregar(c,e)},children:e},i)}))})]})]},e)}))]})}}]),e}(i.Component),g=O,f=function(a){Object(d.a)(e,a);var c=Object(p.a)(e);function e(){return Object(s.a)(this,e),c.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){var a=this;return Object(j.jsx)("div",{className:"Lista",children:0!==Object.keys(this.props.compra).length?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Taquilla"}),Object(j.jsxs)("div",{className:"Ticket",children:[Object(j.jsxs)("p",{children:[this.props.compra.nombre," (",this.props.compra.idioma,")"]}),Object(j.jsxs)("p",{children:["Hora: ",this.props.compra.horario]}),Object(j.jsxs)("p",{children:["Cantidad:",Object(j.jsx)("input",{type:"number",className:"text-center",style:{width:"15vmin"},value:this.props.compra.cantidad,onChange:function(c){return a.props.calcular(c.target.value,a.props.compra)}})]}),Object(j.jsxs)("p",{children:["Total: $",this.props.compra.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")]}),Object(j.jsxs)("div",{className:"Botones",children:[Object(j.jsx)(b.a,{onClick:function(){return a.props.eliminarCompra()},variant:"danger",children:"Cancelar"}),Object(j.jsx)(b.a,{onClick:function(){return a.props.comprar(a.props.compra)},variant:"success",children:"Comprar"})]})]})]}):Object(j.jsx)("div",{className:"alternativa",children:Object(j.jsx)("p",{children:"Selecciona una pel\xedcula dando click en su horario"})})})}}]),e}(i.Component),x=f,v=function(a){Object(d.a)(e,a);var c=Object(p.a)(e);function e(){var a;return Object(s.a)(this,e),(a=c.call(this)).agregar=function(c,e){var i={codigo:c.codigo,nombre:c.nombre,idioma:c.idioma,clasificacion:c.clasificacion,horario:e,duracion:c.duracion,cantidad:0,total:0};a.setState(Object(o.a)(Object(o.a)({},a.state),{},{compra:i}))},a.calcular=function(c,e){var i;"A"===e.clasificacion&&(i=50),"B"===e.clasificacion&&(i=80),"C"===e.clasificacion&&(i=95);var t={codigo:e.codigo,nombre:e.nombre,idioma:e.idioma,clasificacion:e.clasificacion,horario:e.horario,duracion:e.duracion,cantidad:c,total:c*i};e<=0&&(t.total=0),a.setState(Object(o.a)(Object(o.a)({},a.state),{},{compra:t}))},a.eliminacion_total=function(){a.setState({compra:[]})},a.comprar=function(c){c.cantidad>0?(alert("compra exitosa, saquese de aqui porfavor"),a.setState({compra:[]})):alert("verificar la cantidad de boletos")},a.state={compra:{},cartelera:[{codigo:1,nombre:"Halloween Kills",idioma:"SUB",clasificacion:"C",horarios:["13:00","17:50","20:30"],duracion:"106 min",url:"https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg"},{codigo:2,nombre:"Los Locos Addams 2",idioma:"ESP",clasificacion:"A",horarios:["9:00","11:30","13:30"],duracion:"93 min",url:"https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg"},{codigo:3,nombre:"Sin Tiempo Para Morir",idioma:"ESP",clasificacion:"B",horarios:["11:00","13:50","19:40"],duracion:"164 min",url:"https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg"},{codigo:4,nombre:"Venom: Carnage Liberado",idioma:"ESP",clasificacion:"B",horarios:["10:30","14:20","18:30"],duracion:"98 min",url:"https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg"}]},a}return Object(l.a)(e,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:"dise\xf1o",children:[Object(j.jsx)(g,{peliculas:this.state.cartelera,agregar:this.agregar}),Object(j.jsx)(x,{compra:this.state.compra,calcular:this.calcular,comprar:this.comprar,eliminarCompra:this.eliminacion_total})]})]})}}]),e}(i.Component),C=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(c){var e=c.getCLS,i=c.getFID,t=c.getFCP,r=c.getLCP,n=c.getTTFB;e(a),i(a),t(a),r(a),n(a)}))};n.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),C()},7:function(a,c,e){}},[[22,1,2]]]);
//# sourceMappingURL=main.3900cb9f.chunk.js.map