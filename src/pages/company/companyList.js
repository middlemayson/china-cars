import imgLogoGelly from '../../img/logo/company/Geely.png';
import imgLogoChery from '../../img/logo/company/Chery_new.png';
import imgLogoJac from '../../img/logo/company/jac_group.png';
import imgLogoGWM from '../../img/logo/company/gwm.png';
import imgLogoBaic from '../../img/logo/company/BAIC.png';
import imgLogoByd from '../../img/logo/company/BYD.png';
import imgLogoDfm from '../../img/logo/company/dfm.png';
import imgLogoFaw from '../../img/logo/company/FAW_Group.png';
import imgLogoGac from '../../img/logo/company/GAC_Group.png';
import imgLogoZx from '../../img/logo/company/ZX_AUTO.png';
import imgLogoYutong from '../../img/logo/company/Yutong.png';
import imgLogoSaic from '../../img/logo/company/SAIC-Motor.png';
import imgLogoChangan from '../../img/logo/company/Changan.png';
import imgLogoLi from '../../img/logo/company/Li_Auto.png';


import impPhotoGelly from '../../img/logo/brands/AstonMartin.png';



const companyList = [
    {
        title: 'SAIC Motor',
        logo: imgLogoSaic,
        photo: impPhotoGelly,
        desc: `Shanghai Automotive Industry Corporation (Шанхайская автомобильная промышленная корпорация) - государственный производитель автомобилей со штаб-квартирой 
        в Аньтинге, Шанхай. Основан в 1955 году и в настоящее время является крупнейшим производителем авто в Китае.`,
        brands: '',
        ident: 0
    },
    {
        title: 'FAW Group',
        logo: imgLogoFaw,
        photo: impPhotoGelly,
        desc: `China FAW Group Corporation Limited - Государственный производитель автомобилей со штаб-квартирой в Чанчуне провинции Цзилинь. 
        Основан 15 июля 1953 года и в настоящее время является вторым производителем Китая. Первый выпущенный автомобиль сделан на основе ЗИС-150. 
        Название FAW расшифровывается как First Automobile Works (Первый автомобильный завод)`,
        brands: '',
        ident: 1
    },
    {
        title: 'Dongfeng Motor Corporation',
        logo: imgLogoDfm,
        photo: impPhotoGelly,
        desc: `Dongfeng Motor Corporation Ltd. - Государственный производитель автомобилей со штаб-квартирой в Ухане, Хубэй. Компания основана в 1969 году, в настоящее время является третьим 
        по величине производителем авто в Китае. DongFeng («ДунФэн») в переводе с китайского означает «Восточный ветер».`,
        brands: '',
        ident: 2
    },
    {
        title: 'Changan Automobile',
        logo: imgLogoChangan,
        photo: impPhotoGelly,
        desc: `Государственный производитель автомобилей со штаб-квартирой в Цзянбэй, Чунцин. Основан в 1862 году, это старейший производитель автомобилей в Китае.
         В настоящее время занимает четвертое место в Китае по производству автомобилей.`,
        brands: '',
        ident: 3
    },
    {
        title: 'Zhejiang Geely Holding Group',
        logo: imgLogoGelly,
        photo: impPhotoGelly,
        desc: `«Чжэцзян Цзили Холдинг Груп» — многопрофильная группа, созданная в 1986 году. Штаб-квартира расположена в городе Ханчжоу в провинции Чжэцзян. 
        В списке крупнейших компаний мира Fortune Global 500 за 2022 год заняла 229-е место. Владельцем группы является китайский миллиардер Ли Шуфу.`,
        brands: '',
        ident: 4
    },
    {
        title: 'Chery Automobile',
        logo: imgLogoChery,
        photo: impPhotoGelly,
        desc: `Государственный производитель автомобилей со штаб-квартирой в Уху, Аньхой , Китай. Основанная в 1997 году, она в настоящее время является 
        девятым по величине производителем автомобилей в Китае. «Чери», с китайского данный бренд переводится, как «Удача» или «Особое благословение», 
        что соответствует транскрипции «Ци Жуй».`,
        brands: '',
        ident: 5
    },
    {
        title: 'JAC Motors',
        logo: imgLogoJac,
        photo: impPhotoGelly,
        desc: `Anhui Jianghuai Automobile Group Corp., Ltd. — производитель автомобилей и коммерческих автомобилей.
        Компания находится в Хэфэе, провинция Аньхой, Китай.`,
        brands: '',
        ident: 6
    },
    {
        title: 'Great Wall Motor',
        logo: imgLogoGWM,
        photo: impPhotoGelly,
        desc: `Частный производитель автомобилей со штаб-квартирой в Баодине, Хэбэй. Основана в 1984 году и в настоящее время является восьмым по величине
        производителем автомобилей в Китае с объемом продаж 1,281 миллиона в 2021 году.`,
        brands: '',
        ident: 7
    },
    {
        title: 'BAIC Group',
        logo: imgLogoBaic,
        photo: impPhotoGelly,
        desc: `Beijing Automotive Industry Holding Co. Ltd. -  государственный производитель автомобилей со штаб-квартирой в Шуньи, Пекин.
        Основана в 1958 году и является шестым по величине производителем автомобилей в Китае с объемом продаж 1,723 миллиона в 2021 году.`,
        brands: '',
        ident: 8
    },
    {
        title: 'BYD Company',
        logo: imgLogoByd,
        photo: impPhotoGelly,
        desc: `Публичная китайская многонациональная производственная компания- конгломерат со штаб-квартирой в Шэньчжэне, провинция Гуандун, Китай.
        Основана в феврале 1995 года. Название «BYD» представляет собой инициалы китайского названия компании Biyadi, которое само по себе 
        было создано из оригинального товарного знака компании Yadi Electronics и Символ B был добавлен для удобства, чтобы дать компании преимущество 
        в алфавитном порядке на выставках. Сейчас компания расшифровывает название как Build Your Dreams - «построй свои мечты».`,
        brands: '',
        ident: 9
    },
    {
        title: 'GAC Group',
        logo: imgLogoGac,
        photo: impPhotoGelly,
        desc: `Guangzhou Automobile Group - государственный производитель автомобилей со штаб-квартирой в Гуанчжоу, провинция Гуандун. 
        Основан в 1954 году и в настоящее время является пятым по величине производителем автомобилей в Китае с объемом продаж 2,144 миллиона в 2021 году.`,
        brands: '',
        ident: 10
    },
    {
        title: 'Yutong',
        logo: imgLogoYutong,
        photo: impPhotoGelly,
        desc: `Zhengzhou Yutong Group Co., Ltd. - производитель коммерческих автомобилей, особенно электрических автобусов, со штаб-квартирой в Чжэнчжоу, провинция Хэнань.
        По состоянию на 2016 год был крупнейший производитель автобусов в мире по объему продаж.`,
        brands: '',
        ident: 11
    },
    {
        title: 'ZX Auto',
        logo: imgLogoZx,
        photo: impPhotoGelly,
        desc: `Hebei Zhongxing Automobile Co Ltd - производитель внедорожников и пикапов. Компания основана в 1999 году и экспортирует свою продукцию на Ближний Восток, 
        в Юго-Восточную Азию, в Африку, а также в Центральную и Южную Америку.`,
        brands: '',
        ident: 12
    },
    {
        title: 'Li Auto',
        logo: imgLogoLi,
        photo: impPhotoGelly,
        desc: `Производитель электромобилей со штаб-квартирой в Пекине и производственными мощностями в Чанчжоу. Основанн Ли Сяном в 2015 году. 
        С китайского 理想 переводится как идеал`,
        brands: '',
        ident: 13
    }
];

export {companyList}