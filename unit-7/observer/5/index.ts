interface IMediaFile {
  play(): void;
}

class AudioFile implements IMediaFile {
  play(): void {
    console.log("Playing audio.");
  }
}

class VideoFile implements IMediaFile {
  play(): void {
    console.log("Playing video.");
  }
}

class PDFFile implements IMediaFile {
  play(): void {
    console.log("Playing pdf.");
  }
}

class MediaPlayer {
  constructor(private mediaFile: IMediaFile) {}
  play() {
    this.mediaFile.play();
  }
}

const audioFile = new MediaPlayer(new AudioFile());
audioFile.play();
