﻿var n=0;
var tExemples=new Array();

tExemples[n]=new Object();
tExemples[n].nom="----------------------------";
tExemples[n].seq1="";
tExemples[n].seq2="";
tExemples[n].minDS=0;
tExemples[n].convert=false;

n++;
tExemples[n]=new Object();
tExemples[n].nom="(tutoriel) Comparaison de 2 phrases , version 1";
tExemples[n].seq1="Mon gros chat persan est joli mais paresseux et craintif";
tExemples[n].seq2="Mon gros chat est joli et craintif";
tExemples[n].minDS=3;
tExemples[n].convert=false;

n++;
tExemples[n]=new Object();
tExemples[n].nom="(tutoriel) Comparaison de 2 phrases , version 2";
tExemples[n].seq1="Mon gros chat persan est joli mais paresseux et craintif";
tExemples[n].seq2="Mon gros persan est paresseux et craintif";
tExemples[n].minDS=3;
tExemples[n].convert=false;

n++;
tExemples[n]=new Object();
tExemples[n].nom="Chaîne bêta de l'hémoglobine";
tExemples[n].seq1="ACAUUUGCUUCUGACACAACUGUGUUCACUAGCAACCUCAAACAGACACCAUGGUGCACCUGACUCCUGAGGAGAAGUCUGCCGUUACUGCCCUGUGGGGCAAGGUGAACGUGGAUGAAGUUGGUGGUGAGGCCCUGGGCAGGUUGGUAUCAAGGUUACAAGACAGGUUUAAGGAGACCAAUAGAAACUGGGCAUGUGGAGACAGAGAAGACUCUUGGGUUUCUGAUAGGCACUGACUCUCUCUGCCUAUUGGUCUAUUUUCCCACCCUUAGGCUGCUGGUGGUCUACCCUUGGACCCAGAGGUUCUUUGAGUCCUUUGGGGAUCUGUCCACUCCUGAUGCUGUUAUGGGCAACCCUAAGGUGAAGGCUCAUGGCAAGAAAGUGCUCGGUGCCUUUAGUGAUGGCCUGGCUCACCUGGACAACCUCAAGGGCACCUUUGCCACACUGAGUGAGCUGCACUGUGACAAGCUGCACGUGGAUCCUGAGAACUUCAGGGUGAGUCUAUGGGACCCUUGAUGUUUUCUUUCCCCUUCUUUUCUAUGGUUAAGUUCAUGUCAUAGGAAGGGGAGAAGUAACAGGGUACAGUUUAGAAUGGGAAACAGACGAAUGAUUGCAUCAGUGUGGAAGUCUCAGGAUCGUUUUAGUUUCUUUUAUUUGCUGUUCAUAACAAUUGUUUUCUUUUGUUUAAUUCUUGCUUUCUUUUUUUUUCUUCUCCGCAAUUUUUACUAUUAUACUUAAUGCCUUAACAUUGUGUAUAACAAAAGGAAAUAUCUCUGAGAUACAUUAAGUAACUUAAAAAAAAACUUUACACAGUCUGCCUAGUACAUUACUAUUUGGAAUAUAUGUGUGCUUAUUUGCAUAUUCAUAAUCUCCCUACUUUAUUUUCUUUUAUUUUUAAUUGAUACAUAAUCAUUAUACAUAUUUAUGGGUUAAAGUGUAAUGUUUUAAUAUGUGUACACAUAUUGACCAAAUCAGGGUAAUUUUGCAUUUGUAAUUUUAAAAAAUGCUUUCUUCUUUUAAUAUACUUUUUUGUUUAUCUUAUUUCUAAUACUUUCCCUAAUCUCUUUCUUUCAGGGCAAUAAUGAUACAAUGUAUCAUGCCUCUUUGCACCAUUCUAAAGAAUAACAGUGAUAAUUUCUGGGUUAAGGCAAUAGCAAUAUUUCUGCAUAUAAAUAUUUCUGCAUAUAAAUUGUAACUGAUGUAAGAGGUUUCAUAUUGCUAAUAGCAGCUACAAUCCAGCUACCAUUCUGCUUUUAUUUUAUGGUUGGGAUAAGGCUGGAUUAUUCUGAGUCCAAGCUAGGCCCUUUUGCUAAUCAUGUUCAUACCUCUUAUCUUCCUCCCACAGCUCCUGGGCAACGUGCUGGUCUGUGUGCUGGCCCAUCACUUUGGCAAAGAAUUCACCCCACCAGUGCAGGCUGCCUAUCAGAAAGUGGUGGCUGGUGUGGCUAAUGCCCUGGCCCACAAGUAUCACUAAGCUCGCUUUCUUGCUGUCCAAUUUCUAUUAAAGGUUCCUUUGUUCCCUAAGUCCAACUACUAAACUGGGGGAUAUUAUGAAGGGCCUUGAGCAUCUGGAUUCUGCCUAAUAAAAAACAUUUAUUUUCAUUGC";
tExemples[n].seq2="ACAUUUGCUUCUGACACAACUGUGUUCACUAGCAACCUCAAACAGACACCAUGGUGCACCUGACUCCUGAGGAGAAGUCUGCCGUUACUGCCCUGUGGGGCAAGGUGAACGUGGAUGAAGUUGGUGGUGAGGCCCUGGGCAGGCUGCUGGUGGUCUACCCUUGGACCCAGAGGUUCUUUGAGUCCUUUGGGGAUCUGUCCACUCCUGAUGCUGUUAUGGGCAACCCUAAGGUGAAGGCUCAUGGCAAGAAAGUGCUCGGUGCCUUUAGUGAUGGCCUGGCUCACCUGGACAACCUCAAGGGCACCUUUGCCACACUGAGUGAGCUGCACUGUGACAAGCUGCACGUGGAUCCUGAGAACUUCAGGCUCCUGGGCAACGUGCUGGUCUGUGUGCUGGCCCAUCACUUUGGCAAAGAAUUCACCCCACCAGUGCAGGCUGCCUAUCAGAAAGUGGUGGCUGGUGUGGCUAAUGCCCUGGCCCACAAGUAUCACUAAGCUCGCUUUCUUGCUGUCCAAUUUCUAUUAAAGGUUCCUUUGUUCCCUAAGUCCAACUACUAAACUGGGGGAUAUUAUGAAGGGCCUUGAGCAUCUGGAUUCUGCCUAAUAAAAAACAUUUAUUUUCAUUGC";
tExemples[n].minDS=20;
tExemples[n].convert=true;

var seqARNpmGH="AGGATCCCAAGGCCCAACTCCCCGAACCACTCAGGGTCCTGTGGACAGCTCACCTAGCTGCAATGGCTACAGGTAAGCGCCCCTAAAATCCCTTTGGGCACAATGTGTCCTGAGGGGAGAGGCAGCGACCTGTAGATGGGACGGGGGCACTAACCCTCAGGTTTGGGGCTTCTGAATGTGAGTATCGCCATGTAAGCCCAGTATTTGGCCAATCTCAGAAAGCTCCTGGTCCCTGGAGGGATGGAGAGAGAAAAACAAACAGCTCCTGGAGCAGGGAGAGTGCTGGCCTCTTGCTCTCCGGCTCCCTCTGTTGCCCTCTGGTTTCTCCCCAGGCTCCCGGACGTCCCTGCTCCTGGCTTTTGGCCTGCTCTGCCTGCCCTGGCTTCAAGAGGGCAGTGCCTTCCCAACCATTCCCTTATCCAGGCTTTTTGACAACGCTATGCTCCGCGCCCATCGTCTGCACCAGCTGGCCTTTGACACCTACCAGGAGTTTGTAAGCTCTTGGGGAATGGGTGCGCATCAGGGGTGGCAGGAAGGGGTGACTTTCCCCCGCTGGGAAATAAGAGGAGGAGACTAAGGAGCTCAGGGTTTTTCCCGAAGCGAAAATGCAGGCAGATGAGCACACGCTGAGTGAGGTTCCCAGAAAAGTAACAATGGGAGCTGGTCTCCAGCGTAGACCTTGGTGGGCGGTCCTTCTCCTAGGAAGAAGCCTATATCCCAAAGGAACAGAAGTATTCATTCCTGCAGAACCCCCAGACCTCCCTCTGTTTCTCAGAGTCTATTCCGACACCCTCCAACAGGGAGGAAACACAACAGAAATCCGTGAGTGGATGCCTTCTCCCCAGGCGGGGATGGGGGAGACCTGTAGTCAGAGCCCCCGGGCAGCACAGCCAATGCCCGTCCTTCCCCTGCAGAACCTAGAGCTGCTCCGCATCTCCCTGCTGCTCATCCAGTCGTGGCTGGAGCCCGTGCAGTTCCTCAGGAGTGTCTTCGCCAACAGCCTGGTGTACGGCGCCTCTGACAGCAACGTCTATGACCTCCTAAAGGACCTAGAGGAAGGCATCCAAACGCTGATGGGGGTGAGGGTGGCGCCAGGGGTCCCCAATCCTGGAGCCCCACTGACTTTGAGAGCTGTGTTAGAGAAACACTGCTGCCCTCTTTTTAGCAGTCAGGCCCTGACCCAAGAGAACTCACCTTATTCTTCATTTCCCCTCGTGAATCCTCCAGGCCTTTCTCTACACCCTGAAGGGGAGGGAGGAAAATGAATGAATGAGAAAGGGAGGGAACAGTACCCAAGCGCTTGGCCTCTCCTTCTCTTCCTTCACTTTGCAGAGGCTGGAAGATGGCAGCCCCCGGACTGGGCAGATCTTCAAGCAGACCTACAGCAAGTTCGACACAAACTCACACAACGATGACGCACTACTCAAGAACTACGGGCTGCTCTACTGCTTCAGGAAGGACATGGACAAGGTCGAGACATTCCTGCGCATCGTGCAGTGCCGCTCTGTGGAGGGCAGCTGTGGCTTCTAGCTGCCCGGGTGGCATCCCTGTGACCCCTCCCCAGTGCCTCTCCTGGCCCTGGAAGTTGCCACTCCAGTGCCCACCAGCCTTGTCCTAATAAAATTAAGTTGCATCA";

n++;
tExemples[n]=new Object();
tExemples[n].nom="Hormone de croissance (v1)";
tExemples[n].seq1=seqARNpmGH;
tExemples[n].seq2="AGGAUCCCAAGGCCCAACUCCCCGAACCACUCAGGGUCCUGUGGACAGCUCACCUAGCUGCAAUGGCUACAGGCUCCCGGACGUCCCUGCUCCUGGCUUUUGGCCUGCUCUGCCUGCCCUGGCUUCAAGAGGGCAGUGCCUUCCCAACCAUUCCCUUAUCCAGGCUUUUUGACAACGCUAUGCUCCGCGCCCAUCGUCUGCACCAGCUGGCCUUUGACACCUACCAGGAGUUUGAAGAAGCCUAUAUCCCAAAGGAACAGAAGUAUUCAUUCCUGCAGAACCCCCAGACCUCCCUCUGUUUCUCAGAGUCUAUUCCGACACCCUCCAACAGGGAGGAAACACAACAGAAAUCCAACCUAGAGCUGCUCCGCAUCUCCCUGCUGCUCAUCCAGUCGUGGCUGGAGCCCGUGCAGUUCCUCAGGAGUGUCUUCGCCAACAGCCUGGUGUACGGCGCCUCUGACAGCAACGUCUAUGACCUCCUAAAGGACCUAGAGGAAGGCAUCCAAACGCUGAUGGGGAGGCUGGAAGAUGGCAGCCCCCGGACUGGGCAGAUCUUCAAGCAGACCUACAGCAAGUUCGACACAAACUCACACAACGAUGACGCACUACUCAAGAACUACGGGCUGCUCUACUGCUUCAGGAAGGACAUGGACAAGGUCGAGACAUUCCUGCGCAUCGUGCAGUGCCGCUCUGUGGAGGGCAGCUGUGGCUUCUAGCUGCCCGGGUGGCAUCCCUGUGACCCCUCCCCAGUGCCUCUCCUGGCCCUGGAAGUUGCCACUCCAGUGCCCACCAGCCUUGUCCUAAUAAAAUUAAGUUGCAUCA";
tExemples[n].minDS=20;
tExemples[n].convert=true;

n++;
tExemples[n]=new Object();
tExemples[n].nom="Hormone de croissance (v2)";
tExemples[n].seq1=seqARNpmGH;
tExemples[n].seq2="AGGAUCCCAAGGCCCAACUCCCCGAACCACUCAGGGUCCUGUGGACAGCUCACCUAGCUGCAAUGGCUACAGGCUCCCGGACGUCCCUGCUCCUGGCUUUUGGCCUGCUCUGCCUGCCCUGGCUUCAAGAGGGCAGUGCCUUCCCAACCAUUCCCUUAUCCAGGCUUUUUGACAACGCUAUGCUCCGCGCCCAUCGUCUGCACCAGCUGGCCUUUGACACCUACCAGGAGUUUAACCCCCAGACCUCCCUCUGUUUCUCAGAGUCUAUUCCGACACCCUCCAACAGGGAGGAAACACAACAGAAAUCCAACCUAGAGCUGCUCCGCAUCUCCCUGCUGCUCAUCCAGUCGUGGCUGGAGCCCGUGCAGUUCCUCAGGAGUGUCUUCGCCAACAGCCUGGUGUACGGCGCCUCUGACAGCAACGUCUAUGACCUCCUAAAGGACCUAGAGGAAGGCAUCCAAACGCUGAUGGGGAGGCUGGAAGAUGGCAGCCCCCGGACUGGGCAGAUCUUCAAGCAGACCUACAGCAAGUUCGACACAAACUCACACAACGAUGACGCACUACUCAAGAACUACGGGCUGCUCUACUGCUUCAGGAAGGACAUGGACAAGGUCGAGACAUUCCUGCGCAUCGUGCAGUGCCGCUCUGUGGAGGGCAGCUGUGGCUUCUAGCUGCCCGGGUGGCAUCCCUGUGACCCCUCCCCAGUGCCUCUCCUGGCCCUGGAAGUUGCCACUCCAGUGCCCACCAGCCUUGUCCUAAUAAAAUUAAGUUGCAUCA";
tExemples[n].minDS=20;
tExemples[n].convert=true;

n++;
tExemples[n]=new Object();
tExemples[n].nom="Hormone de croissance (v3)";
tExemples[n].seq1=seqARNpmGH;
tExemples[n].seq2="AGGAUCCCAAGGCCCAACUCCCCGAACCACUCAGGGUCCUGUGGACAGCUCACCUAGCUGCAAUGGCUACAGGCUCCCGGACGUCCCUGCUCCUGGCUUUUGGCCUGCUCUGCCUGCCCUGGCUUCAAGAGGGCAGUGCCUUCCCAACCAUUCCCUUAUCCAGGCUUUUUGACAACGCUAUGCUCCGCGCCCAUCGUCUGCACCAGCUGGCCUUUGACACCUACCAGGAGUUUAACCUAGAGCUGCUCCGCAUCUCCCUGCUGCUCAUCCAGUCGUGGCUGGAGCCCGUGCAGUUCCUCAGGAGUGUCUUCGCCAACAGCCUGGUGUACGGCGCCUCUGACAGCAACGUCUAUGACCUCCUAAAGGACCUAGAGGAAGGCAUCCAAACGCUGAUGGGGAGGCUGGAAGAUGGCAGCCCCCGGACUGGGCAGAUCUUCAAGCAGACCUACAGCAAGUUCGACACAAACUCACACAACGAUGACGCACUACUCAAGAACUACGGGCUGCUCUACUGCUUCAGGAAGGACAUGGACAAGGUCGAGACAUUCCUGCGCAUCGUGCAGUGCCGCUCUGUGGAGGGCAGCUGUGGCUUCUAGCUGCCCGGGUGGCAUCCCUGUGACCCCUCCCCAGUGCCUCUCCUGGCCCUGGAAGUUGCCACUCCAGUGCCCACCAGCCUUGUCCUAAUAAAAUUAAGUUGCAUCA";
tExemples[n].minDS=20;
tExemples[n].convert=true;

n++;
tExemples[n]=new Object();
tExemples[n].nom="Hormone de croissance (v4)";
tExemples[n].seq1=seqARNpmGH;
tExemples[n].seq2="AGGAUCCCAAGGCCCAACUCCCCGAACCACUCAGGGUCCUGUGGACAGCUCACCUAGCUGCAAUGGCUACAGGCUCCCGGACGUCCCUGCUCCUGGCUUUUGGCCUGCUCUGCCUGCCCUGGCUUCAAGAGGGCAGUGCCUUCCCAACCAUUCCCUUAUCCAGGCUUUUUGACAACGCUAUGCUCCGCGCCCAUCGUCUGCACCAGCUGGCCUUUGACACCUACCAGGAGUUUAGGCUGGAAGAUGGCAGCCCCCGGACUGGGCAGAUCUUCAAGCAGACCUACAGCAAGUUCGACACAAACUCACACAACGAUGACGCACUACUCAAGAACUACGGGCUGCUCUACUGCUUCAGGAAGGACAUGGACAAGGUCGAGACAUUCCUGCGCAUCGUGCAGUGCCGCUCUGUGGAGGGCAGCUGUGGCUUCUAGCUGCCCGGGUGGCAUCCCUGUGACCCCUCCCCAGUGCCUCUCCUGGCCCUGGAAGUUGCCACUCCAGUGCCCACCAGCCUUGUCCUAAUAAAAUUAAGUUGCAUCA";
tExemples[n].minDS=20;
tExemples[n].convert=true;

n++;
tExemples[n]=new Object();
tExemples[n].nom="Hormone de croissance (v5)";
tExemples[n].seq1=seqARNpmGH;
tExemples[n].seq2="AGGAUCCCAAGGCCCAACUCCCCGAACCACUCAGGGUCCUGUGGACAGCUCACCUAGCUGCAAUGGCUACAGAGGCUGGAAGAUGGCAGCCCCCGGACUGGGCAGAUCUUCAAGCAGACCUACAGCAAGUUCGACACAAACUCACACAACGAUGACGCACUACUCAAGAACUACGGGCUGCUCUACUGCUUCAGGAAGGACAUGGACAAGGUCGAGACAUUCCUGCGCAUCGUGCAGUGCCGCUCUGUGGAGGGCAGCUGUGGCUUCUAGCUGCCCGGGUGGCAUCCCUGUGACCCCUCCCCAGUGCCUCUCCUGGCCCUGGAAGUUGCCACUCCAGUGCCCACCAGCCUUGUCCUAAUAAAAUUAAGUUGCAUCA";
tExemples[n].minDS=20;
tExemples[n].convert=true;

var seqCGRP="CCGCCGCTGCCACCGCCTCTGATCCAAGCCACCTCCCGCCAGGTGAGCCCCGAGATCCTGGCTCAGGTATATGTCTCTCCCTCCCTCTCCCTCCATTCGTCATTTTCTCACTCCCTTTCCTCCTCTCCCTCTCTCTCCGTTAGTCTCTTCATCAGATAGTCTCTGTTAGTCCGCGATTTATACCAGGCTCGTGCCCTAGGTTGGATCGGACAGTCTCAATCCCCCGGCTCGCTCTTCCTGCTCGGCTGCGGACTCCAGTCTTACTCTCTCGCACTGCACACAGGCTTAGGCCAGTCTCGGGACACTCAGGCTCCCCAGGGACCGCGCACAGAGCCTGAGGCAAGAGAAACTTTCCGCAGACGGTGCGATCAGGGACGGCGTCTGGAGCCCAGCAGTCCCAGGGAAATTGGTTCAGAACCTGGAACAGAGCGGATGGGTGGCAAATAGGCACGACGACTGAGGGACAAGCAGCCCTAAACTGCAAGCCCCAGTCACAGGCTCTGGGAGCAAAGAGAGAAAGTCTTGGGTCCCAATTTAAGAGTAAAACTTGGTTCCTGCAGGGGACTGAGGTGCCAGCAGGCGGAGCTTAGGCTGAGCACTAAAATTGATTCTTTTATTTCTCAGATTCCAATTGCAGAGATAATCTCTGTGGATAGATCCCACCCCTCCCACCAAGGTGTATGCAAAAGCCCCAGAAGAGGAGGACAGCTCTGGGTTTCCTTATGGGATCAGCTTCTGTGACAGGGGCCTGGGAGCATGTCCTCCACAGAGACCTGGCTAACAGGTTTATATGTATCTGTGTGGCTTTGGGGAGAAGGGTAGGACTGAGACCTCCCCCACTCAGCTCTCCCTCTAGGATCGCTCCTCCAGCTCTATCAGACTGTGCATGCTACAGGCCCACTGAACCTCCCAGAAGTCCACTGTGCTGATGAGGAAACAAAAAAGAAGAGAAATATAATGACCAGTCTGAAGCCACAAAGCCAGAGCGTTAGAAGCAAGACAGAAAACCAGGATAGGAGCCAAGGTCTGTGGGCTCCTAGAACTTCGAACTGGCGCAGGTGGTTTATCTCATTCTTCCCTTGCAGAGAGGTGTCATGGGCTTCCAAAAGTTCTCCCCCTTCCTGGCTCTCAGCATCTTGGTCCTGTTGCAGGCAGGCAGCCTCCATGCAGCACCATTCAGGTAAGACAGCCTGAAGCCAGAACCACACTGGTATCAGACAATTCCATGCCTCTTAAGTGTGGTGTACTGAATGCTTAAAAACCGACAGGGGGCCGGGGTAAGGTATGTACTCATGCACATATATAATTTTTTGATATAAAAATGTGTGGTACACAATTTATAAGTAGTGATAAATATTTAGACAATATTCTTCATTATAATTTTTTTGAGACAGAGTCTCACTCTGTCATCCATGCTGGAGTGCAATGGCACCGTGTCGGCTCACTGCAACTTCCATCTCCTGGGTTCAAGCAATTCTCCTGCCTCAGCCTCCCAAGTAGCCGGGATTACAGGCGCCCACCACCATGCCCGGCTAATTTTTGTATTTTTAGTAGAGATAGGGTTTCACCATGTTGGCCAGGCTGGTCTCAAACTCCTGACCTCAGGTGATCCACCTGCCTCAGCCTCCCAAAGTGCTGAGATTACAGCCGTGAGCCACCGCGCCCGGCCTATTATAAATTTTATATAGCCCACTGAGTCTCACAAAATGCTTTTGTTGCTTTTAGCCAAACTTTTGTATGTGTAGCCATCCTATTTATCCTATTCAGCCATGATTTGAAAAATGAATTGCATCCTATTCTGTTAAATAGTTTGCCACTAAATTTGTTATTGTTAAATCTGGTATTTTACCTGTTGATCTATTTCTCACCCACATATAAATCTATTAAACTGAAACTATTTTCAGGTTCAGCACTAACTGTAAGTTTTTGCATTTAATTTTTAATAATGGCTGCACTCAGCTTGCAAAATTCTTGAAAATTTAACCATTAGCTTTCACAAGCCTATACAAACTGGCTCCAGCACACCACTGTTTAGAGGCCACACCAGTGCCTGGGTCCTGAGGAGGACACTGGCCTTGTGCCCTGTCCCCTAGGACTCCCGCTGGCCACATCCTCAGGGGAAGAAGCAAAGACCAGGAAGCCTGGCTGCTTATCCTGGGGAGGGGCAGGCAGGGGCTCACAGCCTGCACTGAGTTTGCTTCCCCTCCACAGGTCTGCCCTGGAGAGCAGCCCAGCAGACCCGGCCACGCTCAGTGAGGACGAAGCGCGCCTCCTGCTGGCTGCACTGGTGCAGGACTATGTGCAGATGAAGGCCAGTGAGCTGGAGCAGGAGCAAGAGAGAGAGGGCTCCAGGTGAGGCTCCCCAAGCGCTCAGCACAGGGCCTCCTCTCCCCGCAGCATACACAGGAAGGTGGATCCCGAGAGGTAGGAGAGAACACACTGGCCAGGAATCCAACAGGCTGTGTTGTTCACCGGGACCTGGGGCCCAGCTGTTCTCAGCCTCCAAGGGAGACAGAGGTCCCACTGCAGCTGGAGGTACCGTGGTTAGACATAACAAAAGGCTCCGTTTCTGAAAGTTCTTAGGAAATGAAATGGGGAGGTGTGGAATCGCTCACTGTGGGAATTGTTCTTGCAGTACTGGGAGACCTCCCAGCACTGGATGAGTTAAGACTAGTAAGGGTGAAGTCAGGGATACACATAGTACATCTCAGGAAGTTTTAGAAATTTGGATCCACCTTGTTAATCTGCATACGACATTCTTTCACACCTGCAAGGAGCTTTCATTTCACATTTGCAAGGTGAAGGTGAGGCCCTTGCAGGGGATGGGGATGGGTAGAGCAGTGTCTGAGGTAGGTTTGAGCCTTTAAATGTGTGGCATCTGTGGAGATGTGCATGTTGTCAGGAGGCCAGGGAGAGCACCCTTCCCCAGATCCACATCCCTGTGTACCTTGAGCCTGAGCAGAGACCAGCCCCTGGCCTGGCCCCAGCACTGCTCAGGCAGAGGCATGTGTTGCCCCTGCATCTGCCCTGAGAACCCCTCTGTCAAGCATGAAGGACTGAACAGCATGTGGAATGCCAGAAAAGATCATCCTTCCCCATCCAGCCCTTCCCTGCATTGCCCTAGCCCACTGCACCTCTGAGCTCTCCTAATGAAGGATAGATAAGTGAGCTGCCCTCCTGCCTGCCCCTCCTGCTCCCAGGGTCCCCTGCCTGGTCTAACCTTCTAAGTGACTGCCCATGGGGACAGATTCTGGTGCATGGTACTGTCTGGTATGTGTTTTCCCTGCAGCCTGGACAGCCCCAGATCTAAGCGGTGCGGTAATCTGAGTACTTGCATGCTGGGCACATACACGCAGGACTTCAACAAGTTTCACACGTTCCCCCAAACTGCAATTGGGGTTGGAGCACCTGGAAAGAAAAGGGATATGTCCAGCGACTTGGAGAGAGACCATCGCCCTCATGTTAGCATGCCCCAGAATGCCAACTAAACTCCTCCCTTTCCTTCCTAATTTCCCTTCTTGCATCCTTCCTATAACTTGATGCATGTGGTTTGGTTCCTCTCTGGTGGCTCTTTGGGCTGGTATTGGTGGCTTTCCTTGTGGCAGAGGATGTCTCAAACTTCAGATGGGAGGAAAGAGAGCAGGACTCACAGGTTGGAAGAGAATCACCTGGGAAAATACCAGAAAATGAGGGCCGCTTTGAGTCCCCCAGAGATGTCATCAGAGCTCCTCTGTCCTGCTTCTGAATGTGCTGATCATTTGAGGAATAAAATTATTTTTCCCCAAAGATCTGAGCTGTGGTGGTCATTGCTCTGATCTATGTCCCAGGCTTCATAGTGTCTAAGACCTATGCTTAGAAATAGCCTTAACCCTAGGCTAGCTGGACAGAGGATATGGTGGGTGGTCCCTTTGACCAAGCTCAAGCAGGAAGAACAGGGGTCCTAAGGAGCAGGTAAGCACCTCTAGGACTTGATGCTGCAAACTCCGCTCCTCTTCCAGGTAAGACTGAGGAATTTTTTATTTTCCTAAGAAAGGGTATTTGGTGCCCGTGACTGGGGTGTAGATTTTATAGTCCTTTGTGAATGGGGCTGGGTGTGGGACCATAATTCACTCCAGTGTCATAAACCTCCGCTTTGATTTTTAGTTAATTTATACAGGAAAGATTGGCTGTTACTGCTCCACATTCCATAGCCAGTCATCCAGAGTCACCTTGGGTTTTCTGACACCCCTGGGAATATCTATGGGGAGTGATCATGGCATTTTCCCTAATGGCCTTGTGATTTTCTGCTCTGATAATTGTGTTTAGGAGAAACACTTAAAGTTAATTGGTGCCTTTCAGCACAGCAACTTTACCATGAAGGTCCCATGGGGCTGACCTCTCTCCCAGCCTCTCACTCACAGATCTTCTCTTCTTTCTCCATCCTGCAAATCAGAATCATTGCCCAGAAGAGAGCCTGTGACACTGCCACCTGTGTGACTCATCGGCTGGCAGGCTTGCTGAGCAGATCAGGGGGTGTGGTGAAGAACAACTTTGTGCCCACCAATGTGGGTTCCAAAGCCTTTGGCAGGCGCCGCAGGGACCTTCAAGCCTGAGCAGCTGAATGACTCAAGAAGGTGACTGCCCTTGTATGATGGGATGGGAAGATGAATGACTGGTTTTTACAGGGGTGTAAAACCACTCTGAGCCTCTCTGAGACCATGTGGTTTTAAAAAATCCATAAGGGAAGGTACCCACACCAGTATCTGAGTTCCAGTAGCTAAGACCCTAGAATTTGGATTCATCTCTGTTTTTTCAGTCTCTCCTTGTAACCCTGAGATCATCAGACCAAGAAATACAGATCCTGTTTATTTAGAACACTGCTGTTTGACATTTATAATTTTGATTATTCTAGCCTTTGAGTTTGAAAGATAATGACACTATCATTTTAGAGTATACATTACTATGTTGTGTACCTCTGAATTAAGTGTACAGACTTGAGTTCAAGAACTGTATTTGCCCTTTACCAGCTATATGACCATGAACAGGTTACTTAACTCTCTCCAAGCCTCAGTTTCTCCATCTGTAAATTGAGGGCTACAATAGTACCTACCTCCAAGCATTACTATAAAGAGCAAGTGAGGTAATAGATGTTAAGTCTGACAATTAACCAGTAACTAAATTCTAGCTGTTATTTTCTTCCTCCTAGGTCACAATAAAGCTGAACTCCTTTTAATGTGTAATGAAAGCAATTTGTAGGAAAGGCTCCATGGAAGACATACATATAGGCATCCTTCTTGATACTGAAAACTATCTTCTTTGTTTGAAAGGAACTATTGCTAAATGCAGAACAAGCTCATTGCAGTTACCTATTGTGCATCTTTTTAAATACTTGATTATGTAACCATAAATCTGACAGCATGTCTCATTGGCTTATCTGGTAGCAAATCTAGGCCCCGTCAGCCACCCTATTGACATTGGTGGCTCTGCTAAACCTCAGGGGGACATGAAATCACTGCCTCTTGGGCATCTGGGGACACATGGTAATGCTGTGCCTTGACAGAAGTATTTGTTTAAAGAAATGTCAATGCTGTCATTTGTGAACTCTATCAAAATTAAAAATGTATTTTCTATACCCTTCA";
n++;
tExemples[n]=new Object();
tExemples[n].nom="CALCA (protéine CGRP)";
tExemples[n].seq1=seqCGRP;
tExemples[n].seq2="CCGCCGCUGCCACCGCCUCUGAUCCAAGCCACCUCCCGCCAGGUGAGCCCCGAGAUCCUGGCUCAGAGAGGUGUCAUGGGCUUCCAAAAGUUCUCCCCCUUCCUGGCUCUCAGCAUCUUGGUCCUGUUGCAGGCAGGCAGCCUCCAUGCAGCACCAUUCAGGUCUGCCCUGGAGAGCAGCCCAGCAGACCCGGCCACGCUCAGUGAGGACGAAGCGCGCCUCCUGCUGGCUGCACUGGUGCAGGACUAUGUGCAGAUGAAGGCCAGUGAGCUGGAGCAGGAGCAAGAGAGAGAGGGCUCCAGAAUCAUUGCCCAGAAGAGAGCCUGUGACACUGCCACCUGUGUGACUCAUCGGCUGGCAGGCUUGCUGAGCAGAUCAGGGGGUGUGGUGAAGAACAACUUUGUGCCCACCAAUGUGGGUUCCAAAGCCUUUGGCAGGCGCCGCAGGGACCUUCAAGCCUGAGCAGCUGAAUGACUCAAGAAGGUCACAAUAAAGCUGAACUCCUUUUAAUGUGUAAUGAAAGCAAUUUGUAGGAAAGGCUCCAUGGAAGACAUACAUAUAGGCAUCCUUCUUGAUACUGAAAACUAUCUUCUUUGUUUGAAAGGAACUAUUGCUAAAUGCAGAACAAGCUCAUUGCAGUUACCUAUUGUGCAUCUUUUUAAAUACUUGAUUAUGUAACCAUAAAUCUGACAGCAUGUCUCAUUGGCUUAUCUGGUAGCAAAUCUAGGCCCCGUCAGCCACCCUAUUGACAUUGGUGGCUCUGCUAAACCUCAGGGGGACAUGAAAUCACUGCCUCUUGGGCAUCUGGGGACACAUGGUAAUGCUGUGCCUUGACAGAAGUAUUUGUUUAAAGAAAUGUCAAUGCUGUCAUUUGUGAACUCUAUCAAAAUUAAAAAUGUAUUUUCUAUACCCUUCA";
tExemples[n].minDS=20;
tExemples[n].convert=true;

n++;
tExemples[n]=new Object();
tExemples[n].nom="CALCA (calcitonine)";
tExemples[n].seq1=seqCGRP;
tExemples[n].seq2="CCGCCGCUGCCACCGCCUCUGAUCCAAGCCACCUCCCGCCAGGUGAGCCCCGAGAUCCUGGCUCAGAGAGGUGUCAUGGGCUUCCAAAAGUUCUCCCCCUUCCUGGCUCUCAGCAUCUUGGUCCUGUUGCAGGCAGGCAGCCUCCAUGCAGCACCAUUCAGGUCUGCCCUGGAGAGCAGCCCAGCAGACCCGGCCACGCUCAGUGAGGACGAAGCGCGCCUCCUGCUGGCUGCACUGGUGCAGGACUAUGUGCAGAUGAAGGCCAGUGAGCUGGAGCAGGAGCAAGAGAGAGAGGGCUCCAGCCUGGACAGCCCCAGAUCUAAGCGGUGCGGUAAUCUGAGUACUUGCAUGCUGGGCACAUACACGCAGGACUUCAACAAGUUUCACACGUUCCCCCAAACUGCAAUUGGGGUUGGAGCACCUGGAAAGAAAAGGGAUAUGUCCAGCGACUUGGAGAGAGACCAUCGCCCUCAUGUUAGCAUGCCCCAGAAUGCCAACUAAACUCCUCCCUUUCCUUCCUAAUUUCCCUUCUUGCAUCCUUCCUAUAACUUGAUGCAUGUGGUUUGGUUCCUCUCUGGUGGCUCUUUGGGCUGGUAUUGGUGGCUUUCCUUGUGGCAGAGGAUGUCUCAAACUUCAGAUGGGAGGAAAGAGAGCAGGACUCACAGGUUGGAAGAGAAUCACCUGGGAAAAUACCAGAAAAUGAGGGCCGCUUUGAGUCCCCCAGAGAUGUCAUCAGAGCUCCUCUGUCCUGCUUCUGAAUGUGCUGAUCAUUUGAGGAAUAAAAUUAUUUUUCCCCAAA";
tExemples[n].minDS=20;
tExemples[n].convert=true;


function changeExemple(n) {
	var ex=tExemples[n];
	var minDS=ex.minDS;
	doConv=ex.convert;
	seq1=ex.seq1;
	seq2=ex.seq2;
	titreSequence=ex.nom;

	document.getElementById ("text_minsel").value=minDS;
	document.getElementById ("check_notconv").checked=!doConv;
	document.getElementById ("check_notconv").checked=!doConv;
	changeSequences();
}

function remplitListe () {
	var select=document.getElementById ('selectExemples');
	select.options.length = 0;
	for (var i=0;i<tExemples.length;i++) {
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = tExemples[i].nom;
		select.appendChild(opt);
	}
}