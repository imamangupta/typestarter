import html2canvas from 'html2canvas';

export const CaptureScreen =(elementId,filename,filetype,background="#222222")=>{
    const element = document.getElementById(elementId);
    if(!element){
        return;
    }
    html2canvas(element,{
        backgroundColor:background
    }).then((canvas)=>{
        let image = canvas.toDataURL(filetype);
        const a = document.createElement('a');
        a.href = image;
        a.download = filename;
        a.click();
    }).catch(err=>{
        console.error("we cannot take the screenshot..");
    })
}