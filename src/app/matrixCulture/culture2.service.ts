import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  speechSynthesis = window.speechSynthesis;
  voices = speechSynthesis.getVoices();

  constructor() { }

  speak(text) {
    let utterThis = new SpeechSynthesisUtterance(text);
    
    utterThis.voice = this.voices.filter(voice => voice.name === 'Google UK English Female')[0] || this.voices[0];

    this.speechSynthesis.speak(utterThis);
  }

  cancel() {
    speechSynthesis.cancel();
  }

}