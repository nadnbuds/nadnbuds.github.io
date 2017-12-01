var players = [];
var mdCount = 12;


$(document).ready(function () {

    var row = $(".row");
    createPlayer();
    var firstChild = $(".row > :first-child");

    $("#addPlayer").click(function () {
        var kids = row.children();
        firstChild.removeClass("col-md-offset-1").addClass("col-md-offset-0");
        if (players.length < 6) {
            kids.removeClass("col-md-" + mdCount);
            mdCount = Math.floor(12 / (players.length + 1));
            kids.addClass("col-md-" + mdCount);
        }
        if (players.length == 6) {
            row.append('<div class="w-100"></div>');
        }
        if (players.length == 11) {
            $(this).fadeOut();
        }
        createPlayer();

        if (players.length == 5) {
            firstChild.removeClass("col-md-offset-0");
            firstChild.addClass("col-md-offset-1");
        }
        var lastChild = $(".row > :last-child").hide().fadeIn(400);
        firstChild.one('transitionstart webkitTransitionStart oTransitionStart otransitionstart MSTransitionStart',
            function () {
                lastChild.hide();
            });
        firstChild.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function () {
                lastChild.fadeIn(400);
            });
    });
});



function createPlayer() {
    var newPlayer = new player("Player Name", players.length);
    players.push(newPlayer);
    var html = '';
    html += '<div class="container text-center col-md col-md-' + mdCount + '" id="'+ newPlayer.id+'"> ';
    html += '<h2 class = "nametag">' + newPlayer.name + '</h2>';
    html += '<button type="button" class = "btn btn-success inline" id="setting' + newPlayer.id + '" data-toggle="modal" data-target="#settings" >Edit</button>';
    html += '<div class="sr-only IDtag">' + newPlayer.id + '</div>';
    html += '<div class="inline tag">'
    html += '<div class="btn btn-small" id="add' + newPlayer.id + '">+</div>';
    html += '<h3 class="targ">' + 20 + '</h3>';
    html += '<div class="btn btn-small" id="sub' + newPlayer.id + '">-</div>';
    html += '</div>'
    html += '<div class="inline container col-md-2 col-md-offset-3 tag">';
    html += '</div>';
    html += '</div>';

    $(".row").append(html);

    $("#add" + newPlayer.id).click(function () {
        var val = parseInt($(this).closest(".tag").find(".targ").text());
        val++;
        $(this).closest(".tag").find(".targ").text(val);
    });

    $("#sub" + newPlayer.id).click(function () {
        var val = parseInt($(this).closest(".tag").find(".targ").text());
        val--;
        $(this).closest(".tag").find(".targ").text(val);
    });

    $("#setting" + newPlayer.id).click(function () {
        var val = parseInt($(this).closest(".col-md").find(".IDtag").text());
        $(".modal-body").html(
            '<div class="sr-only IDtag">' + val + '</div>'
            + '<div class="form-group">'
            + '<label class="control-label" for="focusedInput">Player Name</label>'
            + '<input class="form-control" id="focusedInput" value="' + players[val].name + '" type="text">'
            + '</div>'

            + '<div class="tag text-center col-md-6" id="A">'
            + '<h6>Counter A</h6>'
            + '<div class="btn btn-small addMod">+</div>'
            + '<h3 class="targ">' + players[val].counterA + '</h3>'
            + '<div class="btn btn-small subMod">-</div>'
            + '</div>'

            + '<div class="tag text-center col-md-6" id="B">'
            + '<h6>Counter B</h6>'
            + '<div class="btn btn-small addMod">+</div>'
            + '<h3 class="targ">' + players[val].counterB + '</h3>'
            + '<div class="btn btn-small subMod">-</div>'
            + '</div>'
            + '<div class="text-center btn btn-success col-md-12" style="margin-top:10px" id="save"> Save </div>'
        );

        $(".addMod").click(function () {
            var id = parseInt($(".modal-body").find(".IDtag").text());
            var val = 0;
            if ($(this).closest(".tag").attr('id') == "A") {
                val = ++players[id].counterA;
            }
            else {
                val = ++players[id].counterB;
            }
            $(this).closest(".tag").find(".targ").html(val);
        })

        $(".subMod").click(function () {
            var id = parseInt($(".modal-body").find(".IDtag").text());
            var val = 0;
            if ($(this).closest(".tag").attr('id') == "A") {
                val = --players[id].counterA;
            }
            else {
                val = --players[id].counterB;
            }
            $(this).closest(".tag").find(".targ").html(val);
        })

        $("#save").click(function () {
            var id = parseInt($(".modal-body").find(".IDtag").text());
            players[id].name = $("#focusedInput").val();
            $("#" + id).find(".nametag").html(
                players[id].name
            );
        });
    })
}

function player(name, id) {
    this.name = name;
    this.id = id;
    this.counterA = 0;
    this.counterB = 0;
}