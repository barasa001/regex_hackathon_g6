 // Validate Date of Birth
 const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/gm;
 const str = ``;
 let m;
 
 while ((m = regex.exec(str)) !== null) {
     if (m.index === regex.lastIndex) {
         regex.lastIndex++;
     }
     
     m.forEach((match, groupIndex) => {
         console.log(`Found match, group ${groupIndex}: ${match}`);
     });
    }