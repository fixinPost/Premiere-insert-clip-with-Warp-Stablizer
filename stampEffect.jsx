//GET SELECTED CLIP
var viewIDs = app.getProjectViewIDs();
//alert(viewIDs[0].toString())
var selectedItems = app.getProjectViewSelection(viewIDs[0]);
//GET ACTIVE TIMELINE
var userVidTrack = 0
var seq = app.project.activeSequence
var videoTracks = seq.videoTracks
var videoTrack = videoTracks[userVidTrack]
var clip = app.project.rootItem.children[2]
app.enableQE()
var now= qe.project.getActiveSequence().CTI.ticks
//alert(now.seconds.toString())
//GET THE PRE TIMELINE CLIP NODE IDS AND COMPARE TO
var preNodes = []
if(pre > 0){
for(i=0; i < pre;i++){
    try{
    preNodes.push(app.project.activeSequence.videoTracks[0].clips[i].nodeId)
    //alert('yo')
        }
    catch(er){}
    }
    }
//INSERT SELECTED CLIP INTO ACTIVE TIMELINE
app.project.activeSequence.videoTracks[0].insertClip(selectedItems[0], now)



//GET ACTIVE TIMELINE NUMITEMS
var pre = app.project.activeSequence.videoTracks[0].clips.numItems
//alert(pre.toString())

//GET NODES NOW THAT NEW CLIP IS INSERTED
var post = app.project.activeSequence.videoTracks[0].clips.numItems
var postNodes = []
for(i=0; i < post;i++){
    try{
    postNodes.push(app.project.activeSequence.videoTracks[0].clips[i].nodeId)
    //alert('yo')
        }
    catch(er){}
    }
    

//alert(preNodes.toString())
//alert(postNodes.toString())
var userClip = postNodes.filter(function(obj) { 
    return preNodes.indexOf(obj) == -1; 
});












var numItem = qe.project.getActiveSequence().getVideoTrackAt(0).numItems
var blankBoxes = []
var realTlInts = []
var realTlInts2 = []
var realClips = []
for(i=0; i < numItem;i++){
    
   var clip = qe.project.getActiveSequence().getVideoTrackAt(0).getItemAt(i);
   realTlInts.push(i)
   realTlInts2.push(i)
   
   //alert(numItem.toString())

try{
    
//clip.addVideoEffect(qe.project.getVideoEffectByName("Mosaic"))  
var x = clip.name
if(x == clip.name){
    //alert('test')
    realClips.push(i)
    }


}
catch (err){
//alert('error detected ' + i.toString())  

 blankBoxes.push(i)
    }
}
//alert(blankBoxes.toString() + ' ted')
//alert(realTlInts.toString() + ' ted')
/*
while (blankBoxes.length > 0){
    if(blankBoxes[0] == realTlInts[i])    
    //realTlInts.splice(blankBoxes[0],blankBoxes[0] + 1)
    blankBoxes.shift()
    }
alert(realTlInts.toString() + ' molly')
//alert(ml.toString())

//alert(blankBoxes.toString() + ' are blank boxes')
for(i=0; i < blankBoxes.length;i++){
    for(a=0 ; a < realTlInts.length ; a++){
        //alert('yo' + a.toString())
        if(blankBoxes[i] == realTlInts[a]){
        realTlInts.splice(a, a + 1)
        //alert(realTlInts.toString())
        }
        }
  // for(a=0; i < realTlInts.length;a++){
        //if(blankBoxes[i] == realTlInts[a]){
            //realTlInts.splice(a, a + 1)
            
            //}
      // }
     
    }
    */
//alert(realTlInts.toString() + ' molly')
//alert(realClips.toString() + ' are real clips' )
//GET CTI AND CLIP START THAT MATCHES
var clip = app.project.activeSequence.videoTracks[0].clips
var now= qe.project.getActiveSequence().CTI.ticks
for(i=0; i < post;i++){
    if(now == clip[i].start.ticks){
   //     alert(' match found at '+i.toString())
        var userFinalClip = app.project.activeSequence.videoTracks[0].clips[i]
        var userFinalClip = i
        
        }
    }
//alert((realClips[userFinalClip]).toString())
//alert(userFinalClip.toString() + ' done')

var clip = qe.project.getActiveSequence().getVideoTrackAt(0).getItemAt(realClips[userFinalClip])
//var clip = realClips[userFinalClip]
clip.addVideoEffect(qe.project.getVideoEffectByName("Warp Stabilizer")) 
