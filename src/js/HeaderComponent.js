class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <!-- ! Header -->
        <!-- apply bg for see what it covers -->
        <header
          class="sticky top-0 z-50 h-16 bg-white md:h-20 lg:pt-[12px] xl:h-24 xl:pt-5 2xl:pt-4"
        >
          <!-- centered section header for dropdown -->
          <section
            id="nav"
            class="lg:paddingX absolute inset-x-3 top-3 z-50 h-10 overflow-hidden bg-white transition-all duration-500 sm:inset-x-8 md:inset-x-12 md:h-14 lg:static lg:inset-x-16 lg:h-full xl:inset-x-24"
          >
            <!-- TODO -------- --- (1) Header --- ------ -->
            <!-- change color to see its space -->
            <section class="grid grid-flow-col items-center justify-between">
              <!--  -------- Logo ---------  -->
              <svg
                id="Layer_1"
                class="w-40 cursor-pointer fill-dark duration-500 hover:fill-gold md:w-48 xl:w-56 2xl:w-60"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 417.53 103.27"
              >
                <defs>
                  <style>
                    .cls-2 {
                      fill: url(#linear-gradient);
                    }
                    .cls-3 {
                      fill: url(#linear-gradient-2);
                    }
                    .cls-4 {
                      fill: #ba933e;
                    }
                  </style>
                  <linearGradient
                    id="linear-gradient"
                    x1="273.6"
                    y1="77.81"
                    x2="291.22"
                    y2="67.94"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ccb25d" />
                    <stop offset="1" stop-color="#b08530" />
                  </linearGradient>
                  <linearGradient
                    id="linear-gradient-2"
                    x1="278.01"
                    y1="85.68"
                    x2="295.63"
                    y2="75.81"
                    xlink:href="#linear-gradient"
                  />
                </defs>
                <path
                  class="cls-1"
                  d="M39.79,100.61,24.44,76.72,20.66,81.8v18.81H0V32.78H20.66V58.21l17.9-25.43H63.82L38.05,64.31,65,100.61Z"
                />
                <path
                  class="cls-1"
                  d="M67.18,100.61V51.07H85.42v5.64a21.78,21.78,0,0,1,15-6.87V67.48A14.62,14.62,0,0,0,96.26,67c-3.85,0-8.81,1-10.84,3.49v30.15Z"
                />
                <path
                  class="cls-1"
                  d="M103,35.59A10.36,10.36,0,1,1,113.36,46,10.34,10.34,0,0,1,103,35.59Zm1.13,65V51.08h18.46v49.53Z"
                />
                <path
                  class="cls-1"
                  d="M159.56,100.65V95.93c-2.77,3.49-8.83,5.95-15,5.95-7.39,0-17-5-17-16.32,0-12.32,9.65-15.29,17-15.29,6.47,0,12.32,2,15,5.44V70.06c0-3.49-3.18-6.16-9.24-6.16a23.78,23.78,0,0,0-13.75,4.83l-6.27-11.4c6.68-5.33,15.91-7.49,23.41-7.49C166,49.84,178,54.15,178,70.68v30Zm0-16.22c-1.23-1.74-4.42-2.67-7.29-2.67-3.08,0-6.47,1-6.47,4.11s3.39,4,6.47,4c2.87,0,6.06-.92,7.29-2.67Z"
                />
                <path
                  class="cls-1"
                  d="M189.41,86.3V67.13h-8.2v-16h8.2V37.61h18.45V51.14h10v16h-10V81c0,2.56,1.64,4.61,4.1,4.61a6.75,6.75,0,0,0,3.69-.92l3.28,13.94c-2,1.74-6.25,3.28-12.5,3.28C195.46,101.88,189.41,96.65,189.41,86.3Z"
                />
                <path
                  class="cls-1"
                  d="M222.74,35.72a10.34,10.34,0,1,1,10.33,10.33A10.3,10.3,0,0,1,222.74,35.72Zm1.12,64.87V51.17h18.42v49.42Z"
                />
                <path
                  class="cls-1"
                  d="M348.71,99.51V72.13c0-5.13-2.77-7.08-7.18-7.08a9.77,9.77,0,0,0-7.89,3.9V99.51H315.18V50h18.46v5.64c2.87-3.28,8.3-6.87,17-6.87,11.48,0,16.51,7,16.51,15.59V99.51Z"
                />
                <path
                  class="cls-1"
                  d="M374.34,99.51V85.93l17.48-20.05H374.34v-16h42.78v13l-17.9,20.67h18.31v16Z"
                />
                <path
                  class="cls-1"
                  d="M330.72,3.1c11.58,0,20.52,7.63,20.52,18.79s-8.94,18.79-20.52,18.79S310.2,33.06,310.2,21.89,319.14,3.1,330.72,3.1Zm0,10.62a7.84,7.84,0,0,0-8.08,8.17,8.08,8.08,0,1,0,16.16,0A7.84,7.84,0,0,0,330.72,13.72Z"
                />
                <path
                  class="cls-1"
                  d="M355.52,40V3.7h10.12V16.5a9.68,9.68,0,0,1,7.64-3.43c6.69,0,12,5.06,12,13.78,0,9-5.4,13.83-12,13.83a9.92,9.92,0,0,1-7.64-3.43V40Zm10.12-10a5.47,5.47,0,0,0,3.87,1.6,4.47,4.47,0,0,0,4.64-4.75,4.45,4.45,0,0,0-4.64-4.7,5.52,5.52,0,0,0-3.87,1.65Z"
                />
                <path
                  class="cls-1"
                  d="M388.86,5.5a5.68,5.68,0,0,1,11.36,0,5.68,5.68,0,0,1-11.36,0ZM389.48,40V13.72H399.6V40Z"
                />
                <path
                  class="cls-1"
                  d="M405.05,5.5a5.68,5.68,0,0,1,11.36,0,5.68,5.68,0,0,1-11.36,0ZM405.67,40V13.72h10.12V40Z"
                />
                <path
                  class="cls-2"
                  d="M280.17,45A29.14,29.14,0,1,0,309,74.13,29,29,0,0,0,280.17,45Zm0,55.41a20.58,20.58,0,1,1,20.18-20.58A20.38,20.38,0,0,1,280.17,100.4Z"
                />
                <path
                  class="cls-3"
                  d="M293.07,84.47a12.9,12.9,0,1,1-12.9-13.16A13,13,0,0,1,293.07,84.47Z"
                />
                <path
                  class="cls-4"
                  d="M280.17,45A29.14,29.14,0,1,0,309,74.13,29,29,0,0,0,280.17,45Zm0,55.41a20.58,20.58,0,1,1,20.18-20.58A20.38,20.38,0,0,1,280.17,100.4Z"
                />
                <path
                  class="cls-4"
                  d="M293.07,84.47a12.9,12.9,0,1,1-12.9-13.16A13,13,0,0,1,293.07,84.47Z"
                />
              </svg>
              <!--  --------- Hamburger -------- -->
              <div class="hamburger-menu place-self-end lg:hidden">
                <span class="bg-dark"></span>
                <span class="bg-dark"></span>
                <span class="bg-dark"></span>
              </div>
              <nav class="hidden pt-[8px] text-[#2f2f2f] lg:block xl:pt-1">
                <ul
                  class="grid grid-flow-col items-center justify-center gap-8 font-medium xl:gap-10"
                >
                  <li class="duration-300 hover:text-gold">
                    <a href="./about.html"> About</a>
                  </li>
                  <li
                    id="LgCapabilities"
                    class="relative -mb-7 -ml-1 -mr-1 -mt-5 pb-7 pl-1 pr-1 pt-5 duration-300 hover:text-gold xl:-mb-10 xl:pb-10"
                  >
                    Our Capabilities
                  </li>
                  <li class="duration-300 hover:text-gold">ObiiBot</li>
                  <li
                  id="LgResources"
                  class="-mb-7 -ml-1 -mr-1 -mt-5 pb-7 pl-1 pr-1 pt-5 duration-300 hover:text-gold xl:-mb-10 xl:pb-10"
                >
                  Resources
                </li>
                  <li
                    
                  >
                  <a href="./contact.html" class="rounded-sm bg-dark px-5 py-[9px] font-semibold text-white duration-300 hover:bg-gold">
                  Contact
                  </a>
                  </li>
                </ul>
              </nav>
            </section>
            <!-- TODO --------- ---  (2) Nav ---- -------------- -->
            <!-- change color to its space -->
            <nav class="grid gap-5 bg-white pt-8 text-xl text-[#2f2f2f] lg:hidden">
              <a href="./about.html" class="duration-300 hover:text-gold"> About</a>
              <!-- ? -------------------------------- capabilities ------------------------------------ -->
              <div
                id="capabilities"
                class="relative h-7 overflow-hidden duration-500"
              >
                <!-- -------- (1) name & svg div ----------- -->
                <div
                  id="capabilitiesButton"
                  class="sticky top-0 grid cursor-pointer grid-flow-col items-center justify-between bg-white duration-300"
                >
                  Our Capabilities
                  <svg
                    id="capabilitiesSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" w-[18px] -rotate-90 fill-[#2f2f2f] stroke-[#2f2f2f] duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m2.82 12l7.715 7.715q.22.222.218.53q-.003.307-.224.528t-.529.221q-.308 0-.529-.22L1.83 13.136q-.242-.243-.354-.54q-.112-.299-.112-.597t.112-.596q.112-.298.354-.54L9.47 3.22q.221-.221.532-.218q.31.003.532.224t.22.529q0 .307-.22.529z"
                    />
                  </svg>
                </div>
                <!-- ----------- (2) content div ------------- -->
                <div class="grid gap-6 overflow-scroll py-4 text-lg font-light">
                  <!-- 1 -->
                  <section class="mt-1 grid gap-3">
                    <div class="border-y-[1px] py-3 text-2xl font-semibold">
                      1. Digital Product Development
                    </div>
                    <ul class="list-inside list-decimal">
                      <li class="duration-150 hover:opacity-50">
                      <a href="./web-development-services.html"> Web Development Services </a>
                      </li>
                      <li class="duration-150 hover:opacity-50">
                      <a href="./mobileapp-development-services.html">  Mobile App Development services</a>
                      </li>
                      <li class="duration-150 hover:opacity-50">
                     <a href="./ui-ux-development-services.html">UI - UX design Services</a> 
                      </li>
                      <li class="duration-150 hover:opacity-50">
                    <a href="./software-development-company-in-bangalore.html">    Outsourced Software Development services</a>
                      </li>
                    </ul>
                  </section>
                  <!-- 2 -->
                  <section class="grid gap-3">
                    <div class="border-y-[1px] py-3 text-2xl font-semibold">
                      2. Talent Sourcing
                    </div>
                    <ul class="list-inside list-decimal">
                      <li class="duration-150 hover:opacity-50">
                        Staff Augmentation Services
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Offshore Development Center
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Temporary Staffing
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Technical Recruitment
                      </li>
                    </ul>
                  </section>
                  <!-- 3 -->
                  <section class="grid gap-3">
                    <div class="border-y-[1px] py-3 text-2xl font-semibold">
                      3. Software Testing
                    </div>
                    <ul class="list-inside list-decimal">
                      <li class="duration-150 hover:opacity-50">
                        Functional and Usability Testing
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Performance and Load Testing
                      </li>
                      <li class="duration-150 hover:opacity-50">Manual Testing</li>
                      <li class="duration-150 hover:opacity-50">
                        Regression Testing
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Vulnerability and Security Testing
                      </li>
                    </ul>
                  </section>
                  <!-- 4  -->
                  <section class="grid gap-3">
                    <div class="border-y-[1px] py-3 text-2xl font-semibold">
                      4. Product Consultations
                    </div>
                    <ul class="list-inside list-decimal">
                      <li class="duration-150 hover:opacity-50">
                        Product Management Consulting
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        MVP as a Service
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Customer Acquisition Consulting
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Growth Consulting
                      </li>
                    </ul>
                  </section>
                  <!-- 5 -->
                  <section class="grid gap-3">
                    <div class="border-y-[1px] py-3 text-2xl font-semibold">
                      5. Managed Cloud Services
                    </div>
                    <ul class="list-inside list-decimal">
                      <li class="duration-150 hover:opacity-50">
                        Cloud Consulting Services
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Cloud Architecture Services
                      </li>
                      <li class="duration-150 hover:opacity-50">
                        Cloud Adoption Services
                      </li>
                      <li class="duration-150 hover:opacity-50">DevOps services</li>
                    </ul>
                  </section>
                </div>
              </div>
              <!-- ? ----------------------------------- obii Bot ------------------------------ -->
              <div class="duration-300 hover:text-gold">ObiiBot</div>
              <!-- ? ------------------------------------------ resource ------------------------------ -->
              <div
                id="resources"
                class="h-7 cursor-pointer overflow-hidden duration-500"
              >
                <!-- ---------- (1) name & svg div ------------ -->
                <div
                  id="resourceButton"
                  class="grid grid-flow-col items-center justify-between duration-300"
                >
                  Resources
                  <svg
                    id="resourcesSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[18px] -rotate-90 fill-[#2f2f2f] stroke-[#2f2f2f] duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m2.82 12l7.715 7.715q.22.222.218.53q-.003.307-.224.528t-.529.221q-.308 0-.529-.22L1.83 13.136q-.242-.243-.354-.54q-.112-.299-.112-.597t.112-.596q.112-.298.354-.54L9.47 3.22q.221-.221.532-.218q.31.003.532.224t.22.529q0 .307-.22.529z"
                    />
                  </svg>
                </div>
                <!-- ----------- (2) content div ---------------- -->
                <ul class="mt-2 list-inside list-decimal text-xl font-light">
                  <li class="duration-150 hover:opacity-50"> <a href="./blogs.html">Blogs</a></li>
                  <li class="duration-150 hover:opacity-50">Brochures</li>
                </ul>
              </div>
              <a href="./contact.html" class="mt-3 bg-dark py-2 text-center font-medium text-white">
                Contact
              </a>
            </nav>
          </section>
        </header>
        
        `;
  }
}
customElements.define("header-component", HeaderComponent);
