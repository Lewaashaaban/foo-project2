// translation.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly LANG_KEY = 'selectedLanguage';

  constructor(private translate: TranslateService) {}

  init(): void {
    const savedLanguage = localStorage.getItem(this.LANG_KEY);
    const defaultLanguage = savedLanguage || 'en';
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
  }

  setLanguage(lang: string): void {
    console.log("set language to: ", lang);
    this.translate.use(lang);
    localStorage.setItem(this.LANG_KEY, lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
