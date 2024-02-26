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
                title: 'FAW',
                desc: 'Под своим брендом производят коммерческий и легковой транспорт.',
                linkDiller: 'https://www.faw-kaz.kz/ru/cars',
                linkDetails: 'https://ru.wikipedia.org/wiki/First_Automotive_Works',
                imgLogo: ImgLogoCompanies.imgLogoFaw,
                imgCar: ImgPhotoBrands.imgPhotoFaw
            },
            {
                title: 'FAW-Volkswagen',
                desc: 'Совместное предприятие FAW Group и Volkswagen Group , которое производит легковые автомобили марок Audi и Volkswagen для продажи в Китае. В том числе под маркой Jetta.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/FAW-Volkswagen',
                imgLogo: ImgLogoBrands.imgLogoFawVw,
                imgCar: ImgPhotoBrands.imgPhotoFawJetta
            },
            {
                title: 'Hongqi',
                desc: 'Марка автомобилей класса люкс, принадлежащая автопроизводителю FAW Group. Компания Hongqi была запущена в 1958 году. Первые модели делали на базе Chrysler Imperial, Ауди 100, Линкольна. Читается «Хончи», в переводе с китайского - «Красное знамя».',
                linkDiller: 'https://hongqi-auto.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Hongqi',
                imgLogo: ImgLogoBrands.imgLogoHongqi,
                imgCar: ImgPhotoBrands.imgPhotoHongqi
            },
            {
                title: 'Jiefang',
                desc: 'Крупнейший производитель тяжелых грузовиков в Китае. Основана в 2003 году и насчитывает более 22 000 сотрудников, производящих более 500 различных моделей грузовиков грузоподъемностью 5–30 тонн.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/FAW_Jiefang',
                imgLogo: ImgLogoBrands.imgLogoJiefang,
                imgCar: ImgPhotoBrands.imgPhotoJiefang
            }
            ,
            {
                title: 'Bestune',
                desc: 'Первой моделью компании в 2006 году стала Besturn B70 на базе Mazda 6. В 2023 году АВТОВАЗ планировал выпускать модель Bestune T77 под маркой Lada X-Cross 5',
                linkDiller: 'https://bestune.kz/',
                linkDetails: 'https://en.wikipedia.org/wiki/FAW_Jiefang',
                imgLogo: ImgLogoBrands.imgLogoJBestune,
                imgCar: ImgPhotoBrands.imgPhotoBestune
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
                title: 'Dongfeng',
                desc: 'Автомобили выпускаемые под брендом Dongfeng.',
                linkDiller: 'https://virazh.kz/dongfeng/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Dongfeng',
                imgLogo: ImgLogoCompanies.imgLogoDfm,
                imgCar: ImgPhotoBrands.imgPhotoDf
            },
            {
                title: 'Forthing',
                desc: 'Производит легковые автомобили и минивэны. Первый автомобиль бренда появился в 2001 году под названием «Fengxing».',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Forthing',
                imgLogo: ImgLogoBrands.imgLogoForthing,
                imgCar: ImgPhotoBrands.imgPhotoForthing
            },
            {
                title: 'Aeolus',
                desc: 'Бренд был запущен в июле 2009 года под названием Fengshen, а позже был переименован в Aeolus в качестве английского названия, тогда как китайское название осталось прежним. Производит легковые автомобили.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Aeolus_(marque)',
                imgLogo: ImgLogoBrands.imgLogoAeolus,
                imgCar: ImgPhotoBrands.imgPhotoAeolus
            },
            {
                title: 'Voyah',
                desc: 'Премиальное подразделение, а также одноимённая серия электромобилей. Базируется на выпуске гибридных и аккумуляторных электромобилей. Основан в 2020 году.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Voyah',
                imgLogo: ImgLogoBrands.imgLogoVoyah,
                imgCar: ImgPhotoBrands.imgPhotoVoyah
            },
            {
                title: 'Mengshi',
                desc: 'Семейство военных внедорожников с колёсной формулой 4×4, разработанных компанией Dongfeng Motor Corpartion. Первые поколения автомобиля были построены на импортном шасси Hummer H1.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Dongfeng_Mengshi',
                imgLogo: ImgLogoBrands.imgLogoMengshi,
                imgCar: ImgPhotoBrands.imgPhotoMengshi
            },
            {
                title: 'Dongfeng Honda',
                desc: 'Совместное предприятие между Dongfeng и Honda, основанное в июле 2003 года. Компания продаёт автомобили под марками Honda и Ciimo.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Dongfeng_Honda',
                imgLogo: ImgLogoBrands.imgLogoHonda,
                imgCar: ImgPhotoBrands.imgPhotoDFHonda
            },
            {
                title: 'Dongfeng Nissan',
                desc: 'Совместное предприятие между Dongfeng Motor Group и Nissan Motors.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Dongfeng_Nissan',
                imgLogo: ImgLogoBrands.imgLogoNissan,
                imgCar: ImgPhotoBrands.imgPhotoDFNissan
            },
            {
                title: 'Venucia',
                desc: 'Подразделение компаний Dongfeng и Nissan, основанное в сентябре 2010 года.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Venucia',
                imgLogo: ImgLogoBrands.imgLogoVenucia,
                imgCar: ImgPhotoBrands.imgPhotoDFVenucia
            },
            {
                title: 'Dongfeng Fengdu',
                desc: 'Бренд Fengdu запущен во время Шанхайского автосалона 2013 года, является суббрендом Zhengzhou Nissan, дочерней компании Dongfeng Automobile.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Dongfeng_Fengdu',
                imgLogo: ImgLogoCompanies.imgLogoDfm,
                imgCar: ImgPhotoBrands.imgPhotoDFFengdu
            },
            {
                title: 'Dongfeng Peugeot-Citroën',
                desc: 'Совместное предприятие Dongfeng Motor Corporation и Stellantis (известному как PSA Peugeot Citroën). Компания расположена в Ухане, столице провинции Хубэй и производит модели Peugeot и Citroën для продажи в Китае.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Dongfeng_Peugeot-Citro%C3%ABn',
                imgLogo: ImgLogoBrands.imgLogoPeugeotCitroën,
                imgCar: ImgPhotoBrands.imgPhotoPeugeotCitroën
            },
            {
                title: 'Dongfeng Junfeng',
                desc: 'Бренд компании Zhengzhou Nissan Automobile, дочерней компанией Dongfeng Motor.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Dongfeng_Peugeot-Citro%C3%ABn',
                imgLogo: ImgLogoBrands.imgLogoJunfeng,
                imgCar: ImgPhotoBrands.imgPhotoPeugeotJunfeng

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
                title: 'Changan',
                desc: 'Бренд для легковых автомобилей. Слово «Changan» состоит из двух китайских иероглифов: «Chang» (长) и «an» (安), в совокупности переводящихся как «надёжность, проверенная временем». В соответствии с правилами китайско-русской транскрипции, по-русски это название читается «Чанъань», однако чаще произносят в английском прочтении "Ченгэ́н". Так же есть альтернативная форма прочтения "Чангáн".',
                linkDiller: 'https://changan-auto.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Changan',
                imgLogo: ImgLogoCompanies.imgLogoChangan,
                imgCar: ImgPhotoBrands.imgPhotoChangan
            },
            {
                title: 'Oshan',
                desc: 'Марка легковых автомобилей компании Changan Automobile. Название бренда «Oshan» было вдохновлено одной из моделей MPV Oushang.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Oshan_(marque)',
                imgLogo: ImgLogoBrands.imgLogoOshan,
                imgCar: ImgPhotoBrands.imgPhotoOshan
            },
            {
                title: 'Deepal',
                desc: 'Известен под названием Shenlan. Компания по производству электромобилей, принадлежащая Changan Automobile. Первоначально компания носила название Chongqing Changan New Energy Automobile Technology и была основана в 2018 году, а с 2023 года стала независимым брендом.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Deepal',
                imgLogo: ImgLogoBrands.imgLogoDeepal,
                imgCar: ImgPhotoBrands.imgPhotoDeepal
            },
            {
                title: 'Kaicene',
                desc: 'Марка легковых автомобилей. Копию модели Changan Kaicene F70 производит Peugeot под моделью Landtrek.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Changan_Automobile#Brands_and_products',
                imgLogo: ImgLogoCompanies.imgLogoChangan,
                imgCar: ImgPhotoBrands.imgPhotoKaicene
            },
            {
                title: 'Avatr Technology',
                desc: 'Премиальное подразделение Changan, а также одноимённая серия электромобилей данной торговой марки. Базируется на выпуске аккумуляторных электромобилей. Она принадлежит совместному предприятию Changan, CATL и Huawei. В Казахстан официально не поставляется.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Avatr_Technology',
                imgLogo: ImgLogoBrands.imgLogoAvatr,
                imgCar: ImgPhotoBrands.imgPhotoAvatr
            },
            {
                title: 'Changan Mazda',
                desc: 'Совместное предприятие Changan и Mazda, основанное в декабре 2012 года. Основной деятельностью компании является производство автомобилей Mazda для китайского рынка.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Changan_Mazda',
                imgLogo: ImgLogoBrands.imgLogoMazda,
                imgCar: ImgPhotoBrands.imgPhotoMazda
            },
            {
                title: 'Changan Ford',
                desc: 'Совместное предприятие Changan и Ford (50 на 50), основанное в 2012 году. Выпускает автомобили Ford и Lincoln для рынка Китая.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Changan_Ford',
                imgLogo: ImgLogoBrands.imgLogoFord,
                imgCar: ImgPhotoBrands.imgPhotoFord
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
                title: 'Geely Automobile',
                desc: 'Бренд по производству автомобилей. Производственные мощности Geely насчитывают 11 заводов, способных в сумме выпускать 1,95 млн автомобилей в год. Все они расположены в Китае.',
                linkDiller: 'https://geely.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Zeekr',
                imgLogo: ImgLogoBrands.imgLogoGeely,
                imgCar: ImgPhotoBrands.imgPhotoGeely
            },
            {
                title: 'Aston Martin',
                desc: 'В сентябре 2022 года Geely приобрела 7,6% акций Aston Martin. В мае 2023 года Geely увеличила свою долю до 17%.',

                linkDetails: 'https://en.wikipedia.org/wiki/Geely#International_investments_and_holdings',
                imgLogo: ImgLogoBrands.imgLogoAstonMartin,
                imgCar: ImgPhotoBrands.imgPhotoAstonMartin
            },
            {
                title: 'Mercedes-Benz Group',
                desc: 'Основатель и председатель правления Geely, приобрел 9,69% акций Mercedes-Benz Group в феврале 2018 года, став крупнейшим акционером компании.',
                linkDiller: 'https://mercedes-benz.com.kz/',
                linkDetails: 'https://en.wikipedia.org/wiki/Geely#International_investments_and_holdings',
                imgLogo: ImgLogoBrands.imgLogoMB,
                imgCar: ImgPhotoBrands.imgPhotoMB
            },
            {
                title: 'Volvo Cars',
                desc: 'C 2010 года компания принадлежит холдингу Geely.',

                linkDetails: 'https://ru.wikipedia.org/wiki/Volvo_Cars',
                imgLogo: ImgLogoBrands.imgLogoVolvo,
                imgCar: ImgPhotoBrands.imgPhotoVolvo
            },
            {
                title: 'Renault Korea Motors',
                desc: 'Контрольный пакет акций (52,9%) компании принадлежит французской Renault а 34% принадлежат китайской Geely. Остальные 13,1% Samsung. Выпускают автомобили под маркой Renault Samsung.',

                linkDetails: 'https://ru.wikipedia.org/wiki/Renault_Korea_Motors',
                imgLogo: ImgLogoBrands.imgLogoRenaultKorea,
                imgCar: ImgPhotoBrands.imgPhotoRenaultKorea
            },
            {
                title: 'Lotus Cars',
                desc: 'В октябре 2017 года 51% акций компании Lotus Cars приобрёл китайский концерн Zhejiang Geely Holding Group',

                linkDetails: 'https://ru.wikipedia.org/wiki/Renault_Korea_Motors',
                imgLogo: ImgLogoBrands.imgLogoLotus,
                imgCar: ImgPhotoBrands.imgPhotoLotus
            },
            {
                title: 'Zeekr',
                desc: 'Премиальное подразделение китайской компании Zhejiang Geely Holding Group, а также одноимённая серия электромобилей данной торговой марки. Основана в марте 2021 года. По одной версии, название бренда произошло от поколения Z и понятия geek, по другой - первые две буквы названия Zeekr образованы от слов «zero emission» («нулевой выброс»), в третьей букве зашифровано послание Electric-Evolution-Era, а окончание «kr» — это обозначение криптона, благородного газа без цвета, вкуса и запаха, название которого с греческого языка переводится как «скрытый» или «секретный».',
                linkDiller: 'https://official.zeekr-kostanay.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Zeekr',
                imgLogo: ImgLogoBrands.imgLogoZeekr,
                imgCar: ImgPhotoBrands.imgPhotoZeekr
            },
            {
                title: 'Smart',
                desc: 'Марка автомобилей особо малого класса, выпускаемых одноимённой компанией, принадлежащей совместному предприятию Mercedes-Benz Group и Zhejiang Geely Holding Group.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Smart_(%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%80%D0%BA%D0%B0)',
                imgLogo: ImgLogoBrands.imgLogoSmart,
                imgCar: ImgPhotoBrands.imgPhotoSmart
            },
            {
                title: 'Proton Edar Sdr Holding',
                desc: 'Крупнейший малайзийский национальный производитель автомобилей. Изначально модели создавались путём модернизации автомобилей Mitsubishi. Со второй половины 1990-х годов компания разрабатывает и оригинальные модели. 49,9% принадлежит Zhejiang Geely Holding Group и 50,1% — DRB-Hicom, а управляется Geely Auto Group.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Proton_Edar_Sdr_Holding',
                imgLogo: ImgLogoBrands.imgLogoProton,
                imgCar: ImgPhotoBrands.imgPhotoProton
            },
            {
                title: 'Livan Automotive',
                desc: 'Совместное предприятие китайских компаний Geely и Lifan.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Livan_Automotive',
                imgLogo: ImgLogoBrands.imgLogoLivan,
                imgCar: ImgPhotoBrands.imgPhotoLivan
            },
            {
                title: 'Lynk & Co',
                desc: 'Китайско-шведский автомобильный бренд на базе технологий, разработанных совместно Volvo Cars и Geely Auto. Основан в Гётеборге в 2016 году.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Lynk_%26_Co',
                imgLogo: ImgLogoBrands.imgLogoLynk,
                imgCar: ImgPhotoBrands.imgPhotoLynk
            },
            {
                title: 'London Electric Vehicle Company',
                desc: 'Британский производитель электромобилей со штаб-квартирой в Ансти близ Ковентри (Англия), стопроцентное дочернее предприятие китайского автопроизводителя Geely. Компания занимается производством знаменитых лондонских такси черного цвета.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/London_Electric_Vehicle_Company',
                imgLogo: ImgLogoBrands.imgLogoLEVC,
                imgCar: ImgPhotoBrands.imgPhotoLEVC
            },
            {
                title: 'Polestar',
                desc: 'Шведский автомобильный бренд, основанный в 1996 году как Flash Engineering. Позже компания была переименована в Polestar Racing, а затем приобретена в 2015 году компанией Volvo Cars, которую в свою очередь приобрела Geely.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/London_Electric_Vehicle_Company',
                imgLogo: ImgLogoBrands.imgLogoPolestar,
                imgCar: ImgPhotoBrands.imgPhotoPolestar
            },
            {
                title: 'Farizon',
                desc: 'Бренд занимающийся выпуском коммерческого транспорта.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Geely#Farizon',
                imgLogo: ImgLogoBrands.imgLogoFarizon,
                imgCar: ImgPhotoBrands.imgPhotoFarizon
            },
            {
                title: 'Ji Yue / Jidu Auto',
                desc: 'Совместное предприятие между Geely и Baidu. Основано в марте 2021 года.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Jidu_Auto',
                imgLogo: ImgLogoBrands.imgLogoJidu,
                imgCar: ImgPhotoBrands.imgPhotoJidu
            },
            {
                title: 'Geely Geometry',
                desc: 'Подразделение Geely, а также одноимённая серия электромобилей данной торговой марки, основанная в апреле 2019 года.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Geely_Geometry',
                imgLogo: ImgLogoBrands.imgLogoGeometry,
                imgCar: ImgPhotoBrands.imgPhotoGeometry
            },
            {
                title: 'Radar',
                desc: 'Бренд пикапов Geely, название которого означает Rational, Alone, Discovery, Accompany и Romantic.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Geely_Galaxy',
                imgLogo: ImgLogoBrands.imgLogoRadar,
                imgCar: ImgPhotoBrands.imgPhotoRadar
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
                title: 'Exeed',
                desc: 'Автомобильное подразделение внедорожников премиум-класса, представленное Chery Automobile в сентябре 2017 года.',
                linkDiller: 'https://exeed.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Exeed',
                imgLogo: ImgLogoBrands.imgLogoExeed,
                imgCar: ImgPhotoBrands.imgPhotoExeed
            },
            {
                title: 'Omoda',
                desc: 'Подразделение Chery, основанное в 2022 году. На многих рынках автомобили продаются под названием Chery, а на некоторых рынках Omoda позиционируется как премиальное подразделение. В иерархии бренд расположен между Chery и Exeed. Буква «О» в слове «Omoda» происходит от обозначения кислорода, а «Moda» означает «современный».',
                linkDiller: 'https://omoda-auto.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Omoda',
                imgLogo: ImgLogoBrands.imgLogoOmoda,
                imgCar: ImgPhotoBrands.imgPhotoOmoda
            },
            {
                title: 'Jetour',
                desc: 'Отдельный бренд Chery созданный в январе 2018 года. Название бренда состоит из комбинации английских слов JET («реактивный самолет») и TOUR («путешествие»).',
                linkDiller: 'https://jetour-auto.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Jetour',
                imgLogo: ImgLogoBrands.imgLogoJetour,
                imgCar: ImgPhotoBrands.imgPhotoJetour
            },
            {
                title: 'Cowin',
                desc: 'Cowin Auto (официальное наименование Yibin Kaiyi (Cowin) Automobile) - подразделение Chery, основанное в 2014 году. В январе 2024 года Kaiyi (Cowin) запустила продажи автомобилей на маркетплейсе Ozon.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Kaiyi',
                imgLogo: ImgLogoBrands.imgLogoCowin,
                imgCar: ImgPhotoBrands.imgPhotoCowin
            },
            {
                title: 'Karry',
                desc: 'Подразделение Chery, основанное в 2009 году и специализирующиеся на производстве легких коммерческих автомобилей и легковых автомобилей для пассажирских перевозок.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Karry',
                imgLogo: ImgLogoBrands.imgLogoKarry,
                imgCar: ImgPhotoBrands.imgPhotoKarry
            },
            {
                title: 'Qoros',
                desc: 'Была основана как совместное предприятие Chery и Israel Corporation в декабре 2007 года под названием Chery Quantum Automotive Corporation (CQAC). В ноябре 2011 года название было изменено на Qoros Auto Co., Ltd. В декабре 2017 года Baoneng Group приобрела 51 процент акций Qoros за 6,6 млрд юаней.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Qoros',
                imgLogo: ImgLogoBrands.imgLogoQoros,
                imgCar: ImgPhotoBrands.imgPhotoQoros
            },
            {
                title: 'Chery Jaguar Land Rover',
                desc: 'Автомобильная производственная компания со штаб-квартирой в Чаншу, Китай. Совместное предприятие 50/50 между компанией Jaguar Land Rover. Создана для того, чтобы разрешить производство автомобилей Jaguar Cars и Land Rover в материковом Китае.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/Chery_Jaguar_Land_Rover',
                imgLogo: ImgLogoBrands.imgLogoCheryJagLand,
                imgCar: ImgPhotoBrands.imgPhotoCheryJagLand
            },
            {
                title: 'Chery',
                desc: 'Бренд для выпуска автомобилей от компании Chery Automobile',
                linkDiller: 'https://chery-kostanay.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Chery_Automobile',
                imgLogo: ImgLogoCompanies.imgLogoChery,
                imgCar: ImgPhotoBrands.imgPhotoChery
            },
            {
                title: 'Jaecoo',
                desc: 'Подразделение Chery Automobile. Предназначается для экспорта внедорожников и кроссоверов в Европу, Россию, Малайзию, на Ближний Восток (в том числе Казахстан) и Южную Африку. Название произошло от немецкого слова Jäger (охотник) и английского Cool.',
                linkDiller: 'https://jaecoo-auto.kz/index.html',
                linkDetails: 'https://ru.wikipedia.org/wiki/Jaecoo',
                imgLogo: ImgLogoBrands.imgLogoJaecoo,
                imgCar: ImgPhotoBrands.imgPhotoJaecoo
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
                title: 'Sehol',
                desc: 'Бренд, запущенный 24 апреля 2018 года компаниями SEAT и JAC Volkswagen Automotive.',

                linkDetails: 'https://ru.wikipedia.org/wiki/Sehol',
                imgLogo: ImgLogoBrands.imgLogoSehol,
                imgCar: ImgPhotoBrands.imgPhotoSehol
            },
            {
                title: 'JAC',
                desc: 'Бренд для выпуска автомобилей от компании JAC Motors. Выпускает автомобили, грузовики, автобусы, погрузчики. Сотрудничает с итальянскими, иранскими, с, российскими и казахстанскими компаниями. В России выпускается под брендом Москвич.',
                linkDiller: 'https://allur.kz/jac/',
                linkDetails: 'https://ru.wikipedia.org/wiki/JAC_Motors',
                imgLogo: ImgLogoBrands.imgLogoJac,
                imgCar: ImgPhotoBrands.imgPhotoJac
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
                title: 'Wey',
                desc: 'Автомобильная марка, принадлежащая Great Wall Motors. Запущенный в 2016 году бренд сосредоточился на кроссоверах и внедорожниках премиум-класса на базе моделей Haval.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Wey_(%D0%BC%D0%B0%D1%80%D0%BA%D0%B0)',
                imgLogo: ImgLogoBrands.imgLogoWey,
                imgCar: ImgPhotoBrands.imgPhotoWey
            },
            {
                title: 'Ora',
                desc: 'Марка легковых электромобилей компании Great Wall Motors, представленная в 2018 году. Ora означает «открытый, надежный и альтернативный», а также отдает дань уважения Леонарду Эйлеру, известному математику.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Ora_(%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%80%D0%BA%D0%B0)',
                imgLogo: ImgLogoBrands.imgLogoOra,
                imgCar: ImgPhotoBrands.imgPhotoOra
            },
            {
                title: 'Tank',
                desc: 'Автомобильный бренд, подразделение компании Great Wall Motors, которое специализируется на внедорожниках .',
                linkDiller: 'https://tank.com.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Tank_(%D0%BC%D0%B0%D1%80%D0%BA%D0%B0)',
                imgLogo: ImgLogoBrands.imgLogoTank,
                imgCar: ImgPhotoBrands.imgPhotoTank
            },
            {
                title: 'Haval',
                desc: 'Автомобильный бренд, основан в 2013 году, подразделение компании Great Wall Motors по производству кроссоверов и внедорожников.',
                linkDiller: 'https://haval-kostanay.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Haval',
                imgLogo: ImgLogoBrands.imgLogoHaval,
                imgCar: ImgPhotoBrands.imgPhotoHaval
            },
            {
                title: 'Great Wall',
                desc: 'Автомобильный бренд, основан в 2013 году, подразделение компании Great Wall Motors по производству кроссоверов и внедорожников.',
                linkDiller: 'https://haval-kostanay.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Haval',
                imgLogo: ImgLogoBrands.imgLogoGw,
                imgCar: ImgPhotoBrands.imgPhotoGw
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
                title: 'Beiqi Foton Motor',
                desc: 'Китайская государственная автомобилестроительная компания, основанная в 1996 году путём слияния около 100 других компаний из 13 провинций КНР. Компания производит легковые автомобили, внедорожники, микроавтобусы, большие городские автобусы, электробусы, грузовые автомобили, двигатели, тракторы, сельскохозяйственную технику под брендами Auman, Auv, Ollin и другими. Foton является дочерней компанией BAIC Group.',
                linkDiller: 'https://foton-motors.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Beiqi_Foton_Motor',
                imgLogo: ImgLogoBrands.imgLogoFoton,
                imgCar: ImgPhotoBrands.imgPhotoFoton
            },
            {
                title: 'Beijing Hyundai',
                desc: 'Автомобилестроительная компания со штаб-квартирой в Шуньи и совместное предприятие Beijing Automobile Works и Hyundai. Основана 18 октября 2002 года. Компания выпускает автомобили Hyundai для китайского рынка.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Beijing_Hyundai',
                imgLogo: ImgLogoBrands.imgLogoHyundai,
                imgCar: ImgPhotoBrands.imgPhotoHyundai
            },
            {
                title: 'Beijing Benz',
                desc: 'Автомобилестроительная компания со штаб-квартирой в Пекине и совместное предприятие Beijing Automobile Works и Mercedes-Benz. Компания выпускает автомобили Mercedes-Benz для китайского рынка.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Beijing_Benz',
                imgLogo: ImgLogoBrands.imgLogoBeijingBenz,
                imgCar: ImgPhotoBrands.imgPhotoBeijingBenz
            },
            {
                title: 'Beijing (BAIC Motor)',
                desc: 'Дочерняя компания BAIC Group, в 2010—2020 годах выпускавшая автомобили под брендом Senova, с 2013 года внедорожники BJ, с 2020 года перевела модельный ряд под исторический бренд Beijing, который перешёл к ней от компании BAW.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/BAIC_Motor',
                imgLogo: ImgLogoBrands.imgLogoBeijing,
                imgCar: ImgPhotoBrands.imgPhotoBeijing
            },
            {
                title: 'Arcfox',
                desc: 'Производитель электромобилей, базирующийся в Пекине и действующий с 2017 года. Принадлежит компании BAIC.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/BAIC_Motor',
                imgLogo: ImgLogoBrands.imgLogoArcfox,
                imgCar: ImgPhotoBrands.imgPhotoArcfox
            },
            {
                title: 'Changhe',
                desc: 'Официальное название Jiangxi Changhe Automobile Co Ltd, — китайский производитель автомобилей, базирующийся в Цзиндэчжэне, провинция Цзянси, Китай.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/BAIC_Motor',
                imgLogo: ImgLogoBrands.imgLogoChanghe,
                imgCar: ImgPhotoBrands.imgPhotoChanghe
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
                title: 'Yangwang',
                desc: 'Подразделение BYD Auto, а также одноимённая серия электромобилей данной торговой марки. Базируется на выпуске гибридных и аккумуляторных электромобилей.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Yangwang',
                imgLogo: ImgLogoBrands.imgLogoYangwang,
                imgCar: ImgPhotoBrands.imgPhotoYangwang
            },
            {
                title: 'Fangchengbao',
                desc: 'Подразделение BYD Auto по производству внедорожников.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Fangchengbao',
                imgLogo: ImgLogoBrands.imgLogoFangchengbao,
                imgCar: ImgPhotoBrands.imgPhotoFangchengbao
            },
            {
                title: 'Denza',
                desc: 'Подразделение BYD Auto, являющееся совместным предприятием между BYD и Mercedes-Benz Group. Специализируется на выпуске люксовых электромобилей.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Denza',
                imgLogo: ImgLogoBrands.imgLogoDenza,
                imgCar: ImgPhotoBrands.imgPhotoDenza
            },
            {
                title: 'BYD Auto',
                desc: 'Автомобильная дочерняя компания BYD Company. Компания производит пассажирские электромобили, гибридные электромобили, электрические автобусы и грузовики.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/BYD_Auto',
                imgLogo: ImgLogoBrands.imgLogoByd,
                imgCar: ImgPhotoBrands.imgPhotoByd
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
                title: 'GAC Hino',
                desc: 'Совместное предприятие Hino и GAC , целью которого является производство грузовых автомобилей на базе Hino.',
                linkDiller: 'https://hino-trucks.kz/',
                linkDetails: 'https://en.wikipedia.org/wiki/GAC_Hino',
                imgLogo: ImgLogoBrands.imgLogoGACHino,
                imgCar: ImgPhotoBrands.imgPhotoGACHino
            },
            {
                title: 'GAC Toyota',
                desc: 'Совместное предприятие GAC Group и Toyota, выпускающее автомобили Toyota для китайского рынка. Основано 1 сентября 2004 года.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/GAC_Toyota',
                imgLogo: ImgLogoBrands.imgLogoGACToyota,
                imgCar: ImgPhotoBrands.imgPhotoGACToyota
            },
            {
                title: 'GAC Honda',
                desc: 'Совместное предприятие GAC Group и Honda, выпускающее автомобили для китайского рынка.',
                
                linkDetails: 'https://en.wikipedia.org/wiki/GAC_Honda',
                imgLogo: ImgLogoBrands.imgLogoGACHonda,
                imgCar: ImgPhotoBrands.imgPhotoGACHonda
            },
            {
                title: 'Trumpchi',
                desc: 'Марка автомобилей, принадлежащая компании GAC Group. Основана в декабре 2010 года.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Trumpchi',
                imgLogo: ImgLogoBrands.imgLogoTrumpchi,
                imgCar: ImgPhotoBrands.imgPhotoTrumpchi
            },
            {
                title: 'GAC',
                desc: 'Бренд для экспортных автомобилей GAC Group.',
                linkDiller: 'https://gacmotor.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/GAC_Group',
                imgLogo: ImgLogoBrands.imgLogoGAC,
                imgCar: ImgPhotoBrands.imgPhotoGAC
            },
            {
                title: 'GAC Aion',
                desc: 'Марка электромобилей GAC Group.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Aion_(%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%80%D0%BA%D0%B0)',
                imgLogo: ImgLogoBrands.imgLogoGACAion,
                imgCar: ImgPhotoBrands.imgPhotoGACAion
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
                title: 'Yutong',
                desc: 'Производитель коммерческого транспорта: автобусов и электробусов.',
                linkDiller: 'https://www.yutong.com.kz/',
                linkDetails: 'https://ru.wikipedia.org/wiki/Yutong',
                imgLogo: ImgLogoCompanies.imgLogoYutong,
                imgCar: ImgPhotoBrands.imgPhotoYutong
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
              title: 'ZX',
              desc: 'Автопроизводитель пикапов',
              linkDetails: 'https://ru.wikipedia.org/wiki/ZX_Auto',
              imgLogo: ImgLogoCompanies.imgLogoZx,
              imgCar: ImgPhotoBrands.imgPhotoZX
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
                title: 'Li',
                desc: 'Производитель электромобилей. Также известен как Li Xiang.',
                
                linkDetails: 'https://ru.wikipedia.org/wiki/Li_Auto',
                imgLogo: ImgLogoCompanies.imgLogoLi,
                imgCar: ImgPhotoBrands.imgPhotoLi
            }
        ],
        ident: 13
    }
];

export {companyList}