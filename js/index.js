	document.getElementById("restart").addEventListener("click", myRestarter);
	function myRestarter(){
		window.localStorage.removeItem('crawlerTracker');
		window.location.href = "https://express24.uz";
		chrome.storage.local.get(function(result){console.log(result)});
		// chrome.tabs.update({
		//      url: "https://express24.uz"
		// });
	}
	function myTracker(){
		document.getElementById("trackNumber").textContent = localStorage.getItem("crawlerTracker");
	}
	function demo(){
		console.log(localStorage.getItem("crawlerTracker"), "ok");
	}