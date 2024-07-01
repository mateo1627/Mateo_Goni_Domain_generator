let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com,', '.es','.net'];

for (i = 0; i < pronoun.length; i++) {

    for (j = 0; j < adj.length; j++) {
        for (k = 0; k < noun.length; k++) {
         for(l=0; l<domain.length; l++){
            console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
         }
        }
    }
}