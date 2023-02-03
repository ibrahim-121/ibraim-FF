// JavaScript Work In Side Menu Bar
$('#sideMenuIcon').click(function(){
    SideMenuOpenClose();
})
$('#contentOverly').click(function(){
    SideMenuOpenClose();
})

function SideMenuOpenClose(){
    let sideMenuBar = $('#sideMenuBar');
    let contentOverly = $('#contentOverly');

    if(sideMenuBar.hasClass('sideMenuClose')){
        sideMenuBar.removeClass('sideMenuClose');
        sideMenuBar.addClass('sideMenuOpen');
        /****/
        contentOverly.removeClass('contentOverlyClose');
        contentOverly.addClass('contentOverlyOpen');
    }
    else{
        sideMenuBar.addClass('sideMenuClose');
        sideMenuBar.removeClass('sideMenuOpen');
        /****/
        contentOverly.addClass('contentOverlyClose');
        contentOverly.removeClass('contentOverlyOpen');
    }
}