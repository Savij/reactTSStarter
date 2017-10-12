﻿interface StringMap {
    [shortName: string]: string;
}

const Countries: StringMap = {
    ['US']: 'UNITED STATES',
    ['GB']: 'UNITED KINGDOM',
    ['CA']: 'CANADA',
    ['AU']: 'AUSTRALIA',
    ['AF']: 'AFGHANISTAN',
    ['AX']: 'ALAND ISLANDS',
    ['AL']: 'ALBANIA',
    ['DZ']: 'ALGERIA',
    ['AS']: 'AMERICAN SAMOA',
    ['AD']: 'ANDORRA',
    ['AO']: 'ANGOLA',
    ['AI']: 'ANGUILLA',
    ['AQ']: 'ANTARCTICA',
    ['AG']: 'ANTIGUA / BARBUDA',
    ['AR']: 'ARGENTINA',
    ['AM']: 'ARMENIA',
    ['AW']: 'ARUBA',
    ['AT']: 'AUSTRIA',
    ['AZ']: 'AZERBAIJAN',
    ['BS']: 'BAHAMAS',
    ['BH']: 'BAHRAIN',
    ['BD']: 'BANGLADESH',
    ['BB']: 'BARBADOS',
    ['BY']: 'BELARUS',
    ['BE']: 'BELGIUM',
    ['BZ']: 'BELIZE',
    ['BJ']: 'BENIN',
    ['BM']: 'BERMUDA',
    ['BT']: 'BHUTAN',
    ['BO']: 'BOLIVIA',
    ['BA']: 'BOSNIA / HERZEGOVINA',
    ['BW']: 'BOTSWANA',
    ['BV']: 'BOUVET ISLAND',
    ['BR']: 'BRAZIL',
    ['IO']: 'BRITISH INDIAN OCEAN',
    ['BN']: 'BRUNEI DARUSSALAM',
    ['BG']: 'BULGARIA',
    ['BF']: 'BURKINA FASO',
    ['BI']: 'BURUNDI',
    ['KH']: 'CAMBODIA',
    ['CM']: 'CAMEROON',
    ['CV']: 'CAPE VERDE',
    ['KY']: 'CAYMAN ISLANDS',
    ['CF']: 'CENTRAL AFRICAN REPUB',
    ['TD']: 'CHAD',
    ['CL']: 'CHILE',
    ['CN']: 'CHINA',
    ['CX']: 'CHRISTMAS ISLAND',
    ['CC']: 'COCOS(KEELING) ISLANDS',
    ['CO']: 'COLOMBIA',
    ['KM']: 'COMOROS',
    ['CG']: 'CONGO',
    ['CD']: 'CONGO, DEMOCRATIC REPUB',
    ['CK']: 'COOK ISLANDS',
    ['CR']: 'COSTA RICA',
    ['CI']: "COTE D'IVOIRE",
    ['HR']: 'CROATIA',
    ['CU']: 'CUBA',
    ['CY']: 'CYPRUS',
    ['CZ']: 'CZECH REPUBLIC',
    ['DK']: 'DENMARK',
    ['DJ']: 'DJIBOUTI',
    ['DM']: 'DOMINICA',
    ['DO']: 'DOMINICAN REPUBLIC',
    ['EC']: 'ECUADOR',
    ['EG']: 'EGYPT',
    ['SV']: 'EL SALVADOR',
    ['GQ']: 'EQUATORIAL GUINEA',
    ['ER']: 'ERITREA',
    ['EE']: 'ESTONIA',
    ['ET']: 'ETHIOPIA',
    ['FK']: 'FALKLAND ISLANDS',
    ['FO']: 'FAROE ISLANDS',
    ['FJ']: 'FIJI',
    ['FI']: 'FINLAND',
    ['FR']: 'FRANCE',
    ['GF']: 'FRENCH GUIANA',
    ['PF']: 'FRENCH POLYNESIA',
    ['TF']: 'FRENCH SOUTH TERRITORIES',
    ['GA']: 'GABON',
    ['GM']: 'GAMBIA',
    ['GE']: 'GEORGIA',
    ['DE']: 'GERMANY',
    ['GH']: 'GHANA',
    ['GI']: 'GIBRALTAR',
    ['GR']: 'GREECE',
    ['GL']: 'GREENLAND',
    ['GD']: 'GRENADA',
    ['GP']: 'GUADELOUPE',
    ['GU']: 'GUAM',
    ['GT']: 'GUATEMALA',
    ['GG']: 'GUERNSEY',
    ['GN']: 'GUINEA',
    ['GW']: 'GUINEA - BISSAU',
    ['GY']: 'GUYANA',
    ['HT']: 'HAITI',
    ['HM']: 'HEARD ISLAND',
    ['HN']: 'HONDURAS',
    ['HK']: 'HONG KONG',
    ['HU']: 'HUNGARY',
    ['IS']: 'ICELAND',
    ['IN']: 'INDIA',
    ['ID']: 'INDONESIA',
    ['IR']: 'IRAN',
    ['IQ']: 'IRAQ',
    ['IE']: 'IRELAND',
    ['IM']: 'ISLE OF MAN',
    ['IL']: 'ISRAEL',
    ['IT']: 'ITALY',
    ['JM']: 'JAMAICA',
    ['JP']: 'JAPAN',
    ['JE']: 'JERSEY',
    ['JO']: 'JORDAN',
    ['KZ']: 'KAZAKHSTAN',
    ['KE']: 'KENYA',
    ['KI']: 'KIRIBATI',
    ['KP']: 'KOREA(NORTH)',
    ['KR']: 'KOREA(SOUTH)',
    ['KW']: 'KUWAIT',
    ['KG']: 'KYRGYZSTAN',
    ['LA']: 'LAO',
    ['LV']: 'LATVIA',
    ['LB']: 'LEBANON',
    ['LS']: 'LESOTHO',
    ['LR']: 'LIBERIA',
    ['LY']: 'LIBYAN ARAB JAMAHIRIYA',
    ['LI']: 'LIECHTENSTEIN',
    ['LT']: 'LITHUANIA',
    ['LU']: 'LUXEMBOURG',
    ['MO']: 'MACAO',
    ['MK']: 'MACEDONIA',
    ['MG']: 'MADAGASCAR',
    ['MW']: 'MALAWI',
    ['MY']: 'MALAYSIA',
    ['MV']: 'MALDIVES',
    ['ML']: 'MALI',
    ['MT']: 'MALTA',
    ['MH']: 'MARSHALL ISLANDS',
    ['MQ']: 'MARTINIQUE',
    ['MR']: 'MAURITANIA',
    ['MU']: 'MAURITIUS',
    ['YT']: 'MAYOTTE',
    ['MX']: 'MEXICO',
    ['FM']: 'MICRONESIA',
    ['MD']: 'MOLDOVA',
    ['MC']: 'MONACO',
    ['MN']: 'MONGOLIA',
    ['ME']: 'MONTENEGRO',
    ['MS']: 'MONTSERRAT',
    ['MA']: 'MOROCCO',
    ['MZ']: 'MOZAMBIQUE',
    ['MM']: 'MYANMAR',
    ['NA']: 'NAMIBIA',
    ['NR']: 'NAURU',
    ['NP']: 'NEPAL',
    ['NL']: 'NETHERLANDS',
    ['AN']: 'NETHERLANDS ANTILLES',
    ['NC']: 'NEW CALEDONIA',
    ['NZ']: 'NEW ZEALAND',
    ['NI']: 'NICARAGUA',
    ['NE']: 'NIGER',
    ['NG']: 'NIGERIA',
    ['NU']: 'NIUE',
    ['NF']: 'NORFOLK ISLAND',
    ['MP']: 'NORTH MARIANA ISLANDS',
    ['NO']: 'NORWAY',
    ['OM']: 'OMAN',
    ['PK']: 'PAKISTAN',
    ['PW']: 'PALAU',
    ['PS']: 'PALESTINIAN TERRITORY',
    ['PA']: 'PANAMA',
    ['PG']: 'PAPUA NEW GUINEA',
    ['PY']: 'PARAGUAY',
    ['PE']: 'PERU',
    ['PH']: 'PHILIPPINES',
    ['PN']: 'PITCAIRN',
    ['PL']: 'POLAND',
    ['PT']: 'PORTUGAL',
    ['PR']: 'PUERTO RICO',
    ['QA']: 'QATAR',
    ['RE']: 'REUNION',
    ['RO']: 'ROMANIA',
    ['RU']: 'RUSSIAN FEDERATION',
    ['RW']: 'RWANDA',
    ['BL']: 'SAINT BARTHÉLEMY',
    ['SH']: 'SAINT HELENA',
    ['KN']: 'SAINT KITTS AND NEVIS',
    ['LC']: 'SAINT LUCIA',
    ['MF']: 'SAINT MARTIN',
    ['PM']: 'SAINT PIERRE / MIQUELON',
    ['VC']: 'SAINT VINCENT / GRENADINES',
    ['WS']: 'SAMOA',
    ['SM']: 'SAN MARINO',
    ['ST']: 'SAO TOME AND PRINCIPE',
    ['SA']: 'SAUDI ARABIA',
    ['SN']: 'SENEGAL',
    ['RS']: 'SERBIA',
    ['SC']: 'SEYCHELLES',
    ['SL']: 'SIERRA LEONE',
    ['SG']: 'SINGAPORE',
    ['SK']: 'SLOVAKIA',
    ['SI']: 'SLOVENIA',
    ['SB']: 'SOLOMON ISLANDS',
    ['SO']: 'SOMALIA',
    ['ZA']: 'SOUTH AFRICA',
    ['GS']: 'SOUTH SANDWICH ISLANDS',
    ['ES']: 'SPAIN',
    ['LK']: 'SRI LANKA',
    ['SD']: 'SUDAN',
    ['SR']: 'SURINAME',
    ['SJ']: 'SVALBARD / JAN MAYEN',
    ['SZ']: 'SWAZILAND',
    ['SE']: 'SWEDEN',
    ['CH']: 'SWITZERLAND',
    ['SY']: 'SYRIAN ARAB REPUBLIC',
    ['TW']: 'TAIWAN, PROVINCE OF CHINA',
    ['TJ']: 'TAJIKISTAN',
    ['TZ']: 'TANZANIA',
    ['TH']: 'THAILAND',
    ['TL']: 'TIMOR - LESTE',
    ['TG']: 'TOGO',
    ['TK']: 'TOKELAU',
    ['TO']: 'TONGA',
    ['TT']: 'TRINIDAD / TOBAGO',
    ['TN']: 'TUNISIA',
    ['TR']: 'TURKEY',
    ['TM']: 'TURKMENISTAN',
    ['TC']: 'TURKS AND CAICOS',
    ['TV']: 'TUVALU',
    ['UG']: 'UGANDA',
    ['UA']: 'UKRAINE',
    ['AE']: 'UNITED ARAB EMIRATES',
    ['UM']: 'U.S.MINOR OUTLYING',
    ['UY']: 'URUGUAY',
    ['UZ']: 'UZBEKISTAN',
    ['VU']: 'VANUATU',
    ['VA']: 'VATICAN CITY STATE',
    ['VE']: 'VENEZUELA',
    ['VN']: 'VIET NAM',
    ['VG']: 'VIRGIN ISLANDS, BRITISH',
    ['VI']: 'VIRGIN ISLANDS, U.S.',
    ['WF']: 'WALLIS AND FUTUNA',
    ['EH']: 'WESTERN SAHARA',
    ['YE']: 'YEMEN',
    ['ZM']: 'ZAMBIA',
    ['ZW']: 'ZIMBABWE'
};

export default Countries;