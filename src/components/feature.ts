
function createFeature() {
  const feature = document.createElement('section');

  feature.className = 'text-gray-600 body-font';

  feature.innerHTML = `
      <!-- feature -->
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
  `
  return feature
}

export default createFeature