export const YEAR_OF_BIRTH_OPTIONS = (() => {
  const currentYear = new Date().getFullYear();
  const years = [];
  let startYear = currentYear - 120;
  while (startYear < currentYear) {
    startYear += 1;

    years.push({ value: startYear, label: startYear });
  }
  return years.reverse();
})();

export const COPPA_COMPLIANCE_YEAR = (() => {
  const currentYear = new Date().getFullYear();
  return currentYear - 13;
})();

export const EDUCATION_LEVELS = [
  '',
  'p',
  'm',
  'b',
  'a',
  'hs',
  'jhs',
  'el',
  'none',
  'other',
];

export const GENDER_OPTIONS = [
  '',
  'f',
  'm',
  'o',
];
export const WORK_EXPERIENCE_OPTIONS = [
  '',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10+',

];

export const COUNTRY_WITH_STATES = ['US', 'CA'];

export const TRANSIFEX_LANGUAGE_BASE_URL = 'https://www.transifex.com/open-edx/edx-platform/language/';

export const COUNTRY_STATES_MAP = {
  CA: [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Québec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' },
  ],
  US: [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'AA', label: 'Armed Forces Americas' },
    { value: 'AE', label: 'Armed Forces Europe' },
    { value: 'AP', label: 'Armed Forces Pacific' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ],
};

export function getStatesList(country) {
  return country && COUNTRY_STATES_MAP[country.toUpperCase()];
}

export function getCountryMarkets(country) {
  return country && REGION_MARKETS_MAP[country.toUpperCase()];
}



export const REGION_MARKETS_MAP = {
  AU: [
      { value: '36', label: 'Australia - Melbourne' },
      { value: '39', label: 'Australia - Sydney' },
  ],
  CA: [
      { value: '40', label: 'Canada - Toronto' },
      { value: '47', label: 'Canada - Vancouver' },
  ],
  FR: [
      { value: '35', label: 'France - Paris' },
  ],
  NL: [
    { value: '43', label: 'Netherlands - Amsterdam' },
  ],
  GB: [
    { value: '29', label: 'UK - London' },
  ],
  DE: [
    { value: '115', label: 'Germany' },
  ],
  JP: [
      { value: '92', label: 'Japan - Fukuoka' },
      { value: '64', label: 'Japan - Osaka' },
      { value: '79', label: 'Japan - Nagoya' },
      { value: '44', label: 'Japan - Tokyo' },
  ],
  US: [
      { value: '120', label: 'Alabama' },
      { value: '122', label: 'Arkansas' },
      { value: '23', label: 'Atlanta' },
      { value: '60', label: 'Austin' },
      { value: '46', label: 'Baltimore' },
      { value: '102', label: 'Boise' },
      { value: '10', label: 'Boston' },
      { value: '61', label: 'Charlotte' },
      { value: '14', label: 'Chicago' },
      { value: '34', label: 'Connecticut' },
      { value: '22', label: 'Dallas' },
      { value: '27', label: 'Denver' },
      { value: '24', label: 'Detroit' },
      { value: '826', label: 'Houston' },
      { value: '58', label: 'Indianapolis' },
      { value: '116', label: 'Kentucky' },
      { value: '13', label: 'Los Angeles' },
      { value: '117', label: 'Louisiana' },
      { value: '33', label: 'Miami' },
      { value: '20', label: 'Minneapolis' },
      { value: '118', label: 'Mississippi' },
      { value: '807', label: 'Moline' },
      { value: '30', label: 'New Jersey' },
      { value: '11', label: 'New York City' },
      { value: '51', label: 'Northern Virginia' },
      { value: '32', label: 'Ohio' },
      { value: '119', label: 'Oklahoma' },
      { value: '19', label: 'Orange County' },
      { value: '72', label: 'Orlando' },
      { value: '121', label: 'Pensacola, FL' },
      { value: '18', label: 'Philadelphia' },
      { value: '31', label: 'Phoenix' },
      { value: '41', label: 'Portland, OR' },
      { value: '73', label: 'Providence' },
      { value: '803', label: 'Raleigh/Durham' },
      { value: '78', label: 'Richmond' },
      { value: '16', label: 'San Diego' },
      { value: '12', label: 'San Francisco' },
      { value: '17', label: 'Seattle' },
      { value: '15', label: 'Silicon Valley' },
      { value: '37', label: 'St. Louis' },
      { value: '68', label: 'Tampa' },
      { value: '63', label: 'Tennessee' },
      { value: '25', label: 'Washington, DC' },
      { value: '881', label: 'Wisconsin' },
  ],
}

export const SUBSCRIBE_JOBS = [
  {
    value: true,
    label: 'yes',
  },
  {
    value: false,
    label: 'no',
  }
]

export const DECLINED = 'declined';
export const SELF_DESCRIBE = 'self-describe';
export const OTHER = 'other';
