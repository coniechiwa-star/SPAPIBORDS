
/*
  MUSIC PLAYER DATA

  MP3 files go inside: music/
  Cover images go inside: photos/
  Artist profile pictures go inside: photos/

  Lyrics format:
  { time: 0, text: "Your lyric line" }

  Time is measured in seconds.
*/

const tracks = [
  {
    title: "Talking Body",
    artist: "Tove Lo",
    file: "Talking Body.mp3",
    cover: "tokingbadi.png",

    artistBio: "Look, Listen, and Learn",

    lyrics: [
      { time: 8.3, text: "Bed, stay in bed" },
  { time: 10.8, text: "The feeling of your skin locked in my head" },
  { time: 16.5, text: "Smoke, smoke me broke" },
  { time: 18.8, text: "I don't care, I'm down for what you want" },

  { time: 24, text: "Day drunk into the night" },
  { time: 26.8, text: "Wanna keep you here" },
  { time: 28.8, text: "'Cause you dry my tears" },
  { time: 31, text: "Yeah" },
  { time: 32, text: "Summer lovin' and fights" },
  { time: 34.7, text: "How it is for us" },
   { time: 36.8, text: "And it's all because" },

  { time: 39, text: "Now if we're talking body (Hey)" },
  { time: 42.3, text: "You got a perfect one" },
  { time: 43.8, text: "So put it on me (Hey)" },
  { time: 46.3, text: "Swear it won't take you long" },
  { time: 48, text: "If you love me right" },
  { time: 50, text: "We fuck for life" },
  { time: 51.9, text: "On and on and on" },

  { time: 55.1, text: "Now if we're talking body (Hey)" },
  { time: 58.5, text: "You got a perfect one" },
  { time: 59.7, text: "So put it on me (Hey)" },
  { time: 62, text: "Swear it won't take you long" },
  { time: 64, text: "If you love me right" },
  { time: 66, text: "We fuck for life" },
  { time: 67.9, text: "On and on and on" }, 

  { time: 72.4, text: "Love, give me love" },
  { time: 75, text: "Anything you want I'll give it up" },
  { time: 80.2, text: "Lips, lips I kiss" },
  { time: 83, text: "Bite me while I taste your fingertips" },

  { time: 87.9, text: "Day drunk into the night" },  
  { time: 90.5, text: "Wanna keep you here" },
  { time: 92.5, text: "'Cause you dry my tears" },
  { time: 95, text: "Yeah" },
  { time: 96, text: "Summer lovin' and fights" },
  { time: 98.7, text: "How it is for us" },
  { time: 100.8, text: "And it's all because" },

  { time: 103.4, text: "Now if we're talking body (Hey)" },
  { time: 106, text: "You got a perfect one" },
  { time: 107.8, text: "So put it on me (Hey)" },
  { time: 110, text: "Swear it won't take you long" },
  { time: 112, text: "If you love me right" },
  { time: 114, text: "We fuck for life" },
  { time: 116, text: "On and on and on" },

  { time: 118.8, text: "Oh, now if we're talking body (Hey)" },
  { time: 122, text: "You got a perfect one" },
  { time: 123.8, text: "So put it on me (Hey)" },
  { time: 126, text: "Swear it won't take you long" },
  { time: 128, text: "If you love me right" },
  { time: 130, text: "We fuck for life" },
  { time: 132, text: "On and on and on (On and on and on)" },

  { time: 139.1, text: "Oh, oh (Hey)" },

  { time: 144, text: "Bodies" },
  { time: 146.8, text: "Our baby making bodies we just use for fun" },
  { time: 152, text: "Bodies" },
  { time: 154.8, text: "Let's use them up 'til every little piece is gone" },
  { time: 159.5, text: "(Let's go)" },
  { time: 160, text: "On and on and on" },
  { time: 163.5, text: "(Let's go)" },
  { time: 164, text: "On and on" },
  { time: 167.5, text: "(Let's go)" },

  { time: 169.5, text: "Now if we're talking body (Hey)" },
  { time: 172, text: "You got a perfect one" },
  { time: 173.8, text: "So put it on me (Hey)" },
  { time: 176, text: "Swear it won't take you long" },
  { time: 178, text: "If you love me right" },
  { time: 180, text: "We fuck for life" },
  { time: 182, text: "On and on and on" },

  { time: 184.8, text: "Oh, now if we're talking body (Hey)" },
  { time: 188, text: "You got a perfect one" },
  { time: 189.8, text: "So put it on me (Hey)" },
  { time: 192.3, text: "Swear it won't take you long" },
  { time: 194, text: "If you love me right" },
  { time: 196.3, text: "We fuck for life" },
  { time: 198, text: "On and on and on (On and on and on)" },

  { time: 201, text: "Oh, now if we're talking body (Hey)" },
  { time: 206, text: "So put it on me (Hey)" },
  { time: 209.8, text: "If you love me right" },
  { time: 212, text: "We fuck for life" },
  { time: 214, text: "On and on and on" },

  { time: 217, text: "Now if we're talking body (Hey)" },
  { time: 220.2, text: "You got a perfect one" },
  { time: 221.8, text: "So put it on me (Hey)" },
  { time: 224, text: "Swear it won't take you long" },
  { time: 226, text: "If you love me right" },
  { time: 228, text: "We fuck for life" },
  { time: 230, text: "On and on and on(Hey)" },
    ]
  },

  {
    title: "DAISIES",
    artist: "Justin Bieber",
    file: "Daisies.mp3",
    cover: "daises.png",
    artistBio: "Add artist biography here.",
    lyrics: [
      { time: 17.8, text: "Throwing pedals like do you love me or not" },
  { time: 22, text: "Head is spinning and it don't know when to stop" },
  { time: 26.5, text: "Cause you said forever babe did you mean it or not" },
  { time: 31, text: "Hold on hold on" },
  { time: 35, text: "You leave me on read babe but I still get the message" },
  { time: 39.7, text: "Instead of a line its 3 dots but I can connect em" },
  { time: 44, text: "And if it ain't right babe" },
  { time: 45.7, text: "You know I respect it" },

  { time: 48.4, text: "But if you need time just take your time" },
  { time: 50.7, text: "Honey I get it I get it I get it" },

  { time: 54.5, text: "The way you got me all in my head" },
  { time: 58.8, text: "Think I'd rather you in my bed" },
  { time: 62.5, text: "Whatever it is you know I can take it" },
  { time: 65.8, text: "I'm counting the days how many days" },
  { time: 68, text: "Til I can see you again" },

  { time: 70, text: "Blowing kisses like will you catch 'em or not" },
  { time: 74.5, text: "I'm Cupid with arrows babe I'm just shooting my shot mhmm" },
  { time: 78.8, text: "If I could get in drop me a pin" },
  { time: 81, text: "Hop in the — and come over" },

  { time: 83, text: "Don't wanna be friends just skin to skin" },
  { time: 85.4, text: "I wanna get closer and closer and closer" },

  { time: 89, text: "The way you got me all in my head" },
  { time: 93.5, text: "Think I'd rather you in my bed" },
  { time: 97.5, text: "Whatever it is you know I can take it" },
  { time: 100.7, text: "I'm counting the days how many days" },
  { time: 102.9, text: "Til I can see you again" },

  { time: 103.5, text: "You got me all in my feelings" },
  { time: 112, text: "And you got me all I've been all in my feelings" },
  { time: 120.5, text: "And you got me all weak in my knees every time" },
  { time: 129.5, text: "Cause you got me all, all in my feelings" },

  { time: 138, text: "🎵..." },

  { time: 141.5, text: "The way you got me all in my head" },
  { time: 145.8, text: "Think I'd rather you in my bed" },
  { time: 149.6, text: "Whatever it is you know I can take it" },
  { time: 152.8, text: "I'm counting the days how many days" },
  { time: 155, text: "Til I can see you again" },
    ]
  },

  {
    title: "Ghost",
    artist: "Justin Bieber",
    file: "Ghost.mp3",
    cover: "ghost.jpg",
    artistImage: "ghostbg.jpg",
    artistBio: "Add artist biography here.",
    lyrics: [
      { time: 13.5, text: "Youngblood thinks there's always tomorrow" },
  { time: 20, text: "I miss your touch on nights when I'm hollow" },
  { time: 26, text: "I know you crossed a bridge that I can't follow" },

  { time: 31.8, text: "Since the love that you left is all that I get" },
  { time: 35.3, text: "I want you to know" },

  { time: 37.3, text: "That if I can't be close to you" },
  { time: 42, text: "I'll settle for the ghost of you" },
  { time: 45, text: "I miss you more than life (more than life)" },
  { time: 49.8, text: "And if you can't be next to me" },
  { time: 54.5, text: "Your memory is ecstasy" },
  { time: 57.8, text: "I miss you more than life" },
  { time: 60.8, text: "I miss you more than life" },

   { time: 63.8, text: "Youngblood thinks there's always tomorrow" },
  { time: 69.8, text: "I need more time but time can't be borrowed" },
  { time: 75.8, text: "I'd leave it all behind if I could follow" },

  { time: 82, text: "Since the love that you left is all that I get" },
  { time: 85.5, text: "I want you to know" },

  { time: 87.3, text: "That if I can't be close to you" },
  { time: 92, text: "I'll settle for the ghost of you" },
  { time: 94.8, text: "I miss you more than life (yeah)" },
  { time: 100, text: "And if you can't be next to me" },
  { time: 104.7, text: "Your memory is ecstasy(oh)" },
  { time: 107.8, text: "I miss you more than life" },
  { time: 110.8, text: "I miss you more than life" },

  { time: 113.5, text: "🎵..." },

  { time: 115.5, text: "Whoa" },
  { time: 118, text: "Na, na-na" },
  { time: 121.5, text: "More than life" },
  { time: 124, text: "(Oh)" },

  { time: 124.8, text: "So if I can't be close to you" },
  { time: 129.5, text: "I'll settle for the ghost of you" },
  { time: 132.5, text: "I miss you more than life" },
  { time: 137, text: "And if you can't be next to me" },
  { time: 141.7, text: "Your memory is ecstasy" },
  { time: 145, text: "I miss you more than life" },
  { time: 148, text: "I miss you more than life" },
    ]
  },

  {
    title: "BMW",
    artist: "Bacause feat. Leslie",
    file: "BMW.mp3",
    cover: "BMW.jpg",
    lyrics: [
  { time: 16.89, text: "Mukhang tayo'y inabutan"},
  { time: 19.04, text: "Sa gitna ng daan"},
  { time: 20.68, text: "Ilagay muna ang gamit" },
  { time: 22.80, text: "Sa ating paahan (stop)" },
  { time: 25, text: "Wala nang araw at tayo ay nasa lilim" },
  { time: 28, text: "Sasabihin na ang lihim" },
  { time: 30, text: "Ramdam naman kung gaano kainit" },
  { time: 32.15, text: "Kanang kamay sa pagitan ng hita (ooh)" },
  { time: 34.90, text: "Habang isa ay nagmamaneho" },

  { time: 37, text: "'Di na kailangang biglang lumiko" },
  { time: 39, text: "Ating igilid nang nakapreno" },
  { time: 41.02, text: "'Di makapigil, gusto ko nang babain" },
  { time: 43.70, text: "Huli mang makarating" },
  { time: 45.05, text: "Bigyan ng magandang gamit" },
  { time: 46.50, text: "Tingnan aking salamin" },
  { time: 48, text: "Ikaw ang laman ng passenger seat, empty road" },

  { time: 51.53, text: "Four-seater para mayro'n tayong space sa likod" },
  { time: 55.03, text: "Ating sulitin ang hamog, magsisilbi na taklob" },
  { time: 59.33, text: "Ang hiling 'di malagot na masilip sa loob" },
  { time: 63.58, text: "Sa loob ng aking BMW sedan" },

  { time: 67.36, text: "Fuck, fuckin' sa 'king BMW sedan" },
  { time: 72.39, text: "Ang hiling 'di malagot na masilip sa loob" },
  { time: 75.84, text: "Sa loob ng aking BMW sedan-dan" },
  { time: 81.50, text: "Kahit anong puwesto, kung saan ka kuntento" },
  { time: 84.87, text: "'Yung titig ko diretso lang sa 'yo habang binabayo" },
  { time: 89.70, text: "Pwedeng mag-take it slow, basta walang hihinto" },
  { time: 93.48, text: "'Yung pawis hayaan mo lang tumulo, lookin' like a porn" },
  { time: 97.60, text: "Gusto ko lang ng ungol mo, uh-uh" },
  { time: 101.04, text: "Give me some more, more" },

  { time: 102.50, text: "Habang kulob, patayin mo na 'yung makina, yeah" },
  { time: 107.56, text: "Nang uminit pa, maakit ka, nah (dito ka lang sa akin)" },
  { time: 112.06, text: "Sige, magalit ka, fuck me harder" },
  { time: 113.52, text: "Ikaw ang laman ng passenger seat, empty road" },
  { time: 117, text: "Four-seater para mayro'n tayong space sa likod" },
  { time: 121.03, text: "Ating sulitin ang hamog, magsisilbi na taklob" },
  { time: 125.50, text: "Ang hiling, 'di malagot na masilip sa loob" },

  { time: 129.50, text: "Sa loob ng aking BMW sedan" },
  { time: 133.78, text: "Fuck, fuckin' sa 'king BMW sedan" },
  { time: 137.59, text: "Ang hiling, 'di malagot na masilip sa loob" },
  { time: 141.50, text: "Sa loob ng aking BMW sedan-dan (-dan)" },
    ]
  },

  {
    title: "Bundak Sa Letra",
    artist: "Nopetsallowed",
    file: "Bundak sa Letra.mp3",
    cover: "bundaksaletra.jpg",
    lyrics: [
      { time: 31.05, text: "Will be always be the same maskin asa pa nga place"},
  { time: 34.32, text: "Permi rang ga blaze no fuckin' matter what's the case"},

  { time: 37.27, text: "And we aint gonna goin' fake" },
  { time: 39.21, text: "Para lang sa sake nga maka earn og money and fame" },
  { time: 42.63, text: "Ky di naman gud dayun the same" },
  { time: 44.74, text: "Maong karon kasagaran daghan na kayng emcee nga lame" },
  { time: 47.94, text: "Og daghan na kaung ni-claim" },
  { time: 49.81, text: "Anad sailang pamati pero wa sukad ka step up sa game" },
  { time: 53.25, text: "Bitches og gay feeling hiphop (hooray)" },

  { time: 55.69, text: "Karon nakadongog mo unsay kick ass today" },
  { time: 58.34, text: "Cause I spit fast okay, my verse like crack cocaine" },
  { time: 61.07, text: "Og mas animal paning Saddam Hussein" },
  { time: 63.75, text: "Dughan ga hout mura nag ma bungkag" },
  { time: 66.49, text: "Kulang kag dugo kid kai ikaw nangluspad" },
  { time: 69.33, text: "Nakadungog sa bundak samong letra" },
  { time: 72.16, text: "Kami ang puntos nga mo yabo sa bangka" },

  { time: 74.48, text: "Dughan ga hout mura nag ma bungkag" },
  { time: 77.26, text: "Kulang kag dugo kid kai ikaw nangluspad" },
  { time: 80.07, text: "Nakadungog sa bundak samong letra" },
  { time: 82.60, text: "Kami ang puntos nga mo yabo sa bangka" },

  { time: 84.78, text: "Unsa man ilang istorya permaminti ming in-ani" },
  { time: 87.54, text: "Sukad sa pag dako maskin tuboan pa og algea" },
  { time: 90.30, text: "Monay ni bakat og sa inyong utok ni marka" },
  { time: 93.08, text: "Mga animal ni balikason bisag kinsa" },
  { time: 95.95, text: "Walai bikil walai kurat lalalarga" },
  { time: 98.33, text: "Kutob sa masigo ato na diring ikarga" },
  { time: 101.11, text: "Puro hinangal kana inyoang makat onan" },
  { time: 103.85, text: "Samong tipok posporog joint perming uban" },
  { time: 106.32, text: "Ang akong utok 'di daot palihog ko og check" },

  { time: 109.27, text: "Kanang humot nga nurse para manghigda mi sa deck" },
  { time: 111.82, text: "Monay nay kina iyang gitawag nila og dekalidad" },
  { time: 114.56, text: "Maskin taga baryo mura pd og laking syudad" },
  { time: 117.29, text: "The crazy mothafucker di mahimo nga ma disregard" },
  { time: 119.79, text: "Kini ang main event kamo ang mga undercard" },
  { time: 122.47, text: "Wala ang beat pero never nga mo kapos" },
  { time: 124.90, text: "Ato lng ibalik para kuros ni ilahos" },

  { time: 127.83, text: "Dughan ga hout mura nag ma bungkag" },
  { time: 130.51, text: "Kulang kag dugo kid kai ikaw nangluspad" },
  { time: 133.32, text: "Nakadungog sa bundak samong letra" },
  { time: 136.08, text: "Kami ang puntos nga mo yabo sa bangka" },
  { time: 138.41, text: "Dughan ga hout mura nag ma bungkag" },
  { time: 141.05, text: "Kulang kag dugo kid kai ikaw nangluspad" },
  { time: 143.85, text: "Nakadungog sa bundak samong letra" },

  { time: 146.56, text: "Kami ang puntos nga mo yabo sa bangka" },
  { time: 148.75, text: "Naay mga di ka angay" },
  { time: 150.79, text: "Sa amung style ug sa amoang dula 'di makasabay" },
  { time: 154.43, text: "Kai kami mga panuway" },
  { time: 156.12, text: "Nga ineg bundak sa beat mu rhyme ang otig kakay" },
  { time: 159.64, text: "Ug di na mulubad ni kai" },
  { time: 161.59, text: "Ang dugo sa iro sa amoa perming ga latay" },

  { time: 164.73, text: "Mga yawa ug piste ang gi sangpit" },
  { time: 167.71, text: "Maong bitch better kiss my hairy armpit" },
  { time: 170.82, text: "Karun kami na ang mag hari" },
  { time: 173.03, text: "Sa tanan nga emcee kami ang pinaka gahi" },
  { time: 175.89, text: "Ulo ug di na mutuo" },
  { time: 177.77, text: "Bisan pa imu ang isungag ni sa turo" },
  { time: 180.66, text: "Kai murag ni mitaas nang sungay" },
  { time: 183.19, text: "Naa pay amung matang puros mapungay" },

  { time: 186.03, text: "Maong bisag unsaon ang lagay pag ugay" },
  { time: 188.68, text: "'Di mi mubigay ug magpabilin nga tunay (tunay)" },
  { time: 191.86, text: "Dughan ga hout mura nag ma bungkag" },
  { time: 194.45, text: "Kulang kag dugo kid kai ikaw nangluspad" },
  { time: 197.24, text: "Nakadungog sa bundak samong letra" },
  { time: 200.05, text: "Kami ang puntos nga mo yabo sa bangka" },
  { time: 202.54, text: "Dughan ga hout mura nag ma bungkag" },
  { time: 205, text: "Kulang kag dugo kid kai ikaw nangluspad" },

  { time: 208.06, text: "Nakadungog sa bundak samong letra" },
  { time: 210.58, text: " Kami ang puntos nga mo yabo sa bangka" },
    ]
  },

  {
    title: "Beplop",
    artist: "Cookie$ feat. Fonzy",
    file: "Beplop.mp3",
    cover: "beplop.jpg",
    lyrics: [
      { time: 14.74, text: "Baby are you free"},
  { time: 16.42, text: "Show me what you sent me on your dms on ig"},
  { time: 19.82, text: "Ay na pag pa innocente cuz i know that you're a freak" },
  { time: 24, text: "Grabeh ka lami" },
  { time: 25.53, text: "You're my flavor of the week" },
  { time: 27.43, text: "And you know i love to eat" },
  { time: 29.78, text: "Beplop" },
  { time: 31.46, text: "Nindot ni e.sagol sa akong tortang talong" },
  { time: 34.92, text: "Mao ni ato panihapon" },

  { time: 36.88, text: "Grabeh ni ka strong" },
  { time: 38.22, text: "Hoy! ay nagud ka strong" },
  { time: 40.26, text: "Baby napa kos lahug" },
  { time: 42.00, text: "But I won't take too long." },
  { time: 44.37, text: "Mura kag nascar" },
  { time: 46.33, text: "Maau kaayo ka mu drive" },
  { time: 48.36, text: "Sa akong stick shift" },

  { time: 50.06, text: "Tara na sakay" },
  { time: 51.91, text: "We're going on a ride" },
  { time: 53.79, text: "Mangadto tag busay" },
  { time: 55.63, text: "Aysig pinamay" },

  { time: 57.22, text: "Pick upon takas balay." },
  { time: 59.37, text: "Mountain View" },
  { time: 60.92, text: "Overlook cebu" },
  { time: 62.83, text: "And I know you know it kung mag unsa ta didto" },
  { time: 66.44, text: "Way gunitay ug phone" },
  { time: 68.04, text: "Mag gunitay ta ug kamot" },
  { time: 69.89, text: "Imong buhok ky grabe ka humot" },
  { time: 71.59, text: "Sus mainlab jud kog samot." },
  { time: 73.59, text: "Sus nanga kog otanon" },

  { time: 75.26, text: "Baby kan on taka run" },
  { time: 77.16, text: "All organic no preservatives" },
  { time: 79.33, text: "Gikan nis carbon" },
  { time: 81.04, text: "Nindot kaayo kag kutis" },
  { time: 82.84, text: "Wow perlas na sabon" },
  { time: 84.62, text: "Sus naboang jud ko nimo" },
  { time: 86.47, text: "Nah unsaon ta ni run" },

  { time: 88.68, text: "Baby are you free" },
  { time: 90.40, text: "Show me what you sent me on your dms on ig" },
  { time: 93.54, text: "Ay na pag pa innocente cuz i know that you're a freak" },
  { time: 97.50, text: "Grabeh ka lami" },
  { time: 99.37, text: "You're my flavor of the week" },
  { time: 101.26, text: "And you know i love to eat" },
  { time: 103.77, text: "Beplop" },

  { time: 105.27, text: "Nindot ni e.sagol sa akong tortang talong" },
  { time: 108.83, text: "Mao ni ato panihapon" },
  { time: 110.70, text: "Grabeh ni ka strong" },
  { time: 112.33, text: "Hoy! ay nagud ka strong" },
  { time: 114.10, text: "Baby napa kos lahug" },
  { time: 115.92, text: "But I won't take too long." },
    ]
  },

  {
    title: "TMA",
    artist: "groundZERO Records",
    file: "TMA.mp3",
    cover: "tma.jpg",
    lyrics: [
    {time: 17, text: "Alam mo na sana ibahin "},
    { time: 20.8, text: "Panisin" },
  { time: 23, text: "Yeah" },

  { time: 28, text: "Alam mo na sana ibahin (Ibahin)" },
  { time: 30.6, text: "Mo 'ko sa tulad nya 'di kayang panisin (Panisin)" },
  { time: 33.1, text: "'Yoko sa tulad mo 'di kayang alisin (Alisin)" },
  { time: 35.4, text: "Mga sugat lumala na, wala ng gana sa'yo tumabi" },
  { time: 40, text: "Iba na naman ang kasama kagabi (Kagabi)" },
  { time: 43, text: "Oh, dun ka nga, 'wag ka sa 'kin tumabi Pussy 'di mapakali" },
  { time: 46.5, text: "Sa 'yong labi padampi, pagka' sa 'kin malandi" },

  { time: 50, text: "'Yun lang 'di mo kayang tanggapin" },
  { time: 53, text: "Sa tulad kong babae na kaya kang laruin" },
  { time: 55.8, text: "'Di ka makatulog sa gabi" },
  { time: 58, text: "Naalala mo kung pa'no dumikit ang mga labi" },
  { time: 61, text: "Isang gabi sa kwartong madilim" },
  { time: 63.8, text: "Late night tumatawag palihim" },
  { time: 66.5, text: "Just stop, ayoko nang gawin" },
  { time: 69.5, text: "This time 'di ka na sasagutin" },

  { time: 71.5, text: "'Wag mo nga 'kong aningin" },
  { time: 73., text: "'Lam mong mas matikas ako diyan at may dating" },
  { time: 75.8, text: "'Di ka rin naman na kikitain palihim" },
  { time: 78.8, text: "'Pag kasama mo 'ko, amat gusto sagarin" },

  { time: 83.5, text: "My bad, bakit ako na in-love?" },
  { time: 85.8, text: "We fuck buddies pero iba hinangad" },
  { time: 88.8, text: "We do our thang sagad-sagad" },
  { time: 91, text: "Binalagbag pagkatapos ng lahat" },
  { time: 94.3, text: "Daming nangyari, ako'y pinaasa" },
  { time: 97, text: "Magdamag na naglalaro sa kama" },
  { time: 99.8, text: "Sinusulit ang gabi hanggang umaga" },
  { time: 102.4, text: "Katawan mo lang ang aking pahinga" },

  { time: 105, text: "Ngunit bakit (Ngunit bakit)" }, 
  { time: 108, text: "Ang mga labi (Ang mga labi)" },
  { time: 111, text: "Got no feelings (Got no feelings)" },
  { time: 113.5, text: "Oh no, oh no" },
  { time: 116.3, text: "Ngunit bakit (Ngunit bakit)" },
  { time: 118.8, text: "Ang mga labi (Ang mga labi)" },
  { time: 121.8, text: "Got no feelings (Got no feelings)" },
  { time: 124.5, text: "'Oh no, oh no" },

  { time: 127.8, text: "'Yun lang 'di mo kayang tanggapin" },
  { time: 130, text: "Sa tulad kong babae na kaya kang laruin" },
  { time: 132.9, text: "'Di ka makatulog sa gabi" },
  { time: 135.8, text: "Naalala mo kung pa'no dumikit ang mga labi" },
  { time: 138.4, text: "Isang gabi sa kwartong madilim" },
  { time: 141.5, text: "Late night tumatawag palihim" },
  { time: 144, text: "Just stop, ayoko nang gawin" },
  { time: 146.7, text: "This time 'di ka na sasagutin" },

  {time: 150, text: "Alam mo na sana ibahin "},
  { time: 153.7, text: "Panisin" },
  { time: 155.4, text: "Yeah" },
    
  { time: 160.7, text: "Alam mo na sana ibahin (Ibahin)" },
  { time: 163.2, text: "Mo 'ko sa tulad nya 'di kayang panisin (Panisin)" },
  { time: 166, text: "'Yoko sa tulad mo 'di kayang alisin (Alisin)" },
  { time: 168.2, text: "Mga sugat lumala na, wala ng gana sa'yo tumabi" },
  { time: 172.8, text: "Iba na naman ang kasama kagabi (Kagabi)" },
  { time: 175.4, text: "Oh, dun ka nga, 'wag ka sa 'kin tumabi Pussy 'di mapakali" },
  { time: 179, text: "Sa 'yong labi padampi, pagka' sa 'kin malandi" },
    ]
  },

  {
    title: "Flatline",
    artist: "Justine Bieber",
    file: "Flatline.mp3",
    cover: "Flatline.png",
    lyrics: [
      { time: 2.8, text: "Lately you've been busy, wondering if you miss me" },
            { time: 6, text: "Why did you go against me? I just wanna know" },
            { time: 10.5, text: "How come you act so different? Talk to me, I'll listen" },
            { time: 14.7, text: "All the love I'm giving, don't act like you don't know" },
            { time: 18, text: "I was out there on the road, life out of control" },
            { time: 22, text: "She became a victim to my busy schedule" },
            { time: 26, text: "And I know that it's not fair, that don't mean that I don't care" },
            { time: 30, text: "This one's dedicated to the girl out there" },
            { time: 34, text: "Girl, you always catch me at the bad time" },
            { time: 38, text: "When I know you probably think it's a lie" },
            { time: 41.5, text: "I know I told you last time was the last time" },
            { time: 45, text: "How could you pull the plug and leave me flatline?" },
            { time: 49.8, text: "Flatline, flatline" },
            { time: 53, text: "How could you pull the plug and leave me flatline?" },
            { time: 57, text: "'Cause when I hit you, you don't even reply" },
            { time: 61, text: "How could you pull the plug and leave me flatline?" },
            { time: 65, text: "Not breathing, what is it I'm not seeing?" },
            { time: 69, text: "She said she's leaving, damn, I can't believe it" },
            { time: 73, text: "It's like my heart's bleeding knowing that you don't need me" },
            { time: 77, text: "Shut my heart down, now I don't know what I'ma do now" },
            { time: 81, text: "I was out there on the road, life out of control" },
            { time: 85, text: "She became a victim to my busy schedule" },
            { time: 89, text: "And I know that it's not fair, that don't mean that I don't care" },
            { time: 93, text: "This one's dedicated to the girl out there" },
            { time: 96.5, text: "Girl, you always catch me at the bad time" },
            { time: 100, text: "When I know you probably think it's a lie" },
            { time: 104, text: "I know I told you last time was the last time" },
            { time: 108, text: "How could you pull the plug and leave me flatline?" },
            { time: 112, text: "Flatline, flatline" },
            { time: 116, text: "How could you pull the plug and leave me flatline?" },
            { time: 120, text: "'Cause when I hit you, you don't even reply" },
            { time: 124, text: "How could you pull the plug and leave me flatline?" },
            { time: 128.5, text: "Girl, you always catch me at the bad time" },
            { time: 132, text: "Girl, you always catch me at the bad time" },
            { time: 136, text: "I know I told you last time was the last time" },
            { time: 140, text: "How could you pull the plug and leave me flatline?" },
            { time: 143, text: "Flatline, flatline" },
            { time: 160, text: "Girl, you always catch me at the bad time" },
            { time: 164.5, text: "When I know you probably think it's a lie" },
            { time: 167, text: "I know I told you last time was the last time" },
            { time: 171, text: "How could you pull the plug and leave me flatline?" },
            { time: 175, text: "Flatline, flatline" },
            { time: 179, text: "How could you pull the plug and leave me flatline?" },
            { time: 183, text: "'Cause when I hit you, you don't even reply" },
            { time: 187, text: "How could you pull the plug and leave me flatline?" }
    ]
  },

  {
    title: "Tilaw Ra",
    artist: "Soulthrll, JKLRD, Cookie$",
    file: "Tilawra.mp3",
    cover: "tilawra.jpg",
    lyrics: [
      {time: 0.29, text: "Gusto daw siyang magtuyok-tuyok sa city, CDO"},
    { time: 4.55, text: "Grabe, 'miga, pabiga pero imal kaayo" },
  { time: 8.29, text: "Hoy, 'miga" },

  { time: 10.37, text: "Hala ka" },
  { time: 12.28, text: "Hoy, 'miga" },
  { time: 14.28, text: "Hala ka" },
  { time: 15.30, text: "Ana siya, Di' ni gugma, tilaw-tilaw ra" },
  { time: 19.33, text: "Hala ka, di' ni gugma, tilaw-tilaw ra" },
  { time: 23.47, text: "Ana siya, Di' ni gugma, tilaw-tilaw ra" },
  { time: 27.26, text: "Hala ka, di' ni gugma, tilaw-tilaw ra" },

  { time: 30.46, text: "Ayy" },
  { time: 31.21, text: "'Hibaw ka nga love tika, yeah ('miga)" },
  { time: 33.34, text: "Tunay ni, boo, wa' tika atika (hala ka)" },
  { time: 35.32, text: "Gihunahuna tika, ooh ('miga)" },
  { time: 37.28, text: "Pag-amping baya kay wala ko dinha (hala ka)" },
  { time: 39.42, text: "Wala nay lain pa, nah (okay)" },
  { time: 41.35, text: "Wa' ni libog, sa imo ra mobiga" },
  { time: 43.48, text: "Pero og dili ka (Agay!)" },

  { time: 45.33, text: "Daghan ko mapuli, galinya taglima (yah, yah, yah, argh!)" },
  { time: 47.29, text: "Daghan ko mapili: mestiza, morena (tu-tu-tu-tu)" },
  { time: 49.25, text: "Yeah, I got the bag, my homies gabiba (brrt)" },
  { time: 51.26, text: "Got ice on my neck, murag naka-Shivas (ice)" },

  { time: 53.11, text: "Got my first patik, suko na si Mama, huh" },
  { time: 56.48, text: "Sorry, Ma" },
  { time: 56.87, text: "Nagsaba unta ka nga duwaduwa ra man diay (ayy, yah)" },
  { time: 60.89, text: "Nabait ra ning loko, pero wa' pa ko ni-retire" },
  { time: 63.31, text: "Ana siya, Di' ni gugma, tilaw-tilaw ra" },
  { time: 67.21, text: "Hala ka, di' ni gugma, tilaw-tilaw ra" },
  { time: 71.32, text: "Ana siya, Di' ni gugma, tilaw-tilaw ra" },
  { time: 75.40, text: "Hala ka, di' ni gugma, tilaw-tilaw ra" },
  { time: 78.80, text: "Di' ko kasabay kay sabay nimo ang barkada" },

  { time: 83.02, text: "Mag-ampo na lang ko na kailangan nimo'g kuyog" }, 
  { time: 86.93, text: "Magpadulong gyapon ko's wala, abi nako naa" },
  { time: 90.95, text: "Di' gani ko ganahan na ma-issue tang duha" },
  { time: 94.80, text: "Kabalo nako pinahipi imong birada" },
  { time: 98.81, text: "Di' gani ka mosaba sa lain about sa 'tong duha" },
  { time: 103.04, text: "Ana sila, di' daw ko dapat magduhaduha" },
  { time: 107, text: "Ana sila, di' daw ko dapat magduhaduha" },
  { time: 110.54, text: "Kay tilaw-tilaw ra" },

  { time: 111.32, text: "Ana siya, Di' ni gugma, tilaw-tilaw ra" },
  { time: 115.27, text: "Hala ka, di' ni gugma, tilaw-tilaw ra" },
  { time: 119.21, text: "'Ana siya, Di' ni gugma, tilaw-tilaw ra" },
  { time: 123.43, text: "Hala ka, di' ni gugma, tilaw-tilaw ra" },
  { time: 127.42, text: "Ana siya (Unsa man?)" },
  { time: 129.23, text: "Friends ra ta (woo, woo)" },
  { time: 131.31, text: "Pero hala ka, ni-chat siya'g kalit (hey)" },
  { time: 133.24, text: "Come to my crib, aylang pagdali (hey)" },

  {time: 135.08, text: "Don't tell your friends (no) "},
  { time: 137.11, text: "Ato-ato ra ni (ato-ato ra ni)" },
  { time: 138.99, text: "Let's play pretend (let's play pretend)" },
    
  { time: 141.18, text: "Duwaduwa ra ni, huh" },
  { time: 143.35, text: "Cardinal, imnan ta ni (oh)" },
  { time: 145.44, text: "Holding hands, aw, alams na ni (oh)" },
  { time: 147.29, text: "Nananghid ko, pre, una na 'mi (yah)" },
  { time: 149.34, text: "Buhat pa 'mi og ginadili" },
  { time: 151.01, text: "Aylag pada, free taste tang duha" },
  { time: 154.79, text: "Ayg paninuod kay tilaw-tilaw ra (yah, yah, yah)" },
  { time: 159.35, text: "Ana siya, Di' ni gugma, tilaw-tilaw ra (yeah)"},
  { time: 163.92, text: "-Ka, di' ni gugma, tilaw-tilaw ra (woo, woo, woo)" },
  { time: 167.42, text: "Ana siya, Di' ni gugma, tilaw-tilaw ra (yeah)" },
  { time: 171.84, text: "-Ka, di' ni gugma, tilaw-tilaw ra (yah)" },
    ]
  },

  {
    title: "City Girl",
    artist: "Unknown Artist",
    file: "Citygirl.mp3",
    cover: "citygirl.jpg",
    lyrics: [
      { time: 14.8, text: "Unang gabi niya ko nakasama pagngiti" },
  { time: 18.5, text: "Sabi niya madami ka'ng babae oy hindi ah" },
  { time: 22.3, text: "Kasi sa ngayon ikaw ang gusto kong makita" },
  { time: 26, text: "Habang merong alak saking baso'ng malamig ah" },

  { time: 29.4, text: "Masaya pero pano kung wala ko'ng kaya" },
  { time: 35.5, text: "Tulad ng kasama mo'ng iba" },
  { time: 39.4, text: "'Wag ka padin sana mawala" },

  { time: 44.7, text: "Yung larawan mo tumatakbo hanggang sa panaginip" },
  { time: 48.4, text: "Alaala na naglalaro sa malikot na isip" },
  { time: 52.3, text: "May ibang nasa harap na" },
  { time: 54, text: "Ba't ikaw ang madalas naaalala pag wasak na'ko" },
  { time: 57.8, text: "Pwede bang sakin ka nalang ma" },

  { time: 60, text: "Sana 'wag ka magsasawang maalala" },
  { time: 65.8, text: "Kung ano yung ating nagawa sa" },
  { time: 69.5, text: "Unang araw mo ko nakilala" },

  { time: 75, text: "Pag kasama ko si Hellmerry" },
  { time: 77, text: "May kasama siyang isang bestie" },
  { time: 78.8, text: "Madalas tatlo kapag ready" },
  { time: 80.8, text: "Yung iba sabog lahat sexy" },
  { time: 82.8, text: "Yung isa na mas matanda pa sakin pero may dala-dala'ng candy" },
  { time: 86.5, text: "Nung ikaw kasama ang safe nasabi ko'ng sakin ka nalang baby" },

  { time: 90.3, text: "Unang gabi niya 'ko nakasama pagngiti" },
  { time: 94, text: "Nasabi niya madami ka'ng babae oy hindi ah" },
  { time: 97.8, text: "Kasi sa ngayon ikaw ang gusto ko makita" },
  { time: 101.5, text: "Habang merong alak saking baso'ng malamig ah" },

  { time: 105, text: "Sa isip mo lagi ako'ng may iba" },
  { time: 106.8, text: "Sa mga gabi'ng ako lang mag isa" },
  { time: 108.7, text: "Habang hindi ko padin malimutan" },
  { time: 110.6, text: "Na mas masaya kapag katabi ka" },
  { time: 112.4, text: "Ano man'g mangyare't maraming gawain tumawag ka lang ako'y parating na" },
  { time: 116, text: "Mundo'ng magulo na to natatakasan ko lamang sa kada kasama kita" },

  { time: 120, text: "Dami nilang sinasabi" },
  { time: 121.8, text: "Pero mas maniwala ka saken" },
  { time: 123.8, text: "Kasi nga iba na ko sa dati" },
  { time: 125.5, text: "Nung ikaw na kasama ko lagi" },
  { time: 127.2, text: "O kailangan kita di ko kaya gawin to ng ako lang din kung sakali" },
  { time: 131, text: "Kahit nakakapagod na din pumapawi kapag kagat mo ko sa labi" },

  { time: 135.5, text: "Magulo nakaraan ko di masabi sa harap mo" },
  { time: 139, text: "Andyan ka na isang tawag lang sayo'ng kama nabilanggo" },
  { time: 143, text: "Medyo bago lang lahat sakin parang di ako sanay sa ganto" },
  { time: 146.7, text: "Kasi kahit parang kaibigan lang kita ikaw na yung mahal ko" },

  { time: 150.5, text: "Masaya pero pano kung wala ko'ng kaya" },
  { time: 156.7, text: "Tulad ng kasama mo'ng iba" },
  { time: 160, text: "Wag ka pa din sana mawala" },
  { time: 165.7, text: "Yung larawan mo tumatakbo hanggang sa panaginip" },
    ]
  }
];

// AUDIO PLAYER

const audio = document.getElementById("audio");

const $ = (id) => document.getElementById(id);

playbackSpeed.addEventListener("change", () => {
  audio.playbackRate = Number(playbackSpeed.value);
});

let currentIndex = 0;
let isShuffle = false;
let repeatMode = false;
let liked = false;

// FORMAT TIME

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${mins}:${secs}`;
}

// CREATE SONG CARDS

function makeCard(track, index) {
  const card = document.createElement("article");

  card.className = "track-card";

  card.innerHTML = `
    <img src="photos/${track.cover}" alt=""
      onerror="this.style.opacity='.2'">

    <h3></h3>
    <p></p>

    <button class="card-play" aria-label="Play">
      ▶
    </button>
  `;

  card.querySelector("h3").textContent = track.title;
  card.querySelector("p").textContent = track.artist;

  card.addEventListener("click", () => {
    loadTrack(index);
    playTrack();
    showPage("track");
  });

  return card;
}

// DISPLAY SONGS

function renderCards() {

  ["trackGrid", "searchResults", "libraryResults"]
    .forEach(id => {

      const container = $(id);

      if (container) {

        container.replaceChildren();

        tracks.forEach((track, i) => {
          container.appendChild(makeCard(track, i));
        });

      }

    });

  $("relatedTracks").replaceChildren();

  tracks.forEach((track, i) => {

    if (i === currentIndex) return;

    const item = document.createElement("div");

    item.className = "related-item";

    item.innerHTML = `
      <img src="photos/${track.cover}" alt="">
      <div>
        <strong></strong>
        <small></small>
      </div>
    `;

    item.querySelector("strong").textContent = track.title;
    item.querySelector("small").textContent = track.artist;

    item.addEventListener("click", () => {
      loadTrack(i);
      playTrack();
    });

    $("relatedTracks").appendChild(item);

  });

}

// DISPLAY TIMED LYRICS

function renderLyrics(track) {

  const box = $("lyricsBox");

  box.replaceChildren();

  if (!track.lyrics || !track.lyrics.length) {

    box.innerHTML = `
      <p class="empty-lyrics">
        No lyrics added yet.
      </p>
    `;

    return;
  }

  track.lyrics.forEach((line) => {

    const p = document.createElement("p");

    p.className = "lyric-line";

    p.dataset.time = Number(line.time) || 0;

    const time = document.createElement("span");

    time.className = "lyric-time";

    time.textContent = formatTime(Number(line.time) || 0);

    p.append(
      time,
      document.createTextNode(line.text)
    );

    box.appendChild(p);

  });

}

// LOAD SONG

function loadTrack(index) {

  currentIndex = (index + tracks.length) % tracks.length;

  const track = tracks[currentIndex];

  audio.src = `music/${track.file}`;

  $("detailCover").src = `photos/${track.cover}`;

  $("detailTitle").textContent = track.title;

  $("detailArtist").textContent = track.artist;

  // ARTIST PROFILE

  $("artistName").textContent = track.artist;

  $("artistBio").textContent = track.artistBio;

  $("artistImage").src =
    `photos/${track.artistImage || track.cover}`;

  $("artistImage").onerror = () => {
    $("artistImage").src = `photos/${track.cover}`;
  };

  // BOTTOM PLAYER

  $("playerCover").src = `photos/${track.cover}`;

  $("playerTitle").textContent = track.title;

  $("playerArtist").textContent = track.artist;

  $("progressBar").value = 0;

  $("currentTime").textContent = "0:00";

  $("duration").textContent = "0:00";

  renderLyrics(track);

  renderCards();

}

// PLAY SONG

function playTrack() {

  audio.play()
    .then(updatePlayButtons)
    .catch(() => {
      updatePlayButtons();
    });

}

// UPDATE PLAY BUTTON

function updatePlayButtons() {

  const playing = !audio.paused;

  $("playButton").textContent =
    playing ? "Ⅱ" : "▶";

  $("detailPlay").textContent =
    playing ? "Ⅱ Pause" : "▶ Play";

}

// PLAY / PAUSE

function togglePlay() {

  if (audio.paused) {

    playTrack();

  } else {

    audio.pause();

    updatePlayButtons();

  }

}

// NEXT SONG

function nextTrack() {

  let next = currentIndex;

  if (isShuffle && tracks.length > 1) {

    while (next === currentIndex) {
      next = Math.floor(Math.random() * tracks.length);
    }

  } else {

    next = (currentIndex + 1) % tracks.length;

  }

  loadTrack(next);

  playTrack();

}

// PREVIOUS SONG

function previousTrack() {

  if (audio.currentTime > 3) {

    audio.currentTime = 0;

    return;

  }

  loadTrack(currentIndex - 1);

  playTrack();

}

// NAVIGATION

function showPage(page) {

  document.querySelectorAll(".page")
    .forEach(p => p.classList.remove("active-page"));

  const target = page === "track"
    ? $("trackPage")
    : $(`${page}Page`);

  if (target) {
    target.classList.add("active-page");
  }

  document.querySelectorAll("[data-page]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === page
      );

    });

  if (page === "search") {
    $("searchInput").focus();
  }

}

// NAVIGATION EVENTS

document.querySelectorAll("[data-page]")
  .forEach(button => {

    button.addEventListener("click", () => {
      showPage(button.dataset.page);
    });

  });

// PLAYER BUTTON EVENTS

$("playButton").addEventListener("click", togglePlay);

$("detailPlay").addEventListener("click", togglePlay);

$("nextButton").addEventListener("click", nextTrack);

$("previousButton").addEventListener("click", previousTrack);

// SHUFFLE

$("shuffleButton").addEventListener("click", () => {

  isShuffle = !isShuffle;

  $("shuffleButton")
    .classList.toggle("selected", isShuffle);

});

// REPEAT

$("repeatButton").addEventListener("click", () => {

  repeatMode = !repeatMode;

  $("repeatButton")
    .classList.toggle("selected", repeatMode);

});

// LIKE BUTTON

$("likeButton").addEventListener("click", () => {

  liked = !liked;

  $("likeButton").textContent =
    liked ? "♥" : "♡";

  $("likeButton")
    .classList.toggle("selected", liked);

});

// VOLUME CONTROL

$("volumeBar").addEventListener("input", e => {

  audio.volume = Number(e.target.value);

});

// PROGRESS BAR

$("progressBar").addEventListener("input", e => {

  if (Number.isFinite(audio.duration)) {

    audio.currentTime =
      (Number(e.target.value) / 100) * audio.duration;

  }

});

// AUDIO DURATION

audio.addEventListener("loadedmetadata", () => {

  $("duration").textContent =
    formatTime(audio.duration);

});

// LIVE LYRICS SYNCHRONIZATION

audio.addEventListener("timeupdate", () => {

  const duration = audio.duration || 0;

  $("currentTime").textContent =
    formatTime(audio.currentTime);

  $("duration").textContent =
    formatTime(duration);

  $("progressBar").value = duration
    ? (audio.currentTime / duration) * 100
    : 0;

  const lines = [
    ...$("lyricsBox").querySelectorAll(".lyric-line")
  ];

  let active = -1;

  lines.forEach((line, i) => {

    if (audio.currentTime >= Number(line.dataset.time)) {
      active = i;
    }

  });

  lines.forEach((line, i) => {

    line.classList.toggle("active", i === active);

  });

  if (active >= 0) {

    lines[active].scrollIntoView({
      block: "nearest",
      behavior: "smooth"
    });

  }

});

// WHEN SONG ENDS

audio.addEventListener("ended", () => {

  if (repeatMode) {

    audio.currentTime = 0;

    playTrack();

  } else {

    nextTrack();

  }

});

// SEARCH FILTER

$("searchInput").addEventListener("input", e => {

  const query = e.target.value
    .toLowerCase()
    .trim();

  const results = tracks.filter(track =>
    `${track.title} ${track.artist}`
      .toLowerCase()
      .includes(query)
  );

  $("searchResults").replaceChildren();

  results.forEach(track => {

    $("searchResults").appendChild(
      makeCard(track, tracks.indexOf(track))
    );

  });

});

// INITIAL SETUP

audio.volume = 0.8;

renderCards();

loadTrack(0);
