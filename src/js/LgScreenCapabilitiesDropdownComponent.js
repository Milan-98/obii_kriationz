class LgScreenCapabilitiesDropdownComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `   <nav
    id="LgDropdown"
    class="paddingX text-slightDark fixed inset-x-0 top-[124px] z-40 hidden grid-flow-col gap-8 rounded-sm bg-[#f2f2f2] p-12 font-light duration-300 xl:top-[140px]"
  >
    <ul class="grid auto-rows-min gap-4">
      <li class="mb-1 border-b-[1px] pb-5 text-lg font-semibold text-dark">
        Digital Product <br />
        Development
      </li>
      <li class="duration-300 hover:text-gold">Web Development Services</li>
      <li class="duration-300 hover:text-gold">
        Mobile App Development Services
      </li>
      <li class="duration-300 hover:text-gold">UI - UX Design Services</li>
      <li class="duration-300 hover:text-gold">
        Outsourced Software Development Services
      </li>
    </ul>
    <ul class="grid auto-rows-min gap-4">
      <li class="mb-1 border-b-[1px] pb-5 text-lg font-semibold text-dark">
        Talent <br />
        Sourcing
      </li>
      <li class="duration-300 hover:text-gold">
        Staff Augmentation Services
      </li>
      <li class="duration-300 hover:text-gold">
        Offshore Development Centre
      </li>
      <li class="duration-300 hover:text-gold">Temporary Staffing</li>
      <li class="duration-300 hover:text-gold">Technical Recruitment</li>
    </ul>
    <ul class="grid auto-rows-min gap-4">
      <li class="mb-1 border-b-[1px] pb-5 text-lg font-semibold text-dark">
        Software <br />
        Testing
      </li>
      <li class="duration-300 hover:text-gold">
        Functional and Usability Testing
      </li>
      <li class="duration-300 hover:text-gold">
        Performance and Load Testing
      </li>
      <li class="duration-300 hover:text-gold">Manual Testing</li>
      <li class="duration-300 hover:text-gold">Regression Testing</li>
      <li class="duration-300 hover:text-gold">
        Vulnerability and Security Testing
      </li>
    </ul>
    <ul class="grid auto-rows-min gap-4">
      <li class="mb-1 border-b-[1px] pb-5 text-lg font-semibold text-dark">
        Product <br />
        Consultations
      </li>
      <li class="duration-300 hover:text-gold">
        Product Management Consulting
      </li>
      <li class="duration-300 hover:text-gold">MVP as a Service</li>
      <li class="duration-300 hover:text-gold">
        Customer Acquisition Consulting
      </li>
      <li class="duration-300 hover:text-gold">Growth Consulting</li>
    </ul>
    <ul class="grid auto-rows-min gap-4">
      <li class="mb-1 border-b-[1px] pb-5 text-lg font-semibold text-dark">
        Managed Cloud <br />
        Services
      </li>
      <li class="duration-300 hover:text-gold">Cloud Consulting Services</li>
      <li class="duration-300 hover:text-gold">
        Cloud Architecture Services
      </li>
      <li class="duration-300 hover:text-gold">Cloud Adoption Services</li>
      <li class="duration-300 hover:text-gold">DevOps Services</li>
    </ul>
  </nav>
  <!-- ! Large screen dropdown of Resources -->
  <ul
    id="LgResourcesDropdown"
    class="paddingX fixed right-0 top-[124px] z-40 hidden w-56 gap-3 rounded-sm bg-[#f2f2f2] p-5 font-light text-slightDark duration-300 xl:top-[140px] 2xl:right-[18%]"
  >
    <li class="duration-300 hover:text-gold"> <a href="./blogs.html"> Blogs</a></li>
    <li class="duration-300 hover:text-gold">Brochures</li>
  </ul>
    `;
  }
}
customElements.define(
  "large-screen-capabilities-dropdown-component",
  LgScreenCapabilitiesDropdownComponent,
);
