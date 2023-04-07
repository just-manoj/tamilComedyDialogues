export class Comedian {
  constructor(id, ComedianName, imageUri, dialogueCount) {
    (this.id = id),
      (this.ComedianName = ComedianName),
      (this.imageUri = imageUri),
      (this.dialogueCount = dialogueCount);
  }
}

export class ComedyDialogue {
  constructor(id, dialogueTamilTitle, dialogueEnglishTitle, dialogueUri) {
    (this.id = id),
      (this.dialogueTamilTitle = dialogueTamilTitle),
      (this.dialogueEnglishTitle = dialogueEnglishTitle),
      (this.dialogueUri = dialogueUri);
  }
}
