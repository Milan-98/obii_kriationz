class Form extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <!-- (2) form -->
        <form class="rounded-xl bg-dark px-5 pb-10">
          <div class="pb-5 pt-8 text-3xl font-semibold text-slightDark">
            Connect With Us
          </div>
          <!-- 1.1 Fist Name and last name container -->
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="group relative z-0 mb-5 w-full">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="peer block w-full appearance-none border-0 border-b-2 border-slightDark bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gold rtl:peer-focus:translate-x-1/4"
                >Your name</label
              >
            </div>
            <!-- 1.2 Email -->
            <div class="group relative z-0 mb-5 w-full">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="peer block w-full appearance-none border-0 border-b-2 border-slightDark bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gold rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >Email address</label
              >
            </div>
          </div>
          <!-- 1.3 company & Phone Number -->
          <div class="grid lg:grid-cols-2 lg:gap-6">
            <div class="group relative z-0 mb-5 w-full">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                class="peer block w-full appearance-none border-0 border-b-2 border-slightDark bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gold rtl:peer-focus:translate-x-1/4"
                >Phone number (123-456-7890)</label
              >
            </div>
            <div class="group relative z-0 mb-5 w-full">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                class="peer block w-full appearance-none border-0 border-b-2 border-slightDark bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                for="floating_company"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gold rtl:peer-focus:translate-x-1/4"
                >Company (Ex. Google)</label
              >
            </div>
          </div>
          <!-- 1.4 Choose services  -->
          <div class="group relative z-0 mb-5 w-full">
            <label for="underline_select" class="sr-only"
              >Underline select</label
            >
            <select
              id="underline_select"
              class="peer block w-full border-0 border-b-2 border-slightDark bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:outline-none"
            >
              <option selected disabled class="">Choose a Service</option>
              <option value="US">Web Development Service</option>
              <option value="CA">Mobile app Development Service</option>
              <option value="FR">UI & UX Design Service</option>
              <option value="DE">Software Development Service</option>
            </select>
          </div>
          <!-- 1.5 date picker & time container -->
          <div class="mb-5 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="col-span-2 text-gray-500">
              Select Your Prefer Date & Time :
            </div>
            <!-- date -->
            <div class="">
              <input
                type="date"
                class="w-full border-b-[2px] border-slightDark bg-transparent py-2.5 text-sm text-gray-500 focus:outline-none"
                id="date"
                name="date"
              />
            </div>
            <!-- time -->
            <div class="">
              <input
                type="time"
                id="time"
                class="w-full border-b-[2px] border-slightDark bg-transparent py-2.5 text-sm text-gray-500 focus:outline-none"
                min="09:00"
                max="18:00"
                value="00:00"
                required
              />
            </div>
          </div>
          <!-- 1.6 Message-->
          <div class="group relative z-0 mb-9 w-full">
            <input
              type="text"
              name="message"
              id="floating_message"
              class="peer block w-full appearance-none border-0 border-b-2 border-slightDark bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gold focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              for="floating_message"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gold rtl:peer-focus:translate-x-1/4"
              >Your Message</label
            >
          </div>
          <!-- 1.7 submit -->
          <button
            type="submit"
            class="w-full rounded-lg bg-gold px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#947431] focus:outline-none focus:ring-4 focus:ring-[#ba933e] sm:w-auto"
          >
            Submit
          </button>
        </form>
       `;
    }
  }
  customElements.define("form-component", Form);