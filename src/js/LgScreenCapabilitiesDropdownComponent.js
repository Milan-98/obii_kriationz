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
      <li class="duration-300 hover:text-gold"> <a href="./web-development-services.html"> Web Development Services </a></li>
      <li class="duration-300 hover:text-gold">
       <a href="./mobileapp-development-services.html"> Mobile App Development Services </a>
      </li>
      <li class="duration-300 hover:text-gold" > <a href="./ui-ux-development-services.html">UI - UX Design Services </a> </li>
      <li class="duration-300 hover:text-gold">
      <a href="./software-development-company-in-bangalore.html">Outsourced Software Development Services</a>
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
      <li class="duration-300 hover:text-gold"><a href="technical-recruitment-services-india.html">Technical Recruitment</a></li>
    </ul>
    <ul class="grid auto-rows-min gap-4">
      <li class="mb-1 border-b-[1px] pb-5 text-lg font-semibold text-dark">
        Software <br />
        Testing
      </li>
      <li class="duration-300 hover:text-gold">
        <a href="functional-usability-testing-services-india.html"> Functional and Usability Testing</a>
      </li>
      <li class="duration-300 hover:text-gold">
       <a href="performance-testing-services-india.html"> Performance and Load Testing</a>
      </li>
      <li class="duration-300 hover:text-gold"><a href="manual-testing-services-india.html">Manual Testing</a></li>
      <li class="duration-300 hover:text-gold"><a href="regression-testing-services-india.html">Regression Testing</a></li>
      <li class="duration-300 hover:text-gold">
        <a href="vulnerability-testing-services-india.html">Vulnerability and Security Testing</a>
      </li>
    </ul>
    <ul class="grid auto-rows-min gap-4">
      <li class="mb-1 border-b-[1px] pb-5 text-lg font-semibold text-dark">
        Product <br />
        Consultations
      </li>
      <li class="duration-300 hover:text-gold">
      <a href="Product-Management-Consulting.html">Product Management Consulting</a>
      </li>
      <li class="duration-300 hover:text-gold"><a href="MVP-as-a-Service.html">MVP as a Service</a></li>
      <li class="duration-300 hover:text-gold">
        <a href="customer-acquisition-consulting-india.html">Customer Acquisition Consulting</a>
      </li>
      <li class="duration-300 hover:text-gold">
      <a href="growth-consulting-india.html">Growth Consulting</a></li>
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
