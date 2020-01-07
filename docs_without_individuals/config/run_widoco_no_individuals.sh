#!/bin/bash

# create temporary ontology file combining concerns.ttl, frameworks.ttl and sto.ttl
head -n 27 ../../concerns.ttl > prefixes_concerns.ttl
head -n 27 ../../frameworks.ttl > prefixes_frameworks.ttl
head -n 27 ../../sto.ttl > prefixes_sto.ttl

sort -u prefixes_concerns.ttl prefixes_frameworks.ttl prefixes_sto.ttl > prefixes.ttl

# prevent a parsing error when reading the sto individuals (for now..)
sto_indi_start=$(grep -n -m 1 "#    Individuals" ../../sto.ttl | cut -d: -f1)
sto_indi_start=$(expr $sto_indi_start - 27)

{ cat prefixes.ttl; tail -n +28 ../../concerns.ttl; tail -n +28 ../../frameworks.ttl; tail -n +28 ../../sto.ttl | head -n $(($sto_indi_start)); } > ontology.ttl

java -jar widoco-1.4.12-jar-with-dependencies.jar -ontFile ontology.ttl -uniteSections -confFile ../../docs/config/config.properties -outFolder ../../docs_without_individuals -rewriteAll -ignoreIndividuals
mv ../index-en.html ../index.html

# clean up namespaces:
ns_tab_start=$(grep -n -m 1 "<tbody>" ../index.html | cut -d: -f1)
ns_tab_end=$(grep -n -m 1 "</tbody>" ../index.html | cut -d: -f1)

cat prefixes.ttl | while read line 
do
  echo $line | sed 's/\@prefix \(.*\): <\(.*\)> \./<tr><td><b>\1<\/b><\/td> <td>\&lt;\2\&gt;<\/td><\/tr>/' >> prefix_ns_tab.html
done

{ head -n $(($ns_tab_start)) ../index.html; cat prefix_ns_tab.html ; tail -n +$ns_tab_end ../index.html; } > tmp_index.html
mv tmp_index.html ../index.html

# replace standard introduction and description with something meaningful..
sed -i -e 's/This is a place holder text for the introduction\. The introduction should briefly describe the ontology, its motivation, state of the art and goals\./This documentation presents the I40KG, an ontology to describe standards, organizations for publishing standards as well as standardization frameworks in the context of Industry 4\.0\./' ../index.html

sed -i -e 's/This is a placeholder text for the description of your ontology\. The description should include an explanation and a diagram explaining how the classes are related, examples of usage, etc\.<\/span>/Classes and properties from existing ontologies are reused, e\.g\., PROV for describing provenance of entities, and FOAF for representing and linking documents\. DCTERMS for document metadata, such as licenses and titles as well as the RAMI4\.0 ontology for linking Standards with RAMI4\.0 concepts\.<\/span>\n<div>\n\t<img src="resources\/sto\.png" title="STO \- The Industry 4\.0 Standards Ontology" style="max-width:100%">\n<\/div>/' ../index.html

sed -i -e 's/Add your references here\. It is recommended to have them as a list\./<ul><li>Grangel-Gonzalez Irlan, Paul Baptista, Lavdim Halilaj, Steffen Lohmann, Maria-Esther Vidal, Cristian Mader, Soeren Auer, The industry 4\.0 standards landscape from a semantic integration perspective, in: 22nd IEEE International Conference on Emerging Technologies and Factory Automation, ETFA, Limassol, Cyprus, September 12-15, 2017, pp\. 1–8\.<\/li><li>Lu,  K\.  C\.  Morris,  S\.  Frechette,  Standards  landscape  and  directions for  smart  manufacturing  systems,  in:  IEEE  International  Conference on Automation Science and Engineering, CASE, Gothenburg, Sweden, August 24-28, 2015, pp\. 998–1005\.<\/li><li>S\.-W\. Lin, B\. Murphy, E\. Clauer, U\. Loewen, R\. Neubert, G\. Bachmann,M\. Pai, M\. Hankel, Reference Architectural Model Industrie 4\.0 (RAMI4\.0), Tech\. rep\., Industrial Internet Consortium and Plattform Industrie4\.0 (2017)\.<\/li><\/ul>/' ../index.html

sed -i -e 's/The authors would like to thank <a href="http:\/\/www\.essepuntato\.it\/">Silvio Peroni<\/a> for developing <a href="http:\/\/www\.essepuntato\.it\/lode">LODE<\/a>, a Live OWL Documentation Environment, which is used for representing the Cross Referencing Section of this document and <a href="https:\/\/w3id\.org\/people\/dgarijo">Daniel Garijo<\/a> for developing <a href="https:\/\/github\.com\/dgarijo\/Widoco">Widoco<\/a>, the program used to create the template used in this documentation\./<div class="entity">\n\t This ontology is developed as a part of the <a href="http:\/\/boost40\.eu">Boost 4\.0 Project<\/a>\.\n\<\/div>\n<div id="copyright">\n\t<h2> © Fraunhofer IAIS and University of Bonn <\/h2>\n<\/div>/' ../index.html

mkdir -p ../serializations
mv ../ontology.xml ../serializations/
mv ../ontology.ttl ../serializations/
mv ../ontology.json ../serializations/
mv ../ontology.nt ../serializations/

rm prefixes_concerns.ttl
rm prefixes_frameworks.ttl
rm prefixes_sto.ttl
rm prefixes.ttl
rm prefix_ns_tab.html
rm ontology.ttl