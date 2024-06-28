function cercaScrivi(selector, testo, callbackFn){//Il parametro callbackfn è in realtà una funzione Che lo sviluppatore dovrà inserire dall'esterno quando vuole utilizzare la funzione cercaScrivi, tale funzione potrà essere predefinita all'interno dello script oppure generata al volo in fase di invocazione della funzione 

    const target = document.querySelector(selector)//Cerco un elemento in base al valore del parametro selector.  
    target.innerHTML = callbackFn(testo)//La funzione Che verrà fornita come callback, viene utilizzata per elaborare il valore del parametro testo. Prima che questo venga inserito nella proprietà in HTML dell'elemento target 

}


cercaScrivi('#test1','ciao',t => `<b>${t}</b>`)//Esempio uno. L'elemento con id test1 viene cercato e al suo interno viene scritta la parola "ciao". Il terzo parametro è una funzione di callback che nomina momentaneamente il testo come t e definisce che quel testo dovrà essere trasformato in una stringa che si trova all'interno di un tag <b></b>. 
cercaScrivi('#test2','Elemento 2',grassetto)//Esempio due. L'elemento con ID test due viene cercato E al suo interno viene scritto il testo Elemento 2. Tale testo verrà trasformato secondo le modalità descritte dalla funzione grassetto che trovi più in basso  
cercaScrivi('#test3','Elemento 3',corsivo)//Esempio tre. L'elemento con id test3 viene preso in causa e il testo al suo interno viene scritto secondo le istruzioni presenti all'interno della funzione chiamata Corsivo 
cercaScrivi('#test4','Elemento 4',maiuscolo)//Esempio quattro, l'elemento con id test4 viene preso in causa e il testo al suo interno viene scritto secondo le istruzioni presenti all'interno della funzione chiamata maiuscolo. 

function grassetto(testo){
    return `<b>${testo}</b>`
}
function corsivo(testo){
    return `<i>${testo}</i>`
}
function maiuscolo(testo){
    return testo.toUpperCase()
}
