import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  private apiPathUrl: URL;

  constructor() {
    this.apiPathUrl = new URL(environment.apiPath);
  }

  get apiPath(): string {
    return this.apiPathUrl.href;
  }
}
