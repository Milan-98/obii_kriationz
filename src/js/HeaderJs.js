      // -------------------------------------------------------------- Header Things ------------------------------
      // open and close nav
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const nav = document.getElementById("nav");
      //  capabilities
      const capabilities = document.getElementById("capabilities");
      const capabilitiesButton = document.getElementById("capabilitiesButton");
      const capabilitiesSvg = document.getElementById("capabilitiesSvg");
      // resources
      const resources = document.getElementById("resources");
      const resourceButton = document.getElementById("resourceButton");
      const resourcesSvg = document.getElementById("resourcesSvg");
      //------------------------ open & close dropdown mobile ------------------------
      hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        nav.classList.toggle("h-10");
        nav.classList.toggle("md:h-14");
        nav.classList.toggle("overflow-hidden");
        nav.classList.toggle("h-[44rem]");
        nav.classList.toggle("md:h-[50rem]");
        nav.classList.toggle("px-6");
        nav.classList.toggle("md:px-10");
        nav.classList.toggle("md:pt-6");
        nav.classList.toggle("pt-2");
        nav.classList.toggle(
          "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]",
        );
        // closing capabilities
        capabilities.classList.add("overflow-hidden");
        capabilities.classList.remove("overflow-scroll");
        capabilities.classList.add("h-7");
        capabilities.classList.remove("h-96");
        capabilitiesButton.classList.remove("text-gold");
        capabilitiesSvg.classList.add("-rotate-90");
        capabilitiesSvg.classList.remove("rotate-90");
        // closing resources
        resources.classList.add("overflow-hidden");
        resources.classList.add("h-7");
        resources.classList.remove("h-24");
        resourceButton.classList.remove("text-gold");
        resourcesSvg.classList.add("-rotate-90");
        resourcesSvg.classList.remove("rotate-90");
      });
      // -------------------- inside dropdown dropdown -------------
      // Capabilities

      capabilitiesButton.addEventListener("click", () => {
        capabilities.classList.toggle("h-7");
        capabilitiesButton.classList.toggle("text-gold");
        capabilities.classList.toggle("overflow-scroll");
        capabilities.classList.toggle("overflow-hidden");
        capabilities.classList.toggle("h-96");
        capabilitiesSvg.classList.toggle("-rotate-90");
        capabilitiesSvg.classList.toggle("rotate-90");
        capabilities.scrollTo({ top: 0, behavior: "smooth" });
        // closing resources
        resources.classList.add("overflow-hidden");
        resources.classList.add("h-7");
        resources.classList.remove("h-24");
        resourceButton.classList.remove("text-gold");
        resourcesSvg.classList.add("-rotate-90");
        resourcesSvg.classList.remove("rotate-90");
      });
      // resources
      resourceButton.addEventListener("click", () => {
        resources.classList.toggle("h-7");
        resources.classList.toggle("overflow-hidden");
        resourceButton.classList.toggle("text-gold");
        resources.classList.toggle("h-24");
        resourcesSvg.classList.toggle("-rotate-90");
        resourcesSvg.classList.toggle("rotate-90");
        // closing capabilities
        capabilities.classList.add("overflow-hidden");
        capabilities.classList.remove("overflow-scroll");
        capabilities.classList.add("h-7");
        capabilities.classList.remove("h-96");
        capabilitiesButton.classList.remove("text-gold");
        capabilitiesSvg.classList.add("-rotate-90");
        capabilitiesSvg.classList.remove("rotate-90");
      });

      // --------------------------- large screen dropdown -----------------
      const LgCapabilities = document.getElementById("LgCapabilities");
      const LgDropdown = document.getElementById("LgDropdown");
      LgCapabilities.addEventListener("mouseenter", () => {
        LgDropdown.classList.remove("hidden");
        LgDropdown.classList.add("grid");
      });
      LgCapabilities.addEventListener("mouseleave", () => {
        LgDropdown.classList.add("hidden");
        LgDropdown.classList.remove("grid");
      });
      LgDropdown.addEventListener("mouseenter", () => {
        LgDropdown.classList.remove("hidden");
        LgDropdown.classList.add("grid");
        LgCapabilities.classList.remove("text-slightDark");
        LgCapabilities.classList.add("text-gold");
      });
      LgDropdown.addEventListener("mouseleave", () => {
        LgDropdown.classList.add("hidden");
        LgDropdown.classList.remove("grid");
        LgCapabilities.classList.remove("text-gold");
        LgCapabilities.classList.add("text-slightDark");
      });
      document.addEventListener("scroll", () => {
        
        if (pageYOffset > 32) {
          LgDropdown.classList.remove("top-[124px]");
          LgDropdown.classList.remove("xl:top-[140px]");

          LgDropdown.classList.add("top-20");
          LgDropdown.classList.add("xl:top-24");
        } else {
          LgDropdown.classList.add("top-[124px]");
          LgDropdown.classList.add("xl:top-[140px]");
          LgDropdown.classList.remove("top-20");
          LgDropdown.classList.remove("xl:top-24");
        }
      });
      // ----------------------------------------- for drop down of Resources ----------------------------- 
      const LgResources = document.getElementById("LgResources");
      const LgResourcesDropdown = document.getElementById(
        "LgResourcesDropdown",
      );
      LgResources.addEventListener("mouseenter", () => {
        LgResourcesDropdown.classList.remove("hidden");
        LgResourcesDropdown.classList.add("grid");
      });
      LgResources.addEventListener("mouseleave", () => {
        LgResourcesDropdown.classList.remove("grid");
        LgResourcesDropdown.classList.add("hidden");
      });
      LgResourcesDropdown.addEventListener("mouseenter", () => {
        LgResourcesDropdown.classList.remove("hidden");
        LgResourcesDropdown.classList.add("grid");
        LgResources.classList.remove("text-slightDark");
        LgResources.classList.add("text-gold");
      });
      LgResourcesDropdown.addEventListener("mouseleave", () => {
        LgResourcesDropdown.classList.remove("grid");
        LgResourcesDropdown.classList.add("hidden");
        LgResources.classList.remove("text-gold");
        LgResources.classList.add("text-slightDark");
      });
      document.addEventListener("scroll", () => {
        if (pageYOffset > 32) {
          LgResourcesDropdown.classList.remove("top-[124px]");
          LgResourcesDropdown.classList.remove("xl:top-[140px]");

          LgResourcesDropdown.classList.add("top-20");
          LgResourcesDropdown.classList.add("xl:top-24");
        } else {
          LgResourcesDropdown.classList.add("top-[124px]");
          LgResourcesDropdown.classList.add("xl:top-[140px]");
          LgResourcesDropdown.classList.remove("top-20");
          LgResourcesDropdown.classList.remove("xl:top-24");
        }
      });
      //--------------------------- sending user onclick to home page from svg of obii header ----------------
      var svgElement = document.getElementById("Layer_1");
      svgElement.addEventListener("click", function () {
        window.location.href = "./index.html";
      });