intervalUpdate();window.setInterval(intervalUpdate,30000);function secondsFormat(c){var b=c%60;var d=((c-b)/60)%60;var a=(c-b-d*60)/(60*60);return a+"h "+d+"m "+b+"s"}function minutesFormat(a){var c=a%60;var b=(a-c)/60;return b+"h "+c+"m"}function intervalUpdate(){var d=moment();var s=[["New Zealand Stock Market (NZSX)","Pacific/Auckland",[1,5,[10,0,17,0]]],["Australian Securities Exchange (ASX)","Australia/Sydney",[1,5,[9,50,16,12]]],["Tokyo Stock Exchange (TSE)","Asia/Tokyo",[1,5,[9,0,11,30],[12,30,15,0]]],["Korea Stock Exchange (KRX)","Asia/Seoul",[1,5,[9,0,15,0]]],["Taiwan Stock Exchange (TWSE)","Asia/Taipei",[1,5,[9,0,13,30]]],["Shanghai Stock Exchange (SSE)","Asia/Shanghai",[1,5,[9,30,11,30],[13,0,15,0]]],["Shenzhen Stock Exchange (SZSE)","Asia/Shanghai",[1,5,[9,30,11,30],[13,0,15,0]]],["Hong Kong Futures Exchange (HKFE)","Asia/Hong_Kong",[1,5,[9,15,12,0],[13,0,16,0]]],["Hong Kong Stock Exchange (HKEX)","Asia/Hong_Kong",[1,5,[9,20,12,0],[13,0,16,0]]],["Philippine Stock Exchange (PSE)","Asia/Manila",[1,5,[9,30,12,0],[13,30,15,30]]],["Singapore Exchange (SGX)","Asia/Singapore",[1,5,[9,0,17,0]]],["Bursa Malaysia (MYX)","Asia/Kuala_Lumpur",[1,5,[9,0,12,30],[14,30,17,0]]],["Indonesia Stock Exchange (IDX)","Asia/Jakarta",[1,5,[9,30,16,0]]],["Stock Exchange of Thailand (SET)","Asia/Bangkok",[1,5,[10,0,12,30],[14,30,16,30]]],["Colombo Stock Exchange (CSE)","Asia/Colombo",[1,5,[9,30,14,30]]],["National Stock Exchange of India (NSE)","Asia/Kolkata",[1,5,[9,15,15,30]]],["Bombay Stock Exchange (BSE)","Asia/Kolkata",[1,5,[9,15,15,30]]],["Karachi Stock Exchange (KSE)","Asia/Karachi",[1,5,[9,30,15,30]]],["Saudi Stock Exchange (TADAWUL)","Asia/Riyadh",[1,5,[11,0,15,30]]],["Amman Stock Exchange (ASE)","Asia/Amman",[1,5,[10,0,12,0]]],["Beirut Stock Exchange (BSE)","Asia/Beirut",[1,5,[9,30,12,30]]],["Tel Aviv Stock Exchange (TASE)","Asia/Jerusalem",[1,5,[9,0,17,30]]],["Istanbul Stock Exchange (ISE)","Asia/Istanbul",[1,5,[9,30,12,30],[14,0,17,30]]],["Moscow Exchange (MOEX)","Europe/Moscow",[1,5,[10,0,18,45]]],["Ukrainian Exchange (UX)","Europe/Kiev",[1,5,[10,0,17,30]]],["Riga Stock Exchange (OMXR)","Europe/Riga",[1,5,[10,0,16,0]]],["Helsinki Stock Exchange (OMX)","Europe/Helsinki",[1,5,[10,0,18,30]]],["Johannesburg Stock Exchange (JSE)","Africa/Johannesburg",[1,5,[9,0,17,0]]],["Warsaw Stock Exchange (GPW)","Europe/Warsaw",[1,5,[9,0,17,30]]],["Budapest Stock Exchange (BSE)","Europe/Budapest",[1,5,[9,0,17,0]]],["Stockholm Stock Exchange (OMX)","Europe/Stockholm",[1,5,[9,0,17,30]]],["Vienna Stock Exchange","Europe/Vienna",[1,5,[8,55,17,35]]],["Malta Stock Exchange (MSE)","Europe/Malta",[1,5,[9,30,12,30]]],["Copenhagen Stock Exchange (CSE)","Europe/Copenhagen",[1,5,[9,0,17,0]]],["Oslo Stock Exchange (OSE)","Europe/Oslo",[1,5,[9,0,16,30]]],["Milan Stock Exchange (MTA)","Europe/Rome",[1,5,[9,0,17,25]]],["Frankfurt Stock Exchange (FWB) Eurex","Europe/Berlin",[1,5,[8,0,22,0]]],["Frankfurt Stock Exchange (FWB) Xetra","Europe/Berlin",[1,5,[9,0,17,30]]],["Swiss Exchange (SIX)","Europe/Zurich",[1,5,[9,0,17,30]]],["Berne eXchange (BX)","Europe/Zurich",[1,5,[9,0,16,30]]],["Luxembourg Stock Exchange (LuxSE)","Europe/Luxembourg",[1,5,[9,0,17,35]]],["Euronext Amsterdam (AMS)","Europe/Amsterdam",[1,5,[9,0,17,40]]],["Euronext Paris (EPA)","Europe/Paris",[1,5,[9,0,17,30]]],["Spanish Stock Exchange (BME)","Europe/Madrid",[1,5,[9,0,17,30]]],["London Stock Exchange (LSE)","Europe/London",[1,5,[8,0,16,30]]],["Irish Stock Exchange (ISE)","Europe/Dublin",[1,5,[8,0,16,30]]],["Nigerian Stock Exchange (NSE)","Africa/Lagos",[1,5,[10,0,16,0]]],["BM&amp;FBOVESPA","America/Sao_Paulo",[1,5,[10,0,17,30]]],["Buenos Aires Stock Exchange (BCBA)","America/Buenos_Aires",[1,5,[11,0,17,0]]],["New York Stock Exchange (NYSE)","America/New_York",[1,5,[9,30,16,0]]],["NASDAQ","America/New_York",[1,5,[9,30,16,0]]],["Toronto Stock Exchange (TSX)","America/Toronto",[1,5,[9,30,16,0]]],["Mexican Stock Exchange (BMV)","America/Mexico_City",[1,5,[8,30,15,0]]],];var u="<table><tr><th>Market</th><th>Status</th><th>Opens in</th><th>Closes in</th><th>Market Time</th><th>Timezone</th></tr>";document.getElementById("local").innerHTML="Your local time: "+d.format("LLLL ZZ");for(var h=0;h<s.length;h++){var r=d.tz(s[h][1]);var l=r.clone().startOf("day");var g=false;var t=null;var q=null;for(var f=2;f<s[h].length;f++){if(r.day()<s[h][f][0]){t=l.clone().day(s[h][f][0]);t.hour(s[h][f][2][0]);t.minute(s[h][f][2][1]);continue}else{if(r.day()+1>s[h][f][1]){var b=f+1;if(b>=s[h].length){b=2}t=l.clone().day(s[h][b][0]);t.hour(s[h][b][2][0]);t.minute(s[h][b][2][1])}else{t=l.clone().day(r.day()+1);t.hour(s[h][f][2][0]);t.minute(s[h][f][2][1])}if(r.day()>s[h][f][1]){continue}}for(var e=2;e<s[h][f].length;e++){var a=l.clone().hour(s[h][f][e][0]).minute(s[h][f][e][1]);var p=l.clone().hour(s[h][f][e][2]).minute(s[h][f][e][3]);if(r.isBefore(a)){t=a}else{if(r.isBefore(p)){g=true;q=p}}}}u+="<tr><td>"+s[h][0]+"</td><td "+(g?'class="opened">Opened':'class="closed">Closed')+"</td><td>"+(g?"":minutesFormat(t.diff(r,"minutes")))+"</td><td>"+(g?minutesFormat(q.diff(r,"minutes")):"")+"</td><td>"+r.format("LLLL ZZ")+"</td><td>"+s[h][1]+"</td></tr>"}u+="</table>";document.getElementById("data").innerHTML=u};