import './style.css'
import logo from './assets/images/logo_sle.png'
import hero from './assets/images/hero.jpg'
import childStudying from './assets/images/child-1.jpg'
import childHeadphone from './assets/images/child-2.jpg'
import teens from './assets/images/teens-1.jpg'
import firstFather from './assets/images/father-1.png'
import secondFather from './assets/images/father-2.png'
import mother from './assets/images/mother-1.png'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)
Alpine.start()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!-- header -->
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="${logo}" alt="logo" class="w-full md:w-32" />
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
</header>


<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="mb-10 object-cover object-center rounded" alt="hero"
      src="${hero}">
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
</section>

<!-- ====== About Section Start -->
<section class="mx-10 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white" id="about">
  <div class="container mx-auto">
    <div class="flex flex-wrap items-center justify-between -mx-4">
      <div class="w-full px-4 lg:w-6/12">
        <div class="flex items-center -mx-3 sm:-mx-4">
          <div class="w-full px-3 sm:px-4 xl:w-1/2">
            <div class="py-3 sm:py-4">
              <img src="${childHeadphone}" alt="" class="w-full rounded-2xl" />
            </div>
            <div class="py-3 sm:py-4">
              <img src="${teens}" alt=""
                class="w-full rounded-2xl" />
            </div>
          </div>
          <div class="w-full px-3 sm:px-4 xl:w-1/2">
            <div class="relative z-10 my-4">
              <img src="${childStudying}" alt=""
                class="w-full rounded-2xl" />
              <span class="absolute -right-7 -bottom-7 z-[-1]">
                <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="#3056D3" />
                  <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="#3056D3" />
                  <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="#3056D3" />
                  <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="#3056D3" />
                  <circle cx="60.3334" cy="104" r="1.66667" transform="rotate(-90 60.3334 104)" fill="#3056D3" />
                  <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="#3056D3" />
                  <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="#3056D3" />
                  <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="#3056D3" />
                  <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="#3056D3" />
                  <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="#3056D3" />
                  <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)"
                    fill="#3056D3" />
                  <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)"
                    fill="#3056D3" />
                  <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="#3056D3" />
                  <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)"
                    fill="#3056D3" />
                  <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)"
                    fill="#3056D3" />
                  <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)"
                    fill="#3056D3" />
                  <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)"
                    fill="#3056D3" />
                  <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)"
                    fill="#3056D3" />
                  <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="#3056D3" />
                  <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="#3056D3" />
                  <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)"
                    fill="#3056D3" />
                  <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)"
                    fill="#3056D3" />
                  <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)"
                    fill="#3056D3" />
                  <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)"
                    fill="#3056D3" />
                  <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="#3056D3" />
                  <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="#3056D3" />
                  <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)"
                    fill="#3056D3" />
                  <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)"
                    fill="#3056D3" />
                  <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)"
                    fill="#3056D3" />
                  <circle cx="60.3333" cy="30.9998" r="1.66667" transform="rotate(-90 60.3333 30.9998)"
                    fill="#3056D3" />
                  <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)"
                    fill="#3056D3" />
                  <circle cx="88.6667" cy="30.9998" r="1.66667" transform="rotate(-90 88.6667 30.9998)"
                    fill="#3056D3" />
                  <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)"
                    fill="#3056D3" />
                  <circle cx="117.667" cy="30.9998" r="1.66667" transform="rotate(-90 117.667 30.9998)"
                    fill="#3056D3" />
                  <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)"
                    fill="#3056D3" />
                  <circle cx="74.6667" cy="30.9998" r="1.66667" transform="rotate(-90 74.6667 30.9998)"
                    fill="#3056D3" />
                  <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="#3056D3" />
                  <circle cx="103" cy="30.9998" r="1.66667" transform="rotate(-90 103 30.9998)" fill="#3056D3" />
                  <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="#3056D3" />
                  <circle cx="132" cy="30.9998" r="1.66667" transform="rotate(-90 132 30.9998)" fill="#3056D3" />
                  <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)"
                    fill="#3056D3" />
                  <circle cx="1.66667" cy="16.3333" r="1.66667" transform="rotate(-90 1.66667 16.3333)"
                    fill="#3056D3" />
                  <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)"
                    fill="#3056D3" />
                  <circle cx="16.3333" cy="16.3333" r="1.66667" transform="rotate(-90 16.3333 16.3333)"
                    fill="#3056D3" />
                  <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="#3056D3" />
                  <circle cx="31" cy="16.3333" r="1.66667" transform="rotate(-90 31 16.3333)" fill="#3056D3" />
                  <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)"
                    fill="#3056D3" />
                  <circle cx="45.6667" cy="16.3333" r="1.66667" transform="rotate(-90 45.6667 16.3333)"
                    fill="#3056D3" />
                  <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)"
                    fill="#3056D3" />
                  <circle cx="60.3333" cy="16.3333" r="1.66667" transform="rotate(-90 60.3333 16.3333)"
                    fill="#3056D3" />
                  <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)"
                    fill="#3056D3" />
                  <circle cx="88.6667" cy="16.3333" r="1.66667" transform="rotate(-90 88.6667 16.3333)"
                    fill="#3056D3" />
                  <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)"
                    fill="#3056D3" />
                  <circle cx="117.667" cy="16.3333" r="1.66667" transform="rotate(-90 117.667 16.3333)"
                    fill="#3056D3" />
                  <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)"
                    fill="#3056D3" />
                  <circle cx="74.6667" cy="16.3333" r="1.66667" transform="rotate(-90 74.6667 16.3333)"
                    fill="#3056D3" />
                  <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="#3056D3" />
                  <circle cx="103" cy="16.3333" r="1.66667" transform="rotate(-90 103 16.3333)" fill="#3056D3" />
                  <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="#3056D3" />
                  <circle cx="132" cy="16.3333" r="1.66667" transform="rotate(-90 132 16.3333)" fill="#3056D3" />
                  <circle cx="1.66667" cy="45.3333" r="1.66667" transform="rotate(-90 1.66667 45.3333)"
                    fill="#3056D3" />
                  <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)"
                    fill="#3056D3" />
                  <circle cx="16.3333" cy="45.3333" r="1.66667" transform="rotate(-90 16.3333 45.3333)"
                    fill="#3056D3" />
                  <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)"
                    fill="#3056D3" />
                  <circle cx="31" cy="45.3333" r="1.66667" transform="rotate(-90 31 45.3333)" fill="#3056D3" />
                  <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="#3056D3" />
                  <circle cx="45.6667" cy="45.3333" r="1.66667" transform="rotate(-90 45.6667 45.3333)"
                    fill="#3056D3" />
                  <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)"
                    fill="#3056D3" />
                  <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)"
                    fill="#3056D3" />
                  <circle cx="60.3333" cy="1.66683" r="1.66667" transform="rotate(-90 60.3333 1.66683)"
                    fill="#3056D3" />
                  <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)"
                    fill="#3056D3" />
                  <circle cx="88.6667" cy="1.66683" r="1.66667" transform="rotate(-90 88.6667 1.66683)"
                    fill="#3056D3" />
                  <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)"
                    fill="#3056D3" />
                  <circle cx="117.667" cy="1.66683" r="1.66667" transform="rotate(-90 117.667 1.66683)"
                    fill="#3056D3" />
                  <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)"
                    fill="#3056D3" />
                  <circle cx="74.6667" cy="1.66683" r="1.66667" transform="rotate(-90 74.6667 1.66683)"
                    fill="#3056D3" />
                  <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="#3056D3" />
                  <circle cx="103" cy="1.66683" r="1.66667" transform="rotate(-90 103 1.66683)" fill="#3056D3" />
                  <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="#3056D3" />
                  <circle cx="132" cy="1.66683" r="1.66667" transform="rotate(-90 132 1.66683)" fill="#3056D3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div class="mt-10 lg:mt-0">
          <span class="block mb-4 text-lg font-semibold text-primary">
            Sobre a Logosofia
          </span>
          <p class="mb-5 text-base text-body-color">
            A Logosofia é mais do que uma instituição de ensino—é um espaço 
            onde o conhecimento se conecta ao desenvolvimento humano. Nossa 
            metodologia exclusiva incentiva o pensamento crítico, o autoconhecimento 
            e a formação de valores essenciais para a vida.
          </p>
          <p class="mb-8 text-base text-body-color">
            Com unidades em diversas cidades do Brasil e da América do Sul, 
            oferecemos uma abordagem educacional inovadora, que ajuda crianças 
            e adolescentes a aprenderem de forma consciente e significativa. 
            Aqui, o aprendizado vai além das matérias tradicionais, preparando 
            os alunos para os desafios do presente e do futuro.
          </p>
          <p class="mb-8 text-base text-body-color">
            Se você busca uma educação que transforma e inspira, a Logosofia é o 
            lugar certo. Venha conhecer nossa proposta e faça parte dessa jornada!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ====== About Section End -->

<!-- feature -->
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Por Que Escolher a Logosofia?</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0500488" width="32" height="32" rx="16" fill="#2B7FFF"/>
                <path d="M16 11.05V25.05" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 22.05C6.73478 22.05 6.48043 21.9447 6.29289 21.7572C6.10536 21.5696 6 21.3153 6 21.05V8.05005C6 7.78483 6.10536 7.53048 6.29289 7.34294C6.48043 7.15541 6.73478 7.05005 7 7.05005H12C13.0609 7.05005 14.0783 7.47148 14.8284 8.22162C15.5786 8.97177 16 9.98918 16 11.05C16 9.98918 16.4214 8.97177 17.1716 8.22162C17.9217 7.47148 18.9391 7.05005 20 7.05005H25C25.2652 7.05005 25.5196 7.15541 25.7071 7.34294C25.8946 7.53048 26 7.78483 26 8.05005V21.05C26 21.3153 25.8946 21.5696 25.7071 21.7572C25.5196 21.9447 25.2652 22.05 25 22.05H19C18.2044 22.05 17.4413 22.3661 16.8787 22.9287C16.3161 23.4913 16 24.2544 16 25.05C16 24.2544 15.6839 23.4913 15.1213 22.9287C14.5587 22.3661 13.7956 22.05 13 22.05H7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Educação Personalizada</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">
              Aprenda no seu ritmo, com conteúdos e atividades que estimulam o pensamento crítico e o autoconhecimento.
            </p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.330017" y="0.0500488" width="32" height="32" rx="16" fill="#2B7FFF"/>
                <path d="M11.33 24.05H21.33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.33 24.05C19.83 21.55 15.13 17.65 17.33 14.05" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.83 13.4501C14.93 14.2501 15.63 15.6501 16.13 17.1501C14.13 17.5501 12.63 17.5501 11.33 16.8501C10.13 16.2501 9.03002 14.9501 8.33002 12.6501C11.13 12.1501 12.73 12.6501 13.83 13.4501Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.43 10.05C17.6676 11.2416 17.2841 12.6362 17.33 14.05C19.23 13.95 20.63 13.45 21.63 12.65C22.63 11.65 23.23 10.35 23.33 8.05005C20.63 8.15005 19.33 9.05005 18.43 10.05Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Desenvolvimento Integral</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">
              Mais do que conhecimento acadêmico, a Logosofia promove o crescimento intelectual, emocional e ético dos alunos.
            </p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.660034" y="0.0500488" width="32" height="32" rx="16" fill="#2B7FFF"/>
                <path d="M19.66 18.05C19.86 17.05 20.36 16.35 21.16 15.55C22.16 14.65 22.66 13.35 22.66 12.05C22.66 10.4587 22.0279 8.93263 20.9027 7.80741C19.7775 6.68219 18.2513 6.05005 16.66 6.05005C15.0687 6.05005 13.5426 6.68219 12.4174 7.80741C11.2922 8.93263 10.66 10.4587 10.66 12.05C10.66 13.05 10.86 14.25 12.16 15.55C12.86 16.25 13.46 17.05 13.66 18.05" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.66 22.05H19.66" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.66 26.05H18.66" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Aprendizado para a Vida</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">
              Os ensinamentos logosóficos vão além da sala de aula, ajudando você a aplicar o conhecimento no dia a dia e a evoluir continuamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- testimonial -->
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial"
            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="${mother}">
          <p class="leading-relaxed">
            Sempre quis uma educação que preparasse minha filha para a vida, não apenas para provas. 
            Na Logosofia, ela aprendeu a pensar de forma crítica, a lidar com desafios e a construir 
            valores sólidos. Como mãe e empresária, vejo o quanto isso faz diferença para o futuro dela!
          </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Mariana Souza</h2>
          <p class="text-gray-500">Mãe da Laura</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial"
            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="${firstFather}">
            <p class="leading-relaxed">
              Fiquei impressionado com a metodologia da Logosofia. Meu filho passou a demonstrar mais curiosidade e 
              a aprender. Ele não apenas memoriza conteúdos, mas entende e aplica no dia a dia. Como engenheiro, sei o 
              valor de uma base sólida para o futuro, e aqui ele está construindo exatamente isso!
            </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Ricardo Lima</h2>
          <p class="text-gray-500">Pai do Miguel</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial"
            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="${secondFather}">
          <p class="leading-relaxed">
            Meu filho está entrando na adolescência e eu queria que ele tivesse uma formação que o ajudasse a crescer 
            com valores fortes. A Logosofia trouxe esse diferencial. Percebo que ele está mais consciente das suas escolhas 
            e aprendendo a lidar melhor com desafios e responsabilidades.
          </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Carlos Mendes</h2>
          <p class="text-gray-500">Pai do Pedro</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="text-gray-600 body-font" id="cta">
  <div class="container px-5 py-24 mx-auto"
    x-data="{ 
      isOpen: false, 
      highlightedIndex: null, 
      selectedOption: null, 
      options: [
        { label: 'Belo Horizonte - Funcionários', value: 1, href: 'https://docs.google.com/forms/d/e/1FAIpQLSf4bq2FjyAhP4geBbPB4NyrDc7z_eQym9QJ45JVzu6W-KcJrA/viewform' },
        { label: 'Belo Horizonte - Cidade Nova', value: 2, href: 'https://wa.me/553134829850?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20me%20matricular%20no%20Col%C3%A9gio%20Logos%C3%B3fico' },
        { label: 'Brasília', value: 3, href: 'https://wa.me/556133264205?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20me%20matricular%20no%20Col%C3%A9gio%20Logos%C3%B3fico' },
        { label: 'Chapecó', value: 4, href: 'https://wa.me/554933233847?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20me%20matricular%20no%20Col%C3%A9gio%20Logos%C3%B3fico' },
        { label: 'Florianópolis', value: 5, href: 'https://wa.me/554832047932?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20me%20matricular%20no%20Col%C3%A9gio%20Logos%C3%B3fico' },
        { label: 'Goiânia', value: 6, href: 'https://matriculaonline.escolarmanageronline.com.br/colegiologosofico/Autenticacao/Login?ReturnUrl=%2Fcolegiologosofico' },
        { label: 'Rio de Janeiro', value: 7, href: 'https://wa.me/5521993194178?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20me%20matricular%20no%20Col%C3%A9gio%20Logos%C3%B3fico' },
        { label: 'Uberlândia', value: 8, href: 'https://wa.me/5534997811130?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20me%20matricular%20no%20Col%C3%A9gio%20Logos%C3%B3fico' },
      ],
      placeholder: 'Selecione sua unidade'
    }">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Dê o Primeiro Passo para uma Educação Transformadora!
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Escolha a unidade mais próxima e inicie agora o processo de matrícula. Um futuro de conhecimento e 
        evolução começa com uma simples decisão!
      </p>
    </div>
    <div class="flex flex-col w-full justify-center items-center">
      <div class="w-full md:w-1/2">
        <div class="relative mt-2" @click="isOpen = !isOpen">
          <button type="button"
            class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <span class="block truncate" x-text="selectedOption ? options.find(option => option.value === selectedOption.value).label : placeholder"></span>
            </span>

            <ul x-show="isOpen" @click.away="isOpen = false" x-transition
              class="absolute z-10 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm"
              tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3"
              style="top: 100%; left: 0;">

              <template x-for="(option, index) in options" :key="option.value">
                <li class="relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none"
                  role="option" 
                  @mouseenter="highlightedIndex = index" 
                  @mouseleave="highlightedIndex = null"
                  @click.stop="selectedOption = option; isOpen = false"
                  :class="{
                    'bg-indigo-600 text-white outline-hidden': highlightedIndex === index,
                    'text-gray-900': highlightedIndex !== index,
                    'font-semibold': selectedOption?.value === option.value,
                    'font-normal': selectedOption?.value !== option.value
                }">
                  <div class="flex items-center">
                    <span class="ml-3 block truncate font-normal" x-text="option.label"></span>
                  </div>

                  <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
                    x-show="selectedOption?.value === option.value" :class="{
                    'text-white': highlightedIndex === index,
                    'text-indigo-600': highlightedIndex !== index
                }">
                    <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </li>
              </template>
            </ul>

            <svg class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" width="16"
              height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.41426 5.03572L2.41424 5.03574L2.41706 5.03849L7.76706 10.2635L8.00107 10.492L8.234 10.2624L13.584 4.98738L13.584 4.98738L13.5857 4.98572C13.6805 4.89089 13.8194 4.8909 13.9143 4.98572C14.0088 5.08027 14.0091 5.21867 13.9151 5.31348C13.9148 5.31376 13.9145 5.31404 13.9143 5.31432L8.16634 10.9623L8.16633 10.9622L8.16426 10.9643C8.06795 11.0606 8.02309 11.0667 7.99996 11.0667C7.94104 11.0667 7.88999 11.0522 7.82022 10.9991L2.08484 5.36348C1.99084 5.26868 1.99112 5.13027 2.08567 5.03572C2.18049 4.9409 2.31944 4.9409 2.41426 5.03572Z"
                fill="#637381" stroke="#637381" stroke-width="0.666667" />
            </svg>

          </button>
        </div>
      </div>

      <a :href="selectedOption?.href" target="_blank"
        class="w-fit mt-4 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer">
        Avançar para a Matrícula  
      </a>
    </div>
  </div>
</section>

<!-- faq -->
<section class="text-gray-600 body-font">
  <div class="container px-5 py-16 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center mb-8 text-gray-900">
      Perguntas Frequentes
    </h1>

    <div x-data="{ selectedAccordionItem: 'one' }" class="w-full divide-y divide-neutral-300 overflow-hidden rounded-sm border border-neutral-300 bg-neutral-50/40 text-neutral-600">
        <div>
            <button id="controlsAccordionItemOne" type="button" class="flex w-full items-center justify-between gap-4 bg-neutral-50 p-4 text-left underline-offset-2 hover:bg-neutral-50/75 focus-visible:bg-neutral-50/75 focus-visible:underline focus-visible:outline-hidden" aria-controls="accordionItemOne" x-on:click="selectedAccordionItem = 'one'" x-bind:class="selectedAccordionItem === 'one' ? 'text-onSurfaceStrong font-bold'  : 'text-onSurface font-medium'" x-bind:aria-expanded="selectedAccordionItem === 'one' ? 'true' : 'false'">
                O que é educação logosófica?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor" class="size-5 shrink-0 transition" aria-hidden="true" x-bind:class="selectedAccordionItem === 'one'  ?  'rotate-180'  :  ''">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </button>
            <div x-cloak x-show="selectedAccordionItem === 'one'" id="accordionItemOne" role="region" aria-labelledby="controlsAccordionItemOne" x-collapse>
                <div class="p-4 text-sm sm:text-base text-pretty">
                    Método que desenvolve pensamento crítico e autoconhecimento, integrando razão, emoção e valores humanos. Foca na construção ativa do conhecimento pelo aluno.
                </div>
            </div>
        </div>
        <div>
            <button id="controlsAccordionItemTwo" type="button" class="flex w-full items-center justify-between gap-4 bg-neutral-50 p-4 text-left underline-offset-2 hover:bg-neutral-50/75 focus-visible:bg-neutral-50/75 focus-visible:underline focus-visible:outline-hidden" aria-controls="accordionItemTwo" x-on:click="selectedAccordionItem = 'two'" x-bind:class="selectedAccordionItem === 'two' ? 'text-onSurfaceStrong font-bold'  : 'text-onSurface font-medium'" x-bind:aria-expanded="selectedAccordionItem === 'two' ? 'true' : 'false'">
                Qual a diferença para o ensino tradicional?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor" class="size-5 shrink-0 transition" aria-hidden="true" x-bind:class="selectedAccordionItem === 'two'  ?  'rotate-180'  :  ''">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </button>
            <div x-cloak x-show="selectedAccordionItem === 'two'" id="accordionItemTwo" role="region" aria-labelledby="controlsAccordionItemTwo" x-collapse>
                <div class="p-4 text-sm sm:text-base text-pretty">
                    Vai além do conteúdo acadêmico, formando o aluno integralmente. Ensina a pensar, não só memorizar, com práticas de autogestão e convivência consciente.
                </div>
            </div>
        </div>
        <div>
            <button id="controlsAccordionItemThree" type="button" class="flex w-full items-center justify-between gap-4 bg-neutral-50 p-4 text-left underline-offset-2 hover:bg-neutral-50/75 focus-visible:bg-neutral-50/75 focus-visible:underline focus-visible:outline-hidden" aria-controls="accordionItemThree" x-on:click="selectedAccordionItem = 'three'" x-bind:class="selectedAccordionItem === 'three' ? 'text-onSurfaceStrong font-bold'  : 'text-onSurface font-medium'" x-bind:aria-expanded="selectedAccordionItem === 'three' ? 'true' : 'false'">
                Como prepara para os desafios atuais?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor" class="size-5 shrink-0 transition" aria-hidden="true" x-bind:class="selectedAccordionItem === 'three'  ?  'rotate-180'  :  ''">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </button>
            <div x-cloak x-show="selectedAccordionItem === 'three'" id="accordionItemThree" role="region" aria-labelledby="controlsAccordionItemThree" x-collapse>
                <div class="p-4 text-sm sm:text-base text-pretty">
                    Desenvolve autoconhecimento para lidar com pressões, ética colaborativa e projetos que conectam aprendizados à vida real.
                </div>
            </div>
        </div>
        <div>
            <button id="controlsAccordionItemFour" type="button" class="flex w-full items-center justify-between gap-4 bg-neutral-50 p-4 text-left underline-offset-2 hover:bg-neutral-50/75 focus-visible:bg-neutral-50/75 focus-visible:underline focus-visible:outline-hidden" aria-controls="accordionItemFour" x-on:click="selectedAccordionItem = 'four'" x-bind:class="selectedAccordionItem === 'four' ? 'text-onSurfaceStrong font-bold'  : 'text-onSurface font-medium'" x-bind:aria-expanded="selectedAccordionItem === 'four' ? 'true' : 'false'">
                Quais os resultados comprovados?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor" class="size-5 shrink-0 transition" aria-hidden="true" x-bind:class="selectedAccordionItem === 'four'  ?  'rotate-180'  :  ''">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </button>
            <div x-cloak x-show="selectedAccordionItem === 'four'" id="accordionItemFour" role="region" aria-labelledby="controlsAccordionItemFour" x-collapse>
                <div class="p-4 text-sm sm:text-base text-pretty">
                    Alunos mais autônomos, com habilidades socioemocionais desenvolvidas e aplicação prática dos conceitos em suas carreiras.
                </div>
            </div>
        </div>
        <div>
            <button id="controlsAccordionItemFive" type="button" class="flex w-full items-center justify-between gap-4 bg-neutral-50 p-4 text-left underline-offset-2 hover:bg-neutral-50/75 focus-visible:bg-neutral-50/75 focus-visible:underline focus-visible:outline-hidden" aria-controls="accordionItemFive" x-on:click="selectedAccordionItem = 'five'" x-bind:class="selectedAccordionItem === 'five' ? 'text-onSurfaceStrong font-bold'  : 'text-onSurface font-medium'" x-bind:aria-expanded="selectedAccordionItem === 'five' ? 'true' : 'false'">
                Como faço para me matricular?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor" class="size-5 shrink-0 transition" aria-hidden="true" x-bind:class="selectedAccordionItem === 'five'  ?  'rotate-180'  :  ''">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </button>
            <div x-cloak x-show="selectedAccordionItem === 'five'" id="accordionItemFive" role="region" aria-labelledby="controlsAccordionItemFive" x-collapse>
                <div class="p-4 text-sm sm:text-base text-pretty">
                    Selecione sua unidade no site. Unidades com matrícula online direcionam ao formulário. Caso contrário, um botão de WhatsApp conecta você diretamente à secretaria para orientações.
                </div>
            </div>
        </div>
    </div>
  </div>
</section>

<!-- footer -->
<footer class="text-gray-600 body-font">
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">
        © 2025 - Sistema Logosófico de Educação
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        by Heitor Carneiro
      </span>
    </div>
  </div>
</footer>

<script>
  function scrollToElement() {
      document.getElementById('cta').scrollIntoView({ behavior: "smooth" });
  }
</script>
`
