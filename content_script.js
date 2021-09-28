function setupCopyCmd(node){
    let hr = document.createElement('hr');
    node.appendChild(hr);
    let link = document.createElement('a');
    link.textContent = "Copy";
    let cmdText = node.getElementsByClassName('command')[0].textContent;
    node.appendChild(link);

    link.addEventListener('click',function(){
        navigator.clipboard.writeText(cmdText);
        console.log("Copied text: " + cmdText);
    });

}

function setupCopyLink(node) {
    let linkCollection = node.getElementsByClassName('ulink');
    if(linkCollection.length > 0) {
        let link = linkCollection[0];
        let linkText = link.textContent.trim();
        let newLink = document.createElement('a');
        newLink.textContent = " Copy Link";
        newLink.style.color = "#55f";
        newLink.style.fontWeight = "bold";
        newLink.style.textDecoration = "underline";
        link.parentNode.appendChild(newLink);
        newLink.addEventListener('click', function(){
            navigator.clipboard.writeText(linkText);
            console.log("Copied text: " + linkText);
        })
    }
}

function init() {
    console.log("Running init function");
    let cmdNodes = Array.from(document.getElementsByClassName('userinput')).concat(Array.from(document.getElementsByClassName('root')));
    for(var node of cmdNodes) {
        setupCopyCmd(node);
    }

    for(var node of document.getElementsByClassName('listitem')){
        setupCopyLink(node);
    }

    let depSections = Array.from(document.getElementsByClassName('required')).concat(Array.from(document.getElementsByClassName('recommended')).concat(Array.from(document.getElementsByClassName('optional'))));
    for(var section of depSections) {
        let links = section.getElementsByTagName('a');
        for(link of links) {
            console.log(link);
            link.setAttribute("target","_blank");
            console.log("target set");
        }
    }
}

console.log("Running content script");
init();
