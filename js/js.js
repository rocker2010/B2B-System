(function() {
	$.scrollUp();
	$('[data-toggle="tooltip"]').tooltip();
})();
$(".mainSubmenu ul li .prosmore").prepend("<div class='closeAction'><button class='closeMenu'><img src='css/img/close.png'></button></div>");
//$('#dropdownWrapper').on('shown.bs.dropdown', function showDropdown() {
//	$(".content").css("left", $menu.outerWidth());
//	$(".nav-toggle").addClass("active");
//});
//$('#dropdownWrapper').on('hidden.bs.dropdown', function showDropdown() {
//	$(".content").css("left", 0);
//	$(".nav-toggle").removeClass("active")
//});

if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	$('#dropdownWrapper .all-nav').attr("data-toggle", "");
	$('#dropdownWrapper .all-nav').click(function() {
		$('#dropdownWrapper').toggleClass("open");
		$(".nav-toggle").toggleClass("active");
	})
} else {
	$('#dropdownWrapper').hover(function() {
		$(this).addClass("open");
		$(".nav-toggle").addClass("active");
	}, function() {
		$(".nav-toggle").removeClass("active")
	})
}

$(".mainSubmenu").height(document.documentElement.clientHeight - 118);
var $menu = $(".menu"),
	$content = $(".content");

$menu.menuAim({
	activate: activateSubmenu,
	deactivate: deactivateSubmenu,
	enter: function() {
		this.activate();
	},
	exitMenu: function() {
		return true;
	}
});

function checkHeight() {
	var mHeight = document.documentElement.clientHeight;
	var cHeight = $(".content").height() + 97;
	if(cHeight < mHeight) {
		$("footer").css("position", "absolute");
	}
}

function activateSubmenu(row) {
	var $row = $(row),
		submenuId = $row.data("submenuId"),
		$submenu = $("#" + submenuId),
		width = document.documentElement.clientWidth / 2,
		height = document.documentElement.clientHeight - 98;
	//		height = $menu.outerHeight(),
	mwidth = $menu.outerWidth();
	// Show the submenu
	$submenu.css({
		display: "block",
		top: 0,
		left: mwidth, // main should overlay submenu
		width: width, // main should overlay submenu
		height: height // padding for main dropdown's arrow
	});
	//	$content.css({
	//		left: width + 200
	//	});
	$row.addClass("prosahover");
}

function deactivateSubmenu(row) {
	var $row = $(row),
		submenuId = $row.data("submenuId"),
		$submenu = $("#" + submenuId);
	$submenu.css("display", "none");
	$row.removeClass("prosahover");
	//	$(".content").css("left", $menu.outerWidth());
};

//$(".menu li,.content").click(function(e) {
//	e.stopPropagation();
//});

$(".closeAction").click(function() {
	$(".prosmore").css("display", "none");
	$("li.prosahover").removeClass("prosahover");
	$(".menuBox.open").removeClass("open");
	$(".nav-toggle").removeClass("active")
});

$(".toggle").click(function() {
	$(this).parent().toggleClass("toggle-form");
});