window.NEG_GAME_DATA = {
  slug:"travel_time_machine_2_v4",
  title:"Travel Time Machine 2",
  shortTitle:"Time Machine 2",
  subtitle:"Airport, hotel, listening and irregular past",
  icon:"🧳",
  levelLabel:"Next level",
  goal:"Nicolás practices longer phrases, dialogues and common irregular verbs for travel.",
  speakIntro:"Welcome to Travel Time Machine Two. Practice airport words, hotel phrases, listening, dialogues, and irregular verbs.",
  missions:[
    {id:"airport_vocab", title:"Airport Explorer", skill:"Airport vocabulary", coachTopic:"vocabulario de aeropuerto", type:"choice", passScore:7, intro:"Choose the best airport word.", items:[
      {q:"You go there to enter the plane.", answer:"gate", options:["gate","platform","taxi rank","customs"], explanation:"The gate is where passengers board the plane."},
      {q:"You give your bags to the airline at the ____.", answer:"check-in counter", options:["check-in counter","museum","train station","hotel lobby"], explanation:"At the check-in counter, the airline checks your ticket and luggage."},
      {q:"People check your bags and passport at ____.", answer:"security", options:["security","reservation","arrival","souvenir shop"], explanation:"Airport security checks passengers and bags."},
      {q:"A screen that shows flights is a ____.", answer:"departure board", options:["departure board","boarding pass","seat belt","backpack"], explanation:"A departure board displays flight information."},
      {q:"The place where you get your bags after a flight is ____.", answer:"baggage claim", options:["baggage claim","ticket office","gate","platform"], explanation:"Baggage claim is where passengers collect luggage."},
      {q:"A flight that arrives after the expected time is ____.", answer:"delayed", options:["delayed","direct","empty","round"], explanation:"Delayed means late."},
      {q:"A flight with no stops is a ____ flight.", answer:"direct", options:["direct","lost","boarding","crowded"], explanation:"A direct flight goes to the destination without changing planes."},
      {q:"A suitcase you take onto the plane is ____ luggage.", answer:"carry-on", options:["carry-on","customs","return","single"], explanation:"Carry-on luggage stays with you in the cabin."},
      {q:"The belt you fasten on the plane is a ____.", answer:"seat belt", options:["seat belt","boarding gate","passport control","lobby"], explanation:"A seat belt keeps passengers safe."},
      {q:"The person who flies the plane is the ____.", answer:"pilot", options:["pilot","passenger","receptionist","tour guide"], explanation:"A pilot flies the plane."}
    ]},
    {id:"irregular_past", title:"Irregular Travel Verbs", skill:"Past simple", coachTopic:"verbos irregulares", type:"type", passScore:8, intro:"Write the past simple form.", items:[
      {q:"go →", answer:"went", explanation:"go is irregular: go → went."},
      {q:"take →", answer:"took", explanation:"take is irregular: take → took."},
      {q:"get →", answer:"got", explanation:"get is irregular: get → got."},
      {q:"buy →", answer:"bought", explanation:"buy is irregular: buy → bought."},
      {q:"see →", answer:"saw", explanation:"see is irregular: see → saw."},
      {q:"eat →", answer:"ate", explanation:"eat is irregular: eat → ate."},
      {q:"have →", answer:"had", explanation:"have is irregular: have → had."},
      {q:"make →", answer:"made", explanation:"make is irregular: make → made."},
      {q:"come →", answer:"came", explanation:"come is irregular: come → came."},
      {q:"leave →", answer:"left", explanation:"leave is irregular: leave → left."}
    ]},
    {id:"listen_travel", title:"Listening Lab", skill:"Listening", coachTopic:"escucha en inglés", type:"listen", passScore:5, intro:"Listen to the sentence and choose what you hear.", items:[
      {sentence:"Nicolas went to the airport by taxi.", answer:"Nicolas went to the airport by taxi.", options:["Nicolas went to the airport by taxi.","Nicolas went to the station by train.","Nicolas walked to the hotel.","Nicolas took a ferry."], explanation:"Went is the past of go."},
      {sentence:"The flight was delayed.", answer:"The flight was delayed.", options:["The flight was delayed.","The bus was crowded.","The hotel was clean.","The train was early."], explanation:"Delayed means late."},
      {sentence:"She bought a round-trip ticket.", answer:"She bought a round-trip ticket.", options:["She bought a round-trip ticket.","She packed a blue suitcase.","She missed the bus.","She visited a castle."], explanation:"Bought is the past of buy."},
      {sentence:"They checked in at the hotel.", answer:"They checked in at the hotel.", options:["They checked in at the hotel.","They got off the train.","They took off at noon.","They waited at the gate."], explanation:"Checked in is a regular past verb phrase."},
      {sentence:"We saw a beautiful beach.", answer:"We saw a beautiful beach.", options:["We saw a beautiful beach.","We were in a busy station.","We went to the wrong gate.","We had two backpacks."], explanation:"Saw is the past of see."},
      {sentence:"The plane took off at six o'clock.", answer:"The plane took off at six o'clock.", options:["The plane took off at six o'clock.","The plane arrived at seven o'clock.","The train left at six o'clock.","The boat came at nine o'clock."], explanation:"Took off means left the ground."}
    ]},
    {id:"hotel_dialogues", title:"Hotel & Taxi Dialogues", skill:"Conversation", coachTopic:"conversaciones de viaje", type:"dialogue", passScore:5, intro:"Choose the most natural response in the conversation.", items:[
      {place:"Hotel reception", lines:["Receptionist: Good evening. How can I help you?","Nicolás: ______"], answer:"I have a reservation.", options:["I have a reservation.","I am a suitcase.","The flight took off.","I didn't gate."], explanation:"At a hotel, say: I have a reservation."},
      {place:"Taxi", lines:["Driver: Where are you going?","Nicolás: ______"], answer:"To the airport, please.", options:["To the airport, please.","Two passports, please.","It was delayed.","I bought the beach."], explanation:"This is a polite destination phrase."},
      {place:"Airport security", lines:["Officer: Can I see your passport?","Nicolás: ______"], answer:"Yes, here it is.", options:["Yes, here it is.","No, I am a plane.","I saw a ticket.","She were late."], explanation:"Yes, here it is is natural when giving a document."},
      {place:"Train station", lines:["Traveler: Which platform is for Bogotá?","Assistant: ______"], answer:"Platform three.", options:["Platform three.","Gate airplane.","Hotel key.","Delayed suitcase."], explanation:"Trains use platforms."},
      {place:"Restaurant", lines:["Waiter: What did you eat?","Nicolás: ______"], answer:"I ate chicken and rice.", options:["I ate chicken and rice.","I eat yesterday chicken.","I was bus.","I took off rice."], explanation:"Ate is the past of eat."},
      {place:"Tour", lines:["Guide: Did you enjoy the museum?","Nicolás: ______"], answer:"Yes, I did.", options:["Yes, I did.","Yes, I went.","Yes, I was enjoy.","Yes, I didn't."], explanation:"Short answer for Did you...? is Yes, I did."}
    ]},
    {id:"directions", title:"City Directions", skill:"Places and movement", coachTopic:"direcciones y lugares", type:"choice", passScore:6, intro:"Choose the correct word or phrase.", items:[
      {q:"A place where you can see old objects and art is a ____.", answer:"museum", options:["museum","station","seat belt","ticket"], explanation:"A museum has art, history or special objects."},
      {q:"A place where tourists sleep is a ____.", answer:"hotel", options:["hotel","customs","plane","ferry"], explanation:"Tourists often stay at a hotel."},
      {q:"Turn ____ at the traffic light.", answer:"left", options:["left","airport","delayed","luggage"], explanation:"Left is a direction."},
      {q:"The opposite of near is ____.", answer:"far", options:["far","fast","gate","clean"], explanation:"Far means not close."},
      {q:"The opposite of get on is ____.", answer:"get off", options:["get off","take off","check in","go out"], explanation:"You get on a bus/train, then get off."},
      {q:"A person who shows tourists a city is a ____.", answer:"tour guide", options:["tour guide","pilot","passenger","receptionist"], explanation:"A tour guide explains places to tourists."},
      {q:"A ticket to go and come back is a ____ ticket.", answer:"round-trip", options:["round-trip","one-way","delayed","crowded"], explanation:"Round-trip means return included."},
      {q:"A ticket to go only is a ____ ticket.", answer:"one-way", options:["one-way","round-trip","carry-on","boarding"], explanation:"One-way means only one direction."}
    ]},
    {id:"sentence_builder_2", title:"Longer Sentences", skill:"Sentence builder", coachTopic:"orden de palabras", type:"build", passScore:5, intro:"Build correct past simple sentences and questions.", items:[
      {q:"Build the sentence.", answer:"We went to the beach by bus", words:["to","went","beach","We","the","by","bus"], explanation:"We went to the beach by bus."},
      {q:"Build the sentence.", answer:"She bought a one-way ticket", words:["one-way","a","bought","ticket","She"], explanation:"Bought is the past of buy."},
      {q:"Build the question.", answer:"Did they check in at the hotel", words:["hotel","they","Did","at","check","in","the"], explanation:"After Did, use check in, not checked in."},
      {q:"Build the sentence.", answer:"The train left at noon", words:["left","at","The","noon","train"], explanation:"Left is the past of leave."},
      {q:"Build the sentence.", answer:"I didn't take the subway", words:["take","didn't","subway","I","the"], explanation:"After didn't, use take."},
      {q:"Build the sentence.", answer:"The station was very crowded", words:["crowded","was","very","station","The"], explanation:"Station is singular, so use was."}
    ]},
    {id:"pronunciation_2", title:"Speak Like a Traveler", skill:"Pronunciation", coachTopic:"pronunciación", type:"pronounce", passScore:4, intro:"Listen and repeat. Use the microphone if available.", items:[
      {sentence:"I have a reservation.", expected:"I have a reservation"},
      {sentence:"The flight was delayed.", expected:"The flight was delayed"},
      {sentence:"Did you take a taxi?", expected:"Did you take a taxi"},
      {sentence:"We went to the beach yesterday.", expected:"We went to the beach yesterday"},
      {sentence:"She bought a round-trip ticket.", expected:"She bought a round-trip ticket"}
    ]}
  ]
};
