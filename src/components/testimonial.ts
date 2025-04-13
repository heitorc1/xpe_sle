import firstFather from '../assets/images/father-1.webp'
import secondFather from '../assets/images/father-2.webp'
import mother from '../assets/images/mother-1.webp'

function createTestimonial() {
  const testimonial = document.createElement('section');

  testimonial.className = 'text-gray-600 body-font';

  testimonial.innerHTML = `
      <!-- testimonial -->
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img loading="lazy" alt="female person"
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
              <img loading="lazy" alt="male person"
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
              <img loading="lazy" alt="male person"
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
  `

  return testimonial
}

export default createTestimonial