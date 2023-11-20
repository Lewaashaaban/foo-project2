// font-size.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontService {
  private baseFontSize = 16; // Default base font size in pixels

  getFontSize(): number {
    return this.baseFontSize;
  }

  increaseFontSize(increment: number): void {
    this.baseFontSize += increment;
    this.updateFontSize();
  }
  decreaseFontSize(decrease: number): void {
    this.baseFontSize -= decrease;
    this.updateFontSize();
  }

  private updateFontSize(): void {
    document.documentElement.style.fontSize = `${this.baseFontSize}px`;
  }
}
