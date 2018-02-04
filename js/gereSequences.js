function doNotConvert(c) {
	doConv=!c;
}

function changeSequences() {
	document.getElementById ("text_seq1").value=seq1;
	document.getElementById ("text_seq2").value=seq2;
	testBouton();
}

function modifieSeq () {
	titreSequence="Séquence saisie ou modifiée par l'utilisateur";
	testBouton();
}

function testBouton() {
	if ((document.getElementById ("text_seq1").value.length>1)&&(document.getElementById ("text_seq2").value.length>1)) {
		document.getElementById ("but_compare").style.display="block";
	} else {document.getElementById ("but_compare").style.display="none";}
}

function getSequences() {
	var text1=document.getElementById ("text_seq1").value;
	var text2=document.getElementById ("text_seq2").value;
	var v1=document.getElementById ("text_minval").value;
	var v2=document.getElementById ("text_minsel").value;
	minExonAff=v1;
	minExonDiag=v2;
	//seq1=nettoie(text1);
	//seq2=nettoie(text2);
	
	seq1=nettoieSoft(text1);
	seq2=nettoieSoft(text2);
	if (doConv) {
		seq1arn=convertToARN (seq1);
		seq2arn=convertToARN (seq2);
	} else {
		seq1arn=seq1;
		seq2arn=seq2;
	}
	
	//document.getElementById ("text_seq1").value=seq1;
	//document.getElementById ("text_seq2").value=seq2;
	ls1=seq1arn.length;
	ls2=seq2arn.length;
	creeGrad();
	divSeq1.innerHTML=grad1+"<br>&nbsp;"+seq1arn;
	divSeq2.innerHTML=grad2+"<br>&nbsp;"+seq2arn;
	ratio=ls1/ls2;
}

function creeGrad() {
	grad1="";
	grad2="";
	var c="";
	for (var i=0;i<ls1;i+=10) {
		c=i+"";
		while (c.length<10) {
			c+=" ";
		}
		c=c.replace(/\s/g,"&nbsp;");
		grad1+=c;
	}
	grad1+="<br>";
	
	for (var i=0;i<ls2;i+=10) {
		c=i+"";
		while (c.length<10) {
			c+=" ";
		}
		c=c.replace(/\s/g,"&nbsp;");
		grad2+=c;
	}
	grad2+="<br>";
	
	for (var i=0;i<ls1;i++) {
		if ((i%10)==0) {c="<b>|</b>"} else 
		if ((i%5)==0) {c="|"} 
		else {c="."}
		grad1+=c;
	}
	for (var i=0;i<ls2;i++) {
		if ((i%10)==0) {c="<b>|</b>"} else 
		if ((i%5)==0) {c="|"} 
		else {c="."}
		grad2+=c;
	}

}


function startCompare () {
	document.getElementById ("div_titre_sequence").innerHTML=titreSequence;
	getSequences ();
	redimCanvas();
	redimCanvSeg();
	traceCanvas();
	if (afficheARN==false) {
		divTitreSeg.style.display="none";
		canvSeg.style.display="none";
	}
}

function etape2() {
	traceToutSeg();
	document.getElementById ("div_progress").style.display="none";
	divAfficheSeq.style.display="block";
	divGraphiques.style.display="block";
}

function progression(n) {
	var p=Math.round(n/ls1*100);
	//console.log (p);
	document.getElementById ("barre_progress2").style.width=p+"%";
}

function traceColSuiv (i) {
	traceCol (i);
	i++;
	var pas=Math.round(ls1/100);
	if (pas<1) {pas=1;}
	if (i<ls1) {
		if ((i%pas)==0) {
			progression(i);
			setTimeout(function(){traceColSuiv(i)},1);
		} else {
			traceColSuiv(i);
		}
	} else {
		etape2();
	}
}

function traceCol (i1) {
	var opa=0;
	var d=0;
	var l=echelleX;
	var h=echelleY;
	if (l<0.25) {l=0.25;}
	if (h<0.25) {h=0.25;}
	for (var i2=0;i2<ls2;i2++) {
		if (match (i1,i2)) {
			d=diag(i1,i2)-minExonAff;
			opa=Math.round(d*10)/200;
			if (opa<0) {opa=0;}
			if (opa>1) {opa=1;}
			ctx.fillStyle="rgba(0,0,0,"+opa+")";
			ctx.fillRect(i1*echelleX,i2*echelleY,l,h);
		}
	}
}



function traceDiagExons () {
	traceToutSeg();
	
	var nb=tExons.length;
	ctxDiag.clearRect(0,0,lCanv,hCanv);
	
	var epLigne=lCanv/150;
	ctxDiag.lineWidth=epLigne;
	for (var i=0;i<nb;i++) {
		var e=tExons[i];
		var x0=e.x0*echelleX;
		var y0=e.y0*echelleY;
		var x1=e.x0*echelleX+e.longueur*echelleX;
		var y1=e.y0*echelleY+e.longueur*echelleY;
		if (i==curDiag) {
			ctxDiag.strokeStyle="rgba(255,255,0,0.5)";
		} else {
			ctxDiag.strokeStyle="rgba(255,100,50,0.5)";
		}
		ctxDiag.beginPath();
		ctxDiag.moveTo(x0,y0);
		ctxDiag.lineTo(x1,y1);
		ctxDiag.stroke();
	}
	//if (curDiag==-1) {
		// pas de diagonale sélectionnée, on trace une croix 
		ctxDiag.lineWidth=1;
		var x=xSel*echelleX+echelleX/2;
		var y=ySel*echelleY+echelleY/2;
		var l=lCanv*0.01;
		ctxDiag.strokeStyle="rgba(255,0,0,0.5)";
		ctxDiag.beginPath();
		ctxDiag.moveTo(x-l,y);
		ctxDiag.lineTo(x+l,y);
		ctxDiag.moveTo(x,y-l);
		ctxDiag.lineTo(x,y+l);
		ctxDiag.stroke();
	//}
}

function match (i1,i2) {
	return (seq1arn[i1]==seq2arn[i2]);
}


function diag (i1,i2) {
	if (!match(i1,i2)) {return 0;}
	return diagAvant(i1,i2)+diagApres(i1,i2)+1;
}

function diagAvant (i1,i2) {
	var n=0;
	var n1=i1-1;
	var n2=i2-1;
	while ((match(n1,n2))&&(n1>=0)&&(n2>=0)) {
		n++;
		n1--;
		n2--;
	}
	return n;
}

function diagApres (i1,i2) {
	var n=0;
	var n1=i1+1;
	var n2=i2+1;
	while ((match(n1,n2))&&(n1<(ls1))&&(n2<(ls2))) {
		n++;
		n1++;
		n2++;
	}
	return n;
}


function nettoie (t) {
	t=t.toUpperCase();
	
	var s="";
	for (var i=0;i<t.length;i++) {
		var c=t[i];
		if (['A', 'T', 'C', 'G', 'U'].indexOf(c)>=0) {
			s+=c;
		}
	}
	return s;
}

function nettoieSoft (t) {
	t=t.toUpperCase();
	s=t.replace(/[^a-zA-Z]+/g, '');
	return s;
}

function convertToADN(t) {
	s=t.replace(/U/g,"T");
	return s;
}

function convertToARN(t) {
	s=t.replace(/T/g,"U");
	return s;
}


function clickCanv (e) {
    var rect = canv.getBoundingClientRect();
    var x=e.clientX - rect.left;
    var y=e.clientY - rect.top;
	x=x-echelleX/2;
	y=y-echelleY/2;
	var i1=Math.round(x/echelleX);
	var i2=Math.round(y/echelleY);
    //console.log (i1+" "+i2);

	cd=chercheDiag (i1,i2);
	if (cd) {
		//console.log (cd);
		// diagonale cliquée
		o=getDiag(cd.i1,cd.i2);
		var x0=o.x0;
		var y0=o.y0;
		var lo=o.l;

		fluoSeq (i1,i2,x0,y0,lo);
	} else {
		// pas de diagonale
		curDiag=-1;
		fluoNuc (i1,i2);
	}
	
	xSel=i1;
	ySel=i2;
	traceDiagExons ();
}


function survolCanv (e) {
    var rect = canv.getBoundingClientRect();
    var x=e.clientX - rect.left;
    var y=e.clientY - rect.top;
	x=x-echelleX/2;
	y=y-echelleY/2;
	var i1=Math.round(x/echelleX);
	var i2=Math.round(y/echelleY);
	traceFleche(i1,i2);
}

function fluoNuc (i1,i2) {
	var s1=seq1arn.substr(0,i1)+"<span style='background-color: #ffff00'>"+seq1[i1]+"</span>"+seq1arn.substr(i1+1,ls1-i1-1);
	var s2=seq2arn.substr(0,i2)+"<span style='background-color: #ffff00'>"+seq2[i2]+"</span>"+seq2arn.substr(i2+1,ls2-i2-1);
	divSeq1.innerHTML=grad1+"<br>&nbsp;"+s1;
	divSeq2.innerHTML=grad2+"<br>&nbsp;"+s2;
	divSeq1.scrollLeft=Math.round(i1/ls1*divSeq1.scrollWidth-divSeq1.clientWidth/2);
	divSeq2.scrollLeft=Math.round(i2/ls2*divSeq2.scrollWidth-divSeq2.clientWidth/2);
}

function fluoSeq (i1,i2,x0,y0,l) {
		var s1=seq1arn.substr(0,x0)+"<span style='background-color: #ffff00'>"+seq1arn.substr(x0,l)+"</span>"+seq1arn.substr(x0+l,ls1-x0-l);
		var s2=seq2arn.substr(0,y0)+"<span style='background-color: #ffff00'>"+seq2arn.substr(y0,l)+"</span>"+seq2arn.substr(y0+l,ls2-y0-l);
		divSeq1.innerHTML=grad1+"<br>&nbsp;"+s1;
		divSeq2.innerHTML=grad2+"<br>&nbsp;"+s2;
		divSeq1.scrollLeft=Math.round(i1/ls1*divSeq1.scrollWidth-divSeq1.clientWidth/2);
		divSeq2.scrollLeft=Math.round(i2/ls2*divSeq2.scrollWidth-divSeq2.clientWidth/2);
}

function getDiag (i1,i2) {
	var dav=diagAvant(i1,i2);
	var l=diag(i1,i2);
	var x0=i1-dav;
	var y0=i2-dav;
	var dex=diagExiste(x0,y0);
	if (dex<0) {
		var nb=tExons.length;
		tExons[nb]=new Object();
		tExons[nb].x0=x0;
		tExons[nb].y0=y0;
		tExons[nb].longueur=l;	
		curDiag=nb;
	} else {
		curDiag=dex;
	}
	var o=new Object();
	o.x0=x0;
	o.y0=y0;
	o.l=l;
	return o;
}

function diagExiste (xx0,yy0) {
	var existe=-1;
	for (var i=0;i<tExons.length;i++) {
		if ((tExons[i].x0==xx0)&&(tExons[i].y0==yy0)) {
			existe=i;
		}
	}
	return existe;
}

function chercheDiag (i1,i2) {
	var distPix=lCanv/80;
	var d=Math.floor(distPix/echelleX)+1;
	for (var ii1=i1-d;ii1<=i1+d;ii1++) {
		for (var ii2=i2-d;ii2<=i2+d;ii2++) {
			if ((ii1>=0)&&(ii1<ls1)&&(ii2>=0)&&(ii2<ls2)) {
				var l=diag(ii1,ii2);
				if (l>=minExonDiag) {
					//console.log (ii1+","+ii2);
					var o=new Object;
					o.i1=ii1;
					o.i2=ii2;
					o.l=l;
					return o;
				}
			}
		}
	}
	return false;
}