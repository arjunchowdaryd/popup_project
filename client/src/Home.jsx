import React, { Component } from "react";
import "./css/Sample.css";
import "./css/Sidebar.css";
import logo from "./Images/Nuke_logo_white.png"
import Dashboard from "./components/Dashboard";
import Domain from "./components/Domain";
import Receipts from "./components/Receipts";
import Smtp from "./components/Smtp";
import Templates from "./components/Templates";
import Logs from "./components/Logs";
import Campaigns from "./components/Campaigns";
class Home extends Component {
  state ={
    nav_array:[
      "dashboard",
      "domain",
      "Smtp",
      "receipts",
      "templates",
      "campaigns",
      "Logs",
      "logout",
    ],
    navobject:{
      dashboard: true,
      domain: "",
      Smtp: "",
      receipts: "",
      templates: "",
      campaigns: "",
      Logs: "",
      logout: "",
    },
  }
  componentDidMount = () => {
    document
      .querySelector("#collapse")
      .addEventListener("click", ({ target }) => {
        const siteNav = document.querySelector(".site-nav");
        const siteNavIcons = document.querySelector(".site-nav-icons");

        if (siteNav.classList.contains("collapsed")) {
          siteNav.classList.remove("collapsed");
          siteNavIcons.classList.remove("collapsed");
        }else {
          siteNav.classList.add("collapsed");
          siteNavIcons.classList.add("collapsed");
        }
      });
  };
  sidebarFunc = (nav_index) => {
    let nav_array = this.state.nav_array;
    let navobject = this.state.navobject;
    nav_array.map((id, val) => {
      if (id != nav_index) {
        navobject[id] = false;
      } else {
        navobject[id] = true;
      }
    });

    this.setState({ navobject });
    // console.log(nav_array);
  };
  
  render() {
    const logoutSubmit = () =>{
      localStorage.clear()
      this.props.setIsLogin(false)
  }
    return (
      <div>
        <div class="app">
          <aside>
            <div class="org-nav">
              <button id="collapse" title="Expand/Collapse Navigation">
                <svg width="18" height="14" xmlns="http://www.w3.org/2000/svg">
                  <g
                    stroke="#FFF"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M1 1h16M1 7h11M1 13h16" />
                  </g>
                </svg>
              </button>
              {/* <img className="fav_icon" src={require("./images/Nuke-fav_200_white.png")}/> */}

            </div>
            <div class="site-nav-icons">
              {/* <img className="Nuke_logo" src={require("./images/Nuke_logo1.png")}/> */}

              <ul>
                <li  className={
              this.state.navobject["dashboard"] == "" ? "icon_inactive dashboard" : "icon_active"
            } onClick={() => this.sidebarFunc("dashboard")}>
                  
                  <span class="icon">
                    <i  style={{ color: "#fff" }} class="fa fa-tachometer"></i>
                  </span>
                  {/* <span class="tooltiptext">Tooltip text</span> */}
                </li>
                <div class="hide1">Dashboard</div>

              

                <li className={
              this.state.navobject["domain"] == "" ? "icon_inactive" : "icon_active"
            } onClick={() => this.sidebarFunc("domain")}>
                  
                  <span class="icon">
                    <i style={{ color: "#fff" }} class="fa fa-link"></i>
                  </span>
                </li>
                <div class="hide2">Domain</div>
                <li className={
              this.state.navobject["Smtp"] == "" ? "icon_inactive" : "icon_active"
            } onClick={() => this.sidebarFunc("Smtp")}>
                  
                  <span class="icon">
                    
                    <i
                      style={{ color: "#fff" }}
                      class="fa fa-share-square-o"
                    ></i>
                  </span>
                </li>
                <div class="hide3">Smtp</div>
                <li className={
              this.state.navobject["receipts"] == "" ? "icon_inactive" : "icon_active"
            } onClick={() => this.sidebarFunc("receipts")}>
                  
                  <span class="icon">
                    
                    <i style={{ color: "#fff" }} class="fa fa-users"></i>
                  </span>
                </li>
                <div class="hide4">Receipts</div>
                <li className={
              this.state.navobject["templates"] == "" ? "icon_inactive" : "icon_active"
            } onClick={() => this.sidebarFunc("templates")}>
                  
                  <span class="icon">
                    <i style={{ color: "#fff" }} class="fa fa-files-o"></i>
                  </span>
                </li>
                <div class="hide5">Templates</div>
                <li className={
              this.state.navobject["campaigns"] == "" ? "icon_inactive" : "icon_active"
            } onClick={() => this.sidebarFunc("campaigns")}>
                  
                  <span class="icon">
                    
                    <i
                      style={{ color: "#fff" }}
                      class="fa fa-share-square-o"
                    ></i>
                  
                  </span>
                </li>
                <div class="hide6">Campaings</div>
                <li className={
              this.state.navobject["Logs"] == "" ? "icon_inactive" : "icon_active extra"
            } onClick={() => this.sidebarFunc("Logs")}>
                  
                  <span class="icon">
                    <p style={{ color: "#fff", fontSize: 20 }}>@</p>
                  </span>
                </li>
                <div class="hide7">Logs</div>
                <li className={
              this.state.navobject["logout"] == "" ? "icon_inactive" : "icon_active"
            } onClick={ logoutSubmit}>
                  <span class="icon">
                    
                    <i style={{ color: "#fff" }} class="fa fa-power-off"></i>
                  </span>
                </li>
                <div class="hide8">Logout</div>

              </ul>
            </div>
            <div class="site-nav">
              <img
                className="Nuke_logo"
                src={logo}
              />

              <ul>
                <li className={
              this.state.navobject["dashboard"] == "" ? "content" : "content active"
            } onClick={() => this.sidebarFunc("dashboard")}>
                  <span class="icon-placeholder"></span>Dashboard
                </li>
                <li className={
              this.state.navobject["domain"] == "" ? "content" : "content active"
            } onClick={() => this.sidebarFunc("domain")}>
                  <span class="icon-placeholder"></span>Domain
                </li>
                <li className={
              this.state.navobject["Smtp"] == "" ? "content" : "content active"
            } onClick={() => this.sidebarFunc("Smtp")}>
                  <span class="icon-placeholder"></span>Smtp
                </li>
                <li className={
              this.state.navobject["receipts"] == "" ? "content" : "content active"
            } onClick={() => this.sidebarFunc("receipts")}>
                  <span class="icon-placeholder"></span>Receipts
                </li>
                <li className={
              this.state.navobject["templates"] == "" ? "content" : "content active"
            } onClick={() => this.sidebarFunc("templates")}>
                  <span class="icon-placeholder"></span>Templates
                </li>
                <li className={
              this.state.navobject["campaigns"] == "" ? "content" : "content active"
            } onClick={() => this.sidebarFunc("campaigns")}>
                  <span class="icon-placeholder"></span>Campaigns
                </li>
                <li className={
              this.state.navobject["Logs"] == "" ? "content extra" : "content active extra"
            } onClick={() => this.sidebarFunc("Logs")}>
                  <span class="icon-placeholder"></span>Logs
                </li>
                <li className={
              this.state.navobject["logout"] == "" ? "content" : "content active"
            } onClick={ logoutSubmit}>
                  <span class="icon-placeholder"></span>Logout
                </li>
              </ul>
            </div>
          </aside>
          <main>
          <div class="content">

          {this.state.navobject.dashboard == true && <Dashboard/>}
          {this.state.navobject.domain == true && <Domain/>}
          {this.state.navobject.receipts == true && <Receipts/>}
          {this.state.navobject.Smtp == true && <Smtp/>}
          {this.state.navobject.campaigns == true && <Campaigns/>}

          {this.state.navobject.templates == true && <Templates/>}
          {this.state.navobject.Logs == true && <Logs/>}
        
           </div>

          </main>
         
        </div>
      </div>
    );
  }
}

export default Home;
