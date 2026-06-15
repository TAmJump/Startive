/* Startive — shared header / drawer menu / footer + interactions */
(function(){
  var MK = '<svg class="mk" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M40 8 L40 30 L52 18" stroke="#cf4747" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    + '<path d="M40 8 C24 8 24 26 32 32 C40 38 40 56 24 56" stroke="#cf4747" stroke-width="8" stroke-linecap="round" fill="none"/>'
    + '<path d="M32 32 C40 38 40 56 24 56" stroke="#1a1a1a" stroke-width="8" stroke-linecap="round" fill="none"/>'
    + '</svg>';

  var HEADER =
  '<header class="hdr"><div class="wrap hdr-in">'
  + '<button class="menu-btn" id="mBtn" aria-label="メニューを開く"><span></span><span></span><span></span></button>'
  + '<a class="brand" href="index.html">'+MK+'Star<span class="dot">t</span>ive</a>'
  + '<nav class="hdr-nav">'
  + '<a href="projects.html">見つける</a>'
  + '<a href="projects.html?type=corp">法人協賛</a>'
  + '<a href="projects.html?type=adopt">導入予約</a>'
  + '<a href="projects.html?type=agent">代理店募集</a>'
  + '<a href="business.html">法人・自治体</a>'
  + '</nav>'
  + '<div class="hdr-right">'
  + '<a class="btn btn-ghost btn-sm" href="business.html">協賛・導入する</a>'
  + '<a class="btn btn-red btn-sm" href="start.html">プロジェクトを掲載</a>'
  + '</div>'
  + '</div></header>';

  // drawer groups: [title, [ [label,href], ... ], options]
  function link(l,h){return '<a href="'+(h||'#')+'">'+l+'</a>';}
  function tag(l){return '<a class="tag" href="projects.html">'+l+'</a>';}

  var DRAWER =
  '<div class="scrim" id="scrim"></div>'
  + '<aside class="drawer" id="drawer" aria-label="メインメニュー">'
  + '<div class="drawer-top"><a class="brand" href="index.html" style="font-size:20px">'+MK+'Star<span class="dot">t</span>ive</a>'
  + '<button class="drawer-close" id="dClose" aria-label="閉じる">×</button></div>'
  + '<div class="drawer-body">'

  + '<a class="dlink-strong" href="index.html">ホーム</a>'
  + '<a class="dlink-strong red" href="start.html">応援クーポン / 招待コード</a>'

  + grp('見つける',[['すべて','projects.html'],['新着','projects.html'],['もうすぐ開始','projects.html'],['もうすぐ終了','projects.html'],['今日のランキング','projects.html'],['今日のピックアップ','projects.html'],['注目プロジェクト','projects.html'],['推奨実行者','projects.html'],['法人協賛募集中','projects.html?type=corp'],['導入予約募集中','projects.html?type=adopt'],['代理店募集中','projects.html?type=agent'],['学生チャレンジ','projects.html'],['シニアチャレンジ','projects.html'],['地域チャレンジ','projects.html']],true)

  + grpTags('人気のタグ',['#ガジェット','#便利グッズ','#新商品','#アウトドア','#財布','#コーヒー','#インテリア','#美容','#ゲーム','#地域活性化','#光る職人技','#海外展開','#学生チャレンジ','#シニア起業','#法人協賛','#代理店募集'])

  + grp('カテゴリー',[['プロダクト'],['ファッション'],['フード'],['レストラン・バー'],['テクノロジー'],['コスメ・美容'],['アート・写真'],['映画・映像'],['アニメ・マンガ'],['音楽'],['ゲーム'],['演劇・パフォーマンス'],['お笑い・エンタメ'],['出版・ジャーナリズム'],['教育'],['スポーツ'],['医療・介護'],['福祉'],['地域'],['学生'],['シニア'],['NPO'],['アプリ・DX'],['法人協賛'],['導入予約'],['代理店募集'],['スタートアップ'],['社会貢献'],['世界一周・海外']])

  + grp('目的から探す',[['応援購入したい'],['法人協賛したい'],['導入予約したい'],['代理店になりたい'],['学生を応援したい'],['高齢者の挑戦を応援したい'],['地域事業を応援したい'],['医療・介護DXを探したい'],['海外プロジェクトを探したい']])

  + grp('地域',[['北海道'],['東北'],['関東'],['中部'],['近畿'],['中国'],['四国'],['九州・沖縄'],['海外'],['すべて見る']])

  + grp('掲載する',[['プロジェクトを掲載','start.html'],['法人協賛を募集する','start.html'],['導入予約を募集する','start.html'],['代理店を募集する','start.html'],['学生・未成年の掲載','guide.html'],['高齢者・施設入居者の掲載','guide.html'],['掲載審査について','guide.html'],['手数料について','pricing.html']])

  + grp('はじめてガイド',[['支援者向けガイド','guide.html'],['実行者向けガイド','guide.html'],['法人協賛ガイド','guide.html'],['導入予約ガイド','guide.html'],['代理店参加ガイド','guide.html'],['学生・高齢者向けガイド','guide.html'],['SNS拡散ガイド','guide.html'],['リターン設計ガイド','guide.html']])

  + grp('マイページ',[['支援履歴'],['閲覧履歴'],['気になる'],['Myタグ'],['協賛履歴'],['導入予約履歴'],['代理店応募履歴'],['紹介URL管理'],['拡散センター']])

  + grp('運営メニュー',[['お知らせ'],['プレスリリース','press.html'],['取材受付','press.html'],['改善リクエスト'],['掲載実績'],['導入事例'],['法人・自治体向け','business.html'],['海外企業の方へ','business.html'],['Launch Insight'],['採用情報']])

  + grp('ヘルプ',[['よくある質問','guide.html'],['お問い合わせ'],['返金・キャンセル','legal.html'],['リターン未着について','legal.html'],['審査について','legal.html'],['手数料について','pricing.html'],['本人確認について','legal.html'],['法人請求書払いについて','business.html'],['不正・違反報告','legal.html']])

  + grp('会社概要・規約',[['会社概要','legal.html'],['運営会社','legal.html'],['特定商取引法に基づく表記','legal.html'],['利用規約','legal.html'],['プライバシーポリシー','legal.html'],['実行者ガイドライン','legal.html'],['支援者ガイドライン','legal.html'],['法人協賛ガイドライン','legal.html'],['導入予約ガイドライン','legal.html'],['代理店募集ガイドライン','legal.html'],['レビューガイドライン','legal.html'],['返金・キャンセルポリシー','legal.html'],['リターン未提供時の対応','legal.html'],['禁止プロジェクト','legal.html'],['審査基準','legal.html'],['未成年・高齢者の起案について','legal.html'],['反社会的勢力排除方針','legal.html'],['資金決済・預り金の扱い','legal.html'],['免責事項','legal.html']])

  + '<div class="dgroup"><div class="dgroup-h" style="cursor:default">公式SNS</div>'
  + '<div class="dsns"><a href="#">Instagram</a><a href="#">X</a><a href="#">Facebook</a><a href="#">LINE</a><a href="#">YouTube</a><a href="#">TikTok</a></div></div>'
  + '<div class="dgroup"><div class="dgroup-h" style="cursor:default">公式アプリ</div>'
  + '<div class="dsns"><a href="#">iPhone</a><a href="#">Android</a></div></div>'

  + '</div></aside>';

  function grp(title, items, openDefault){
    var lis = items.map(function(it){return link(it[0], it[1]);}).join('');
    return '<div class="dgroup"><button class="dgroup-h" aria-expanded="'+(openDefault?'true':'false')+'">'+title
      +'<span class="chev">›</span></button><div class="dgroup-list'+(openDefault?' show':'')+'">'+lis+'</div></div>';
  }
  function grpTags(title, items){
    var lis = items.map(tag).join('') + '<a class="tag" href="projects.html">すべて見る</a>';
    return '<div class="dgroup"><button class="dgroup-h" aria-expanded="false">'+title
      +'<span class="chev">›</span></button><div class="dgroup-list">'+lis+'</div></div>';
  }

  var FOOTER =
  '<footer class="ft"><div class="wrap">'
  + '<div class="ft-grid">'
  + '<div class="ft-brand"><a class="brand" href="index.html">'+MK+'Star<span class="dot">t</span>ive</a>'
  + '<p>想いを、動きに。未来へ、広がる。掲載した瞬間から、応援購入・法人協賛・導入予約・代理店募集・SNS拡散までをひとつにつなぐローンチ支援プラットフォームです。</p></div>'
  + ftcol('見つける',[['すべてのプロジェクト','projects.html'],['法人協賛募集中','projects.html?type=corp'],['導入予約募集中','projects.html?type=adopt'],['代理店募集中','projects.html?type=agent'],['学生・シニアチャレンジ','projects.html']])
  + ftcol('掲載・参加',[['プロジェクトを掲載','start.html'],['法人・自治体向け','business.html'],['海外企業の方へ','business.html'],['料金・手数料','pricing.html'],['はじめてガイド','guide.html']])
  + ftcol('運営',[['お知らせ・プレス','press.html'],['取材受付','press.html'],['Launch Insight','press.html'],['導入事例','press.html'],['採用情報','press.html']])
  + ftcol('規約・サポート',[['会社概要','legal.html'],['利用規約','legal.html'],['特定商取引法表示','legal.html'],['プライバシーポリシー','legal.html'],['禁止プロジェクト・審査基準','legal.html']])
  + '</div>'
  + '<div class="ft-bot"><small>© 2026 Startive — TAmJ.Corp. All rights reserved.</small>'
  + '<div class="ft-sns"><a href="#">Instagram</a><a href="#">X</a><a href="#">Facebook</a><a href="#">LINE</a><a href="#">YouTube</a><a href="#">TikTok</a></div>'
  + '</div></div></footer>';

  function ftcol(h, items){
    return '<div class="ft-col"><h5>'+h+'</h5>'+items.map(function(it){return link(it[0],it[1]);}).join('')+'</div>';
  }

  function inject(id, html){var el=document.getElementById(id); if(el) el.outerHTML=html;}

  document.addEventListener('DOMContentLoaded', function(){
    if(!document.querySelector('link[rel="icon"]')){
      var fav=document.createElement('link');fav.rel='icon';fav.type='image/svg+xml';fav.href='favicon.svg';
      document.head.appendChild(fav);
    }
    inject('site-header', HEADER + DRAWER);
    inject('site-footer', FOOTER);

    var drawer=document.getElementById('drawer'), scrim=document.getElementById('scrim');
    function open(){drawer.classList.add('open');scrim.classList.add('open');document.body.style.overflow='hidden';}
    function close(){drawer.classList.remove('open');scrim.classList.remove('open');document.body.style.overflow='';}
    var mBtn=document.getElementById('mBtn'); if(mBtn) mBtn.addEventListener('click',open);
    var dClose=document.getElementById('dClose'); if(dClose) dClose.addEventListener('click',close);
    if(scrim) scrim.addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});

    document.querySelectorAll('.dgroup-h').forEach(function(h){
      if(h.style.cursor==='default') return;
      h.addEventListener('click',function(){
        var exp=h.getAttribute('aria-expanded')==='true';
        h.setAttribute('aria-expanded', String(!exp));
        var list=h.nextElementSibling; if(list) list.classList.toggle('show', !exp);
      });
    });

    // tabs (project detail)
    document.querySelectorAll('[data-tab]').forEach(function(t){
      t.addEventListener('click',function(){
        var g=t.closest('.pd-cols')||document;
        g.querySelectorAll('[data-tab]').forEach(function(x){x.classList.remove('active');});
        g.querySelectorAll('.panel').forEach(function(p){p.classList.remove('active');});
        t.classList.add('active');
        var pane=document.getElementById('panel-'+t.getAttribute('data-tab'));
        if(pane) pane.classList.add('active');
      });
    });
  });
})();
