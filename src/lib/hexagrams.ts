/**
 * 六十四卦 – The 64 Hexagrams of the I Ching (King Wen sequence)
 * Trigram index order: 乾(0) 兌(1) 離(2) 震(3) 巽(4) 坎(5) 艮(6) 坤(7)
 */

export interface HexagramLine {
  text: string;
  meaning: string;
}

export interface Hexagram {
  number: number;
  name: string;
  fullName: string;
  pinyin: string;
  upperTrigram: number;
  lowerTrigram: number;
  judgment: string;
  image: string;
  lines: HexagramLine[];
  keywords: string[];
  element: string;
  nature: string;
}

export const hexagrams: Hexagram[] = [
  {
    number: 1, name: "乾", fullName: "乾為天", pinyin: "qián",
    upperTrigram: 0, lowerTrigram: 0,
    judgment: "元亨利貞。創始之力，萬物資始，大通順利，宜守正道。",
    image: "天行健，君子以自強不息。",
    lines: [
      { text: "初九：潛龍勿用。", meaning: "時機未到，宜潛伏蓄力，不宜妄動。" },
      { text: "九二：見龍在田，利見大人。", meaning: "嶄露頭角，宜尋訪賢能，合作共進。" },
      { text: "九三：君子終日乾乾，夕惕若厲，無咎。", meaning: "勤勉警惕，日夜不懈，方可無過。" },
      { text: "九四：或躍在淵，無咎。", meaning: "審時度勢，進退有據，可免災咎。" },
      { text: "九五：飛龍在天，利見大人。", meaning: "居尊位而德配，大有作為之時。" },
      { text: "上九：亢龍有悔。", meaning: "過剛則折，盛極必衰，宜知進退。" }
    ],
    keywords: ["創造", "剛健", "天", "龍", "進取", "領導"],
    element: "金",
    nature: "至剛至健，純陽之卦，象徵天道運行不息"
  },
  {
    number: 2, name: "坤", fullName: "坤為地", pinyin: "kūn",
    upperTrigram: 7, lowerTrigram: 7,
    judgment: "元亨，利牝馬之貞。君子有攸往，先迷後得主。利西南得朋，東北喪朋。安貞吉。柔順承載，厚德載物。",
    image: "地勢坤，君子以厚德載物。",
    lines: [
      { text: "初六：履霜，堅冰至。", meaning: "見微知著，霜降則冰至，防患於未然。" },
      { text: "六二：直方大，不習無不利。", meaning: "秉性正直寬厚，自然行事無不順利。" },
      { text: "六三：含章可貞，或從王事，無成有終。", meaning: "含蓄才華，輔佐他人，雖不居功而善終。" },
      { text: "六四：括囊，無咎無譽。", meaning: "謹慎收斂，雖無顯譽，亦無禍患。" },
      { text: "六五：黃裳，元吉。", meaning: "居中守正，柔順之美德，大吉之象。" },
      { text: "上六：龍戰于野，其血玄黃。", meaning: "陰盛至極與陽抗衡，兩敗俱傷。" }
    ],
    keywords: ["順從", "包容", "地", "厚德", "柔順", "承載"],
    element: "土",
    nature: "至柔至順，純陰之卦，象徵大地承載萬物"
  },
  {
    number: 3, name: "屯", fullName: "水雷屯", pinyin: "zhūn",
    upperTrigram: 5, lowerTrigram: 3,
    judgment: "元亨利貞，勿用有攸往，利建侯。萬事起頭難，宜建立根基。",
    image: "雲雷屯，君子以經綸。",
    lines: [
      { text: "初九：磐桓，利居貞，利建侯。", meaning: "徘徊不前之際，宜安守正道，建立基業。" },
      { text: "六二：屯如邅如，乘馬班如，匪寇婚媾。女子貞不字，十年乃字。", meaning: "困難重重，非敵乃友，守正待時終可成。" },
      { text: "六三：即鹿無虞，惟入于林中。君子幾不如舍，往吝。", meaning: "無嚮導而貿然行動，不如放棄，免致困窘。" },
      { text: "六四：乘馬班如，求婚媾，往吉，無不利。", meaning: "雖行動艱難，但主動求合，前往吉利。" },
      { text: "九五：屯其膏，小貞吉，大貞凶。", meaning: "恩澤未能廣施，小事守正吉，大事則凶。" },
      { text: "上六：乘馬班如，泣血漣如。", meaning: "進退維谷，悲傷至極，處境艱困。" }
    ],
    keywords: ["初始", "艱難", "創業", "屯難", "建立"],
    element: "水",
    nature: "萬物初生，艱難草創之象"
  },
  {
    number: 4, name: "蒙", fullName: "山水蒙", pinyin: "méng",
    upperTrigram: 6, lowerTrigram: 5,
    judgment: "亨。匪我求童蒙，童蒙求我。初筮告，再三瀆，瀆則不告。利貞。啟蒙教育，求學之道。",
    image: "山下出泉，蒙。君子以果行育德。",
    lines: [
      { text: "初六：發蒙，利用刑人，用說桎梏，以往吝。", meaning: "啟蒙之初，宜嚴格教導以正規矩。" },
      { text: "九二：包蒙，吉。納婦，吉。子克家。", meaning: "包容蒙昧，吉。以寬容教化，可成家立業。" },
      { text: "六三：勿用取女，見金夫，不有躬，無攸利。", meaning: "貪慕外表而失節操，無所利益。" },
      { text: "六四：困蒙，吝。", meaning: "困於蒙昧而不求教，將有困窘。" },
      { text: "六五：童蒙，吉。", meaning: "以赤子之心虛心求教，吉祥。" },
      { text: "上九：擊蒙，不利為寇，利禦寇。", meaning: "教育過嚴如擊打，宜防禦而非攻擊。" }
    ],
    keywords: ["啟蒙", "教育", "蒙昧", "學習", "求知"],
    element: "土",
    nature: "蒙昧初開，啟蒙教育之象"
  },
  {
    number: 5, name: "需", fullName: "水天需", pinyin: "xū",
    upperTrigram: 5, lowerTrigram: 0,
    judgment: "有孚，光亨，貞吉，利涉大川。誠信等待，時機自來。",
    image: "雲上於天，需。君子以飲食宴樂。",
    lines: [
      { text: "初九：需于郊，利用恆，無咎。", meaning: "在遠處等待，宜保持恆心，無咎。" },
      { text: "九二：需于沙，小有言，終吉。", meaning: "等待中有小波折，終將吉利。" },
      { text: "九三：需于泥，致寇至。", meaning: "深陷泥淖，招致禍患，宜謹慎。" },
      { text: "六四：需于血，出自穴。", meaning: "處危險之地，宜退避保全。" },
      { text: "九五：需于酒食，貞吉。", meaning: "安然等待，飲食自若，守正則吉。" },
      { text: "上六：入于穴，有不速之客三人來，敬之終吉。", meaning: "意外來客，以禮相待則終吉。" }
    ],
    keywords: ["等待", "耐心", "誠信", "時機", "需求"],
    element: "水",
    nature: "雲聚天上，需待而行，耐心等候之象"
  },
  {
    number: 6, name: "訟", fullName: "天水訟", pinyin: "sòng",
    upperTrigram: 0, lowerTrigram: 5,
    judgment: "有孚窒惕，中吉，終凶。利見大人，不利涉大川。爭訟之事，宜中道而止。",
    image: "天與水違行，訟。君子以作事謀始。",
    lines: [
      { text: "初六：不永所事，小有言，終吉。", meaning: "不長久糾纏於爭訟，雖有小非議，終吉。" },
      { text: "九二：不克訟，歸而逋其邑人三百戶，無眚。", meaning: "爭訟不成，退而自守，可免災禍。" },
      { text: "六三：食舊德，貞厲，終吉。或從王事，無成。", meaning: "守舊德行事雖有危險，終可吉。" },
      { text: "九四：不克訟，復即命渝，安貞吉。", meaning: "訟不成，歸順正命，安守正道則吉。" },
      { text: "九五：訟，元吉。", meaning: "以公正裁決爭訟，大吉。" },
      { text: "上九：或錫之鞶帶，終朝三褫之。", meaning: "雖得賞賜，終被反覆剝奪，爭訟無益。" }
    ],
    keywords: ["爭訟", "糾紛", "公正", "訴訟", "止爭"],
    element: "金",
    nature: "天水相違，爭訟不和之象"
  },
  {
    number: 7, name: "師", fullName: "地水師", pinyin: "shī",
    upperTrigram: 7, lowerTrigram: 5,
    judgment: "貞，丈人吉，無咎。用兵之道，宜正宜老成持重。",
    image: "地中有水，師。君子以容民畜眾。",
    lines: [
      { text: "初六：師出以律，否臧凶。", meaning: "出師須有紀律，否則凶。" },
      { text: "九二：在師中，吉，無咎，王三錫命。", meaning: "在軍中居中正，吉，得王嘉獎。" },
      { text: "六三：師或輿尸，凶。", meaning: "軍中或載屍而歸，大凶。" },
      { text: "六四：師左次，無咎。", meaning: "退師駐紮，以退為進，無咎。" },
      { text: "六五：田有禽，利執言，無咎。長子帥師，弟子輿尸，貞凶。", meaning: "用人得當則無咎，用人不當則凶。" },
      { text: "上六：大君有命，開國承家，小人勿用。", meaning: "功成之後論功行賞，但小人不可重用。" }
    ],
    keywords: ["軍隊", "紀律", "領導", "師道", "統帥"],
    element: "水",
    nature: "地中有水，師眾之象，用兵治眾之道"
  },
  {
    number: 8, name: "比", fullName: "水地比", pinyin: "bǐ",
    upperTrigram: 5, lowerTrigram: 7,
    judgment: "吉。原筮元永貞，無咎。不寧方來，後夫凶。親附團結，宜誠信長久。",
    image: "地上有水，比。先王以建萬國，親諸侯。",
    lines: [
      { text: "初六：有孚比之，無咎。有孚盈缶，終來有他，吉。", meaning: "誠信親附，無咎，誠意滿溢終有意外之吉。" },
      { text: "六二：比之自內，貞吉。", meaning: "由內心親附，守正則吉。" },
      { text: "六三：比之匪人。", meaning: "親附非其人，有所不當。" },
      { text: "六四：外比之，貞吉。", meaning: "對外親附賢者，守正則吉。" },
      { text: "九五：顯比，王用三驅，失前禽，邑人不誡，吉。", meaning: "光明正大地親附，不強求，自然歸附。" },
      { text: "上六：比之無首，凶。", meaning: "親附而無領導，凶。" }
    ],
    keywords: ["親附", "團結", "合作", "輔助", "聯盟"],
    element: "水",
    nature: "水流於地上，親附團結之象"
  },
  {
    number: 9, name: "小畜", fullName: "風天小畜", pinyin: "xiǎo xù",
    upperTrigram: 4, lowerTrigram: 0,
    judgment: "亨。密雲不雨，自我西郊。力量尚小，積蓄待時。",
    image: "風行天上，小畜。君子以懿文德。",
    lines: [
      { text: "初九：復自道，何其咎？吉。", meaning: "回歸正道，有何過咎？吉。" },
      { text: "九二：牽復，吉。", meaning: "被牽引而回歸，吉。" },
      { text: "九三：輿說輻，夫妻反目。", meaning: "車輪脫落，如夫妻失和，事有阻礙。" },
      { text: "六四：有孚，血去惕出，無咎。", meaning: "有誠信，憂懼消散，無咎。" },
      { text: "九五：有孚攣如，富以其鄰。", meaning: "誠信相連，與鄰共富。" },
      { text: "上九：既雨既處，尚德載。婦貞厲，月幾望。君子征凶。", meaning: "陰陽和合而雨，功德圓滿，但不可過盈。" }
    ],
    keywords: ["積蓄", "小畜", "文德", "等待", "涵養"],
    element: "木",
    nature: "風行天上，以小畜大，涵養之象"
  },
  {
    number: 10, name: "履", fullName: "天澤履", pinyin: "lǚ",
    upperTrigram: 0, lowerTrigram: 1,
    judgment: "履虎尾，不咥人，亨。踐行禮儀，雖處危險，以禮自守可通。",
    image: "上天下澤，履。君子以辯上下，定民志。",
    lines: [
      { text: "初九：素履，往無咎。", meaning: "質樸踐行，前往無咎。" },
      { text: "九二：履道坦坦，幽人貞吉。", meaning: "行於坦途，隱逸之人守正則吉。" },
      { text: "六三：眇能視，跛能履，履虎尾，咥人凶。武人為于大君。", meaning: "能力不足而強行，如踏虎尾被咬，凶。" },
      { text: "九四：履虎尾，愬愬，終吉。", meaning: "踏虎尾而戒懼，終得吉。" },
      { text: "九五：夬履，貞厲。", meaning: "果斷踐行，雖正亦有危。" },
      { text: "上九：視履考祥，其旋元吉。", meaning: "回顧所行，察其吉凶，周全則大吉。" }
    ],
    keywords: ["踐行", "禮儀", "謹慎", "規範", "行為"],
    element: "金",
    nature: "天下有澤，以禮踐行，知危而行之象"
  },
  {
    number: 11, name: "泰", fullName: "地天泰", pinyin: "tài",
    upperTrigram: 7, lowerTrigram: 0,
    judgment: "小往大來，吉亨。天地交通，陰陽和合，萬事亨通。",
    image: "天地交，泰。后以財成天地之道，輔相天地之宜，以左右民。",
    lines: [
      { text: "初九：拔茅茹以其彙，征吉。", meaning: "拔茅草連根而起，同類相引，出征吉。" },
      { text: "九二：包荒，用馮河，不遐遺，朋亡，得尚于中行。", meaning: "包容荒蕪，勇涉大河，不忘遠方，得中道之行。" },
      { text: "九三：無平不陂，無往不復。艱貞無咎，勿恤其孚，于食有福。", meaning: "世無永平，往必有復，守正無咎。" },
      { text: "六四：翩翩，不富以其鄰，不戒以孚。", meaning: "輕快往來，不以財富而以誠信與鄰相交。" },
      { text: "六五：帝乙歸妹，以祉元吉。", meaning: "如帝乙嫁女，以福澤天下，大吉。" },
      { text: "上六：城復于隍，勿用師，自邑告命，貞吝。", meaning: "城牆傾頹，泰極否來，宜自省而非用兵。" }
    ],
    keywords: ["亨通", "交泰", "和合", "通達", "太平"],
    element: "土",
    nature: "天地交通，萬物亨泰之象"
  },
  {
    number: 12, name: "否", fullName: "天地否", pinyin: "pǐ",
    upperTrigram: 0, lowerTrigram: 7,
    judgment: "否之匪人，不利君子貞，大往小來。天地不交，閉塞不通。",
    image: "天地不交，否。君子以儉德辟難，不可榮以祿。",
    lines: [
      { text: "初六：拔茅茹以其彙，貞吉，亨。", meaning: "同類相引退守，守正則吉。" },
      { text: "六二：包承，小人吉，大人否，亨。", meaning: "包容承受，小人得利，大人處否境終可亨通。" },
      { text: "六三：包羞。", meaning: "包藏羞恥，心中慚愧。" },
      { text: "九四：有命無咎，疇離祉。", meaning: "奉天命行事，無咎，同類皆蒙福。" },
      { text: "九五：休否，大人吉。其亡其亡，繫于苞桑。", meaning: "否極泰來，大人吉，警惕以固其本。" },
      { text: "上九：傾否，先否後喜。", meaning: "否塞傾覆，先困後喜，否極泰來。" }
    ],
    keywords: ["閉塞", "不通", "困頓", "否極泰來", "阻隔"],
    element: "金",
    nature: "天地不交，閉塞否隔之象"
  },
  {
    number: 13, name: "同人", fullName: "天火同人", pinyin: "tóng rén",
    upperTrigram: 0, lowerTrigram: 2,
    judgment: "同人于野，亨，利涉大川，利君子貞。志同道合，和同於人。",
    image: "天與火，同人。君子以類族辨物。",
    lines: [
      { text: "初九：同人于門，無咎。", meaning: "出門會友，光明正大，無咎。" },
      { text: "六二：同人于宗，吝。", meaning: "僅與宗族相合，失之狹隘。" },
      { text: "九三：伏戎于莽，升其高陵，三歲不興。", meaning: "暗藏兵戎，久謀不成。" },
      { text: "九四：乘其墉，弗克攻，吉。", meaning: "登上城牆卻放棄攻擊，知止則吉。" },
      { text: "九五：同人先號咷而後笑，大師克相遇。", meaning: "先經歷艱辛哭泣，終能相聚歡笑。" },
      { text: "上九：同人于郊，無悔。", meaning: "在郊外與人和同，雖平淡但無悔。" }
    ],
    keywords: ["和同", "團結", "合作", "志同道合", "會合"],
    element: "金",
    nature: "天與火同行，志同道合之象"
  },
  {
    number: 14, name: "大有", fullName: "火天大有", pinyin: "dà yǒu",
    upperTrigram: 2, lowerTrigram: 0,
    judgment: "元亨。盛大豐有，光明在上。",
    image: "火在天上，大有。君子以遏惡揚善，順天休命。",
    lines: [
      { text: "初九：無交害，匪咎，艱則無咎。", meaning: "不涉及禍害，雖艱難亦無咎。" },
      { text: "九二：大車以載，有攸往，無咎。", meaning: "大車載物，前行穩當，無咎。" },
      { text: "九三：公用亨于天子，小人弗克。", meaning: "公侯朝獻天子，小人無此德能。" },
      { text: "九四：匪其彭，無咎。", meaning: "不逞威勢，無咎。" },
      { text: "六五：厥孚交如，威如，吉。", meaning: "以誠信交往，恩威並施，吉。" },
      { text: "上九：自天祐之，吉無不利。", meaning: "天佑之人，吉而無不利。" }
    ],
    keywords: ["豐有", "大有", "光明", "富有", "盛大"],
    element: "火",
    nature: "火在天上，大豐大有之象"
  },
  {
    number: 15, name: "謙", fullName: "地山謙", pinyin: "qiān",
    upperTrigram: 7, lowerTrigram: 6,
    judgment: "亨，君子有終。謙虛之道，萬事亨通。",
    image: "地中有山，謙。君子以裒多益寡，稱物平施。",
    lines: [
      { text: "初六：謙謙君子，用涉大川，吉。", meaning: "謙而又謙，涉險亦吉。" },
      { text: "六二：鳴謙，貞吉。", meaning: "謙名遠播，守正則吉。" },
      { text: "九三：勞謙，君子有終，吉。", meaning: "勤勞而謙遜，君子善終，吉。" },
      { text: "六四：無不利，撝謙。", meaning: "發揮謙德，無不利。" },
      { text: "六五：不富以其鄰，利用侵伐，無不利。", meaning: "不以富驕鄰，以謙行事，無不利。" },
      { text: "上六：鳴謙，利用行師征邑國。", meaning: "謙名遠聞，可用以征伐不服者。" }
    ],
    keywords: ["謙虛", "謙遜", "低調", "退讓", "美德"],
    element: "土",
    nature: "山在地中，高而能下，謙虛之象"
  },
  {
    number: 16, name: "豫", fullName: "雷地豫", pinyin: "yù",
    upperTrigram: 3, lowerTrigram: 7,
    judgment: "利建侯行師。順而動，豫樂和順。",
    image: "雷出地奮，豫。先王以作樂崇德，殷薦之上帝，以配祖考。",
    lines: [
      { text: "初六：鳴豫，凶。", meaning: "張揚逸樂，凶。" },
      { text: "六二：介于石，不終日，貞吉。", meaning: "堅如磐石，見幾而作，守正則吉。" },
      { text: "六三：盱豫，悔，遲有悔。", meaning: "仰望他人而樂，猶豫不決則有悔。" },
      { text: "九四：由豫，大有得，勿疑。朋盍簪。", meaning: "因豫而得大利，勿疑，朋友聚合。" },
      { text: "六五：貞疾，恆不死。", meaning: "雖有隱疾，但持恆不致於亡。" },
      { text: "上六：冥豫，成有渝，無咎。", meaning: "沉迷逸樂，若能改變則無咎。" }
    ],
    keywords: ["喜悅", "豫樂", "和順", "愉悅", "安樂"],
    element: "木",
    nature: "雷出地奮，順動豫樂之象"
  },
  {
    number: 17, name: "隨", fullName: "澤雷隨", pinyin: "suí",
    upperTrigram: 1, lowerTrigram: 3,
    judgment: "元亨利貞，無咎。隨順時勢，從善而行。",
    image: "澤中有雷，隨。君子以嚮晦入宴息。",
    lines: [
      { text: "初九：官有渝，貞吉。出門交有功。", meaning: "主管有所變化，守正則吉，出門交往有成。" },
      { text: "六二：係小子，失丈夫。", meaning: "追隨小人，失去賢者。" },
      { text: "六三：係丈夫，失小子。隨有求得，利居貞。", meaning: "追隨賢者而捨棄小人，有求必得。" },
      { text: "九四：隨有獲，貞凶。有孚在道，以明，何咎。", meaning: "隨從而有所獲，但宜以誠信光明行事。" },
      { text: "九五：孚于嘉，吉。", meaning: "誠信於美善，吉。" },
      { text: "上六：拘係之，乃從維之。王用亨于西山。", meaning: "緊密聯繫不捨，誠心祭祀，志誠相隨。" }
    ],
    keywords: ["隨從", "順勢", "跟隨", "適應", "隨時"],
    element: "金",
    nature: "澤中雷動，隨順而行之象"
  },
  {
    number: 18, name: "蠱", fullName: "山風蠱", pinyin: "gǔ",
    upperTrigram: 6, lowerTrigram: 4,
    judgment: "元亨，利涉大川。先甲三日，後甲三日。整治弊端，撥亂反正。",
    image: "山下有風，蠱。君子以振民育德。",
    lines: [
      { text: "初六：幹父之蠱，有子，考無咎，厲終吉。", meaning: "承擔父輩的弊端加以整治，雖險終吉。" },
      { text: "九二：幹母之蠱，不可貞。", meaning: "整治母輩之弊端，不宜過於強硬。" },
      { text: "九三：幹父之蠱，小有悔，無大咎。", meaning: "矯正父輩弊病，雖有小悔但無大過。" },
      { text: "六四：裕父之蠱，往見吝。", meaning: "寬容放縱弊端不治，前行則困窘。" },
      { text: "六五：幹父之蠱，用譽。", meaning: "以美德整治弊端，贏得讚譽。" },
      { text: "上九：不事王侯，高尚其事。", meaning: "不出仕為官，高潔自守。" }
    ],
    keywords: ["整治", "改革", "修正", "弊端", "糾偏"],
    element: "木",
    nature: "山下有風，蠱壞須治之象"
  },
  {
    number: 19, name: "臨", fullName: "地澤臨", pinyin: "lín",
    upperTrigram: 7, lowerTrigram: 1,
    judgment: "元亨利貞。至于八月有凶。居上臨下，親臨治理。",
    image: "澤上有地，臨。君子以教思無窮，容保民無疆。",
    lines: [
      { text: "初九：咸臨，貞吉。", meaning: "以感化臨民，守正則吉。" },
      { text: "九二：咸臨，吉，無不利。", meaning: "以感化之道臨事，吉而無不利。" },
      { text: "六三：甘臨，無攸利。既憂之，無咎。", meaning: "以甘言臨事無利，若能自省則無咎。" },
      { text: "六四：至臨，無咎。", meaning: "親自下臨，真誠無咎。" },
      { text: "六五：知臨，大君之宜，吉。", meaning: "以智慧臨治，合乎君道，吉。" },
      { text: "上六：敦臨，吉，無咎。", meaning: "敦厚親臨，吉而無咎。" }
    ],
    keywords: ["親臨", "治理", "領導", "臨近", "監督"],
    element: "土",
    nature: "地臨澤上，居高臨下之象"
  },
  {
    number: 20, name: "觀", fullName: "風地觀", pinyin: "guān",
    upperTrigram: 4, lowerTrigram: 7,
    judgment: "盥而不薦，有孚顒若。觀察省思，以德感化。",
    image: "風行地上，觀。先王以省方觀民設教。",
    lines: [
      { text: "初六：童觀，小人無咎，君子吝。", meaning: "幼稚之觀，小人無咎，君子則不足。" },
      { text: "六二：窺觀，利女貞。", meaning: "從門縫窺視，見識有限。" },
      { text: "六三：觀我生進退。", meaning: "反觀自身的進退得失。" },
      { text: "六四：觀國之光，利用賓于王。", meaning: "觀察國家之盛德，宜為王之賓客。" },
      { text: "九五：觀我生，君子無咎。", meaning: "反觀自己的德行，君子無咎。" },
      { text: "上九：觀其生，君子無咎。", meaning: "觀察他人之行為，君子無咎。" }
    ],
    keywords: ["觀察", "省思", "風範", "榜樣", "觀照"],
    element: "木",
    nature: "風行地上，觀覽省察之象"
  },
  {
    number: 21, name: "噬嗑", fullName: "火雷噬嗑", pinyin: "shì kè",
    upperTrigram: 2, lowerTrigram: 3,
    judgment: "亨，利用獄。咬合決斷，以法治理。",
    image: "雷電噬嗑，先王以明罰敕法。",
    lines: [
      { text: "初九：屨校滅趾，無咎。", meaning: "帶腳鐐而傷趾，小懲則無咎。" },
      { text: "六二：噬膚滅鼻，無咎。", meaning: "咬嫩肉而掩鼻，刑罰適當無咎。" },
      { text: "六三：噬腊肉，遇毒，小吝，無咎。", meaning: "咬硬肉遇毒，雖有小困但無大咎。" },
      { text: "九四：噬乾胏，得金矢，利艱貞，吉。", meaning: "咬帶骨乾肉，得堅利之器，堅守正道則吉。" },
      { text: "六五：噬乾肉，得黃金，貞厲，無咎。", meaning: "咬乾肉得黃金，守正雖有危但無咎。" },
      { text: "上九：何校滅耳，凶。", meaning: "帶枷鎖而傷耳，極刑之象，凶。" }
    ],
    keywords: ["決斷", "刑罰", "法治", "咬合", "執法"],
    element: "火",
    nature: "雷電交作，噬而合之，刑法決斷之象"
  },
  {
    number: 22, name: "賁", fullName: "山火賁", pinyin: "bì",
    upperTrigram: 6, lowerTrigram: 2,
    judgment: "亨，小利有攸往。文飾美化，適度修飾。",
    image: "山下有火，賁。君子以明庶政，無敢折獄。",
    lines: [
      { text: "初九：賁其趾，舍車而徒。", meaning: "裝飾腳趾，捨車步行，崇尚質樸。" },
      { text: "六二：賁其須。", meaning: "裝飾鬍鬚，附麗於上。" },
      { text: "九三：賁如濡如，永貞吉。", meaning: "修飾光潤，永守正道則吉。" },
      { text: "六四：賁如皤如，白馬翰如，匪寇婚媾。", meaning: "素白之飾，白馬飛馳，非寇乃求婚。" },
      { text: "六五：賁于丘園，束帛戔戔，吝，終吉。", meaning: "修飾園林，禮物雖薄但誠心，終吉。" },
      { text: "上九：白賁，無咎。", meaning: "以素白為飾，返璞歸真，無咎。" }
    ],
    keywords: ["文飾", "美化", "修飾", "外觀", "質樸"],
    element: "土",
    nature: "山下有火，文飾賁美之象"
  },
  {
    number: 23, name: "剝", fullName: "山地剝", pinyin: "bō",
    upperTrigram: 6, lowerTrigram: 7,
    judgment: "不利有攸往。剝落衰敗，不宜前進。",
    image: "山附于地，剝。上以厚下安宅。",
    lines: [
      { text: "初六：剝床以足，蔑貞凶。", meaning: "床足被剝蝕，根基動搖，凶。" },
      { text: "六二：剝床以辨，蔑貞凶。", meaning: "床框被剝蝕，漸近危險，凶。" },
      { text: "六三：剝之，無咎。", meaning: "順勢剝離，反而無咎。" },
      { text: "六四：剝床以膚，凶。", meaning: "剝蝕已及膚體，災禍臨身，凶。" },
      { text: "六五：貫魚，以宮人寵，無不利。", meaning: "如貫魚有序，以恩寵待人，無不利。" },
      { text: "上九：碩果不食，君子得輿，小人剝廬。", meaning: "大果未被食盡，君子得載，小人失所。" }
    ],
    keywords: ["剝落", "衰敗", "侵蝕", "瓦解", "凋零"],
    element: "土",
    nature: "山附於地，層層剝落之象"
  },
  {
    number: 24, name: "復", fullName: "地雷復", pinyin: "fù",
    upperTrigram: 7, lowerTrigram: 3,
    judgment: "亨。出入無疾，朋來無咎。反復其道，七日來復，利有攸往。一陽來復，生機重現。",
    image: "雷在地中，復。先王以至日閉關，商旅不行，后不省方。",
    lines: [
      { text: "初九：不遠復，無祇悔，元吉。", meaning: "不遠便能回歸，無大悔恨，大吉。" },
      { text: "六二：休復，吉。", meaning: "美好的回歸，吉。" },
      { text: "六三：頻復，厲，無咎。", meaning: "頻繁反覆，雖有危險但無大咎。" },
      { text: "六四：中行獨復。", meaning: "獨自走中道而回歸。" },
      { text: "六五：敦復，無悔。", meaning: "敦厚誠摯地回歸，無悔。" },
      { text: "上六：迷復，凶，有災眚。用行師，終有大敗。以其國君凶，至于十年不克征。", meaning: "迷失而不能回歸，凶，十年不能征伐。" }
    ],
    keywords: ["回歸", "復始", "一陽來復", "再生", "返回"],
    element: "木",
    nature: "雷在地中，一陽復始之象"
  },
  {
    number: 25, name: "無妄", fullName: "天雷無妄", pinyin: "wú wàng",
    upperTrigram: 0, lowerTrigram: 3,
    judgment: "元亨利貞。其匪正有眚，不利有攸往。至誠無妄，天命所歸。",
    image: "天下雷行，物與無妄。先王以茂對時育萬物。",
    lines: [
      { text: "初九：無妄，往吉。", meaning: "至誠無妄，前往吉利。" },
      { text: "六二：不耕穫，不菑畬，則利有攸往。", meaning: "不為收穫而耕，不為利益而為，反而有利。" },
      { text: "六三：無妄之災，或繫之牛，行人之得，邑人之災。", meaning: "無妄之災，意外損失，防不勝防。" },
      { text: "九四：可貞，無咎。", meaning: "可以守正，無咎。" },
      { text: "九五：無妄之疾，勿藥有喜。", meaning: "無妄之病，不藥自愈。" },
      { text: "上九：無妄，行有眚，無攸利。", meaning: "雖無妄為卻仍有災，不宜行動。" }
    ],
    keywords: ["真誠", "無妄", "天命", "自然", "純正"],
    element: "金",
    nature: "天下雷行，真實無妄之象"
  },
  {
    number: 26, name: "大畜", fullName: "山天大畜", pinyin: "dà xù",
    upperTrigram: 6, lowerTrigram: 0,
    judgment: "利貞，不家食吉，利涉大川。大蓄積德，宜出仕濟世。",
    image: "天在山中，大畜。君子以多識前言往行，以畜其德。",
    lines: [
      { text: "初九：有厲，利已。", meaning: "有危險，宜停止。" },
      { text: "九二：輿說輹。", meaning: "車軸脫落，暫停前行。" },
      { text: "九三：良馬逐，利艱貞。曰閑輿衛，利有攸往。", meaning: "良馬追逐，宜堅守正道。" },
      { text: "六四：童牛之牿，元吉。", meaning: "以橫木護幼牛之角，預防於先，大吉。" },
      { text: "六五：豶豕之牙，吉。", meaning: "去其凶猛之性，以柔治剛，吉。" },
      { text: "上九：何天之衢，亨。", meaning: "行天之大道，四通八達，亨通。" }
    ],
    keywords: ["積蓄", "大畜", "儲備", "涵養", "止蓄"],
    element: "土",
    nature: "天在山中，大蓄積止之象"
  },
  {
    number: 27, name: "頤", fullName: "山雷頤", pinyin: "yí",
    upperTrigram: 6, lowerTrigram: 3,
    judgment: "貞吉，觀頤，自求口實。頤養之道，慎飲食言語。",
    image: "山下有雷，頤。君子以慎言語，節飲食。",
    lines: [
      { text: "初九：舍爾靈龜，觀我朵頤，凶。", meaning: "捨棄自身智慧，覬覦他人食物，凶。" },
      { text: "六二：顛頤，拂經于丘頤，征凶。", meaning: "顛倒養人之道，違背常理，征行則凶。" },
      { text: "六三：拂頤，貞凶。十年勿用，無攸利。", meaning: "違背頤養之道，凶，十年不可用。" },
      { text: "六四：顛頤，吉。虎視眈眈，其欲逐逐，無咎。", meaning: "向下求養，吉。如虎覬覦，積極求取無咎。" },
      { text: "六五：拂經，居貞吉，不可涉大川。", meaning: "雖違常理，安守正道則吉，不宜冒險。" },
      { text: "上九：由頤，厲吉，利涉大川。", meaning: "為眾人所養，雖危但吉，利涉大川。" }
    ],
    keywords: ["頤養", "飲食", "養生", "言語", "修養"],
    element: "土",
    nature: "山下有雷，頤養萬物之象"
  },
  {
    number: 28, name: "大過", fullName: "澤風大過", pinyin: "dà guò",
    upperTrigram: 1, lowerTrigram: 4,
    judgment: "棟橈，利有攸往，亨。大過之時，非常之舉。",
    image: "澤滅木，大過。君子以獨立不懼，遯世無悶。",
    lines: [
      { text: "初六：藉用白茅，無咎。", meaning: "以白茅墊底，謹慎行事，無咎。" },
      { text: "九二：枯楊生稊，老夫得其女妻，無不利。", meaning: "枯木逢春，老而再生，無不利。" },
      { text: "九三：棟橈，凶。", meaning: "棟梁彎曲，力不勝任，凶。" },
      { text: "九四：棟隆，吉。有它吝。", meaning: "棟梁隆起，吉。但有他事則吝。" },
      { text: "九五：枯楊生華，老婦得其士夫，無咎無譽。", meaning: "枯木開花，華而不實，無咎亦無譽。" },
      { text: "上六：過涉滅頂，凶，無咎。", meaning: "涉水沒頂，雖凶但捨身成仁無咎。" }
    ],
    keywords: ["大過", "非常", "超越", "過度", "獨立"],
    element: "金",
    nature: "澤滅木，大過其常之象"
  },
  {
    number: 29, name: "坎", fullName: "坎為水", pinyin: "kǎn",
    upperTrigram: 5, lowerTrigram: 5,
    judgment: "習坎，有孚，維心亨，行有尚。重重險陷，以誠信行之。",
    image: "水洊至，習坎。君子以常德行，習教事。",
    lines: [
      { text: "初六：習坎，入于坎窞，凶。", meaning: "陷入重重險坑之中，凶。" },
      { text: "九二：坎有險，求小得。", meaning: "險中有險，只能求小有所得。" },
      { text: "六三：來之坎坎，險且枕，入于坎窞，勿用。", meaning: "進退皆坎，陷入深坑，不宜行動。" },
      { text: "六四：樽酒簋貳，用缶，納約自牖，終無咎。", meaning: "以簡樸之禮誠心相交，終無咎。" },
      { text: "九五：坎不盈，祗既平，無咎。", meaning: "水未滿溢，漸趨平穩，無咎。" },
      { text: "上六：係用徽纆，寘于叢棘，三歲不得，凶。", meaning: "被繩索捆綁置於荊棘中，三年不得脫身，凶。" }
    ],
    keywords: ["險陷", "水", "考驗", "誠信", "險阻"],
    element: "水",
    nature: "水流不息，重重險陷之象"
  },
  {
    number: 30, name: "離", fullName: "離為火", pinyin: "lí",
    upperTrigram: 2, lowerTrigram: 2,
    judgment: "利貞，亨。畜牝牛，吉。光明附麗，柔順守正。",
    image: "明兩作，離。大人以繼明照于四方。",
    lines: [
      { text: "初九：履錯然，敬之無咎。", meaning: "腳步交錯紛亂，恭敬以對則無咎。" },
      { text: "六二：黃離，元吉。", meaning: "黃色之光，中正文明，大吉。" },
      { text: "九三：日昃之離，不鼓缶而歌，則大耋之嗟，凶。", meaning: "日薄西山之時，若不安享則嗟嘆，凶。" },
      { text: "九四：突如其來如，焚如，死如，棄如。", meaning: "突然而至，如焚如死如棄，暴起暴落。" },
      { text: "六五：出涕沱若，戚嗟若，吉。", meaning: "涕泗橫流，憂戚嗟嘆，知憂則吉。" },
      { text: "上九：王用出征，有嘉折首，獲匪其醜，無咎。", meaning: "王者出征，斬獲元兇而非脅從，無咎。" }
    ],
    keywords: ["光明", "附麗", "火", "文明", "依附"],
    element: "火",
    nature: "明兩作離，光明附麗之象"
  },
  {
    number: 31, name: "咸", fullName: "澤山咸", pinyin: "xián",
    upperTrigram: 1, lowerTrigram: 6,
    judgment: "亨，利貞，取女吉。感應相通，心意相合。",
    image: "山上有澤，咸。君子以虛受人。",
    lines: [
      { text: "初六：咸其拇。", meaning: "感應於腳拇指，微動而已。" },
      { text: "六二：咸其腓，凶，居吉。", meaning: "感應於小腿，躁動則凶，安居則吉。" },
      { text: "九三：咸其股，執其隨，往吝。", meaning: "感應於大腿，隨他人而動，前往有困。" },
      { text: "九四：貞吉悔亡，憧憧往來，朋從爾思。", meaning: "守正吉而悔亡，心思往來不定，朋友隨你所思。" },
      { text: "九五：咸其脢，無悔。", meaning: "感應於背脊，不為外物所動，無悔。" },
      { text: "上六：咸其輔頰舌。", meaning: "感應於口舌，言語之感，宜慎言。" }
    ],
    keywords: ["感應", "感通", "婚姻", "交感", "心靈"],
    element: "金",
    nature: "山上有澤，天地感應之象"
  },
  {
    number: 32, name: "恆", fullName: "雷風恆", pinyin: "héng",
    upperTrigram: 3, lowerTrigram: 4,
    judgment: "亨，無咎，利貞，利有攸往。恆久之道，持之以恆。",
    image: "雷風恆，君子以立不易方。",
    lines: [
      { text: "初六：浚恆，貞凶，無攸利。", meaning: "過於急切追求恆久，凶，無利。" },
      { text: "九二：悔亡。", meaning: "悔恨消亡。" },
      { text: "九三：不恆其德，或承之羞，貞吝。", meaning: "德行不能持恆，或受恥辱，守正亦吝。" },
      { text: "九四：田無禽。", meaning: "田獵無獲，方向不對。" },
      { text: "六五：恆其德，貞，婦人吉，夫子凶。", meaning: "恆守其德，柔順者吉，剛強者凶。" },
      { text: "上六：振恆，凶。", meaning: "動搖恆心，凶。" }
    ],
    keywords: ["恆久", "持久", "恆心", "不變", "堅持"],
    element: "木",
    nature: "雷風相隨，恆久不變之象"
  },
  {
    number: 33, name: "遯", fullName: "天山遯", pinyin: "dùn",
    upperTrigram: 0, lowerTrigram: 6,
    judgment: "亨，小利貞。退避隱遁，以退為進。",
    image: "天下有山，遯。君子以遠小人，不惡而嚴。",
    lines: [
      { text: "初六：遯尾，厲，勿用有攸往。", meaning: "遁退落後，有危險，不宜前往。" },
      { text: "六二：執之用黃牛之革，莫之勝說。", meaning: "以黃牛皮革束縛，堅不可脫。" },
      { text: "九三：係遯，有疾厲，畜臣妾吉。", meaning: "受牽累而不能遁，有病危，養臣妾則吉。" },
      { text: "九四：好遯，君子吉，小人否。", meaning: "適時而遁，君子吉，小人不能。" },
      { text: "九五：嘉遯，貞吉。", meaning: "嘉美地隱退，守正則吉。" },
      { text: "上九：肥遯，無不利。", meaning: "從容遠遁，無不利。" }
    ],
    keywords: ["退避", "隱遁", "退讓", "遠離", "隱退"],
    element: "金",
    nature: "天下有山，退避隱遁之象"
  },
  {
    number: 34, name: "大壯", fullName: "雷天大壯", pinyin: "dà zhuàng",
    upperTrigram: 3, lowerTrigram: 0,
    judgment: "利貞。壯盛強大，宜守正道。",
    image: "雷在天上，大壯。君子以非禮弗履。",
    lines: [
      { text: "初九：壯于趾，征凶，有孚。", meaning: "壯在腳趾便急於前行，征伐則凶。" },
      { text: "九二：貞吉。", meaning: "守正則吉。" },
      { text: "九三：小人用壯，君子用罔。貞厲，羝羊觸藩，羸其角。", meaning: "小人恃強，君子不然。如羊觸藩籬，角被纏住。" },
      { text: "九四：貞吉悔亡，藩決不羸，壯于大輿之輹。", meaning: "守正吉而悔亡，藩籬破而不被纏，車軸壯健。" },
      { text: "六五：喪羊于易，無悔。", meaning: "失去壯羊於平地，無悔。" },
      { text: "上六：羝羊觸藩，不能退，不能遂，無攸利，艱則吉。", meaning: "進退兩難，無利可圖，堅守則吉。" }
    ],
    keywords: ["壯大", "強盛", "陽壯", "力量", "剛健"],
    element: "木",
    nature: "雷在天上，陽氣壯盛之象"
  },
  {
    number: 35, name: "晉", fullName: "火地晉", pinyin: "jìn",
    upperTrigram: 2, lowerTrigram: 7,
    judgment: "康侯用錫馬蕃庶，晝日三接。光明上進，晉升之道。",
    image: "明出地上，晉。君子以自昭明德。",
    lines: [
      { text: "初六：晉如摧如，貞吉。罔孚裕，無咎。", meaning: "晉升受阻，守正則吉。寬裕以待，無咎。" },
      { text: "六二：晉如愁如，貞吉。受茲介福，于其王母。", meaning: "晉升中有憂愁，守正則吉，得大福。" },
      { text: "六三：眾允，悔亡。", meaning: "眾人信任，悔恨消亡。" },
      { text: "九四：晉如鼫鼠，貞厲。", meaning: "如碩鼠般貪進，守正亦有危。" },
      { text: "六五：悔亡，失得勿恤，往吉，無不利。", meaning: "悔亡，不計得失，前行吉利。" },
      { text: "上九：晉其角，維用伐邑，厲吉，無咎，貞吝。", meaning: "晉升至極如角，用以征伐，危中有吉。" }
    ],
    keywords: ["晉升", "進步", "光明", "前進", "提升"],
    element: "火",
    nature: "明出地上，光明晉升之象"
  },
  {
    number: 36, name: "明夷", fullName: "地火明夷", pinyin: "míng yí",
    upperTrigram: 7, lowerTrigram: 2,
    judgment: "利艱貞。光明被傷，韜光養晦。",
    image: "明入地中，明夷。君子以蒞眾，用晦而明。",
    lines: [
      { text: "初九：明夷于飛，垂其翼。君子于行，三日不食。有攸往，主人有言。", meaning: "光明受傷如鳥垂翼，君子出行忍飢受苦。" },
      { text: "六二：明夷，夷于左股，用拯馬壯，吉。", meaning: "光明受傷於左腿，以壯馬救護，吉。" },
      { text: "九三：明夷于南狩，得其大首，不可疾貞。", meaning: "南行狩獵擒獲元兇，不可急於求成。" },
      { text: "六四：入于左腹，獲明夷之心，于出門庭。", meaning: "深入核心了解傷明之由，而後從容離去。" },
      { text: "六五：箕子之明夷，利貞。", meaning: "如箕子般韜光養晦，利於守正。" },
      { text: "上六：不明晦，初登于天，後入于地。", meaning: "先明後暗，先升後墜。" }
    ],
    keywords: ["韜光", "養晦", "明夷", "隱藏", "保全"],
    element: "土",
    nature: "明入地中，光明受損之象"
  },
  {
    number: 37, name: "家人", fullName: "風火家人", pinyin: "jiā rén",
    upperTrigram: 4, lowerTrigram: 2,
    judgment: "利女貞。治家之道，女正位乎內。",
    image: "風自火出，家人。君子以言有物而行有恆。",
    lines: [
      { text: "初九：閑有家，悔亡。", meaning: "治家有規矩防範，悔恨消亡。" },
      { text: "六二：無攸遂，在中饋，貞吉。", meaning: "不擅自作主，主持家中飲食，守正則吉。" },
      { text: "九三：家人嗃嗃，悔厲吉。婦子嘻嘻，終吝。", meaning: "治家嚴厲雖有悔但吉，放縱嬉笑則終有困。" },
      { text: "六四：富家大吉。", meaning: "使家富裕，大吉。" },
      { text: "九五：王假有家，勿恤吉。", meaning: "王者至於有家，不憂則吉。" },
      { text: "上九：有孚威如，終吉。", meaning: "有誠信且有威嚴，終吉。" }
    ],
    keywords: ["家庭", "治家", "家人", "家道", "齊家"],
    element: "木",
    nature: "風自火出，家道齊整之象"
  },
  {
    number: 38, name: "睽", fullName: "火澤睽", pinyin: "kuí",
    upperTrigram: 2, lowerTrigram: 1,
    judgment: "小事吉。乖離相背，求同存異。",
    image: "上火下澤，睽。君子以同而異。",
    lines: [
      { text: "初九：悔亡，喪馬勿逐自復。見惡人無咎。", meaning: "悔亡，失馬不追自會回來。見惡人以免禍。" },
      { text: "九二：遇主于巷，無咎。", meaning: "巷中偶遇主人，無咎。" },
      { text: "六三：見輿曳，其牛掣，其人天且劓，無初有終。", meaning: "車被拉扯，牛被牽制，人受刑辱，但無初有終。" },
      { text: "九四：睽孤，遇元夫，交孚，厲無咎。", meaning: "孤立中遇到善人，以誠相交，雖危無咎。" },
      { text: "六五：悔亡，厥宗噬膚，往何咎？", meaning: "悔亡，同宗相親如噬膚之易，前往何咎。" },
      { text: "上九：睽孤，見豕負塗，載鬼一車，先張之弧，後說之弧。匪寇婚媾，往遇雨則吉。", meaning: "疑慮重重，終知非寇而是婚媾，往遇雨（陰陽和合）則吉。" }
    ],
    keywords: ["乖離", "對立", "背離", "異同", "矛盾"],
    element: "火",
    nature: "火炎上澤潤下，乖離相背之象"
  },
  {
    number: 39, name: "蹇", fullName: "水山蹇", pinyin: "jiǎn",
    upperTrigram: 5, lowerTrigram: 6,
    judgment: "利西南，不利東北。利見大人，貞吉。行路艱難，宜求助賢人。",
    image: "山上有水，蹇。君子以反身修德。",
    lines: [
      { text: "初六：往蹇來譽。", meaning: "前行困難，退回則有讚譽。" },
      { text: "六二：王臣蹇蹇，匪躬之故。", meaning: "王臣歷盡艱難，非為自身之故。" },
      { text: "九三：往蹇來反。", meaning: "前行困難，退回歸來。" },
      { text: "六四：往蹇來連。", meaning: "前行困難，退回與同伴相連。" },
      { text: "九五：大蹇朋來。", meaning: "大難之時，朋友前來相助。" },
      { text: "上六：往蹇來碩，吉。利見大人。", meaning: "退回豐碩，吉。宜見大人。" }
    ],
    keywords: ["困難", "艱險", "蹇阻", "阻礙", "反省"],
    element: "水",
    nature: "山上有水，行路蹇難之象"
  },
  {
    number: 40, name: "解", fullName: "雷水解", pinyin: "xiè",
    upperTrigram: 3, lowerTrigram: 5,
    judgment: "利西南。無所往，其來復吉。有攸往，夙吉。困難解除，宜速行動。",
    image: "雷雨作，解。君子以赦過宥罪。",
    lines: [
      { text: "初六：無咎。", meaning: "無咎。" },
      { text: "九二：田獲三狐，得黃矢，貞吉。", meaning: "田獵獲三狐，得黃金之箭，守正吉。" },
      { text: "六三：負且乘，致寇至，貞吝。", meaning: "背負財物而乘車炫耀，招致盜寇。" },
      { text: "九四：解而拇，朋至斯孚。", meaning: "解除拇指之縛，朋友至而誠信相交。" },
      { text: "六五：君子維有解，吉，有孚于小人。", meaning: "君子能解除困難，吉，誠信可感化小人。" },
      { text: "上六：公用射隼于高墉之上，獲之，無不利。", meaning: "公侯射高牆上之鷹隼，捕獲之，無不利。" }
    ],
    keywords: ["解除", "化解", "疏解", "解脫", "寬赦"],
    element: "木",
    nature: "雷雨交作，解除困難之象"
  },
  {
    number: 41, name: "損", fullName: "山澤損", pinyin: "sǔn",
    upperTrigram: 6, lowerTrigram: 1,
    judgment: "有孚，元吉，無咎，可貞，利有攸往。曷之用？二簋可用享。減損以益上，誠信為本。",
    image: "山下有澤，損。君子以懲忿窒欲。",
    lines: [
      { text: "初九：已事遄往，無咎，酌損之。", meaning: "事畢速往相助，無咎，酌量減損。" },
      { text: "九二：利貞，征凶，弗損益之。", meaning: "利於守正，征行凶，不損反益。" },
      { text: "六三：三人行則損一人，一人行則得其友。", meaning: "三人同行必損一人，獨行則得友伴。" },
      { text: "六四：損其疾，使遄有喜，無咎。", meaning: "減損其過失，速有喜慶，無咎。" },
      { text: "六五：或益之十朋之龜，弗克違，元吉。", meaning: "有人贈以價值十朋之寶龜，不可推辭，大吉。" },
      { text: "上九：弗損益之，無咎，貞吉，利有攸往，得臣無家。", meaning: "不損反益，無咎，吉。得到捨家為公之臣。" }
    ],
    keywords: ["減損", "損己益人", "節制", "謙抑", "奉獻"],
    element: "土",
    nature: "山下有澤，損下益上之象"
  },
  {
    number: 42, name: "益", fullName: "風雷益", pinyin: "yì",
    upperTrigram: 4, lowerTrigram: 3,
    judgment: "利有攸往，利涉大川。損上益下，利益萬民。",
    image: "風雷益，君子以見善則遷，有過則改。",
    lines: [
      { text: "初九：利用為大作，元吉，無咎。", meaning: "宜成就大事，大吉無咎。" },
      { text: "六二：或益之十朋之龜，弗克違。永貞吉。王用享于帝，吉。", meaning: "受惠十朋之龜，不可推辭。永守正道吉。" },
      { text: "六三：益之用凶事，無咎。有孚中行，告公用圭。", meaning: "因凶事而受益，無咎。以誠信行中道。" },
      { text: "六四：中行告公從，利用為依遷國。", meaning: "行中道以告公，利於遷都大事。" },
      { text: "九五：有孚惠心，勿問元吉。有孚惠我德。", meaning: "有誠信惠及之心，不必問則大吉。" },
      { text: "上九：莫益之，或擊之，立心勿恆，凶。", meaning: "無人增益反遭攻擊，心志不恆，凶。" }
    ],
    keywords: ["增益", "利益", "助益", "損上益下", "施惠"],
    element: "木",
    nature: "風雷相助，損上益下之象"
  },
  {
    number: 43, name: "夬", fullName: "澤天夬", pinyin: "guài",
    upperTrigram: 1, lowerTrigram: 0,
    judgment: "揚于王庭，孚號有厲，告自邑，不利即戎，利有攸往。決斷去除，剛決柔。",
    image: "澤上於天，夬。君子以施祿及下，居德則忌。",
    lines: [
      { text: "初九：壯于前趾，往不勝為咎。", meaning: "壯於腳趾急於前行，力不勝則有咎。" },
      { text: "九二：惕號，莫夜有戎，勿恤。", meaning: "戒備呼號，夜間有兵戎，勿憂。" },
      { text: "九三：壯于頄，有凶。君子夬夬，獨行遇雨，若濡有慍，無咎。", meaning: "剛壯顯於面，有凶。獨行遇雨雖不悅，無咎。" },
      { text: "九四：臀無膚，其行次且。牽羊悔亡，聞言不信。", meaning: "臀無皮膚行走艱難，牽羊則悔亡。" },
      { text: "九五：莧陸夬夬，中行無咎。", meaning: "如拔除莧草般決斷，行中道無咎。" },
      { text: "上六：無號，終有凶。", meaning: "不呼號戒備，終將有凶。" }
    ],
    keywords: ["決斷", "去除", "果斷", "剛決", "決裂"],
    element: "金",
    nature: "澤上於天，決斷剛毅之象"
  },
  {
    number: 44, name: "姤", fullName: "天風姤", pinyin: "gòu",
    upperTrigram: 0, lowerTrigram: 4,
    judgment: "女壯，勿用取女。一陰初生，不期而遇。",
    image: "天下有風，姤。后以施命誥四方。",
    lines: [
      { text: "初六：繫于金柅，貞吉。有攸往，見凶。羸豕孚蹢躅。", meaning: "繫縛於金屬車閘，守正吉。前往則見凶。" },
      { text: "九二：包有魚，無咎，不利賓。", meaning: "包中有魚，無咎，但不利招待賓客。" },
      { text: "九三：臀無膚，其行次且，厲，無大咎。", meaning: "行走艱難有危險，但無大咎。" },
      { text: "九四：包無魚，起凶。", meaning: "包中無魚，生起凶兆。" },
      { text: "九五：以杞包瓜，含章，有隕自天。", meaning: "以杞葉包瓜，含蓄文采，意外從天而降。" },
      { text: "上九：姤其角，吝，無咎。", meaning: "遇合於角端，困窘但無大咎。" }
    ],
    keywords: ["相遇", "邂逅", "姤合", "不期而遇", "初陰"],
    element: "金",
    nature: "天下有風，不期而遇之象"
  },
  {
    number: 45, name: "萃", fullName: "澤地萃", pinyin: "cuì",
    upperTrigram: 1, lowerTrigram: 7,
    judgment: "亨，王假有廟，利見大人，亨，利貞。用大牲吉，利有攸往。聚集薈萃，群賢畢至。",
    image: "澤上於地，萃。君子以除戎器，戒不虞。",
    lines: [
      { text: "初六：有孚不終，乃亂乃萃。若號，一握為笑，勿恤，往無咎。", meaning: "誠信未能始終如一，紛亂聚合。呼號求助，終轉悲為喜。" },
      { text: "六二：引吉，無咎，孚乃利用禴。", meaning: "受引領則吉，無咎，誠信可用簡祭。" },
      { text: "六三：萃如嗟如，無攸利，往無咎，小吝。", meaning: "聚而嘆息，無利，前往無咎但有小困。" },
      { text: "九四：大吉，無咎。", meaning: "大吉，無咎。" },
      { text: "九五：萃有位，無咎。匪孚，元永貞，悔亡。", meaning: "聚集而有位，無咎。若人不信，以長久正道自持。" },
      { text: "上六：齎咨涕洟，無咎。", meaning: "嘆息涕淚，但無咎。" }
    ],
    keywords: ["聚集", "萃集", "匯合", "薈萃", "集會"],
    element: "金",
    nature: "澤上於地，萬物聚萃之象"
  },
  {
    number: 46, name: "升", fullName: "地風升", pinyin: "shēng",
    upperTrigram: 7, lowerTrigram: 4,
    judgment: "元亨，用見大人，勿恤，南征吉。上升成長，積小成大。",
    image: "地中生木，升。君子以順德，積小以高大。",
    lines: [
      { text: "初六：允升，大吉。", meaning: "信然上升，大吉。" },
      { text: "九二：孚乃利用禴，無咎。", meaning: "有誠信則利用簡祭，無咎。" },
      { text: "九三：升虛邑。", meaning: "上升入空城，暢行無阻。" },
      { text: "六四：王用亨于岐山，吉，無咎。", meaning: "王在岐山祭祀，吉而無咎。" },
      { text: "六五：貞吉，升階。", meaning: "守正則吉，逐步上升。" },
      { text: "上六：冥升，利于不息之貞。", meaning: "盲目上升，宜以不息之正道自勉。" }
    ],
    keywords: ["上升", "成長", "提升", "積累", "進升"],
    element: "木",
    nature: "地中生木，逐漸上升之象"
  },
  {
    number: 47, name: "困", fullName: "澤水困", pinyin: "kùn",
    upperTrigram: 1, lowerTrigram: 5,
    judgment: "亨，貞，大人吉，無咎。有言不信。困窮之時，守正待通。",
    image: "澤無水，困。君子以致命遂志。",
    lines: [
      { text: "初六：臀困于株木，入于幽谷，三歲不覿。", meaning: "坐困於枯木之上，入幽暗之谷，三年不見人。" },
      { text: "九二：困于酒食，朱紱方來，利用亨祀，征凶，無咎。", meaning: "困於酒食之中，貴人將來，宜祭祀，征行凶。" },
      { text: "六三：困于石，據于蒺藜，入于其宮，不見其妻，凶。", meaning: "困於巨石，倚靠荊棘，歸家不見妻，凶。" },
      { text: "九四：來徐徐，困于金車，吝，有終。", meaning: "緩緩而來，困於金車之中，吝但有終。" },
      { text: "九五：劓刖，困于赤紱，乃徐有說，利用祭祀。", meaning: "受刑罰之困，漸有喜悅，利於祭祀。" },
      { text: "上六：困于葛藟，于臲卼，曰動悔有悔，征吉。", meaning: "困於葛藤纏繞，搖搖不安，行動則吉。" }
    ],
    keywords: ["困窮", "困境", "困難", "堅忍", "守志"],
    element: "金",
    nature: "澤無水，困窮乏絕之象"
  },
  {
    number: 48, name: "井", fullName: "水風井", pinyin: "jǐng",
    upperTrigram: 5, lowerTrigram: 4,
    judgment: "改邑不改井，無喪無得，往來井井。汔至，亦未繘井，羸其瓶，凶。井養不窮，取之不竭。",
    image: "木上有水，井。君子以勞民勸相。",
    lines: [
      { text: "初六：井泥不食，舊井無禽。", meaning: "井底泥濘不能食用，廢井連禽鳥都不來。" },
      { text: "九二：井谷射鮒，甕敝漏。", meaning: "井中如谷射小魚，水甕破漏。" },
      { text: "九三：井渫不食，為我心惻，可用汲，王明，並受其福。", meaning: "井已清潔卻無人食用，令人心痛。" },
      { text: "六四：井甃，無咎。", meaning: "用磚修砌井壁，無咎。" },
      { text: "九五：井冽，寒泉食。", meaning: "井水清冽，寒泉可飲。" },
      { text: "上六：井收勿幕，有孚元吉。", meaning: "井水充盈不必蓋覆，有誠信大吉。" }
    ],
    keywords: ["井養", "滋養", "源泉", "不竭", "養民"],
    element: "水",
    nature: "木上有水，井養不窮之象"
  },
  {
    number: 49, name: "革", fullName: "澤火革", pinyin: "gé",
    upperTrigram: 1, lowerTrigram: 2,
    judgment: "己日乃孚，元亨利貞，悔亡。變革更新，順天應人。",
    image: "澤中有火，革。君子以治曆明時。",
    lines: [
      { text: "初九：鞏用黃牛之革。", meaning: "以黃牛皮革鞏固束縛，不宜輕動。" },
      { text: "六二：己日乃革之，征吉，無咎。", meaning: "時機成熟便施行變革，征行吉利。" },
      { text: "九三：征凶，貞厲。革言三就，有孚。", meaning: "征行凶，守正有危。變革之言三次而成，有信。" },
      { text: "九四：悔亡，有孚改命，吉。", meaning: "悔亡，以誠信改革命運，吉。" },
      { text: "九五：大人虎變，未占有孚。", meaning: "大人如虎般威嚴變革，不必占卜便有信。" },
      { text: "上六：君子豹變，小人革面。征凶，居貞吉。", meaning: "君子如豹般文采煥然，小人改換面目。" }
    ],
    keywords: ["變革", "改革", "革新", "除舊", "更新"],
    element: "金",
    nature: "澤中有火，變革除舊之象"
  },
  {
    number: 50, name: "鼎", fullName: "火風鼎", pinyin: "dǐng",
    upperTrigram: 2, lowerTrigram: 4,
    judgment: "元吉，亨。鼎新革故，文明以養。",
    image: "木上有火，鼎。君子以正位凝命。",
    lines: [
      { text: "初六：鼎顛趾，利出否，得妾以其子，無咎。", meaning: "鼎翻倒以倒出渣滓，去舊迎新，無咎。" },
      { text: "九二：鼎有實，我仇有疾，不我能即，吉。", meaning: "鼎中有實物，仇敵有病不能近我，吉。" },
      { text: "九三：鼎耳革，其行塞，雉膏不食，方雨虧悔，終吉。", meaning: "鼎耳變形，行動受阻，待雨後悔消，終吉。" },
      { text: "九四：鼎折足，覆公餗，其形渥，凶。", meaning: "鼎足折斷，傾覆公侯之食，凶。" },
      { text: "六五：鼎黃耳金鉉，利貞。", meaning: "鼎有黃金耳環，利於守正。" },
      { text: "上九：鼎玉鉉，大吉，無不利。", meaning: "鼎以玉為環，大吉無不利。" }
    ],
    keywords: ["鼎新", "烹飪", "養賢", "革故", "文明"],
    element: "火",
    nature: "木上有火，鼎烹養賢之象"
  },
  {
    number: 51, name: "震", fullName: "震為雷", pinyin: "zhèn",
    upperTrigram: 3, lowerTrigram: 3,
    judgment: "亨。震來虩虩，笑言啞啞。震驚百里，不喪匕鬯。雷震驚懼，戒慎恐懼。",
    image: "洊雷震，君子以恐懼修省。",
    lines: [
      { text: "初九：震來虩虩，後笑言啞啞，吉。", meaning: "雷震來時恐懼，後轉為歡笑，吉。" },
      { text: "六二：震來厲，億喪貝，躋于九陵，勿逐，七日得。", meaning: "雷震來勢危險，失去財物，登高避難，七日可得。" },
      { text: "六三：震蘇蘇，震行無眚。", meaning: "雷震而驚惶不安，因震而行動可免災。" },
      { text: "九四：震遂泥。", meaning: "雷震陷入泥中，行動受阻。" },
      { text: "六五：震往來厲，億無喪有事。", meaning: "雷震往來皆有危險，但終不會失去大事。" },
      { text: "上六：震索索，視矍矍，征凶。震不于其躬，于其鄰，無咎。婚媾有言。", meaning: "震恐不安，驚懼四顧。禍不及身而及鄰，無咎。" }
    ],
    keywords: ["震動", "驚懼", "雷", "奮起", "戒懼"],
    element: "木",
    nature: "洊雷重震，震動驚懼之象"
  },
  {
    number: 52, name: "艮", fullName: "艮為山", pinyin: "gèn",
    upperTrigram: 6, lowerTrigram: 6,
    judgment: "艮其背，不獲其身，行其庭，不見其人，無咎。止靜安定，知止而止。",
    image: "兼山艮，君子以思不出其位。",
    lines: [
      { text: "初六：艮其趾，無咎，利永貞。", meaning: "止於腳趾，不妄動，無咎，利於長久守正。" },
      { text: "六二：艮其腓，不拯其隨，其心不快。", meaning: "止於小腿，不能救助追隨者，心中不快。" },
      { text: "九三：艮其限，列其夤，厲薰心。", meaning: "止於腰際，脊背裂痛，焦灼於心。" },
      { text: "六四：艮其身，無咎。", meaning: "止於其身，無咎。" },
      { text: "六五：艮其輔，言有序，悔亡。", meaning: "止於口頰，言語有序，悔恨消亡。" },
      { text: "上九：敦艮，吉。", meaning: "敦厚篤實地止息，吉。" }
    ],
    keywords: ["止靜", "安定", "山", "知止", "靜止"],
    element: "土",
    nature: "兩山重疊，止靜安定之象"
  },
  {
    number: 53, name: "漸", fullName: "風山漸", pinyin: "jiàn",
    upperTrigram: 4, lowerTrigram: 6,
    judgment: "女歸吉，利貞。循序漸進，水到渠成。",
    image: "山上有木，漸。君子以居賢德善俗。",
    lines: [
      { text: "初六：鴻漸于干，小子厲，有言，無咎。", meaning: "鴻雁漸進於水邊，小人有危，有議論，但無咎。" },
      { text: "六二：鴻漸于磐，飲食衎衎，吉。", meaning: "鴻雁漸進於磐石，飲食安樂，吉。" },
      { text: "九三：鴻漸于陸，夫征不復，婦孕不育，凶。利禦寇。", meaning: "鴻雁漸進於陸地，夫征不歸，婦孕不育，凶。" },
      { text: "六四：鴻漸于木，或得其桷，無咎。", meaning: "鴻雁漸進於樹木，或棲於平枝，無咎。" },
      { text: "九五：鴻漸于陵，婦三歲不孕，終莫之勝，吉。", meaning: "鴻雁漸進於丘陵，雖久不孕終不可阻，吉。" },
      { text: "上九：鴻漸于陸，其羽可用為儀，吉。", meaning: "鴻雁高飛，其羽可為儀飾，吉。" }
    ],
    keywords: ["漸進", "循序", "逐步", "穩健", "進展"],
    element: "木",
    nature: "山上有木，循序漸進之象"
  },
  {
    number: 54, name: "歸妹", fullName: "雷澤歸妹", pinyin: "guī mèi",
    upperTrigram: 3, lowerTrigram: 1,
    judgment: "征凶，無攸利。少女出嫁，不得其正。",
    image: "澤上有雷，歸妹。君子以永終知敝。",
    lines: [
      { text: "初九：歸妹以娣，跛能履，征吉。", meaning: "以陪嫁之女出嫁，雖跛能行，征行吉。" },
      { text: "九二：眇能視，利幽人之貞。", meaning: "雖眇目能視，利於幽隱之人守正。" },
      { text: "六三：歸妹以須，反歸以娣。", meaning: "出嫁而待時，反以陪嫁之女身份歸來。" },
      { text: "九四：歸妹愆期，遲歸有時。", meaning: "出嫁延期，遲歸但終有時機。" },
      { text: "六五：帝乙歸妹，其君之袂不如其娣之袂良。月幾望，吉。", meaning: "帝乙嫁女，質樸勝於華麗，月近圓滿，吉。" },
      { text: "上六：女承筐無實，士刲羊無血，無攸利。", meaning: "女子承筐無果實，男子宰羊無血，無利。" }
    ],
    keywords: ["歸妹", "婚嫁", "少女", "出嫁", "歸宿"],
    element: "木",
    nature: "澤上有雷，少女出嫁之象"
  },
  {
    number: 55, name: "豐", fullName: "雷火豐", pinyin: "fēng",
    upperTrigram: 3, lowerTrigram: 2,
    judgment: "亨，王假之，勿憂，宜日中。盛大豐滿，光明盛大。",
    image: "雷電皆至，豐。君子以折獄致刑。",
    lines: [
      { text: "初九：遇其配主，雖旬無咎，往有尚。", meaning: "遇到相配之主，十日內無咎，前往有嘉尚。" },
      { text: "六二：豐其蔀，日中見斗，往得疑疾，有孚發若，吉。", meaning: "遮蔽極盛，日中見星。以誠信發明之，吉。" },
      { text: "九三：豐其沛，日中見沫，折其右肱，無咎。", meaning: "遮蔽更甚，日中見小星，折其右臂，無咎。" },
      { text: "九四：豐其蔀，日中見斗，遇其夷主，吉。", meaning: "遮蔽豐厚，日中見星，遇到同等之主，吉。" },
      { text: "六五：來章有慶譽，吉。", meaning: "來顯文章，有慶賀讚譽，吉。" },
      { text: "上六：豐其屋，蔀其家，窺其戶，闃其無人，三歲不覿，凶。", meaning: "屋宇豐大卻遮蔽其家，門內寂無人，三年不見，凶。" }
    ],
    keywords: ["豐盛", "盛大", "光明", "豐滿", "極盛"],
    element: "火",
    nature: "雷電皆至，盛大豐滿之象"
  },
  {
    number: 56, name: "旅", fullName: "火山旅", pinyin: "lǚ",
    upperTrigram: 2, lowerTrigram: 6,
    judgment: "小亨，旅貞吉。旅行在外，謹慎守正。",
    image: "山上有火，旅。君子以明慎用刑而不留獄。",
    lines: [
      { text: "初六：旅瑣瑣，斯其所取災。", meaning: "旅途瑣碎小事，因此招致災禍。" },
      { text: "六二：旅即次，懷其資，得童僕貞。", meaning: "旅途住宿旅館，懷藏旅資，得到忠誠僮僕。" },
      { text: "九三：旅焚其次，喪其童僕，貞厲。", meaning: "旅途住所被焚，失去僮僕，守正有危。" },
      { text: "九四：旅于處，得其資斧，我心不快。", meaning: "旅途暫住一處，得到資財，但心中不快。" },
      { text: "六五：射雉一矢亡，終以譽命。", meaning: "射雉一箭而失，終以美譽受命。" },
      { text: "上九：鳥焚其巢，旅人先笑後號咷，喪牛于易，凶。", meaning: "鳥巢被焚，先笑後哭，失牛於田野，凶。" }
    ],
    keywords: ["旅行", "羈旅", "漂泊", "在外", "客居"],
    element: "火",
    nature: "山上有火，旅途漂泊之象"
  },
  {
    number: 57, name: "巽", fullName: "巽為風", pinyin: "xùn",
    upperTrigram: 4, lowerTrigram: 4,
    judgment: "小亨，利有攸往，利見大人。柔順深入，風行草偃。",
    image: "隨風巽，君子以申命行事。",
    lines: [
      { text: "初六：進退，利武人之貞。", meaning: "進退不定，宜以武人之堅毅守正。" },
      { text: "九二：巽在床下，用史巫紛若，吉，無咎。", meaning: "謙遜至極如在床下，借助巫史以通神明，吉。" },
      { text: "九三：頻巽，吝。", meaning: "過度謙卑順從，困窘。" },
      { text: "六四：悔亡，田獲三品。", meaning: "悔亡，田獵收穫三等獵物。" },
      { text: "九五：貞吉悔亡，無不利。無初有終，先庚三日，後庚三日，吉。", meaning: "守正吉，悔亡，無不利。雖無好的開始但有好的結局。" },
      { text: "上九：巽在床下，喪其資斧，貞凶。", meaning: "過度卑屈如在床下，失去資財工具，凶。" }
    ],
    keywords: ["柔順", "深入", "風", "謙遜", "漸進"],
    element: "木",
    nature: "隨風相繼，柔順深入之象"
  },
  {
    number: 58, name: "兌", fullName: "兌為澤", pinyin: "duì",
    upperTrigram: 1, lowerTrigram: 1,
    judgment: "亨，利貞。喜悅和樂，以正為本。",
    image: "麗澤兌，君子以朋友講習。",
    lines: [
      { text: "初九：和兌，吉。", meaning: "和悅相處，吉。" },
      { text: "九二：孚兌，吉，悔亡。", meaning: "以誠信相悅，吉而悔亡。" },
      { text: "六三：來兌，凶。", meaning: "求悅於人而來，凶。" },
      { text: "九四：商兌未寧，介疾有喜。", meaning: "商議悅事未安寧，隔絕小疾反有喜。" },
      { text: "九五：孚于剝，有厲。", meaning: "信任於剝蝕者，有危險。" },
      { text: "上六：引兌。", meaning: "引誘而悅，不得正道。" }
    ],
    keywords: ["喜悅", "和樂", "澤", "歡樂", "講習"],
    element: "金",
    nature: "兩澤相連，喜悅和樂之象"
  },
  {
    number: 59, name: "渙", fullName: "風水渙", pinyin: "huàn",
    upperTrigram: 4, lowerTrigram: 5,
    judgment: "亨，王假有廟，利涉大川，利貞。渙散離散，以德聚之。",
    image: "風行水上，渙。先王以享于帝立廟。",
    lines: [
      { text: "初六：用拯馬壯，吉。", meaning: "以壯馬救援，吉。" },
      { text: "九二：渙奔其機，悔亡。", meaning: "渙散之時奔赴所依，悔亡。" },
      { text: "六三：渙其躬，無悔。", meaning: "渙散其身，捨己為人，無悔。" },
      { text: "六四：渙其群，元吉。渙有丘，匪夷所思。", meaning: "解散朋黨，大吉。散而成丘，非常人所能想。" },
      { text: "九五：渙汗其大號，渙王居，無咎。", meaning: "如汗水般發布號令，王者散發恩澤，無咎。" },
      { text: "上九：渙其血去逖出，無咎。", meaning: "渙散其血傷而遠去，無咎。" }
    ],
    keywords: ["渙散", "離散", "疏散", "分散", "聚合"],
    element: "木",
    nature: "風行水上，渙散離合之象"
  },
  {
    number: 60, name: "節", fullName: "水澤節", pinyin: "jié",
    upperTrigram: 5, lowerTrigram: 1,
    judgment: "亨，苦節不可貞。節制有度，過猶不及。",
    image: "澤上有水，節。君子以制數度，議德行。",
    lines: [
      { text: "初九：不出戶庭，無咎。", meaning: "不出門庭，知止而止，無咎。" },
      { text: "九二：不出門庭，凶。", meaning: "當出而不出，錯失時機，凶。" },
      { text: "六三：不節若，則嗟若，無咎。", meaning: "不知節制則嗟嘆，能自省則無咎。" },
      { text: "六四：安節，亨。", meaning: "安然節制，亨通。" },
      { text: "九五：甘節，吉，往有尚。", meaning: "甘心節制，吉，前往有嘉尚。" },
      { text: "上六：苦節，貞凶，悔亡。", meaning: "過度苦節，雖正亦凶，但悔可亡。" }
    ],
    keywords: ["節制", "節度", "適度", "制約", "分寸"],
    element: "水",
    nature: "澤上有水，節制有度之象"
  },
  {
    number: 61, name: "中孚", fullName: "風澤中孚", pinyin: "zhōng fú",
    upperTrigram: 4, lowerTrigram: 1,
    judgment: "豚魚吉，利涉大川，利貞。誠信感化，中心誠實。",
    image: "澤上有風，中孚。君子以議獄緩死。",
    lines: [
      { text: "初九：虞吉，有他不燕。", meaning: "預備周全則吉，有變則不安。" },
      { text: "九二：鶴鳴在陰，其子和之。我有好爵，吾與爾靡之。", meaning: "鶴鳴於幽暗，其子應和。真誠之聲，知音共鳴。" },
      { text: "六三：得敵，或鼓或罷，或泣或歌。", meaning: "遇到對手，或擂鼓或停止，或哭泣或歌唱。" },
      { text: "六四：月幾望，馬匹亡，無咎。", meaning: "月近圓滿，馬匹走失，無咎。" },
      { text: "九五：有孚攣如，無咎。", meaning: "以誠信相連相繫，無咎。" },
      { text: "上九：翰音登于天，貞凶。", meaning: "雞鳴之聲上達於天，虛聲無實，凶。" }
    ],
    keywords: ["誠信", "中孚", "信實", "感化", "真誠"],
    element: "木",
    nature: "風行澤上，中心誠信之象"
  },
  {
    number: 62, name: "小過", fullName: "雷山小過", pinyin: "xiǎo guò",
    upperTrigram: 3, lowerTrigram: 6,
    judgment: "亨，利貞。可小事，不可大事。飛鳥遺之音，不宜上宜下，大吉。小有過越，宜謙下。",
    image: "山上有雷，小過。君子以行過乎恭，喪過乎哀，用過乎儉。",
    lines: [
      { text: "初六：飛鳥以凶。", meaning: "如飛鳥般高飛不止，凶。" },
      { text: "六二：過其祖，遇其妣。不及其君，遇其臣，無咎。", meaning: "超過祖父遇見祖母，不及君位遇臣位，無咎。" },
      { text: "九三：弗過防之，從或戕之，凶。", meaning: "不過度防範，反被人所害，凶。" },
      { text: "九四：無咎，弗過遇之，往厲必戒。勿用永貞。", meaning: "無咎，不過而遇之，前往有危宜戒。" },
      { text: "六五：密雲不雨，自我西郊，公弋取彼在穴。", meaning: "密雲不雨，自西郊來。公用繩射取穴中之物。" },
      { text: "上六：弗遇過之，飛鳥離之，凶，是謂災眚。", meaning: "不遇而過之，飛鳥遭殃，凶，此為災禍。" }
    ],
    keywords: ["小過", "謙下", "過越", "小事", "謹慎"],
    element: "木",
    nature: "山上有雷，小有過越之象"
  },
  {
    number: 63, name: "既濟", fullName: "水火既濟", pinyin: "jì jì",
    upperTrigram: 5, lowerTrigram: 2,
    judgment: "亨小，利貞，初吉終亂。事已完成，守成防變。",
    image: "水在火上，既濟。君子以思患而預防之。",
    lines: [
      { text: "初九：曳其輪，濡其尾，無咎。", meaning: "拖住車輪，沾濕尾巴，謹慎有制，無咎。" },
      { text: "六二：婦喪其茀，勿逐，七日得。", meaning: "婦人失去車飾，不必追尋，七日自得。" },
      { text: "九三：高宗伐鬼方，三年克之，小人勿用。", meaning: "高宗征伐鬼方，三年乃克，不可用小人。" },
      { text: "六四：繻有衣袽，終日戒。", meaning: "華衣之下有敝衣，終日戒備。" },
      { text: "九五：東鄰殺牛，不如西鄰之禴祭，實受其福。", meaning: "東鄰殺牛大祭，不如西鄰薄祭而真受其福。" },
      { text: "上六：濡其首，厲。", meaning: "沾濕了頭，有危險。" }
    ],
    keywords: ["完成", "既濟", "守成", "成功", "防變"],
    element: "水",
    nature: "水在火上，事已既成之象"
  },
  {
    number: 64, name: "未濟", fullName: "火水未濟", pinyin: "wèi jì",
    upperTrigram: 2, lowerTrigram: 5,
    judgment: "亨，小狐汔濟，濡其尾，無攸利。事未完成，仍需努力。",
    image: "火在水上，未濟。君子以慎辨物居方。",
    lines: [
      { text: "初六：濡其尾，吝。", meaning: "沾濕了尾巴，困窘。" },
      { text: "九二：曳其輪，貞吉。", meaning: "拖住車輪謹慎行事，守正則吉。" },
      { text: "六三：未濟，征凶，利涉大川。", meaning: "尚未完成，冒進則凶，但利涉大川。" },
      { text: "九四：貞吉悔亡，震用伐鬼方，三年有賞于大國。", meaning: "守正吉悔亡，奮力征伐，三年有大國之賞。" },
      { text: "六五：貞吉，無悔。君子之光，有孚，吉。", meaning: "守正吉，無悔。君子光輝，有誠信，吉。" },
      { text: "上九：有孚于飲酒，無咎。濡其首，有孚失是。", meaning: "誠信飲酒慶賀無咎，但若沉溺則失其正。" }
    ],
    keywords: ["未完成", "未濟", "待成", "持續", "努力"],
    element: "火",
    nature: "火在水上，事未既成之象"
  },
];

/**
 * King Wen lookup table: [lowerTrigramIndex][upperTrigramIndex] -> hexagram number
 * Trigram indices: 乾(0) 兌(1) 離(2) 震(3) 巽(4) 坎(5) 艮(6) 坤(7)
 */
export const kingWenTable: number[][] = [
  /*          乾  兌  離  震  巽  坎  艮  坤  */
  /* 乾 */ [  1, 10, 13, 25, 44,  6, 33, 12 ],
  /* 兌 */ [ 43, 58, 49, 17, 28, 47, 31, 45 ],
  /* 離 */ [ 14, 38, 30, 21, 50, 64, 56, 35 ],
  /* 震 */ [ 34, 54, 55, 51, 32, 40, 62, 16 ],
  /* 巽 */ [  9, 61, 37, 42, 57, 59, 53, 20 ],
  /* 坎 */ [  5, 60, 63,  3, 48, 29, 39,  8 ],
  /* 艮 */ [ 26, 41, 22, 27, 18,  4, 52, 23 ],
  /* 坤 */ [ 11, 19, 36, 24, 46,  7, 15,  2 ],
];

export function getHexagramByNumber(num: number): Hexagram | undefined {
  return hexagrams.find(h => h.number === num);
}

/**
 * Lookup hexagram number from upper/lower trigram indices.
 */
export function lookupHexagram(lowerTrigramIdx: number, upperTrigramIdx: number): number {
  return kingWenTable[lowerTrigramIdx][upperTrigramIdx];
}
