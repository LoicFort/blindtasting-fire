import {FormControl} from "@angular/forms";

export interface CreateSessionForm {
  sessionId:  FormControl<string | null>;
  username:  FormControl<string | null>;
  domain: FormControl<string | null>;
  bottleName: FormControl<string | null>;
  vintage: FormControl<number | null>;
  grapeVariety: FormControl<string[] | null>;

}
