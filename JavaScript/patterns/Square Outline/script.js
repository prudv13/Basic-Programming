function squareOutline(n){
    for(i=1; i<=n; i++){
        if(i===1 || i===n){
            for(j=1; j<=n; j++){
                document.write("*");
            }
        }
        else{
            for(k=1; k<=n; k++){
                if(k === 1 || k === n){
                    document.write("*");
                }
                else{
                    document.write("&nbsp; ");
                }
            }
        }
        document.write("<br>");
    }
}

squareOutline(10);