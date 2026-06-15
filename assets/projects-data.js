/* Startive — seed projects (Makuake-style, multi-genre 応援購入 + 4-route platform DNA) */
(function(){
  var P = [
    {id:'projector', img:'projector', title:'手のひらサイズ。どこでも100インチのモバイルプロジェクター', cat:'ガジェット', by:'GLOW Devices', region:'関東',
     types:['purchase','agent'], amount:18420000, goal:3000000, backers:1382, days:21, badge:'ランキング1位'},
    {id:'wallet', img:'wallet', title:'栃木レザーの極薄コンパクト財布 — 0.8cmの相棒', cat:'ファッション', by:'KOBA Leather', region:'中部',
     types:['purchase'], amount:9240000, goal:1000000, backers:2106, days:33, badge:'新着'},
    {id:'sling', img:'sling', title:'拡張できるサコッシュ。財布もタブレットも、これひとつ', cat:'アウトドア', by:'SHOEBILL', region:'東京',
     types:['purchase','agent'], amount:6980000, goal:1000000, backers:1574, days:18, badge:'もうすぐ終了'},
    {id:'aiglass', img:'aiglass', title:'通訳も通知も、視界の中に。軽量スマートAIグラス', cat:'テクノロジー', by:'Rokai', region:'海外',
     types:['purchase','adopt','agent'], amount:31200000, goal:5000000, backers:2880, days:12, badge:'注目'},
    {id:'coffee', img:'coffee', title:'焙煎家が選ぶ、月替わりのスペシャルティ珈琲定期便', cat:'グルメ', by:'NOTE Roastery', region:'近畿',
     types:['purchase','adopt'], amount:4560000, goal:800000, backers:1820, days:9, badge:''},
    {id:'lamp', img:'lamp', title:'充電して持ち運ぶ、無垢材のコードレスデスクライト', cat:'インテリア', by:'TSUKI Works', region:'北海道',
     types:['purchase'], amount:7110000, goal:1200000, backers:1342, days:27, badge:'光る職人技'},
    {id:'fragrance', img:'fragrance', title:'国産精油だけでつくる、一日を整えるフレグランス', cat:'ビューティー', by:'AYANE', region:'九州・沖縄',
     types:['purchase'], amount:3380000, goal:600000, backers:1190, days:15, badge:''},
    {id:'boardgame', img:'boardgame', title:'30分で世界が変わる。協力型インディーボードゲーム', cat:'ゲーム・エンタメ', by:'Lantern Games', region:'関東',
     types:['purchase','corp'], amount:5240000, goal:1000000, backers:3120, days:8, badge:'人気'},
    {id:'watch', img:'watch', title:'海外の名作ミニマル時計を、日本へ初上陸', cat:'海外 / ファッション', by:'NORDA (Sweden)', region:'海外',
     types:['purchase','agent'], amount:8760000, goal:2000000, backers:1455, days:24, badge:'海外'},
    {id:'community', img:'community', title:'商店街の空き店舗を、地域の食堂に', cat:'地域を応援', by:'実行責任者：地域NPO', region:'近畿',
     types:['purchase','corp','adopt'], amount:1840000, goal:2000000, backers:367, days:15, badge:'地域'},
    {id:'student', img:'student', title:'高校写真部、はじめての作品展を開きたい', cat:'学生チャレンジ', by:'実行責任者：◯◯高校 写真部顧問', region:'中部',
     types:['purchase','corp'], amount:340000, goal:500000, backers:289, days:18, badge:'学生'},
    {id:'carepay', img:'carepay', title:'CarePAY — 口座振替の受付を、紙からスマホへ', cat:'テクノロジー / 福祉', by:'TAmJ.Corp', region:'関東',
     types:['adopt','corp','agent'], amount:6240000, goal:5000000, backers:96, days:33, badge:'導入予約'}
  ];

  function yen(n){return '¥'+n.toLocaleString('ja-JP');}
  function pct(p){return Math.round(p.amount/p.goal*100);}

  window.STARTIVE_PROJECTS = P;
  window.startiveYen = yen;
  window.startiveImg = function(p){return 'assets/img/'+p.img+'.jpg';};

  window.renderCard = function(p){
    var per = pct(p);
    var chips = p.types.map(function(t){
      var m={purchase:['応援購入',''],corp:['法人協賛','r'],adopt:['導入予約',''],agent:['代理店','']};
      return '<span class="chip '+(m[t][1]||'')+'">'+m[t][0]+'</span>';
    }).join('');
    var redBadges=['ランキング1位','人気','注目'];
    var badge = p.badge ? '<span class="badge '+(redBadges.indexOf(p.badge)>-1?'red':'')+'">'+p.badge+'</span>' : '';
    return ''
    + '<a class="card" href="project.html?id='+p.id+'">'
    + '<div class="thumb"><img loading="lazy" src="assets/img/'+p.img+'.jpg" alt="'+p.cat+'">'+badge+'</div>'
    + '<div class="card-b">'
    +   '<span class="cat">'+p.cat+'</span>'
    +   '<h3>'+p.title+'</h3>'
    +   '<div class="by">'+p.by+'</div>'
    +   '<div class="bar"><i style="width:'+Math.min(per,100)+'%"></i></div>'
    +   '<div class="card-meta"><span class="amt">'+yen(p.amount)+'</span><span class="pct">'+per+'%</span></div>'
    +   '<div class="card-foot"><span>'+p.backers.toLocaleString('ja-JP')+'人が応援購入</span><span>残り'+p.days+'日</span></div>'
    +   '<div class="chips">'+chips+'</div>'
    + '</div>'
    + '</a>';
  };
})();
