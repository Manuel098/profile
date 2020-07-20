import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  presentation = 'Hola, mi nombre es José Manuel Valdéz González soy desarrollador de software con afinidad en el desarrollo backend ' +
    'en los Frameworks de laravel y Node Express con algo de experiencia en Django, destacando a su vez en el desarrollo de sistemas web ' +
    'con los Frameworks de Angular, React y VueJs así como en el desarrollo de sistemas móviles con Flutter, Ionic y ReactNative.';

  lenguajes = 'El lenguaje con el que más he practicado es JavaScript así como TypeScript dado a que' +
    '  los he empliado de mayor manera tanto para desarrollo web como móvil, mientras que lenguajes como Dart los he ' +
    'empezado a emplear por curiosidad a la forma de programación que conllevan como el caso del patrón de diseño BLOC en el' +
    ' caso del desarrollo móvil con Dart, además tengo conocimientos en otros lenguajes como Python, C# o Java.';

  plataform = 'Algunas de las plataformas con las que pueden llegar a conocerme de una mejor forma son:';

  metodologias = 'He empleado SCRUM como metodología ágil para el desarrollo de software así como la elaboración de prototipos ' +
  'con la herramienta de AdobeXD, además del uso de herramientas como Microsoft Visio y Lucidchart para la elaboración de modelos ' +
  'de bases de Datos además de plasmar como es la relación entre usuarios asignando roles y permisos.';

  redes = [
    {
      url: 'https://www.linkedin.com/in/manuelvaldez21',
      imgUrl: 'https://1000marcas.net/wp-content/uploads/2020/01/LinkedIn-Logo.png',
      tooltip: 'Linkedin'
    }, {
      url: 'https://github.com/Manuel098/',
      imgUrl: 'https://miro.medium.com/max/1125/1*wotzQboYWAfaj-7bvGNIkQ.png',
      tooltip: 'Github'
    }, {
      url: 'https://www.hackerrank.com/manuelvaldez8642',
      imgUrl: 'https://www.modeloff.com/wp-content/uploads/2017/11/hackerrank.png',
      tooltip: 'Hackerrank'
    }, {
      url: 'https://www.udemy.com/user/jose-manuel-valdez-gonzalez/',
      imgUrl: 'https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png',
      tooltip: 'Necesita una cuenta de Udemy para ver el contenido'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
