var config = {
    style: "mapbox://styles/sulinjoanna/ck9oo243h0nxx1iqtfenpx0ed",
    accessToken:
      "pk.eyJ1Ijoic3VsaW5qb2FubmEiLCJhIjoiY2s0YXUzamp6MDc0azNucXI4c29hbW1xMiJ9.3_tkyn9JlnJP8G84qPQfoQ",
    showMarkers: false,
    theme: "dark",
    alignment: "right",
    title: "COVID-19 & China’s Mass Surveillance System",
    subtitle:
      "How China’s contact tracing apps dramatically change how its citizens commute and travel",
    blurb:
      "In spring 2020, China created a massive surveillance system utilizing QR health codes to track and monitor how citizens travel and commute inside the country. Through examining web search data about the health code apps, reporting on user experiences, and detailing key events in the chronology of how the apps were rolled out, the following story depicts how China implemented one of the most extensive technological contract tracing systems in the world.",
    byline: "by Joanna Lin Su",
    chapters: [
      {
        id: "introduction",
        //title: 'Jan.23',
        description:
          "Governments around the world are taking steps to reopen their countries amid the worst pandemic in living memory. One of their key measures for doing so is called contact tracing, which entails identifying and monitoring individuals who have come into contact with COVID-19. While the U.S. is still developing its contact tracing system for COVID-19 thanks to two of its largest technology giants, Google and Apple, working together, China’s contact tracing system – known as the health code system – has been operating for three months now.",
        image: "https://dl.airtable.com/.attachments/5ada64578d6018a1eb46553bc9b58813/4b442151/codes.jpg",
        description2:
          "China’s health code system, which uses QR codes on phones to track users and control the spread of the virus, is based on the existing QR code online payment system. Users are required to log into the system using mobile apps hosted by either WeChat or Alipay, two of China’s biggest technology companies. In order to go places – be it boarding a train, entering a restaurant, or walking down certain streets – users have their health statuses scanned at various checkpoints using the system’s QR codes.",
        description3:
          "The health code system uses three colors to represent a user’s health status (see the picture below): green means you are healthy and permitted to travel; yellow means you are suspected of having COVID-19; and red means you are confirmed to have COVID-19. People who have either yellow or red codes are not permitted to travel or commute.",
        description4:
          "Although the algorithm used to designate color codes remains a mystery, the health code system is now employed throughout most of the country, fulfilling Beijing’s goal to implement a national surveillance apparatus.  Although the health code app is not mandatory, most people have downloaded it because the app is a requisite for any and all travel inside the country.",
        description5:
          "By trawling the internet using web crawlers, conducting interviews on social media and collecting data from online sources, this article reconstructs how this contact tracing system became a massive surveillance network, albeit riddled with blind spots and shortcomings that led to mass confusion along the way.",
        location: {
          center: [114.266667, 30.583333],
          zoom: 4,
          pitch: 40,
          bearing: 10,
        },
        onChapterEnter: [
          {
            layer: "search",
            opacity: 1,
          }
        ],
        onChapterExit: [
          {
            layer: "per capita",
            opacity: 0,
          },
          {
            layer: "Yuhang",
            opacity: 0,
          },
          {
            layer: "hubei",
            opacity: 0,
          },
          {
            layer: "jingxinxiangzhu",
            opacity: 0,
          },
          {
            layer: "Hangzhou",
            opacity: 0,
          },
          {
            layer: "shenzhen",
            opacity: 0,
          },
        ],
      },
      {
        id: "introduction2",
        title:
          "How to use the map: The colored circles (Yellow to Red = Low to High) represent the amount of web searches about the health code in a particular city, while colored strokes around the city circles indicate the per capita search rate.",
        image: "https://dl.airtable.com/.attachments/64f5d150d3b33622b97275f26f6041df/133c5b2f/legend1.jpg",
        description:
          'In terms of the amount of search engine searches about the web app, the most activity took place in rising metropolises that are magnets for workers coming from less developed areas. According to Baidu, mainland China’s top domestic search engine, Beijing had the most searches for and including the term "health code," with an average search rate of 917 times per day, during the period from Feb. 1 to April. 30. It was followed by Chengdu (621), Wuhan (584), Hangzhou (549), and Tianjin (467).',
  
        location: {
          center: [114.266667, 30.583333],
          zoom: 5,
          pitch: 40,
          bearing: 10,
        },
        onChapterEnter: [
          {
            layer: "search",
            opacity: 1,
          }
        ],
        onChapterExit: [
          {
            layer: "per capita",
            opacity: 1,
          },
          {
            layer: "Yuhang",
            opacity: 0,
          },
          {
            layer: "hubei",
            opacity: 0,
          },
          {
            layer: "jingxinxiangzhu",
            opacity: 0,
          },
          {
            layer: "Hangzhou",
            opacity: 0,
          },
          {
            layer: "shenzhen",
            opacity: 0,
          },
        ],
      },
      {
        id: "introduction3",
        //title: 'Jan.23',
        image: "https://dl.airtable.com/.attachments/b1291bad5803cd81e8c509821e8bfc94/09a3371c/legend2.jpg",
        description:
          "However, Hainan, an island province in the South China Sea, and Xinjiang, an autonomous province in the country’s northwest –  had the highest per capita search rates about the health code system. While the reason behind this is still unclear, data show that Shihezi, Karamay, and Turpan – three cities within Xinjiang's autonomous region – all have more than 120 daily searches per one million people. Baoting, a city in Hainan province that has  0.7% the total population of Beijing, averaged 184 daily searches per million people.",
        location: {
          center: [103.38571, 34],
          zoom: 3.5,
          pitch: 60,
          bearing: 49,
        },
        onChapterEnter: [
          {
            layer: "search",
            opacity: 1,
          },
          {
            layer: "per capita",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "Yuhang",
            opacity: 0,
          },
          {
            layer: "hubei",
            opacity: 0,
          },
          {
            layer: "jingxinxiangzhu",
            opacity: 0,
          },
          {
            layer: "Hangzhou",
            opacity: 0,
          },
          {
            layer: "shenzhen",
            opacity: 0,
          },
        ],
      },
  
      {
        num: 1, //区别title
        id: "wuhan lockdown",
        title:
          "Jan. 23 - Wuhan, the epicenter of the COVID-19 epidemic, enters lockdown",
        description:
          "Wuhan begins its lockdown 49 days before the nationwide lockdown in Italy and 58 days before the “stay-at-home’ order in New York City. Public transportation is suspended. Residents are permitted to leave their homes only to buy groceries. They also receive regular food deliveries and health check-ins from social workers.",
        location: {
          center: [114.266667, 30.583333],
          zoom: 10,
          pitch: 20,
          bearing: 10,
        },
        onChapterEnter: [
          {
            layer: "search",
            opacity: 1,
          },
          {
            layer: "per capita",
            opacity: 1,
          },
        ],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "Yuhang",
        title: "Feb. 3 - The first contact tracing app goes online",
        image: "https://dl.airtable.com/.attachments/ed9f546cdb6b563c3ec5f187358d5913/4d9dc8d8/1.jpeg",
        description:
          "Yuhang, a borough in Hangzhou where e-commerce giant Alibaba is located, begins developing a new health code system app within the mobile payment app Alipay. The system is called the Yuhang green code. Four days later, the app, the first of its kinds in China, goes online. It will soon become a model for other regions to replicate.",
        location: {
          center: [120.222, 30.42042],
          zoom: 10,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [
          {
            layer: "Yuhang",
            opacity: 0.1,
          },
        ],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "Shenzhen",
        title: "Feb. 9 - The battle between Tencent and Alibaba begins",
        description:
          "Technology giant Tencent develops iShenzhen, an app within its messaging platform, WeChat. Since Tencent is based in Shenzhen, it used its own region as a testing ground, going head-to-head with Alibaba’s contact tracing app that was launched just two days prior. Shenzhen becomes the first city in China to institute its own health code system.",
        location: {
          center: [114.04845, 22.58187],
          zoom: 8,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [
          {
            layer: "shenzhen",
            opacity: 0.1,
          },
        ],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "Hangzhou",
        title: "Feb. 11 - Hangzhou’s code goes online",
        image: "https://dl.airtable.com/.attachments/a999a05afd35a098442a3e206f798320/37ab3518/2.jpeg",
        description:
          "Meanwhile, in Hangzhou, Alibaba launches a scaled-up version of the app it developed for the tiny Yuhang borough, this time covering the entire region.",
        description2:
          'Rivalry between Alibaba and Tencent is not new; in fact, it’s a tale as old as the rivalry between Microsoft and Apple. The two tech companies are currently facing off with their respective payment platforms. Alibaba’s Alipay is a mobile payment app that, in its own words, aims to create an entirely "cashless society." The platform relies heavily on personal identification data. Meanwhile, Tencent’s application, WeChat, combines an online payment function, SMS messaging, and a social media platform into one multi-purpose application.',
        description3:
          "In this battle of contact tracing apps, the two tech giants have begun creating region-specific apps. Although they have kept their respective algorithms secret, the apps are already widespread. Alibaba's health code has been used in more than 200 cities, while Tencent's health code was used by over 800 million people – more than a half of China’s population – in the first 25 days after it went online.",
        location: {
          center: [120.44414, 30.42042],
          zoom: 8,
          pitch: 50,
          bearing: 10,
        },
        onChapterExit: [],
      },
      {
        num: 1,
        id: "jingxinxiangzhu",
        title: "Feb. 13 - Beijing begins tracking its workers",
        description:
          "Jingxinxiangzhu (京心相助), a contact tracing app for workers arriving in Beijing from other cities, goes online. It’s housed within WeChat, but it’s also compatible with Alipay.",
        description2:
          "At this point, workers who arrive in Beijing from other cities are required to enter a 14-day quarantine. Those who lack stable living conditions have to be quarantined in designated hotels, which costs 500 RMB ($71) per day, including meals.",
        location: {
          center: [116.38895, 39.96158],
          zoom: 10,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [
          {
            layer: "jingxinxiangzhu",
            opacity: 0.1,
          },
        ],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "Hubei",
        title: "Feb. 24 - Wuhan adopts a contract tracing health code system",
        description:
          "Hubei Province's QR health code app goes online. People in Hubei are able to apply for their personal health codes using WeChat and Alipay.",
        location: {
          center: [114.266667, 30.583333],
          zoom: 6,
          pitch: 30,
          bearing: 10,
        },
        onChapterEnter: [
          {
            layer: "hubei",
            opacity: 0.1,
          },
        ],
        onChapterExit: [],
      },
      {
        id: "story_card_Sophie",
        title:
          "👧 Sophie Liu: I checked-in and logged my symptoms on the app every day",
        image: "https://dl.airtable.com/.attachments/2152af43f0126fa568f68496a1c92798/caaa11a3/Hubei.gif",
        description:
          "Sophie Liu returned to her hometown, Tianmen, in Hubei Province, for Chinese New Year at the end of January. Due to the COVID-19 outbreak, however, she was confined in Tianmen until the end of March. During those two months, she updated her health status on Alipay’s E’huiban contract tracing app every day.",
        description2:
          "Liu said she first logged onto the app by inputting her personal information and travel history; she also had to answer whether or not she had come into contact with someone confirmed or suspected of having COVID-19 in the past 14 days. She then had to report her health status on the app every day, checking a box confirming that the information she provided was true before submitting her daily log.",
        location: {
          center: [113.16295, 30.70834],
          zoom: 8.72,
          pitch: 45,
          bearing: -3.64,
        },
        onChapterEnter: [
          {
            layer: "per capita",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "search",
            opacity: 1,
          },
        ],
      },
      {
        id: "story_card_Ruixian",
        title: "👩 Ruixian Yang: No QR code, no entry",
        description:
          "Ruixian Yang, a resident of Hangzhou, was part of the first test group to use the contact tracing app developed by Alibaba. She said the QR code is checked at the entrances of neighborhoods, markets, malls, airports, and transit stations. Without a green QR code, you’re denied entry, thereby limiting your access to essential supplies and services.",
        description2:
          "“The most impressive one had a ‘real-time function’,” she said. “It is designed to prevent people from merely using a screenshot of the QR code.” She said she noticed it because she herself works at an internet company.",
        description3:
          "On March 19, Yang was finally allowed to return to work in Beijing. Upon her arrival, she had to log into a contract tracing app specifically made for workers returning to the greater Beijing area.",
        description4:
          "“The moment I finished signing up for it, a government worker from Beijing called me to tell me to self-quarantine in my apartment for 14 days,” she said, adding that she was shocked by how quickly the call came.",
        location: {
          center: [120.44414, 30.42042],
          zoom: 8,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "China",
        title:
          "March 18: The government announces it wants data to be shared bilaterally between two separate regions.",
        image: "https://dl.airtable.com/.attachments/8cdb7a28e7f80a85ffc21955e04a3f77/063ce823/3.jpeg",
        description:
          'The Chinese government issues a statement emphasizing the importance of promoting a "mutual recognition system” between two different population areas. This results in Alibaba and Tencent coming together to share their apps’ data with the central government, marking the first time China’s two tech mammoths have worked together.',
        location: {
          center: [120.161419, 30.29365],
          zoom: 4,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [
          {
            layer: "Yuhang",
            opacity: 0,
          },
          {
            layer: "hubei",
            opacity: 0,
          },
          {
            layer: "jingxinxiangzhu",
            opacity: 0,
          },
          {
            layer: "Hangzhou",
            opacity: 0,
          },
          {
            layer: "shenzhen",
            opacity: 0,
          },
        ],
      },
      {
        num: 1,
        id: "timeline",
        title: "March 22: Hubei Province eases lockdown restrictions",
        description:
          "Hubei Province, where Wuhan is located, cancels its daily check-in policy on its health code app. According to data from the Chinese government, Hubei reports no new COVID-19 cases. Meanwhile, across the world, New York state is now the epicenter of the virus in the U.S., reporting 4,817 new cases on this date.",
        location: {
          center: [120.161419, 30.29365],
          zoom: 5,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "Hubei2",
        title: "March 25: Transportation system resumes in Hubei",
        description:
          "Roads reopen and the HigHighways and roads reopen in Hubei Province, except in Wuhan.",
        location: {
          center: [120.161419, 30.29365],
          zoom: 5,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: "Mike_Xiaogan",
        title: "👨 Mike: many families being blocked these days just like us.",
        description:
          "Mike, who asked that his real name not be used because he works for the Chinese government, had difficulty traveling to Beijing from Xiaogan, a village in Hubei province, with his wife and 7-year-old daughter. Mike and his wife filled out their applications on the Beijing contact tracing app Jingxinxaingzhu right after Hubei reopened. Unlike Ruixian Yang, however, he applied via Alipay.",
        description2:
          "The process was smooth until they tried to fill out an application for their daughter. The system rejected her application because she lacked a government-issued ID card. In China, citizens are not required to have this ID until they are 16 years old. Since his daughter was not yet in the system,Jingxinxiangzhu’s facial recognition software couldn’t scan her face.",
        description3:
          "The system purportedly allows users to bypass the facial recognition step should it fail twice, but Mike said that didn’t happen. He tried to get answers by calling and writing emails to the platform, but was unsuccessful.",
        description4:
          "Mike said they were denied entry to the train station because his daughter wasn’t registered on the app: “[The train station employee] told me that there were many families being blocked these days, just like us.” He begged the officer to allow him and his family through, but was told they could not get on the train if they weren’t registered.",
        description5: '"We asked for solutions, but nobody had a clue." he said.',
        location: {
          center: [113.90921, 30.97214],
          zoom: 8.52,
          pitch: 45.0,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: "Sophie_Xiamen",
        title:
          "👧 Sophie Liu: People on the same train have different experiences",
        //image: './path/to/image/source.png',
        description:
          '"On March 26, the day after Hubei’s highways reopened, Liu used her health code in Tianmen’s train station, her first attempt after leaving home confinement. As a resident of Xiamen, she also had to log into Xiamen\'s QR health Code in the WeChat mini program iXiamen. “It didn’t ask me about where I had been in the past 14 days,” she said. "I got the green code once I applied for it."',
        description2:
          " When she arrived in Xiamen, she wasn’t asked for her iXiamen code, but others were. “Some people from Hubei province got red codes on iXiamen. They weren’t allowed to get off the train.”",
        location: {
          center: [118.3036, 24.44822],
          zoom: 9.83,
          pitch: 45,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: "Mengyuan_Beijing",
        title: "👩  Mengyuan Dong: Different places have different requirements",
        image: "https://dl.airtable.com/.attachments/2f86206e6b743911351fad65c8b4bec6/fac83ef7/GPS.png",
        description:
          "The contract tracing QR codes work in some places but not others. Beijing resident Mengyuan Dong was asked by security guards for her QR code on the Beijing contact tracing app when she entered her office. But more often than not, she relied on a so-called “big data pass.” Provided by phone carriers, it tracks users' GPS data to determine if they had been in contact with a positive COVID-19 case. The pass allowed her to gain access to more public places.",
        description2:
          "Users on Weibo, China’s version of Twitter, have complained about the system's inconsistency. One user from Jiangsu Province complained about being prevented from entering a shopping mall because she was using the city-level contact tracing app rather than the province-level app.",
        description3:
          "Similarly, in Jiangxi Province, another user witnessed an elderly man being forced to disembark from a bus simply because his QR code – which he painstakingly had learned to use – was on Wechat and not on Alipay, the bus’ required app.",
        location: {
          center: [116.38895, 39.96158],
          zoom: 10,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: "Sophie_Beijing",
        title:
          "👧 Sophie Liu : Students face punishment if they return to Beijing",
        //image: './path/to/image/source.png',
        description:
          "As a college student studying in Beijing, Liu was required to login into her third contact tracing application, Jingxinxiangzhu. Although students are still not allowed to return to Beijing, they must report their health status and current location in WeChat, daily.",
        description2:
          "“If you go back to Beijing without permission, you will get punished.” Liu said.",
        location: {
          center: [120.161419, 30.29365],
          zoom: 5,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "Wuhan",
        title: "April 8 - Wuhan reopens",
        //image: './path/to/image/source.png',
        description:
          "Wuhan reopens after being in lockdown for 76 days. Life in China is slowly returning to normal.",
        location: {
          center: [120.161419, 30.29365],
          zoom: 5,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        num: 1,
        id: "Guangzhou",
        title: "April 10 - A positive case reveals more blind spots",
        //image: './path/to/image/source.png',
        description:
          "Guangzhou reports that a person tested positive for COVID-19 despite displaying no symptoms and having a green QR code in all his contact tracing apps. He had traveled from Hubei Province one week prior to getting tested.",
        location: {
          center: [113.26729, 23.17479],
          zoom: 8,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: "Shiwen_Shanghai",
        title:
          "👧 Shiwen Li: “I couldn’t check into the hotel even with two official health reports because my code wasn’t green.”",
        image: "https://dl.airtable.com/.attachments/c01b51549101c77e7872974d0aa44f27/c5abc6cc/Shanghai.jpeg",
        description:
          "In early April, Shiwen Li, a university student who had returned to Shanghai from New York, wasn’t allowed to check into her quarantine hotel because her QR code was delayed in turning red to green. Having two official health reports (an out-of-quarantine report and a negative COVID-19 report) didn’t help.",
        location: {
          center: [121.45675, 31.21288],
          zoom: 8,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
  
      {
        num: 1,
        id: "Beijing",
        title: "April 18 - sharing data with a national platform.",
        //image: './path/to/image/source.png',
        description:
          "Many Chinese citizens had begun complaining about having to use multiple health codes and contact tracing apps, especially in major metropolitan areas like the Beijing-Tianjin-Hebei cluster.",
        description2:
          "However, after months of confusing contact tracing efforts, a nationwide data-sharing platform for contact tracing leads to the cooperation between Alibaba and Tencent. Residents are now permitted to travel within their home region without applying for different health codes or quarantining for 14 days, but they have to report their personal data to a national platform called the National Government Political Service Platform (国家政务服务平台).",
        description3:
          "Nine days later, 11 more regions began sharing their data with the central government. Even though it has many blind spots, China’s mass surveillance system is now operational.",
  
        location: {
          center: [120.161419, 30.29365],
          zoom: 5,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: "Methods and Sources",
        //image: './path/to/image/source.png',
        description: "Sources, methods, and special thanks:",
        description2:
          'Sources: Baidu Search Index (http://index.baidu.com/), 2010 Chinese census data, and NYT\'s Coronavirus tracker (https://www.nytimes.com/interactive/2020/world/coronavirus-maps.html). Weibo sources from "机智小天使F"，and "十二支白鹭鸶飞过秋天的湖泊". Photos credit to Weibo user "单行道111".',
        description3:
          "Methods: the search index data is collected on May 1. Data ranges from Feb.1 to April 30. The index provides daily average search counts for 348 areas in the mainland China. Searching per million rate is calculated based on the national census data which is collected once a decade.",
        description4:
          "Special thanks to Andrew Lampard and Mayuri Mei Lin for editing, and Blake Hunsicker for web development advice. ",
        location: {
          center: [120.161419, 30.29365],
          zoom: 5,
          pitch: 50,
          bearing: 10,
        },
        onChapterEnter: [],
        onChapterExit: [],
      },
    ],
  };

export default config;