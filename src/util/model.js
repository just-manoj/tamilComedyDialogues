export class Comedian {
  constructor(id, comedianName, imageUri, dialogueCount) {
    (this.id = id),
      (this.comedianName = comedianName),
      (this.imageUri = imageUri),
      (this.dialogueCount = dialogueCount);
  }
}

export class ComedyDialogue {
  constructor(
    dialogueId,
    dialogueTamilTitle,
    dialogueEnglishTitle,
    dialogueUri
  ) {
    (this.dialogueId = dialogueId),
      (this.dialogueTamilTitle = dialogueTamilTitle),
      (this.dialogueEnglishTitle = dialogueEnglishTitle),
      (this.dialogueUri = dialogueUri);
  }
}
