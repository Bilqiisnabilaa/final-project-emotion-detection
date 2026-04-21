let RunSentimentAnalysis = ()=>{
    let textToAnalyze = document.getElementById("textToAnalyze").value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            // Langsung memuat teks balasan dari Server tanpa peduli statusCode karena server.py sudah memblokir teks kosong
            document.getElementById("system_response").innerHTML = xhttp.responseText;
        }
    };
    
    xhttp.open("GET", "/emotionDetector?textToAnalyze"+"="+encodeURIComponent(textToAnalyze), true);
    xhttp.send();
}
