import logo from '../assets/images/logo_sle.webp'

function createHeader() {
  const header = document.createElement('header');
  header.className = 'text-gray-600 body-font';

  header.innerHTML = `
    <div class="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="${logo}" alt="sle logo" class="w-full md:w-32" />
      </a>

      <a href="#cta"
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cursor-pointer">
        Matricule-se
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  `

  return header;
}

export default createHeader