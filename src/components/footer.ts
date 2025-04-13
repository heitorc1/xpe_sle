
function createFooter() {
  const footer = document.createElement('footer');

  footer.className = 'text-gray-600 body-font';

  footer.innerHTML = `
      <!-- footer -->
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
  `;

  return footer;
}

export default createFooter;