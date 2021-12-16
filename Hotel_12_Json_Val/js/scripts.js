// what is the path to the JSON file?
const apiURL = '../hoteldata.json'

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

   for (i=0; i < myList.length; i++) {

    //image 1
    let myImageTag = document.createElement('img')
    myImageTag.className ='image'
    myImageTag.src = myList[i].photo
    myImageTag.alt = myList[i].name
    console.log(myList[i].photos)
 //figcaption
    let myCaptionTag = document.createElement('figcaption')
    myCaptionTag.className ='figCaption'
    myCaptionTag.textContent = myList[i].name
    
    //parent of image and figcaption
    let myFigureTag = document.createElement('figure')
    myFigureTag.className ='fig'
    myFigureTag.appendChild(myImageTag)
    myFigureTag.appendChild(myCaptionTag)

   
   //Address Text and icon
    let myCarTag = document.createElement('i')
    myCarTag.className = 'carIcon'
    myCarTag.className = 'fa fa-car'

    let myParagraphTag = document.createElement('p')
    myParagraphTag.className = 'addressText'
    myParagraphTag.textContent = myList[i].address

//address 
    let myAddressTag = document.createElement('span')
    myAddressTag.className = 'spanAddressTag'
    myAddressTag.appendChild(myCarTag)
    myAddressTag.appendChild(myParagraphTag)

   //Phone Text and icon
    let myPhoneIcon = document.createElement('i')
    myPhoneIcon.className = 'fa fa-phone'

    let myParTag = document.createElement('i')
    myParTag.className ='phone'
    myParTag.textContent = myList[i].phone

    let myPhoneTag = document.createElement('span')
    myPhoneTag.className = 'spanPhoneTag'
    myPhoneTag.appendChild(myPhoneIcon)
    myPhoneTag.appendChild(myParTag)

    //partent of address and phone
    
    let myDivTag = document.createElement('div')
    myDivTag.className = 'divTag'
    myDivTag.appendChild(myAddressTag)
    myDivTag.appendChild(myPhoneTag)

    //main div
    let mySectionTag = document.createElement('section')
    mySectionTag.className = 'sectionTag'
    mySectionTag.appendChild(myFigureTag)
    mySectionTag.appendChild(myDivTag)
   


    document.getElementById('cards').appendChild(mySectionTag)
   
   }

    
    
}); //end of "then" fat arrow function