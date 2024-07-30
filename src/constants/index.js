import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const questions = [
    "what to watch",
    "what is my ip",
    "when is mother’s day 2024",
    "what dinosaur has 500 teeth",
    "how many weeks in a year",
    "how many days until christmas",
    "how to screenshot on mac",
    "how many ounces in a gallon",
    "what time is it",
    "when is easter 2024",
    "how many ounces in a cup",
    "what time is the eclipse",
    "who won the super bowl 2024",
    "how to screenshot on windows",
    "what time is the super bowl",
    "what is juneteenth",
    "when is easter",
    "when is the super bowl",
    "when is the super bowl 2024",
    "what we do in the shadows",
    "how to tie a tie",
    "when is thanksgiving",
    "how old is taylor swift",
    "what is my ip address",
    "when is the solar eclipse",
    "how many ounces in a pound",
    "what day is it",
    "why women kill",
    "when is super bowl 2024",
    "what is today",
    "when is mothers day",
    "how many cups in a quart",
    "what does gyatt mean",
    "when to work",
    "how many oz in a gallon",
    "who called me from this phone number",
    "how many quarts in a gallon",
    "how many people are in the world",
    "when is the next full moon",
    "how to write a check",
    "how many oz in a cup",
    "what space movie came out in 1992",
    "how long to boil eggs",
    "when is fathers day",
    "what time is the solar eclipse 2024",
    "where am i",
    "how many grams in an ounce",
    "how many seconds in a day",
    "what holiday is today",
    "when is daylight savings",
    "how much house can i afford",
    "how many days till christmas",
    "how to train your dragon",
    "what time does the super bowl start",
    "where the crawdads sing",
    "when calls the heart",
    "how to pronounce",
    "what is hamas",
    "how to delete instagram account",
    "how many liters in a gallon",
    "how to draw",
    "how to take a screenshot on windows",
    "who is running for president in 2024",
    "who is erin carter",
    "what time is the debate tonight",
    "how many feet in a mile",
    "how many tablespoons in a cup",
    // Add more questions following the same format
    "where is bali",
    "why can't i sleep",
    "when is father's day",
    "what causes low blood pressure",
    "how long do cats live",
    "what movies are playing",
    "what does 333 mean",
    "what causes hiccups",
    "what causes kidney stones",
    "who called me from this phone number",
    "when to take a pregnancy test",
    "when was the civil war",
    "why do i sweat so much",
    "why is my eye twitching",
    "when was world war 2",
    "what generation am i",
    "where is washington dc",
    "what does gyatt mean",
    "what does rizz mean",
    "how deep is the ocean",
    "when do babies start crawling",
    "where is your liver",
    "what week of the year is it",
    "why am i always tired",
    "how hot is the sun",
    "when do babies start teething",
    "what side is your appendix on",
    "how old is joe biden",
    "what font is this",
    "what are electrolytes",
    "when is mothers day",
    "what was the cold war",
    "where is your appendix",
    "when did slavery end",
    "why do dogs eat grass",
    "when did the titanic sink",
    "when is memorial day",
    "how big is an acre",
    "what causes gout",
    "why do dogs lick you",
    "what movie should i watch",
    "what holiday is tomorrow",
    "what are hemorrhoids",
    "how did michael jackson die",
    "how old is tom cruise",
    "where is the grand canyon",
    "where are your kidneys",
    "when is the next powerball drawing",
    "when did michael jackson die",
    "what state is washington dc in",
    "who won the powerball",
    "how fast does hair grow",
    "what colors make brown",
    "where can i watch yellowstone",
    "why do cats purr"
    // Continue adding questions up to 1000
];
  