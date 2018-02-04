var lCanv,hCanv,ratio,echelleX,echelleY;
var lEcran,hEcran;

var divTitreGraph=document.getElementById("divTitreGraph");	
var divTitreSeg=document.getElementById("divTitreSeg");	
var divConsigneGraph=document.getElementById("divConsigneGraph");	
var divLegendeY=document.getElementById("divLegendeY");
var divLegendeX=document.getElementById("divLegendeX");
var divAfficheSeq=document.getElementById ("div_affiche_seq");
var divDispo=document.getElementById ("div_dispo");
var divGraphiques=document.getElementById ("div_graphiques");
var canv=document.getElementById("canvDot");
var ctx=canv.getContext("2d");
var canvSeg=document.getElementById("canvSeg");
var canvOverSeg=document.getElementById("canvOverSeg");
var ctxSeg=canvSeg.getContext("2d");
var ctxOverSeg=canvOverSeg.getContext("2d");
var canvDiag=document.getElementById("canvDiag");
var ctxDiag=canvDiag.getContext("2d");
var divSeq1=document.getElementById("div_seq1");
var divSeq2=document.getElementById("div_seq2");
var currentURL= window.location.href ;


var titreSequence="";

var seq1,seq2;
var grad1,grad2;

var afficheARN;
var doConv=true;

var minExonAff=0;
var minExonDiag=20;

var tExons=new Array();

var curDiag=-1;
var xSel=-1;
var ySel=-1;

function initialise () {
	var urlParams = parseURLParams(currentURL)||[]; 
	var ARNvisible=urlParams["arn"]||"true";
	if (ARNvisible=="false") {afficheARN=false;} else {afficheARN=true;}
	remplitListe ();
	redimEcran();
	document.body.style.display="block";
}

function restart () {
	document.getElementById ("div_saisie_seq").style.display="block";
	divAfficheSeq.style.display="none";
	divGraphiques.style.display="none";
	tExons.length=0;
	curDiag=-1;
	xSel=-1;
	ySel=-1;
}