interface MajorCredits {
  credits: number;
  _brandMajor: void;
}

interface MinorCredits {
  credits: number;
  _brandMinor: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brandMajor: undefined,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brandMinor: undefined,
  };
}