

import ImgLogoCompanies from '../../components/imgList/ImgLogoCompanies';
import ImgPhotoCompanies from '../../components/imgList/ImgPhotoCompanies';
import ImgLogoBrands from '../../components/imgList/ImgLogoBrands';
import ImgPhotoBrands from '../../components/imgList/ImgPhotoBrands';

const companyList = [
    {
        title: 'SAIC Motor',
        logo: ImgLogoCompanies.imgLogoSaic,
        photo: ImgPhotoCompanies.imgPhotoSaic,
        desc: `Shanghai Automotive Industry Corporation (Шанхайская автомобильная промышленная корпорация) - государственный производитель автомобилей со штаб-квартирой 
        в Аньтинге, Шанхай. Основан в 1955 году и в настоящее время является крупнейшим производителем авто в Китае.`,
        brands: [
            {
                title: 'IM',
                desc: 'Совместное предприятие по производству электромобилей SAIC Motor и компаний Zhangjiang Hi-Tech и Alibaba Group.',
              
                linkDetails: 'https://ru.wikipedia.org/wiki/IM_Motors',
                imgLogo: ImgLogoBrands.imgLogoIm,
                imgCar: ImgPhotoBrands.imgPhotoIm
            },
            {
                title: 'MG',
                desc: 'Старейший английский автопроизодитель, бренд которого выкупили у BMW.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/MG_Cars',
                imgLogo: ImgLogoBrands.imgLogoMG,
                imgCar: ImgPhotoBrands.imgPhotoMG
            },
            {
                title: 'Rising Auto',
                desc: 'Компания Rising Auto была основана в 2020 году. До октября 2021 года компания называлась Roewe R, а позднее была переименована в Feifan. Чтобы дать букве R осмысленное название, компания получила название Rising Auto.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Rising_Auto',
                imgLogo: ImgLogoBrands.imgLogoRising,
                imgCar: ImgPhotoBrands.imgPhotoRising
            },
            {
                title: 'Roewe',
                desc: 'Автомобили Roewe изначально были основаны на технологии, приобретенной у несуществующего британского автопроизводителя MG Rover. SAIC не смогла приобрести права на торговую марку Rover и создала марку Roewe в качестве замены.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Roewe',
                imgLogo: ImgLogoBrands.imgLogoRoewe,
                imgCar: ImgPhotoBrands.imgPhotoRoewe
            },
            {
                title: 'Maxus',
                desc: 'Бренд Maxus произошел от модели LDV Maxus британского производителя коммерческих автомобилей LDV Group после приобретения интеллектуальной собственности LDV компанией SAIC в 2010 году.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Maxus',
                imgLogo: ImgLogoBrands.imgLogoMaxus,
                imgCar: ImgPhotoBrands.imgPhotoMaxus
            },
            {
                title: 'Baojun',
                desc: 'Торговая марка бюджетных автомобилей из Китая. Создана в 2010 году совместным предприятием SAIC-GM-Wuling Automobile.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Baojun',
                imgLogo: ImgLogoBrands.imgLogoBaojun,
                imgCar: ImgPhotoBrands.imgPhotoBaojun
            },
            {
                title: 'Hongyan',
                desc: 'Китайская компания по производству грузовых автомобилей. SAIC, Iveco и Chongqing Hongyan сотрудничают в рамках компании.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/SAIC_Hongyan',
                imgLogo: ImgLogoBrands.imgLogoHongyan,
                imgCar: ImgPhotoBrands.imgPhotoHongyan
            },
            {
                title: 'Sunwin',
                desc: 'Подразделение SAIC по производству автобусов, троллейбусов и электробусов. До 2018 года сотрудничали с VolvoBus.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Sunwin',
                imgLogo: ImgLogoBrands.imgLogoSunwin,
                imgCar: ImgPhotoBrands.imgPhotoSunwin
            },
            {
                title: 'Nanjing Automobile',
                desc: 'Старейший автопроизводитель в этой стране. Владеет исключительными правами на международное использование наименований автомобильных марок Austin, MG, Vanden Plas и ряда других. С 2007 года принадлежит SAIC Motor.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Nanjing_Automobile',
                imgLogo: ImgLogoBrands.imgLogoNAC,
                imgCar: ImgPhotoBrands.imgPhotoNAC
            },
            {
                title: 'SAIC-GM',
                desc: 'Совместное предприятие General Motors Company и SAIC Motor, которое производит и продает автомобили марок Chevrolet, Buick и Cadillac в материковом Китае.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/MG_Cars',
                imgLogo: ImgLogoBrands.imgLogoGm,
                imgCar: ImgPhotoBrands.imgPhotoGm
            },
            {
                title: 'SAIC Volkswagen',
                desc: 'Совместное предприятие SAIC Motor и Volkswagen Group. Основано в 1984 году и производит автомобили марок Volkswagen, Škoda и Audi.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/SAIC_Volkswagen',
                imgLogo: ImgLogoBrands.imgLogoVw,
                imgCar: ImgPhotoBrands.imgPhotoVw
            }
        ],
        ident: 0
    },
    {
        title: 'FAW Group',
        logo: ImgLogoCompanies.imgLogoFaw,
        photo: ImgPhotoCompanies.imgPhotoFaw,
        desc: `China FAW Group Corporation Limited - Государственный производитель автомобилей со штаб-квартирой в Чанчуне провинции Цзилинь. 
        Основан 15 июля 1953 года и в настоящее время является вторым производителем Китая. Первый выпущенный автомобиль сделан на основе ЗИС-150. 
        Название FAW расшифровывается как First Automobile Works (Первый автомобильный завод)`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 1
    },
    {
        title: 'Dongfeng Motor Corporation',
        logo: ImgLogoCompanies.imgLogoDfm,
        photo: ImgPhotoCompanies.imgPhotoDfm,
        desc: `Dongfeng Motor Corporation Ltd. - Государственный производитель автомобилей со штаб-квартирой в Ухане, Хубэй. Компания основана в 1969 году, в настоящее время является третьим 
        по величине производителем авто в Китае. DongFeng («ДунФэн») в переводе с китайского означает «Восточный ветер».`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 2
    },
    {
        title: 'Changan Automobile',
        logo: ImgLogoCompanies.imgLogoChangan,
        photo: ImgPhotoCompanies.imgPhotoChangan,
        desc: `Государственный производитель автомобилей со штаб-квартирой в Цзянбэй, Чунцин. Основан в 1862 году, это старейший производитель автомобилей в Китае.
         В настоящее время занимает четвертое место в Китае по производству автомобилей.`,
         brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 3
    },
    {
        title: 'Zhejiang Geely Holding Group',
        logo: ImgLogoCompanies.imgLogoGelly,
        photo: ImgPhotoCompanies.imgPhotoGelly,
        desc: `«Чжэцзян Цзили Холдинг Груп» — многопрофильная группа, созданная в 1986 году. Штаб-квартира расположена в городе Ханчжоу в провинции Чжэцзян. 
        В списке крупнейших компаний мира Fortune Global 500 за 2022 год заняла 229-е место. Владельцем группы является китайский миллиардер Ли Шуфу.`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 4
    },
    {
        title: 'Chery Automobile',
        logo: ImgLogoCompanies.imgLogoChery,
        photo: ImgPhotoCompanies.imgPhotoChery,
        desc: `Государственный производитель автомобилей со штаб-квартирой в Уху, Аньхой , Китай. Основанная в 1997 году, она в настоящее время является 
        девятым по величине производителем автомобилей в Китае. «Чери», с китайского данный бренд переводится, как «Удача» или «Особое благословение», 
        что соответствует транскрипции «Ци Жуй».`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 5
    },
    {
        title: 'JAC Motors',
        logo: ImgLogoCompanies.imgLogoJac,
        photo: ImgPhotoCompanies.imgPhotoJac,
        desc: `Anhui Jianghuai Automobile Group Corp., Ltd. — производитель автомобилей и коммерческих автомобилей.
        Компания находится в Хэфэе, провинция Аньхой, Китай.`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 6
    },
    {
        title: 'Great Wall Motor',
        logo: ImgLogoCompanies.imgLogoGWM,
        photo: ImgPhotoCompanies.imgPhotoGWM,
        desc: `Частный производитель автомобилей со штаб-квартирой в Баодине, Хэбэй. Основана в 1984 году и в настоящее время является восьмым по величине
        производителем автомобилей в Китае с объемом продаж 1,281 миллиона в 2021 году.`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 7
    },
    {
        title: 'BAIC Group',
        logo: ImgLogoCompanies.imgLogoBaic,
        photo: ImgPhotoCompanies.imgPhotoBaic,
        desc: `Beijing Automotive Industry Holding Co. Ltd. -  государственный производитель автомобилей со штаб-квартирой в Шуньи, Пекин.
        Основана в 1958 году и является шестым по величине производителем автомобилей в Китае с объемом продаж 1,723 миллиона в 2021 году.`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 8
    },
    {
        title: 'BYD Company',
        logo: ImgLogoCompanies.imgLogoByd,
        photo: ImgPhotoCompanies.imgPhotoByd,
        desc: `Публичная китайская многонациональная производственная компания- конгломерат со штаб-квартирой в Шэньчжэне, провинция Гуандун, Китай.
        Основана в феврале 1995 года. Название «BYD» представляет собой инициалы китайского названия компании Biyadi, которое само по себе 
        было создано из оригинального товарного знака компании Yadi Electronics и Символ B был добавлен для удобства, чтобы дать компании преимущество 
        в алфавитном порядке на выставках. Сейчас компания расшифровывает название как Build Your Dreams - «построй свои мечты».`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 9
    },
    {
        title: 'GAC Group',
        logo: ImgLogoCompanies.imgLogoGac,
        photo: ImgPhotoCompanies.imgPhotoGac,
        desc: `Guangzhou Automobile Group - государственный производитель автомобилей со штаб-квартирой в Гуанчжоу, провинция Гуандун. 
        Основан в 1954 году и в настоящее время является пятым по величине производителем автомобилей в Китае с объемом продаж 2,144 миллиона в 2021 году.`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 10
    },
    {
        title: 'Yutong',
        logo: ImgLogoCompanies.imgLogoYutong,
        photo: ImgPhotoCompanies.imgPhotoYutong,
        desc: `Zhengzhou Yutong Group Co., Ltd. - производитель коммерческих автомобилей, особенно электрических автобусов, со штаб-квартирой в Чжэнчжоу, провинция Хэнань.
        По состоянию на 2016 год был крупнейший производитель автобусов в мире по объему продаж.`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 11
    },
    {
        title: 'ZX Auto',
        logo: ImgLogoCompanies.imgLogoZx,
        photo: ImgPhotoCompanies.imgPhotoZx,
        desc: `Hebei Zhongxing Automobile Co Ltd - производитель внедорожников и пикапов. Компания основана в 1999 году и экспортирует свою продукцию на Ближний Восток, 
        в Юго-Восточную Азию, в Африку, а также в Центральную и Южную Америку.`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoBrands.imgLogoIm,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 12
    },
    {
        title: 'Li Auto',
        logo: ImgLogoCompanies.imgLogoLi,
        photo: ImgPhotoCompanies.imgPhotoLi,
        desc: `Производитель электромобилей со штаб-квартирой в Пекине и производственными мощностями в Чанчжоу. Основанн Ли Сяном в 2015 году. 
        С китайского 理想 переводится как идеал`,
        brands: [
            {
              title: 'Aston Martin',
              desc: '17% акций компании',
              linkDiller: '#!',
              linkDetails: '#!',
              imgLogo: ImgLogoCompanies.imgLogoLi,
              imgCar: ImgPhotoCompanies.imgPhotoSaic
            }
        ],
        ident: 13
    }
];

export {companyList}