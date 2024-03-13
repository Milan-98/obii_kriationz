class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <footer class="gradient text-transparentDark">
        <!-- for mx -->
        <nav class="paddingX">
          <!-- container of all links -->
          <section
            class="grid gap-9 pb-10 pt-16 sm:grid-cols-2 sm:pt-20 lg:grid-cols-3 lg:gap-5 lg:pb-16 xl:pb-24 xl:pt-28"
          >
            <!-- ? -------------------------- (1) -----------------------------  -->
            <section class="grid gap-9">
              <!-- -----------  1. (about) ------------- -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  DISCOVER OBII KRIATIONZ
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">About Obii Kriationz</li>
                <li class="footerLink">Our Ethos</li>
                <li class="footerLink">Methodologies</li>
                <li class="footerLink">Social Causes</li>
                <li class="footerLink">ObiiBot - ChatBot Builder</li>
                <li class="footerLink">Browse our Blogs</li>
              </ul>
              <!-- ---------- 2. (careers) --------------- -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  CAREERS <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">
                <a href="./careers.html">
                Job Opportunities
                </a>
                </li>
                <li class="footerLink">Talent Referrals</li>
              </ul>
              <!-- ------------ 3. (terms and conditions) ----------- -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  TERMS AND CONDITIONS
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">Terms of Use</li>
                <li class="footerLink">Disclaimer</li>
                <li class="footerLink">Privacy Policy</li>
                <li class="footerLink">Cookie Policy</li>
              </ul>
              <!-- --------------  4. (DIGITAL PRODUCT DEVELOPMENT ) ------------ -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  DIGITAL PRODUCT DEVELOPMENT
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">Web Development Services</li>
                <li class="footerLink">Mobile App Development Services</li>
                <li class="footerLink">DevOps Services</li>
                <li class="footerLink">Cloud Architecture Services</li>
              </ul>
            </section>
            <!-- ? ----------------------------------  (2) -------------------------------  -->
            <section class="grid gap-9">
              <!-- ----------------  1. (talent sourcing) -------------- -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  TALENT SOURCING
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">Staff Augmentation Services</li>
                <li class="footerLink">Offshore Development Centre</li>
                <li class="footerLink">Temporary Staffing</li>
                <li class="footerLink">Technical Recruitment</li>
              </ul>
              <!-- -------------- 2. (software testing) ----------  -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  SOFTWARE TESTING
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">Functional and Usability Testing</li>
                <li class="footerLink">Performance and Load Testing</li>
                <li class="footerLink">Manual Testing</li>
                <li class="footerLink">Regression Testing</li>
                <li class="footerLink">Vulnerability and Security Testing</li>
              </ul>
              <!-- -------------- 3. (PRODUCT CONSULTATIONS) ----------  -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  PRODUCT CONSULTATIONS
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">Product Management Consulting</li>
                <li class="footerLink">MVP as a Service</li>
                <li class="footerLink">Customer Acquisition Consulting</li>
                <li class="footerLink">Growth Consulting</li>
                <li class="footerLink">product prototyping services</li>
              </ul>
              <!-- -------------- 4. ( managed services ) ----------  -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  MANAGED SERVICES
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="footerLink mt-2">Cloud Consulting Services</li>
                <li class="footerLink">Cloud Architecture Services</li>
                <li class="footerLink">Cloud Adoption Services</li>
                <li class="footerLink">DevOps Services</li>
              </ul>
            </section>
            <!-- ? -------------------------------- (3) -------------------------------------  -->
            <section
              class="grid gap-9 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:auto-rows-min lg:grid-cols-none"
            >
              <!-- -------------------- 1. (get in touch) ----------  -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  GET IN TOUCH
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <!-- (1) Number -->
                <li class="mt-2 text-2xl">
                  <a
                    href="tel:917760939233"
                    class="duration-200 hover:text-[#c5c4c8]"
                    >+ 91-7760 93 92 33</a
                  >
                </li>
                <!-- (2) Book meeting and reach us -->
                <li class="mt-2 grid gap-3">
                  <!-- (1) Reach Us  -->
                  <a
                    href="tel:917760939233"
                    class="w-fit rounded-md border-2 border-gold px-5 py-2 text-[#c5c4c8] duration-300 hover:border-[#2f2f2f]"
                  >
                    REACH US
                  </a>
                  <!-- (2) Book meeting with us -->
                  <a
                    href="https://outlook.office365.com/book/ConsultwithObiiKriationzWebLLP@obiikriationz.com/"
                    target="_blank"
                    class="group grid w-fit grid-flow-col items-center gap-3 rounded-md bg-gold px-6 py-2 text-[#1b1b1b] duration-300 hover:gap-5 hover:bg-transparent hover:text-[#c5c4c8] hover:outline hover:outline-2 hover:outline-gold"
                  >
                    BOOK MEETING WITH US!
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 rotate-180 fill-[#1b1b1b] duration-300 group-hover:fill-[#c5c4c8]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <!-- ------------------------------------ 2. (our address) ------------- -->
              <ul class="grid gap-2">
                <li class="footerHeading">
                  OUR ADDRESS
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <!-- Address -->
                <li class="footerLink mt-2">
                  <a
                    href="https://www.google.com/maps/place/Obii+kriationz+Web+LLP/@12.9290498,77.571872,15z/data=!4m6!3m5!1s0x3bae15f366b3c61d:0x24c55a7b51bd4222!8m2!3d12.9290287!4d77.5721817!16s%2Fg%2F11f2rrw19x?entry=ttu"
                    target="_blank"
                    >#2886, 15th A Main Road, Behind Uma Maheshwara Layout, BSK
                    2nd Stage, Bengaluru 560070</a
                  >
                </li>
                <!-- Email -->
                <li class="mt-1 w-fit">
                  <a
                    href="mailto:info@obiikriationz.com"
                    class="group grid grid-flow-col items-center justify-start gap-2 text-sm duration-200 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#60526e] duration-200 group-hover:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"
                      />
                    </svg>
                    Info@obiikriationz.com
                  </a>
                </li>
              </ul>
              <!-- ------------------------------ (3) sign up for newsletter --------------- -->
              <ul class="grid gap-2 sm:col-span-2 lg:col-span-1">
                <li class="footerHeading">
                  SIGN UP FOR A NEWSLETTER
                  <span class="text-4xl leading-3 text-gold">.</span>
                </li>
                <li class="mt-2 text-sm">
                  <form action="">
                    <label for="userEmail"
                      >Subscribe to our newsletter to receive latest news on our
                      services.</label
                    >
                    <div class="mt-4 flex">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        class="w-52 rounded-l-md px-3 py-2 focus:outline sm:w-80 lg:w-64 xl:w-80"
                        required
                        name="userEmail"
                        id="userEmail"
                      />
                      <button
                        type="submit"
                        aria-label="submit button"
                        class="grid w-fit place-items-center rounded-r-md bg-gold px-2 py-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                            />
                            <path
                              fill="#ffffff"
                              d="m21.433 4.861l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-2.074 2.073a.5.5 0 0 1-.853-.354v-4.519L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5a1 1 0 0 1 1.181 1.329ZM19 6.001L8.032 13.152l1.735 1.66L19 6Z"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </section>
          </section>
          <!-- copyright  -->
          <div
            class="border-t-[.8px] border-[#60526a4b] py-6 text-center text-xs text-[#c5c4c8] xl:py-10 xl:text-sm"
          >
            © 2009-2024 Obii KriationZ Web LLP
          </div>
        </nav>
      </footer>
        `;
  }
}
customElements.define("footer-component", FooterComponent);
