var testXML = `
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
<!DOCTYPE body [
	<!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<lists>
	<books>
		<book id="bk101">
			<author>Gambardella, Matthew</author>
			<title>XML Developer's Guide</title>
			<genre>Computer</genre>
			<price>44.95</price>
			<publish_date>2000-10-01</publish_date>
			<description>
				An in-depth look at creating applications 
				with XML.
			</description>
		</book>
			<book id="bk102">
			<author>Ralls, Kim</author>
			<title>Midnight Rain</title>
			<genre>Fantasy</genre>
			<price>5.95</price>
			<publish_date>2000-12-16</publish_date>
			<description>
				A former architect battles corporate zombies, 
				an evil sorceress, and her own childhood to become queen 
				of the world.
			</description>
		</book>
			<book id="bk103">
			<author>Corets, Eva</author>
			<title>Maeve Ascendant</title>
			<genre>Fantasy</genre>
			<price>5.95</price>
			<publish_date>2000-11-17</publish_date>
			<description>
				After the collapse of a nanotechnology 
				society in England, the young survivors lay the 
				foundation for a new society.
			</description>
		</book>
			<book id="bk104">
			<author>Corets, Eva</author>
			<title>Oberon's Legacy</title>
			<genre>Fantasy</genre>
			<price>5.95</price>
			<publish_date>2001-03-10</publish_date>
			<description>
				In post-apocalypse England, the mysterious 
				agent known only as Oberon helps to create a new life 
				for the inhabitants of London. Sequel to Maeve 
				Ascendant.
			</description>
		</book>
			<book id="bk105">
			<author>Corets, Eva</author>
			<title>The Sundered Grail</title>
			<genre>Fantasy</genre>
			<price>5.95</price>
			<publish_date>2001-09-10</publish_date>
			<description>
				The two daughters of Maeve, half-sisters, 
				battle one another for control of England. Sequel to 
				Oberon's Legacy.
			</description>
		</book>
			<book id="bk106">
			<author>Randall, Cynthia</author>
			<title>Lover Birds</title>
			<genre>Romance</genre>
			<price>4.95</price>
			<publish_date>2000-09-02</publish_date>
			<description>
				When Carla meets Paul at an ornithology 
				conference, tempers fly as feathers get ruffled.
			</description>
		</book>
			<book id="bk107">
			<author>Thurman, Paula</author>
			<title>Splish Splash</title>
			<genre>Romance</genre>
			<price>4.95</price>
			<publish_date>2000-11-02</publish_date>
			<description>
				A deep sea diver finds true love twenty 
				thousand leagues beneath the sea.
			</description>
		</book>
			<book id="bk108">
			<author>Knorr, Stefan</author>
			<title>Creepy Crawlies</title>
			<genre>Horror</genre>
			<price>4.95</price>
			<publish_date>2000-12-06</publish_date>
			<description>
				An anthology of horror stories about roaches,
				centipedes, scorpions  and other insects.
			</description>
		</book>
			<book id="bk109">
			<author>Kress, Peter</author>
			<title>Paradox Lost</title>
			<genre>Science Fiction</genre>
			<price>6.95</price>
			<publish_date>2000-11-02</publish_date>
			<description>
				After an inadvertant trip through a Heisenberg
				Uncertainty Device, James Salway discovers the problems 
				of being quantum.
			</description>
		</book>
			<book id="bk110">
			<author>O'Brien, Tim</author>
			<title>Microsoft .NET: The Programming Bible</title>
			<genre>Computer</genre>
			<price>36.95</price>
			<publish_date>2000-12-09</publish_date>
			<description>
				Microsoft's .NET initiative is explored in 
				detail in this deep programmer's reference.
			</description>
		</book>
			<book id="bk111">
			<author>O'Brien, Tim</author>
			<title>MSXML3: A Comprehensive Guide</title>
			<genre>Computer</genre>
			<price>36.95</price>
			<publish_date>2000-12-01</publish_date>
			<description>
				The Microsoft MSXML3 parser is covered in 
				detail, with attention to XML DOM interfaces, XSLT processing, 
				SAX and more.
			</description>
		</book>
			<book id="bk112">
			<author>Galos, Mike</author>
			<title>Visual Studio 7: A Comprehensive Guide</title>
			<genre>Computer</genre>
			<price>49.95</price>
			<publish_date>2001-04-16</publish_date>
			<description>
				Microsoft Visual Studio 7 is explored in depth,
				looking at how Visual Basic, Visual C++, C#, and ASP+ are 
				integrated into a comprehensive development 
				environment.
			</description>
		</book>
	</books>
	<nutritionFacts>
		<dailyValues>
			<total-fat units="g">65</total-fat>
			<saturated-fat units="g">20</saturated-fat>
			<cholesterol units="mg">300</cholesterol>
			<sodium units="mg">2400</sodium>
			<carb units="g">300</carb>
			<fiber units="g">25</fiber>
			<protein units="g">50</protein>
		</dailyValues>
		<food>
			<!-- Avocado Dip -->
			<name>Avocado Dip</name>
			<mfr>Sunnydale</mfr>
			<serving units="g">29</serving>
			<calories total="110" fat="100"/>
			<total-fat>11</total-fat>
			<saturated-fat>3</saturated-fat>
			<cholesterol>5</cholesterol>
			<sodium>210</sodium>
			<carb>2</carb>
			<fiber>0</fiber>
			<protein>1</protein>
			<vitamins>
				<a>0</a>
				<c>0</c>
			</vitamins>
			<minerals>
				<ca>0</ca>
				<fe>0</fe>
			</minerals>
		</food>
		<food>
			<!-- Bagels, New York Style  -->
			<name>Bagels, New York Style </name>
			<mfr>Thompson</mfr>
			<serving units="g">104</serving>
			<calories total="300" fat="35"/>
			<total-fat>4</total-fat>
			<saturated-fat>1</saturated-fat>
			<cholesterol>0</cholesterol>
			<sodium>510</sodium>
			<carb>54</carb>
			<fiber>3</fiber>
			<protein>11</protein>
			<vitamins>
				<a>0</a>
				<c>0</c>
			</vitamins>
			<minerals>
				<ca>8</ca>
				<fe>20</fe>
			</minerals>
		</food>
		<food>
			<!-- Beef Frankfurter, Quarter Pound  -->
			<name>Beef Frankfurter, Quarter Pound </name>
			<mfr>Armitage</mfr>
			<serving units="g">115</serving>
			<calories total="370" fat="290"/>
			<total-fat>32</total-fat>
			<saturated-fat>15</saturated-fat>
			<cholesterol>65</cholesterol>
			<sodium>1100</sodium>
			<carb>8</carb>
			<fiber>0</fiber>
			<protein>13</protein>
			<vitamins>
				<a>0</a>
				<c>2</c>
			</vitamins>
			<minerals>
				<ca>1</ca>
				<fe>6</fe>
			</minerals>
		</food>
		<food>
			<!-- Chicken Pot Pie -->
			<name>Chicken Pot Pie</name>
			<mfr>Lakeson</mfr>
			<serving units="g">198</serving>
			<calories total="410" fat="200"/>
			<total-fat>22</total-fat>
			<saturated-fat>9</saturated-fat>
			<cholesterol>25</cholesterol>
			<sodium>810</sodium>
			<carb>42</carb>
			<fiber>2</fiber>
			<protein>10</protein>
			<vitamins>
				<a>20</a>
				<c>2</c>
			</vitamins>
			<minerals>
				<ca>2</ca>
				<fe>10</fe>
			</minerals>
		</food>
		<food>
			<!-- Cole Slaw -->
			<name>Cole Slaw</name>
			<mfr>Fresh Quick</mfr>
			<serving units=" cup">1.5</serving>
			<calories total="20" fat="0"/>
			<total-fat>0</total-fat>
			<saturated-fat>0</saturated-fat>
			<cholesterol>0</cholesterol>
			<sodium>15</sodium>
			<carb>5</carb>
			<fiber>2</fiber>
			<protein>1</protein>
			<vitamins>
				<a>30</a>
				<c>45</c>
			</vitamins>
			<minerals>
				<ca>4</ca>
				<fe>2</fe>
			</minerals>
		</food>
		<food>
			<!-- Eggs -->
			<name>Eggs</name>
			<mfr>Goodpath</mfr>
			<serving units="g">50</serving>
			<calories total="70" fat="40"/>
			<total-fat>4.5</total-fat>
			<saturated-fat>1.5</saturated-fat>
			<cholesterol>215</cholesterol>
			<sodium>65</sodium>
			<carb>1</carb>
			<fiber>0</fiber>
			<protein>6</protein>
			<vitamins>
				<a>6</a>
				<c>0</c>
			</vitamins>
			<minerals>
				<ca>2</ca>
				<fe>4</fe>
			</minerals>
		</food>
		<food>
			<!-- Hazelnut Spread -->
			<name>Hazelnut Spread</name>
			<mfr>Ferreira</mfr>
			<serving units="tbsp">2</serving>
			<calories total="200" fat="90"/>
			<total-fat>10</total-fat>
			<saturated-fat>2</saturated-fat>
			<cholesterol>0</cholesterol>
			<sodium>20</sodium>
			<carb>23</carb>
			<fiber>2</fiber>
			<protein>3</protein>
			<vitamins>
				<a>0</a>
				<c>0</c>
			</vitamins>
			<minerals>
				<ca>6</ca>
				<fe>4</fe>
			</minerals>
		</food>
		<food>
			<!-- Potato Chips -->
			<name>Potato Chips</name>
			<mfr>Lees</mfr>
			<serving units="g">28</serving>
			<calories total="150" fat="90"/>
			<total-fat>10</total-fat>
			<saturated-fat>3</saturated-fat>
			<cholesterol>0</cholesterol>
			<sodium>180</sodium>
			<carb>15</carb>
			<fiber>1</fiber>
			<protein>2</protein>
			<vitamins>
				<a>0</a>
				<c>10</c>
			</vitamins>
			<minerals>
				<ca>0</ca>
				<fe>0</fe>
			</minerals>
		</food>
		<food>
			<!-- Soy Patties, Grilled -->
			<name>Soy Patties, Grilled</name>
			<mfr>Gardenproducts</mfr>
			<serving units="g">96</serving>
			<calories total="160" fat="45"/>
			<total-fat>5</total-fat>
			<saturated-fat>0</saturated-fat>
			<cholesterol>0</cholesterol>
			<sodium>420</sodium>
			<carb>10</carb>
			<fiber>4</fiber>
			<protein>9</protein>
			<vitamins>
				<a>0</a>
				<c>0</c>
			</vitamins>
			<minerals>
				<ca>0</ca>
				<fe>0</fe>
			</minerals>
		</food>
		<food>
			<!-- Truffles, Dark Chocolate -->
			<name>Truffles, Dark Chocolate</name>
			<mfr>Lyndon's</mfr>
			<serving units="g">39</serving>
			<calories total="220" fat="170"/>
			<total-fat>19</total-fat>
			<saturated-fat>14</saturated-fat>
			<cholesterol>25</cholesterol>
			<sodium>10</sodium>
			<carb>16</carb>
			<fiber>1</fiber>
			<protein>1</protein>
			<vitamins>
				<a>0</a>
				<c>0</c>
			</vitamins>
			<minerals>
				<ca>0</ca>
				<fe>0</fe>
			</minerals>
		</food>
	</nutritionFacts>
	<plants>
		<plant name="Bloodroot">
			<commonName>Bloodroot</commonName>
			<botanicalName>Sanguinaria canadensis</botanicalName>
			<zone>4</zone>
			<light>Mostly Shady</light>
			<price>$2.44</price>
			<availability>031599</availability>
		</plant>
		<plant name="Columbine">
			<commonName>Columbine</commonName>
			<botanicalName>Aquilegia canadensis</botanicalName>
			<zone>3</zone>
			<light>Mostly Shady</light>
			<price>$9.37</price>
			<availability>030699</availability>
		</plant>
		<plant name="Marsh Marigold">
			<commonName>Marsh Marigold</commonName>
			<botanicalName>Caltha palustris</botanicalName>
			<zone>4</zone>
			<light>Mostly Sunny</light>
			<price>$6.81</price>
			<availability>051799</availability>
		</plant>
		<plant name="Cowslip">
			<commonName>Cowslip</commonName>
			<botanicalName>Caltha palustris</botanicalName>
			<zone>4</zone>
			<light>Mostly Shady</light>
			<price>$9.90</price>
			<availability>030699</availability>
		</plant>
		<plant name="Dutchman's-Breeches">
			<commonName>Dutchman's-Breeches</commonName>
			<botanicalName>Dicentra cucullaria</botanicalName>
			<zone>3</zone>
			<light>Mostly Shady</light>
			<price>$6.44</price>
			<availability>012099</availability>
		</plant>
		<plant name="Ginger, Wild">
			<commonName>Ginger, Wild</commonName>
			<botanicalName>Asarum canadense</botanicalName>
			<zone>3</zone>
			<light>Mostly Shady</light>
			<price>$9.03</price>
			<availability>041899</availability>
		</plant>
		<plant name="Hepatica">
			<commonName>Hepatica</commonName>
			<botanicalName>Hepatica americana</botanicalName>
			<zone>4</zone>
			<light>Mostly Shady</light>
			<price>$4.45</price>
			<availability>012699</availability>
		</plant>
		<plant name="Liverleaf">
			<commonName>Liverleaf</commonName>
			<botanicalName>Hepatica americana</botanicalName>
			<zone>4</zone>
			<light>Mostly Shady</light>
			<price>$3.99</price>
			<availability>010299</availability>
		</plant>
		<plant name="Jack-In-The-Pulpit">
			<commonName>Jack-In-The-Pulpit</commonName>
			<botanicalName>Arisaema triphyllum</botanicalName>
			<zone>4</zone>
			<light>Mostly Shady</light>
			<price>$3.23</price>
			<availability>020199</availability>
		</plant>
		<plant name="Mayapple">
			<commonName>Mayapple</commonName>
			<botanicalName>Podophyllum peltatum</botanicalName>
			<zone>3</zone>
			<light>Mostly Shady</light>
			<price>$2.98</price>
			<availability>060599</availability>
		</plant>
		<plant name="Phlox, Woodland">
			<commonName>Phlox, Woodland</commonName>
			<botanicalName>Phlox divaricata</botanicalName>
			<zone>3</zone>
			<light>Sun or Shade</light>
			<price>$2.80</price>
			<availability>012299</availability>
		</plant>
		<plant name="Phlox, Blue">
			<commonName>Phlox, Blue</commonName>
			<botanicalName>Phlox divaricata</botanicalName>
			<zone>3</zone>
			<light>Sun or Shade</light>
			<price>$5.59</price>
			<availability>021699</availability>
		</plant>
		<plant name="Spring-Beauty">
			<commonName>Spring-Beauty</commonName>
			<botanicalName>Claytonia Virginica</botanicalName>
			<zone>7</zone>
			<light>Mostly Shady</light>
			<price>$6.59</price>
			<availability>020199</availability>
		</plant>
		<plant name="Trillium">
			<commonName>Trillium</commonName>
			<botanicalName>Trillium grandiflorum</botanicalName>
			<zone>5</zone>
			<light>Sun or Shade</light>
			<price>$3.90</price>
			<availability>042999</availability>
		</plant>
		<plant name="Wake Robin">
			<commonName>Wake Robin</commonName>
			<botanicalName>Trillium grandiflorum</botanicalName>
			<zone>5</zone>
			<light>Sun or Shade</light>
			<price>$3.20</price>
			<availability>022199</availability>
		</plant>
		<plant name="Violet, Dog-Tooth">
			<commonName>Violet, Dog-Tooth</commonName>
			<botanicalName>Erythronium americanum</botanicalName>
			<zone>4</zone>
			<light>Shade</light>
			<price>$9.04</price>
			<availability>020199</availability>
		</plant>
		<plant name="Trout Lily">
			<commonName>Trout Lily</commonName>
			<botanicalName>Erythronium americanum</botanicalName>
			<zone>4</zone>
			<light>Shade</light>
			<price>$6.94</price>
			<availability>032499</availability>
		</plant>
		<plant name="Adder's-Tongue">
			<commonName>Adder's-Tongue</commonName>
			<botanicalName>Erythronium americanum</botanicalName>
			<zone>4</zone>
			<light>Shade</light>
			<price>$9.58</price>
			<availability>041399</availability>
		</plant>
		<plant name="Anemone">
			<commonName>Anemone</commonName>
			<botanicalName>Anemone blanda</botanicalName>
			<zone>6</zone>
			<light>Mostly Shady</light>
			<price>$8.86</price>
			<availability>122698</availability>
		</plant>
		<plant name="Grecian Windflower">
			<commonName>Grecian Windflower</commonName>
			<botanicalName>Anemone blanda</botanicalName>
			<zone>6</zone>
			<light>Mostly Shady</light>
			<price>$9.16</price>
			<availability>071099</availability>
		</plant>
		<plant name="Bee Balm">
			<commonName>Bee Balm</commonName>
			<botanicalName>Monarda didyma</botanicalName>
			<zone>4</zone>
			<light>Shade</light>
			<price>$4.59</price>
			<availability>050399</availability>
		</plant>
		<plant name="Bergamot">
			<commonName>Bergamot</commonName>
			<botanicalName>Monarda didyma</botanicalName>
			<zone>4</zone>
			<light>Shade</light>
			<price>$7.16</price>
			<availability>042799</availability>
		</plant>
		<plant name="Black-Eyed Susan">
			<commonName>Black-Eyed Susan</commonName>
			<botanicalName>Rudbeckia hirta</botanicalName>
			<zone>Annual</zone>
			<light>Sunny</light>
			<price>$9.80</price>
			<availability>061899</availability>
		</plant>
		<plant name="Buttercup">
			<commonName>Buttercup</commonName>
			<botanicalName>Ranunculus</botanicalName>
			<zone>4</zone>
			<light>Shade</light>
			<price>$2.57</price>
			<availability>061099</availability>
		</plant>
		<plant name="Crowfoot">
			<commonName>Crowfoot</commonName>
			<botanicalName>Ranunculus</botanicalName>
			<zone>4</zone>
			<light>Shade</light>
			<price>$9.34</price>
			<availability>040399</availability>
		</plant>
		<plant name="Butterfly Weed">
			<commonName>Butterfly Weed</commonName>
			<botanicalName>Asclepias tuberosa</botanicalName>
			<zone>Annual</zone>
			<light>Sunny</light>
			<price>$2.78</price>
			<availability>063099</availability>
		</plant>
		<plant name="Cinquefoil">
			<commonName>Cinquefoil</commonName>
			<botanicalName>Potentilla</botanicalName>
			<zone>Annual</zone>
			<light>Shade</light>
			<price>$7.06</price>
			<availability>052599</availability>
		</plant>
		<plant name="Primrose">
			<commonName>Primrose</commonName>
			<botanicalName>Oenothera</botanicalName>
			<zone>3 - 5</zone>
			<light>Sunny</light>
			<price>$6.56</price>
			<availability>013099</availability>
		</plant>
		<plant name="Gentian">
			<commonName>Gentian</commonName>
			<botanicalName>Gentiana</botanicalName>
			<zone>4</zone>
			<light>Sun or Shade</light>
			<price>$7.81</price>
			<availability>051899</availability>
		</plant>
		<plant name="Blue Gentian">
			<commonName>Blue Gentian</commonName>
			<botanicalName>Gentiana</botanicalName>
			<zone>4</zone>
			<light>Sun or Shade</light>
			<price>$8.56</price>
			<availability>050299</availability>
		</plant>
		<plant name="Jacob's Ladder">
			<commonName>Jacob's Ladder</commonName>
			<botanicalName>Polemonium caeruleum</botanicalName>
			<zone>Annual</zone>
			<light>Shade</light>
			<price>$9.26</price>
			<availability>022199</availability>
		</plant>
		<plant name="Greek Valerian">
			<commonName>Greek Valerian</commonName>
			<botanicalName>Polemonium caeruleum</botanicalName>
			<zone>Annual</zone>
			<light>Shade</light>
			<price>$4.36</price>
			<availability>071499</availability>
		</plant>
		<plant name="California Poppy">
			<commonName>California Poppy</commonName>
			<botanicalName>Eschscholzia californica</botanicalName>
			<zone>Annual</zone>
			<light>Sun</light>
			<price>$7.89</price>
			<availability>032799</availability>
		</plant>
		<plant name="Shooting Star">
			<commonName>Shooting Star</commonName>
			<botanicalName>Dodecatheon</botanicalName>
			<zone>Annual</zone>
			<light>Mostly Shady</light>
			<price>$8.60</price>
			<availability>051399</availability>
		</plant>
		<plant name="Snakeroot">
			<commonName>Snakeroot</commonName>
			<botanicalName>Cimicifuga</botanicalName>
			<zone>Annual</zone>
			<light>Shade</light>
			<price>$5.63</price>
			<availability>071199</availability>
		</plant>
		<plant name="Cardinal Flower">
			<commonName>Cardinal Flower</commonName>
			<botanicalName>Lobelia cardinalis</botanicalName>
			<zone>2</zone>
			<light>Shade</light>
			<price>$3.02</price>
			<availability>022299</availability>
		</plant>
	</plants>
	<charStrings>
		<charString name="A">
			550 373 145 rmoveto
			0 0 37 -145 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 -197 790 0 0 rrcurveto
			0 0 -136 0 0 0 rrcurveto
			0 0 -197 -790 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 37 145 0 0 rrcurveto
			0 0 196 0 0 0 rrcurveto
			-30 120 rmoveto
			0 0 -136 0 0 0 rrcurveto
			0 0 68 268 0 0 rrcurveto
			0 0 68 -268 0 0 rrcurveto
			endchar
		</charString>
		<charString name="B">
			505 400 397 rmoveto
			27 13 18 27 0 32 rrcurveto
			0 0 0 241 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -165 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 0 -185 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -194 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 165 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 245 0 0 rrcurveto
			0 32 -18 27 -27 13 rrcurveto
			-200 63 rmoveto
			0 0 0 185 0 0 rrcurveto
			0 0 110 0 0 0 rrcurveto
			0 0 0 -96 0 0 rrcurveto
			0 0 0 -80 0 0 rrcurveto
			0 0 0 -9 0 0 rrcurveto
			0 0 -110 0 0 0 rrcurveto
			0 -327 rmoveto
			0 0 0 194 0 0 rrcurveto
			0 0 110 0 0 0 rrcurveto
			0 0 0 -2 0 0 rrcurveto
			0 0 0 -76 0 0 rrcurveto
			0 0 0 -116 0 0 rrcurveto
			0 0 -110 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="C">
			520 320 540 rmoveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 170 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -240 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 240 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 170 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -105 0 0 rrcurveto
			0 0 -115 0 0 0 rrcurveto
			0 0 0 500 0 0 rrcurveto
			0 0 115 0 0 0 rrcurveto
			0 0 0 -105 0 0 rrcurveto
			endchar
		</charString>
		<charString name="D">
			505 60 660 rmoveto
			0 0 0 -530 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 165 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 630 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -165 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			140 0 rmoveto
			0 0 101 0 0 0 rrcurveto
			5 0 4 -4 0 -5 rrcurveto
			0 0 0 -512 0 0 rrcurveto
			0 -5 -4 -3 -5 -1 rrcurveto
			0 0 -101 0 0 0 rrcurveto
			0 0 0 530 0 0 rrcurveto
			endchar
		</charString>
		<charString name="E">
			520 200 645 rmoveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 145 0 0 rrcurveto
			0 0 -260 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 0 -185 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -194 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 133 0 0 rrcurveto
			0 0 -260 0 0 0 rrcurveto
			0 0 0 194 0 0 rrcurveto
			0 0 215 0 0 0 rrcurveto
			0 0 0 133 0 0 rrcurveto
			0 0 -215 0 0 0 rrcurveto
			0 0 0 185 0 0 rrcurveto
			endchar
		</charString>
		<charString name="F">
			520 200 645 rmoveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 145 0 0 rrcurveto
			0 0 -260 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 0 -185 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 327 0 0 rrcurveto
			0 0 215 0 0 0 rrcurveto
			0 0 0 133 0 0 rrcurveto
			0 0 -215 0 0 0 rrcurveto
			0 0 0 185 0 0 rrcurveto
			endchar
		</charString>
		<charString name="G">
			530 340 540 rmoveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 170 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -250 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 95 0 0 0 rrcurveto
			0 0 35 0 0 0 rrcurveto
			5 0 4 0 3 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 3 -80 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 0 80 0 0 rrcurveto
			0 0 0 173 0 0 rrcurveto
			0 0 0 17 0 0 rrcurveto
			0 0 0 64 0 0 rrcurveto
			0 0 0 66 0 0 rrcurveto
			0 0 -200 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 70 0 0 0 rrcurveto
			0 0 0 -94 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			-9 0 -8 0 -6 0 rrcurveto
			-2 0 -4 0 -5 0 rrcurveto
			0 0 -35 0 0 0 rrcurveto
			0 0 -21 0 0 0 rrcurveto
			-5 1 -3 3 -1 5 rrcurveto
			0 0 0 501 0 0 rrcurveto
			0 0 135 0 0 0 rrcurveto
			0 0 0 -110 0 0 rrcurveto
			endchar
		</charString>
		<charString name="H">
			550 490 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -330 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 330 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -330 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 327 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="I">
			260 60 790 rmoveto
			0 0 0 -790 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 790 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="J">
			500 300 790 rmoveto
			0 0 0 -645 0 0 rrcurveto
			0 0 -120 0 0 0 rrcurveto
			0 0 0 95 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -160 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 240 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 710 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="K">
			547 60 790 rmoveto
			0 0 0 -330 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 145 0 0 0 rrcurveto
			0 0 0 327 0 0 rrcurveto
			0 0 12 0 0 0 rrcurveto
			0 0 144 -327 0 0 rrcurveto
			0 0 146 0 0 0 rrcurveto
			0 0 -183 400 0 0 rrcurveto
			0 0 168 390 0 0 rrcurveto
			0 0 -136 0 0 0 rrcurveto
			0 0 -144 -330 0 0 rrcurveto
			0 0 -7 0 0 0 rrcurveto
			0 0 0 330 0 0 rrcurveto
			0 0 -145 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="L">
			490 460 145 rmoveto
			0 0 -260 0 0 0 rrcurveto
			0 0 0 645 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -645 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 145 0 0 rrcurveto
			endchar
		</charString>
		<charString name="M">
			750 690 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 -90 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 -85 -479 0 0 rrcurveto
			0 0 -84 479 0 0 rrcurveto
			0 0 -1 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 -90 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 0 -690 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 622 0 0 rrcurveto
			0 0 110 -622 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 1 0 0 0 rrcurveto
			0 0 109 620 0 0 rrcurveto
			0 0 0 -620 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 690 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			endchar
		</charString>
		<charString name="N">
			557 497 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -430 0 0 rrcurveto
			0 0 -157 430 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -790 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 432 0 0 rrcurveto
			0 0 157 -432 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="O">
			535 475 710 rmoveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -255 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 255 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 630 0 0 rrcurveto
			-270 -565 rmoveto
			0 0 0 500 0 0 rrcurveto
			0 0 125 0 0 0 rrcurveto
			0 0 0 -500 0 0 rrcurveto
			0 0 -125 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="P">
			510 460 371 rmoveto
			0 0 0 339 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -320 0 0 0 rrcurveto
			0 0 0 -69 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 -721 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 290 0 0 rrcurveto
			0 0 180 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 1 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			-260 44 rmoveto
			0 0 0 230 0 0 rrcurveto
			0 0 120 0 0 0 rrcurveto
			0 0 0 -230 0 0 rrcurveto
			0 0 -120 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="Q">
			535 405 1 rmoveto
			40 5 30 33 0 41 rrcurveto
			0 0 0 630 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -255 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -43 34 -35 43 -2 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 131 0 0 0 rrcurveto
			8 0 7 -7 2 -2 rrcurveto
			0 0 82 -131 0 0 rrcurveto
			0 0 104 57 0 0 rrcurveto
			0 0 -66 84 0 0 rrcurveto
			-60 139 rmoveto
			0 0 -145 0 0 0 rrcurveto
			0 0 0 510 0 0 rrcurveto
			0 0 145 0 0 0 rrcurveto
			0 0 0 -510 0 0 rrcurveto
			endchar
		</charString>
		<charString name="R">
			512 492 5 rmoveto
			0 2 -1 1 -1 1 rrcurveto
			-1 0 0 0 -1 1 rrcurveto
			-25 13 -18 27 0 32 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 208 0 0 rrcurveto
			0 25 -12 23 -18 15 rrcurveto
			18 14 12 23 0 25 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 295 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -305 0 0 0 rrcurveto
			0 0 0 -70 0 0 rrcurveto
			0 0 0 -75 0 0 rrcurveto
			0 0 0 -230 0 0 rrcurveto
			0 0 0 -125 0 0 rrcurveto
			0 0 0 -290 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 290 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 0 -37 0 0 rrcurveto
			0 0 0 -172 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 -45 37 -36 45 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 100 0 1 0 rrcurveto
			2 1 2 2 0 2 rrcurveto
			-187 410 rmoveto
			0 0 -105 0 0 0 rrcurveto
			0 0 0 230 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 0 -192 0 0 rrcurveto
			0 0 0 -38 0 0 rrcurveto
			endchar
		</charString>
		<charString name="S">
			535 335 550 rmoveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 160 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -255 0 0 0 rrcurveto
			-41 0 -35 -32 -4 -40 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 -312 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 187 0 0 0 rrcurveto
			6 -1 5 -5 1 -6 rrcurveto
			0 0 0 -167 0 0 rrcurveto
			-1 -6 -5 -5 -6 -1 rrcurveto
			0 0 -115 0 0 0 rrcurveto
			-6 1 -5 5 -1 6 rrcurveto
			0 0 0 113 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -180 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 254 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 301 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -187 0 0 0 rrcurveto
			-6 1 -5 5 -1 6 rrcurveto
			0 0 0 170 0 0 rrcurveto
			1 6 5 5 6 1 rrcurveto
			0 0 116 0 0 0 rrcurveto
			6 -1 5 -5 1 -6 rrcurveto
			0 0 0 -93 0 0 rrcurveto
			endchar
		</charString>
		<charString name="T">
			500 470 657 rmoveto
			0 0 0 133 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 0 -657 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 657 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="U">
			550 490 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -660 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 660 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -710 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 270 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 710 0 0 rrcurveto
			endchar
		</charString>
		<charString name="V">
			540 530 790 rmoveto
			0 0 -136 0 0 0 rrcurveto
			0 0 -124 -550 0 0 rrcurveto
			0 0 -124 550 0 0 rrcurveto
			0 0 -136 0 0 0 rrcurveto
			0 0 190 -790 0 0 rrcurveto
			0 0 16 0 0 0 rrcurveto
			0 0 108 0 0 0 rrcurveto
			0 0 16 0 0 0 rrcurveto
			0 0 190 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="W">
			835 825 790 rmoveto
			0 0 -145 0 0 0 rrcurveto
			0 0 -106 -522 0 0 rrcurveto
			0 0 -98 522 0 0 rrcurveto
			0 0 -6 0 0 0 rrcurveto
			0 0 -105 0 0 0 rrcurveto
			0 0 -105 -518 0 0 rrcurveto
			0 0 -105 518 0 0 rrcurveto
			0 0 -145 0 0 0 rrcurveto
			0 0 190 -790 0 0 rrcurveto
			0 0 5 0 0 0 rrcurveto
			0 0 110 0 0 0 rrcurveto
			0 0 10 0 0 0 rrcurveto
			0 0 93 504 0 0 rrcurveto
			0 0 92 -504 0 0 rrcurveto
			0 0 10 0 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 10 0 0 0 rrcurveto
			0 0 190 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="X">
			520 30 790 rmoveto
			0 0 158 -377 0 0 rrcurveto
			0 0 -178 -413 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 100 261 0 0 rrcurveto
			0 0 100 -261 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 -178 413 0 0 rrcurveto
			0 0 158 377 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 -90 -230 0 0 rrcurveto
			0 0 -80 230 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="Y">
			470 300 264 rmoveto
			0 0 160 526 0 0 rrcurveto
			0 0 -145 0 0 0 rrcurveto
			0 0 -80 -345 0 0 rrcurveto
			0 0 -84 345 0 0 rrcurveto
			0 0 -141 0 0 0 rrcurveto
			0 0 160 -526 0 0 rrcurveto
			0 0 0 -264 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 264 0 0 rrcurveto
			endchar
		</charString>
		<charString name="Z">
			520 460 700 rmoveto
			0 0 0 90 0 0 rrcurveto
			0 0 -400 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 236 0 0 0 rrcurveto
			0 0 -236 -570 0 0 rrcurveto
			0 0 0 -90 0 0 rrcurveto
			0 0 400 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -236 0 0 0 rrcurveto
			0 0 236 570 0 0 rrcurveto
			endchar
		</charString>
		<charString name="a">
			550 373 145 rmoveto
			0 0 37 -145 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 -197 790 0 0 rrcurveto
			0 0 -136 0 0 0 rrcurveto
			0 0 -197 -790 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 37 145 0 0 rrcurveto
			0 0 196 0 0 0 rrcurveto
			-30 120 rmoveto
			0 0 -136 0 0 0 rrcurveto
			0 0 68 268 0 0 rrcurveto
			0 0 68 -268 0 0 rrcurveto
			endchar
		</charString>
		<charString name="ampersand">
			669 609 29 rmoveto
			0 13 -4 12 -8 11 rrcurveto
			0 0 -71 97 0 0 rrcurveto
			45 36 36 28 0 1 rrcurveto
			0 0 -76 93 0 0 rrcurveto
			0 0 -76 -62 0 0 rrcurveto
			0 0 -112 154 0 0 rrcurveto
			0 0 96 93 4 4 rrcurveto
			21 24 6 18 0 35 rrcurveto
			0 0 0 112 0 2 rrcurveto
			0 50 -40 40 -50 0 rrcurveto
			-2 0 -25 0 -13 0 rrcurveto
			0 0 -110 0 0 0 rrcurveto
			-13 0 -25 0 -2 0 rrcurveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 -2 0 -123 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			1 -24 9 -23 13 -18 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 61 -84 0 0 rrcurveto
			0 0 -86 -84 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			-23 -22 -15 -31 0 -34 rrcurveto
			0 0 0 -116 0 -25 rrcurveto
			0 -63 51 -51 63 0 rrcurveto
			1 0 2 0 1 0 rrcurveto
			1 0 0 0 1 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 114 0 0 0 rrcurveto
			21 0 15 11 14 9 rrcurveto
			9 6 59 45 20 16 rrcurveto
			0 0 64 -87 0 0 rrcurveto
			0 0 113 0 0 0 rrcurveto
			0 0 0 29 0 0 rrcurveto
			-286 651 rmoveto
			14 -1 12 -12 1 -14 rrcurveto
			0 0 0 -73 0 0 rrcurveto
			0 0 -75 -75 0 0 rrcurveto
			0 0 -55 75 0 0 rrcurveto
			0 0 0 73 0 0 rrcurveto
			2 14 11 12 14 1 rrcurveto
			0 0 76 0 0 0 rrcurveto
			38 -496 rmoveto
			0 0 -68 -53 -15 -11 rrcurveto
			0 0 -67 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 89 0 0 rrcurveto
			0 0 81 83 0 0 rrcurveto
			0 0 105 -144 0 0 rrcurveto
			endchar
		</charString>
		<charString name="asciicircum">
			568 370 489 rmoveto
			0 0 138 0 0 0 rrcurveto
			0 0 -146 301 0 0 rrcurveto
			0 0 -14 0 0 0 rrcurveto
			0 0 -128 0 0 0 rrcurveto
			0 0 -13 0 0 0 rrcurveto
			0 0 -147 -301 0 0 rrcurveto
			0 0 138 0 0 0 rrcurveto
			0 0 86 173 0 0 rrcurveto
			0 0 86 -173 0 0 rrcurveto
			endchar
		</charString>
		<charString name="asciitilde">
			634 574 374 rmoveto
			0 0 -94 27 0 0 rrcurveto
			0 -37 -31 -31 -37 0 rrcurveto
			-23 0 -20 11 -12 17 rrcurveto
			0 1 -1 0 0 0 rrcurveto
			-30 41 -48 27 -55 0 rrcurveto
			-82 0 -68 -59 -13 -79 rrcurveto
			0 0 95 -27 0 0 rrcurveto
			0 38 30 30 38 0 rrcurveto
			22 0 20 -11 13 -17 rrcurveto
			0 0 0 0 0 -1 rrcurveto
			30 -41 49 -27 55 0 rrcurveto
			82 0 67 60 13 78 rrcurveto
			endchar
		</charString>
		<charString name="asterisk">
			512 337 574 rmoveto
			0 0 115 37 0 0 rrcurveto
			0 0 -31 95 0 0 rrcurveto
			0 0 -115 -37 0 0 rrcurveto
			0 0 0 121 0 0 rrcurveto
			0 0 -100 0 0 0 rrcurveto
			0 0 0 -121 0 0 rrcurveto
			0 0 -115 37 0 0 rrcurveto
			0 0 -31 -95 0 0 rrcurveto
			0 0 115 -37 0 0 rrcurveto
			0 0 -71 -98 0 0 rrcurveto
			0 0 81 -59 0 0 rrcurveto
			0 0 71 98 0 0 rrcurveto
			0 0 71 -98 0 0 rrcurveto
			0 0 81 59 0 0 rrcurveto
			0 0 -71 98 0 0 rrcurveto
			endchar
		</charString>
		<charString name="at">
			855 795 470 rmoveto
			0 138 -112 112 -138 0 rrcurveto
			0 0 0 0 -1 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 -234 0 0 0 rrcurveto
			-138 0 -112 -112 0 -138 rrcurveto
			0 0 0 -306 0 0 rrcurveto
			0 -138 112 -112 138 0 rrcurveto
			0 0 445 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -445 0 0 0 rrcurveto
			-2 0 -3 0 -2 1 rrcurveto
			-70 5 -57 52 -13 68 rrcurveto
			-2 8 -1 8 0 8 rrcurveto
			0 0 0 306 0 0 rrcurveto
			0 8 1 8 2 8 rrcurveto
			13 68 57 52 70 6 rrcurveto
			2 0 3 0 2 0 rrcurveto
			0 0 234 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			1 0 0 0 0 0 rrcurveto
			2 0 3 0 2 0 rrcurveto
			71 -6 56 -52 13 -68 rrcurveto
			2 -8 1 -8 0 -8 rrcurveto
			0 0 0 -219 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -18 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 269 0 0 rrcurveto
			0 0 -100 0 0 0 rrcurveto
			0 0 0 -46 0 0 rrcurveto
			-3 25 -18 19 -25 2 rrcurveto
			0 0 -12 0 0 0 rrcurveto
			0 0 -17 0 0 0 rrcurveto
			0 0 -100 0 0 0 rrcurveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 -225 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 104 0 0 0 rrcurveto
			0 0 22 0 0 0 rrcurveto
			0 0 12 0 0 0 rrcurveto
			20 2 15 18 2 23 rrcurveto
			0 0 0 -7 0 0 rrcurveto
			2 -19 15 -15 19 -2 rrcurveto
			0 0 25 0 0 0 rrcurveto
			0 0 139 0 0 0 rrcurveto
			50 0 40 40 0 50 rrcurveto
			0 0 0 265 0 0 rrcurveto
			-326 -255 rmoveto
			0 0 -13 0 0 0 rrcurveto
			0 0 -13 0 0 0 rrcurveto
			0 0 -67 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 133 0 0 rrcurveto
			2 19 15 15 19 2 rrcurveto
			0 0 37 0 0 0 rrcurveto
			0 0 34 0 0 0 rrcurveto
			0 0 22 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			endchar
		</charString>
		<charString name="b">
			505 400 397 rmoveto
			27 13 18 27 0 32 rrcurveto
			0 0 0 241 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -165 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 0 -185 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -194 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 165 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 245 0 0 rrcurveto
			0 32 -18 27 -27 13 rrcurveto
			-200 63 rmoveto
			0 0 0 185 0 0 rrcurveto
			0 0 110 0 0 0 rrcurveto
			0 0 0 -96 0 0 rrcurveto
			0 0 0 -80 0 0 rrcurveto
			0 0 0 -9 0 0 rrcurveto
			0 0 -110 0 0 0 rrcurveto
			0 -327 rmoveto
			0 0 0 194 0 0 rrcurveto
			0 0 110 0 0 0 rrcurveto
			0 0 0 -2 0 0 rrcurveto
			0 0 0 -76 0 0 rrcurveto
			0 0 0 -116 0 0 rrcurveto
			0 0 -110 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="backslash">
			460 400 0 rmoveto
			0 0 -208 790 0 0 rrcurveto
			0 0 -132 0 0 0 rrcurveto
			0 0 200 -790 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="bar">
			250 60 800 rmoveto
			0 0 0 -1000 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 1000 0 0 rrcurveto
			0 0 -130 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="braceleft">
			502 190 310 rmoveto
			38 4 30 30 4 38 rrcurveto
			0 0 0 188 0 0 rrcurveto
			0 86 75 34 45 0 rrcurveto
			0 0 60 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -60 0 0 0 rrcurveto
			-138 0 -112 -112 0 -138 rrcurveto
			0 0 0 -132 0 0 rrcurveto
			-4 -38 -30 -30 -38 -4 rrcurveto
			0 0 0 -6 0 0 rrcurveto
			0 0 0 -2 0 0 rrcurveto
			0 0 0 -56 0 0 rrcurveto
			0 0 0 -2 0 0 rrcurveto
			0 0 0 -6 0 0 rrcurveto
			38 -4 30 -30 4 -38 rrcurveto
			0 0 0 -122 0 0 rrcurveto
			0 0 2 0 0 0 rrcurveto
			-1 -3 -1 -3 0 -4 rrcurveto
			0 -138 112 -112 138 0 rrcurveto
			0 0 60 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -60 0 0 0 rrcurveto
			-45 0 -75 34 0 86 rrcurveto
			0 4 0 3 -1 3 rrcurveto
			0 0 1 0 0 0 rrcurveto
			0 0 0 178 0 0 rrcurveto
			-4 38 -30 30 -38 4 rrcurveto
			0 0 0 20 0 0 rrcurveto
			endchar
		</charString>
		<charString name="braceright">
			502 442 336 rmoveto
			-38 4 -30 30 -4 38 rrcurveto
			0 0 0 132 0 0 rrcurveto
			0 138 -112 112 -138 0 rrcurveto
			0 0 -60 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 60 0 0 0 rrcurveto
			46 0 74 -34 0 -86 rrcurveto
			0 0 0 -188 0 0 rrcurveto
			4 -38 30 -30 38 -4 rrcurveto
			0 0 0 -20 0 0 rrcurveto
			-38 -4 -30 -30 -4 -38 rrcurveto
			0 0 0 -178 0 0 rrcurveto
			0 0 1 0 0 0 rrcurveto
			-1 -3 0 -3 0 -4 rrcurveto
			0 -86 -74 -34 -46 0 rrcurveto
			0 0 -60 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 60 0 0 0 rrcurveto
			138 0 112 112 0 138 rrcurveto
			0 4 -1 3 -1 3 rrcurveto
			0 0 2 0 0 0 rrcurveto
			0 0 0 122 0 0 rrcurveto
			4 38 30 30 38 4 rrcurveto
			0 0 0 6 0 0 rrcurveto
			0 0 0 2 0 0 rrcurveto
			0 0 0 56 0 0 rrcurveto
			0 0 0 2 0 0 rrcurveto
			0 0 0 6 0 0 rrcurveto
			endchar
		</charString>
		<charString name="bracketleft">
			420 200 670 rmoveto
			0 0 160 0 0 0 rrcurveto
			0 0 0 120 0 0 rrcurveto
			0 0 -160 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -120 0 0 rrcurveto
			0 0 0 -740 0 0 rrcurveto
			0 0 0 -120 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 160 0 0 0 rrcurveto
			0 0 0 120 0 0 rrcurveto
			0 0 -160 0 0 0 rrcurveto
			0 0 0 740 0 0 rrcurveto
			endchar
		</charString>
		<charString name="bracketright">
			420 360 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 -160 0 0 0 rrcurveto
			0 0 0 -120 0 0 rrcurveto
			0 0 160 0 0 0 rrcurveto
			0 0 0 -740 0 0 rrcurveto
			0 0 -160 0 0 0 rrcurveto
			0 0 0 -120 0 0 rrcurveto
			0 0 160 0 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 120 0 0 rrcurveto
			0 0 0 740 0 0 rrcurveto
			0 0 0 120 0 0 rrcurveto
			endchar
		</charString>
		<charString name="c">
			520 320 540 rmoveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 170 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -240 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 240 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 170 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -105 0 0 rrcurveto
			0 0 -115 0 0 0 rrcurveto
			0 0 0 500 0 0 rrcurveto
			0 0 115 0 0 0 rrcurveto
			0 0 0 -105 0 0 rrcurveto
			endchar
		</charString>
		<charString name="colon">
			250 60 130 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -130 0 0 0 rrcurveto
			0 400 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -130 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="comma">
			250 190 130 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 -60 -110 0 0 rrcurveto
			0 0 -58 0 0 0 rrcurveto
			0 0 48 110 0 0 rrcurveto
			0 0 -60 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="d">
			505 60 660 rmoveto
			0 0 0 -530 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 165 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 630 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -165 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			140 0 rmoveto
			0 0 101 0 0 0 rrcurveto
			5 0 4 -4 0 -5 rrcurveto
			0 0 0 -512 0 0 rrcurveto
			0 -5 -4 -3 -5 -1 rrcurveto
			0 0 -101 0 0 0 rrcurveto
			0 0 0 530 0 0 rrcurveto
			endchar
		</charString>
		<charString name="dollar">
			535 475 652 rmoveto
			0 0 0 0 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -73 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -110 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 -72 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 -256 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 188 0 0 0 rrcurveto
			6 -1 5 -5 1 -6 rrcurveto
			0 0 0 -131 0 0 rrcurveto
			-1 -7 -5 -5 -6 0 rrcurveto
			0 0 0 -1 0 0 rrcurveto
			0 0 -116 0 0 0 rrcurveto
			0 0 0 1 0 0 rrcurveto
			-6 0 -5 5 -1 7 rrcurveto
			0 0 0 63 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 -1 0 0 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 72 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 110 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 73 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 0 0 1 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 265 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -1 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 -187 0 0 0 rrcurveto
			-6 1 -5 5 -1 6 rrcurveto
			0 0 0 122 0 0 rrcurveto
			1 6 5 5 6 1 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 116 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			6 -1 5 -5 1 -6 rrcurveto
			0 0 0 -63 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="e">
			520 200 645 rmoveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 145 0 0 rrcurveto
			0 0 -260 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 0 -185 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -194 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 133 0 0 rrcurveto
			0 0 -260 0 0 0 rrcurveto
			0 0 0 194 0 0 rrcurveto
			0 0 215 0 0 0 rrcurveto
			0 0 0 133 0 0 rrcurveto
			0 0 -215 0 0 0 rrcurveto
			0 0 0 185 0 0 rrcurveto
			endchar
		</charString>
		<charString name="eight">
			535 422 397 rmoveto
			31 14 22 32 0 36 rrcurveto
			0 0 0 221 0 0 rrcurveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -235 0 0 0 rrcurveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 -221 0 0 rrcurveto
			0 -36 22 -32 31 -14 rrcurveto
			-31 -14 -22 -31 0 -37 rrcurveto
			0 0 0 -225 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 235 0 0 0 rrcurveto
			50 0 40 40 0 50 rrcurveto
			0 0 0 225 0 0 rrcurveto
			0 37 -22 31 -31 14 rrcurveto
			-123 243 rmoveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -67 0 0 rrcurveto
			0 0 0 -50 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -63 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 50 0 0 rrcurveto
			0 0 0 67 0 0 rrcurveto
			2 19 15 15 19 2 rrcurveto
			0 0 63 0 0 0 rrcurveto
			-63 -510 rmoveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 71 0 0 rrcurveto
			0 0 0 48 0 0 rrcurveto
			2 19 15 15 19 2 rrcurveto
			0 0 63 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -48 0 0 rrcurveto
			0 0 0 -71 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -63 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="equal">
			540 60 230 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 420 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -420 0 0 0 rrcurveto
			0 260 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 420 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -420 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="exclam">
			260 65 130 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -130 0 0 0 rrcurveto
			135 370 rmoveto
			0 0 -11 -280 0 0 rrcurveto
			0 0 -118 0 0 0 rrcurveto
			0 0 -11 280 0 0 rrcurveto
			0 0 0 290 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 -290 0 0 rrcurveto
			endchar
		</charString>
		<charString name="f">
			520 200 645 rmoveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 145 0 0 rrcurveto
			0 0 -260 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 0 -185 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 327 0 0 rrcurveto
			0 0 215 0 0 0 rrcurveto
			0 0 0 133 0 0 rrcurveto
			0 0 -215 0 0 0 rrcurveto
			0 0 0 185 0 0 rrcurveto
			endchar
		</charString>
		<charString name="five">
			535 205 645 rmoveto
			0 0 270 0 0 0 rrcurveto
			0 0 0 145 0 0 rrcurveto
			0 0 -415 0 0 0 rrcurveto
			0 0 0 -80 0 0 rrcurveto
			0 0 0 -65 0 0 rrcurveto
			0 0 0 -208 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 158 0 0 0 rrcurveto
			14 -1 12 -12 1 -14 rrcurveto
			0 0 0 -163 0 0 rrcurveto
			-1 -14 -12 -12 -14 -1 rrcurveto
			0 0 -81 0 0 0 rrcurveto
			-14 1 -11 12 -2 14 rrcurveto
			0 0 0 83 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -150 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 236 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			49 0 40 41 0 49 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 300 0 0 rrcurveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -153 0 0 0 rrcurveto
			-14 2 -11 11 -2 14 rrcurveto
			0 0 0 138 0 0 rrcurveto
			endchar
		</charString>
		<charString name="four">
			560 500 140 rmoveto
			0 0 0 130 0 0 rrcurveto
			0 0 -40 0 0 0 rrcurveto
			0 0 0 520 0 0 rrcurveto
			0 0 -8 0 0 0 rrcurveto
			0 0 -122 0 0 0 rrcurveto
			0 0 -270 -520 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 270 0 0 0 rrcurveto
			0 0 0 -140 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 140 0 0 rrcurveto
			0 0 40 0 0 0 rrcurveto
			-170 120 rmoveto
			0 0 -141 0 0 0 rrcurveto
			0 0 141 278 0 0 rrcurveto
			0 0 0 -278 0 0 rrcurveto
			endchar
		</charString>
		<charString name="g">
			530 340 540 rmoveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 170 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -250 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 95 0 0 0 rrcurveto
			0 0 35 0 0 0 rrcurveto
			5 0 4 0 3 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 3 -80 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 0 80 0 0 rrcurveto
			0 0 0 173 0 0 rrcurveto
			0 0 0 17 0 0 rrcurveto
			0 0 0 64 0 0 rrcurveto
			0 0 0 66 0 0 rrcurveto
			0 0 -200 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 70 0 0 0 rrcurveto
			0 0 0 -94 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			-9 0 -8 0 -6 0 rrcurveto
			-2 0 -4 0 -5 0 rrcurveto
			0 0 -35 0 0 0 rrcurveto
			0 0 -21 0 0 0 rrcurveto
			-5 1 -3 3 -1 5 rrcurveto
			0 0 0 501 0 0 rrcurveto
			0 0 135 0 0 0 rrcurveto
			0 0 0 -110 0 0 rrcurveto
			endchar
		</charString>
		<charString name="greater">
			520 460 365 rmoveto
			0 0 -400 195 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 280 -140 0 0 rrcurveto
			0 0 -280 -140 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 400 195 0 0 rrcurveto
			0 0 0 15 0 0 rrcurveto
			0 0 0 120 0 0 rrcurveto
			0 0 0 15 0 0 rrcurveto
			endchar
		</charString>
		<charString name="h">
			550 490 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -330 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 330 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -330 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 327 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="hyphen">
			510 60 355 rmoveto
			0 0 0 -120 0 0 rrcurveto
			0 0 390 0 0 0 rrcurveto
			0 0 0 120 0 0 rrcurveto
			0 0 -390 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="i">
			260 60 790 rmoveto
			0 0 0 -790 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 790 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="j">
			500 300 790 rmoveto
			0 0 0 -645 0 0 rrcurveto
			0 0 -120 0 0 0 rrcurveto
			0 0 0 95 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -160 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 240 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 710 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="k">
			547 60 790 rmoveto
			0 0 0 -330 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 0 -327 0 0 rrcurveto
			0 0 145 0 0 0 rrcurveto
			0 0 0 327 0 0 rrcurveto
			0 0 12 0 0 0 rrcurveto
			0 0 144 -327 0 0 rrcurveto
			0 0 146 0 0 0 rrcurveto
			0 0 -183 400 0 0 rrcurveto
			0 0 168 390 0 0 rrcurveto
			0 0 -136 0 0 0 rrcurveto
			0 0 -144 -330 0 0 rrcurveto
			0 0 -7 0 0 0 rrcurveto
			0 0 0 330 0 0 rrcurveto
			0 0 -145 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="l">
			490 460 145 rmoveto
			0 0 -260 0 0 0 rrcurveto
			0 0 0 645 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -645 0 0 rrcurveto
			0 0 0 -145 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 260 0 0 0 rrcurveto
			0 0 0 145 0 0 rrcurveto
			endchar
		</charString>
		<charString name="less">
			520 460 430 rmoveto
			0 0 0 130 0 0 rrcurveto
			0 0 -400 -195 0 0 rrcurveto
			0 0 0 -15 0 0 rrcurveto
			0 0 0 -120 0 0 rrcurveto
			0 0 0 -15 0 0 rrcurveto
			0 0 400 -195 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -280 140 0 0 rrcurveto
			0 0 280 140 0 0 rrcurveto
			endchar
		</charString>
		<charString name="m">
			750 690 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 -90 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 -85 -479 0 0 rrcurveto
			0 0 -84 479 0 0 rrcurveto
			0 0 -1 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 -90 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 0 -690 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 622 0 0 rrcurveto
			0 0 110 -622 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 1 0 0 0 rrcurveto
			0 0 109 620 0 0 rrcurveto
			0 0 0 -620 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 690 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			endchar
		</charString>
		<charString name="n">
			557 497 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -430 0 0 rrcurveto
			0 0 -157 430 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -790 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 432 0 0 rrcurveto
			0 0 157 -432 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="nine">
			535 475 700 rmoveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -235 0 0 0 rrcurveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 -281 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 149 0 0 0 rrcurveto
			19 2 15 15 2 19 rrcurveto
			0 0 0 -189 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -73 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 44 0 0 rrcurveto
			0 0 -130 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 235 0 0 0 rrcurveto
			50 0 40 40 0 50 rrcurveto
			0 0 0 610 0 0 rrcurveto
			-140 -215 rmoveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -63 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 119 0 0 rrcurveto
			2 19 15 15 19 2 rrcurveto
			0 0 63 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -119 0 0 rrcurveto
			endchar
		</charString>
		<charString name="numbersign">
			640 478 450 rmoveto
			0 0 102 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -86 0 0 0 rrcurveto
			0 0 34 200 0 0 rrcurveto
			0 0 -111 0 0 0 rrcurveto
			0 0 -37 -200 0 0 rrcurveto
			0 0 -83 0 0 0 rrcurveto
			0 0 33 200 0 0 rrcurveto
			0 0 -111 0 0 0 rrcurveto
			0 0 -37 -200 0 0 rrcurveto
			0 0 -102 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 84 0 0 0 rrcurveto
			0 0 -23 -130 0 0 rrcurveto
			0 0 -81 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 63 0 0 0 rrcurveto
			0 0 -33 -180 0 0 rrcurveto
			0 0 120 0 0 0 rrcurveto
			0 0 31 180 0 0 rrcurveto
			0 0 80 0 0 0 rrcurveto
			0 0 -33 -180 0 0 rrcurveto
			0 0 120 0 0 0 rrcurveto
			0 0 31 180 0 0 rrcurveto
			0 0 121 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -104 0 0 0 rrcurveto
			0 0 22 130 0 0 rrcurveto
			-116 0 rmoveto
			0 0 -23 -130 0 0 rrcurveto
			0 0 -81 0 0 0 rrcurveto
			0 0 22 130 0 0 rrcurveto
			0 0 82 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="o">
			535 475 710 rmoveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -255 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 255 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 630 0 0 rrcurveto
			-270 -565 rmoveto
			0 0 0 500 0 0 rrcurveto
			0 0 125 0 0 0 rrcurveto
			0 0 0 -500 0 0 rrcurveto
			0 0 -125 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="one">
			365 305 790 rmoveto
			0 0 0 -790 0 0 rrcurveto
			0 0 -145 0 0 0 rrcurveto
			0 0 0 543 0 58 rrcurveto
			-36 -39 -64 -2 0 0 rrcurveto
			0 0 0 157 0 0 rrcurveto
			0 0 67 -8 53 81 rrcurveto
			37 0 88 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="p">
			510 460 371 rmoveto
			0 0 0 339 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -320 0 0 0 rrcurveto
			0 0 0 -69 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 -721 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 290 0 0 rrcurveto
			0 0 180 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 1 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			-260 44 rmoveto
			0 0 0 230 0 0 rrcurveto
			0 0 120 0 0 0 rrcurveto
			0 0 0 -230 0 0 rrcurveto
			0 0 -120 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="parenleft">
			450 190 300 rmoveto
			0 0 0 270 0 0 rrcurveto
			0 86 75 34 45 0 rrcurveto
			0 0 80 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -80 0 0 0 rrcurveto
			-134 0 -110 -106 -6 -133 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 -251 0 0 rrcurveto
			0 0 0 -251 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			6 -133 110 -106 134 0 rrcurveto
			0 0 80 0 0 0 rrcurveto
			0 0 0 100 0 0 rrcurveto
			0 0 -80 0 0 0 rrcurveto
			-45 0 -75 34 0 86 rrcurveto
			0 0 0 270 0 0 rrcurveto
			endchar
		</charString>
		<charString name="parenright">
			450 390 551 rmoveto
			0 0 0 0 0 0 rrcurveto
			-6 133 -110 106 -134 0 rrcurveto
			0 0 -80 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 80 0 0 0 rrcurveto
			46 0 74 -34 0 -86 rrcurveto
			0 0 0 -270 0 0 rrcurveto
			0 0 0 -270 0 0 rrcurveto
			0 -86 -74 -34 -46 0 rrcurveto
			0 0 -80 0 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 80 0 0 0 rrcurveto
			134 0 110 106 6 133 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 251 0 0 rrcurveto
			0 0 0 251 0 0 rrcurveto
			endchar
		</charString>
		<charString name="percent">
			690 190 481 rmoveto
			72 0 58 58 0 72 rrcurveto
			0 0 0 29 0 0 rrcurveto
			0 72 -58 58 -72 0 rrcurveto
			-72 0 -58 -58 0 -72 rrcurveto
			0 -72 0 43 0 0 rrcurveto
			0 -72 58 -58 72 0 rrcurveto
			0 85 rmoveto
			-22 0 -18 24 0 30 rrcurveto
			0 0 0 12 0 0 rrcurveto
			0 29 18 25 22 0 rrcurveto
			22 0 18 -25 0 -29 rrcurveto
			0 -30 0 18 0 0 rrcurveto
			0 -30 -18 -24 -22 0 rrcurveto
			440 -387 rmoveto
			0 72 -58 58 -72 0 rrcurveto
			-72 0 -58 -58 0 -72 rrcurveto
			0 0 0 -29 0 0 rrcurveto
			0 -72 58 -58 72 0 rrcurveto
			72 0 58 58 0 72 rrcurveto
			0 72 0 -43 0 0 rrcurveto
			-90 -9 rmoveto
			0 -29 0 17 0 0 rrcurveto
			0 -29 -18 -25 -22 0 rrcurveto
			-22 0 -18 25 0 29 rrcurveto
			0 30 0 -18 0 0 rrcurveto
			0 30 18 24 22 0 rrcurveto
			22 0 18 -24 0 -30 rrcurveto
			20 620 rmoveto
			0 0 -115 0 0 0 rrcurveto
			0 0 -325 -790 0 0 rrcurveto
			0 0 121 0 0 0 rrcurveto
			0 0 319 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="period">
			250 60 130 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -130 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="plus">
			540 480 235 rmoveto
			0 0 0 120 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 150 0 0 rrcurveto
			0 0 -120 0 0 0 rrcurveto
			0 0 0 -150 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 -120 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 0 -150 0 0 rrcurveto
			0 0 120 0 0 0 rrcurveto
			0 0 0 150 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="q">
			535 405 1 rmoveto
			40 5 30 33 0 41 rrcurveto
			0 0 0 630 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -255 0 0 0 rrcurveto
			-44 0 -36 -36 0 -44 rrcurveto
			0 0 0 -630 0 0 rrcurveto
			0 -43 34 -35 43 -2 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 131 0 0 0 rrcurveto
			8 0 7 -7 2 -2 rrcurveto
			0 0 82 -131 0 0 rrcurveto
			0 0 104 57 0 0 rrcurveto
			0 0 -66 84 0 0 rrcurveto
			-60 139 rmoveto
			0 0 -145 0 0 0 rrcurveto
			0 0 0 510 0 0 rrcurveto
			0 0 145 0 0 0 rrcurveto
			0 0 0 -510 0 0 rrcurveto
			endchar
		</charString>
		<charString name="question">
			525 150 790 rmoveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 -140 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 83 0 0 rrcurveto
			2 14 11 12 14 1 rrcurveto
			0 0 92 0 0 0 rrcurveto
			14 -1 12 -12 1 -14 rrcurveto
			0 -27 0 -29 0 -7 rrcurveto
			0 -108 -161 -35 0 -187 rrcurveto
			0 0 0 -50 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 50 0 0 rrcurveto
			0 147 150 13 0 142 rrcurveto
			0 9 0 139 0 0 rrcurveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -225 0 0 0 rrcurveto
			26 -660 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="quotedbl">
			430 190 790 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 -30 -130 0 0 rrcurveto
			0 0 -70 0 0 0 rrcurveto
			0 0 -30 130 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			180 0 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 -30 -130 0 0 rrcurveto
			0 0 -70 0 0 0 rrcurveto
			0 0 -30 130 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="quotesingle">
			250 190 790 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 -30 -130 0 0 rrcurveto
			0 0 -70 0 0 0 rrcurveto
			0 0 -30 130 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="r">
			512 492 5 rmoveto
			0 2 -1 1 -1 1 rrcurveto
			-1 0 0 0 -1 1 rrcurveto
			-25 13 -18 27 0 32 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 208 0 0 rrcurveto
			0 25 -12 23 -18 15 rrcurveto
			18 14 12 23 0 25 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 295 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -305 0 0 0 rrcurveto
			0 0 0 -70 0 0 rrcurveto
			0 0 0 -75 0 0 rrcurveto
			0 0 0 -230 0 0 rrcurveto
			0 0 0 -125 0 0 rrcurveto
			0 0 0 -290 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 290 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 0 -37 0 0 rrcurveto
			0 0 0 -172 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 -45 37 -36 45 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 100 0 1 0 rrcurveto
			2 1 2 2 0 2 rrcurveto
			-187 410 rmoveto
			0 0 -105 0 0 0 rrcurveto
			0 0 0 230 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 0 -192 0 0 rrcurveto
			0 0 0 -38 0 0 rrcurveto
			endchar
		</charString>
		<charString name="s">
			535 335 550 rmoveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 160 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -255 0 0 0 rrcurveto
			-41 0 -35 -32 -4 -40 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 0 -312 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 187 0 0 0 rrcurveto
			6 -1 5 -5 1 -6 rrcurveto
			0 0 0 -167 0 0 rrcurveto
			-1 -6 -5 -5 -6 -1 rrcurveto
			0 0 -115 0 0 0 rrcurveto
			-6 1 -5 5 -1 6 rrcurveto
			0 0 0 113 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -180 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 254 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 301 0 0 rrcurveto
			0 44 -36 36 -44 0 rrcurveto
			0 0 -187 0 0 0 rrcurveto
			-6 1 -5 5 -1 6 rrcurveto
			0 0 0 170 0 0 rrcurveto
			1 6 5 5 6 1 rrcurveto
			0 0 116 0 0 0 rrcurveto
			6 -1 5 -5 1 -6 rrcurveto
			0 0 0 -93 0 0 rrcurveto
			endchar
		</charString>
		<charString name="semicolon">
			250 60 530 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -130 0 0 0 rrcurveto
			130 -400 rmoveto
			0 0 0 -130 0 0 rrcurveto
			0 0 -60 -110 0 0 rrcurveto
			0 0 -58 0 0 0 rrcurveto
			0 0 48 110 0 0 rrcurveto
			0 0 -60 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="seven">
			535 475 790 rmoveto
			0 0 -415 0 0 0 rrcurveto
			0 0 0 -40 0 0 rrcurveto
			0 0 0 -100 0 0 rrcurveto
			0 0 0 -50 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 0 50 0 0 rrcurveto
			0 0 122 0 0 0 rrcurveto
			0 0 -172 -650 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 175 690 0 0 rrcurveto
			0 0 0 10 0 0 rrcurveto
			0 0 0 24 0 0 rrcurveto
			0 0 0 66 0 0 rrcurveto
			endchar
		</charString>
		<charString name="six">
			535 335 570 rmoveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -235 0 0 0 rrcurveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 -610 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 235 0 0 0 rrcurveto
			50 0 40 40 0 50 rrcurveto
			0 0 0 281 0 0 rrcurveto
			0 48 -38 39 -47 3 rrcurveto
			0 0 0 0 0 0 rrcurveto
			0 0 -185 0 0 0 rrcurveto
			0 0 0 148 0 0 rrcurveto
			2 19 15 15 19 2 rrcurveto
			0 0 58 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -39 0 0 rrcurveto
			-130 -239 rmoveto
			0 0 94 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -119 0 0 rrcurveto
			-3 -27 -13 -7 -20 -2 rrcurveto
			0 0 -58 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 155 0 0 rrcurveto
			endchar
		</charString>
		<charString name="slash">
			460 60 0 rmoveto
			0 0 209 790 0 0 rrcurveto
			0 0 131 0 0 0 rrcurveto
			0 0 -200 -790 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="space">
			600 endchar
		</charString>
		<charString name="t">
			500 470 657 rmoveto
			0 0 0 133 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 -133 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 0 -657 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 657 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="three">
			535 475 479 rmoveto
			0 0 0 221 0 0 rrcurveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -235 0 0 0 rrcurveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 49 0 0 rrcurveto
			2 19 15 15 19 2 rrcurveto
			0 0 63 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -72 0 0 rrcurveto
			0 0 0 -50 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -79 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 79 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -48 0 0 rrcurveto
			0 0 0 -66 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -63 0 0 0 rrcurveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 49 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -140 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 235 0 0 0 rrcurveto
			50 0 40 40 0 50 rrcurveto
			0 0 0 225 0 0 rrcurveto
			0 36 -21 30 -30 15 rrcurveto
			30 15 21 30 0 36 rrcurveto
			0 1 0 0 0 1 rrcurveto
			0 0 0 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="two">
			535 160 790 rmoveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 -150 0 0 rrcurveto
			0 0 140 0 0 0 rrcurveto
			0 0 0 83 0 0 rrcurveto
			2 14 11 12 14 1 rrcurveto
			0 0 82 0 0 0 rrcurveto
			14 -1 12 -12 1 -14 rrcurveto
			0 -21 0 -24 0 -8 rrcurveto
			0 -108 -285 -225 0 -187 rrcurveto
			0 0 0 -60 0 0 rrcurveto
			0 0 79 0 0 0 rrcurveto
			0 0 58 0 0 0 rrcurveto
			0 0 277 0 0 0 rrcurveto
			0 0 0 135 0 0 rrcurveto
			0 0 -247 0 0 0 rrcurveto
			60 136 187 162 0 119 rrcurveto
			0 9 0 139 0 0 rrcurveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -225 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="u">
			550 490 790 rmoveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -660 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			0 0 0 660 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 0 -710 0 0 rrcurveto
			0 -44 36 -36 44 0 rrcurveto
			0 0 270 0 0 0 rrcurveto
			44 0 36 36 0 44 rrcurveto
			0 0 0 710 0 0 rrcurveto
			endchar
		</charString>
		<charString name="underscore">
			570 60 -80 rmoveto
			0 0 0 -120 0 0 rrcurveto
			0 0 450 0 0 0 rrcurveto
			0 0 0 120 0 0 rrcurveto
			0 0 -450 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="v">
			540 530 790 rmoveto
			0 0 -136 0 0 0 rrcurveto
			0 0 -124 -550 0 0 rrcurveto
			0 0 -124 550 0 0 rrcurveto
			0 0 -136 0 0 0 rrcurveto
			0 0 190 -790 0 0 rrcurveto
			0 0 16 0 0 0 rrcurveto
			0 0 108 0 0 0 rrcurveto
			0 0 16 0 0 0 rrcurveto
			0 0 190 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="w">
			835 825 790 rmoveto
			0 0 -145 0 0 0 rrcurveto
			0 0 -106 -522 0 0 rrcurveto
			0 0 -98 522 0 0 rrcurveto
			0 0 -6 0 0 0 rrcurveto
			0 0 -105 0 0 0 rrcurveto
			0 0 -105 -518 0 0 rrcurveto
			0 0 -105 518 0 0 rrcurveto
			0 0 -145 0 0 0 rrcurveto
			0 0 190 -790 0 0 rrcurveto
			0 0 5 0 0 0 rrcurveto
			0 0 110 0 0 0 rrcurveto
			0 0 10 0 0 0 rrcurveto
			0 0 93 504 0 0 rrcurveto
			0 0 92 -504 0 0 rrcurveto
			0 0 10 0 0 0 rrcurveto
			0 0 105 0 0 0 rrcurveto
			0 0 10 0 0 0 rrcurveto
			0 0 190 790 0 0 rrcurveto
			endchar
		</charString>
		<charString name="x">
			520 30 790 rmoveto
			0 0 158 -377 0 0 rrcurveto
			0 0 -178 -413 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 100 261 0 0 rrcurveto
			0 0 100 -261 0 0 rrcurveto
			0 0 150 0 0 0 rrcurveto
			0 0 -178 413 0 0 rrcurveto
			0 0 158 377 0 0 rrcurveto
			0 0 -140 0 0 0 rrcurveto
			0 0 -90 -230 0 0 rrcurveto
			0 0 -80 230 0 0 rrcurveto
			0 0 -150 0 0 0 rrcurveto
			endchar
		</charString>
		<charString name="y">
			470 300 264 rmoveto
			0 0 160 526 0 0 rrcurveto
			0 0 -145 0 0 0 rrcurveto
			0 0 -80 -345 0 0 rrcurveto
			0 0 -84 345 0 0 rrcurveto
			0 0 -141 0 0 0 rrcurveto
			0 0 160 -526 0 0 rrcurveto
			0 0 0 -264 0 0 rrcurveto
			0 0 130 0 0 0 rrcurveto
			0 0 0 264 0 0 rrcurveto
			endchar
		</charString>
		<charString name="z">
			520 460 700 rmoveto
			0 0 0 90 0 0 rrcurveto
			0 0 -400 0 0 0 rrcurveto
			0 0 0 -130 0 0 rrcurveto
			0 0 236 0 0 0 rrcurveto
			0 0 -236 -570 0 0 rrcurveto
			0 0 0 -90 0 0 rrcurveto
			0 0 400 0 0 0 rrcurveto
			0 0 0 130 0 0 rrcurveto
			0 0 -236 0 0 0 rrcurveto
			0 0 236 570 0 0 rrcurveto
			endchar
		</charString>
		<charString name="zero">
			535 475 700 rmoveto
			0 50 -40 40 -50 0 rrcurveto
			0 0 -235 0 0 0 rrcurveto
			-50 0 -40 -40 0 -50 rrcurveto
			0 0 0 -610 0 0 rrcurveto
			0 -50 40 -40 50 0 rrcurveto
			0 0 235 0 0 0 rrcurveto
			50 0 40 40 0 50 rrcurveto
			0 0 0 610 0 0 rrcurveto
			-234 -555 rmoveto
			-19 2 -15 15 -2 19 rrcurveto
			0 0 0 428 0 0 rrcurveto
			2 19 15 15 19 2 rrcurveto
			0 0 53 0 0 0 rrcurveto
			19 -2 15 -15 2 -19 rrcurveto
			0 0 0 -428 0 0 rrcurveto
			-2 -19 -15 -15 -19 -2 rrcurveto
			0 0 -53 0 0 0 rrcurveto
			endchar
		</charString>
	</charStrings>
</lists>
`;
