function rectangleStarPattern(n, k){
    for(i=1; i<=n; i++){
        for(j=1; j<=k; j++){
            document.write(" * ");
        }
        document.write("<br>");
    }
}

rectangleStarPattern(4, 5);