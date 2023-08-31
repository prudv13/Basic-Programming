function rightAnglePattern(n){
    for(i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            document.write(" * ");
        }
        document.write("<br>");
    }
}

rightAnglePattern(10);