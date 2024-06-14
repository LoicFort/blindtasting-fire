import {FormControl} from "@angular/forms";

export interface JoinSessionForm {
  sessionId: FormControl<number>;
  username: FormControl<string>;
}
