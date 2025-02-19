// Por aqui todo o conteudo importante do site é importado, navegações padrões(navbar) e textos


$(document).ready(function() {
    $("#blogs-content").load("blogs.html");
});


$(document).ready(function() {
    $("#blogs-nav-content").load("../blogs-nav.html");
});


$(document).ready(function() {
    $("#content-sobreosite").load("../datatext/sobre-o-site.html");
});





$(document).ready(function() {
    $("#navbar-content").load("../datahead/navbar.html");
});

$(document).ready(function() {
    $("#navendbar-content").load("../datahead/navendbar.html");
});
