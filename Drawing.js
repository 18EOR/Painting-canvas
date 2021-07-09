//Brush
var strokeColour = "black";

//Slider
var slider = document.getElementById("slider");
var sliderText =  document.getElementById("sliderText");
var sliding = false;

//Canvas
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var drawing = false;

//Colour
var blackBtn = document.getElementById("black");

//Drawing
window.addEventListener("load", ()=>{
	canvas.height = window.innerHeight /1.25;
	canvas.width = window.innerWidth /1.25;

	function startPosition()
	{
		drawing = true;
	}

	function endPosition()
	{
		drawing = false;
		c.beginPath();
	}

	function drawingFunction(e)
	{
		if (!drawing) return;

		//Stroke SetUp
		c.lineWidth = slider.value;
		c.strokeStyle = strokeColour;
		c.lineCap = "round";

		c.lineTo((e.clientX - canvas.offsetLeft), (e.clientY - canvas.offsetTop));
		c.stroke();
		c.beginPath();
		c.lineTo((e.clientX - canvas.offsetLeft), (e.clientY - canvas.offsetTop));
	}

	function resizeCanvas()
	{
		canvas.height = window.innerHeight - 200;
		canvas.width = window.innerWidth - 200;
	}

	function clearCanvas()
	{
		c.clearRect(0, 0, canvas.width, canvas.height);
	}
	
	//Canvas
	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mousedown", drawingFunction);
	canvas.addEventListener("mouseup", endPosition);
	canvas.addEventListener("mousemove", drawingFunction);

	document.getElementById("clearbtn").addEventListener("mousedown", clearCanvas);

	window.addEventListener("resize", resizeCanvas);

	//Slider
	slider.addEventListener("mousedown", updateSliderValue);
	slider.addEventListener("mousemove", updateSliderValue);
});

//Slider function
function updateSliderValue()
{
	slider = document.getElementById("slider");
	var val = document.getElementById("slider").value;

	if (val < 10)
	{
		sliderText.innerHTML = "Brush Size : 00" + val + "px";
	}
	else if (val < 100 && val >= 10)
	{
		sliderText.innerHTML = "Brush Size : 0" + val + "px";
	}
	else
	{
		sliderText.innerHTML = "Brush Size : " + val + "px";
	}
	//Actually changing stroke size
	c.lineWidth = slider.value;
}

function colourSetting(col)
{
	strokeColour = col;
	console.log("colour cahnged to - " + col);
}