getthumbtext=function(a,b){var c=new Textformat(b);c.size=28,c.font=a.text_font;var d=$("<svg class='thumbtext' width='90' height='20'></svg>");$("body").append(d);var e={svg:d},f=Snap(d[0]),g=f.g(),h=g.text(0,0,"");h.node.textContent=c.text;var i=new Gradient;i.decode(a.text_color),h.attr({fill:i.getsvgcolor(f),"font-size":c.size,"font-style":c.italic||"Molle"==c.font?"italic":"","font-weight":c.bold?"bold":"","font-family":c.font,"text-anchor":"left","text-anchor":"start"});var j=g.getBBox();return f.attr({viewBox:"0,0,"+j.width+","+j.height}),g.attr({transform:"translate("+j.width/2+",0)"}),e},getthumb=function(a,b,c){function d(a){var b=$(a.svg),c=Snap(b[0]);a.gradient=new Gradient,a.gradient.decode(a.color),c.selectAll("path, polygon, rect, circle").attr({fill:a.gradient.getsvgcolor(c)});var d=i.g(),e={x:a.width/2*a.scale_x-a.width*a.flip_x*a.scale_x,y:a.height/2*a.scale_y-a.height*a.flip_y*a.scale_y},f=parseFloat(a.offset_x-e.x),g=parseFloat(a.offset_y-e.y),h=a.scale_x*(parseInt(a.flip_x)?-1:1),j=a.scale_y*(parseInt(a.flip_y)?-1:1),k=parseInt(calc.fixDegree(a.rotation));d.attr({transform:"translate("+f+","+g+") rotate("+k+","+e.x+","+e.y+") scale("+h+","+j+")"}),d.append(c)}function e(a){var c=$("<svg width='90' height='90'></svg>"),d=Snap(c[0]);a.gradient=new Gradient,a.gradient.decode(a.color);var e=i.g();e.append(d);var f=d.path();f.attr("fill","none");var g=JSON.parse(a.format),j=JSON.parse(a.curvedline),k=d.text(0,0,"");h.push(g.font),f.attr({d:"M"+j.left.x+","+j.left.y+" C"+j.anchorleft.x+","+j.anchorleft.y+" "+j.anchorright.x+","+j.anchorright.y+" "+j.right.x+","+j.right.y});var l=a.width;if(b&&""!=b.trim()&&"false"!=b){var m="";if("Company Name"==g.text.trim().replaceAll("  "," ").replaceAll("  "," "))m=b;else{var n=b.indexOf(" ");if(n>0)var o=b.substring(0,n),p=b.substring(n+1);else var o=b,p="";m="Company"==g.text.trim()?o:"Name"==g.text.trim()?p:g.text}k.node.textContent=m;var q=g.text.length,r=m.length;if(!j.enabled&&(l=l/q*r,a.width!=l))if("left"==g.alignment)var s=a.offset_x-(a.width-l)*a.scale_x/2;else if("right"==g.alignment)var s=a.offset_x+(a.width-l)*a.scale_x/2}else k.node.textContent=g.text;if(k.attr({"font-size":g.size,"font-style":g.italic||"Molle"==g.font?"italic":"","font-weight":g.bold?"bold":"","font-family":g.font,textpath:void 0,fill:a.gradient.getsvgcolor(d,l,a.height),"text-anchor":"Middle"}),c.attr("width",l),c.attr("height",a.height),c.css("overflow","visible"),j.enabled){k.attr({dy:"",textpath:f,"text-anchor":"middle",x:"",y:""}),"up"!=j.type&&k.attr(j.startheight?{dy:.6*j.startheight}:{dy:.6*a.height});var t=$(k.node).attr("fill");$(k.node.childNodes[0]).attr({startOffset:"50%",fill:t})}else k.attr({dy:.65*a.height,x:a.width/2});if(j.enabled)var u={x:a.width/2*a.scale_x-a.width*a.flip_x*a.scale_x,y:a.height/2*a.scale_y-a.height*a.flip_y*a.scale_y};else var u={x:a.width/2*a.scale_x-a.width*a.flip_x*a.scale_x,y:a.height/2*a.scale_y-a.height*a.flip_y*a.scale_y};if(s)var v=parseFloat(s-u.x);else var v=parseFloat(a.offset_x-u.x);var w=parseFloat(a.offset_y-u.y),x=a.scale_x*(parseInt(a.flip_x)?-1:1),y=a.scale_y*(parseInt(a.flip_y)?-1:1),z=parseInt(calc.fixDegree(a.rotation));e.attr({transform:"translate("+v+","+w+") rotate("+z+","+u.x+","+u.y+") scale("+x+","+y+")"})}var f=$("<svg class='thumb' width='"+a.width+"' height='"+a.height+"'></svg>"),g={svg:f},h=[],i=Snap(f[0]);if(i.attr({viewBox:"0,0,"+f.attr("width")+","+f.attr("height")}),a.background_color){var j=i.g(),k=j.rect(0,0,f.attr("width"),f.attr("height")),l=new Gradient;l.colorlist.push(new Color(a.background_color)),l.colorlist.push(new Color(a.background_color)),k.attr("fill",l.getsvgcolor(i))}var m=[];if(a.shape_list&&a.shape_list.length>0&&$.each(a.shape_list,function(a,b){m[b.index]=[b,"shape"]}),a.text_list&&a.text_list.length>0&&$.each(a.text_list,function(a,b){m[b.index]=[b,"text"]}),m&&m.length>0&&$.each(m,function(a){a>0&&("shape"==m[a][1]?d(m[a][0]):"text"==m[a][1]&&e(m[a][0]))}),a.text_list&&a.text_list.length>0&&h.length>0&&c){var h=h.filter(function(a,b,c){return b==c.indexOf(a)}),n=[];$.each(h,function(a,b){$.each(c,function(a,c){b==c.name&&n.push(c.googleimportstring)})});var o=n.join("|"),p='<style type="text/css">@import url("https://fonts.googleapis.com/css?family='+o+'");</style>';g.svg.find("defs").first().append(p)}return g.svg.attr("xmlns","http://www.w3.org/2000/svg"),g.svg.attr("xmlns:inkscape","http://www.inkscape.org/namespaces/inkscape"),g.svg.attr("xmlns:sodipodi","http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"),g.svg.attr("xmlns:xlink","http://www.w3.org/1999/xlink"),g.svg.find("desc").remove(),g};