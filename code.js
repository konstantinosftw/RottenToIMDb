rt_url = document.getElementById("rottenTomatoesTomatoMeterScore").href;

$.getJSON('http://allorigins.us/get?url=' + rt_url + '&callback=?', function(data){
	var rt_page = data.contents;
  a = rt_page.split('<span class="subtle superPageFontColor">Critics Consensus:</span>')[1];
  b = a.split("</p>")[0];
	document.getElementById('rottenTomatoesAverage').remove();
	document.getElementById('rottenTomatoesAudienceAverage').innerHTML = "<b> Consensus: </b>" + b;
	document.getElementById('rottenTomatoesAudienceAverage').style.padding = "25px 15px 15px 15px" ;
	document.getElementById('rottenTomatoesReviewCount').remove();
	document.getElementById('rottenTomatoesConsensus').remove();
	
	audience = rt_page.split('<span class="superPageFontColor" style="vertical-align:top">')[1];
	aud = Number(audience.split('%</span>')[0]);

	if (aud < 60) {
	  pop = "spilled";
	} else {
	  pop = "upright";
	}
	document.getElementById('rottenTomatoesAudience').innerHTML = '<p class="rt-credits">Audience</p><div class="rtIcon ' + pop + '"></div>' + aud + "%";
});
