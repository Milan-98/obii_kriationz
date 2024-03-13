class TopHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!-- ! Most Top Header -->
    <section class="bg-dark">
      <section class="paddingX grid place-items-end py-2">
        <a
          href="tel:+917760939233"
          class="grid grid-flow-col items-center justify-start gap-1 text-lg font-medium text-gold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 fill-gold"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"
            />
          </svg>
          +91 7760 93 92 33
        </a>
      </section>
    </section> `;
  }
}
customElements.define("topheader-component", TopHeader);
