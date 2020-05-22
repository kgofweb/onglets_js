const onglets = document.querySelectorAll('.onglets');
const content = document.querySelectorAll('.content');

let index = 0;

// onglets.forEach(onglets => onglets.addEventListener('click', changeNavigation));

// function changeNavigation () {
//       onglets.forEach(onglets => onglets.classList.remove('active'));
//       this.classList.add('active');
// }

onglets.forEach(onglet => {
      onglet.addEventListener('click', () => {
            if(onglet.classList.contains('active')) {
                  return; 
            }
            else {
                  onglet.classList.add('active');
            }

            index = onglet.getAttribute('data-index');

            for (i = 0; i < onglets.length; i++) {

                  if (onglets[i].getAttribute('data-index') != index) {
                        onglets[i].classList.remove('active');
                  }
            }

            for (j=0; j < content.length; j++) {

                  if(content[j].getAttribute('data-index') == index) {
                        content[j].classList.add('activeContent');
                  }
                  else {
                        content[j].classList.remove('activeContent');
                  }
            }
      });
});