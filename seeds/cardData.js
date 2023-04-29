const mathCards = [
  {
    deck_id: 1,
    front: 'What is the sum of 5 and 3?',
    back: '8',
  },
  {
    deck_id: 1,
    front: 'What is the product of 9 and 2?',
    back: '18',
  },
  {
    deck_id: 1,
    front: 'What is the square root of 16?',
    back: '4',
  },
  {
    deck_id: 1,
    front: 'What is the value of pi (to two decimal places)?',
    back: '3.14',
  },
  {
    deck_id: 1,
    front: 'What is the area of a rectangle with length 6 and width 4?',
    back: '24',
  },
  {
    deck_id: 1,
    front: 'What is the slope of the line passing through (2, 5) and (4, 9)?',
    back: '2',
  },
  {
    deck_id: 1,
    front:
      'What is the equation of the line passing through (1, -1) and (5, 3)?',
    back: 'y = 2x - 7',
  },
  {
    deck_id: 1,
    front: 'What is the value of e^0?',
    back: '1',
  },
  {
    deck_id: 1,
    front: 'What is the derivative of sin(x)?',
    back: 'cos(x)',
  },
  {
    deck_id: 1,
    front: 'What is the value of log base 10 of 100?',
    back: '2',
  },
];

const scienceCards = [
  {
    deck_id: 2,
    front: 'What is the smallest planet in our solar system?',
    back: 'Mercury',
  },
  {
    deck_id: 2,
    front: 'What is the name of the force that opposes motion?',
    back: 'Friction',
  },
  {
    deck_id: 2,
    front: 'What is the process by which plants make their own food?',
    back: 'Photosynthesis',
  },
  {
    deck_id: 2,
    front: 'What is the basic unit of life?',
    back: 'Cell',
  },
  {
    deck_id: 2,
    front:
      'What is the name of the layer of the Earth between the crust and the core?',
    back: 'Mantle',
  },
  {
    deck_id: 2,
    front: 'What is the name of the process by which liquids turn into gases?',
    back: 'Evaporation',
  },
  {
    deck_id: 2,
    front:
      'What is the name of the instrument used to measure atmospheric pressure?',
    back: 'Barometer',
  },
  {
    deck_id: 2,
    front: 'What is the name of the type of rock that forms from cooled lava?',
    back: 'Igneous',
  },
  {
    deck_id: 2,
    front:
      "What is the name of the gas that makes up about 78% of the Earth's atmosphere?",
    back: 'Nitrogen',
  },
  {
    deck_id: 2,
    front:
      'What is the name of the force that holds atoms together in a molecule?',
    back: 'Chemical bond',
  },
];

const englishCards = [
  {
    deck_id: 3,
    front: "What is the difference between 'its' and 'it's'?",
    back: "'Its' is possessive while 'it's' is a contraction of 'it is'.",
  },
  {
    deck_id: 3,
    front: 'What is a simile?',
    back: "A figure of speech that compares one thing with another thing of a different kind, using 'like' or 'as'.",
  },
  {
    deck_id: 3,
    front: 'What is a metaphor?',
    back: 'A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.',
  },
  {
    deck_id: 3,
    front: "What is the definition of the word 'aberration'?",
    back: 'A departure from what is normal, usual, or expected, typically one that is unwelcome.',
  },
  {
    deck_id: 3,
    front: "What is the difference between 'further' and 'farther'?",
    back: "'Farther' refers to physical distance while 'further' refers to a degree or extent.",
  },
  {
    deck_id: 3,
    front: "What is the definition of the word 'eloquent'?",
    back: 'Fluent or persuasive in speaking or writing.',
  },
  {
    deck_id: 3,
    front: "What is the difference between 'then' and 'than'?",
    back: "'Than' is used for comparison while 'then' is used to indicate time or sequence.",
  },
  {
    deck_id: 3,
    front: 'What is a palindrome?',
    back: 'A word, phrase, number, or other sequence of characters that reads the same forward and backward.',
  },
  {
    deck_id: 3,
    front: "What is the definition of the word 'vindicate'?",
    back: 'Clear (someone) of blame or suspicion.',
  },
  {
    deck_id: 3,
    front: "What is the difference between 'affect' and 'effect'?",
    back: "'Affect' is a verb meaning to influence while 'effect' is a noun meaning a result or consequence.",
  },
];

const historyCards = [
  {
    deck_id: 4,
    front: 'Who was the first President of the United States?',
    back: 'George Washington',
  },
  {
    deck_id: 4,
    front: 'In what year did World War II end?',
    back: '1945',
  },
  {
    deck_id: 4,
    front: 'What was the main cause of the French Revolution?',
    back: 'Social inequality and financial crisis',
  },
  {
    deck_id: 4,
    front: 'What was the name of the first civilization in Mesopotamia?',
    back: 'Sumer',
  },
  {
    deck_id: 4,
    front: "Who wrote 'The Communist Manifesto'?",
    back: 'Karl Marx and Friedrich Engels',
  },
  {
    deck_id: 4,
    front: 'Who was the first European explorer to reach India by sea?',
    back: 'Vasco da Gama',
  },
  {
    deck_id: 4,
    front:
      'What was the name of the document that declared the independence of the United States?',
    back: 'Declaration of Independence',
  },
  {
    deck_id: 4,
    front: 'Who was the leader of the Soviet Union during World War II?',
    back: 'Joseph Stalin',
  },
  {
    deck_id: 4,
    front: 'What was the name of the ancient Egyptian writing system?',
    back: 'Hieroglyphics',
  },
  {
    deck_id: 4,
    front:
      'What was the name of the first permanent English settlement in North America?',
    back: 'Jamestown',
  },
];

const geographyCards = [
  {
    deck_id: 5,
    front: 'What is the capital of France?',
    back: 'Paris',
  },
  {
    deck_id: 5,
    front: 'What is the tallest mountain in the world?',
    back: 'Mount Everest',
  },
  {
    deck_id: 5,
    front: 'What is the longest river in Africa?',
    back: 'Nile River',
  },
  {
    deck_id: 5,
    front: 'What is the largest ocean in the world?',
    back: 'Pacific Ocean',
  },
  {
    deck_id: 5,
    front: 'What is the largest country by area?',
    back: 'Russia',
  },
  {
    deck_id: 5,
    front: 'What is the most populated country in the world?',
    back: 'China',
  },
  {
    deck_id: 5,
    front: 'What is the highest waterfall in the world?',
    back: 'Angel Falls',
  },
  {
    deck_id: 5,
    front: 'What is the driest desert in the world?',
    back: 'Atacama Desert',
  },
  {
    deck_id: 5,
    front: 'What is the largest lake in Africa?',
    back: 'Lake Victoria',
  },
  {
    deck_id: 5,
    front: 'What is the smallest country in the world?',
    back: 'Vatican City',
  },
  {
    deck_id: 5,
    front: 'What is the most populous city in the world?',
    back: 'Tokyo',
  },
  {
    deck_id: 5,
    front: 'What is the deepest point in the ocean?',
    back: 'Challenger Deep',
  },
  {
    deck_id: 5,
    front: 'What is the largest island in the world?',
    back: 'Greenland',
  },
  {
    deck_id: 5,
    front: 'What is the longest border between two countries?',
    back: 'USA-Canada',
  },
];

const artCards = [
  {
    deck_id: 6,
    front: 'Who painted the Mona Lisa?',
    back: 'Leonardo da Vinci',
  },
  {
    deck_id: 6,
    front:
      'What art movement is known for its use of bright colors and bold brushstrokes?',
    back: 'Impressionism',
  },
  {
    deck_id: 6,
    front: 'Which artist created the sculpture David?',
    back: 'Michelangelo',
  },
  {
    deck_id: 6,
    front: 'What is the term for the Japanese art of paper folding?',
    back: 'Origami',
  },
  {
    deck_id: 6,
    front:
      'What famous muralist painted a series of murals at the Detroit Institute of Arts?',
    back: 'Diego Rivera',
  },
  {
    deck_id: 6,
    front: 'What is the technique of using dots to create an image called?',
    back: 'Pointillism',
  },
  {
    deck_id: 6,
    front: 'What is the term for the Renaissance period in Germany?',
    back: 'Northern Renaissance',
  },
  {
    deck_id: 6,
    front: 'Who is the artist famous for painting The Starry Night?',
    back: 'Vincent van Gogh',
  },
  {
    deck_id: 6,
    front:
      'Which art movement is known for its use of geometric shapes and primary colors?',
    back: 'De Stijl',
  },
  {
    deck_id: 6,
    front:
      'What is the term for a type of printmaking where the artist carves into a block of wood or linoleum?',
    back: 'Woodcut',
  },
];

const musicCards = [
  {
    deck_id: 7,
    front: 'Who is the lead singer of the band Queen?',
    back: 'Freddie Mercury',
  },
  {
    deck_id: 7,
    front: 'Which rock band has sold the most albums of all time?',
    back: 'The Beatles',
  },
  {
    deck_id: 7,
    front: 'Which famous jazz musician played the trumpet?',
    back: 'Louis Armstrong',
  },
  {
    deck_id: 7,
    front:
      'What is the name of the famous music festival that takes place in Tennessee every year?',
    back: 'Bonaroo',
  },
  {
    deck_id: 7,
    front: 'What famous music genre originated in New Orleans?',
    back: 'Jazz',
  },
  {
    deck_id: 7,
    front: "Who is the 'King of Pop'?",
    back: 'Michael Jackson',
  },
  {
    deck_id: 7,
    front: "What famous rock band wrote the song 'Stairway to Heaven'?",
    back: 'Led Zeppelin',
  },
  {
    deck_id: 7,
    front:
      'What is the name of the famous music festival that takes place in Indio, California every year?',
    back: 'Coachella',
  },
  {
    deck_id: 7,
    front: "What famous 70s band sang 'Bohemian Rhapsody'?",
    back: 'Queen',
  },
  {
    deck_id: 7,
    front:
      'Which famous guitarist played in the bands Cream and the Yardbirds?',
    back: 'Eric Clapton',
  },
];

const physEdCards = [
  {
    deck_id: 8,
    front: 'What is the recommended amount of exercise per day for adults?',
    back: 'At least 30 minutes of moderate-intensity exercise',
  },
  {
    deck_id: 8,
    front: 'What is the recommended amount of exercise per day for children?',
    back: 'At least 60 minutes of physical activity',
  },
  {
    deck_id: 8,
    front: 'What is the target heart rate zone for aerobic exercise?',
    back: '60-80% of your maximum heart rate',
  },
  {
    deck_id: 8,
    front: 'What is the FITT principle for exercise?',
    back: 'Frequency, Intensity, Time, Type',
  },
  {
    deck_id: 8,
    front: 'What are some benefits of regular exercise?',
    back: 'Improved cardiovascular health, increased strength and endurance, weight management',
  },
  {
    deck_id: 8,
    front: 'What are some examples of resistance exercises?',
    back: 'Push-ups, pull-ups, squats, lunges',
  },
  {
    deck_id: 8,
    front: 'What is the recommended amount of stretching per day?',
    back: 'At least 10-15 minutes',
  },
  {
    deck_id: 8,
    front: 'What is the importance of warm-up and cool-down exercises?',
    back: 'To prevent injury and improve performance',
  },
  {
    deck_id: 8,
    front: 'What are some benefits of regular stretching?',
    back: 'Increased flexibility, reduced muscle soreness and tension, improved range of motion',
  },
  {
    deck_id: 8,
    front:
      'What is the recommended amount of rest between sets of strength training exercises?',
    back: '1-2 minutes',
  },
];

const compSciCards = [
  {
    deck_id: 9,
    front: 'What is the difference between a compiler and an interpreter?',
    back: 'A compiler takes the entire program and converts it into object code, while an interpreter converts the program one line at a time.',
  },
  {
    deck_id: 9,
    front: 'What is a loop?',
    back: 'A loop is a sequence of instructions that is continually repeated until a certain condition is reached.',
  },
  {
    deck_id: 9,
    front: 'What is the purpose of a function?',
    back: 'A function is a block of code that performs a specific task and can be reused whenever necessary.',
  },
  {
    deck_id: 9,
    front: 'What is object-oriented programming?',
    back: 'Object-oriented programming is a programming paradigm that uses objects to represent and manipulate data.',
  },
  {
    deck_id: 9,
    front: 'What is a data structure?',
    back: 'A data structure is a way of organizing and storing data in a computer so that it can be accessed and used efficiently.',
  },
  {
    deck_id: 9,
    front: 'What is recursion?',
    back: 'Recursion is a programming technique in which a function calls itself repeatedly until a certain condition is met.',
  },
  {
    deck_id: 9,
    front: 'What is a linked list?',
    back: 'A linked list is a data structure that consists of a sequence of nodes, where each node contains a reference to the next node in the sequence.',
  },
  {
    deck_id: 9,
    front: 'What is an algorithm?',
    back: 'An algorithm is a set of instructions for solving a problem or accomplishing a task.',
  },
  {
    deck_id: 9,
    front: 'What is a variable?',
    back: 'A variable is a container for a value, which can be changed and manipulated by a program.',
  },
  {
    deck_id: 9,
    front: 'What is a data type?',
    back: 'A data type is a classification of data based on the type of value it represents.',
  },
];

const biologyCards = [
  {
    deck_id: 10,
    front: 'What is the process by which plants convert sunlight into energy?',
    back: 'Photosynthesis',
  },
  {
    deck_id: 10,
    front: 'What is the smallest unit of life?',
    back: 'Cell',
  },
  {
    deck_id: 10,
    front:
      'What is the basic structural and functional unit of the nervous system?',
    back: 'Neuron',
  },
  {
    deck_id: 10,
    front:
      'What is the name of the hormone that is responsible for the fight or flight response?',
    back: 'Adrenaline',
  },
  {
    deck_id: 10,
    front:
      'What is the process by which cells divide to produce two identical daughter cells?',
    back: 'Mitosis',
  },
  {
    deck_id: 10,
    front: "What is the term for the loss of water through a plant's leaves?",
    back: 'Transpiration',
  },
  {
    deck_id: 10,
    front:
      'What is the name of the protein that forms the structure of hair and nails?',
    back: 'Keratin',
  },
  {
    deck_id: 10,
    front:
      'What is the name of the cell organelle that is responsible for breaking down cellular waste?',
    back: 'Lysosome',
  },
  {
    deck_id: 10,
    front: 'What is the name of the process by which sperm cells are produced?',
    back: 'Spermatogenesis',
  },
  {
    deck_id: 10,
    front: 'What is the name of the pigment that gives human skin its color?',
    back: 'Melanin',
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
