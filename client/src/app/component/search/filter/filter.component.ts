import { Component, OnInit } from '@angular/core';
import { Filter } from './filter';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  nationalities = [
    'afghan',
    'albanian',
    'algerian',
    'american',
    'andorran',
    'angolan',
    'antiguans',
    'argentinean',
    'armenian',
    'australian',
    'austrian',
    'azerbaijani',
    'bahamian',
    'bahraini',
    'bangladeshi',
    'barbadian',
    'barbudans',
    'batswana',
    'belarusian',
    'belgian',
    'belizean',
    'beninese',
    'bhutanese',
    'bolivian',
    'bosnian',
    'brazilian',
    'british',
    'bruneian',
    'bulgarian',
    'burkinabe',
    'burmese',
    'burundian',
    'cambodian',
    'cameroonian',
    'canadian',
    'cape verdean',
    'central african',
    'chilean',
    'chinese',
    'colombian',
    'comoran',
    'congolese',
    'costa rican',
    'croatian',
    'cuban',
    'cypriot',
    'danish',
    'djibouti',
    'dominican',
    'dutch',
    'east timorese',
    'ecuadorean',
    'egyptian',
    'emirian',
    'equatorial guinean',
    'eritrean',
    'estonian',
    'ethiopian',
    'fijian',
    'filipino',
    'finnish',
    'french',
    'gabonese',
    'gambian',
    'georgian',
    'german',
    'ghanaian',
    'greek',
    'grenadian',
    'guatemalan',
    'guinea-bissauan',
    'guinean',
    'guyanese',
    'haitian',
    'herzegovinian',
    'honduran',
    'hungarian',
    'icelander',
    'indian',
    'indonesian',
    'iranian',
    'iraqi',
    'irish',
    'israeli',
    'italian',
    'ivorian',
    'jamaican',
    'japanese',
    'jordanian',
    'kazakhstani',
    'kenyan',
    'kittian and nevisian',
    'kuwaiti',
    'kyrgyz',
    'laotian',
    'latvian',
    'lebanese',
    'liberian',
    'libyan',
    'liechtensteiner',
    'lithuanian',
    'luxembourger',
    'macedonian',
    'malagasy',
    'malawian',
    'malaysian',
    'maldivan',
    'malian',
    'maltese',
    'marshallese',
    'mauritanian',
    'mauritian',
    'mexican',
    'micronesian',
    'moldovan',
    'monacan',
    'mongolian',
    'moroccan',
    'mosotho',
    'motswana',
    'namibian',
    'nauruan',
    'nepalese',
    'new zealander',
    'ni-vanuatu',
    'nicaraguan',
    'nigerien',
    'north korean',
    'northern irish',
    'norwegian',
    'omani',
    'pakistani',
    'palauan',
    'panamanian',
    'papua new guinean',
    'paraguayan',
    'peruvian',
    'polish',
    'portuguese',
    'qatari',
    'romanian',
    'russian',
    'rwandan',
    'saint lucian',
    'salvadoran',
    'samoan',
    'san marinese',
    'sao tomean',
    'saudi',
    'scottish',
    'senegalese',
    'serbian',
    'seychellois',
    'sierra leonean',
    'singaporean',
    'slovakian',
    'slovenian',
    'solomon islander',
    'somali',
    'south african',
    'south korean',
    'spanish',
    'sri lankan',
    'sudanese',
    'surinamer',
    'swazi',
    'swedish',
    'swiss',
    'syrian',
    'taiwanese',
    'tajik',
    'tanzanian',
    'thai',
    'togolese',
    'tongan',
    'trinidadian or tobagonian',
    'tunisian',
    'turkish',
    'tuvaluan',
    'ugandan',
    'ukrainian',
    'uruguayan',
    'uzbekistani',
    'venezuelan',
    'vietnamese',
    'welsh',
    'yemenite',
    'zambian',
    'zimbabwean',
  ];
  ages = [
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
  ];
  filtred = new Filter('', '', '', '');
  cardss = [];
  clicked: { [key: number]: boolean } = {};

  constructor(private token: TokenStorageService, private http: HttpClient) {}
  currentUser = this.token.getUser();
  currentId = 0;

  ngOnInit(): void {
    //console.log('azerty',this.currentUser)
    this.getInfos();
    this.search();
  }

  getInfos() {
    this.http
      .post('https://mcec-server2.herokuapp.com/current_user', {
        email: this.currentUser.email,
      })
      .subscribe(
        (data: any) => {
          this.currentId = data.id;
        },
        (err) => console.log('error getting user infos!', err)
      );
  }
  search() {
    this.http.post<any>('https://mcec-server2.herokuapp.com/search', this.filtred)
    .subscribe(
      (data) => {
        this.cardss = data.rows;
      },
      (err) => console.log('error!', err)
    );
  }
  onSubmit() {
    this.search();
  }
  addFav(event: any, index: number) {
    this.http
      .post<any>('https://mcec-server2.herokuapp.com/add_favourite', {
        userId: this.currentId,
        favId: this.cardss[index].id,
      })
      .subscribe(
        (data) => {
          this.clicked[index] = true;
        },
        (err) => console.log('error is error!', err)
      );
  }
}
