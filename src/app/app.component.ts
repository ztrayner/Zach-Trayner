import { Component } from '@angular/core';
import { NavMenuComponent } from './nav-menu';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [NavMenuComponent, ROUTER_DIRECTIVES],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
    featuredImage = '//lh3.googleusercontent.com/OLyfigjRU79XQ7KYZ0tNSQ3wClmJ-sdYzZZHT23drHFsUGVuL1LWFTDvOEytO6t84dGDz4LNgNW8dSFCSKlPc1ItggM-ykxnjFK1OKuX1SpJepJZcrmH9Hq_tDD2p2C8oYoIxjEWaJWWZf7RpjMwOC9DIx-tV8BVraKTrcgxbzorlCxmgSxL7GvlR43x00FYinuV-ui7RIXLHX4l2PhIo155GcVmcAuMsE2uiT4LV5TiMT_HV1PhLRrgq0tGkVWPQMOwRZi4d1cavkUNxnH9cCv3W1CfCEUyvq67T6ba-w39ZVyZZtaYLuGzk8Ls8R89_0nazaTnDPbBXHVMT_BTdhLKFoAAmUA0PQdVQkMBQTIl6pow-cnI_s6518p5C5U3vuHzV7zRpQZP5Vcaxst9gKJrQN1w7ZH8Fs7oO2V9zwpixR-2iWqnWNIwOsIPoOSRU_4TSIp_NCYMDwOq6pVuQlJvAHrXu5q5nHksSTPrAElENrxGC6WEGimCMWEWUpcLf-BfZxxUUYtt3S_BjY0SvTNDETnLdQ6opYXtt-zZecRwbLQ8aaWcX-vtLaF_IlTGvsXvibA6cHnPheYkHBWmOvg0ewdrxpzo=w1026-h1539-no';
    title = 'Zach Trayner';
}
