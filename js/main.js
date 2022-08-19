let bgColors=['#f25454','#4e9cb5','#24bca4','#46cad7','#c86f98','#ee8f67','#e4d20c','#6b798f']
for(var i=0;i<bgColors.length;i++)
{
    $('.color-option li').eq(i).css('backgroundColor',bgColors[i])
}


var  currentWidth=$('.color-option').outerWidth();
$('.settingBox').css('left',-currentWidth)
$('.settingBox i').click(function()
{
    
    console.log(currentWidth);
    if($('.settingBox').css('left')=='0px')
    {
        $('.settingBox').animate({'left':-currentWidth},3000)
    }
    else{
        $('.settingBox').animate({'left':'0px'},3000)
    }
})


let advOff=$('.about').offset()
console.log(advOff);
$(window).scroll(function(){
  if($(window).scrollTop()>advOff)
  {
    $('.navbar').css('backgroundColor','red')
  }
})