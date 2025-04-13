
function createFaq() {
  const faq = document.createElement('section');
  faq.className = 'text-gray-600 body-font';
  faq.innerHTML = `
      <!-- faq -->
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
  `;
  return faq;
}

export default createFaq;