import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LAYOUT_VERTICAL,LAYOUT_MODE, LAYOUT_WIDTH, LAYOUT_POSITION, TOPBAR, SIDEBAR_SIZE, SIDEBAR_VIEW, SIDEBAR_COLOR } from '../layout.model';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})

/**
 * Right Sidebar component
 */
export class RightsidebarComponent implements OnInit {

  layout: string | undefined;
  mode: string | undefined;
  width: string | undefined;
  position: string | undefined;
  topbar: string | undefined;
  size: string | undefined;
  sidebarView: string | undefined;
  sidebar: string | undefined;
  attribute : any;

  @Output() settingsButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.layout = LAYOUT_VERTICAL;
    this.mode = LAYOUT_MODE;
    this.width = LAYOUT_WIDTH;
    this.position = LAYOUT_POSITION;
    this.topbar = TOPBAR;
    this.size = SIDEBAR_SIZE;
    this.sidebarView = SIDEBAR_VIEW;
    this.sidebar = SIDEBAR_COLOR;
    this.attribute = '';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.attribute = '';
      this.attribute = document.documentElement.getAttribute('data-layout');
      if (this.attribute == 'vertical') {
        const vertical = document.getElementById('customizer-layout01');
        if (vertical != null) {
          vertical.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'horizontal') {
        const horizontal = document.getElementById('customizer-layout02');
        if (horizontal != null) {
          horizontal.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'twocolumn') {
        const Twocolumn = document.getElementById('customizer-layout03');
        if (Twocolumn != null) {
          Twocolumn.setAttribute('checked', 'true');
        }
      }      
    }, 0);
  }

   /**
   * Toggles the right sidebar
   */
    toggleRightSidebar() {
      this.settingsButtonClicked.emit();
    }

    /**
   * Hide the sidebar
   */
  public hide() {
    document.body.classList.remove('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if(rightBar != null){
      rightBar.classList.remove('show');
      rightBar.removeAttribute('style');
    }
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  
  
}
