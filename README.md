Angular 2+ Throttle Click Directive

Insallation:
Add the directive to your project src
Import the directive in your app.module.ts (or where ever you want to use it)
Add the imported directive to the declarations array

Usage:
<button appThrottleClick (throttleClick)="call_a_function_here()" [throttleTime]="5000">CLICK ME</button>

