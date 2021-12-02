var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

//   [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
//   ] 

    // thank you for checking out the Coding Meetup kata :)
    function findSenior(list) {
        // thank you for checking out the Coding Meetup kata :)
        
        let acc=0
        let arr=[]
           list.forEach(elem=>{
        
       if (acc<=elem.age){
       acc = elem.age
       arr.push(elem)
       }
     
      })
      return arr  
    }
    