const mathCards = [
  {
    deck_id: 1,
    front: 'What is the sum of 5 and 3?',
    back: '8',
    is_queued: true,
  },
  {
    deck_id: 1,
    front: 'What is the product of 9 and 2?',
    back: '18',
    is_queued: false,
  },
  {
    deck_id: 1,
    front: 'What is the square root of 16?',
    back: '4',
    is_queued: true,
  },
  {
    deck_id: 1,
    front: 'What is the value of pi (to two decimal places)?',
    back: '3.14',
    is_queued: false,
  },
  {
    deck_id: 1,
    front: 'What is the area of a rectangle with length 6 and width 4?',
    back: '24',
    is_queued: true,
  },
  {
    deck_id: 1,
    front: 'What is the slope of the line passing through (2, 5) and (4, 9)?',
    back: '2',
    is_queued: false,
  },
  {
    deck_id: 1,
    front:
      'What is the equation of the line passing through (1, -1) and (5, 3)?',
    back: 'y = 2x - 7',
    is_queued: true,
  },
  {
    deck_id: 1,
    front: 'What is the value of e^0?',
    back: '1',
    is_queued: false,
  },
  {
    deck_id: 1,
    front: 'What is the derivative of sin(x)?',
    back: 'cos(x)',
    is_queued: true,
  },
  {
    deck_id: 1,
    front: 'What is the value of log base 10 of 100?',
    back: '2',
    is_queued: false,
  },
];

const scienceCards = [
  {
    deck_id: 2,
    front: 'What is the smallest planet in our solar system?',
    back: 'Mercury',
    is_queued: true,
  },
  {
    deck_id: 2,
    front: 'What is the name of the force that opposes motion?',
    back: 'Friction',
    is_queued: false,
  },
  {
    deck_id: 2,
    front: 'What is the process by which plants make their own food?',
    back: 'Photosynthesis',
    is_queued: true,
  },
  {
    deck_id: 2,
    front: 'What is the basic unit of life?',
    back: 'Cell',
    is_queued: false,
  },
  {
    deck_id: 2,
    front:
      'What is the name of the layer of the Earth between the crust and the core?',
    back: 'Mantle',
    is_queued: true,
  },
  {
    deck_id: 2,
    front: 'What is the name of the process by which liquids turn into gases?',
    back: 'Evaporation',
    is_queued: false,
  },
  {
    deck_id: 2,
    front:
      'What is the name of the instrument used to measure atmospheric pressure?',
    back: 'Barometer',
    is_queued: true,
  },
  {
    deck_id: 2,
    front: 'What is the name of the type of rock that forms from cooled lava?',
    back: 'Igneous',
    is_queued: false,
  },
  {
    deck_id: 2,
    front:
      "What is the name of the gas that makes up about 78% of the Earth's atmosphere?",
    back: 'Nitrogen',
    is_queued: true,
  },
  {
    deck_id: 2,
    front:
      'What is the name of the force that holds atoms together in a molecule?',
    back: 'Chemical bond',
    is_queued: false,
  },
];

const englishCards = [
  {
    deck_id: 3,
    front: "What is the difference between 'its' and 'it's'?",
    back: "'Its' is possessive while 'it's' is a contraction of 'it is'.",
    is_queued: true,
  },
  {
    deck_id: 3,
    front: 'What is a simile?',
    back: "A figure of speech that compares one thing with another thing of a different kind, using 'like' or 'as'.",
    is_queued: false,
  },
  {
    deck_id: 3,
    front: 'What is a metaphor?',
    back: 'A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.',
    is_queued: true,
  },
  {
    deck_id: 3,
    front: "What is the definition of the word 'aberration'?",
    back: 'A departure from what is normal, usual, or expected, typically one that is unwelcome.',
    is_queued: false,
  },
  {
    deck_id: 3,
    front: "What is the difference between 'further' and 'farther'?",
    back: "'Farther' refers to physical distance while 'further' refers to a degree or extent.",
    is_queued: true,
  },
  {
    deck_id: 3,
    front: "What is the definition of the word 'eloquent'?",
    back: 'Fluent or persuasive in speaking or writing.',
    is_queued: false,
  },
  {
    deck_id: 3,
    front: "What is the difference between 'then' and 'than'?",
    back: "'Than' is used for comparison while 'then' is used to indicate time or sequence.",
    is_queued: true,
  },
  {
    deck_id: 3,
    front: 'What is a palindrome?',
    back: 'A word, phrase, number, or other sequence of characters that reads the same forward and backward.',
    is_queued: false,
  },
  {
    deck_id: 3,
    front: "What is the definition of the word 'vindicate'?",
    back: 'Clear (someone) of blame or suspicion.',
    is_queued: true,
  },
  {
    deck_id: 3,
    front: "What is the difference between 'affect' and 'effect'?",
    back: "'Affect' is a verb meaning to influence while 'effect' is a noun meaning a result or consequence.",
    is_queued: false,
  },
];

const historyCards = [
  {
    deck_id: 4,
    front: 'Who was the first President of the United States?',
    back: 'George Washington',
    is_queued: true,
  },
  {
    deck_id: 4,
    front: 'In what year did World War II end?',
    back: '1945',
    is_queued: false,
  },
  {
    deck_id: 4,
    front: 'What was the main cause of the French Revolution?',
    back: 'Social inequality and financial crisis',
    is_queued: true,
  },
  {
    deck_id: 4,
    front: 'What was the name of the first civilization in Mesopotamia?',
    back: 'Sumer',
    is_queued: false,
  },
  {
    deck_id: 4,
    front: "Who wrote 'The Communist Manifesto'?",
    back: 'Karl Marx and Friedrich Engels',
    is_queued: true,
  },
  {
    deck_id: 4,
    front: 'Who was the first European explorer to reach India by sea?',
    back: 'Vasco da Gama',
    is_queued: false,
  },
  {
    deck_id: 4,
    front:
      'What was the name of the document that declared the independence of the United States?',
    back: 'Declaration of Independence',
    is_queued: true,
  },
  {
    deck_id: 4,
    front: 'Who was the leader of the Soviet Union during World War II?',
    back: 'Joseph Stalin',
    is_queued: false,
  },
  {
    deck_id: 4,
    front: 'What was the name of the ancient Egyptian writing system?',
    back: 'Hieroglyphics',
    is_queued: true,
  },
  {
    deck_id: 4,
    front:
      'What was the name of the first permanent English settlement in North America?',
    back: 'Jamestown',
    is_queued: false,
  },
];

const geographyCards = [
  {
    deck_id: 5,
    front: 'What is the capital of France?',
    back: 'Paris',
    is_queued: true,
  },
  {
    deck_id: 5,
    front: 'What is the tallest mountain in the world?',
    back: 'Mount Everest',
    is_queued: false,
  },
  {
    deck_id: 5,
    front: 'What is the longest river in Africa?',
    back: 'Nile River',
    is_queued: true,
  },
  {
    deck_id: 5,
    front: 'What is the largest ocean in the world?',
    back: 'Pacific Ocean',
    is_queued: false,
  },
  {
    deck_id: 5,
    front: 'What is the largest country by area?',
    back: 'Russia',
    is_queued: true,
  },
  {
    deck_id: 5,
    front: 'What is the most populated country in the world?',
    back: 'China',
    is_queued: false,
  },
  {
    deck_id: 5,
    front: 'What is the highest waterfall in the world?',
    back: 'Angel Falls',
    is_queued: true,
  },
  {
    deck_id: 5,
    front: 'What is the driest desert in the world?',
    back: 'Atacama Desert',
    is_queued: false,
  },
  {
    deck_id: 5,
    front: 'What is the largest lake in Africa?',
    back: 'Lake Victoria',
    is_queued: true,
  },
  {
    deck_id: 5,
    front: 'What is the smallest country in the world?',
    back: 'Vatican City',
    is_queued: false,
  },
  {
    deck_id: 5,
    front: 'What is the most populous city in the world?',
    back: 'Tokyo',
    is_queued: true,
  },
  {
    deck_id: 5,
    front: 'What is the deepest point in the ocean?',
    back: 'Challenger Deep',
    is_queued: false,
  },
  {
    deck_id: 5,
    front: 'What is the largest island in the world?',
    back: 'Greenland',
    is_queued: true,
  },
  {
    deck_id: 5,
    front: 'What is the longest border between two countries?',
    back: 'USA-Canada',
    is_queued: false,
  },
];

const artCards = [
  {
    deck_id: 6,
    front: 'Who painted the Mona Lisa?',
    back: 'Leonardo da Vinci',
    is_queued: true,
  },
  {
    deck_id: 6,
    front:
      'What art movement is known for its use of bright colors and bold brushstrokes?',
    back: 'Impressionism',
    is_queued: false,
  },
  {
    deck_id: 6,
    front: 'Which artist created the sculpture David?',
    back: 'Michelangelo',
    is_queued: true,
  },
  {
    deck_id: 6,
    front: 'What is the term for the Japanese art of paper folding?',
    back: 'Origami',
    is_queued: false,
  },
  {
    deck_id: 6,
    front:
      'What famous muralist painted a series of murals at the Detroit Institute of Arts?',
    back: 'Diego Rivera',
    is_queued: true,
  },
  {
    deck_id: 6,
    front: 'What is the technique of using dots to create an image called?',
    back: 'Pointillism',
    is_queued: false,
  },
  {
    deck_id: 6,
    front: 'What is the term for the Renaissance period in Germany?',
    back: 'Northern Renaissance',
    is_queued: true,
  },
  {
    deck_id: 6,
    front: 'Who is the artist famous for painting The Starry Night?',
    back: 'Vincent van Gogh',
    is_queued: false,
  },
  {
    deck_id: 6,
    front:
      'Which art movement is known for its use of geometric shapes and primary colors?',
    back: 'De Stijl',
    is_queued: true,
  },
  {
    deck_id: 6,
    front:
      'What is the term for a type of printmaking where the artist carves into a block of wood or linoleum?',
    back: 'Woodcut',
    is_queued: false,
  },
];

const musicCards = [
  {
    deck_id: 7,
    front: 'Who is the lead singer of the band Queen?',
    back: 'Freddie Mercury',
    is_queued: true,
  },
  {
    deck_id: 7,
    front: 'Which rock band has sold the most albums of all time?',
    back: 'The Beatles',
    is_queued: false,
  },
  {
    deck_id: 7,
    front: 'Which famous jazz musician played the trumpet?',
    back: 'Louis Armstrong',
    is_queued: true,
  },
  {
    deck_id: 7,
    front:
      'What is the name of the famous music festival that takes place in Tennessee every year?',
    back: 'Bonaroo',
    is_queued: false,
  },
  {
    deck_id: 7,
    front: 'What famous music genre originated in New Orleans?',
    back: 'Jazz',
    is_queued: true,
  },
  {
    deck_id: 7,
    front: "Who is the 'King of Pop'?",
    back: 'Michael Jackson',
    is_queued: false,
  },
  {
    deck_id: 7,
    front: "What famous rock band wrote the song 'Stairway to Heaven'?",
    back: 'Led Zeppelin',
    is_queued: true,
  },
  {
    deck_id: 7,
    front:
      'What is the name of the famous music festival that takes place in Indio, California every year?',
    back: 'Coachella',
    is_queued: false,
  },
  {
    deck_id: 7,
    front: "What famous 70s band sang 'Bohemian Rhapsody'?",
    back: 'Queen',
    is_queued: true,
  },
  {
    deck_id: 7,
    front:
      'Which famous guitarist played in the bands Cream and the Yardbirds?',
    back: 'Eric Clapton',
    is_queued: false,
  },
];

const physEdCards = [
  {
    deck_id: 8,
    front: 'What is the recommended amount of exercise per day for adults?',
    back: 'At least 30 minutes of moderate-intensity exercise',
    is_queued: true,
  },
  {
    deck_id: 8,
    front: 'What is the recommended amount of exercise per day for children?',
    back: 'At least 60 minutes of physical activity',
    is_queued: false,
  },
  {
    deck_id: 8,
    front: 'What is the target heart rate zone for aerobic exercise?',
    back: '60-80% of your maximum heart rate',
    is_queued: true,
  },
  {
    deck_id: 8,
    front: 'What is the FITT principle for exercise?',
    back: 'Frequency, Intensity, Time, Type',
    is_queued: false,
  },
  {
    deck_id: 8,
    front: 'What are some benefits of regular exercise?',
    back: 'Improved cardiovascular health, increased strength and endurance, weight management',
    is_queued: true,
  },
  {
    deck_id: 8,
    front: 'What are some examples of resistance exercises?',
    back: 'Push-ups, pull-ups, squats, lunges',
    is_queued: false,
  },
  {
    deck_id: 8,
    front: 'What is the recommended amount of stretching per day?',
    back: 'At least 10-15 minutes',
    is_queued: true,
  },
  {
    deck_id: 8,
    front: 'What is the importance of warm-up and cool-down exercises?',
    back: 'To prevent injury and improve performance',
    is_queued: false,
  },
  {
    deck_id: 8,
    front: 'What are some benefits of regular stretching?',
    back: 'Increased flexibility, reduced muscle soreness and tension, improved range of motion',
    is_queued: true,
  },
  {
    deck_id: 8,
    front:
      'What is the recommended amount of rest between sets of strength training exercises?',
    back: '1-2 minutes',
    is_queued: false,
  },
];

const compSciCards = [
  {
    deck_id: 9,
    front: 'What is the difference between a compiler and an interpreter?',
    back: 'A compiler takes the entire program and converts it into object code, while an interpreter converts the program one line at a time.',
    is_queued: false,
  },
  {
    deck_id: 9,
    front: 'What is a loop?',
    back: 'A loop is a sequence of instructions that is continually repeated until a certain condition is reached.',
    is_queued: true,
  },
  {
    deck_id: 9,
    front: 'What is the purpose of a function?',
    back: 'A function is a block of code that performs a specific task and can be reused whenever necessary.',
    is_queued: true,
  },
  {
    deck_id: 9,
    front: 'What is object-oriented programming?',
    back: 'Object-oriented programming is a programming paradigm that uses objects to represent and manipulate data.',
    is_queued: false,
  },
  {
    deck_id: 9,
    front: 'What is a data structure?',
    back: 'A data structure is a way of organizing and storing data in a computer so that it can be accessed and used efficiently.',
    is_queued: false,
  },
  {
    deck_id: 9,
    front: 'What is recursion?',
    back: 'Recursion is a programming technique in which a function calls itself repeatedly until a certain condition is met.',
    is_queued: true,
  },
  {
    deck_id: 9,
    front: 'What is a linked list?',
    back: 'A linked list is a data structure that consists of a sequence of nodes, where each node contains a reference to the next node in the sequence.',
    is_queued: false,
  },
  {
    deck_id: 9,
    front: 'What is an algorithm?',
    back: 'An algorithm is a set of instructions for solving a problem or accomplishing a task.',
    is_queued: true,
  },
  {
    deck_id: 9,
    front: 'What is a variable?',
    back: 'A variable is a container for a value, which can be changed and manipulated by a program.',
    is_queued: false,
  },
  {
    deck_id: 9,
    front: 'What is a data type?',
    back: 'A data type is a classification of data based on the type of value it represents.',
    is_queued: true,
  },
];

const biologyCards = [
  {
    deck_id: 10,
    front: 'What is the process by which plants convert sunlight into energy?',
    back: 'Photosynthesis',
    is_queued: true,
  },
  {
    deck_id: 10,
    front: 'What is the smallest unit of life?',
    back: 'Cell',
    is_queued: false,
  },
  {
    deck_id: 10,
    front:
      'What is the basic structural and functional unit of the nervous system?',
    back: 'Neuron',
    is_queued: true,
  },
  {
    deck_id: 10,
    front:
      'What is the name of the hormone that is responsible for the fight or flight response?',
    back: 'Adrenaline',
    is_queued: false,
  },
  {
    deck_id: 10,
    front:
      'What is the process by which cells divide to produce two identical daughter cells?',
    back: 'Mitosis',
    is_queued: true,
  },
  {
    deck_id: 10,
    front: "What is the term for the loss of water through a plant's leaves?",
    back: 'Transpiration',
    is_queued: false,
  },
  {
    deck_id: 10,
    front:
      'What is the name of the protein that forms the structure of hair and nails?',
    back: 'Keratin',
    is_queued: true,
  },
  {
    deck_id: 10,
    front:
      'What is the name of the cell organelle that is responsible for breaking down cellular waste?',
    back: 'Lysosome',
    is_queued: false,
  },
  {
    deck_id: 10,
    front: 'What is the name of the process by which sperm cells are produced?',
    back: 'Spermatogenesis',
    is_queued: true,
  },
  {
    deck_id: 10,
    front: 'What is the name of the pigment that gives human skin its color?',
    back: 'Melanin',
    is_queued: false,
  },
];

module.exports = [
  ...mathCards,
  ...scienceCards,
  ...englishCards,
  ...historyCards,
  ...geographyCards,
  ...artCards,
  ...musicCards,
  ...physEdCards,
  ...compSciCards,
  ...biologyCards,
];
