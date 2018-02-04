function effaceCanvSeg() {
	ctxSeg.fillStyle="#FFF";
	ctxSeg.fillRect(0,0,lCanvSeg,hCanvSeg);
}

function traceToutSeg() {
	effaceCanvSeg();
	traceARNpm();
	traceARNm();
	traceDiagSeg();
	traceLegendes();
}

function traceLegendes() {
	ctxSeg.fillStyle="black";
	ctxSeg.fillText("ARN pré-messager",lCanvSeg/2,yARNpm-fs*1.5);
	ctxSeg.fillText("ARN messager",lCanvSeg/2,yARNm+fs*2.3);
}

var coulExon="#0D0";
var coulInconnu="#777";
var coulIntron="#F00";
var coulFluo="rgba(255,255,0,0.55)";

function traceARNpm() {
	lARNpm=lCanvSeg*0.9;
	hARN=hCanvSeg*0.01;
	ctxSeg.fillStyle=coulIntron;
	xARNpm=lCanvSeg/2-lARNpm/2;
	yARNpm=hCanvSeg*0.2;
	ctxSeg.fillRect (xARNpm,yARNpm,lARNpm,hARN);
}

function traceARNm() {
	lARNm=lARNpm*ls2/ls1;
	ctxSeg.fillStyle=coulInconnu;
	xARNm=lCanvSeg/2-lARNm/2;
	yARNm=hCanvSeg*0.8;
	ctxSeg.fillRect (xARNm,yARNm,lARNm,hARN);
}

function traceDiagSeg() {
	ctxSeg.font=fs+"px Arial";
	var nb=tExons.length;
	var ech=lARNpm/ls1;
	var r=lCanvSeg/200;
	ctxSeg.strokeStyle="rgba(0,0,0,0.5)";
	ctxSeg.lineWidth=0.5;
	for (var i=0;i<nb;i++) {
		var e=tExons[i];
		// ARNpm
		var x=xARNpm+e.x0*ech;
		var l=e.longueur*ech;
		ctxSeg.fillStyle=coulExon;
		ctxSeg.fillRect (x,yARNpm,l,hARN);
		//fluo pour l'exon sélectionné
		if (i==curDiag) {
			ctxSeg.fillStyle=coulFluo;
			ctxSeg.fillRect (x-r,yARNpm-r,l+2*r,hARN+2*r);
			// positions
			ctxSeg.fillStyle="black";
			ctxSeg.textAlign="right";
			ctxSeg.fillText(e.x0+1,x,yARNpm+fs*1.2);
			ctxSeg.textAlign="left";
			ctxSeg.fillText(e.x0+e.longueur,x+l,yARNpm+fs*1.2);
		}
		// ARNm
		var x=xARNm+e.y0*ech;
		var l=e.longueur*ech;
		ctxSeg.fillStyle=coulExon;
		ctxSeg.fillRect (x,yARNm,l,hARN);
		//fluo pour l'exon sélectionné
		if (i==curDiag) {
			ctxSeg.fillStyle=coulFluo;
			ctxSeg.fillRect (x-r,yARNm-r,l+2*r,hARN+2*r);
			// positions
			ctxSeg.fillStyle="black";
			ctxSeg.textAlign="right";
			ctxSeg.fillText(e.y0+1,x,yARNm-fs*0.3);
			ctxSeg.textAlign="left";
			ctxSeg.fillText(e.y0+e.longueur,x+l,yARNm-fs*0.3);
		}
		// traits
		var xpm1=xARNpm+e.x0*ech;
		var xm1=xARNm+e.y0*ech;
		var xpm2=xpm1+l;
		var xm2=xm1+l;
		ctxSeg.beginPath();
		ctxSeg.moveTo(xpm1,yARNpm+hARN);
		ctxSeg.lineTo(xm1,yARNm);
		ctxSeg.moveTo(xpm2,yARNpm+hARN);
		ctxSeg.lineTo(xm2,yARNm);
		ctxSeg.stroke();
	}
}


function traceFleche(i1,i2) {
	ctxOverSeg.clearRect(0,0,lCanvSeg,hCanvSeg);
	var ech=lARNpm/ls1;
	var r=lCanvSeg/200;
	var l=lCanvSeg/40;
	ctxOverSeg.strokeStyle="rgba(0,0,255,0.5)";
	ctxOverSeg.lineWidth=lCanvSeg/500;
	var x1=xARNpm+i1*ech;
	var x2=xARNm+i2*ech;
	var y1=yARNpm;
	var y2=yARNm+hARN;
	ctxOverSeg.beginPath();
	ctxOverSeg.moveTo(x1,y1);
	ctxOverSeg.lineTo(x1,y1-l);
	ctxOverSeg.moveTo(x1,y1);
	ctxOverSeg.lineTo(x1-r,y1-r);
	ctxOverSeg.moveTo(x1,y1);
	ctxOverSeg.lineTo(x1+r,y1-r);
	ctxOverSeg.moveTo(x2,y2);
	ctxOverSeg.lineTo(x2,y2+l);
	ctxOverSeg.moveTo(x2,y2);
	ctxOverSeg.lineTo(x2-r,y2+r);
	ctxOverSeg.moveTo(x2,y2);
	ctxOverSeg.lineTo(x2+r,y2+r);
	ctxOverSeg.stroke();
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function clickCanvSeg (e) {
    var rect = canvSeg.getBoundingClientRect();
    var x=e.clientX - rect.left;
    var y=e.clientY - rect.top;
	var iy=Math.round(y/hCanvSeg*10);

	if (iy==2) {
		var ix=(x-lCanvSeg/2)/lARNpm+0.5;
		if ((ix>=0)&&(ix<1)) {
			// clic dans ARN pm
			ix=ix*ls1;
			// recherche exon
			var n=chercheNumExonARNpm(ix);
			if (n>=0) {
				curDiag=n;
				fluoSeqParNumExon(n);
			}
		}
	}
	
	if (iy==8) {	
		var ix=(x-lCanvSeg/2)/lARNm+0.5;
		if ((ix>=0)&&(ix<1)) {
			// clic dans ARN m
			ix=ix*ls2;
			// recherche exon
			var n=chercheNumExonARNm(ix);
			if (n>=0) {
				curDiag=n;
				fluoSeqParNumExon(n);
			}
		}
	}
	
	traceDiagExons ();
}

function fluoSeqParNumExon (n) {
	var e=tExons[n];
	x0=e.x0;
	y0=e.y0;
	l=e.longueur;
	i1=e.x0+e.l/2;
	i2=e.y0+e.l/2;
	fluoSeq (i1,i2,x0,y0,l);
}

function chercheNumExonARNpm (n) {
	var nb=tExons.length;
	for (var i=0;i<nb;i++) {
		var e=tExons[i];
		if ((n>=e.x0)&&(n<(e.x0+e.longueur))) {
			return i;
		}
	}
	return -1;
}

function chercheNumExonARNm (n) {
	var nb=tExons.length;
	for (var i=0;i<nb;i++) {
		var e=tExons[i];
		if ((n>=e.y0)&&(n<(e.y0+e.longueur))) {
			return i;
		}
	}
	return -1;
}