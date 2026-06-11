window.NEG_GAME_DATA = {
  slug:"travel_detective_3_v4",
  title:"Travel Detective 3: Lost Passport",
  shortTitle:"Detective 3",
  subtitle:"Reading clues, time expressions and past simple challenge",
  icon:"🕵️‍♂️",
  levelLabel:"Challenge level",
  goal:"Nicolás becomes a travel detective and solves a lost-passport mystery in English.",
  speakIntro:"Welcome to Travel Detective Three. Read clues, listen carefully, build sentences, and solve the lost passport mystery.",
  missions:[
    {id:"case_vocab", title:"Detective Vocabulary", skill:"Travel + mystery words", coachTopic:"vocabulario nuevo", type:"choice", passScore:7, intro:"Learn the words needed to solve the case.", items:[
      {q:"A small book that proves your identity when traveling is a ____.", answer:"passport", options:["passport","receipt","platform","boarding"], explanation:"A passport is used for international travel."},
      {q:"A paper or digital proof that you paid is a ____.", answer:"receipt", options:["receipt","gate","luggage","beach"], explanation:"A receipt shows that you paid."},
      {q:"A useful piece of information in a mystery is a ____.", answer:"clue", options:["clue","delay","seat","ferry"], explanation:"A clue helps solve a mystery."},
      {q:"A person who may have seen something is a ____.", answer:"witness", options:["witness","pilot","ticket","suitcase"], explanation:"A witness saw or heard something important."},
      {q:"A thing that is not in the right place is ____.", answer:"lost", options:["lost","direct","round-trip","early"], explanation:"Lost means missing or not found."},
      {q:"A thing you find after losing it is ____.", answer:"found", options:["found","delayed","crowded","checked"], explanation:"Found is the past of find."},
      {q:"A person who investigates a mystery is a ____.", answer:"detective", options:["detective","reservation","arrival","passport"], explanation:"A detective investigates and solves cases."},
      {q:"When something happens before another thing, use ____.", answer:"before", options:["before","luggage","gate","pilot"], explanation:"Before is a sequence word."},
      {q:"When something happens after another thing, use ____.", answer:"after", options:["after","customs","subway","round"], explanation:"After is a sequence word."},
      {q:"A place at the hotel where guests ask for help is the ____.", answer:"front desk", options:["front desk","boarding pass","traffic light","train track"], explanation:"The front desk is the reception area in a hotel."}
    ]},
    {id:"reading_clues", title:"Read the Clues", skill:"Reading comprehension", coachTopic:"comprensión de lectura", type:"reading", passScore:5, intro:"Read the short clue and answer.", items:[
      {text:"Nicolás arrived at the hotel at 5:00 p.m. He checked in and put his passport on the front desk.", q:"Where did Nicolás put his passport?", answer:"on the front desk", options:["on the front desk","in the taxi","at the gate","on the beach"], explanation:"The clue says he put it on the front desk."},
      {text:"After check-in, Nicolás went to his room. He carried his backpack, but he didn't carry his passport.", q:"What did Nicolás carry?", answer:"his backpack", options:["his backpack","his passport","a ferry ticket","a map only"], explanation:"He carried his backpack."},
      {text:"The receptionist found a passport under a small travel map. The name was Nicolás Ruiz.", q:"Who found the passport?", answer:"the receptionist", options:["the receptionist","the taxi driver","the pilot","the tour guide"], explanation:"The receptionist found it."},
      {text:"Before dinner, Nicolás called the front desk. The receptionist said, 'I found your passport.'", q:"When did Nicolás call the front desk?", answer:"before dinner", options:["before dinner","after breakfast","during the flight","at noon"], explanation:"The clue says before dinner."},
      {text:"Nicolás was worried, but he was happy when he got his passport back.", q:"How did Nicolás feel at the end?", answer:"happy", options:["happy","angry","tired only","hungry"], explanation:"He was happy when he got his passport back."},
      {text:"The taxi driver did not take the passport. He only gave Nicolás a receipt.", q:"What did the taxi driver give Nicolás?", answer:"a receipt", options:["a receipt","a passport","a boarding pass","a suitcase"], explanation:"The taxi driver gave him a receipt."}
    ]},
    {id:"past_clues", title:"Past Simple Clues", skill:"Regular and irregular past", coachTopic:"pasado simple en contexto", type:"type", passScore:8, intro:"Complete the past form to keep the investigation moving.", items:[
      {q:"find →", answer:"found", explanation:"find is irregular: find → found."},
      {q:"lose →", answer:"lost", explanation:"lose is irregular: lose → lost."},
      {q:"put →", answer:"put", explanation:"put is irregular and does not change: put → put."},
      {q:"call →", answer:"called", explanation:"call is regular: call → called."},
      {q:"ask →", answer:"asked", explanation:"ask is regular: ask → asked."},
      {q:"give →", answer:"gave", explanation:"give is irregular: give → gave."},
      {q:"carry →", answer:"carried", explanation:"For consonant + y, change y to i and add -ed: carried."},
      {q:"say →", answer:"said", explanation:"say is irregular: say → said."},
      {q:"feel →", answer:"felt", explanation:"feel is irregular: feel → felt."},
      {q:"return →", answer:"returned", explanation:"return is regular: return → returned."}
    ]},
    {id:"wh_questions", title:"WH Detective Questions", skill:"Who / What / Where / When", coachTopic:"preguntas WH", type:"choice", passScore:6, intro:"Choose the correct question word.", items:[
      {q:"____ found the passport? The receptionist.", answer:"Who", options:["Who","Where","When","What"], explanation:"Use who for a person."},
      {q:"____ did he put the passport? On the front desk.", answer:"Where", options:["Where","Who","What","Why"], explanation:"Use where for a place."},
      {q:"____ did Nicolás call the front desk? Before dinner.", answer:"When", options:["When","Where","Who","Which"], explanation:"Use when for time."},
      {q:"____ did the taxi driver give him? A receipt.", answer:"What", options:["What","Who","Where","When"], explanation:"Use what for a thing."},
      {q:"____ was worried? Nicolás.", answer:"Who", options:["Who","Where","What","When"], explanation:"Use who for a person."},
      {q:"____ was the passport? Under a map.", answer:"Where", options:["Where","Who","What","How many"], explanation:"Use where for location."},
      {q:"____ did he feel at the end? Happy.", answer:"How", options:["How","Who","Where","What time"], explanation:"Use how for feelings."},
      {q:"____ passport was it? Nicolás's passport.", answer:"Whose", options:["Whose","Who","Where","When"], explanation:"Use whose for possession."}
    ]},
    {id:"sequence_builder", title:"Put the Story in Order", skill:"Sequence words", coachTopic:"orden de eventos", type:"build", passScore:5, intro:"Build sentences with before, after and then.", items:[
      {q:"Build the sentence.", answer:"Nicolás checked in at the hotel", words:["in","hotel","checked","the","at","Nicolás"], explanation:"Checked in means registered at the hotel."},
      {q:"Build the sentence.", answer:"He put his passport on the desk", words:["on","put","passport","He","desk","the","his"], explanation:"Put does not change in the past."},
      {q:"Build the sentence.", answer:"After that he went to his room", words:["went","that","his","After","to","he","room"], explanation:"After that shows the next event."},
      {q:"Build the sentence.", answer:"The receptionist found the passport", words:["passport","found","The","the","receptionist"], explanation:"Found is the past of find."},
      {q:"Build the sentence.", answer:"Nicolás got his passport back", words:["passport","got","his","Nicolás","back"], explanation:"Got back means received again."},
      {q:"Build the sentence.", answer:"He was happy at the end", words:["happy","the","He","at","end","was"], explanation:"He was happy at the end."}
    ]},
    {id:"listening_case", title:"Listen to the Case", skill:"Listening", coachTopic:"escucha y detalles", type:"listen", passScore:5, intro:"Listen and pick the exact sentence.", items:[
      {sentence:"Nicolás lost his passport at the hotel.", answer:"Nicolás lost his passport at the hotel.", options:["Nicolás lost his passport at the hotel.","Nicolás lost his ticket at the airport.","Nicolás found a passport on the bus.","Nicolás bought a ticket at the station."], explanation:"Lost is the past of lose."},
      {sentence:"The receptionist found it under a map.", answer:"The receptionist found it under a map.", options:["The receptionist found it under a map.","The pilot found it near a gate.","The driver found it in a taxi.","The guide found it on a beach."], explanation:"Found is the past of find."},
      {sentence:"He called the front desk before dinner.", answer:"He called the front desk before dinner.", options:["He called the front desk before dinner.","He checked in after breakfast.","He bought a map after dinner.","He carried a suitcase before lunch."], explanation:"Called is a regular past verb."},
      {sentence:"The taxi driver gave him a receipt.", answer:"The taxi driver gave him a receipt.", options:["The taxi driver gave him a receipt.","The taxi driver took his passport.","The tour guide gave him a ticket.","The receptionist gave him a map."], explanation:"Gave is the past of give."},
      {sentence:"At the end, Nicolás felt relieved.", answer:"At the end, Nicolás felt relieved.", options:["At the end, Nicolás felt relieved.","At the end, Nicolás felt angry.","At the end, Nicolás was at the station.","At the end, Nicolás missed the flight."], explanation:"Felt is the past of feel; relieved means less worried."},
      {sentence:"The mystery was solved quickly.", answer:"The mystery was solved quickly.", options:["The mystery was solved quickly.","The flight was delayed again.","The passport was lost forever.","The suitcase was very heavy."], explanation:"Solved means resolved."}
    ]},
    {id:"case_dialogue", title:"Solve the Dialogue", skill:"Functional conversation", coachTopic:"diálogos funcionales", type:"dialogue", passScore:5, intro:"Choose what Nicolás should say.", items:[
      {place:"Hotel front desk", lines:["Nicolás: Excuse me. I can't find my passport.","Receptionist: When did you last see it?","Nicolás: ______"], answer:"I saw it at check-in.", options:["I saw it at check-in.","I see it tomorrow.","I was a passport.","I didn't went."], explanation:"Saw is the past of see."},
      {place:"Hotel front desk", lines:["Receptionist: What color is it?","Nicolás: ______"], answer:"It is dark blue.", options:["It is dark blue.","It went quickly.","It took a taxi.","It were late."], explanation:"This answers the color question."},
      {place:"Phone call", lines:["Receptionist: I found your passport.","Nicolás: ______"], answer:"Thank you so much!", options:["Thank you so much!","Where did you went?","I am delayed.","No, I didn't found."], explanation:"This is a polite response."},
      {place:"Hotel front desk", lines:["Receptionist: Here is your passport.","Nicolás: ______"], answer:"I really appreciate your help.", options:["I really appreciate your help.","I bought your help.","She didn't took it.","The gate is blue."], explanation:"A natural way to thank someone."},
      {place:"Teacher check", lines:["Teacher: Did Nicolás lose his passport forever?","Student: ______"], answer:"No, he didn't.", options:["No, he didn't.","No, he wasn't.","No, he doesn't yesterday.","No, he didn't lost."], explanation:"Short answer to Did...? No, he didn't."},
      {place:"Teacher check", lines:["Teacher: Who found the passport?","Student: ______"], answer:"The receptionist found it.", options:["The receptionist found it.","At the hotel found it.","It found the receptionist.","The receptionist find it."], explanation:"Subject + past verb: The receptionist found it."}
    ]},
    {id:"final_case_report", title:"Final Case Report", skill:"Story building", coachTopic:"reporte final en pasado", type:"build", passScore:5, intro:"Build the final report in correct English.", items:[
      {q:"Build the report sentence.", answer:"Nicolás arrived at the hotel", words:["hotel","arrived","the","Nicolás","at"], explanation:"Arrived is regular past."},
      {q:"Build the report sentence.", answer:"He lost his passport", words:["lost","passport","He","his"], explanation:"Lost is the past of lose."},
      {q:"Build the report sentence.", answer:"The receptionist found it", words:["receptionist","it","found","The"], explanation:"Found is the past of find."},
      {q:"Build the report sentence.", answer:"She returned it to Nicolás", words:["Nicolás","returned","to","She","it"], explanation:"Returned is regular past."},
      {q:"Build the report sentence.", answer:"The case was solved", words:["was","case","solved","The"], explanation:"The case was solved."},
      {q:"Build the final sentence.", answer:"Nicolás felt happy and relieved", words:["happy","felt","relieved","Nicolás","and"], explanation:"Felt is the past of feel."}
    ]}
  ]
};
