function animateSlider(){
	var guiImg = $('#obr1');
	var mappingImg = $('#obr2');
	var exportImg = $('#obr3');
	var arrow1 = $('#arr1');
	var arrow2 = $('#arr2');

	var browserWidth = $(window).width();
	console.log("browserWidth: " + browserWidth);

	var startPosition = browserWidth + 50;

	var endPosition = 0;
	console.log(mappingImg.position().left);

	/*var guiImgEndPosition = guiImg.position().left;*/
	/*var exportImgEndPosition = exportImg.position().left;*/

	var guiWidth = guiImg.width();
	var guiHeight = guiImg.height();
	var mappingWidth = mappingImg.width();
	var mappingHeight = mappingImg.height();
	var exportWidth = exportImg.width();
	var exportHeight = exportImg.height();
	var arrWidth = arrow1.width();
	var arrHeight = arrow1.height();

	guiImg.width(0);
	guiImg.height(0);
	mappingImg.width(0);
	mappingImg.height(0);
	exportImg.width(0);
	exportImg.height(0);
	arrow1.height(0);
	arrow1.width(0);
	arrow2.width(0);
	arrow2.height(0);

	guiImg.css({left: startPosition});
	mappingImg.css({left: startPosition});
	exportImg.css({left: startPosition});
	arrow1.css({left: startPosition});
	arrow2.css({left:startPosition});

	guiImg.animate({
		left: endPosition,
		width: guiWidth,
		height: guiHeight

	}, 1000,  "swing", function(){
		arrow1.animate({
			left: endPosition,
			width: arrWidth,
			height: arrHeight
		}, 500, "swing", function(){
			mappingImg.animate({
				left: endPosition,
				width: mappingWidth,
				height: mappingHeight
			}, 1000,  "swing", function(){
				arrow2.animate({
					left: endPosition,
					width: arrWidth,
					height: arrHeight
				}, 500, "swing", function(){
					exportImg.animate({
						left: endPosition,
						width: exportWidth,
						height: exportHeight
					}, 1000,  "swing",function() {

					});
				});
			});
		});
	});




	/*console.log("gui end: " + guiImgEndPosition);*/
	/*console.log("export left postion: " + exportImgEndPosition);*/

	/*mappingImg.position({
		left: startPosition
	});*/


	/*guiImg.animate({
                left: 0
    }, 500, function() {
    	console.log("gui end: " + guiImg.position().left);
    });*/

	/*mappingImg.offset({
		left: startPosition
	});

	exportImg.offset({
		left: startPosition
	});*/


/*
	guiImg.animate({
                left: guiImgEndPosition + "px"
    }, 500);

    mappingImg.animate({
                left: mappingImgEndPosition
    }, 500);

    exportImg.animate({
                left: exportImgEndPosition
            }, 500);*/
}