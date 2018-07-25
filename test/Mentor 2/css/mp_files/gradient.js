Gradient=function(){var a=this;a.colorlist=[],a.rotation=0,a.type="linear",a.origin="in",a.clone=function(){var b=new Gradient;return b.rotation=a.rotation,b.type=a.type,b.origin=a.origin,$.each(a.colorlist,function(a,c){var d=new Color(c.color);d.position=c.position,b.colorlist.push(d)}),b},a.compare=function(b){var c=!0;return b.colorlist.length!=a.colorlist.length?c=!1:$.each(a.colorlist,function(a,d){var e=!1;$.each(b.colorlist,function(a,b){d.color==b.color&&d.position==b.position&&(e=!0)}),e||(c=!1)}),c},a.decode=function(b){if(b.indexOf("colorlist")>0){var c=JSON.parse(b);c.rotation&&(a.rotation=c.rotation),c.type&&(a.type=c.type),c.origin&&(a.origin=c.origin),$.each(c.colorlist,function(b,c){var d=new Color(c.color);d.position=c.position,a.colorlist.push(d)})}else a.colorlist.push(new Color(b))},a.getsvgcolor=function(b,c,d){if(1==a.colorlist.length&&0==stringToRgba(a.colorlist[0].color).a)var e="none";else{var f,g="";if(a.colorlist.sort(comparecolor),"out"==a.origin&&"radial"==a.type?(a.colorlist.reverse(),$.each(a.colorlist,function(a,b){0==stringToRgba(b.color).a&&(b.color="rgba(255,255,255,0)"),g+=b.color+":"+(100-b.position)+"-",f=b}),100-f.position>0&&(g+=f.color+":100-")):($.each(a.colorlist,function(a,b){0==stringToRgba(b.color).a&&(b.color="rgba(255,255,255,0)"),g+=b.color+":"+b.position+"-",f=b}),f.position<100&&(g+=f.color+":100-")),g=g.substring(0,g.length-1),c&&d)var h=c/2,i=d/2,j=c;else var h=.5,i=.5,j=1;if("linear"==a.type){var k=calc.rotatePointF(0,i,h,i,a.rotation),l=calc.rotatePointF(j,i,h,i,a.rotation);if(c&&d){k.y<0&&(k.y=0),l.y<0&&(l.y=0),k.y>d&&(k.y=d),l.y>d&&(l.y=d);var e=b.gradient("L("+k.x+","+k.y+","+l.x+","+l.y+")"+g)}else var e=b.gradient("l("+k.x+","+k.y+","+l.x+","+l.y+")"+g)}else if(c&&d){var e=b.gradient("R("+h+","+i+","+h+")"+g);$(e.node).attr("gradientUnits","userSpaceOnUse")}else{var e=b.gradient("r(0.5,0.5,0.5)"+g);$(e.node).attr("gradientUnits","objectBoundingBox")}}return e}};