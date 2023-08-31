function squareStarPattern(n){
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            document.write(" *");
        }
        document.write("<br>");
    }
}

squareStarPattern(10);