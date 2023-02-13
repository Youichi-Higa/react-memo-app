import { useState } from 'react';
import { EditBtn } from 'src/components/buttons';
import { MemoTitle } from 'src/components';
import { icons } from 'src/paths/icons';
import '@fontsource/noto-sans-jp';

function App() {
  const [selectedMemoId, setSelectedMemoId] = useState<number>();
  const [canMenuEdit, setCanMenuEdit] = useState<boolean>(false);

  const selectMemo = (id: number) => {
    setSelectedMemoId(id);
  };

  const memoList = [
    {
      id: 1,
      title: '坊ちゃん',
      body: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。\n\n親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。',
      createdAt: '2022-06-02T01:25:37.000Z',
      updatedAt: '2022-06-02T01:25:37.000Z',
    },
    {
      id: 2,
      title: '方丈記',
      body: '行く川のながれは絶えずして、しかも本の水にあらず。よどみに浮ぶうたかたは、かつ消えかつ結びて久しくとゞまることなし。世の中にある人とすみかと、またかくの如し。玉しきの都の中にむねをならべいらかをあらそへる、たかきいやしき人のすまひは、代々を經て盡きせぬものなれど、これをまことかと尋ぬれば、昔ありし家はまれなり。或はこぞ破れ（やけイ）てことしは造り、あるは大家ほろびて小家となる。住む人もこれにおなじ。所もかはらず、人も多かれど、いにしへ見し人は、二三十人が中に、わづかにひとりふたりなり。あしたに死し、ゆふべに生るゝならひ、たゞ水の泡にぞ似たりける。知らず、生れ死ぬる人、いづかたより來りて、いづかたへか去る。又知らず、かりのやどり、誰が爲に心を惱まし、何によりてか目をよろこばしむる。そのあるじとすみかと、無常をあらそひ去るさま、いはゞ朝顏の露にことならず。或は露おちて花のこれり。のこるといへども朝日に枯れぬ。或は花はしぼみて、露なほ消えず。消えずといへども、ゆふべを待つことなし。』およそ物の心を知れりしよりこのかた、四十あまりの春秋をおくれる間に、世のふしぎを見ることやゝたびたびになりぬ。いにし安元三年四月廿八日かとよ、風烈しく吹きてしづかならざりし夜、戌の時ばかり、都のたつみより火出で來りていぬゐに至る。はてには朱雀門、大極殿、大學寮、民部の省まで移りて、ひとよがほどに、塵灰となりにき。火本は樋口富の小路とかや、病人を宿せるかりやより出で來けるとなむ。吹きまよふ風にとかく移り行くほどに、扇をひろげたるが如くすゑひろになりぬ。遠き家は煙にむせび、近きあたりはひたすらほのほを地に吹きつけたり。空には灰を吹きたてたれば、火の光に映じてあまねくくれなゐなる中に、風に堪へず吹き切られたるほのほ、飛ぶが如くにして一二町を越えつゝ移り行く。その中の人うつゝ（しイ）心ならむや。あるひは煙にむせびてたふれ伏し、或は炎にまぐれてたちまちに死しぬ。或は又わづかに身一つからくして遁れたれども、資財を取り出づるに及ばず。七珍萬寳、さながら灰燼となりにき。そのつひえいくそばくぞ。このたび公卿の家十六燒けたり。ましてその外は數を知らず。すべて都のうち、三分が二（一イ）に及べりとぞ。男女死ぬるもの數千人、馬牛のたぐひ邊際を知らず。人のいとなみみなおろかなる中に、さしも危き京中の家を作るとて寶をつひやし心をなやますことは、すぐれてあぢきなくぞ侍るべき。』また治承四年卯月廿九日のころ、中の御門京極のほどより、大なるつじかぜ起りて、六條わたりまで、いかめしく吹きけること侍りき。三四町をかけて吹きまくるに、その中にこもれる家ども、大なるもちひさきも、一つとしてやぶれざるはなし。さながらひらにたふれたるもあり。',
      createdAt: '2022-06-02T01:27:17.000Z',
      updatedAt: '2022-06-02T01:27:17.000Z',
    },
  ];

  return (
    <div className="App">
      <div className="grid grid-cols-5 gap-0 min-h-screen">
        {/* サイドバー */}
        <div className="col-span-1 pt-[30px] border-r flex flex-col justify-between">
          {/* メモエリア */}
          <div className=" pl-10 pr-2.5">
            {/* サービス名 */}
            <div className="flex items-center h-8 mb-5">
              <img src={icons.logo} alt="logo" />
              <p className="ml-1 text-2xl font-bold">ServiceName</p>
            </div>

            {/* メモリスト */}
            {memoList.map((memo) => (
              <MemoTitle
                key={memo.id}
                selectMemo={() => selectMemo(memo.id)}
                title={memo.title}
                isSelected={memo.id === selectedMemoId}
                canMenuEdit={canMenuEdit}
              />
            ))}
          </div>

          {/* ボタンエリア */}
          <div className="bg-light h-16 p-2.5 flex justify-end items-center">
            <div className="w-20 h-10">
              <EditBtn />
            </div>
          </div>
        </div>

        {/* メモ作成・編集エリア */}
        <div className="col-span-4 min-h-screen pt-[30px] px-10">
          <div className="bg-light rounded-xl h-[calc(100vh_-_94px)] p-[30px]">
            {/* タイトル */}
            <div className="flex justify-between items-center mb-5">
              <p className="text-2xl font-bold w-full">{memoList[0].title}</p>
              <div className="w-20 h-10">
                <EditBtn />
              </div>
            </div>

            {/* メモ */}
            <div className="h-[calc(100vh_-_214px)] flex justify-between gap-5">
              <div className="w-full rounded-xl bg-white pt-[30px] px-[30px] overflow-auto">
                <p>{memoList[0].body}</p>
              </div>
              <div className="w-20 h-10">
                <EditBtn />
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="h-16 flex justify-between items-center">
            <p className="text-xs">Copyright © 2021 Sample</p>
            <p className="text-xs">運営会社</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
