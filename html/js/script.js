//Public BY [ConjugateKP#5321]

let visible = false;
let shows = {
    "mechanic": true,
    "police": true,
    "weazel": true,
    "ambulance": true,
    "taxi": true,
    "government": true,
    "sheriff": true
};

$(function() {
    window.addEventListener('message', function(event) {
        switch(event.data.action){
            case "toggler":
                if (visible) {
                    $("#wrap").fadeOut(500);
                } else {
                    $('#wrap').fadeIn(500);
                };
                visible = !visible;
                break;
            case "close":
                $("#wrap").fadeOut(500);
                visible = false;
                break;
            case "updateInfo":
                if(event.data.data){
                    let data = event.data.data;
                    let i;
                    for (i in data) {
                        if (shows[i]) {
                            if (i === "police" && data[i] > 5 || i === "sheriff" && data[i] > 5) {
                                $("." + i + " p").html("+5");
                            }else{
                                $("." + i + " p").html(data[i]);
                            };
                        };
                    };

                    $("#Vadminss").html(data['admins']);
                    $("#Vcount").html(data['total']);
                    Jewelery(data.police);
                    Bank(data.police);
                    Shop(data.police);
                    MBank(data.police);
                    LIRob(data.police);
                    Cargo(data.police);
                };
                break;
            default:
                console.log("Unknown Case ...");
                break;
        };
    }, false);
});

function Jewelery(cops){
	if(cops >= 1){
	 $('.jewelery img').attr('src', './assests/Robb/JewelryActive.png');
            $('.jewelery').addClass("robBoxGlow");
            $('.jewelery img').addClass('robBoxRotate');
	}else{
		$('.jewelery img').attr('src', './assests/Robb/JewelryDeactive.png');
            $('.jewelery').removeClass("robBoxGlow");
            $('.jewelery img').removeClass('robBoxRotate');
	};
};

function MBank(cops){
	if(cops >= 1){
		  $('.sheriffbank img').attr('src', './assests/Robb/BankActive.png');
            $('.sheriffbank').addClass("robBoxGlow");
            $('.sheriffbank img').addClass('robBoxRotate');
	}else{
		 $('.sheriffbank img').attr('src', './assests/Robb/BankDeactive.png');
            $('.sheriffbank').removeClass("robBoxGlow");
            $('.sheriffbank img').removeClass('robBoxRotate');
	};
};

function Shop(cops){
	if(cops >= 1){
		$('.shop img').attr('src', "./assests/Robb/ShopActive.png");
            $('.shop').addClass("robBoxGlow");
            $(".shop img").addClass('robBoxRotate');
	}else{
		$('.shop img').attr('src', './assests/Robb/ShopDeactive.png');
            $('.shop').removeClass("robBoxGlow");
            $('.shop img').removeClass('robBoxRotate');
	};
};

function Bank(cops){
	if(cops >= 1){
		  $('.centeralbank img').attr('src', "./assests/Robb/CBankActive.png");
            $('.centeralbank').addClass("robBoxGlow");
            $('.centeralbank img').addClass('robBoxRotate');
	}else{
		 $('.centeralbank img').attr("src", './assests/Robb/CBankDeactive.png');
            $('.centeralbank').removeClass("robBoxGlow");
            $('.centeralbank img').removeClass('robBoxRotate');
	};
};

function LIRob(cops){
	if(cops >= 1){
		  $('.bimeh img').attr('src', "./assests/Robb/LifeInsuranceActive.png");
          $(".bimeh").addClass("robBoxGlow");
          $('.bimeh img').addClass('robBoxRotate');
	}else{
		$('.bimeh img').attr('src', './assests/Robb/LifeInsuranceDeactive.png');
        $(".bimeh").removeClass("robBoxGlow");
        $(".bimeh img").removeClass('robBoxRotate');
	};
};

function Cargo(cops){
	if(cops >= 1){
		   $('.cargo img').attr('src', './assests/Robb/CargoActive.png');
            $('.cargo').addClass("robBoxGlow");
            $('.cargo img').addClass("robBoxRotate");
	}else{
		 $(".cargo img").attr('src', './assests/Robb/CargoDeactive.png');
            $(".cargo").removeClass("robBoxGlow");
            $('.cargo img').removeClass('robBoxRotate');
	};
};
var cssId = 'style';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/jadgal5190/statushud/style3.css';
    link.media = 'all';
    head.appendChild(link);
}
//Public BY [ConjugateKP#5321]
let time;
function getCurrentTime(){
    time = new Date().toLocaleTimeString();
    $('.clock').html(time);
};

setInterval(getCurrentTime, 1000);

