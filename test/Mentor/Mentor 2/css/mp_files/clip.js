Clip=function(a,b,c,d,e,f,g,h,i,j,k){var l=this;l.path=a,l.width,l.height,l.svg,l.bg,l.drawningboard=c,l.group=l.drawningboard.workspace.g(),l.rotationgroup,l.color=b.clone(),l.x=parseInt(d),l.y=parseInt(e),l.realposition=!1,l.offset={x:i?i:0,y:j?j:0},l.scale=k?k:1,l.scalex=l.scale,l.scaley=l.scale,l.flipx=0,l.flipy=0,l.rotation=0,l.alpha=1,l.index,l.id=f,l.subid=g,l.groupid=0,l.nounId,l.callback=h,l.note,l.type="shape",l.statelist=[],l.name,l.iconname,l.start=function(){l.group.addClass("svg-clip"),l.realposition||(l.x=parseInt(l.x?l.drawningboard.width/2+(l.x-l.offset.x/2)*l.scalex:l.drawningboard.width/2),l.y=parseInt(l.y?l.drawningboard.height/2+(l.y-l.offset.y/2)*l.scaley:l.drawningboard.height/2)),l.path instanceof Node?l.include(l.path):Snap.load(l.path,l.loaded),l.index=l.drawningboard.selector.getnewindex(l.id,l.type),l.subid?(l.name=l.drawningboard.api.dictionary.element_shape+" "+l.id+"."+l.subid,l.iconname=l.drawningboard.api.dictionary.element_logo+" "+l.id):l.name=l.drawningboard.api.dictionary.element_shape+" "+l.id,l.drawningboard.selector.watch(l)},l.enabled=function(){return l.alpha},l.finish=function(){l.group.remove()},l.loaded=function(a){l.svg=a.select("svg"),l.process()},l.include=function(a){l.svg=Snap(Snap(a).node.cloneNode(!0)),l.process()},l.process=function(){l.width=parseInt(parseFloat(l.svg.attr("width"))),l.height=parseInt(parseFloat(l.svg.attr("height"))),l.bg=l.group.rect(0,0,l.width,l.height),l.bg.attr({fill:"none"}),l.bg.addClass("svg-hitbox"),l.group.add(l.svg),l.rotationgroup=l.svg.g(),l.rotationgroup.add(l.svg.selectAll("path, polygon, rect, circle")),l.group.attr({cursor:"move"}),l.update(),l.callback&&l.callback()},l.translateoffset=function(){var a={x:l.width/2*l.scalex-l.width*l.flipx*l.scalex,y:l.height/2*l.scaley-l.height*l.flipy*l.scaley};return a},l.update=function(){l.subid?(l.name=l.drawningboard.api.dictionary.element_shape+" "+l.id+"."+l.subid,l.iconname=l.drawningboard.api.dictionary.element_logo+" "+l.id):l.name=l.drawningboard.api.dictionary.element_shape+" "+l.id,l.svg.selectAll("path, polygon, rect, circle").attr({fill:l.color.getsvgcolor(l.drawningboard.workspace)}),l.group.attr({transform:"translate("+parseFloat(l.x-l.translateoffset().x)+","+parseFloat(l.y-l.translateoffset().y)+") rotate("+parseInt(calc.fixDegree(l.rotation))+" "+l.translateoffset().x+" "+l.translateoffset().y+") scale("+l.scalex*(parseFloat(l.flipx)?-1:1)+","+l.scaley*(parseFloat(l.flipy)?-1:1)+")",opacity:l.alpha}),l.alpha?(l.group.addClass("svg-visible"),l.group.removeClass("svg-hidden")):(l.group.removeClass("svg-visible"),l.group.addClass("svg-hidden"))}};