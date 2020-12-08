// Show coordinates https://github.com/ardhi/Leaflet.MousePosition
L.Control.MousePosition=L.Control.extend({_pos:null,options:{position:"bottomleft",separator:" : ",emptyString:"",lngFirst:!1,numDigits:5,lngFormatter:void 0,latFormatter:void 0,prefix:""},onAdd:function(o){return this._container=L.DomUtil.create("div","leaflet-control-mouseposition"),L.DomEvent.disableClickPropagation(this._container),o.on("mousemove",this._onMouseMove,this),this._container.innerHTML=this.options.emptyString,this._container},onRemove:function(o){o.off("mousemove",this._onMouseMove)},getLatLng:function(){return this._pos},_onMouseMove:function(o){this._pos=o.latlng.wrap();var t=this.options.lngFormatter?this.options.lngFormatter(o.latlng.wrap().lng):L.Util.formatNum(o.latlng.wrap().lng,this.options.numDigits),n=this.options.latFormatter?this.options.latFormatter(o.latlng.lat):L.Util.formatNum(o.latlng.lat,this.options.numDigits),i=this.options.lngFirst?t+this.options.separator+n:n+this.options.separator+t;this._container.innerHTML=this.options.prefix+" "+i}}),L.Map.mergeOptions({positionControl:!1}),L.Map.addInitHook(function(){this.options.positionControl&&(this.positionControl=new L.Control.MousePosition,this.addControl(this.positionControl))}),L.control.mousePosition=function(o){return new L.Control.MousePosition(o)};