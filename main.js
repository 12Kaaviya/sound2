function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/112dOP3NB/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}