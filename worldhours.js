intervalUpdate();window.setInterval(intervalUpdate,30000);function minutesFormat(a){var c=a%60;var b=(a-c)/60;return((b!=0)?(b+"h "):"")+c+"m"}function minutesString(a){if(a==0){return"00"}else{return a.toString()}}function intervalUpdate(){var d=moment();var v=[["New Zealand Stock Market (NZSX)","Pacific/Auckland",[1,5,[10,0,17,0]]],["Australian Securities Exchange (ASX)","Australia/Sydney",[1,5,[9,50,16,12]]],["Tokyo Stock Exchange (TSE)","Asia/Tokyo",[1,5,[9,0,11,30],[12,30,15,0]]],["Korea Stock Exchange (KRX)","Asia/Seoul",[1,5,[9,0,15,0]]],["Taiwan Stock Exchange (TWSE)","Asia/Taipei",[1,5,[9,0,13,30]]],["Shanghai Stock Exchange (SSE)","Asia/Shanghai",[1,5,[9,30,11,30],[13,0,15,0]]],["Shenzhen Stock Exchange (SZSE)","Asia/Shanghai",[1,5,[9,30,11,30],[13,0,15,0]]],["Hong Kong Futures Exchange (HKFE)","Asia/Hong_Kong",[1,5,[9,15,12,0],[13,0,16,0]]],["Hong Kong Stock Exchange (HKEX)","Asia/Hong_Kong",[1,5,[9,20,12,0],[13,0,16,0]]],["Philippine Stock Exchange (PSE)","Asia/Manila",[1,5,[9,30,12,0],[13,30,15,30]]],["Singapore Exchange (SGX)","Asia/Singapore",[1,5,[9,0,17,0]]],["Bursa Malaysia (MYX)","Asia/Kuala_Lumpur",[1,5,[9,0,12,30],[14,30,17,0]]],["Indonesia Stock Exchange (IDX)","Asia/Jakarta",[1,5,[9,30,16,0]]],["Stock Exchange of Thailand (SET)","Asia/Bangkok",[1,5,[10,0,12,30],[14,30,16,30]]],["Colombo Stock Exchange (CSE)","Asia/Colombo",[1,5,[9,30,14,30]]],["National Stock Exchange of India (NSE)","Asia/Kolkata",[1,5,[9,15,15,30]]],["Bombay Stock Exchange (BSE)","Asia/Kolkata",[1,5,[9,15,15,30]]],["Karachi Stock Exchange (KSE)","Asia/Karachi",[1,5,[9,30,15,30]]],["Saudi Stock Exchange (TADAWUL)","Asia/Riyadh",[1,5,[11,0,15,30]]],["Amman Stock Exchange (ASE)","Asia/Amman",[1,5,[10,0,12,0]]],["Beirut Stock Exchange (BSE)","Asia/Beirut",[1,5,[9,30,12,30]]],["Tel Aviv Stock Exchange (TASE)","Asia/Jerusalem",[1,5,[9,0,17,30]]],["Istanbul Stock Exchange (ISE)","Asia/Istanbul",[1,5,[9,30,12,30],[14,0,17,30]]],["Moscow Exchange (MOEX) Main","Europe/Moscow",[1,5,[9,30,19,0]]],["Moscow Exchange (MOEX) Classica","Europe/Moscow",[1,5,[10,0,18,45]]],["Moscow Exchange (MOEX) Derivatives/FX/Commodities","Europe/Moscow",[1,5,[10,0,23,50]]],["Ukrainian Exchange (UX)","Europe/Kiev",[1,5,[10,0,17,30]]],["Riga Stock Exchange (OMXR)","Europe/Riga",[1,5,[10,0,16,0]]],["Helsinki Stock Exchange (OMX)","Europe/Helsinki",[1,5,[10,0,18,30]]],["Johannesburg Stock Exchange (JSE)","Africa/Johannesburg",[1,5,[9,0,17,0]]],["Warsaw Stock Exchange (GPW)","Europe/Warsaw",[1,5,[9,0,17,30]]],["Budapest Stock Exchange (BSE)","Europe/Budapest",[1,5,[9,0,17,0]]],["Stockholm Stock Exchange (OMX)","Europe/Stockholm",[1,5,[9,0,17,30]]],["Vienna Stock Exchange","Europe/Vienna",[1,5,[8,55,17,35]]],["Malta Stock Exchange (MSE)","Europe/Malta",[1,5,[9,30,12,30]]],["Copenhagen Stock Exchange (CSE)","Europe/Copenhagen",[1,5,[9,0,17,0]]],["Oslo Stock Exchange (OSE)","Europe/Oslo",[1,5,[9,0,16,30]]],["Milan Stock Exchange (MTA)","Europe/Rome",[1,5,[9,0,17,25]]],["Frankfurt Stock Exchange (FWB) Eurex","Europe/Berlin",[1,5,[8,0,22,0]]],["Frankfurt Stock Exchange (FWB) Xetra","Europe/Berlin",[1,5,[9,0,17,30]]],["Swiss Exchange (SIX)","Europe/Zurich",[1,5,[9,0,17,30]]],["Berne eXchange (BX)","Europe/Zurich",[1,5,[9,0,16,30]]],["Luxembourg Stock Exchange (LuxSE)","Europe/Luxembourg",[1,5,[9,0,17,35]]],["Euronext Amsterdam (AMS)","Europe/Amsterdam",[1,5,[9,0,17,40]]],["Euronext Paris (EPA)","Europe/Paris",[1,5,[9,0,17,30]]],["Spanish Stock Exchange (BME)","Europe/Madrid",[1,5,[9,0,17,30]]],["London Stock Exchange (LSE)","Europe/London",[1,5,[8,0,16,30]]],["Irish Stock Exchange (ISE)","Europe/Dublin",[1,5,[8,0,16,30]]],["Nigerian Stock Exchange (NSE)","Africa/Lagos",[1,5,[10,0,16,0]]],["BM&amp;FBOVESPA","America/Sao_Paulo",[1,5,[10,0,17,30]]],["Buenos Aires Stock Exchange (BCBA)","America/Buenos_Aires",[1,5,[11,0,17,0]]],["New York Stock Exchange (NYSE)","America/New_York",[1,5,[9,30,16,0]]],["New York Stock Exchange (NYSE) Bonds","America/New_York",[1,5,[8,0,17,0]]],["NASDAQ","America/New_York",[1,5,[9,30,16,0]]],["Toronto Stock Exchange (TSX)","America/Toronto",[1,5,[9,30,16,0]]],["Mexican Stock Exchange (BMV)","America/Mexico_City",[1,5,[8,30,15,0]]],];var x="<thead><tr><th>Market</th><th>Status</th><th>Opens in</th><th>Closes in</th><th>Trading Hours</th><th>Market Time</th><th>Timezone</th></tr></thead><tbody>";document.getElementById("local").innerHTML="Your local time: "+d.format("LLLL ZZ");for(var p=0;p<v.length;p++){var u=d.tz(v[p][1]);var q=u.clone().startOf("day");var h=false;var w=null;var s=null;var t="";for(var g=2;g<v[p].length;g++){if(t!=""){t+="; "}t+=moment.weekdaysShort(v[p][g][0])+"-"+moment.weekdaysShort(v[p][g][1])+": ";var l="";for(var f=2;f<v[p][g].length;f++){if(l!=""){l+=", "}l+=v[p][g][f][0]+":"+minutesString(v[p][g][f][1])+"-"+v[p][g][f][2]+":"+minutesString(v[p][g][f][3])}t+=l}for(var g=2;g<v[p].length;g++){if(u.day()<v[p][g][0]){w=q.clone().day(v[p][g][0]);w.hour(v[p][g][2][0]);w.minute(v[p][g][2][1]);continue}else{if(u.day()+1>v[p][g][1]){var e=0;var b=g+1;if(b>=v[p].length){e=7;b=2}w=q.clone().day(v[p][b][0]+e);w.hour(v[p][b][2][0]);w.minute(v[p][b][2][1])}else{w=q.clone().day(u.day()+1);w.hour(v[p][g][2][0]);w.minute(v[p][g][2][1])}if(u.day()>v[p][g][1]){continue}}for(var f=2;f<v[p][g].length;f++){var a=q.clone().hour(v[p][g][f][0]).minute(v[p][g][f][1]);var r=q.clone().hour(v[p][g][f][2]).minute(v[p][g][f][3]);if(u.isBefore(a)){w=a;break}else{if(u.isBefore(r)){h=true;s=r}}}}x+="<tr><td>"+v[p][0]+"</td><td "+(h?'class="opened">Opened':'class="closed">Closed')+"</td><td>"+(h?"":minutesFormat(w.diff(u,"minutes")))+"</td><td>"+(h?minutesFormat(s.diff(u,"minutes")):"")+"</td><td>"+t+"</td><td>"+u.format("llll ZZ")+"</td><td>"+v[p][1]+"</td></tr>"}x+="</tbody>";document.getElementById("data").innerHTML=x};