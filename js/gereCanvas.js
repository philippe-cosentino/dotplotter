function redimCanvSeg() {
	haut=Math.max(hEcran,lEcran);
	large=haut;
	while ((haut>(hDispo2))
	||(large>(lEcran*0.45))) {
		haut=haut*0.995;
		large=haut*2;
	}
	lCanvSeg=Math.round(large);
	hCanvSeg=Math.round(haut);
	
	yCanvSeg=yHaut;
	yTitreSeg=Math.round(yCanvSeg+hCanvSeg);
	divTitreSeg.style.top=yTitreSeg+"px";
	
	canvSeg.width=lCanvSeg;
	canvSeg.height=hCanvSeg;
	var x=(lEcran/2-lCanvSeg)/2+lEcran/2;
	canvSeg.style.left=x+"px";
	canvSeg.style.top=yCanvSeg+"px";
	
	canvOverSeg.width=lCanvSeg;
	canvOverSeg.height=hCanvSeg;
	canvOverSeg.style.left=x+"px";
	canvOverSeg.style.top=yCanvSeg+"px";
	
	canvOverSeg
}

function redimEcran() {
	lEcran = window.innerWidth;
	hEcran = window.innerHeight;
	fs=Math.round(hEcran*0.017*100)/100;
	document.body.style.fontSize=fs+"px";
}

function redimCanvas () {
	var tailleScroll=17;
	yHaut=Math.round(fs*18)+tailleScroll*2;
	hDispo=hEcran-yHaut; // espace dispo sous séquences
	hDispo2=hDispo-fs*7; // espace dispo en soustrayant les titres et marges
	divDispo.style.top=yHaut+"px";
	divDispo.style.height=hDispo2+"px";
	
	hCanv=Math.max(hDispo,lEcran);
	lCanv=hCanv;
	while ((hCanv>(hDispo2))
	||(lCanv>(lEcran*0.45))) {
		hCanv=hCanv*0.995;
		lCanv=hCanv*ratio;
	}
	if (hCanv<(lCanv*0.1)) {hCanv=lCanv*0.1;} // pour éviter d'avoir un canvas trop écrasé
	if (hCanv<(fs*9)) {hCanv=fs*9;} // pour permettre l'affichage de la légende
	if (hCanv>hDispo2) {hCanv=hDispo2;} // pour ne pas déborder

	hCanv=Math.round(hCanv);
	lCanv=Math.round(lCanv);
	echelleX=lCanv/ls1;
	echelleY=hCanv/ls2;
	
	yCanv=Math.round(yHaut+fs*1.3);
	
	canv.width=lCanv;
	canv.height=hCanv;
	canvDiag.width=lCanv;
	canvDiag.height=hCanv;
	xCanv=Math.round((lEcran/2-lCanv)/2)+fs;
	canv.style.left=xCanv+"px";
	canvDiag.style.left=xCanv+"px";
	canvDiag.style.top=yCanv+"px";
	canv.style.top=yCanv+"px";
	yTitre=Math.round(yCanv+hCanv);
	divTitreGraph.style.top=yTitre+"px";
	divConsigneGraph.style.top=Math.round(yTitre+fs*2)+"px";
	divConsigneGraph.style.left="0px";
	divLegendeY.style.width=hCanv+"px";
	divLegendeY.style.left=xCanv-fs*1.6+"px";
	divLegendeY.style.top=yCanv+hCanv+"px"
	divLegendeX.style.top=Math.round(yCanv-fs*1.7)+"px";
	divLegendeX.style.left="0px";
}

function traceCanvas () {
	document.getElementById ("div_progress").style.display="block";
	document.getElementById ("div_saisie_seq").style.display="none";
	ctx.fillStyle="rgb(250,250,250)";
	ctx.fillRect(0,0,lCanv,hCanv);
	// un point noir pour chaque match
	setTimeout(function(){traceColSuiv(0)},1);
	
}
