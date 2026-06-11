window.NEG_GAME_DATA = {
  slug:"travel_time_machine_1_v4",
  title:"Travel Time Machine 1",
  shortTitle:"Time Machine 1",
  subtitle:"Basics: transport, travel words and simple past",
  icon:"✈️",
  levelLabel:"Foundation level",
  goal:"Help Nicolás build strong basics before moving to harder missions.",
  speakIntro:"Welcome to Travel Time Machine One. Practice transport, travel vocabulary, simple past, was, were, and did.",
  missions:[
    {id:"transport", title:"Transport Sorter", skill:"Land / Water / Air", coachTopic:"medios de transporte", type:"category", passScore:7, intro:"Choose where each transport normally travels.", categories:[{id:"land",label:"Land",tip:"road or rails"},{id:"water",label:"Water",tip:"sea, river or lake"},{id:"air",label:"Air",tip:"sky"}], items:[
      {term:"bus", answer:"land", explanation:"A bus travels on roads."},
      {term:"train", answer:"land", explanation:"A train travels on rails."},
      {term:"subway", answer:"land", explanation:"A subway travels on underground rails."},
      {term:"bike", answer:"land", explanation:"A bike is used on land."},
      {term:"boat", answer:"water", explanation:"A boat travels on water."},
      {term:"ferry", answer:"water", explanation:"A ferry carries people or vehicles across water."},
      {term:"ship", answer:"water", explanation:"A ship travels on the sea."},
      {term:"plane", answer:"air", explanation:"A plane flies in the air."},
      {term:"helicopter", answer:"air", explanation:"A helicopter flies in the air."},
      {term:"hot-air balloon", answer:"air", explanation:"A hot-air balloon travels through the air."}
    ]},
    {id:"travel_words", title:"Travel Words", skill:"Vocabulary", coachTopic:"vocabulario de viajes", type:"choice", passScore:7, intro:"Pick the correct travel word.", items:[
      {q:"You need this document to travel to another country.", answer:"passport", options:["passport","ticket","platform","suitcase"], explanation:"A passport identifies you when you travel internationally."},
      {q:"You show this to get on a plane.", answer:"boarding pass", options:["boarding pass","hotel key","traffic light","taxi"], explanation:"A boarding pass lets you board the plane."},
      {q:"This is where passengers wait for a plane.", answer:"airport", options:["airport","museum","hospital","garage"], explanation:"Passengers wait for flights at the airport."},
      {q:"This is where you wait for a train.", answer:"platform", options:["platform","gate","luggage","customs"], explanation:"A platform is the area beside train tracks."},
      {q:"Bags and suitcases are also called ____.", answer:"luggage", options:["luggage","arrival","boarding","map"], explanation:"Luggage means bags or suitcases for travel."},
      {q:"When the plane leaves, it is a ____.", answer:"departure", options:["departure","arrival","receipt","reservation"], explanation:"Departure means leaving."},
      {q:"When the plane gets to the place, it is an ____.", answer:"arrival", options:["arrival","departure","ticket office","gate"], explanation:"Arrival means reaching the destination."},
      {q:"At the hotel, you make a ____.", answer:"reservation", options:["reservation","seat belt","station","passport"], explanation:"A reservation is a booking."},
      {q:"You use this to find streets and places.", answer:"map", options:["map","luggage","ferry","pilot"], explanation:"A map helps you find places."},
      {q:"A person who travels is a ____.", answer:"passenger", options:["passenger","driver","pilot","teacher"], explanation:"A passenger travels in a vehicle but does not drive it."}
    ]},
    {id:"regular_past", title:"Regular Past", skill:"Simple past -ed", coachTopic:"verbos regulares en pasado", type:"type", passScore:6, intro:"Write the past form of each regular verb.", items:[
      {q:"travel →", answer:"traveled", answers:["traveled","travelled"], solution:"traveled / travelled", explanation:"Regular verb: add -ed. American English: traveled; British English: travelled."},
      {q:"visit →", answer:"visited", explanation:"visit + ed = visited."},
      {q:"walk →", answer:"walked", explanation:"walk + ed = walked."},
      {q:"arrive →", answer:"arrived", explanation:"For verbs ending in e, add only -d."},
      {q:"check in →", answer:"checked in", explanation:"check in becomes checked in."},
      {q:"wait →", answer:"waited", explanation:"wait + ed = waited."},
      {q:"pack →", answer:"packed", explanation:"pack + ed = packed."},
      {q:"stay →", answer:"stayed", explanation:"stay + ed = stayed."}
    ]},
    {id:"was_were", title:"Was or Were", skill:"Past of be", coachTopic:"was y were", type:"choice", passScore:6, intro:"Choose was or were.", items:[
      {q:"I ____ at the airport yesterday.", answer:"was", options:["was","were","did","went"], explanation:"Use was with I."},
      {q:"They ____ on the bus.", answer:"were", options:["was","were","did","took"], explanation:"Use were with they."},
      {q:"She ____ in a taxi.", answer:"was", options:["was","were","go","take"], explanation:"Use was with she."},
      {q:"We ____ very tired after the trip.", answer:"were", options:["was","were","did","visited"], explanation:"Use were with we."},
      {q:"The hotel ____ near the beach.", answer:"was", options:["was","were","did","had"], explanation:"Use was with singular nouns: the hotel."},
      {q:"You ____ late for the train.", answer:"were", options:["was","were","went","got"], explanation:"Use were with you."},
      {q:"The tickets ____ expensive.", answer:"were", options:["was","were","did","bought"], explanation:"Use were with plural nouns: tickets."},
      {q:"It ____ a long journey.", answer:"was", options:["was","were","did","made"], explanation:"Use was with it."}
    ]},
    {id:"did_questions", title:"Did Questions", skill:"Did + base verb", coachTopic:"preguntas con did", type:"choice", passScore:6, intro:"Remember: after did/didn't, use the base verb.", items:[
      {q:"Choose the correct question.", answer:"Did you travel by plane?", options:["Did you travel by plane?","Did you traveled by plane?","You did traveled by plane?","Did you travelling by plane?"], explanation:"After did, use the base verb: travel."},
      {q:"Choose the correct negative sentence.", answer:"She didn't take the bus.", options:["She didn't take the bus.","She didn't took the bus.","She doesn't took the bus.","She not took the bus."], explanation:"After didn't, use the base verb: take."},
      {q:"Choose the correct question.", answer:"Did they visit the museum?", options:["Did they visit the museum?","Did they visited the museum?","Did they visits the museum?","They did visited the museum?"], explanation:"After did, use visit."},
      {q:"Choose the correct answer.", answer:"Yes, I did.", options:["Yes, I did.","Yes, I was.","Yes, I do yesterday.","Yes, I traveled."], explanation:"Short answer to Did you...? is Yes, I did."},
      {q:"Choose the correct negative answer.", answer:"No, we didn't.", options:["No, we didn't.","No, we weren't did.","No, we don't yesterday.","No, we didn't went."], explanation:"Short answer: No, we didn't."},
      {q:"Complete: Did he ____ off the bus?", answer:"get", options:["get","got","gets","getting"], explanation:"After did, use the base form: get."},
      {q:"Complete: They didn't ____ at the hotel.", answer:"stay", options:["stay","stayed","stays","staying"], explanation:"After didn't, use stay."},
      {q:"Complete: Did the plane ____ off?", answer:"take", options:["take","took","takes","taking"], explanation:"After did, use take."}
    ]},
    {id:"build_story", title:"Build a Travel Story", skill:"Sentence builder", coachTopic:"frases en pasado simple", type:"build", passScore:4, intro:"Tap the words in the correct order.", items:[
      {q:"Build the sentence.", answer:"I traveled by bus yesterday", words:["bus","I","yesterday","traveled","by"], explanation:"Correct order: subject + past verb + extra information."},
      {q:"Build the sentence.", answer:"She packed her suitcase", words:["suitcase","packed","She","her"], explanation:"She packed her suitcase."},
      {q:"Build the question.", answer:"Did you visit the museum", words:["you","the","Did","museum","visit"], explanation:"Question: Did + subject + base verb."},
      {q:"Build the sentence.", answer:"They were at the airport", words:["the","were","They","airport","at"], explanation:"They were at the airport."},
      {q:"Build the sentence.", answer:"The plane took off late", words:["late","took","The","off","plane"], explanation:"Take off in past is took off."},
      {q:"Build the answer.", answer:"No I didn't", words:["didn't","No","I"], explanation:"Short negative answer: No, I didn't."}
    ]}
  ]
};
