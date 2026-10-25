// Nat 5 History — question bank, worksheets, key facts, mock papers and links.
// Written from the SQA / Qualifications Scotland National 5 History course specification (C837 75, v5.0, valid from 2024–25) (sqa.org.uk/sqa/47447.html). Built by build/build.py — edit build/history.py, not this file.
// Question format: {topic, type:'mcq'|'fillin', q, opts (mcq), ans (index for mcq, text for fillin), explain}
const META={
 "subject": "History",
 "title": "Free Nat 5 History Revision — Scotland",
 "slug": "nat5-history",
 "store": "n5hist_v1",
 "legacyStore": null
};
const TOPICS=[
 {
  "id": "skills",
  "name": "Exam Skills",
  "icon": "📝",
  "sub": "Describe · Explain · How fully · Compare · Evaluate usefulness · To what extent"
 },
 {
  "id": "migration",
  "name": "Scottish: Migration and Empire, 1830–1939",
  "icon": "🚢",
  "sub": "Immigration to Scotland · Experience of immigrants · Emigration · Scots abroad"
 },
 {
  "id": "greatwar",
  "name": "Scottish: The Era of the Great War, 1900–1928",
  "icon": "🪖",
  "sub": "Western Front · Society & culture · Industry & economy · Politics"
 },
 {
  "id": "enslaved",
  "name": "British: The Trade in Enslaved African People, 1770–1807",
  "icon": "⛓️",
  "sub": "Triangular trade · Britain & the Caribbean · Captives' experience · Abolition"
 },
 {
  "id": "changing",
  "name": "British: Changing Britain, 1760–1914",
  "icon": "🏭",
  "sub": "Health & housing · Factories & mines · Canals & railways · Democratic reform"
 },
 {
  "id": "modern",
  "name": "British: The Making of Modern Britain, 1880–1951",
  "icon": "🏥",
  "sub": "Poverty · Liberal reforms · Impact of WW2 · Labour & the Welfare State"
 },
 {
  "id": "nazi",
  "name": "European & World: Hitler and Nazi Germany, 1919–1939",
  "icon": "🇩🇪",
  "sub": "Weimar Germany · Nazi rise to power · Nazi control · Social & economic policies"
 },
 {
  "id": "civilrights",
  "name": "European & World: Free at Last? Civil Rights in the USA, 1918–1968",
  "icon": "✊",
  "sub": "Immigration · Jim Crow · Civil rights campaigns · Ghettos & Black radicalism"
 },
 {
  "id": "redflag",
  "name": "European & World: Red Flag — Lenin and the Russian Revolution, 1894–1921",
  "icon": "🚩",
  "sub": "Tsarist Russia · 1905 Revolution · February 1917 · October 1917 & Civil War"
 }
];
const QUESTIONS=[
{"topic": "skills", "type": "mcq", "q": "How many marks is a 'Describe…' question worth in the N5 History exam?", "opts": ["6", "5", "9", "4"], "ans": 3, "explain": "Describe questions are 4 marks: make four accurate, relevant points of knowledge. Each detailed point can gain a mark."},
{"topic": "skills", "type": "mcq", "q": "How many marks is an 'Explain the reasons why…' question worth?", "opts": ["9", "6", "4", "5"], "ans": 1, "explain": "Explain questions are 6 marks: give six reasons, each linked to the event with 'because' or 'this meant that'."},
{"topic": "skills", "type": "mcq", "q": "How many marks is a 'To what extent…' question worth?", "opts": ["8", "6", "10", "9"], "ans": 3, "explain": "The 'To what extent' question is 9 marks: an introduction, a balanced assessment of different factors (knowledge), and a reasoned conclusion with a supported judgement."},
{"topic": "skills", "type": "mcq", "q": "How many marks is an 'Evaluate the usefulness of Source A…' question worth?", "opts": ["5", "9", "6", "4"], "ans": 0, "explain": "Evaluate usefulness = 5 marks: comment on the source's origin and purpose (who, when, type, why), its content, and what has been missed out."},
{"topic": "skills", "type": "mcq", "q": "How many marks is a 'Compare the views of Sources B and C…' question worth?", "opts": ["6", "5", "2", "4"], "ans": 3, "explain": "Compare = 4 marks: make direct comparisons ('Source B says… and Source C agrees/disagrees…'). An overall comparison can also gain marks."},
{"topic": "skills", "type": "mcq", "q": "In a 'How fully does Source X explain…' question (6 marks), what must you do?", "opts": ["Only quote the source", "Only use recalled knowledge", "Evaluate who wrote the source", "Use points from the source AND recalled knowledge that is missing from it"], "ans": 3, "explain": "Pick out the relevant points in the source, then add relevant points from your own knowledge that the source leaves out. A judgement ('the source partly explains…') is also needed."},
{"topic": "skills", "type": "mcq", "q": "In an 'Evaluate the usefulness' answer, which of these would gain a mark for ORIGIN?", "opts": ["The source is useful", "It was written by an eyewitness at the time of the event", "It was written in English", "It says the soldiers were tired"], "ans": 1, "explain": "Origin comments need to explain WHY the author or date makes the source more or less useful — e.g. an eyewitness at the time saw events first hand."},
{"topic": "skills", "type": "mcq", "q": "How many marks is the N5 History question paper out of, and how long is it?", "opts": ["80 marks, 2 hours 20 minutes", "80 marks, 1 hour 45 minutes", "60 marks, 1 hour 30 minutes", "100 marks, 2 hours"], "ans": 0, "explain": "The question paper is 80 marks in 2 hours 20 minutes, with three sections: Scottish (25 marks), British (26) and European & World (29). You answer ONE part in each section."},
{"topic": "skills", "type": "mcq", "q": "How much is the N5 History assignment worth?", "opts": ["30 marks (30%)", "40 marks (40%)", "20 marks (20% of the course)", "10 marks (10%)"], "ans": 2, "explain": "The assignment is worth 20 of the 100 marks. You research a question of your choice, then write it up in 1 hour using a resource sheet."},
{"topic": "skills", "type": "mcq", "q": "What happens if you don't hand in a Resource Sheet for the assignment write-up?", "opts": ["You lose 4 marks out of 20", "Nothing", "You get no marks at all", "You lose 10 marks"], "ans": 0, "explain": "The course specification says a candidate who does not submit a Resource Sheet has a penalty of 4 marks out of 20."},
{"topic": "migration", "type": "mcq", "q": "What was the main 'push' factor for the large Irish migration to Scotland in the 1840s?", "opts": ["The First World War", "The potato famine", "Religious persecution by Scotland", "The Highland Clearances"], "ans": 1, "explain": "Potato blight destroyed the crop that most poor Irish families lived on (the Great Famine, from 1845). Glasgow and the west of Scotland were close and cheap to reach."},
{"topic": "migration", "type": "mcq", "q": "Where did most Irish immigrants to Scotland settle?", "opts": ["The Borders", "The west of Scotland, especially Glasgow and Lanarkshire", "Aberdeen and the north-east", "The Highlands and Islands"], "ans": 1, "explain": "They settled near work — Glasgow, Lanarkshire's coal and iron areas, and Dundee's jute mills — and near the short sea crossing."},
{"topic": "migration", "type": "mcq", "q": "Why did many Lithuanians come to Scotland from the 1880s?", "opts": ["To escape Russian persecution and military service, and for work in the coal mines", "Because of a potato famine in Lithuania", "To work on Highland sheep farms", "To join the Clyde shipyards as owners"], "ans": 0, "explain": "Lithuania was ruled by the Russian Empire. Many fled Russification, poverty and long military service. Many found work in Lanarkshire coal mines, e.g. around Coatbridge and Bellshill."},
{"topic": "migration", "type": "mcq", "q": "Many Jewish immigrants settled in which area of Glasgow?", "opts": ["The Gorbals", "Partick", "Bearsden", "Govan"], "ans": 0, "explain": "Jews fleeing persecution (pogroms) in the Russian Empire settled in the Gorbals, working in trades such as tailoring and small businesses."},
{"topic": "migration", "type": "mcq", "q": "Italian immigrants to Scotland became especially well known for running…", "opts": ["Shipyards", "Coal mines", "Cafés, ice-cream parlours and fish and chip shops", "Jute mills"], "ans": 2, "explain": "Many Italians set up family businesses such as cafés and chip shops across Scotland."},
{"topic": "migration", "type": "mcq", "q": "Why did some Scots resent Irish Catholic immigrants?", "opts": ["Because they spoke only Gaelic", "Because they were all landowners", "Fear they would take jobs and lower wages, and religious hostility", "Because the Irish refused to work"], "ans": 2, "explain": "Some Scots blamed the Irish for lowering wages and breaking strikes, and sectarian (anti-Catholic) attitudes caused tension. Protestant Irish immigrants brought the Orange Order."},
{"topic": "migration", "type": "mcq", "q": "Which of these was a 'pull' factor that attracted Scots to emigrate?", "opts": ["Unemployment in Scotland", "The Highland Clearances", "Cheap land and higher wages in countries like Canada and Australia", "Poverty in Scottish cities"], "ans": 2, "explain": "Pull factors attract people TO a new country (cheap or free land, jobs, better wages, family already there). Push factors drive people AWAY (Clearances, poverty, unemployment)."},
{"topic": "migration", "type": "mcq", "q": "What were the Highland Clearances?", "opts": ["Government slum clearance in Glasgow", "The removal of Irish immigrants", "Landowners evicting tenants to make way for large sheep farms", "The clearing of forests for railways"], "ans": 2, "explain": "Many Highlanders were evicted by landlords who wanted the land for sheep (and later deer). Some were forced or assisted to emigrate."},
{"topic": "migration", "type": "mcq", "q": "Andrew Carnegie, born in Dunfermline, became famous in the USA for…", "opts": ["Making a fortune in steel and giving it to good causes such as libraries", "Becoming Prime Minister", "Founding national parks", "Inventing the telephone"], "ans": 0, "explain": "Carnegie built a huge steel business in Pittsburgh and gave away most of his wealth, funding thousands of libraries, including many in Scotland."},
{"topic": "migration", "type": "mcq", "q": "John Muir, born in Dunbar, is remembered in the USA for…", "opts": ["Building railways across Canada", "Running the Hudson's Bay Company", "Campaigning to protect wilderness and helping create national parks", "Leading Australia's government"], "ans": 2, "explain": "Muir is called the 'father of the national parks' for his campaigns to protect places like Yosemite."},
{"topic": "migration", "type": "mcq", "q": "Andrew Fisher, born in Ayrshire, became…", "opts": ["Governor of India", "Prime Minister of Canada", "Mayor of New York", "Prime Minister of Australia"], "ans": 3, "explain": "Andrew Fisher, a former Ayrshire coal miner, emigrated to Queensland and was Prime Minister of Australia three times."},
{"topic": "migration", "type": "mcq", "q": "How did the Empire help Dundee's economy?", "opts": ["It mined coal for India", "Tobacco from Virginia supplied its factories", "Raw jute from India supplied its jute mills", "It built ships for the Royal Navy only"], "ans": 2, "explain": "Dundee's jute industry depended on raw jute from India and sold sacking and cloth around the Empire."},
{"topic": "greatwar", "type": "mcq", "q": "When was conscription introduced in Britain during the First World War?", "opts": ["1915", "1914", "1916", "1918"], "ans": 2, "explain": "The Military Service Act of January 1916 introduced conscription for single men aged 18–41, later extended to married men."},
{"topic": "greatwar", "type": "mcq", "q": "What was DORA?", "opts": ["A German code name", "The Defence of the Realm Act — it gave the government wide powers at home", "A women's volunteer nursing group", "A tank used on the Western Front"], "ans": 1, "explain": "Passed in August 1914, DORA allowed censorship, took over land, factories and transport, and cut pub opening hours."},
{"topic": "greatwar", "type": "mcq", "q": "Why were 'Pals battalions' such as McCrae's Battalion (16th Royal Scots) formed?", "opts": ["So friends, neighbours and workmates could join up and serve together", "To hold conscientious objectors", "To build tanks", "To guard prisoners of war"], "ans": 0, "explain": "Pals battalions encouraged volunteering. McCrae's Battalion included Heart of Midlothian footballers. Losses hit whole communities at once."},
{"topic": "greatwar", "type": "mcq", "q": "What were conscientious objectors?", "opts": ["Men who refused to fight because of their beliefs", "Women munitions workers", "Workers in reserved occupations", "Soldiers who deserted"], "ans": 0, "explain": "After 1916, objectors had to go before tribunals. Some did non-combat work; 'absolutists' who refused all war work could be imprisoned."},
{"topic": "greatwar", "type": "mcq", "q": "Which new weapon was first used by the British at the Battle of the Somme in 1916?", "opts": ["The aircraft", "Poison gas", "The machine gun", "The tank"], "ans": 3, "explain": "Tanks were first used in September 1916. Early tanks were slow and broke down often, but could cross barbed wire and trenches."},
{"topic": "greatwar", "type": "mcq", "q": "Which side first used poison gas on a large scale on the Western Front, in 1915?", "opts": ["France", "Britain", "The USA", "Germany"], "ans": 3, "explain": "Germany released chlorine gas at Ypres in April 1915. Later, phosgene and mustard gas were used. Gas masks were developed in response."},
{"topic": "greatwar", "type": "mcq", "q": "Which of these was a condition caused by standing in cold, wet trenches?", "opts": ["Shell shock", "Scurvy", "Trench foot", "Malaria"], "ans": 2, "explain": "Trench foot could lead to gangrene and amputation. Soldiers also suffered lice, rats and shell shock."},
{"topic": "greatwar", "type": "mcq", "q": "Why did the Glasgow rent strikes of 1915 happen?", "opts": ["Women demanded the vote", "Landlords raised rents while men were away fighting", "Munitions workers wanted shorter hours", "Food rationing was introduced"], "ans": 1, "explain": "Led by women such as Mary Barbour, tenants refused to pay increased rents. The government passed the Rent Restriction Act in 1915, freezing rents."},
{"topic": "greatwar", "type": "mcq", "q": "Which law first gave some women the vote in 1918?", "opts": ["The Military Service Act", "The Equal Franchise Act", "The Reform Act", "The Representation of the People Act"], "ans": 3, "explain": "The 1918 Act gave the vote to women over 30 who met a property qualification, and to all men over 21. Women got the vote on equal terms with men in 1928."},
{"topic": "greatwar", "type": "mcq", "q": "Why did heavy industries such as shipbuilding decline in Scotland after the war?", "opts": ["There were too many workers", "The government banned shipbuilding", "Coal ran out in 1919", "Fewer orders and more foreign competition"], "ans": 3, "explain": "Wartime demand ended, other countries had built up their own industries, and old equipment made Scottish industry less competitive."},
{"topic": "greatwar", "type": "mcq", "q": "What was promised by the slogan 'homes fit for heroes'?", "opts": ["Hospitals for the wounded", "Better housing for soldiers returning from the war", "Pensions for widows", "Free medals for all soldiers"], "ans": 1, "explain": "Lloyd George promised better housing. A 1919 Housing Act for Scotland gave councils subsidies to build council houses, though far fewer were built than needed."},
{"topic": "greatwar", "type": "mcq", "q": "When was food rationing introduced in Britain?", "opts": ["1939", "1918", "1916", "1914"], "ans": 1, "explain": "Rationing of sugar, then meat, butter and other foods began in 1918 because of German U-boat attacks on shipping."},
{"topic": "enslaved", "type": "mcq", "q": "In the triangular trade, what was carried from Britain to West Africa?", "opts": ["Sugar and rum", "Cotton and tobacco", "Manufactured goods such as guns, cloth and alcohol", "Enslaved Africans"], "ans": 2, "explain": "Leg 1: goods from Britain to West Africa, traded for captives. Leg 2 (Middle Passage): enslaved Africans to the Caribbean. Leg 3: sugar, rum, tobacco and cotton back to Britain."},
{"topic": "enslaved", "type": "mcq", "q": "What was the 'Middle Passage'?", "opts": ["The route from Britain to Africa", "The return voyage carrying sugar", "The voyage carrying enslaved Africans across the Atlantic to the Caribbean", "A canal in Liverpool"], "ans": 2, "explain": "The Middle Passage lasted weeks. Captives were packed tightly below deck in chains; disease and death were common."},
{"topic": "enslaved", "type": "mcq", "q": "Which British port was most involved in the trade in enslaved Africans by the late 1700s?", "opts": ["Liverpool", "Aberdeen", "Dundee", "Southampton"], "ans": 0, "explain": "Liverpool, Bristol and London were the main ports. Liverpool's banks, shipbuilders and merchants grew rich from the trade."},
{"topic": "enslaved", "type": "mcq", "q": "Which crop was the most important on British Caribbean plantations?", "opts": ["Wheat", "Coffee", "Sugar", "Tea"], "ans": 2, "explain": "Sugar cane was grown, cut and boiled by enslaved people under brutal conditions. Sugar and rum made planters and merchants very wealthy."},
{"topic": "enslaved", "type": "mcq", "q": "What were slave 'factories' on the African coast?", "opts": ["Ship repair yards", "Forts and trading posts where captives were held before being shipped", "British textile mills", "Plantation sugar mills"], "ans": 1, "explain": "European traders kept captives in coastal forts ('factories') until ships arrived."},
{"topic": "enslaved", "type": "mcq", "q": "What happened on the slave ship Zong in 1781?", "opts": ["The ship was the first to be banned", "The captives took control of the ship", "More than 130 enslaved Africans were thrown overboard so the owners could claim insurance", "Wilberforce sailed on it"], "ans": 2, "explain": "The Zong case shocked many people and was used by abolitionists as evidence of the trade's cruelty."},
{"topic": "enslaved", "type": "mcq", "q": "Which MP led the campaign against the trade in enslaved Africans in Parliament?", "opts": ["Thomas Clarkson", "Robert Peel", "William Wilberforce", "Olaudah Equiano"], "ans": 2, "explain": "Wilberforce spoke against the trade in Parliament from 1789 and introduced abolition bills many times. Clarkson collected evidence outside Parliament."},
{"topic": "enslaved", "type": "mcq", "q": "What did Thomas Clarkson do for the abolition campaign?", "opts": ["Wrote his life story as a formerly enslaved man", "Voted for abolition as Prime Minister", "Owned plantations in Jamaica", "Collected evidence such as shackles and interviews with sailors"], "ans": 3, "explain": "Clarkson travelled to ports gathering evidence and objects like chains and thumbscrews to show the public."},
{"topic": "enslaved", "type": "mcq", "q": "Why was Olaudah Equiano important to the abolition campaign?", "opts": ["He drew the Brookes ship diagram", "He was a plantation owner who changed his mind", "He was a sea captain who stopped trading", "His published life story described the trade from a formerly enslaved person's view"], "ans": 3, "explain": "Equiano's Interesting Narrative (1789) was a best-seller. He also spoke at meetings around Britain, including Scotland."},
{"topic": "enslaved", "type": "mcq", "q": "Which of these was an argument AGAINST abolition?", "opts": ["The Middle Passage was cruel", "The trade brought jobs and wealth to British ports and industries", "The trade was against Christian teaching", "Free labour was more efficient"], "ans": 1, "explain": "Supporters of the trade, including the West India lobby, merchants and some MPs, argued it was vital to Britain's economy."},
{"topic": "enslaved", "type": "mcq", "q": "How did the French Revolution affect the abolition campaign in the 1790s?", "opts": ["It slowed it down — reform was linked to revolution and seen as dangerous", "It made Britain go to war against the trade", "It made abolition happen immediately", "It had no effect"], "ans": 0, "explain": "After 1789 and the war with France from 1793, many in Parliament feared any radical change. The revolt in Saint-Domingue (Haiti) from 1791 also increased fears."},
{"topic": "enslaved", "type": "mcq", "q": "In which year did Parliament abolish the British trade in enslaved Africans?", "opts": ["1807", "1833", "1792", "1787"], "ans": 0, "explain": "The Slave Trade Act was passed in 1807. Slavery itself continued in the British Empire until the 1830s."},
{"topic": "changing", "type": "mcq", "q": "Which disease, spread by dirty water, caused major epidemics in British cities in the 1830s–1850s?", "opts": ["Tuberculosis", "Cholera", "Smallpox", "Measles"], "ans": 1, "explain": "Cholera spread through water contaminated by sewage. In 1854 John Snow linked an outbreak in London to a single water pump."},
{"topic": "changing", "type": "mcq", "q": "How did Glasgow improve its water supply in 1859?", "opts": ["Banning tenements", "Building wells in every street", "Piping clean water from Loch Katrine", "Boiling water from the Clyde"], "ans": 2, "explain": "Clean piped water from Loch Katrine greatly reduced cholera in Glasgow."},
{"topic": "changing", "type": "mcq", "q": "James Young Simpson of Edinburgh is known for introducing…", "opts": ["Chloroform as an anaesthetic", "Antiseptic carbolic acid", "X-rays", "Vaccination"], "ans": 0, "explain": "Simpson used chloroform as an anaesthetic in 1847, making surgery less painful. Joseph Lister (in Glasgow) introduced antiseptics in the 1860s."},
{"topic": "changing", "type": "mcq", "q": "What did the Factory Act of 1833 do?", "opts": ["Banned women from working underground", "Banned children under 9 from textile mills and appointed inspectors", "Gave workers the vote", "Set up the first railway"], "ans": 1, "explain": "The 1833 Act limited children's hours and appointed factory inspectors to enforce the law."},
{"topic": "changing", "type": "mcq", "q": "What did the Mines Act of 1842 do?", "opts": ["Gave miners an 8-hour day", "Introduced the Davy lamp", "Banned women, girls and young boys from working underground", "Nationalised the mines"], "ans": 2, "explain": "A report with shocking pictures of women and children working underground led to the 1842 Mines Act."},
{"topic": "changing", "type": "mcq", "q": "Which was a major result of railways being built?", "opts": ["Canals became more popular", "Fresh food became harder to get", "Faster, cheaper travel and transport of goods", "People travelled less"], "ans": 2, "explain": "Railways moved goods and people quickly, brought fresh food and newspapers, created day trips, and led to the decline of canals and stagecoaches."},
{"topic": "changing", "type": "mcq", "q": "Why did canals decline in the second half of the 1800s?", "opts": ["They were banned by Parliament", "Railways were faster and could go almost anywhere", "There were too many canals", "Canals froze every winter"], "ans": 1, "explain": "Railways could carry goods much faster and over hills. Many canal companies were bought by railway companies."},
{"topic": "changing", "type": "mcq", "q": "What happened at Peterloo in Manchester in 1819?", "opts": ["The first railway opened", "The Great Reform Act was passed", "Cavalry charged a peaceful crowd at a reform meeting, killing several people", "Chartists presented their petition"], "ans": 2, "explain": "A huge crowd met to hear Henry Hunt speak about reform. Soldiers charged, and several people were killed and hundreds injured."},
{"topic": "changing", "type": "mcq", "q": "Which of these was one of the six points of the People's Charter?", "opts": ["An end to the monarchy", "Votes for women", "Free school meals", "A secret ballot"], "ans": 3, "explain": "The six points: vote for all men over 21, secret ballot, no property qualification for MPs, payment of MPs, equal constituencies, annual parliaments."},
{"topic": "changing", "type": "mcq", "q": "Which group gained the vote through the 1867 Reform Act?", "opts": ["Middle-class men only", "Many skilled working-class men in towns", "All men over 21", "All women over 30"], "ans": 1, "explain": "The 1832 Act mainly gave the vote to middle-class men. 1867 added many urban working-class men. 1884 extended this to men in the countryside."},
{"topic": "changing", "type": "mcq", "q": "Which Act introduced voting by secret ballot in 1872?", "opts": ["The Factory Act", "The Reform Act", "The Public Health Act", "The Ballot Act"], "ans": 3, "explain": "Before 1872 voting was public, so voters could be bribed or bullied. The Ballot Act made it secret."},
{"topic": "modern", "type": "mcq", "q": "Which two men carried out surveys of poverty around 1900?", "opts": ["William Beveridge and Clement Attlee", "Charles Booth and Seebohm Rowntree", "David Lloyd George and Winston Churchill", "Aneurin Bevan and Edwin Chadwick"], "ans": 1, "explain": "Booth (London) and Rowntree (York) found that almost a third of people lived in poverty, often through no fault of their own — challenging the idea of 'self-help'."},
{"topic": "modern", "type": "mcq", "q": "Before the Liberal reforms, what was the 'self-help' attitude to poverty?", "opts": ["Charities should be banned", "Poverty was caused by low wages", "The government should look after everyone", "People were poor because of their own faults and should help themselves"], "ans": 3, "explain": "Many Victorians believed poverty was caused by laziness or drink. The surveys of Booth and Rowntree helped change this."},
{"topic": "modern", "type": "mcq", "q": "When were old age pensions introduced by the Liberal government?", "opts": ["1908", "1906", "1911", "1948"], "ans": 0, "explain": "The Old Age Pensions Act 1908 gave a small weekly pension (up to 5 shillings) to people over 70 on low incomes, paid from January 1909."},
{"topic": "modern", "type": "mcq", "q": "Why was the 1908 Children's Act called the 'Children's Charter'?", "opts": ["It brought in many protections for children, e.g. against cruelty", "It gave children the vote", "It made school free for the first time", "It gave every child a pension"], "ans": 0, "explain": "It made cruelty to children a crime, set up juvenile courts and stopped children being sent to adult prisons."},
{"topic": "modern", "type": "mcq", "q": "What did the National Insurance Act of 1911 provide?", "opts": ["Pensions for everyone over 60", "Sickness benefit for many workers, and unemployment benefit in some trades", "Free healthcare for everyone", "Free school meals"], "ans": 1, "explain": "Part 1 (health) covered workers on lower incomes, paid for by worker, employer and state. Part 2 (unemployment) covered certain trades such as shipbuilding and construction. Families weren't covered."},
{"topic": "modern", "type": "mcq", "q": "What were labour exchanges (1909)?", "opts": ["Workhouses", "Banks for workers", "Trade union offices", "Places where unemployed people could find out about jobs"], "ans": 3, "explain": "Labour exchanges helped unemployed people find work."},
{"topic": "modern", "type": "mcq", "q": "How did evacuation in 1939 change attitudes to poverty?", "opts": ["It showed many better-off families how poor some city children were", "It had no effect", "It ended poverty", "It proved poverty was caused by laziness"], "ans": 0, "explain": "City children arriving in the countryside showed signs of poverty, poor health and poor clothing, which shocked many hosts."},
{"topic": "modern", "type": "mcq", "q": "Which of these was one of Beveridge's 'Five Giants'?", "opts": ["Squalor", "Crime", "Greed", "War"], "ans": 0, "explain": "The Beveridge Report (1942) named Want, Disease, Ignorance, Squalor and Idleness."},
{"topic": "modern", "type": "mcq", "q": "Which Labour minister set up the National Health Service in 1948?", "opts": ["Lloyd George", "Aneurin Bevan", "William Beveridge", "Clement Attlee"], "ans": 1, "explain": "Bevan was Minister of Health. The NHS began in July 1948, free at the point of use. Attlee was Prime Minister."},
{"topic": "modern", "type": "mcq", "q": "Which 'giant' were new council houses, prefabs and new towns meant to tackle?", "opts": ["Idleness", "Disease", "Squalor", "Ignorance"], "ans": 2, "explain": "Squalor = poor housing. Labour built council houses and prefabs, and new towns such as East Kilbride."},
{"topic": "modern", "type": "mcq", "q": "What was nationalisation?", "opts": ["Creating new towns", "Giving every worker a pension", "The government taking over major industries such as coal and the railways", "Selling state industries to private companies"], "ans": 2, "explain": "Labour nationalised industries including coal, railways and the Bank of England, partly to protect jobs (tackling idleness)."},
{"topic": "nazi", "type": "mcq", "q": "Which clause of the Treaty of Versailles made Germany accept blame for the war?", "opts": ["The war guilt clause", "The reparations clause", "Article 48", "The Enabling Act"], "ans": 0, "explain": "Germans hated the 'war guilt' clause (Article 231). They called the treaty a 'diktat' — a dictated peace."},
{"topic": "nazi", "type": "mcq", "q": "Under the Treaty of Versailles, how large could the German army be?", "opts": ["100 000 men", "1 million men", "500 000 men", "No army at all"], "ans": 0, "explain": "The army was limited to 100 000, conscription was banned, Germany could have no air force, and the Rhineland was demilitarised."},
{"topic": "nazi", "type": "mcq", "q": "Who led the Spartacist Revolt in January 1919?", "opts": ["Communists including Rosa Luxemburg and Karl Liebknecht", "President Ebert", "The Freikorps", "Hitler and the Nazis"], "ans": 0, "explain": "The left-wing Spartacists tried to start a communist revolution in Berlin. The government used the Freikorps to crush them."},
{"topic": "nazi", "type": "mcq", "q": "What caused hyperinflation in Germany in 1923?", "opts": ["The Nazis took over the banks", "Germany won too much land", "The Wall Street Crash", "The government printed money after the French occupied the Ruhr"], "ans": 3, "explain": "When Germany fell behind on reparations, France and Belgium occupied the Ruhr. Workers went on strike, and the government printed money to pay them, making it worthless."},
{"topic": "nazi", "type": "mcq", "q": "What happened in the Beer Hall Putsch of November 1923?", "opts": ["The Reichstag was burned", "Hitler became Chancellor", "The Nazis won the election", "Hitler tried to seize power in Munich and failed"], "ans": 3, "explain": "The putsch failed. Hitler was put on trial, given a short prison sentence, and wrote Mein Kampf in prison. Afterwards he aimed to win power through elections."},
{"topic": "nazi", "type": "mcq", "q": "How did the Great Depression help the Nazis?", "opts": ["It ended the Treaty of Versailles", "It made Germany rich", "Mass unemployment made people desperate and turn to extreme parties", "It made the communists disappear"], "ans": 2, "explain": "After 1929 unemployment soared to around 6 million. Hitler promised work and bread, and Nazi votes rose sharply."},
{"topic": "nazi", "type": "mcq", "q": "When was Hitler appointed Chancellor?", "opts": ["August 1934", "November 1923", "September 1939", "January 1933"], "ans": 3, "explain": "President Hindenburg appointed Hitler Chancellor on 30 January 1933."},
{"topic": "nazi", "type": "mcq", "q": "How did the Nazis use the Reichstag fire of February 1933?", "opts": ["Blamed the Jews and started the war", "Apologised and resigned", "Called off the elections forever", "Blamed the communists and passed emergency laws to arrest opponents"], "ans": 3, "explain": "A Dutch communist was arrested. Hitler persuaded Hindenburg to sign an emergency decree suspending civil rights, and thousands of communists were arrested."},
{"topic": "nazi", "type": "mcq", "q": "What did the Enabling Act of 1933 do?", "opts": ["Let Hitler make laws without the Reichstag", "Ended reparations", "Banned the Hitler Youth", "Made Hindenburg Führer"], "ans": 0, "explain": "The Enabling Act gave Hitler the power to pass laws for four years without the Reichstag's approval — the basis of his dictatorship."},
{"topic": "nazi", "type": "mcq", "q": "What was the Night of the Long Knives (June 1934)?", "opts": ["Hitler had Röhm and other SA leaders killed", "An attack on Jewish shops", "A failed communist revolt", "The Reichstag fire"], "ans": 0, "explain": "Hitler removed the SA leadership, which worried the army and big business. After President Hindenburg died in August 1934, the army swore an oath of loyalty to Hitler."},
{"topic": "nazi", "type": "mcq", "q": "What were the Nuremberg Laws of 1935?", "opts": ["Laws setting up the autobahns", "Laws creating the Hitler Youth", "Laws giving women the vote", "Laws that took away Jews' citizenship and banned marriage between Jews and non-Jews"], "ans": 3, "explain": "The Nuremberg Laws were a major step in the persecution of Jews. Kristallnacht followed in November 1938."},
{"topic": "nazi", "type": "mcq", "q": "Which church group led by Pastor Martin Niemöller opposed Nazi control of the churches?", "opts": ["The Confessional Church", "The Edelweiss Pirates", "The SA", "The Reich Church"], "ans": 0, "explain": "Niemöller was sent to a concentration camp. Other opposition came from socialists, communists and some young people."},
{"topic": "nazi", "type": "mcq", "q": "Nazi policy said women's lives should focus on 'Kinder, Küche, Kirche'. What does this mean?", "opts": ["Kindness, cooking, cleaning", "Children, school, state", "Work, family, nation", "Children, kitchen, church"], "ans": 3, "explain": "Women were encouraged to stay at home and have children. Loans were given to married couples, and medals were awarded to mothers of large families."},
{"topic": "civilrights", "type": "mcq", "q": "Through which famous immigration station did millions of immigrants enter the USA?", "opts": ["Alcatraz", "Ellis Island", "Plymouth Rock", "Pearl Harbor"], "ans": 1, "explain": "Ellis Island in New York harbour processed millions of immigrants, including many 'new immigrants' from southern and eastern Europe."},
{"topic": "civilrights", "type": "mcq", "q": "What did the Immigration Act of 1924 do?", "opts": ["Opened the door to all immigrants", "Set strict quotas that cut immigration, especially from southern and eastern Europe", "Banned the Ku Klux Klan", "Gave immigrants the vote"], "ans": 1, "explain": "Quotas closed the 'Open Door'. Fear of communism (the Red Scare) and dislike of 'new immigrants' were reasons for the change."},
{"topic": "civilrights", "type": "mcq", "q": "What were 'Jim Crow' laws?", "opts": ["Laws giving Black Americans equal rights", "Laws banning immigration", "Laws in the Southern states that segregated Black and white Americans", "Laws ending lynching"], "ans": 2, "explain": "Jim Crow laws separated schools, transport, restaurants and more. An 1896 Supreme Court case (Plessy v Ferguson) said 'separate but equal' was allowed."},
{"topic": "civilrights", "type": "mcq", "q": "Which organisation used violence and terror against Black Americans and grew hugely in the 1920s?", "opts": ["The Ku Klux Klan", "The NAACP", "The Nation of Islam", "The Black Panthers"], "ans": 0, "explain": "The KKK used lynching, beatings and burnings to terrorise Black Americans and others."},
{"topic": "civilrights", "type": "mcq", "q": "Why did many Black Americans move to northern cities (the Great Migration)?", "opts": ["Because northern cities had no racism", "Because the government paid them to", "To farm cheaper land", "To escape Jim Crow laws and find factory jobs"], "ans": 3, "explain": "Many moved north for work and to escape Southern racism, but often faced discrimination and poor housing in northern ghettos."},
{"topic": "civilrights", "type": "mcq", "q": "What did the Supreme Court decide in Brown v Board of Education of Topeka (1954)?", "opts": ["Black Americans could not vote", "Buses must be segregated", "Separate but equal was fair", "Segregated schools were unconstitutional"], "ans": 3, "explain": "The ruling overturned 'separate but equal' in schools, but many Southern states resisted."},
{"topic": "civilrights", "type": "mcq", "q": "What started the Montgomery Bus Boycott in December 1955?", "opts": ["Schools were desegregated", "A bus driver was killed", "Martin Luther King was arrested", "Rosa Parks was arrested for refusing to give up her seat to a white passenger"], "ans": 3, "explain": "Black residents boycotted the buses for over a year. Martin Luther King became a national leader, and the Supreme Court ruled bus segregation unconstitutional."},
{"topic": "civilrights", "type": "mcq", "q": "What happened at Little Rock, Arkansas, in 1957?", "opts": ["Rosa Parks was arrested", "Federal troops were sent to protect nine Black students attending a white high school", "The Black Panthers were founded", "The March on Washington took place"], "ans": 1, "explain": "Governor Faubus used the National Guard to block the students. President Eisenhower sent federal troops to enforce the law."},
{"topic": "civilrights", "type": "mcq", "q": "What were sit-ins, such as at Greensboro in 1960?", "opts": ["Strikes by factory workers", "Armed patrols by Black Panthers", "Bus journeys through the South", "Peaceful protests where students sat at whites-only lunch counters"], "ans": 3, "explain": "Sit-ins spread across the South and led to many lunch counters being desegregated."},
{"topic": "civilrights", "type": "mcq", "q": "Why were the Freedom Rides of 1961 important?", "opts": ["They ended the Jim Crow laws immediately", "Riders were attacked, gaining national attention and forcing action on segregated bus terminals", "They were led by Malcolm X", "They were the first boycott"], "ans": 1, "explain": "Mixed groups rode buses into the South to test desegregation rulings. Violent attacks were seen nationwide."},
{"topic": "civilrights", "type": "mcq", "q": "Why did the 1963 Birmingham campaign shock many Americans?", "opts": ["Martin Luther King was killed", "TV showed police using dogs and fire hoses on young protesters", "Protesters burned the city", "No one turned up"], "ans": 1, "explain": "Police chief 'Bull' Connor's tactics were broadcast nationally, building support for a Civil Rights Act."},
{"topic": "civilrights", "type": "mcq", "q": "Which law followed the 1965 Selma marches?", "opts": ["The Nuremberg Laws", "The Voting Rights Act", "The Civil Rights Act of 1964", "The Immigration Act"], "ans": 1, "explain": "The violence of 'Bloody Sunday' at Selma helped pass the Voting Rights Act, which banned literacy tests and other barriers to Black voting."},
{"topic": "civilrights", "type": "mcq", "q": "Which leader belonged to the Nation of Islam and argued for Black separatism before leaving it in 1964?", "opts": ["Martin Luther King", "Stokely Carmichael", "Malcolm X", "Rosa Parks"], "ans": 2, "explain": "Malcolm X criticised non-violence and integration. He was assassinated in February 1965."},
{"topic": "civilrights", "type": "mcq", "q": "Which group, founded in 1966, ran armed patrols and community programmes such as free breakfasts?", "opts": ["The Black Panthers", "The NAACP", "The SCLC", "SNCC"], "ans": 0, "explain": "Founded by Huey Newton and Bobby Seale in Oakland, California."},
{"topic": "redflag", "type": "mcq", "q": "What type of government did Tsar Nicholas II run?", "opts": ["A communist state", "A constitutional monarchy with a strong parliament", "A democracy", "An autocracy — the Tsar had complete power"], "ans": 3, "explain": "The Tsar ruled with the support of the army, the Okhrana (secret police), the Orthodox Church and the nobility."},
{"topic": "redflag", "type": "mcq", "q": "What was Russification?", "opts": ["Bringing in Western technology", "Forcing national minorities to use the Russian language and culture", "Building railways across Russia", "Giving land to peasants"], "ans": 1, "explain": "Poles, Finns, Ukrainians and others resented Russification, which created opposition to the Tsar."},
{"topic": "redflag", "type": "mcq", "q": "What happened on 'Bloody Sunday' in January 1905?", "opts": ["Troops fired on a peaceful march to the Winter Palace", "The Bolsheviks seized power", "Rasputin was murdered", "The Tsar abdicated"], "ans": 0, "explain": "Marchers led by Father Gapon wanted to petition the Tsar. Hundreds were killed, damaging the Tsar's image as the 'Little Father'."},
{"topic": "redflag", "type": "mcq", "q": "Which defeat in war helped cause the 1905 Revolution?", "opts": ["Defeat by Austria", "Defeat by Germany", "Defeat by Japan", "Defeat by Britain"], "ans": 2, "explain": "Defeat in the Russo-Japanese War (1904–05) humiliated the government and added to unrest."},
{"topic": "redflag", "type": "mcq", "q": "What did the October Manifesto of 1905 promise?", "opts": ["Peace, bread and land", "The end of the monarchy", "Land for all peasants", "An elected parliament (Duma) and civil rights"], "ans": 3, "explain": "It split the opposition. In practice the Tsar kept most of his power and dissolved Dumas he didn't like."},
{"topic": "redflag", "type": "mcq", "q": "What did Stolypin's land reforms aim to do?", "opts": ["Create a class of richer peasants (kulaks) loyal to the Tsar", "Ban peasants from owning land", "Collectivise farms", "Give all land to the nobles"], "ans": 0, "explain": "Stolypin's 'wager on the strong' helped some peasants, while he also crushed opposition harshly. He was assassinated in 1911."},
{"topic": "redflag", "type": "mcq", "q": "Why did the Tsar's decision to take personal command of the army in 1915 weaken him?", "opts": ["It led to peace with Germany", "He won every battle", "He was blamed for defeats, and the Tsarina and Rasputin were left in charge at home", "The army refused to fight for him"], "ans": 2, "explain": "Defeats were now his fault, and the unpopular Tsarina (German-born) and Rasputin's influence damaged the government further."},
{"topic": "redflag", "type": "mcq", "q": "What sparked the February Revolution of 1917?", "opts": ["Lenin's return to Russia", "The storming of the Winter Palace", "Strikes and bread protests in Petrograd, and soldiers joining the protesters", "The Kornilov revolt"], "ans": 2, "explain": "Food and fuel shortages led to strikes and demonstrations. When soldiers mutinied and joined them, the Tsar abdicated."},
{"topic": "redflag", "type": "mcq", "q": "Why did the Provisional Government become unpopular?", "opts": ["It brought back the Tsar", "It continued the war and did not give land to the peasants", "It made peace with Germany too soon", "It gave too much land to peasants"], "ans": 1, "explain": "Kerensky's summer offensive failed, land was not redistributed, and shortages continued. It shared power with the Petrograd Soviet."},
{"topic": "redflag", "type": "mcq", "q": "What were Lenin's April Theses slogans?", "opts": ["'Kinder, Küche, Kirche'", "'Workers of the world, unite' only", "'Liberty, Equality, Fraternity'", "'Peace, Bread, Land' and 'All power to the Soviets'"], "ans": 3, "explain": "Lenin promised to end the war, feed the people and give land to the peasants, which won growing support."},
{"topic": "redflag", "type": "mcq", "q": "Who organised the Bolshevik seizure of power in October 1917?", "opts": ["Leon Trotsky, through the Military Revolutionary Committee", "General Kornilov", "Grigori Rasputin", "Alexander Kerensky"], "ans": 0, "explain": "Trotsky planned the takeover of key points in Petrograd, ending with the capture of the Winter Palace."},
{"topic": "redflag", "type": "mcq", "q": "Which was a reason the Reds won the Civil War (1918–21)?", "opts": ["They controlled the central industrial areas and railways", "The Whites were united under one leader", "The Reds had no army", "Foreign countries supported only the Reds"], "ans": 0, "explain": "The Reds held Moscow and Petrograd, factories and railways, and had Trotsky's disciplined Red Army. The Whites were divided and spread out."},
{"topic": "skills", "type": "fillin", "q": "In a 'To what extent' answer, you must finish with a reasoned _____.", "ans": "conclusion", "explain": "Your conclusion must make a judgement on the factor in the question compared with the others, with a reason."},
{"topic": "migration", "type": "fillin", "q": "The Protestant organisation brought to Scotland by some Irish immigrants was the _____ Order.", "ans": "Orange", "explain": "Orange lodges celebrated Protestant identity; tensions with Irish Catholics contributed to sectarianism."},
{"topic": "greatwar", "type": "fillin", "q": "Dr Elsie _____ set up the Scottish Women's Hospitals, which served overseas during the war.", "ans": "Inglis", "explain": "The War Office rejected her offer, so the hospitals served with France, Serbia and Russia."},
{"topic": "enslaved", "type": "fillin", "q": "The famous medallion asking 'Am I not a man and a _____?' was used by abolitionists.", "ans": "brother", "explain": "Josiah Wedgwood produced the medallion. Other methods included petitions, a sugar boycott, public meetings and the Brookes ship diagram."},
{"topic": "changing", "type": "fillin", "q": "The 1832 Reform Act is often called the _____ Reform Act.", "ans": "Great", "explain": "It removed many 'rotten boroughs' and gave the vote to more middle-class men, but most working men still couldn't vote."},
{"topic": "modern", "type": "fillin", "q": "The Beveridge Report named five 'giants': Want, Disease, Ignorance, Squalor and _____.", "ans": "Idleness", "explain": "Idleness = unemployment. Labour's reforms after 1945 aimed to tackle all five."},
{"topic": "nazi", "type": "fillin", "q": "The Nazi secret police was called the _____.", "ans": "Gestapo", "explain": "The Gestapo, SS and concentration camps were used to intimidate and control the population."},
{"topic": "civilrights", "type": "fillin", "q": "The Supreme Court principle that allowed segregation was 'separate but _____'.", "ans": "equal", "explain": "It was overturned for schools by Brown v Board of Education (1954)."},
{"topic": "redflag", "type": "fillin", "q": "The Bolshevik secret police set up in December 1917 was called the _____.", "ans": "Cheka", "explain": "The Cheka carried out the Red Terror against opponents during the Civil War."}
];
const SHEETS=[
 {
  "title": "Exam skills worksheet",
  "icon": "📝",
  "keyAreas": "<strong>📋 Question types:</strong> Describe · Explain · How fully · Compare · Evaluate usefulness · To what extent",
  "sections": [
   {
    "head": "Section A — Know the marks",
    "qs": [
     {
      "kind": "blanks",
      "label": "Q1 · Fill in the Blanks",
      "text": "How many marks is each question type worth?",
      "reveal": "<strong>✓</strong> Describe <strong>4</strong> · Explain <strong>6</strong> · To what extent <strong>9</strong>",
      "body": "Describe <input class=\"eq-in\" id=\"hq1a\" placeholder=\"?\"/> · Explain <input class=\"eq-in\" id=\"hq1b\" placeholder=\"?\"/> · To what extent <input class=\"eq-in\" id=\"hq1c\" placeholder=\"?\"/>",
      "ids": [
       "hq1a",
       "hq1b",
       "hq1c"
      ],
      "answers": [
       "4",
       "6",
       "9"
      ]
     },
     {
      "kind": "mcq",
      "label": "Q2 · Multiple Choice",
      "text": "Which is the best start to a COMPARE answer?",
      "reveal": "<strong>✓ A.</strong> It compares the two sources directly on the same point.",
      "opts": [
       [
        "Source B says the war was a disaster and Source C agrees, saying it caused huge losses.",
        true
       ],
       [
        "Source B is a diary written in 1916.",
        false
       ],
       [
        "Source C says lots of men died.",
        false
       ],
       [
        "Both sources are useful.",
        false
       ]
      ]
     }
    ]
   },
   {
    "head": "Section B — Write it",
    "qs": [
     {
      "kind": "written",
      "label": "Q3 · Explain (6 marks)",
      "text": "Choose an event from your option. Write three linked reasons why it happened, using 'because' or 'this meant that'.",
      "reveal": "<strong>✓ Check your answer:</strong><br/>• Each reason is accurate and relevant.<br/>• Each one is linked to the question, not just described.<br/>• For the full 6 marks you need six developed reasons.",
      "placeholder": "Reason 1… because…",
      "tall": true
     }
    ]
   }
  ]
 },
 {
  "title": "Scottish: Era of the Great War worksheet",
  "icon": "🪖",
  "keyAreas": "<strong>📋 Key issues:</strong> Western Front · Society &amp; culture · Industry &amp; economy · Politics",
  "sections": [
   {
    "head": "Section A — Knowledge",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "Which of these did DORA allow the government to do?",
      "reveal": "<strong>✓ A.</strong> DORA allowed censorship, control of land and factories, and shorter pub hours.",
      "opts": [
       [
        "Censor newspapers",
        true
       ],
       [
        "Give women the vote",
        false
       ],
       [
        "Introduce conscription",
        false
       ],
       [
        "Build council houses",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Describe (4 marks)",
      "text": "Describe the part women played in the war effort in Scotland.",
      "reveal": "<strong>✓ Possible points:</strong><br/>• Munitions work, e.g. at Gretna's HM Factory<br/>• Tram and bus conductors, office and factory jobs<br/>• Nursing, e.g. Elsie Inglis's Scottish Women's Hospitals<br/>• Women's Land Army / farm work<br/>• Leading the 1915 Glasgow rent strikes",
      "placeholder": "Four detailed points…",
      "tall": true
     }
    ]
   },
   {
    "head": "Section B — Extended",
    "qs": [
     {
      "kind": "written",
      "label": "Q3 · Explain (6 marks)",
      "text": "Explain the reasons why women gained the vote in 1918.",
      "reveal": "<strong>✓ Possible reasons:</strong><br/>• Women's war work changed attitudes to them<br/>• Pre-war campaigns by suffragists (NUWSS) and suffragettes (WSPU)<br/>• The suffragettes stopped militant action during the war, earning respect<br/>• A new electoral law was needed anyway so soldiers could vote<br/>• Other countries had given women the vote<br/>• Politicians feared suffragette violence might return after the war",
      "placeholder": "Six linked reasons…",
      "tall": true
     }
    ]
   }
  ]
 },
 {
  "title": "European & World: Hitler and Nazi Germany worksheet",
  "icon": "🇩🇪",
  "keyAreas": "<strong>📋 Key issues:</strong> Weimar Germany · Nazi rise to power · Nazi control · Social &amp; economic policies",
  "sections": [
   {
    "head": "Section A — Knowledge",
    "qs": [
     {
      "kind": "blanks",
      "label": "Q1 · Fill in the Blanks",
      "text": "Complete the timeline:",
      "reveal": "<strong>✓</strong> Hitler became Chancellor in <strong>1933</strong>. The Night of the Long Knives was in <strong>1934</strong>. The Nuremberg Laws were passed in <strong>1935</strong>.",
      "body": "Hitler became Chancellor in <input class=\"eq-in\" id=\"hq7a\" placeholder=\"????\"/>. The Night of the Long Knives was in <input class=\"eq-in\" id=\"hq7b\" placeholder=\"????\"/>. The Nuremberg Laws were passed in <input class=\"eq-in\" id=\"hq7c\" placeholder=\"????\"/>.",
      "ids": [
       "hq7a",
       "hq7b",
       "hq7c"
      ],
      "answers": [
       "1933",
       "1934",
       "1935"
      ]
     }
    ]
   },
   {
    "head": "Section B — Extended",
    "qs": [
     {
      "kind": "written",
      "label": "Q2 · To what extent (9 marks)",
      "text": "To what extent was the Great Depression the main reason the Nazis came to power in 1933?",
      "reveal": "<strong>✓ Plan:</strong><br/>• <strong>Intro:</strong> several factors helped the Nazis.<br/>• <strong>Depression:</strong> ~6 million unemployed; people turned to extremes; Nazi votes rose.<br/>• <strong>Other factors:</strong> weakness of Weimar (coalitions, Article 48); resentment of Versailles; Nazi propaganda and Hitler's appeal; fear of communism; backroom deals (von Papen, Hindenburg).<br/>• <strong>Conclusion:</strong> a clear judgement, e.g. 'The Depression was the most important factor because…', supported with a reason.",
      "placeholder": "Introduction… factor in the question… other factors… conclusion",
      "tall": true
     }
    ]
   }
  ]
 }
];
const FACTS=[
 {
  "h": "📝 Question types",
  "cards": [
   [
    "Describe (4 marks)",
    "Four accurate, detailed points of knowledge"
   ],
   [
    "Explain (6 marks)",
    "Six reasons, each linked to the event"
   ],
   [
    "How fully (6 marks)",
    "Points from the source + recalled knowledge it leaves out + a judgement"
   ],
   [
    "Compare (4 marks)",
    "Direct comparisons between two sources (overall and detailed)"
   ],
   [
    "Evaluate usefulness (5 marks)",
    "Origin/purpose · content · what's missing"
   ],
   [
    "To what extent (9 marks)",
    "Introduction · factor in question · other factors · conclusion with reason"
   ]
  ]
 },
 {
  "h": "🏴 Scottish dates",
  "cards": [
   [
    "1845",
    "Start of the potato famine in Ireland — mass Irish migration to Scotland"
   ],
   [
    "1915",
    "Glasgow rent strikes → Rent Restriction Act"
   ],
   [
    "1916",
    "Conscription (Military Service Act)"
   ],
   [
    "1918",
    "Representation of the People Act: women over 30 (with property) and all men over 21 get the vote"
   ],
   [
    "1928",
    "Women get the vote on equal terms with men (21)"
   ]
  ]
 },
 {
  "h": "🇬🇧 British dates",
  "cards": [
   [
    "1807",
    "Parliament abolishes the British trade in enslaved Africans"
   ],
   [
    "1819 · 1832 · 1867 · 1884",
    "Peterloo · Great Reform Act · 2nd Reform Act · 3rd Reform Act"
   ],
   [
    "1833 · 1842",
    "Factory Act · Mines Act"
   ],
   [
    "1908 · 1911",
    "Old Age Pensions & Children's Act · National Insurance Act"
   ],
   [
    "1942 · 1948",
    "Beveridge Report · NHS begins"
   ]
  ]
 },
 {
  "h": "🌍 European & World dates",
  "cards": [
   [
    "1919 · 1923",
    "Treaty of Versailles & Spartacist Revolt · Hyperinflation & Beer Hall Putsch"
   ],
   [
    "1933 · 1934 · 1935",
    "Hitler Chancellor, Reichstag fire, Enabling Act · Night of the Long Knives · Nuremberg Laws"
   ],
   [
    "1905 · 1917 · 1918–21",
    "Bloody Sunday & 1905 Revolution · February & October Revolutions · Russian Civil War"
   ],
   [
    "1954 · 1955 · 1957",
    "Brown v Board · Montgomery Bus Boycott · Little Rock"
   ],
   [
    "1963 · 1964 · 1965",
    "Birmingham & March on Washington · Civil Rights Act · Selma & Voting Rights Act"
   ]
  ]
 }
];
const MOCK_INTRO="Two practice sets of 25 knowledge questions, 1 mark each, a fresh set every attempt. Use Topics to practise only the options your class studies.<br/><strong>The real exam:</strong> one question paper, 80 marks in 2 hours 20 minutes. Answer one part from each section: Scottish (25 marks), British (26 marks), European &amp; World (29 marks). There is also an assignment worth 20 marks, written up in 1 hour with a resource sheet.";
const MOCK_PAPERS=[
 {
  "key": "paper1",
  "title": "Practice set 1 — Mixed questions",
  "short": "Set 1",
  "desc": "25 questions · 30 minutes · all options",
  "n": 25,
  "mins": 30
 },
 {
  "key": "paper2",
  "title": "Practice set 2 — Mixed questions",
  "short": "Set 2",
  "desc": "25 questions · 40 minutes · all options",
  "n": 25,
  "mins": 40
 }
];
const MOCK_GRADES=[
 {
  "min": 70,
  "grade": "A",
  "msg": "Outstanding! An A-grade performance."
 },
 {
  "min": 60,
  "grade": "B",
  "msg": "Well done! Review the questions you dropped to push for an A."
 },
 {
  "min": 50,
  "grade": "C",
  "msg": "Good effort! Target your weakest topics to move up."
 },
 {
  "min": 40,
  "grade": "D",
  "msg": "Keep revising — use Smart Mix to work on the topics you found hardest."
 },
 {
  "min": 0,
  "grade": "No Award",
  "msg": "Don't give up! Review your answers, then try again."
 }
];
const EXAM_TIPS=[
 [
  "📝",
  "<strong>Know the question types</strong> — Describe (4), Explain (6), How fully (6), Compare (4), Evaluate usefulness (5) and To what extent (9)."
 ],
 [
  "🔍",
  "<strong>Explain = give reasons</strong> — link each point to the question with 'this meant that…' or 'because…'. Describing alone won't get the marks."
 ],
 [
  "⚖️",
  "<strong>9-mark 'To what extent'</strong> — write an introduction, cover the factor in the question AND other factors, then a conclusion that makes a judgement with a reason."
 ],
 [
  "📜",
  "<strong>Evaluate usefulness</strong> — comment on who wrote it, when, what type of source, why it was written, what it says, and what it misses out."
 ],
 [
  "🔁",
  "<strong>Compare</strong> — make direct comparisons: 'Source B says… and Source C agrees, saying…'. Don't describe each source separately."
 ],
 [
  "➕",
  "<strong>How fully</strong> — use the relevant points in the source, then add recalled knowledge that it misses out, and make a judgement."
 ],
 [
  "⏱",
  "<strong>Manage your time</strong> — 2 hours 20 minutes for 80 marks is about 1¾ minutes a mark. Don't spend too long on your favourite section."
 ]
];
const LINKS=[
 [
  "https://www.sqa.org.uk/sqa/47447.html",
  "SQA — Nat 5 History",
  "Official past papers, marking instructions and course specification"
 ],
 [
  "https://www.bbc.co.uk/bitesize/subjects/zrsj6sg",
  "BBC Bitesize — Nat 5 History",
  "Notes and tests for each option"
 ],
 [
  "https://scholar.hw.ac.uk",
  "SCHOLAR (Heriot-Watt)",
  "Online course material used by many Scottish schools"
 ],
 [
  "https://www.understandingstandards.org.uk/Subjects/History",
  "Understanding Standards",
  "SQA exemplar answers and marking guidance"
 ]
];
const ABOUT="Covers the exam skills and the eight most popular SQA Nat 5 History options (named in the 2026 SQA course report): Migration and Empire; The Era of the Great War; The Trade in Enslaved African People; Changing Britain; The Making of Modern Britain; Hitler and Nazi Germany; Free at Last? Civil Rights in the USA; Red Flag.<br/><br/> ✅ Written from the SQA (Qualifications Scotland) course specification <strong>C837 75</strong>, version 5.0 (valid from session 2024–25), and the specimen question paper.<br/><br/> 116 practice questions · 3 interactive worksheets (8 questions) · Practice tests · Flashcards · Timed challenge · Key facts reference.<br/><br/> Progress saves automatically in your browser — nothing is sent anywhere. Not affiliated with the SQA.";
