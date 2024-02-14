document.addEventListener("DOMContentLoaded", function(event) {
    var field = document.getElementById("field");
    var ball = document.getElementById("ball");
    
    field.addEventListener("click", function(event) {
        var ballSize = ball.offsetWidth;
        var fieldRect = field.getBoundingClientRect();

        var clickX = event.clientX - fieldRect.left - ballSize/2;
        var clickY = event.clientY - fieldRect.top - ballSize/2;

        if (clickX < 0) {
            clickX = 0;
        } else if (clickX + ballSize > fieldRect.width) {
            clickX = fieldRect.width - ballSize;
        }

        if (clickY < 0) {
            clickY = 0;
        } else if (clickY + ballSize > fieldRect.height) {
            clickY = fieldRect.height - ballSize;
        }

        ball.style.left = clickX + "px";
        ball.style.top = clickY + "px";
    });
});