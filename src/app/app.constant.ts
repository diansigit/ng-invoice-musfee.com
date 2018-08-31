import { environment } from '../environments/environment';

export const BASE_API_URL = environment.apiUrl;

export const COURSE_TYPE = {
  PACK: 'reguler',
  PRIVATE: 'private',
  TRYOUT: 'tryout',
  TEST: 'test'
};
export const COURSE_TYPE_OPTS = [
  { label: 'Reguler', value: COURSE_TYPE.PACK },
  { label: 'Privat', value: COURSE_TYPE.PRIVATE },
  { label: 'Tryout', value: COURSE_TYPE.TRYOUT },
  { label: 'Ujian', value: COURSE_TYPE.TEST }
];

export const COURSE_CHARGE_TYPE = {
  MONTH: 'month',
  SESSION: 'session'
};
export const COURSE_CHARGE_TYPE_OPTS = [
  { label: 'Bulan', value: COURSE_CHARGE_TYPE.MONTH },
  { label: 'Sesi', value: COURSE_CHARGE_TYPE.SESSION }
];

export const DAYS = {
  SENIN: 'senin',
  SELASA: 'selasa',
  RABU: 'rabu',
  KAMIS: 'kamis',
  JUMAT: 'jumat',
  SABTU: 'sabtu',
  AHAD: 'ahad'
};
export const DAY_OPTS = [
  { label: 'Senin', value: DAYS.SENIN },
  { label: 'Selasa', value: DAYS.SELASA },
  { label: 'Rabu', value: DAYS.RABU },
  { label: 'Kamis', value: DAYS.KAMIS },
  { label: 'Jum\'at', value: DAYS.JUMAT },
  { label: 'Sabtu', value: DAYS.SABTU },
  { label: 'Ahad', value: DAYS.AHAD }
];

export const CLASS_GRADE_OPTS = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 }
];

export const ROLE = {
  ADMIN: 'admin',
  OWNER: 'owner',
  STUDENT: 'student',
  TENTOR: 'tentor'
};
export const ROLE_OPTS = [
  { label: 'Administrator', value: ROLE.ADMIN },
  { label: 'Pemilik', value: ROLE.OWNER },
  { label: 'Siswa', value: ROLE.STUDENT },
  { label: 'Tentor', value: ROLE.TENTOR }
];

export const MENU = [
  {
    'title'	: 'Produk',
    'icon'	: 'fa fa-id-card',
    'link'	: ['/product'],
    'roles'	: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  },
  {
    'title'	: 'Report',
    'icon'	: 'fa fa-file-text-o',
    'link'	: ['/report'],
    'roles'	: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  },
  {
    'title'	: 'Pengaturan',
    'icon'	: 'fa fa-cogs',
    'link'	: ['/setting'],
    'roles'	: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
];
