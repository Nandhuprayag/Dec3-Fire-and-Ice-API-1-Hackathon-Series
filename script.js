  //Create a Container
  var Container=document.createElement('div');
  Container.setAttribute('class','container-md');

 async function getdata()
  {
    try {
      var request=await fetch('https://www.anapioficeandfire.com/api/books')
      var data=await request.json();

      console.log(data)
      for(let i=0;i<data.length;i++)
      {

       var card=document.createElement('div');
       card.innerHTML=`Name: ${data[i].name}  isbn : ${data[i].isbn} No.of pages: ${data[i].numberOfPages} Authors:${data[i].authors} Publishers:${data[i].publisher} Released On: ${data[i].released}  `
       card.style.borderRadius='9px'

       Container.append(card)


      }

    } catch (error) {
      console.log(error) 
    }
     


  }

  getdata()


 document.body.append(Container);


