
function createCta() {
  const cta = document.createElement('section');
  cta.className = 'text-gray-600 body-font';
  cta.id = 'cta';
  cta.innerHTML = `
    <!-- CTA -->
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
          placeholder: 'Selecione sua unidade',
          showError: false,
          handleMatriculaClick() {
            if (!this.selectedOption) {
              this.showError = true;
              return false;
            }

            this.showError = false; // Reset error if valid selection

            // Track the event
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
              'event': 'matricula_click',
              'selected_unit': this.selectedOption.label
            });

            // Redirect
            window.open(this.selectedOption.href, '_blank');
            return false;
          }
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

          <button id="apply-button" @click="handleMatriculaClick()"
            :class="{
              'w-fit mt-4 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-pointer': true,
              'bg-blue-500 hover:bg-blue-600': selectedOption,
              'bg-gray-400 cursor-not-allowed': !selectedOption
            }">
            Avançar para a Matrícula  
          </button>
          <p x-show="showError && !selectedOption" class="text-red-500 text-sm mt-1">
            Por favor, selecione uma unidade
          </p>
        </div>
      </div>
  `;
  return cta;
}

export default createCta;