var toggle = "Off";
var status = "True";
var btnToggle = document.getElementById("btnStartStop");

function startstop() {
	if (toggle == "Off")
	{
		toggle = "On";
		status = "True";
		btnToggle.innerHTML = "Stop Sniffer";
		btnToggle.className = "btn btn-danger";
	}

	else 
	{
		toggle = "Off";
		status = "False";
		btnToggle.innerHTML = "Start Sniffer";
		btnToggle.className = "btn btn-success";
	}
}