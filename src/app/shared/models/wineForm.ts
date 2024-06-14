import {FormControl} from "@angular/forms";

export interface GuesserForm {
  domain: FormControl<string | null>;
  bottleName: FormControl<string | null>;
  vintage: FormControl<string | null>;
  grapeVariety: FormControl<string | null>;

}
