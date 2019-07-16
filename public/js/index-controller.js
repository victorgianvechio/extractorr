angular.module('app')
.controller('index-controller', IndexController);

function IndexController($scope, $http) {

  /*$scope.noticias = `
  {
    "category": "notícia",
    "app": "xtractorr-v1",
    "services": [
      "Scan",
      "Scrap",
      "Understand"
    ]
  }`;*/

  $scope.noticias = `
  {
      "uuidXtract": "c8aa5bc88f52-c8662c-c8d11c-c8b084-c869f6c8e78dc8eff5",
      "title": "CITec-Marília marca presença em evento internacional",
      "linkPub": "http://www.inovamarilia.com.br/2018/06/04/citec-marilia-marca-presenca-em-evento-internacional/",
      "datePub": "4 de junho de 2018",
      "description": "Convite constata o protagonismo no Brasil, dos ambientes de inovação geridos pelo UNIVEM\n\nO Centro de Inovação Tecnológica de Marília (CITec-Marília), gerido pelo Centro Universitário Eurípides Soares da Rocha – UNIVEM, por meio do seu coordenador e dos cursos de Ciência da Computação e Sistemas de Informação e presidente da Asserti, Prof. Dr. Elvis Fusco, participou nesta semana da 5ª Feira Internacional de Comércio de Serviços da China que, nesta edição, realizou um total de vinte atividades incluindo o 5º Fórum de Abertura da CIFTIS – Cúpula Global de Comércio de Serviços, Fórum Internacional, Conferências da Indústria, Promoção e Conversas da Indústria, Atividades Temáticas de Países Estrangeiros, Regiões e Províncias. O evento aconteceu de 28 de maio a 1º de junho, no Centro Nacional de Convenções da China, em Pequim, e teve como foco promover a abertura, e integração da área de serviços. A Feira Internacional atraiu 120 países e regiões que participaram com exposições e conferências. Várias marcas sob o grupo Alibaba, incluindo Tmall, Hema, Cainiao, Aliexpress, Gaode, Aliyun e Ant Financial Services estiveram presentes no evento. Entre as exposições, o Alibaba New Retail foi um dos destaques. Segundo o porta-voz do Ministério do Comércio, Gao Feng, a importação e exportação da China se mantiveram estáveis, com um impulso de crescimento positivo. Ainda de acordo com ele, a expectativa é que essa tendência seja mantida. “Nos últimos anos, a importação e a exportação de serviços da China mantiveram um desenvolvimento estável e relativamente rápido, a estrutura comercial foi continuamente otimizada e a escala de importação e exportação em serviços permaneceu no segundo lugar no mundo por quatro anos consecutivos”, disse. Durante o primeiro trimestre deste ano, a economia nacional manteve sua estabilidade e o mercado de consumo teve um bom começo. A contínua expansão da população de renda média, o avanço da revitalização rural e a implementação em profundidade da redução da pobreza, foram fatores que sustentaram a economia. “Haverá amplo espaço de crescimento no consumo das famílias. Espera-se que o avanço da reforma estrutural ao lado da oferta e a implementação de políticas para expandir as importações aumentem continuamente a oferta efetiva do mercado e melhorem a oferta e a demanda. Enquanto isso, as novas tecnologias, continuamente emergentes, os novos padrões e novos tipos de negócios ajudarão a atualização consecutiva e a liberação adicional do potencial de consumo”, expressou Gao Feng. O Prof. Dr. Elvis Fusco, coordenador do CITec-Marília, explicou que o convite para representar os ambientes de inovação, empreendedorismo e tecnologia de Marília, geridos pelo Univem, partiu da Confederação Nacional de Serviços (CNS). “Esse convite de participação do CITec-Marília neste evento internacional é de extrema importância. Além de constatar o protagonismo dos nossos ambientes de inovação no país, possibilitou diversas agendas de encontros com entidades que, por meio de parcerias, provocará uma articulação com importantes ambientes de inovação no mundo. Iniciamos uma parceria com a Beijing B&R International Co-incubation (ICI), entidade que congrega uma rede de incubadoras em todo o mundo e mantém parceria com a Confederação Nacional de Serviços (CNS)”, destacou o coordenador do CITec-Marília, Elvis Fusco.\n\n \n\n \n\n \n\nCentro de Inovação Tecnológica de Marília representa o Brasil em evento internacional\n\n \n\nProf. Dr. Elvis Fusco, coordenador do CITec-Marília, durante apresentação dos ambientes de inovação no China National Convention Center",
      "categories": [
          "Notícias"
      ],
      "entities": [
          {
              "text": "Prof. Dr. Elvis Fusco",
              "relevance": 0.954695,
              "count": 3,
              "desctype": "Person"
          },
          {
              "text": "Gao Feng",
              "relevance": 0.779051,
              "count": 2,
              "desctype": "Person"
          },
          {
              "text": "Pequim",
              "relevance": 0.654238,
              "disambiguation": {
                  "subtype": [
                      "City"
                  ],
                  "name": "Pequim",
                  "dbpedia_resource": "http://dbpedia.org/resource/Pequim"
              },
              "count": 1,
              "desctype": "Location"
          },
          {
              "text": "Marília",
              "relevance": 0.601174,
              "disambiguation": {
                  "subtype": [
                      "CityTown",
                      "City"
                  ],
                  "name": "Marília",
                  "dbpedia_resource": "http://dbpedia.org/resource/Marília"
              },
              "count": 3,
              "desctype": "Location"
          },
          {
              "text": "Ant Financial Services",
              "relevance": 0.600583,
              "count": 1,
              "desctype": "Company"
          },
          {
              "text": "Ministério do Comércio",
              "relevance": 0.572698,
              "count": 1,
              "desctype": "Organization"
          },
          {
              "text": "Brasil",
              "relevance": 0.27559,
              "disambiguation": {
                  "subtype": [
                      "Country"
                  ]
              },
              "count": 2,
              "desctype": "Location"
          }
      ],
      "concepts": [
          {
              "text": "Tecnologia",
              "relevance": 0.982451,
              "dbpedia_resource": "http://pt.dbpedia.org/resource/Tecnologia"
          },
          {
              "text": "Ciência da computação",
              "relevance": 0.976479,
              "dbpedia_resource": "http://pt.dbpedia.org/resource/Ciência_da_computação"
          },
          {
              "text": "Economia",
              "relevance": 0.957595,
              "dbpedia_resource": "http://pt.dbpedia.org/resource/Economia"
          }
      ]
  }`;

  $scope.eventos = `
  {
    "category": "evento",
    "app": "xtractorr-v1",
    "services": [
      "Scan",
      "Scrap",
      "Understand"
    ]
  }`;

  $scope.editais = `
  {
    "category": "edital",
    "app": "xtractorr-v1",
    "services": [
      "Scan",
      "Scrap",
      "Understand"
    ]
  }`;

  $scope.todas = `
  {
    "category": "noticias",
    "app": "xtractorr-v1",
    "services": [
      "Scan",
      "Scrap",
      "Understand"
    ]
  }`;

  $scope.xtractNoticia = function () {

    $http.get('//localhost:3000/api/v1/xtractorr/xtract-noticia').
    then(function (response){
      $scope.noticias = JSON.stringify(response.data, undefined, 4);
    },function (error){
      $scope.noticias = error;
    });
  }

  $scope.xtractEvento = function () {

    $http.get('//localhost:3000/api/v1/xtractorr/xtract-evento').
    then(function (response){
      $scope.eventos = JSON.stringify(response.data, undefined, 4);
    },function (error){
      $scope.eventos = error;
    });
  }

  $scope.xtractEdital = function () {

    $http.get('//localhost:3000/api/v1/xtractorr/xtract-edital').
    then(function (response){
      console.log('entrou!');
      $scope.editais = JSON.stringify(response.data, undefined, 4);
      console.log('terminou!');
    },function (error){
      $scope.editais = error;
    });
  }

  $scope.xtractAll = function () {

    $http.get('//localhost:3000/api/v1/xtractorr/xtract').
    then(function (response){
      console.log('entrou!');
      $scope.todas = JSON.stringify(response.data, undefined, 4);
      console.log('terminou!');
    },function (error){
      $scope.todas = error;
    });
  }
}
