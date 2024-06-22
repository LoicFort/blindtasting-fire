import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

// export const fadeAnimation = trigger('fadeAnimation', [
//   transition('* => *', [
//     style({opacity: 0}),
//     animate('300ms ease-in', style({opacity: 1})),
//   ]),
// ]);


export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    query('.form-title', [
      style({ opacity: 0, transform: 'translateY(-200%)' }),
      animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    query('.form-field', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      stagger(100, [
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]),
]);


