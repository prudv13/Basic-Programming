function leftAnglePattern(n){
    for(i=1; i<=n; i++){
        for(j=1; j<=n-i; j++){
            document.write("&nbsp; ");
        }
        for(k=1; k<=i; k++){
            document.write("*");
        }
        document.write("<br>");
    }
}

leftAnglePattern(10);