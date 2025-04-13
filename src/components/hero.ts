import heroImg from '../assets/images/hero.webp'

function createHero() {
  const hero = document.createElement('section');
  hero.className = 'text-gray-600 body-font';

  hero.innerHTML = `
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img class="mb-10 object-cover object-center rounded" alt="hero image"
        src="${heroImg}">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Transforme Seu Futuro com a Logosofia
        </h1>
        <p class="mb-8 leading-relaxed">
          Descubra um método de ensino único que desenvolve o pensamento, fortalece valores e prepara você para os
          desafios da vida. Escolha uma educação que vai além do convencional e faça parte dessa jornada transformadora!
        </p>
        <div class="flex justify-center">
          <a href="#cta"
            class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer">
            Matricule-se
          </a>
          <a href="#about"
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg cursor-pointer">
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  `

  return hero
}

export default createHero;