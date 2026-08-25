

// handle user input and communicate changes to its parent - TextInput
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initalValue?: string;
}


//TextStats 
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; //in minutes
}

// StatsDisplayProp - scoreboard

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// CharacterCounter 
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}