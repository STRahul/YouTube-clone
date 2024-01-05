
export function formatDuration(duration) {
    
    let d = duration.slice(2);
    if(!d.includes("S")){
       return d = d.replace('M',":0")
    }
    if(d.includes('M')){
        d = d.replace('M',":")
    }
    if(d.includes("H")){
        d = d.replace("H",":")
    }

    if(d.includes("S")){
        d = d.replace("S","")
    }
    
    return d;
}