/* Startive — seed projects (self-owned TAmJ projects + samples) */
(function(){
  var P = [
    {id:'medvoo', title:'mやるゼ！— 医療・介護の連携をひとつのアプリに', cat:'医療・介護DX', by:'TAmJ.Corp', region:'関東',
     types:['adopt','agent'], amount:4820000, goal:3000000, backers:138, days:21, g:['#cf4747','#7a2d2d'], badge:'導入予約'},
    {id:'carepay', title:'CarePAY — 口座振替受付を、紙からWebへ', cat:'フィンテック / 介護', by:'TAmJ.Corp', region:'関東',
     types:['adopt','corp','agent'], amount:6240000, goal:5000000, backers:96, days:33, g:['#1a1a1a','#3a3a3a'], badge:'法人協賛'},
    {id:'animed', title:'Animed — 海外から日本の医療へつなぐ健康ブリッジ', cat:'海外 / 医療', by:'TAmJ.Corp', region:'海外',
     types:['corp','adopt','purchase'], amount:2980000, goal:4000000, backers:74, days:40, g:['#b83b3b','#1a1a1a'], badge:''},
    {id:'carepass', title:'Care Support Pass — 月100円の介護応援パス', cat:'福祉 / SaaS', by:'TAmJ.Corp', region:'関東',
     types:['purchase','agent'], amount:1560000, goal:1000000, backers:412, days:12, g:['#e06b6b','#cf4747'], badge:'応援購入'},
    {id:'kingmaker', title:'KINGMAKER 23:23 — 毎週23時23分のリチュアル', cat:'エンタメ', by:'TAmJ.Corp', region:'関東',
     types:['purchase','corp'], amount:880000, goal:1500000, backers:228, days:8, g:['#1a1a1a','#cf4747'], badge:''},
    {id:'onetouch', title:'tやるゼ！— 施設運営をワンタッチで', cat:'アプリ・DX', by:'TAmJ.Corp', region:'関東',
     types:['adopt','agent'], amount:2110000, goal:3000000, backers:61, days:27, g:['#3a3a3a','#1a1a1a'], badge:'代理店募集'},
    {id:'student-sample', title:'高校写真部の初めての作品展を開きたい', cat:'学生チャレンジ', by:'実行責任者：◯◯高校 写真部顧問', region:'中部',
     types:['purchase','corp'], amount:340000, goal:500000, backers:89, days:18, g:['#cf4747','#e06b6b'], badge:'学生'},
    {id:'senior-sample', title:'80歳、半世紀の木工を写真集にして残す', cat:'シニアチャレンジ', by:'実行責任者：家族', region:'東北',
     types:['purchase'], amount:620000, goal:400000, backers:203, days:5, g:['#7a2d2d','#cf4747'], badge:'シニア'},
    {id:'community-sample', title:'商店街の空き店舗を、地域の食堂に', cat:'地域チャレンジ', by:'実行責任者：地域NPO', region:'近畿',
     types:['purchase','corp','adopt'], amount:1840000, goal:2000000, backers:367, days:15, g:['#1a1a1a','#b83b3b'], badge:'地域'}
  ];

  function yen(n){return '¥'+n.toLocaleString('ja-JP');}
  function pct(p){return Math.round(p.amount/p.goal*100);}

  window.STARTIVE_PROJECTS = P;
  window.startiveYen = yen;

  window.renderCard = function(p){
    var per = pct(p);
    var chips = p.types.map(function(t){
      var m={purchase:['応援購入',''],corp:['法人協賛','r'],adopt:['導入予約',''],agent:['代理店','']};
      return '<span class="chip '+(m[t][1]||'')+'">'+m[t][0]+'</span>';
    }).join('');
    var badge = p.badge ? '<span class="badge '+(p.badge==='法人協賛'||p.badge==='応援購入'?'red':'')+'">'+p.badge+'</span>' : '';
    return ''
    + '<a class="card" href="project.html?id='+p.id+'">'
    + '<div class="thumb">'+badge
    +   '<div class="ph" style="background:linear-gradient(135deg,'+p.g[0]+','+p.g[1]+')">'+p.title.split('—')[0].trim()+'</div>'
    + '</div>'
    + '<div class="card-b">'
    +   '<span class="cat">'+p.cat+'</span>'
    +   '<h3>'+p.title+'</h3>'
    +   '<div class="by">'+p.by+'</div>'
    +   '<div class="bar"><i style="width:'+Math.min(per,100)+'%"></i></div>'
    +   '<div class="card-meta"><span class="amt">'+yen(p.amount)+'</span><span class="pct">'+per+'%</span></div>'
    +   '<div class="card-foot"><span>'+p.backers+'人が支援</span><span>残り'+p.days+'日</span></div>'
    +   '<div class="chips">'+chips+'</div>'
    + '</div>'
    + '</a>';
  };
})();
